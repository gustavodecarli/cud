import type { NextApiRequest, NextApiResponse } from 'next';
import { getDataSource } from '../../../data-source';
import { Province } from '../../../entity/Province';

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
  const province = new Province();
  province.id = req.body.data.id;
  province.code = req.body.data.code;
  province.name = req.body.data.name;
  console.log(province);

  const AppDataSource = await getDataSource();
  const data = await AppDataSource.manager.save(province);
  res.status(200).json(data);
}

async function remove(req: NextApiRequest, res: NextApiResponse) {
  const AppDataSource = await getDataSource();
  const province = await AppDataSource.manager
    .getRepository(Province)
    .findOneBy({ id: req.body });

  await province?.remove();

  res.status(200).json(req.body);
}

async function all(req: NextApiRequest, res: NextApiResponse) {
  const take: number = req.query.size || 5;
  const page: number = req.query.page || 0;

  const AppDataSource = await getDataSource();
  const [result, total] = await AppDataSource.manager
    .getRepository(Province)
    .findAndCount({
      take: take,
      skip: page * take
    });

  const hasMore = page * take + take <= total;

  res.status(200).json({ result, total, hasMore });
}
