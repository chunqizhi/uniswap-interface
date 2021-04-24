import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { htAbi } from '../../abi/ht.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/HT
const trsAddr = `0x4af01cBe97b5e7A2579344dDDB75250a87ef118F` // pre
const usdtAddr = `0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F` // next

const trsUsdtPairAddr = `0x369fc85abab2ac6156b4cf3de3c72ca6e4f9e26a` // pre-next-pair
const trsUsdtPoolAddr = `0x8a83d7747BDA9d27489eb0F701Da530C39CB6fD2` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TRS/HT
const huiwanTokenABI = trsAbi //pre-abi
const usdtTokenABI = htAbi //next-abi
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