import { pairAbi } from '../../abi/pair.abi.js' // huiwanUsdtMdexABI
import { poolAbi } from '../../abi/pool.abi.js' //  huiwanUsdtLoopABI
import { trsAbi } from '../../abi/trs.abi.js' // huiwanTokenABI
import { usdtAbi } from '../../abi/usdt.abi.js' // usdtTokenABI
import Contract from '../contract/index.js'
import API from '../contract/api.js'

const HtAddr = `0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F` // usdtTokenAddr
const TrsAddr = `0xb4292e40B33daf0214364Fe27453110C69051D90` //  huiwanTokenAddr
const TrsHTPairAddr = `0x2d269e91d7bcee61d89450c1cf64c63d1c93edc3` //  huiwanUsdtMdexAddr
const TrsHTPoolAddr = `0xb6179cDe34d2a2aDaE2E7028A608ab5B7730631a` //  huiwanUsdtLoopAddr



const usdtTokenAddr = HtAddr
const huiwanTokenAddr = TrsAddr
const huiwanUsdtMdexAddr = TrsHTPairAddr
const huiwanUsdtLoopAddr = TrsHTPoolAddr

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