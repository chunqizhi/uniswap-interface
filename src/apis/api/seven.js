import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { ttqAbi } from '../../abi/ttq.abi.js' // pre-abi
import { htAbi } from '../../abi/ht.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TTQ/HT
const ttqAddr = `0x7CC64Bee94bA4e40cb609e64B5C72c12d7f2A207` // pre
const usdtAddr = `0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F` // next

const trsUsdtPairAddr = `0x5569bbf9c0e17b6da744617b570e759aa394ad75` // pre-next-pair
const trsUsdtPoolAddr = `0x8a9FF17637d1d4486CE2F1B326f803aC9809bd04` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = ttqAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TTQ/HT
const huiwanTokenABI = ttqAbi //pre-abi
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