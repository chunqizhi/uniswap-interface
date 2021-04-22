import { pairAbi } from '../../abi/pair.abi.js' // huiwanUsdtMdexABI
import { poolAbi } from '../../abi/pool.abi.js' //  huiwanUsdtLoopABI
import { trsAbi } from '../../abi/trs.abi.js' // huiwanTokenABI
import { usdtAbi } from '../../abi/usdt.abi.js' // usdtTokenABI
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  TPT/USDT 
const trsAddr = `0x9ef1918a9bee17054b35108bd3e2665e2af1bb1b` // pre
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

const trsUsdtPairAddr = `0x49119aae29f2f90f093b7e402d03776a1ce74d8c` // pre-next-pair
const trsUsdtPoolAddr = `0xE862dDA036eB855f93BaC83A9498B6cca4789D05` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

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