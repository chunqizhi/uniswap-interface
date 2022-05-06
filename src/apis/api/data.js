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
import Icon from './icon.js'
import Web3 from "web3";

import {
    multiNum,
    addNum
} from '../api/calc.js'


function getCurrentPool(type) {
    let API, coinInfo
    switch (type) {
        // case "one":
        //     coinInfo = Icon[0]
        //     API = One
        //     break;
        // case "two":
        //     coinInfo = Icon[1]
        //     API = Two
        //     break;
        // case "three":
        //     API = Three
        //     coinInfo = Icon[2]
        //     break;
        // case "four":
        //     API = Four
        //     coinInfo = Icon[3]
        //     break;
        // case "five":
        //     API = Five
        //     coinInfo = Icon[4]
        //     break;
        case "six":
            API = Six
            coinInfo = Icon[0]
            break;
        // case "seven":
        //     API = Seven
        //     coinInfo = Icon[6]
        //     break;
        // case "eight":
        //     API = Eight
        //     coinInfo = Icon[7]
        //     break;
        // case "nine":
        //     API = Nine
        //     coinInfo = Icon[8]
            break;
            // case "ten":
            //     API = Ten
            //     coinInfo = Icon[9]
            //     break;
        // case "eleven":
        //     API = Eleven
        //     coinInfo = Icon[9]
        //     break;
        // case "twelve":
        //     API = Twelve
        //     coinInfo = Icon[10]
        //     break;
        // case "thirteen":
        //     API = Thirteen
        //     coinInfo = Icon[11]
        //     break;
        // case "fourteen":
        //     API = Fourteen
        //     coinInfo = Icon[12]
        //     break;
        // case "fifteen":
        //     API = Fifteen
        //     coinInfo = Icon[13]
        //     break;
        // case "hfilusdt":
        //     API = HfilUsdt
        //     coinInfo = Icon[14]
        //     break;
        // case "hdotusdt":
        //     API = HdotUsdt
        //     coinInfo = Icon[15]
        //     break;
        // case "trsshib":
        //     API = TrsShib
        //     coinInfo = Icon[16]
        //     break;
        // case "trseth":
        //     API = TrsEth
        //     coinInfo = Icon[17]
        //     break;
        // case "dogeusdt":
        //     API = DogeUsdt
        //     coinInfo = Icon[18]
        //     break;
        // case "shibusdt":
        //     API = ShibUsdt
        //     coinInfo = Icon[19]
        //     break;
        // case "hltcusdt":
        //     API = HltcUsdt
        //     coinInfo = Icon[20]
        //     break;
        // case "uniusdt":
        //     API = UniUsdt
        //     coinInfo = Icon[21]
        //     break;
        // case "xrpusdt":
        //     API = XrpUsdt
        //     coinInfo = Icon[22]
        //     break;
        // case "hbchusdt":
        //     API = HbchUsdt
        //     coinInfo = Icon[23]
        //     break;
        // case "adausdt":
        //     API = AdaUsdt
        //     coinInfo = Icon[24]
        //     break;
        // case "eosusdt":
        //     API = EosUsdt
        //     coinInfo = Icon[25]
        //     break;
        // case "ethhusd":
        //     API = EthHusd
        //     coinInfo = Icon[26]
        //     break;
        // case "linkusdt":
        //     API = LinkUsdt
        //     coinInfo = Icon[27]
        //     break;
        // case "aaveusdt":
        //     API = AaveUsdt
        //     coinInfo = Icon[28]
        //     break;
        // case "trshusd":
        //     API = TrsHusd
        //     coinInfo = Icon[29]
        //     break;
        default:
            console.log('error')
    }
    return {
        API,
        coinInfo
    }
}

function getPoolListData(type) {
    return new Promise((resolve, reject) => {
        Promise.all([
            // One.getPoolData(),
            // Two.getPoolData(),
            // Three.getPoolData(),
            // Four.getPoolData(),
            // Five.getPoolData(),
            Six.getPoolData(),
            // Seven.getPoolData(),
            // Eight.getPoolData(),
            // Nine.getPoolData(),
            // Ten.getPoolData(),
            // Eleven.getPoolData(),
            // Twelve.getPoolData(),
            // Thirteen.getPoolData(),
            // Fourteen.getPoolData(),
            // Fifteen.getPoolData(),
            // HfilUsdt.getPoolData(),
            // HdotUsdt.getPoolData(),
            // TrsShib.getPoolData(),
            // TrsEth.getPoolData(),
            // DogeUsdt.getPoolData(),
            // ShibUsdt.getPoolData(),
            // HltcUsdt.getPoolData(),
            // UniUsdt.getPoolData(),
            // XrpUsdt.getPoolData(),
            // HbchUsdt.getPoolData(),
            // AdaUsdt.getPoolData(),
            // EosUsdt.getPoolData(),
            // EthHusd.getPoolData(),
            // LinkUsdt.getPoolData(),
            // AaveUsdt.getPoolData(),
            // TrsHusd.getPoolData(),

        ]).then(async res => {
            let coinRate = await getCoinRate() //  汇率
            let trsRate = await getTrsRate() //trs 价格
            let allBalance = 0
            let data = {
                "main": [],
                "flat": [],
                "ideas": []
            }
            let tvl, apy, isall = false
            Icon.forEach((item, index) => {
                console.log('item =>',item)
                // if (index == 14) { debugger }
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
                    default:
                        console.log(`error`);
                }
                console.log(`tvl`,tvl);
                if (type !== 'all') {
                    if (res[index].supply === '0') {
                        apy = `0.00%`
                        tvl = `0.00`
                    } else {
                        apy = (((res[index].per_day * trsRate.rate) / tvl) * 360 * 100).toFixed(2) + "%"
                    }
                    data[item.key_word].push({
                        ...item,
                        ...res[index],
                        tvl,
                        apy
                    })
                }
                console.log(`res`,res);
                allBalance = addNum(tvl, allBalance)
                // console.log('apy ==>', apy, 'tvl ==>', tvl)

                if (res[index].supply !== '0') {
                    isall = true;
                    // return;
                }

            })
            // Icon.forEach((item, index) => {
            //     if (res[index].supply !== '0') {
            //         isall = true;
            //         return;
            //     }
            // })
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
            // One.getLastTime(),
            // Two.getLastTime(),
            // Three.getLastTime(),
            // Four.getLastTime(),
            // Five.getLastTime(),
            Six.getLastTime(),
            // Seven.getLastTime(),
            // Eight.getLastTime(),
            // Nine.getLastTime(),
            // Ten.getLastTime(),
            // Eleven.getLastTime(),
            // Twelve.getLastTime(),
            // Thirteen.getLastTime(),
            // Fourteen.getLastTime(),
            // Fifteen.getLastTime(),
            // HfilUsdt.getLastTime(),
            // HdotUsdt.getLastTime(),
            // TrsShib.getLastTime(),
            // TrsEth.getLastTime(),
            // DogeUsdt.getLastTime(),
            // ShibUsdt.getLastTime(),
            // HltcUsdt.getLastTime(),
            // UniUsdt.getLastTime(),
            // XrpUsdt.getLastTime(),
            // HbchUsdt.getLastTime(),
            // AdaUsdt.getLastTime(),
            // EosUsdt.getLastTime(),
            // EthHusd.getLastTime(),
            // LinkUsdt.getLastTime(),
            // AaveUsdt.getLastTime(),
            // TrsHusd.getLastTime(),
        ]).then(lastTime => {
            getAllRewardRate().then(allRate => {
                getAllStartTime().then(allTime => {
                    let allBalance = 0
                    allTime.forEach((item, index) => {
                        allBalance = allBalance + (lastTime[index] * 1 - item * 1) * allRate[index]
                    })
                    let a = allBalance + 1932500 - 2592245
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
            // One.getRewardRate(),
            // Two.getRewardRate(),
            // Three.getRewardRate(),
            // Four.getRewardRate(),
            // Five.getRewardRate(),
            Six.getRewardRate(),
            // Seven.getRewardRate(),
            // Eight.getRewardRate(),
            // Nine.getRewardRate(),
            // Eleven.getRewardRate(),
            // Ten.getRewardRate(),
            // Twelve.getRewardRate(),
            // Thirteen.getRewardRate(),
            // Fourteen.getRewardRate(),
            // Fifteen.getRewardRate(),
            // HfilUsdt.getRewardRate(),
            // HdotUsdt.getRewardRate(),
            // TrsShib.getRewardRate(),
            // TrsEth.getRewardRate(),
            // DogeUsdt.getRewardRate(),
            // ShibUsdt.getRewardRate(),
            // HltcUsdt.getRewardRate(),
            // UniUsdt.getRewardRate(),
            // XrpUsdt.getRewardRate(),
            // HbchUsdt.getRewardRate(),
            // AdaUsdt.getRewardRate(),
            // EosUsdt.getRewardRate(),
            // EthHusd.getRewardRate(),
            // LinkUsdt.getRewardRate(),
            // AaveUsdt.getRewardRate(),
            // TrsHusd.getRewardRate(),
        ]).then(res => {
            resolve(res.map((item) => {
                return Web3.utils.fromWei(item, 'ether')
            }))
        }).catch(err => {
            reject(err)
        })
    })
}
// 所有时间
function getAllStartTime() {
    return new Promise((resolve, reject) => {
        Promise.all([
            // One.getPoolStartTime(),
            // Two.getPoolStartTime(),
            // Three.getPoolStartTime(),
            // Four.getPoolStartTime(),
            // Five.getPoolStartTime(),
            Six.getPoolStartTime(),
            // Seven.getPoolStartTime(),
            // Eight.getPoolStartTime(),
            // Nine.getPoolStartTime(),
            // Ten.getPoolStartTime(),
            // Eleven.getPoolStartTime(),
            // Twelve.getPoolStartTime(),
            // Thirteen.getPoolStartTime(),
            // Fourteen.getPoolStartTime(),
            // Fifteen.getPoolStartTime(),
            // HfilUsdt.getPoolStartTime(),
            // HdotUsdt.getPoolStartTime(),
            // TrsShib.getPoolStartTime(),
            // TrsEth.getPoolStartTime(),
            // DogeUsdt.getPoolStartTime(),
            // ShibUsdt.getPoolStartTime(),
            // HltcUsdt.getPoolStartTime(),
            // UniUsdt.getPoolStartTime(),
            // XrpUsdt.getPoolStartTime(),
            // HbchUsdt.getPoolStartTime(),
            // AdaUsdt.getPoolStartTime(),
            // EosUsdt.getPoolStartTime(),
            // EthHusd.getPoolStartTime(),
            // LinkUsdt.getPoolStartTime(),
            // AaveUsdt.getPoolStartTime(),
            // TrsHusd.getPoolStartTime(),
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
            // Two.getTrsRate('USDTPRE'),
            // Three.getTrsRate(),
            // Five.getTrsRate('HUSD'),
            // Eleven.getTrsRate(),
            // HfilUsdt.getTrsRate(),
            // HdotUsdt.getTrsRate(),
            // DogeUsdt.getTrsRate('DOGE'),
            // HltcUsdt.getTrsRate(),
            // UniUsdt.getTrsRate(),
            // XrpUsdt.getTrsRate('XRP'),
            // HbchUsdt.getTrsRate(),
            // AdaUsdt.getTrsRate('ADA'),
            // EosUsdt.getTrsRate('EOS'),
            // Eight.getTrsRate(),
            // Nine.getTrsRate(),
            // Twelve.getTrsRate(),
            // ShibUsdt.getTrsRate(),
            // LinkUsdt.getTrsRate(),
            // AaveUsdt.getTrsRate(),
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
// function getTrsRate1() {
//     return Two.getTrsRate('USDTPRE')
// }

//获取汇率
function getCoinRate() {
    return new Promise((resolve, reject) => {
        Promise.all([
            // Three.getTrsRate(),
            Six.getTrsRate(),
            // Eight.getTrsRate(),
            // Nine.getTrsRate(),
            // Ten.getTrsRate('TPT'),
            // Eleven.getTrsRate()
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
    getAllTrsRate
}