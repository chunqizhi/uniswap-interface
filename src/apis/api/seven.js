import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { htAbi } from '../../abi/ht.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/HT
const trsAddr = `0xb9c3a831d3ce6056ab64dc2e40a506c129049dc0` // pre
const usdtAddr = `0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F` // next

const trsUsdtPairAddr = `0xd663afbf913880fa3ff3196bd01256c8ff88283f` // pre-next-pair
const trsUsdtPoolAddr = `0x10B5E279DE0153586B6f54031a6Fb63036cA97DF` // pre-next-pool


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