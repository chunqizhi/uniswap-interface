// import Contract from './index.js'
import Web3 from "web3";
import {
    multiNum
} from '../api/calc.js'
// 将bignumber转换
// return Web3.utils.fromWei(str,'ether')
// 将小数 *18个0
// return Web3.utils.toWei(str,'ether')
class API {
    constructor(contract) {
        this.contract = contract
        this.allReward = {
            starttime: 1619013600,
            rewardRate: Web3.utils.fromWei('115740740740740740', 'ether')
        }
    }

    isApprove() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getAccountStakedStatus(
                    (result) => {
                        if (result === '0') {
                            resolve(false)
                        } else resolve(true)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }



    // 获取矿池月/年收益
    getInitreward() {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.getInitreward((result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve({
                            per_day: per * 1,
                            per_month: per * 30
                        })
                    }, (error) => {
                        reject(error)
                    })
                })
            })
        }
        // //获取授权地址未抵押的LP
    getUnStakedLp() {

            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.getBalanceFromhuiwanUsdtMdexContract(
                        window.accountAddress,
                        (result) => {
                            let temp = Web3.utils.fromWei(result, 'ether')
                            resolve(temp)
                        }, (error) => {
                            reject(error)
                        }
                    )
                })
            })
        }
        // 获取授权地址在pool中抵押数量
    getStakedLp() {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.getPoolLP(
                        window.accountAddress,
                        (result) => {
                            let temp = Web3.utils.fromWei(result, 'ether')
                            resolve(temp)
                        }, (error) => {
                            reject(error)
                        }
                    )
                })
            })
        }
        // // 抵押LP到pool中
    stakedLpToPool(amount) {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.stakingToHuiwanUsdtLoopContract(
                        Web3.utils.toWei(amount, 'ether'),
                        (result) => {
                            resolve(result)
                        }, (error) => {
                            reject(error)
                        }
                    )
                })
            })
        }
        // // 解押LP到从pool中
    stakedLpOutPool(amount) {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.withdrawFromHuiwanUsdtLoopContract(
                        Web3.utils.toWei(amount, 'ether'),
                        (result) => {
                            resolve(result)
                        }, (error) => {
                            reject(error)
                        }
                    )
                })

            })
        }
        // //检查交易状态
    checkedDeal(hash) {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve) => {
                    this.contract.getDealStatusByHash(
                        hash,
                        (err, res) => {
                            resolve(err, res)
                        }
                    )
                })
            })
        }
        // 未授权进行授权 approveHuiwanUsdtLoopAddr
    approve() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveHuiwanUsdtLoopAddr(
                    (result) => {
                        console.log(result)
                        resolve(result.result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }


    // 获取池子里的当前收益
    getEarned() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getEarned(
                    window.accountAddress,
                    (result) => {
                        let temp = Web3.utils.fromWei(result, 'ether')
                        resolve(temp)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }

    getReward() {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.getRewardRate((res) => {
                        resolve(res)
                    }, (err) => {
                        reject(err)
                    })
                })
            })
        }
        // 每个池子每秒挖矿产出
    getRewardRate() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getRewardRate((res) => {
                    resolve(res)
                }, (err) => {
                    reject(err)
                })
            })
        })
    }

    // pooldata
    getPoolData() {
        return new Promise((resolve, reject) => {
            this.getTrsRate().then(res => {
                let {
                    precoin,
                    nextcoin,
                    rate
                } = res
                this.getInitreward().then(result => {
                    this.contract.getTotalSupply(res => {
                        let apy, tvl
                        nextcoin = (Web3.utils.fromWei(nextcoin, 'ether')) * 1
                        tvl = ((multiNum(nextcoin, 2)) * 1).toFixed(2)
                        precoin = (Web3.utils.fromWei(precoin, 'ether')) * 1
                        if (res * 1 === 0) {
                            apy = `0.00%`;
                        } else {
                            apy = (((result.per_day * rate) / tvl) * 360 * 100).toFixed(2) + "%"

                        }
                        resolve({
                            ...result,
                            precoin,
                            nextcoin,
                            rate,
                            apy,
                            tvl
                        })
                    }, (error) => {
                        reject(error)
                    })

                })
            })
        })
    }


    getTrsRate() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getBalanceFromHuiwanTokenContract((precoin) => {
                    this.contract.getBalanceFromUsdtTokenContract((nextcoin) => {
                        let rate = nextcoin / precoin

                        resolve({
                            precoin,
                            nextcoin,
                            rate
                        })
                    })
                })
            })
        })
    }

    getBalanceOf() {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.getBalanceFromUsdtTokenContract((res) => {
                        resolve(Web3.utils.fromWei(res, 'ether'))
                    }, (err) => {
                        reject(err)
                    })
                })
            })
        }
        // 时间戳
    getLastTime(rewardRate) {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.getLastTime(res => {
                        resolve(res)
                    }, err => {
                        reject(err)
                    })
                })
            })
        }
        // 获取用户trs数量 
    getWalletAllTrs() {
            return this.contract.initFnPromise().then(res => {
                return new Promise((resolve, reject) => {
                    this.contract.getWalletAllTrs((res) => {
                        resolve(Web3.utils.fromWei(res, 'ether'))
                    }, (error) => {
                        reject(error)
                    })
                })
            })
        }
        // 矿池开始时间
    getPoolStartTime() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getPoolStartTime((res) => {
                    resolve(res)
                }, (error) => {
                    reject(error)
                })
            })
        })
    }
}
export default API