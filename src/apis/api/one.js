import { pairAbi } from '../../abi/pair.abi.js' // huiwanUsdtMdexABI
import { poolAbi } from '../../abi/pool.abi.js' //  huiwanUsdtLoopABI
import { trsAbi } from '../../abi/trs.abi.js' // huiwanTokenABI
import { usdtAbi } from '../../abi/usdt.abi.js' // usdtTokenABI
import Contract from '../contract/index.js'
import API from '../contract/api.js'

const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // usdtTokenAddr
const trsAddr = `0x0c88c8698417f8ab01fbf6a8a595b35747a3c1e5` //  huiwanTokenAddr
const trsUsdtPairAddr = `0x0748328634d1c0d31b479735794b1371ea90170a` //  huiwanUsdtMdexAddr
const trsUsdtPoolAddr = `0x563b7476589cFEB6ef136Ea4FD9121bd1799F5FA` //  huiwanUsdtLoopAddr


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

const huiwanUsdtMdexABI = pairAbi
const huiwanUsdtLoopABI = poolAbi
const huiwanTokenABI = trsAbi
const usdtTokenABI = usdtAbi


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