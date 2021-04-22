import { pairAbi } from '../../abi/pair.abi.js' // pair-abi
import { poolAbi } from '../../abi/pool.abi.js' // pool-abi

import { mdxAbi } from '../../abi/mdx.abi.js' // pre-abi
import { usdtAbi } from '../../abi/usdt.abi.js' // next-abi
import Contract from '../contract/index.js'
import API from '../contract/api.js'

// pre-next  MDX/USDT
const trsAddr = `0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c` //  pre
const usdtAddr = `0xa71EdC38d189767582C38A3145b5873052c3e47a` // next

const trsUsdtPairAddr = `0xe9aac23d6bcd2b8cf6fe785cb84adb430079d832` // pre-next-pair
const trsUsdtPoolAddr = `0x4BeFEDA34C97B1a6572B39DF7b425bc18E30BA80` // pre-next-pool


const usdtTokenAddr = usdtAddr
const huiwanTokenAddr = trsAddr
const huiwanUsdtMdexAddr = trsUsdtPairAddr
const huiwanUsdtLoopAddr = trsUsdtPoolAddr

// pre-next  MDX/USDT
const huiwanTokenABI = mdxAbi
const usdtTokenABI = usdtAbi
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