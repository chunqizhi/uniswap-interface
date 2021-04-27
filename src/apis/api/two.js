import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi

import { usdtAbi } from '../../abi/usdt.abi.js' // pre-abi
import { hbtcAbi } from '../../abi/hbtc.abi.js' // next-abi

import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next USDT/HBTC
const trsAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // pre
const usdtAddr = `0x66a79d23e58475d2738179ca52cd0b41d73f0bea` // next
const trsUsdtPairAddr = `0x17d05277ce31b798f0b759a689fbe3985acdf2d4` // pre-next-pair
const trsUsdtPoolAddr = `0x49D1354dCe2C2b2FbB1cb91854832C08937a1Fbd` // pre-next-pool

const huiwanTokenAddr = trsAddr
const usdtTokenAddr = usdtAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next USDT/HBTC
const huiwanTokenABI = usdtAbi //pre-abi
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