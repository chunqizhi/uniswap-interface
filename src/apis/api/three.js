import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { ethAbi } from '../../abi/eth.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  ETH/USDT
const ethAddr = `0x26A66606399d75a32c280823B1a77b41a1E6750a` // pre
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

const trsUsdtPairAddr = `0xce6388805cf60342257d02d111cb775bd10addcc` // pre-next-pair
const trsUsdtPoolAddr = `0x5614Ce3eA121c127e12c90F362b40dCEd8efd81c` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = ethAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next  ETH/USDT
const huiwanTokenABI = ethAbi //pre-abi
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