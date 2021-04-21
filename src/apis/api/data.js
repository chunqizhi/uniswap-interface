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
import Icon from './icon.js'


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
        case "ten":
            API = Ten
            coinInfo = Icon[9]
            break;
        default:
            console.log('error')
    }
    return { API, coinInfo }
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
            Ten.getPoolData(),
        ]).then(res => {
            let data = {
                "main": [],
                "flat": [],
                "ideas": []
            }
            let allBalance = 0
            res.forEach((item, index) => {
                let tvl = item.nextcoin * 2
                allBalance += tvl
                if (type !== 'all') {
                    switch (true) {
                        case index < 5:
                            data.main.push({
                                ...item,
                                ...Icon[index],
                                tvl
                            })
                            break;
                        case index >= 5 && index <= 6:
                            data.flat.push({
                                ...item,
                                ...Icon[index],
                                tvl
                            })
                            break;
                        case index > 6:
                            data.ideas.push({
                                ...item,
                                ...Icon[index],
                                tvl

                            })
                            break;
                        default:
                            console.log(`error`)
                    }
                }

            })

            if (type === 'all') {
                resolve(allBalance)
            } else {
                resolve(data)

            }

        })
    })

}

function getTrsRate() {
    return One.getTrsRate()
}
export default {
    getCurrentPool,
    getPoolListData,
    getTrsRate
}