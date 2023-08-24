import { NextApiRequest, NextApiResponse } from 'next';
import { getDataSource } from '../../../data-source';
import { EstadoCalle } from '../../../entity/EstadoCalle';

export default async function findOne(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const AppDataSource = await getDataSource();

  const _id: number = Number(req.query.id);

  const one = await AppDataSource.manager.findOne(EstadoCalle, {
    where: {
      id: _id
    }
  });

  res.status(200).json(one);
}
