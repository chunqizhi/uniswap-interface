// import React,{ Fragment } from "react";
import React, { useState, useEffect } from 'react';

import { useTranslation } from "react-i18next"
import styled from 'styled-components'

import Data from '../../apis/api/data.js'
import API from '../../apis/api/six.js'
import cart1 from '../../assets/images/mining/driector-card-top.png'
import home_cart1 from "../../assets/images/home/nav-logo.png"
import title_name from "../../assets/images/nft/title-name.png"

import './index.css'

const Approvediv = styled.div`
    padding:10px 20px;
    background-color:#fff;
    color:#000;
    position: fixed;
    top:30%;
    left:50%;
    border-radius:10px;
    box-shadow: 0px 0px 6px #ccc;
    font-size:14px;
    line-height:20px;
    text-align:center;
    z-index:2999;
    transform: translateX(-50%);
`
const Directortitle = styled.div`
  font-size: 40px;
  font-family: HYChaoCuYuanJ;
  font-weight: 700;
  color: #722F0D;
  width:100%;
  height:40px;
  padding:0 10px;
  margin:10px 0;
  >img{
    width:100%;
  }
  max-width:450px;
`
const Directoricon = styled.div`
  width:5px;
  height:100%;
  background-color:red;
  background: linear-gradient(to bottom,#e96811,#f9e4c1);
  border-radius: 5px;
  margin-right:2px;
`
const Directorh2 = styled.div`
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #722F0D;
`
const Directorh3 = styled(Directorh2)`
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #722F0D;
`
const Directortopbox = styled.div`
  height:auot;
  display: flex;
  padding: 9vh 0 30px;
  margin-top:25px;
  flex-direction: column;
  align-items: center;
  background-image: url(${cart1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  box-shadow: 4px 11px 11px -12px #ccc;
    border-radius: 12px;
  >img{
    position: absolute;
    left: 15%;
    top: 8%;
    transform-origin: 32vw 60vw;
    transform:rotate(8deg);
    animation: imganimation 1.5s cubic-bezier(0, 0.5, 0.34, 0.99) 0.5s forwards;
    @keyframes imganimation {
      0% {
        transform:rotate(8deg);
    　}
      60%{
        　transform:rotate(46deg);
      }
      80%{
        　transform:rotate(36deg);
      }
      90%{
        　transform:rotate(42deg);
      }
    　100% {
      　transform:rotate(40deg);
    　}
    }
  }
  max-width:450px;
`

const Directorbox = styled.div`
  width:100%;
  background-color:#fff9f0;
  border-radius:15px;
  margin:10px 0 15px;
  box-shadow: 3px 7px 9px -3px #ddd;
  max-width:450px;
`
const Directortop = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin: 0 16px;
  border-bottom:1px solid #D19C7D;
`
const Directorcolor = styled.div`
  color:#722F0D;
`
const Directornum = styled(Directorcolor)`
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
`
const DirectorAllTotalSupply = styled(Directornum)`
  margin-bottom:14px;
  font-size: 20px;
  font-weight: bold;
  color: #722F0D;
  display:flex;
  align-items:center;
`
const Directorapr = styled(Directorcolor)`
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  display:flex;
  align-items: center;
  >img{
    margin-left:5px;
  }
`
const Directortopname = styled(Directorcolor)`
  font-size:18px
`
const Directortopimg = styled.div`
  width:50px;
  height:50px;
  background-image: url(${home_cart1});
  background-repeat: no-repeat;
  background-size: cover;
`

const Directorrow = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:5px 16px;
`
const Directorname = styled.div`
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #D19C7D;
`
const Miningbottombtn = styled.div`
    display:flex;
    align-item:center;
    justify-content: center;
    width:100%
    justify-content: space-around;
    margin:30px 0 20px;
`

const Miningbtn1 =styled.div`
    background-color:#722f0d;
    border-radius:20px;
    color:#fff;
    width:35%;
    text-align:center;
    padding:8px 0;
`
const Miningbtn2 =styled(Miningbtn1)`
    background-color:#fff9f0;
    color:#722f0d;
    border:2px solid #722f0d;
`
const formatNum = function (str: string | number) {
  if (str * 1 < 0) return 0
  str = "" + str
  let flag = str.indexOf('.') > 0
  let temp
  if (flag) {
    if (str.split('.')[0].length > 4) {
      let pre = str.split('.')[0]
      let next = str.split('.')[1]
      temp = pre + '.' + next.substring(0, 2)
    }
    else {
      let pre = str.split('.')[0]
      let next = str.split('.')[1]
      temp = pre + '.' + next.substring(0,6)
    }
  } else {
    if (str.length > 4) {
      temp = str + '.00'
    } else {
      temp = str + '.0000'
    }

  }
  return temp
}
const add0 = (sum) => { return sum >= 10 ? sum : `0${sum}` }
const formattingDate = function (getdate: string | number) {
  let date = new Date(getdate)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let newmonth = month > 10 ? month : `0${month}`
  let newday = day > 10 ? day : `0${day}`
  let newdate = `${year}-${newmonth}-${newday} ${add0(hours)}:${add0(minutes)}:${add0(seconds)}`
  return newdate
}

let timers

export default function Director() {
  const { t } = useTranslation();
  const [rate, setRate] = useState(0)
//   const [rateFalse, setRateFalse] = useState(false)
  const [timerd, setTimer] = useState(0)
  const [allBalance, setAllBalance] = useState(0)
//   const [allBalanceFalse, setAllBalanceFalse] = useState(false)
  const [addFlagtype, setAddFlagtype] = useState('')
  const [allBlock, setAllBock] = useState(0.00)
//   const [allBlockFalse, setAllBlockFalse] = useState(false)
  const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权 isApprovedivdao
  const [text, settext] = useState(0)//弹窗提示
  const [balance, setBalance] = useState(0.00)
//   const [balanceFalse, setBalanceFalse] = useState(false)
  // 判断是否是第一次加载页面  判断发送请求
  const [pageFlag, setPageFlag] = useState(false);
  //7
  const [dao7name, setDao7Name] = useState('TTQ DAO-7')//仓名
  const [dao7TotalSupply, setDao7TotalSupply] = useState(0.00)//总锁仓量
  const [dao7BalanceOf, setDao7BalanceOf] = useState(0.00)//我的锁仓
  const [allAvailableAmount7, setallAvailableAmount7] = useState(0.00)//解锁数量
  const [Dao7RestBlocks, setDao7RestBlocks] = useState('')//解锁时间
  const [isApprove7, setApprove7] = useState(false) // 授权/非授权
  const [Dao7CanWithdraw, setDao7CanWithdraw] = useState(false) //是否可以提取
  const [pengingApprove7, setPengingApprove7] = useState(false)//是否授权成功
  const [isimpower7, setIsImpower7] = useState(false)//授权按钮变化
  const [lockBlocks7, setLockBlocks7] = useState(false)//授权按钮变化

  //15
  const [dao15name, setDao15Name] = useState('TTQ DAO-15')
  const [dao15TotalSupply, setDao15TotalSupply] = useState(0.00)
  const [dao15BalanceOf, setDao15BalanceOf] = useState(0.00)
  const [allAvailableAmount15, setallAvailableAmount15] = useState(0.00)
  const [Dao15RestBlocks, setDao15RestBlocks] = useState('')
  const [Dao15CanWithdraw, setDao15CanWithdraw] = useState(false) //是否可以提取
  const [pengingApprove15, setPengingApprove15] = useState(false)//是否授权成功
  const [isApprove15, setApprove15] = useState(false) // 授权/非授权
  const [isimpower15, setIsImpower15] = useState(false)//授权按钮变化
  const [lockBlocks15, setLockBlocks15] = useState(false)//授权按钮变化

  //30 
  const [daoname, setDaoName] = useState('TTQ DAO-30')
  const [daoTotalSupply, setDaoTotalSupply] = useState(0.00)
  const [daoBalanceOf, setDaoBalanceOf] = useState(0.00)
  const [allAvailableAmount, setallAvailableAmount] = useState(0.00)
  const [isApprove, setApprove] = useState(false) // 授权/非授权
  const [DaoRestBlocks, setDaoRestBlocks] = useState('')
  const [DaoCanWithdraw, setDaoCanWithdraw] = useState(false) //是否可以提取
  const [pengingApprove, setPengingApprove] = useState(false)//是否授权成功
  const [isimpower, setIsImpower] = useState(false)//授权按钮变化
  const [lockBlocks, setLockBlocks] = useState(false)//授权按钮变化

  //60
  const [dao60name, setDao60Name] = useState('TTQ DAO-60')
  const [dao60TotalSupply, setDao60TotalSupply] = useState(0.00)
  const [dao60BalanceOf, setDao60BalanceOf] = useState(0.00)
  const [allAvailableAmount60, setallAvailableAmount60] = useState(0.00)
  const [Dao60RestBlocks, setDao60RestBlocks] = useState('')
  const [isApprove60, setApprove60] = useState(false) // 授权/非授权
  const [Dao60CanWithdraw, setDao60CanWithdraw] = useState(false) //是否可以提取
  const [pengingApprove60, setPengingApprove60] = useState(false)//是否授权成功
  const [isimpower60, setIsImpower60] = useState(false)//授权按钮变化
  const [lockBlocks60, setLockBlocks60] = useState(false)//授权按钮变化
  // 
  const [addFlag, setAddFlag] = useState(false)   //显示隐藏 抵押解押弹框
  const [inputValue, setInputVal] = useState('0')   //input的值
  const [stakedLp, setStakedLp] = useState('0.00')
  const [allTotalSupply, setAllTotalSupply] = useState(0.00) //当前总锁仓量
  const clickListener = () => {
  }
  const approveFn = (type) => {
    if (type == '7') {
        setIsImpower7(true)
        setPengingApprove7(true)
      API.approveDao7().then(res => {
      }).catch(error => {
        setIsImpower7(false)
        setPengingApprove7(false)
      })
    } else if (type == '30') {
        setIsImpower(true)
        setPengingApprove(true)
      API.approveDao().then(res => {
      }).catch(error => {
        //   console.log('授权失败',isimpower)
        setIsImpower(false)
        setPengingApprove(false)
      })
    } else if (type == '15') {
        setIsImpower15(true)
        setPengingApprove15(true)
        API.approveDao15().then(res => {
    }).catch(error => {
        setIsImpower15(false)
        setPengingApprove15(false)
      })
    } else if (type == '60') {
        setIsImpower60(true)
        setPengingApprove60(true)
        API.approveDao60().then(res => {
      }).catch(error => {
        // console.log('授权失败',isimpower)
        setIsImpower60(false)
        setPengingApprove60(false)
      })
    }

  }
  useEffect(() => {
    let setTimeoutTimer;
    const timerFn = function () {
        API.isApproveDao().then(res => {
        // console.log("是否授权30" + res)
        if (res) {
            setIsImpower(false)
        }
        setApprove(res)
      })
      // API.isApproveDao7().then(res => {
      //   // console.log("是否授权7" + res)
      //   if (res) {
      //       setIsImpower7(false)
      //   }
      //   setApprove7(res)
      // })
      // API.isApproveDao15().then(res => {
      //   // console.log("是否授权15" + res)
      //   if (res) {
      //       setIsImpower15(false)
      //   }
      //   setApprove15(res)
      // })
      // API.isApproveDao60().then(res => {
      //   // console.log("是否授权60" + res)
      //   if (res) {
      //       setIsImpower60(false)
      //   }
      //   setApprove60(res)
      // })
      // Data.getTrsRate().then(async res => {
      //   // console.log('trs价格 ==>',res.rate)
      //   setRate(await res.rate)
      //   // setRateFalse(true)
      // })
      //当前流动性质押
      // Data.getPoolListData('all').then(async res => {
      //   // console.log('质押')
      //   setAllBalance(await res)
      //   // setAllBalanceFalse(true)
      // })
      //当前挖矿产出
      // Data.getAllBlock().then(async res => {
      //   // console.log('产出')
      //   setAllBock(await res)
      //   // setAllBlockFalse(true)
      // })
      // API.getWalletAllTrs().then(async res => {
      //   // console.log(`setBalance`,res)
      //   // console.log('所有')
      //   setBalance(await res)
      //   setStakedLp(res)
      //   // setBalanceFalse(true)
      // })
    //   API.getAllTotalSupply().then(res => {
    //     // console.log('总锁仓量',res[0],res[1],res[2],res[3])
    //     // console.log('总仓量',Number(res[0])+Number(res[1])+Number(res[2])+Number(res[3]))
    //     setAllTotalSupply(Number(res[2]))
    // })
      
    }
    const timer = function () {
      setTimeoutTimer && clearTimeout(setTimeoutTimer)
      timerFn()
      setTimeoutTimer = setTimeout(() => {
        timer()
      }, 4000);
    }
    window.addEventListener("click", clickListener, false)
    timerFn()
    timer()
    return function () {
      window.removeEventListener("click", clickListener, false)
      setTimeoutTimer && clearTimeout(setTimeoutTimer)
    }
  }, [])

  const toast = (type) => {
    if (type == 'extract') {
        settext(1)
    }else if(type == 'balanceof'){
        settext(3)
    }else if(type == 'Dontopen'){
      settext(2)
    }else{
        settext(0)
    }
    setApprovediv(true)
    timers && clearTimeout(timers)
    timers = setTimeout(() => {
      setApprovediv(false)
      clearTimeout(timers)
    }, 2000);
  }

//   useEffect(() => {
    
//   })
  //
  useEffect(() => {
    // console.log('第一次加载')
    getAllDao()
    return () => {
    //   console.log("DOM被移除");
      timerd && clearTimeout(timerd)
      isover(false, false, false, false)
    }
  }, [pageFlag])
  const isover = (a, b, c, d) => {
    if (a && b && c && d) {
    //   console.log('useEffect 加载getdao')
      timerd && clearTimeout(timerd)
      getdao()
    }
  }

  // 如果是true 持续加载更新
  // if (pageFlag) {
  // console.log(pageFlag);
  const getAllDao = () => {
      let a = false
      let b = false
      let c = false
      let d = false
    // API.getAlldao7().then(res => {
    //     // console.log('setTimeout =>', res)
    //     setDao7Name(res[0])
    //     setDao7TotalSupply(res[1])
    //     setDao7BalanceOf(res[2])
    //     setallAvailableAmount7(res[3])
    //     let newtime = '00'
    //     if (res[4] != '0') {
    //       newtime = formattingDate(new Date().getTime() + res[4] * 3 * 1000)
    //     } else {
    //         if(res[6] > 0 && res[2] != 0){
    //             newtime = `${t("director.text20")}`
    //             setLockBlocks7(true)
    //         }else{
    //             newtime = "00"
    //             setLockBlocks7(false)
    //         }
    //     }
    //     setDao7RestBlocks(newtime)
    //     setDao7CanWithdraw(res[5])
    //     // console.log('lockBlocks ==>',res[6])
    //     a = true
    //     isover(a, b, c, d)
    //   })
      // API.getAlldao15().then(res => {
      //   // console.log('setTimeout =>', res)
      //   setDao15Name(res[0])
      //   setDao15TotalSupply(res[1])
      //   setDao15BalanceOf(res[2])
      //   setallAvailableAmount15(res[3])
      //   let newtime = '00'
      //   if (res[4] != '0') {
      //     newtime = formattingDate(new Date().getTime() + res[4] * 3 * 1000)
      //   } else {
      //       if(res[6] > 0 && res[2] != 0){
      //           newtime = `${t("director.text20")}`
      //           setLockBlocks15(true)
      //       }else{
      //           newtime = "00"
      //           setLockBlocks15(false)
      //       }
      //   }
      //   setDao15RestBlocks(newtime)
      //   setDao15CanWithdraw(res[5])
      //   b = true
      //   isover(a, b, c, d)
      // })
      API.getAlldao30().then(res => {
        // console.log('setTimeout =>', res)
        setDaoName(res[0])
        setDaoTotalSupply(res[1])
        setDaoBalanceOf(res[2])
        setallAvailableAmount(res[3])
        let newtime = '00'
        if (res[4] != '0') {
          newtime = formattingDate(new Date().getTime() + res[4] * 3 * 1000)
        } else {
            if(res[6] > 0 && res[2] != 0){
                newtime = `${t("director.text20")}`
                setLockBlocks(true)
            }else{
                newtime = "00"
                setLockBlocks(false)
            }
        }
        setDaoRestBlocks(newtime)
        setDaoCanWithdraw(res[5])
        c = true
        isover(true, true, c,true)
      })
      // API.getAlldao60().then(res => {
      //   // console.log('setTimeout =>', res)
      //   setDao60Name(res[0])
      //   setDao60TotalSupply(res[1])
      //   setDao60BalanceOf(res[2])
      //   setallAvailableAmount60(res[3])
      //   let newtime = '00'
      //   if (res[4] != '0') {
      //     newtime = formattingDate(new Date().getTime() + res[4] * 3 * 1000)
      //   } else {
      //       if(res[6] > 0 && res[2] != 0){
      //           newtime = `${t("director.text20")}`
      //           setLockBlocks60(true)
      //       }else{
      //           newtime = "00"
      //           setLockBlocks60(false)
      //       }
      //   }
      //   setDao60RestBlocks(newtime)
      //   setDao60CanWithdraw(res[5])
      //   // setPageFlag(false);
      //   d = true
      //   isover(a, b, c, d)
      // })
      // setAllTotalSupply((dao7TotalSupply + dao15TotalSupply + daoTotalSupply + dao60TotalSupply))
   
  }

  const getdao = () => {
    let daotime = setTimeout(() => {
    //   console.log('加载请求')
      getAllDao()
    }, 6000);
    setTimer(daotime)
  }



  // //trs价格
  // if (rateFalse) {
  //   setRateFalse(false)
  //   setTimeout(() => {
  //     Data.getTrsRate().then(res => {
  //       console.log('trs价格')
  //       setRate(res.rate)
  //       setRateFalse(true)
  //     })
  //   }, 3000);
  // }

  // //当前流动性质押
  // if (allBalanceFalse) {
  //   setAllBalanceFalse(false)
  //   setTimeout(() => {
  //     Data.getPoolListData('all').then(res => {
  //       console.log('质押')
  //       setAllBalance(res)
  //       setAllBalanceFalse(true)
  //     })
  //   }, 3000);
  // }

  // //当前挖矿产出
  // if (allBlockFalse) {
  //   setAllBlockFalse(false)
  //   setTimeout(() => {
  //     Data.getAllBlock().then(res => {
  //       console.log('产出')
  //       setAllBock(res)
  //       setAllBlockFalse(true)
  //     })
  //   }, 3000);
  // }

  // if (balanceFalse) {
  //   setBalanceFalse(false)
  //   setTimeout(() => {
  //     API.getWalletAllTrs().then(res => {
  //       console.log('所有')
  //       setBalance(res)
  //       setStakedLp(res)
  //       setBalanceFalse(true)
  //     })
  //   }, 3000);
  // }

  // 提取
  function extract(type) {
      if (dao7BalanceOf > 0 && type == '7') {
        if (Dao7CanWithdraw) {
            API.Dao7Withdraw().then(res => {
            })
        }else{
            toast('extract')
        }
      }else if(dao15BalanceOf > 0 && type == '15'){
        if (Dao15CanWithdraw) {
            API.Dao15Withdraw().then(res => {
            })
        }else{
            toast('extract')
        }
      }else if(daoBalanceOf > 0 && type == '30'){
        if (DaoCanWithdraw) {
            API.DaoWithdraw().then(res => {
            })
        }else{
            toast('extract')
        }
      }else if(dao60BalanceOf > 0 && type == '60'){
        if (Dao60CanWithdraw) {
            API.Dao60Withdraw().then(res => {
            })
        }else{
            toast('extract')
        }
      }else{
        toast('balanceof')
      }
    // if (type == '30' && DaoCanWithdraw) {
    //   API.DaoWithdraw().then(res => {
    //   })
    // } else if (type == '7' && Dao7CanWithdraw) {
    //   API.Dao7Withdraw().then(res => {
    //   })
    // } else if (type == '15' && Dao15CanWithdraw) {
    //   API.Dao15Withdraw().then(res => {
    //   })
    // } else if (type == '60' && Dao60CanWithdraw) {
    //   API.Dao60Withdraw().then(res => {
    //   })
    // } else {
    //   toast('extract')
    // }
  }
  return (
    <>
      {isApprovediv && (
          text == 1 ? <Approvediv>{t("director.text17")}</Approvediv> : text == 0 ? <Approvediv>{t("director.text18")}</Approvediv> : text == 2 ? <Approvediv>{t("director.text14")}</Approvediv> :<Approvediv>{t("director.text19")}</Approvediv> 
        )}
      <Directortitle>
        <img src={title_name} alt="" />
      </Directortitle>
      <Directorh2>DAO {t("director.text21")}</Directorh2>
      <Directortopbox className='directortopbox'>
        <img width='30px' height='30px' src={ require("../../assets/images/mining/driector-card3.png")} alt="" />
        <DirectorAllTotalSupply>
          <Directoricon></Directoricon>
          {/* {formatNum(allTotalSupply)} */}
          {formatNum(0.00)}
        </DirectorAllTotalSupply>
        <Directorh3>{t("director.text30")}(TTQ)</Directorh3>
      </Directortopbox>
      {/*dao7 */}
      {/* <Directorbox>
        <Directortop>
          <Directortopname>{dao7name}</Directortopname>
          <Directortopimg></Directortopimg>
        </Directortop>
        <Directorrow>
          <Directorname>{t("director.text22")}</Directorname>
          <Directorapr>
            365%
            <img width="30" height="30" src={home_cart1} alt="" />
          </Directorapr>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text23")}</Directorname>
          <Directornum>{formatNum(dao7TotalSupply)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text24")}</Directorname>
          <Directornum>{formatNum(balance)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text25")}</Directorname>
          <Directornum>{formatNum(dao7BalanceOf)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text26")}</Directorname>
          <Directornum>{formatNum(allAvailableAmount7)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text27")}</Directorname>
          <Directornum>{Dao7RestBlocks}</Directornum>
        </Directorrow>
        <Miningbottombtn>
          <Miningbtn1 onClick={() => extract('7')}>{t("director.text28")}</Miningbtn1>
          <Miningbtn2 onClick={
            () => {
              setAddFlagtype('7')
              if (!isApprove7) {
                if (pengingApprove7) {
                  toast('locked')
                }
                else approveFn('7')
                return
              } else {
                setAddFlag(true)
                setPengingApprove7(false)
              }
            }}>{isimpower7 ? '授权中...' : t("director.text29")}</Miningbtn2>
        </Miningbottombtn>
      </Directorbox> */}
      {/*dao15 */}
      {/* <Directorbox>
        <Directortop>
          <Directortopname>{dao15name}</Directortopname>
          <Directortopimg></Directortopimg>
        </Directortop>
        <Directorrow>
          <Directorname>{t("director.text22")}</Directorname>
          <Directorapr>
            401.5%
            <img width="30" height="30" src={home_cart1} alt="" />
          </Directorapr>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text23")}</Directorname>
          <Directornum>{formatNum(dao15TotalSupply)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text24")}</Directorname>
          <Directornum>{formatNum(balance)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text25")}</Directorname>
          <Directornum>{formatNum(dao15BalanceOf)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text26")}</Directorname>
          <Directornum>{formatNum(allAvailableAmount15)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text27")}</Directorname>
          <Directornum>{Dao15RestBlocks}</Directornum>
        </Directorrow>
        <Miningbottombtn>
          <Miningbtn1 onClick={() => extract('15')}>{t("director.text28")}</Miningbtn1>
          <Miningbtn2 onClick={
            () => {
              setAddFlagtype('15')
              if (!isApprove15) {
                if (pengingApprove15) {
                  toast('locked')
                }
                else approveFn('15')
                return
              } else {
                setAddFlag(true)
                setPengingApprove15(false)
              }
            }}>{isimpower15 ? '授权中...' : t("director.text29")}</Miningbtn2>
        </Miningbottombtn>
      </Directorbox> */}
      {/*dao30 */}
      <Directorbox>
        <Directortop>
          {/* <Directortopname>{daoname}</Directortopname> */}
          <Directortopname>TTQ DAO</Directortopname>
          <Directortopimg></Directortopimg>
        </Directortop>
        <Directorrow>
          <Directorname>{t("director.text22")}</Directorname>
          <Directorapr>
            0.00%
            <img width="30" height="30" src={home_cart1} alt="" />
          </Directorapr>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text23")}</Directorname>
          {/* <Directornum>{formatNum(daoTotalSupply)}</Directornum> */}
          <Directornum>{formatNum(0.00)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text24")}</Directorname>
          {/* <Directornum>{formatNum(balance)}</Directornum> */}
          <Directornum>{formatNum(0.00)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text25")}</Directorname>
          {/* <Directornum>{formatNum(daoBalanceOf)}</Directornum> */}
          <Directornum>{formatNum(0.00)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text26")}</Directorname>
          {/* <Directornum>{formatNum(allAvailableAmount)}</Directornum> */}
          <Directornum>{formatNum(0.00)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text27")}</Directorname>
          {/* <Directornum>{DaoRestBlocks}</Directornum> */}
          <Directornum>{0.00}</Directornum>
        </Directorrow>
        <Miningbottombtn>
        <Miningbtn1 onClick={() => toast('Dontopen')}>{t("director.text28")}</Miningbtn1>
        <Miningbtn2 onClick={() => toast('Dontopen')}>{t("director.text29")}</Miningbtn2>
          {/* <Miningbtn1 onClick={() => extract('30')}>{t("director.text28")}</Miningbtn1>
          <Miningbtn2 onClick={
            () => {
              setAddFlagtype('30')
              if (!isApprove) {
                if (pengingApprove) {
                  toast('locked')
                }
                else approveFn('30')
                return
              } else {
                setAddFlag(true)
                setPengingApprove(false)
              }
            }}>{isimpower ? '授权中...' : t("director.text29")}</Miningbtn2> */}
        </Miningbottombtn>
      </Directorbox>
      {/*dao60 */}
      {/* <Directorbox>
        <Directortop>
          <Directortopname>{dao60name}</Directortopname>
          <Directortopimg></Directortopimg>
        </Directortop>
        <Directorrow>
          <Directorname>{t("director.text22")}</Directorname>
          <Directorapr>
            474.5%
            <img width="30" height="30" src={home_cart1} alt="" />
          </Directorapr>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text23")}</Directorname>
          <Directornum>{formatNum(dao60TotalSupply)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text24")}</Directorname>
          <Directornum>{formatNum(balance)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text25")}</Directorname>
          <Directornum>{formatNum(dao60BalanceOf)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text26")}</Directorname>
          <Directornum>{formatNum(allAvailableAmount60)}</Directornum>
        </Directorrow>
        <Directorrow>
          <Directorname>{t("director.text27")}</Directorname>
          <Directornum>{Dao60RestBlocks}</Directornum>
        </Directorrow>
        <Miningbottombtn>
          <Miningbtn1 onClick={() => extract('60')}>{t("director.text28")}</Miningbtn1>
          <Miningbtn2 onClick={
            () => {
              setAddFlagtype('60')
              if (!isApprove60) {
                if (pengingApprove60) {
                  toast('locked')
                }
                else approveFn('60')
                return
              } else {
                setAddFlag(true)
                setPengingApprove60(false)
              }
            }}>{isimpower60 ? '授权中...' : t("director.text29")}</Miningbtn2>
        </Miningbottombtn>
      </Directorbox> */}
       {//质押弹窗
        addFlag && (
          <div className="add-mask" onClick={
            () => {
              setAddFlag(false)
            }
          }>
            <div className="add-mask-content" onClick={
              (e) => {
                e.stopPropagation()
              }
            }>
              <p className="mask-title">
                {t("director.text12")}</p>
              <p className="mask-info">
                {/* {popType==='stake'?'':''} */}
                <span> {t("director.text16")}</span>
                <span className="num">
                  {/* unStakedLp */}
                  {stakedLp}
                </span>
              </p>
              <div className="mask-input-box">
                <input type="text" value={inputValue} onChange={
                  (e) => {
                    setInputVal(e.target.value)
                  }
                } />
                <span onClick={
                  () => {
                    setInputVal(balance)
                  }
                }>{t("provideLiquidity.text17")}</span>
              </div>
              <div className="mask-bottom">
                <div className="bottom-btn left-btn" onClick={
                  () => {
                    setAddFlag(false)
                    setInputVal('0')
                  }
                }>{t("provideLiquidity.text18")}</div>
                <div className="bottom-btn right-btn"
                  onClick={
                    () => {
                      if (addFlagtype == '7') {
                        API.Dao7Deposit(inputValue).then(res => {
                          setAddFlag(false)
                        }).catch(error => {
                            console.log('锁仓错误',error)
                          })
                      } else if (addFlagtype == '30') {
                        API.DaoDeposit(inputValue).then(res => {
                          setAddFlag(false)
                        })
                      } else if (addFlagtype == '15') {
                        API.Dao15Deposit(inputValue).then(res => {
                          setAddFlag(false)
                        })
                      } else if (addFlagtype == '60') {
                        API.Dao60Deposit(inputValue).then(res => {
                          setAddFlag(false)
                        })
                      }

                    }
                  }
                >{t("provideLiquidity.text19")}</div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}