import type { NextApiRequest, NextApiResponse } from 'next';
import { Like } from 'typeorm';
import { getDataSource } from '../../../data-source';
import { Genero } from '../../../entity/Genero';

export default async function request(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      all(req, res);
      break;

    case 'POST':
      save(req, res);
      break;

    case 'DELETE':
      remove(req, res);
      break;

    default:
      res.status(405).end(`${req.method} Not Allowed`);
      break;
  }
}

async function save(req: NextApiRequest, res: NextApiResponse) {
  const entidad = new Genero();
  entidad.id = req.body.data.id;
  entidad.codigo = req.body.data.codigo;
  entidad.descripcion = req.body.data.descripcion;

  const AppDataSource = await getDataSource();
  const data = await AppDataSource.manager.save(entidad);
  res.status(200).json(data);
}

async function remove(req: NextApiRequest, res: NextApiResponse) {
  const AppDataSource = await getDataSource();
  const entidad = await AppDataSource.manager
    .getRepository(Genero)
    .findOneBy({ id: req.body });

  await entidad?.remove();

  res.status(200).json(req.body);
}

async function all(req: NextApiRequest, res: NextApiResponse) {
  const take: number = Number(req.query.size) || 5;
  const page: number = Number(req.query.page) || 0;
  const search: string = String(req.query.search);

  const AppDataSource = await getDataSource();
  const [result, total] = await AppDataSource.manager
    .getRepository(Genero)
    .findAndCount({
      take: take,
      skip: page * take,
      where: search ? { descripcion: Like(`%${search}%`) } : {}
    });

  const hasMore = page * take + take <= total;

  res.status(200).json({ result, total, hasMore });
}
