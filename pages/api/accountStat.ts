// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAddressStat } from '../../features/ethChain/services/account'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {address} = JSON.parse(req.body)
  const stat = await getAddressStat(address)
  res.status(200).json(stat)
}
