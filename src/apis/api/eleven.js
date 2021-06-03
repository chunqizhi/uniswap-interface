import { pairAbi } from '../../abi/pair.abi.js' // pair
import { poolAbi } from '../../abi/pool.abi.js' //  pool
import { htAbi } from '../../abi/ht.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' //next-abi

import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next HT-USDT
const trsAddr = `0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F` // pre-coin
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next-coin
const trsUsdtPairAddr = `0x9b5a473f83ab1807188bd60236d50550d39a16aa` // pre-next-pair
const trsUsdtPoolAddr = `0x2bEdb5505831ce3Ba53AAe53069139ed6E6DdF79` // pre-next-pool


const huiwanTokenAddr = trsAddr
const usdtTokenAddr = usdtAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr


//  HT-USDT
const huiwanTokenABI = htAbi //pre-abi
const usdtTokenABI = usdtAbi //next-abi

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