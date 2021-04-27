import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { htAbi } from '../../abi/ht.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/HT
const trsAddr = `0x6Db623116138E132D50B2d201B74A4ff13C1E017` // pre
const usdtAddr = `0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F` // next

const trsUsdtPairAddr = `0x907f96e7e1a47bea6083490fc8463a81bb98d96a` // pre-next-pair
const trsUsdtPoolAddr = `0xDC5EdFB05892791698f84BEf9A8857Bf9d1A8813` // pre-next-pool


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