import One from './one.js'
import Two from './two.js'
import Three from './three.js'
import Four from './four.js'
import Five from './five.js'
import Six from './six.js'
import Seven from './seven.js'
import Eight from './eight.js'
import Nine from './nine.js'
import Ten from './ten.js'
import Eleven from './eleven.js'
import Twelve from './twelve.js'
import Thirteen from './thirteen.js'
import Fourteen from './fourteen.js'
import Fifteen from './fifteen.js'
import TrsEth from './trs_eth.js'
import HfilUsdt from './hfil_usdt.js'
import HdotUsdt from './hdot_usdt.js'
import TrsShib from './trs_shib.js'
import DogeUsdt from './doge_usdt.js'
import ShibUsdt from './shib_usdt.js'
import HltcUsdt from './hltc_usdt.js'
import UniUsdt from './uni_usdt.js'
import XrpUsdt from './xrp_usdt.js'
import HbchUsdt from './hbch_usdt.js'
import AdaUsdt from './ada_usdt.js'
import EosUsdt from './eos_usdt.js'
import EthHusd from './eth_husd.js'
import LinkUsdt from './link_usdt.js'
import AaveUsdt from './aave_usdt.js'
import TrsHusd from './trs_husd.js'
import TtqTtq from './ttq_ttq.js'
import Icon from './icon.js'
import Web3 from "web3";

import {
    multiNum,
    addNum
} from '../api/calc.js'

let gettrsrate=0,gettotalsupply=0

function getCurrentPool(type) {
    let API, coinInfo
    switch (type) {
        case "two":
            coinInfo = Icon[0]
            API = Two
            break;
        case "three":
            API = Three
            coinInfo = Icon[1]
            break;
        case "six":
            API = Six
            coinInfo = Icon[2]
            break;
        case "seven":
            API = Seven
            coinInfo = Icon[3]
            break;
        case "eleven":
            API = Eleven
            coinInfo = Icon[4]
            break;
        case "trshusd":
            API = TrsHusd
            coinInfo = Icon[5]
            break;
        case "ttqttq":
            API = TtqTtq
            coinInfo = Icon[6]
            break;
        default:
            console.log('error')
    }
    return {
        API,
        coinInfo
    }
}
gettotalSupply()
gettrsRate()

function getPoolListData(type) {
    return new Promise((resolve, reject) => {
        Promise.all([
            Two.getPoolData(),
            Three.getPoolData(),
            Six.getPoolData(),
            Seven.getPoolData(),
            Eleven.getPoolData(),
            TrsHusd.getPoolData(),
            TtqTtq.getPoolData(),

        ]).then(async res => {
            let coinRate = await getCoinRate() //  汇率
            let trsRate = await getTrsRate() //trs 价格
            let allBalance = 0
            let data = {
                "main": [],
                "ttq": []
            }
            let tvl, apy, isall = false
            Icon.forEach((item, index) => {
                // console.log('item =>',item)
                // precoin nextcoin 数量 2倍的usdt 取前/后币类的汇率 coinRate[0].rate
                switch (item.coin_price) {
                    case 'ETHPRE':
                        tvl = (((multiNum(res[index].precoin, 2)) * 1) * coinRate[0].rate).toFixed(2)
                        break;
                    case 'USDTPRE':
                        tvl = (((multiNum(res[index].precoin, 2)) * 1)).toFixed(2)
                        break;
                    case 'USDTNEXT':
                        tvl = (((multiNum(res[index].nextcoin, 2)) * 1)).toFixed(2)
                        break;
                    case 'HTPRE':
                        tvl = (((multiNum(res[index].precoin, 2)) * 1) * coinRate[5].rate).toFixed(2)
                        break;
                    case 'HTNEXT':
                        tvl = (((multiNum(res[index].nextcoin, 2)) * 1) * coinRate[5].rate).toFixed(2)
                        break;
                    case 'TRSPRE':
                        tvl = (((multiNum(res[index].precoin, 2)) * 1) * coinRate[1].rate).toFixed(2)
                        break;
                    case 'TTQONE':
                        tvl = (gettrsrate * gettotalsupply).toFixed(2)
                        break;
                    default:
                        console.log(`error`);
                }
                if (type !== 'all') {
                    if (res[index].supply === '0') {
                        apy = `0.00%`
                        tvl = `0.00`
                    } else {
                        // per_day 按月份
                        apy = (((res[index].per_day * trsRate.rate) / tvl) * 12 * 100).toFixed(2) + "%"
                    }
                    data[item.key_word].push({
                        ...item,
                        ...res[index],
                        tvl,
                        apy
                    })
                }
                allBalance = addNum(tvl, allBalance)
                if (res[index].supply !== '0') {
                    isall = true;
                }
            })
            if (type === 'all') {
                if (isall) {
                    resolve(allBalance)
                } else {
                    resolve(0)
                }
            } else {
                resolve(data)
            }
        })
    })
}
function getAllBlock() {
    return new Promise((resolve, reject) => {
        Promise.all([
            Two.getLastTime(),
            Three.getLastTime(),
            Six.getLastTime(),
            Seven.getLastTime(),
            Eleven.getLastTime(),
            TrsHusd.getLastTime(),
            TtqTtq.getLastTime(),
        ]).then(lastTime => {
            getAllRewardRate().then(allRate => {
                getAllStartTime().then(allTime => {
                    let allBalance = 0
                    allTime.forEach((item, index) => {
                        allBalance = allBalance + (lastTime[index] * 1 - item * 1) * allRate[index]
                    })
                    let a = allBalance + 1932500
                    resolve(a)
                })
            })
        }, error => {
            reject(error)
        })
    })
}
// 所有每秒奖励
function getAllRewardRate() {
    return new Promise((resolve, reject) => {
        Promise.all([
            Two.getRewardRate(),
            Three.getRewardRate(),
            Six.getRewardRate(),
            Seven.getRewardRate(),
            Eleven.getRewardRate(),
            TrsHusd.getRewardRate(),
            TtqTtq.getRewardRate(),
        ]).then(res => {
            resolve(res.map((item) => {
                return Web3.utils.fromWei(item, 'ether')
            }))
        }).catch(err => {
            reject(err)
        })
    })
}
//获取 单币数量
function gettotalSupply() {
    TtqTtq.getTotalSupply().then( res =>{
        gettotalsupply = Number(Web3.utils.fromWei(res, 'ether'))
    })
}
// 所有时间
function getAllStartTime() {
    return new Promise((resolve, reject) => {
        Promise.all([
            Two.getPoolStartTime(),
            Three.getPoolStartTime(),
            Six.getPoolStartTime(),
            Seven.getPoolStartTime(),
            Eleven.getPoolStartTime(),
            TrsHusd.getPoolStartTime(),
            TtqTtq.getPoolStartTime(),
        ]).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
//获取行情的每一个价格 判断usdt前/后
function getAllTrsRate(){
    return new Promise((resolve, reject) => {
        Promise.all([
            Six.getTrsRate(),
            Two.getTrsRate('USDTPRE'),
            Three.getTrsRate(),
            Five.getTrsRate('HUSD'),
            Eleven.getTrsRate(),
            HfilUsdt.getTrsRate(),
            HdotUsdt.getTrsRate(),
            DogeUsdt.getTrsRate('DOGE'),
            HltcUsdt.getTrsRate(),
            UniUsdt.getTrsRate(),
            XrpUsdt.getTrsRate('XRP'),
            HbchUsdt.getTrsRate(),
            AdaUsdt.getTrsRate('ADA'),
            EosUsdt.getTrsRate('EOS'),
            Eight.getTrsRate(),
            Nine.getTrsRate(),
            Twelve.getTrsRate(),
            ShibUsdt.getTrsRate(),
            LinkUsdt.getTrsRate(),
            AaveUsdt.getTrsRate(),
        ]).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
function getTrsRate() {
    return Six.getTrsRate()
}
// 获取单币ttq 价格
function gettrsRate() {
    Six.getTrsRate().then(
        res =>{
            gettrsrate = res.rate
        }
    )
}
//获取汇率
function getCoinRate() {
    return new Promise((resolve, reject) => {
        Promise.all([
            Three.getTrsRate(),
            Six.getTrsRate(),
            Eight.getTrsRate(),
            Nine.getTrsRate(),
            Ten.getTrsRate('TPT'),
            Eleven.getTrsRate()
        ]).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
export default {
    getCurrentPool,
    getPoolListData,
    getTrsRate,
    getAllBlock,
    getAllTrsRate,
}