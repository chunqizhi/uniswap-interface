import { pairAbi } from '../../abi/pair.abi.js' // huiwanUsdtMdexABI
import { poolAbi } from '../../abi/pool.abi.js' //  huiwanUsdtLoopABI
import { trsAbi } from '../../abi/trs.abi.js' // huiwanTokenABI
import { usdtAbi } from '../../abi/usdt.abi.js' // usdtTokenABI
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  BXH/USDT
const trsAddr = `0xcbd6cb9243d8e3381fea611ef023e17d1b7aedf0` // pre
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

const trsUsdtPairAddr = `0x86e83d97edac3d85ea1c3b6604ceb0e09842cd7f` // pre-next-pair
const trsUsdtPoolAddr = `0x300aCd3B184bb6c415697D1fb61339dc1CDE3374` // pre-next-pool


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