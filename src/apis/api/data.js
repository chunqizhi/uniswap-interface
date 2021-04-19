import Contract from './index.js'
// import Web3 from "web3";

// 将bignumber转换
// return Web3.utils.fromWei(str,'ether')
// 将小数 *18个0
// return Web3.utils.toWei(str,'ether')
// let res = Contract.initFnPromise().then(result => {
//         return {
//             demo: function() {}
//         }
//     })
// Contract.initFnPromise()
let demo = (function() {
    Contract.init()
    return {
        isApprove: function isApprove() {
            return new Promise((resolve, reject) => {
                Contract.getAccountStakedStatus(
                    (result) => {
                        resolve(result)
                    }, (error) => {
                        reject(error)
                    }
                )
            })
        }

    }
})();

export default {
    ...demo
}
// 获取收益
// export function getInitreward() {
//     return new Promise((resolve, reject) => {
//         Contract.getInitreward((result) => {
//             let per = Web3.utils.fromWei(result, 'ether')
//             resolve({
//                 per_mounth: per,
//                 per_year: per * 12
//             })
//         }, (error) => {
//             reject(error)
//         })
//     })
// }


// //获取授权地址未抵押的LP
// export function getUnStakedLp() {
//     return new Promise((resolve, reject) => {
//         Contract.getBalanceFromhuiwanUsdtMdexContract(
//             window.accountAddress,
//             (result) => {
//                 let temp = Web3.utils.fromWei(result, 'ether')
//                 resolve(temp)
//             }, (error) => {
//                 reject(error)
//             }
//         )
//     })
// }

// // 获取授权地址在pool中抵押数量
// export function getStakedLp() {
//     return new Promise((resolve, reject) => {
//         Contract.getPoolLP(
//             window.accountAddress,
//             (result) => {
//                 let temp = Web3.utils.fromWei(result, 'ether')
//                 resolve(temp)
//             }, (error) => {
//                 reject(error)
//             }
//         )
//     })
// }

// // 抵押LP到pool中
// export function stakedLpToPool(amount) {
//     return new Promise((resolve, reject) => {
//         Contract.stakingToHuiwanUsdtLoopContract(
//             Web3.utils.toWei(amount, 'ether'),
//             (result) => {
//                 resolve(result)
//             }, (error) => {
//                 reject(error)
//             }
//         )
//     })
// }
// // 解押LP到从pool中
// export function stakedLpOutPool(amount) {
//     return new Promise((resolve, reject) => {
//         Contract.withdrawFromHuiwanUsdtLoopContract(
//             Web3.utils.toWei(amount, 'ether'),
//             (result) => {
//                 resolve(result)
//             }, (error) => {
//                 reject(error)
//             }
//         )
//     })
// }
// // 该池子是否授权
// export function isApprove() {

//     return new Promise((resolve, reject) => {
//         Contract.getAccountStakedStatus(
//             (result) => {
//                 resolve(result)
//             }, (error) => {
//                 reject(error)
//             }
//         )
//     })
// }

// //检查交易状态
// export function checkedDeal(hash) {
//     return new Promise((resolve) => {
//         Contract.getDealStatusByHash(
//             hash,
//             (result) => {
//                 resolve(result)
//             },
//         )
//     })
// }