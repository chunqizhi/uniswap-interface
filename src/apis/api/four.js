import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { htAbi } from '../../abi/ht.abi.js' // pre-abi
import { husdAbi } from '../../abi/husd.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next HT/HUSD
const trsAddr = `0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F` // pre
const usdtAddr = `0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047` // next

const trsUsdtPairAddr = `0x1472eff05fc4a225097667eaa8e5cb4531dcf690` // pre-next-pair
const trsUsdtPoolAddr = `0xBB7330aB2FD568B40e91b2C1e5A242881c4D6219` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next HT/HUSD
const huiwanTokenABI = htAbi //pre-abi
const usdtTokenABI = husdAbi //next-abi
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