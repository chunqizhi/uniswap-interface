import Web3 from "web3";
class API {
    constructor(contract) {
        this.contract = contract
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
    //7
    //董事会 授权
    isApproveDao7() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7AccountStakedStatus(
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
    // 查询 董事会仓名
    getDao7Name() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7Name(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 总锁仓量
    getDao7TotalSupply() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7TotalSupply(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 我的锁仓
    getDao7BalanceOf() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7BalanceOf(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 解锁数量
    getDao7allAvailableAmount() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7allAvailableAmount(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 解锁时间
    getDao7RestBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7RestBlocks(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 是否可领取
    getDao7CanWithdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7CanWithdraw(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 董事会 提取
    Dao7Withdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.Dao7Withdraw(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 董事会 锁仓
    Dao7Deposit(amount) {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.Dao7Deposit(
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
    // 董事会 未授权进行授权 approveHuiwanUsdtLoopAddr
    approveDao7() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveDao7HuiwanUsdtLoopAddr(
                    (result) => {
                        resolve(result.result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 15
    //董事会 授权
    isApproveDao15() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15AccountStakedStatus(
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
    // 查询 董事会仓名
    getDao15Name() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15Name(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 总锁仓量
    getDao15TotalSupply() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15TotalSupply(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 我的锁仓
    getDao15BalanceOf() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15BalanceOf(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 解锁数量
    getDao15allAvailableAmount() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15allAvailableAmount(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 解锁时间
    getDao15RestBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15RestBlocks(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 是否可领取
    getDao15CanWithdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15CanWithdraw(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
     // 董事会 提取
     Dao15Withdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.Dao15Withdraw(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }

    // 董事会 锁仓
    Dao15Deposit(amount) {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.Dao15Deposit(
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
    // 董事会 未授权进行授权 approveHuiwanUsdtLoopAddr
    approveDao15() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveDao15HuiwanUsdtLoopAddr(
                    (result) => {
                        resolve(result.result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    //30
    //董事会 授权
    isApproveDao() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaoAccountStakedStatus(
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
    // 查询 董事会仓名
    getDaoName() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaoName(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 总锁仓量
    getDaoTotalSupply() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaoTotalSupply(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 我的锁仓
    getDaoBalanceOf() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaoBalanceOf(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 解锁数量
    getDaoallAvailableAmount() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaoallAvailableAmount(
                    (result) => {
                        let per = Web3.utils.fromWei(result, 'ether')
                        resolve(per)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 解锁时间
    getDaoRestBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaoRestBlocks(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 董事会 是否可领取
    getDaoCanWithdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaoCanWithdraw(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
     // 董事会 提取
     DaoWithdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.DaoWithdraw(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 董事会 锁仓
    DaoDeposit(amount) {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.DaoDeposit(
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
    // 董事会 未授权进行授权 approveHuiwanUsdtLoopAddr
    approveDao() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveDaoHuiwanUsdtLoopAddr(
                    (result) => {
                        resolve(result.result)
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
                    this.contract.getReward((res) => {
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
                } = res
                this.getInitreward().then(result => {
                    this.contract.getTotalSupply(supply => {
                        nextcoin = (Web3.utils.fromWei(nextcoin, 'ether')) * 1
                        precoin = (Web3.utils.fromWei(precoin, 'ether')) * 1
                        resolve({
                            ...result,
                            precoin,
                            nextcoin,
                            supply
                        })
                    }, (error) => {
                        reject(error)
                    })

                })
            })
        })
    }


    getTrsRate(type) {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getBalanceFromHuiwanTokenContract((precoin) => {
                    this.contract.getBalanceFromUsdtTokenContract((nextcoin) => {
                        if (type && type === 'TPT') {
                            nextcoin = (Web3.utils.fromWei(nextcoin, 'ether')) * 1
                            precoin = (Web3.utils.fromWei(precoin, 'kwei')) / 10
                        }
                        let rate = 0
                        if (type && type === 'USDTPRE') {
                            rate = precoin / nextcoin
                        }else if(type && type === 'HUSD') {
                            rate = precoin / (nextcoin * 10000000000)
                        }else if(type && type === 'DOGE') {
                            rate = (nextcoin ) / (precoin * 10000000000)
                        }else if(type && type === 'XRP') {
                            rate = (nextcoin * 10000000000 ) / (precoin)
                        }else if(type && type === 'ADA') {
                            rate = (nextcoin * 100000000000 ) / (precoin)
                        }else if(type && type === 'EOS') {
                            rate = (nextcoin * 10000000000000000 ) / (precoin)
                        }else{
                            rate = nextcoin / precoin
                        }
                        
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