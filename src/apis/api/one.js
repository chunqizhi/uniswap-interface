import { pairAbi } from '../../abi/pair.abi.js' // pair
import { poolAbi } from '../../abi/pool.abi.js' //  pool
import { ethAbi } from '../../abi/eth.abi.js' // pre-abi
import { hbtcAbi } from '../../abi/hbtc.abi.js' //next-abi

import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  ETH/HBTC
const trsAddr = `0x64FF637fB478863B7468bc97D30a5bF3A428a1fD` // pre-coin
const usdtAddr = `0x66a79d23e58475d2738179ca52cd0b41d73f0bea` // next-coin
const trsUsdtPairAddr = `0xd7e4615ac45ddb949121613cb638a801881de7d4` // pre-next-pair
const trsUsdtPoolAddr = `0xD64c9E76f5E716aC6BeF199A5255bfA0B4096219` // pre-next-pool


const huiwanTokenAddr = trsAddr
const usdtTokenAddr = usdtAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr


//  ETH/HBTC
const huiwanTokenABI = ethAbi //pre-abi
const usdtTokenABI = hbtcAbi //next-abi

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