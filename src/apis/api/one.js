import { pairAbi } from '../../abi/pair.abi.js' // pair
import { poolAbi } from '../../abi/pool.abi.js' //  pool
import { ethAbi } from '../../abi/eth.abi.js' // pre-abi
import { hbtcAbi } from '../../abi/hbtc.abi.js' //next-abi

import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  ETH/HBTC  btc-usdt  usdt-btc 
const trsAddr = `0xC628257ceA4F150942291B7331330fB34DC0c3C2` // pre-coin
const usdtAddr = `0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd` // next-coin
const trsUsdtPairAddr = `0x91F88121BadB5708b8Af12d3146AB709BB5D636a` // pre-next-pair
const trsUsdtPoolAddr = `0x1711b25eD1f6E90968A8fe0F375b60D8766C98b5` // pre-next-pool


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