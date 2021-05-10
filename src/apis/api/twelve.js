import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi

import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  XF/USDT 
const trsAddr = `0x6Db623116138E132D50B2d201B74A4ff13C1E017` // pre
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

const trsUsdtPairAddr = `0x329629C5F4E45a55F0cfFe3A7c0b59e27697331F` // pre-next-pair
const trsUsdtPoolAddr = `0x50228D853B8696Df5108a1813133fCDf11e235f2` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next  xf/USDT 
const huiwanTokenABI = trsAbi //pre-abi
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