import fetch from 'node-fetch'
import qs from 'query-string'

const apiKey = process.env.ETHERSCAN_API_KEY as string
const baseUrl = "https://api.etherscan.io/api"


export const getNormalTransactionByAddress = async (address: string) => {
    const params = {
        module: 'account',
        action: 'txlist',
        address,
        startblock: 0,
        endblock:99999999999,
        page:1,
        offset: 0,
        sort:'desc',
        apikey: apiKey,
    }
    const result = await fetch(qs.stringifyUrl({url: baseUrl, query: params})).then(res => res.json())
    return result
}