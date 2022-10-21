import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../services/prisma'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const accounts = await prisma.trackEvmAccount.findMany()
  res.status(200).json(accounts)
}
