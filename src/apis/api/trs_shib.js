import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { shibAbi } from '../../abi/shib.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/SHIB
const trsAddr = `0x996c26E85C40dC5A2eF4aAF96E286Af1Cf7C58E1` // pre
const usdtAddr = `0xC38072AA3F8E049De541223A9c9772132bB48634` // next

const trsUsdtPairAddr = `0xd902460d4b5ae529ecf4ff1a4cee67cd92a24e54` // pre-next-pair
const trsUsdtPoolAddr = `0xEA6df2E71341eaf0BD0B51b47998013804D40278` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TRS/SHIB
const huiwanTokenABI = trsAbi //pre-abi
const usdtTokenABI = shibAbi //next-abi
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