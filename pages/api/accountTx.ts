// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getNormalTransactionByAddress } from '../../features/etherscan/services'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {address} = req.query
  const result = await getNormalTransactionByAddress(address as string)
  res.status(200).json(result)
}
