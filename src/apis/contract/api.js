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
    // 
    getAlldao7(){
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                Promise.all([
                    this.getDao7Name(),//仓名
                    this.getDao7TotalSupply(),//总锁仓量
                    this.getDao7BalanceOf(),//我的锁仓
                    this.getDao7allAvailableAmount(),//解锁数量
                    this.getDao7RestBlocks(),//解锁时间
                    this.getDao7CanWithdraw(),//是否可领取
                    this.getDao7lockBlocks(),//查询一个值
                ]).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        // })
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

    // 查询 锁仓值
    getDao7lockBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao7lockBlocks(
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
        // let a = new Date().getTime()
        // console.log('开始授权请求 =>',a)
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveDao7HuiwanUsdtLoopAddr(
                    (result) => {
                        // console.log('api.js 锁仓耗时==>',new Date().getTime() - a)
                        resolve(result.result)
                    }, (error) => {
                        // console.log('api.js 锁仓耗时==>',new Date().getTime() - a)
                        reject(error)
                    }
                )
            })
        // })
    }
    // 
    getAlldao15(){
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                Promise.all([
                    this.getDao15Name(),//仓名
                    this.getDao15TotalSupply(),//总锁仓量
                    this.getDao15BalanceOf(),//我的锁仓
                    this.getDao15allAvailableAmount(),//解锁数量
                    this.getDao15RestBlocks(),//解锁时间
                    this.getDao15CanWithdraw(),//是否可领取
                    this.getDao15lockBlocks(),//查询一个值
                ]).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        // })
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
    // 查询 锁仓值
    getDao15lockBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao15lockBlocks(
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
        // let a = new Date().getTime()
        // console.log('开始授权请求 =>',a)
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.Dao15Deposit(
                    Web3.utils.toWei(amount, 'ether'),
                    (result) => {
                        // console.log('api.js 锁仓耗时==>',new Date().getTime() - a)
                        resolve(result)
                    }, (error) => {
                        // console.log('api.js 锁仓耗时==>',new Date().getTime() - a)
                        reject(error)
                    }
                )
            })
        // })
    }
    // 董事会 未授权进行授权 approveHuiwanUsdtLoopAddr
    approveDao15() {
        // let a = new Date().getTime()
        // console.log('开始授权请求 =>',a)
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveDao15HuiwanUsdtLoopAddr(
                    (result) => {
                        // console.log('api.js 耗时==>',new Date().getTime() - a)
                        resolve(result.result)
                    }, (error) => {
                        // console.log('api.js 耗时==>',new Date().getTime() - a)
                        reject(error)
                    }
                )
            })
        // })
    }
    // 
    getAlldao30(){
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                Promise.all([
                    this.getDaoName(),//仓名
                    this.getDaoTotalSupply(),//总锁仓量
                    this.getDaoBalanceOf(),//我的锁仓
                    this.getDaoallAvailableAmount(),//解锁数量
                    this.getDaoRestBlocks(),//解锁时间
                    this.getDaoCanWithdraw(),//是否可领取
                    this.getDaolockBlocks(),//查询一个值
                ]).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        // })
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
    // 查询 锁仓值
    getDaolockBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDaolockBlocks(
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
        // return this.contract.initFnPromise().then(res => {
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
        // })
    }
    // 董事会 未授权进行授权 approveHuiwanUsdtLoopAddr
    approveDao() {
        // let a = new Date().getTime()
        // console.log('开始授权请求 =>',a)
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveDaoHuiwanUsdtLoopAddr(
                    (result) => {
                        // console.log('api.js 耗时==>',new Date().getTime() - a)

                        resolve(result.result)
                    }, (error) => {
                        // console.log('api.js 耗时==>',new Date().getTime() - a)

                        reject(error)
                    }
                )
            })
        // })
    }
    // 
    getAlldao60(){
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                Promise.all([
                    this.getDao60Name(),//仓名
                    this.getDao60TotalSupply(),//总锁仓量
                    this.getDao60BalanceOf(),//我的锁仓
                    this.getDao60allAvailableAmount(),//解锁数量
                    this.getDao60RestBlocks(),//解锁时间
                    this.getDao60CanWithdraw(),//是否可领取
                    this.getDao60lockBlocks(),//查询一个值
                ]).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        // })
    }
    // 60
    //董事会 授权
    isApproveDao60() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60AccountStakedStatus(
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
    getDao60Name() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60Name(
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
    getDao60TotalSupply() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60TotalSupply(
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
    getDao60BalanceOf() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60BalanceOf(
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
    getDao60allAvailableAmount() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60allAvailableAmount(
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
    getDao60RestBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60RestBlocks(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        })
    }
    // 查询 锁仓值
    getDao60lockBlocks() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60lockBlocks(
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
    getDao60CanWithdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.getDao60CanWithdraw(
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
     Dao60Withdraw() {
        return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.Dao60Withdraw(
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
    Dao60Deposit(amount) {
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.Dao60Deposit(
                    Web3.utils.toWei(amount, 'ether'),
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        // })
    }
    // 董事会 未授权进行授权 approveHuiwanUsdtLoopAddr
    approveDao60() {
        // let a = new Date().getTime()
        // console.log('开始授权请求 =>',a)
        // return this.contract.initFnPromise().then(res => {
            return new Promise((resolve, reject) => {
                this.contract.approveDao60HuiwanUsdtLoopAddr(
                    (result) => {
                        // console.log('api.js 耗时==>',new Date().getTime() - a)
                        resolve(result.result)
                    }, (error) => {
                        // console.log('api.js 耗时==>',new Date().getTime() - a)
                        reject(error)
                    }
                )
            })
        // })
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
                        // Web3.utils.toWei(amount, 'ether'),
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