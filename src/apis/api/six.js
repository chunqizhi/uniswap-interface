import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/USDT
// const trsAddr = `0x996c26E85C40dC5A2eF4aAF96E286Af1Cf7C58E1` // pre
// const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

// const trsUsdtPairAddr = `0x70cfe24da1999133c24f97f18995cfc79aa77273` // pre-next-pair
// const trsUsdtPoolAddr = `0x93526835998E37463f1B4f685E3C69B669410C65` // pre-next-pool
// 
// const trsAddr = `0x3493a9144671E76E750B2cf156dA6e78f4a626a3` // pre
// const usdtAddr = `0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd` // next

// const trsUsdtPairAddr = `0x8476582F1801F116D31C03f9831bBE3f7828C672` // pre-next-pair
// const trsUsdtPoolAddr = `0x874119372db96CF7dc514795D867b108Cb8dAAe9` // pre-next-pool
const trsAddr = `0x5fe4b862FCc043DfE5971D411815ed3C971146b6` // pre-coin
const usdtAddr = `0xec95835664d01A49199d8f7729286aF96D93a010` // next-coin
const trsUsdtPairAddr = `0x3f23f3e779094d3f329aa853bd9b29c1ec5a8424` // pre-next-pair
const trsUsdtPoolAddr = `0x5192D50084A0DDbafcf8473fA2664A135cbffB44` // pre-next-pool

const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TRS/USDT
const huiwanTokenABI = trsAbi //pre-abi
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