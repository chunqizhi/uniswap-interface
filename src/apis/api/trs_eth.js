import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { trsAbi } from '../../abi/trs.abi.js' // pre-abi
import { ethAbi } from '../../abi/eth.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TRS/ETH
const trsAddr = `0x996c26E85C40dC5A2eF4aAF96E286Af1Cf7C58E1` // pre
const usdtAddr = `0x64FF637fB478863B7468bc97D30a5bF3A428a1fD` // next

const trsUsdtPairAddr = `0x5c2e8aca453904c6339cf33af6513da944d5241b` // pre-next-pair
const trsUsdtPoolAddr = `0xa6785e5255321295A90EE3a31A74c7cA1Ef99C80` // pre-next-pool


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