import { pairAbi } from '../../abi/pair.abi.js' // pair
import { poolAbi } from '../../abi/pool.abi.js' //  pool
import { ethAbi } from '../../abi/eth.abi.js' // pre-abi
import { hbtcAbi } from '../../abi/hbtc.abi.js' //next-abi

import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  ETH/HBTC
const trsAddr = `0xb4292e40B33daf0214364Fe27453110C69051D90` // pre-coin
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next-coin
const trsUsdtPairAddr = `0x6f26ddacd8b9c39deb1ef5aa742157a09c9a3a98` // pre-next-pair
const trsUsdtPoolAddr = `0x3e29F7FB187991DE1DDd7AFd7420870e28199665` // pre-next-pool


const huiwanTokenAddr = trsAddr
const usdtTokenAddr = usdtAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr


//  ETH/HBTC
const huiwanTokenABI = ethAbi //pre-abi
const usdtTokenABI = hbtcAbi //next-abi

const huiwanUsdtMdexABI = pairAbi
const huiwanUsdtLoopABI = poolAbi


const contract = new Contract({
    huiwanUsdtLoopAddr,
    huiwanTokenAddr,
    usdtTokenAddr,
    huiwanUsdtMdexAddr,
    huiwanUsdtLoopABI,
    huiwanTokenABI,
    usdtTokenABI,
    huiwanUsdtMdexABI
})

export default new API(contract)