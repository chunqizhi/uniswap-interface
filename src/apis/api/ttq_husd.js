import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi
import { ttqAbi } from '../../abi/ttq.abi.js' // pre-abi
import { husdAbi } from '../../abi/husd.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next TTQ/HUSD
const ttqAddr = `0x7CC64Bee94bA4e40cb609e64B5C72c12d7f2A207` // pre
const usdtAddr = `0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047` // next

const trsUsdtPairAddr = `0xc427816942bf1b92969b3213dd07c26923ee3ee1` // pre-next-pair
const trsUsdtPoolAddr = `0xE33fC398f7E39D63ffd8861028BA05D979Be8c5B` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = ttqAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next TTQ/HUSD
const huiwanTokenABI = ttqAbi //pre-abi
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