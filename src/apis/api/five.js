import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi

import { husdAbi } from '../../abi/husd.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  USDT/HUSD
const trsAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // pre
const usdtAddr = `0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047` // next

const trsUsdtPairAddr = `0x7ea46b5ffa6b2fac38bb778785117a1cd6f70b50` // pre-next-pair
const trsUsdtPoolAddr = `0x474eCa0527A6d1F9C0868ad9616e27177a1D45d5` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next  USDT/HUSD
const huiwanTokenABI = husdAbi //pre-abi
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