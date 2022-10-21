import { ethers } from 'ethers'

const rpc = process.env.ETH_WEB3_RPC_API
const providers = new ethers.providers.JsonRpcProvider(rpc)

export const getAddressStat = async (address: string) => {
    const balance = await providers.getBalance(address)
    return {
        balance: ethers.utils.formatEther(balance.toString()),
    }
}