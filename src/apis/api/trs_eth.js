import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { ethAbi } from '../../abi/eth.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/ETH
const trsAddr = `0x996c26E85C40dC5A2eF4aAF96E286Af1Cf7C58E1` // pre
const usdtAddr = `0x64FF637fB478863B7468bc97D30a5bF3A428a1fD` // next

const trsUsdtPairAddr = `0x7F3B3f0D7fBA9FB58eD2FaAD4b063a6730547ec6` // pre-next-pair
const trsUsdtPoolAddr = `0xb8595331dFAB4Bfc1af0dd8f71500a2a5FB68c4D` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TRS/ETH
const huiwanTokenABI = trsAbi //pre-abi
const usdtTokenABI = ethAbi //next-abi
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