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
import Icon from './icon.js'
import Web3 from "web3";

import {
    multiNum,
    addNum
} from '../api/calc.js'


function getCurrentPool(type) {
    let API, coinInfo
    switch (type) {
        case "one":
            coinInfo = Icon[0]
            API = One
            break;
        case "two":
            coinInfo = Icon[1]
            API = Two
            break;
        case "three":
            API = Three
            coinInfo = Icon[2]
            break;
        case "four":
            API = Four
            coinInfo = Icon[3]
            break;
        case "five":
            API = Five
            coinInfo = Icon[4]
            break;
        case "six":
            API = Six
            coinInfo = Icon[5]
            break;
        case "seven":
            API = Seven
            coinInfo = Icon[6]
            break;
        case "eight":
            API = Eight
            coinInfo = Icon[7]
            break;
        case "nine":
            API = Nine
            coinInfo = Icon[8]
            break;
            // case "ten":
            //     API = Ten
            //     coinInfo = Icon[9]
            //     break;
        case "eleven":
            API = Eleven
            coinInfo = Icon[9]
            break;
        case "twelve":
            API = Twelve
            coinInfo = Icon[10]
            break;
        case "thirteen":
            API = Thirteen
            coinInfo = Icon[11]
            break;
        case "fourteen":
            API = Fourteen
            coinInfo = Icon[12]
            break;
        case "fifteen":
            API = Fifteen
            coinInfo = Icon[13]
            break;
        case "hfilusdt":
            API = HfilUsdt
            coinInfo = Icon[14]
            break;
        case "hdotusdt":
            API = HdotUsdt
            coinInfo = Icon[15]
            break;
        case "trsshib":
            API = TrsShib
            coinInfo = Icon[16]
            break;
        case "trseth":
            API = TrsEth
            coinInfo = Icon[17]
            break;
        case "dogeusdt":
            API = DogeUsdt
            coinInfo = Icon[18]
            break;
        case "shibusdt":
            API = ShibUsdt
            coinInfo = Icon[19]
            break;
        case "hltcusdt":
            API = HltcUsdt
            coinInfo = Icon[20]
            break;
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
            One.getPoolData(),
            Two.getPoolData(),
            Three.getPoolData(),
            Four.getPoolData(),
            Five.getPoolData(),
            Six.getPoolData(),
            Seven.getPoolData(),
            Eight.getPoolData(),
            Nine.getPoolData(),
            // Ten.getPoolData(),
            Eleven.getPoolData(),
            Twelve.getPoolData(),
            Thirteen.getPoolData(),
            Fourteen.getPoolData(),
            Fifteen.getPoolData(),
            TrsEth.getPoolData(),
            HfilUsdt.getPoolData(),
            HdotUsdt.getPoolData(),
            TrsShib.getPoolData(),
            DogeUsdt.getPoolData(),
            ShibUsdt.getPoolData(),
            HltcUsdt.getPoolData(),

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

                if (type !== 'all') {
                    if (res[index].supply === '0') {
                        apy = `0.00%`

                    } else {
                        apy = (((res[index].per_day * trsRate.rate) / tvl) * 360 * 100).toFixed(2) + "%"
                    }
                    if (res[index].supply === '0') {
                        tvl = `0.00`
                    }
                    data[item.key_word].push({
                        ...item,
                        ...res[index],
                        tvl,
                        apy
                    })
                }
                allBalance = addNum(tvl, allBalance)
                    // console.log('apy ==>', apy, 'tvl ==>', tvl)

            })
            Icon.forEach((item, index) => {
                if (res[index].supply !== '0') {
                    isall = true;
                    return;
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
            One.getLastTime(),
            Two.getLastTime(),
            Three.getLastTime(),
            Four.getLastTime(),
            Five.getLastTime(),
            Six.getLastTime(),
            Seven.getLastTime(),
            Eight.getLastTime(),
            Nine.getLastTime(),
            // Ten.getLastTime(),
            Eleven.getLastTime(),
            Twelve.getLastTime(),
            Thirteen.getLastTime(),
            Fourteen.getLastTime(),
            Fifteen.getLastTime(),
            TrsEth.getLastTime(),
            HfilUsdt.getLastTime(),
            HdotUsdt.getLastTime(),
            TrsShib.getLastTime(),
            DogeUsdt.getLastTime(),
            ShibUsdt.getLastTime(),
            HltcUsdt.getLastTime(),
        ]).then(lastTime => {
            getAllRewardRate().then(allRate => {
                getAllStartTime().then(allTime => {
                    let allBalance = 0
                    allTime.forEach((item, index) => {
                        allBalance = allBalance + (lastTime[index] * 1 - item * 1) * allRate[index]
                    })
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
            One.getRewardRate(),
            Two.getRewardRate(),
            Three.getRewardRate(),
            Four.getRewardRate(),
            Five.getRewardRate(),
            Six.getRewardRate(),
            Seven.getRewardRate(),
            Eight.getRewardRate(),
            Nine.getRewardRate(),
            Eleven.getRewardRate(),
            // Ten.getRewardRate(),
            Twelve.getRewardRate(),
            Thirteen.getRewardRate(),
            Fourteen.getRewardRate(),
            Fifteen.getRewardRate(),
            TrsEth.getRewardRate(),
            HfilUsdt.getRewardRate(),
            HdotUsdt.getRewardRate(),
            TrsShib.getRewardRate(),
            DogeUsdt.getRewardRate(),
            ShibUsdt.getRewardRate(),
            HltcUsdt.getRewardRate(),
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
            One.getPoolStartTime(),
            Two.getPoolStartTime(),
            Three.getPoolStartTime(),
            Four.getPoolStartTime(),
            Five.getPoolStartTime(),
            Six.getPoolStartTime(),
            Seven.getPoolStartTime(),
            Eight.getPoolStartTime(),
            Nine.getPoolStartTime(),
            // Ten.getPoolStartTime(),
            Eleven.getPoolStartTime(),
            Twelve.getPoolStartTime(),
            Thirteen.getPoolStartTime(),
            Fourteen.getPoolStartTime(),
            Fifteen.getPoolStartTime(),
            TrsEth.getPoolStartTime(),
            HfilUsdt.getPoolStartTime(),
            HdotUsdt.getPoolStartTime(),
            TrsShib.getPoolStartTime(),
            DogeUsdt.getPoolStartTime(),
            ShibUsdt.getPoolStartTime(),
            HltcUsdt.getPoolStartTime(),
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
}