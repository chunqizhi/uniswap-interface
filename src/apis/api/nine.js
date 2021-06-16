import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { bxhAbi } from '../../abi/bxh.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  BXH/USDT
const bxhAddr = `0xcbd6cb9243d8e3381fea611ef023e17d1b7aedf0` // pre
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

const trsUsdtPairAddr = `0x777b45d82fb15e4ce1953a6807ade2960c654074` // pre-next-pair
const trsUsdtPoolAddr = `0x8D891f0AA4fC1d3C3d26277a09aDc9dFDB98C10E` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = bxhAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next  BXH/USDT
const huiwanTokenABI = bxhAbi //pre-abi
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