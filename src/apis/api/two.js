import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi

import { usdtAbi } from '../../abi/usdt.abi.js' // pre-abi
import { hbtcAbi } from '../../abi/hbtc.abi.js' // next-abi

import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next USDT/HBTC
const trsAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // pre
const usdtAddr = `0xE9229B5FC730A8449f2AfB9499aF6dA0Cd18Ac4a` // next
const trsUsdtPairAddr = `0x5661fb4b0a46ab47ce28a8961ae82c332941d12f` // pre-next-pair
const trsUsdtPoolAddr = `0x7F53f0830FF6CFFc7e2e7cb343437e1990eD562F` // pre-next-pool

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