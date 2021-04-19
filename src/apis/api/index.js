import { pairAbi } from '../../abi/pair.abi.js' // huiwanUsdtMdexABI
import { poolAbi } from '../../abi/pool.abi.js' //  huiwanUsdtLoopABI
import { trsAbi } from '../../abi/trs.abi.js' // huiwanTokenABI
import { usdtAbi } from '../../abi/usdt.abi.js' // usdtTokenABI
import Contract from '../contract/index.js'

const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // usdtTokenAddr
const trsAddr = `0x709360fee9c87759f62c87aaff2948d37e1836ff` //  huiwanTokenAddr
const trsUsdtPairAddr = `0x241DBeb2e07B689ca089c9653FcB98aA6ee415bC` //  huiwanUsdtMdexAddr
const trsUsdtPoolAddr = `0x10Ed9299C30f39c2A61A9A39D82cD1dd826FfdC9` //  huiwanUsdtLoopAddr


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

const huiwanUsdtMdexABI = pairAbi
const huiwanUsdtLoopABI = poolAbi
const huiwanTokenABI = trsAbi
const usdtTokenABI = usdtAbi


export default new Contract({
    huiwanUsdtLoopAddr,
    huiwanTokenAddr,
    usdtTokenAddr,
    huiwanUsdtMdexAddr,
    huiwanUsdtLoopABI,
    huiwanTokenABI,
    usdtTokenABI,
    huiwanUsdtMdexABI
})