
import Two from './two.js'
import Three from './three.js'
import Six from './six.js'
import Seven from './seven.js'
import Eight from './eight.js'
import Nine from './nine.js'
import Ten from './ten.js'
import Eleven from './eleven.js'
import TtqHusd from './ttq_husd.js'
import TtqTtq from './ttq_ttq.js'
import Icon from './icon.js'
import Web3 from "web3";

import {
    multiNum,
    addNum
} from '../api/calc.js'

let getttqrate=0,gettotalsupply=0

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
        case "ttqhusd":
            API = TtqHusd
            coinInfo = Icon[3]
            break;
        case "seven":
            API = Seven
            coinInfo = Icon[4]
            break;
        case "eleven":
            API = Eleven
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
getttqRate()

function getPoolListData(type) {
    return new Promise((resolve, reject) => {
        Promise.all([
            Two.getPoolData(),
            Three.getPoolData(),
            Six.getPoolData(),
            TtqHusd.getPoolData(),
            Seven.getPoolData(),
            Eleven.getPoolData(),
            TtqTtq.getPoolData(),

        ]).then(async res => {
            let coinRate = await getCoinRate() //  汇率
            let ttqRate = await getTtqRate() //ttq 价格
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
                    case 'TTQPRE':
                        tvl = (((multiNum(res[index].precoin, 2)) * 1) * coinRate[1].rate).toFixed(2)
                        break;
                    case 'TTQONE':
                        tvl = (getttqrate * gettotalsupply).toFixed(2)
                        break;
                    default:
                        console.log(`error`);
                }
                // if (type !== 'all') {
                    // 是否有人质押
                    if (res[index].supply === '0') {
                        apy = `0.00%`
                        tvl = `0.00`
                    } else {
                        // per_day 按月份
                        apy = (((res[index].per_day * ttqRate.rate) / tvl) * 12 * 100).toFixed(2) + "%"
                    }
                    data[item.key_word].push({
                        ...item,
                        ...res[index],
                        tvl,
                        apy
                    })
                // }
                allBalance = addNum(tvl, allBalance)
                if (res[index].supply !== '0') {
                    isall = true;
                }
            })
            if (type === 'all') {
                if (isall) {
                    resolve([allBalance,data.ttq])
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
            TtqHusd.getLastTime(),
            Seven.getLastTime(),
            Eleven.getLastTime(),
            TtqTtq.getLastTime(),
        ]).then(lastTime => {
            getAllRewardRate().then(allRate => {
                getAllStartTime().then(allTime => {
                    let allBalance = 0
                    allTime.forEach((item, index) => {
                        allBalance = allBalance + (lastTime[index] * 1 - item * 1) * allRate[index]
                    })
                    // let a = allBalance + 1932500
                    resolve(allBalance)
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
            TtqHusd.getRewardRate(),
            Seven.getRewardRate(),
            Eleven.getRewardRate(),
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
            TtqHusd.getPoolStartTime(),
            Seven.getPoolStartTime(),
            Eleven.getPoolStartTime(),
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
            Six.getTtqRate(),//
            Two.getTtqRate('USDTPRE'),//
            Three.getTtqRate(),//
            // Five.getTtqRate('HUSD'),
            Eleven.getTtqRate(),//
            // HfilUsdt.getTtqRate(),
            // HdotUsdt.getTtqRate(),
            // DogeUsdt.getTtqRate('DOGE'),
            // HltcUsdt.getTtqRate(),
            // UniUsdt.getTtqRate(),
            // XrpUsdt.getTtqRate('XRP'),
            // HbchUsdt.getTtqRate(),
            // AdaUsdt.getTtqRate('ADA'),
            // EosUsdt.getTtqRate('EOS'),
            // Eight.getTtqRate(),
            // Nine.getTtqRate(),
            // Twelve.getTtqRate(),
            // ShibUsdt.getTtqRate(),
            // LinkUsdt.getTtqRate(),
            // AaveUsdt.getTtqRate(),
        ]).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
function getTtqRate() {
    return Six.getTtqRate()
}
// 获取单币ttq 价格
function getttqRate() {
    Six.getTtqRate().then(
        res =>{
            getttqrate = res.rate
        }
    )
}
//获取汇率
function getCoinRate() {
    return new Promise((resolve, reject) => {
        Promise.all([
            Three.getTtqRate(),
            Six.getTtqRate(),
            Eight.getTtqRate(),
            Nine.getTtqRate(),
            Ten.getTtqRate('TPT'),
            Eleven.getTtqRate()
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
    getTtqRate,
    getAllBlock,
    // getAllTrsRate,
}