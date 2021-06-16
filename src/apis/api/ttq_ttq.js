// import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { ttqAbi } from '../../abi/ttq.abi.js' // pre-abi
// import { ethAbi } from '../../abi/eth.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TTQ/TTQ
const ttqAddr = `0x7CC64Bee94bA4e40cb609e64B5C72c12d7f2A207` // pre
const usdtAddr = `0x996c26E85C40dC5A2eF4aAF96E286Af1Cf7C58E1` // next

const trsUsdtPairAddr = `0x7CC64Bee94bA4e40cb609e64B5C72c12d7f2A207` // pre-next-pair
const trsUsdtPoolAddr = `0xa4Bc935156484A5D37052eCe2478ADF19adE0eAa` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = ttqAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TTQ/TTQ
const huiwanTokenABI = ttqAbi //pre-abi
const usdtTokenABI = ttqAbi //next-abi
const huiwanUsdtMdexABI = ttqAbi
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