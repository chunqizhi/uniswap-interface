import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi

import { usdtAbi } from '../../abi/usdt.abi.js' // pre-abi
import { hbtcAbi } from '../../abi/hbtc.abi.js' // next-abi

import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next USDT/HBTC
const trsAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // pre
const usdtAddr = `0x66a79d23e58475d2738179ca52cd0b41d73f0bea` // next
const trsUsdtPairAddr = `0x47adf94e78376ae43f43ff0e7f516ab1105f86be` // pre-next-pair
const trsUsdtPoolAddr = `0x5101C2723735e073E2ceE42FD67dadD41f10f62b` // pre-next-pool

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