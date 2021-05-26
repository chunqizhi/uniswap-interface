// import React,{ Fragment } from "react";
import React, { useState, useEffect } from 'react';

import { useTranslation } from "react-i18next"
import styled from 'styled-components'

import Data from '../../apis/api/data.js'
import API from '../../apis/api/six.js'
import Daoimg from '../../assets/images/trs-icon-defalt-png.png'

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
  const [dao7name, setDao7Name] = useState('TRS DAO-7')//仓名
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
  const [dao15name, setDao15Name] = useState('TRS DAO-15')
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
  const [daoname, setDaoName] = useState('TRS DAO-30')
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
  const [dao60name, setDao60Name] = useState('TRS DAO-60')
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
      API.isApproveDao7().then(res => {
        // console.log("是否授权7" + res)
        if (res) {
            setIsImpower7(false)
        }
        setApprove7(res)
      })
      API.isApproveDao15().then(res => {
        // console.log("是否授权15" + res)
        if (res) {
            setIsImpower15(false)
        }
        setApprove15(res)
      })
      API.isApproveDao60().then(res => {
        // console.log("是否授权60" + res)
        if (res) {
            setIsImpower60(false)
        }
        setApprove60(res)
      })
      Data.getTrsRate().then(async res => {
        // console.log('trs价格 ==>',res.rate)
        setRate(await res.rate)
        // setRateFalse(true)
      })
      //当前流动性质押
      Data.getPoolListData('all').then(async res => {
        // console.log('质押')
        setAllBalance(await res)
        // setAllBalanceFalse(true)
      })
      //当前挖矿产出
      Data.getAllBlock().then(async res => {
        // console.log('产出')
        setAllBock(await res)
        // setAllBlockFalse(true)
      })
      API.getWalletAllTrs().then(async res => {
        // console.log(`setBalance`,res)
        // console.log('所有')
        setBalance(await res)
        setStakedLp(res)
        // setBalanceFalse(true)
      })
      
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
        settext(2)
    }else {
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
    API.getAlldao7().then(res => {
        // console.log('setTimeout =>', res)
        setDao7Name(res[0])
        setDao7TotalSupply(res[1])
        setDao7BalanceOf(res[2])
        setallAvailableAmount7(res[3])
        let newtime = '00'
        if (res[4] != '0') {
          newtime = formattingDate(new Date().getTime() + res[4] * 3 * 1000)
        } else {
            if(res[6] > 0 && res[2] != 0){
                newtime = `${t("director.text20")}`
                setLockBlocks7(true)
            }else{
                newtime = "00"
                setLockBlocks7(false)
            }
        }
        setDao7RestBlocks(newtime)
        setDao7CanWithdraw(res[5])
        // console.log('lockBlocks ==>',res[6])
        a = true
        isover(a, b, c, d)
      })
      API.getAlldao15().then(res => {
        // console.log('setTimeout =>', res)
        setDao15Name(res[0])
        setDao15TotalSupply(res[1])
        setDao15BalanceOf(res[2])
        setallAvailableAmount15(res[3])
        let newtime = '00'
        if (res[4] != '0') {
          newtime = formattingDate(new Date().getTime() + res[4] * 3 * 1000)
        } else {
            if(res[6] > 0 && res[2] != 0){
                newtime = `${t("director.text20")}`
                setLockBlocks15(true)
            }else{
                newtime = "00"
                setLockBlocks15(false)
            }
        }
        setDao15RestBlocks(newtime)
        setDao15CanWithdraw(res[5])
        b = true
        isover(a, b, c, d)
      })
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
        isover(a, b, c, d)
      })
      API.getAlldao60().then(res => {
        // console.log('setTimeout =>', res)
        setDao60Name(res[0])
        setDao60TotalSupply(res[1])
        setDao60BalanceOf(res[2])
        setallAvailableAmount60(res[3])
        let newtime = '00'
        if (res[4] != '0') {
          newtime = formattingDate(new Date().getTime() + res[4] * 3 * 1000)
        } else {
            if(res[6] > 0 && res[2] != 0){
                newtime = `${t("director.text20")}`
                setLockBlocks60(true)
            }else{
                newtime = "00"
                setLockBlocks60(false)
            }
        }
        setDao60RestBlocks(newtime)
        setDao60CanWithdraw(res[5])
        // setPageFlag(false);
        d = true
        isover(a, b, c, d)
      })
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
      <div className="driectorList">
        {isApprovediv && (
          text == 1 ? <Approvediv>{t("director.text17")}</Approvediv> : text == 0 ? <Approvediv>{t("director.text18")}</Approvediv> : <Approvediv>{t("director.text19")}</Approvediv> 
        )}
        <div className="driectorItem">
          <div className="driectorTitle">
            <img src={require('../../assets/images/price-icon-defalt-png.png')} alt="" />
            <span>{t("director.text01")}</span>
          </div>
          <p className="driectorContent">${formatNum(rate)}</p>
        </div>
        <div className="driectorItem">
          <div className="driectorTitle">
            <img src={require('../../assets/images/Pledge-icon-defalt-png.png')} alt="" />
            <span>{t("director.text02")}</span>
          </div>
          <p className="driectorContent">${allBalance}</p>
        </div>
        <div className="driectorItem">
          <div className="driectorTitle">
            <img src={require('../../assets/images/mining-icon-defalt-png.png')} alt="" />
            <span>{t("director.text03")}</span>
          </div>
          <p className="driectorContent"> ${formatNum((Number(dao7TotalSupply) + Number(dao15TotalSupply) + Number(daoTotalSupply) + Number(dao60TotalSupply)))}</p>
        </div>
        <div className="driectorItem">
          <div className="driectorTitle">
            <img src={require('../../assets/images/value-icon-defalt-png.png')} alt="" />
            <span>{t("director.text04")}</span>
          </div>
          <p className="driectorContent">${formatNum((Number(dao7TotalSupply) + Number(dao15TotalSupply) + Number(daoTotalSupply) + Number(dao60TotalSupply)) * rate)}</p>
        </div>
      </div>
      {/* 7天 */}
      <div className="driectorBox">
        {/* <img width="64px" height="64px" src={require('../../assets/images/trs-icon-defalt-png.png')} alt="" Daoimg /> */}
        <div className='driector-img' style={{ background: `url('${Daoimg}') center center /cover` }}></div>
        <p className="driectorBoxP1">{dao7name}</p>
        <p className="driectorBoxP2">APY 365%</p>
        {/* <p className="driectorBoxP2"></p> */}
        <div className="driectorBoxList">
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/lock-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text05")}：</span>
            <span>{formatNum(dao7TotalSupply)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/mine-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text06")}：</span>
            <span>{formatNum(dao7BalanceOf)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text07")}：</span>
            <span>{formatNum(allAvailableAmount7)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text15")}：</span>
            <span style={{color: lockBlocks7 ? "#19e192" : "#fff"}}>{Dao7RestBlocks}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/wallet-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text08")}：</span>
            <span>{formatNum(balance)}</span>
          </div>
        </div>
        <div className="drictorBut">
          <button className="drictorExtract" onClick={() => extract('7')} >{t("director.text11")}</button>
          <button className="drictorLocking" onClick={
            () => {
              // console.log("isApprove =>",isApprove)
              // console.log("pengingApprove =>",pengingApprove)
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
            }}>{isimpower7 ? '授权中...' : t("director.text12")}</button>
        </div>
      </div>
      {/* 15天 */}
      <div className="driectorBox">
        {/* <img width="64px" height="64px" src={require('../../assets/images/trs-icon-defalt-png.png')} alt="" /> */}
        <div className='driector-img' style={{ background: `url('${Daoimg}') center center /cover` }}></div>
        <p className="driectorBoxP1">{dao15name}</p>
        <p className="driectorBoxP2">APY 401.5%</p>
        {/* <p className="driectorBoxP2"></p> */}
        <div className="driectorBoxList">
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/lock-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text05")}：</span>
            <span>{formatNum(dao15TotalSupply)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/mine-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text06")}：</span>
            <span>{formatNum(dao15BalanceOf)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text07")}：</span>
            <span>{formatNum(allAvailableAmount15)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text15")}：</span>
            <span style={{color: lockBlocks15 ? "#19e192" : "#fff"}}>{Dao15RestBlocks}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/wallet-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text08")}：</span>
            <span>{formatNum(balance)}</span>
          </div>
        </div>
        <div className="drictorBut">
          <button className="drictorExtract" onClick={() => extract('15')} >{t("director.text11")}</button>
          <button className="drictorLocking" onClick={
            () => {
              setAddFlagtype('15')
            //   console.log("isApprove15 =>", isApprove15)
            //   console.log("pengingApprove15 =>", pengingApprove15)
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
            }}>{isimpower15 ? '授权中...' : t("director.text12")}</button>
        </div>
      </div>
      {/* 30天 */}
      <div className="driectorBox">
        {/* <img width="64px" height="64px" src={require('../../assets/images/trs-icon-defalt-png.png')} alt="" /> */}
        <div className='driector-img' style={{ background: `url('${Daoimg}') center center /cover` }}></div>
        <p className="driectorBoxP1">{daoname}</p>
        <p className="driectorBoxP2">APY 438%</p>
        {/* <p className="driectorBoxP2"></p> */}
        <div className="driectorBoxList">
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/lock-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text05")}：</span>
            <span>{formatNum(daoTotalSupply)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/mine-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text06")}：</span>
            <span>{formatNum(daoBalanceOf)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text07")}：</span>
            <span>{formatNum(allAvailableAmount)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text15")}：</span>
            <span style={{color: lockBlocks ? "#19e192" : "#fff"}}>{DaoRestBlocks}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/wallet-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text08")}：</span>
            <span>{formatNum(balance)}</span>
          </div>
        </div>
        <div className="drictorBut">
          <button className="drictorExtract" onClick={() => extract('30')} >{t("director.text11")}</button>
          <button className="drictorLocking" onClick={
            () => {
            //   console.log("isApprove =>", isApprove)
            //   console.log("pengingApprove =>", pengingApprove)
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
            }}>{isimpower ? '授权中...' : t("director.text12")}</button>
        </div>
      </div>
      {/* 60天 */}
      <div className="driectorBox">
        {/* <img width="64px" height="64px" src={require('../../assets/images/trs-icon-defalt-png.png')} alt="" /> */}
        <div className='driector-img' style={{ background: `url('${Daoimg}') center center /cover` }}></div>
        <p className="driectorBoxP1">{dao60name}</p>
        <p className="driectorBoxP2">APY 474.5%</p>
        {/* <p className="driectorBoxP2"></p> */}
        <div className="driectorBoxList">
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/lock-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text05")}：</span>
            <span>{formatNum(dao60TotalSupply)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/mine-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text06")}：</span>
            <span>{formatNum(dao60BalanceOf)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text07")}：</span>
            <span>{formatNum(allAvailableAmount60)}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/untie-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text15")}：</span>
            <span style={{color: lockBlocks60 ? "#19e192" : "#fff"}}>{Dao60RestBlocks}</span>
          </div>
          <div className="driectorBoxItem">
            <img src={require('../../assets/images/wallet-icon-defalt-png.png')} alt="" />
            <span className="driectorBoxItemSpan">{t("director.text08")}：</span>
            <span>{formatNum(balance)}</span>
          </div>
        </div>
        <div className="drictorBut">
          <button className="drictorExtract" onClick={() => extract('60')} >{t("director.text11")}</button>
          <button className="drictorLocking" onClick={
            () => {
              setAddFlagtype('60')
            //   console.log("isApprove60 =>", isApprove60)
            //   console.log("pengingApprove60 =>", pengingApprove60)
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
            }}>{isimpower60 ? '授权中...' : t("director.text12")}</button>
        </div>
      </div>
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