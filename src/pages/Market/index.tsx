// import React,{ Fragment } from "react";
// import React , { useState }from "react";
import React, { useState, useEffect } from 'react'

import { useTranslation } from "react-i18next"
import styled from 'styled-components'
import { NavLink } from "react-router-dom";


import Data from '../../apis/api/data.js'
import API from '../../apis/api/six.js'

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
const Headertext = styled.div`
    display: flex;
    align-items: center;
    width:100%
    padding:20px 0;
    font-size:16px;
    color:#54dd7e;
`
const Marketlistbox = styled.div`
    width:100%;
`
const Marketlist = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#14223d;
    border-radius: 12px;
    padding: 10px 0;
    margin-bottom: 10px;

`
const Marketlistrow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
`
const Marketlisttop = styled(Marketlistrow)`
    color:#516589;
    font-size: 12px;
    text-align:center;
    >img{
        width:14px;
        height:14px;
    }
`
const Marketlistmiddle = styled(Marketlistrow)`
    color:#bac5d9;
`
const Marketlistbottom = styled(Marketlistrow)`
    color:#17be82;
`
const Marketlistbtn = styled.div`
`
const Dealbtn = styled(NavLink)`
    width:40%
    border:2px solid #17be82;
    padding:10px 0;
    text-align:center;
    border-radius:5px;
    color:#17be82;
    text-decoration: none;
`
const Mining = styled(NavLink)`
    width:40%
    background-image: linear-gradient(to right, #28b3cc , #3adb9e);
    padding:12px 0;
    text-align:center;
    border-radius:5px;
    color:#fff;
    text-decoration: none;
`
const Apydiv = styled.div`
    padding:5px 15px;
    background-color:#d94853;
    color:#fff;
    border-radius:6px;
`
const  Positive = styled(Apydiv)`
    background-color:#008154;
`
const formatNum = function (str: string|number) {
    if(str*1<0) return 0
    str=""+str
    let flag = str.indexOf('.') > 0
    let temp
    if(flag){
        if( str.split('.')[0].length>4){
            let pre = str.split('.')[0]
            let next =  str.split('.')[1]
            temp =pre+'.'+next.substring(0,2)
        }
        else {
            let pre = str.split('.')[0]
            let next =  str.split('.')[1]
            temp =pre+'.'+next.substring(0,6)
        }
    } else   temp =str

    return temp
}
let timers


export default function Director() {
    const { t } = useTranslation();
    const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权

    // 判断是否是第一次加载页面  判断发送请求
    const [ pageFlag, setPageFlag ] = useState(false);
    const [rate, setRate] = useState(0)
    const [mainList, setMainList] = useState()
    const [allpoollist, setAllpoollist] = useState([])
    // const [defaultlist, setDefaultlist] = useState([])
    // 如果是true 持续加载更新
    if (pageFlag) {
        setTimeout(() => {
            Data.getAllTrsRate().then(res => {
                setRate(res)
            })
            Data.getPoolListData().then(res => {
                var nums = res.main.concat(res.flat, res.ideas);
                let arr = []
                nums.map(function (value, index, array) {
                    if (value.coin_name.indexOf('USDT') !== -1 && value.coin_name.indexOf('TRS') == -1) {
                        arr.push(value)
                    }
                    if (value.coin_name.indexOf('USDT') !== -1 && value.coin_name.indexOf('TRS') !== -1) {
                        arr.unshift(value)
                    }

                });
                setAllpoollist(arr)
                setMainList(res);
                setPageFlag(false);

            })
        }, 1500);
    }
    useEffect(()=>{
        if (!pageFlag) {
            Data.getAllTrsRate().then(res => {
                setRate(res)
            })
            Data.getPoolListData().then(res => {
                var nums = res.main.concat(res.flat, res.ideas);
                let arr = []
                nums.map(function (value, index, array) {
                    if (value.coin_name.indexOf('USDT') !== -1 && value.coin_name.indexOf('TRS') == -1) {
                        arr.push(value)
                    }
                    if (value.coin_name.indexOf('USDT') !== -1 && value.coin_name.indexOf('TRS') !== -1) {
                        arr.unshift(value)
                    }

                });
                setAllpoollist(arr)
                setMainList(res);
                setPageFlag(true);
            })
        }
    },[pageFlag])
    const toast = () => {
        setApprovediv(true)
        timers && clearTimeout(timers)
        timers = setTimeout(() => {
            setApprovediv(false)
            clearTimeout(timers)
        }, 2000);
    }

    return (
        <>
            <div className="market">
            {isApprovediv && (
                <Approvediv>{t("director.text13")}</Approvediv>
            )}
                <Headertext>
                    <img width="24px" height="24px" src={ require('../../assets/images/market_top_icon.png') } alt=""/>
                    <div  className="head">行情中心</div>
                </Headertext>
                <Marketlistbox>
                {
                    allpoollist.map((item: Item,index:Index) => {
                        return (
                            <>
                                <Marketlist>
                                    <Marketlisttop>
                                        <div className="topname">交易
                                            <img src={ require('../../assets/images/market-top-icon.png') } alt="" />
                                        </div>
                                        <div className="topprice">最新价
                                            <img src={ require('../../assets/images/market-top-icon.png') } alt="" />
                                        </div>
                                        <div className="topapy">APY
                                            <img src={ require('../../assets/images/market-top-icon.png') } alt="" />
                                        </div>
                                    </Marketlisttop>
                                    <Marketlistmiddle>
                                        <div className="comparison">
                                            <img width='26px' height='26px' src={ item.coin_name.indexOf('USDT') == 0 ?  item.next_coin : item.pre_coin } alt="" />
                                            <p className="comparisonname">{item.coin_name.indexOf('USDT') == 0 ? `${item.coin_name.split("/")[1]}/${item.coin_name.split("/")[0]}` : `${item.coin_name.split("/")[0]}/${item.coin_name.split("/")[1]}` }</p>
                                        </div>
                                        <div>{formatNum(rate[index].rate)}</div>
                                        {item.apy && item.apy > 0 ? 
                                            <Positive>+{item.apy}</Positive> : <Apydiv>{item.apy}</Apydiv>
                                        }
                                    </Marketlistmiddle>
                                    <Marketlistbottom>
                                        <Dealbtn to="/exchange">交易</Dealbtn>
                                        <Mining to={"/provideLiquidity/" + item.poolIndex}>挖矿</Mining>
                                    </Marketlistbottom>
                                </Marketlist>
                            </>
                        )
                    })
                    }
                    {/* <NavLink to="/exchange" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-duihuan"></span>
                    <span>{t("navbar.text02")}</span>
                </NavLink> */}
                </Marketlistbox>
            </div>
        </>
    )
}