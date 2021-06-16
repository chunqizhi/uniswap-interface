import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { ttqAbi } from '../../abi/ttq.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TTQ/USDT
const ttqAddr = `0x7CC64Bee94bA4e40cb609e64B5C72c12d7f2A207` // pre
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

const trsUsdtPairAddr = `0xef09b2284eae0a8a07f874444026ea7091790fcf` // pre-next-pair
const trsUsdtPoolAddr = `0xA426cF3468B4Ed96A4CcDF909A5B1aDC7534361f` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = ttqAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TTQ/USDT
const huiwanTokenABI = ttqAbi //pre-abi
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