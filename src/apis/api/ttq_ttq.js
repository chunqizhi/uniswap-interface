// import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
// import { ethAbi } from '../../abi/eth.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/TRS
const trsAddr = `0x7CC64Bee94bA4e40cb609e64B5C72c12d7f2A207` // pre
const usdtAddr = `0x996c26E85C40dC5A2eF4aAF96E286Af1Cf7C58E1` // next

const trsUsdtPairAddr = `0x7CC64Bee94bA4e40cb609e64B5C72c12d7f2A207` // pre-next-pair
const trsUsdtPoolAddr = `0x479CBbB508729F3B0248c02c8db5786F74ABfe28` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TRS/TRS
const huiwanTokenABI = trsAbi //pre-abi
const usdtTokenABI = trsAbi //next-abi
const huiwanUsdtMdexABI = trsAbi
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