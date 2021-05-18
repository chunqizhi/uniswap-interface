// import React,{ Fragment } from "react";
import React , { useState }from "react";
import { useTranslation } from "react-i18next"
import styled from 'styled-components'

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
            temp =pre+'.'+next.substring(0,4)
        }
    } else   temp =str

    return temp
}
let timers

export default function Director() {
    const { t } = useTranslation();
    const [rate, setRate] = useState(0)
    const [allBalance, setAllBalance] = useState(0)
    const [allBlock, setAllBock] = useState(0.00)
    const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权
    const [balance, setBalance] = useState(0.00)

    const toast = () => {
        setApprovediv(true)
        timers && clearTimeout(timers)
        timers = setTimeout(() => {
            setApprovediv(false)
            clearTimeout(timers)
        }, 2000);
    }

    //trs价格
    Data.getTrsRate().then(res => {
        setRate(res.rate)
    })
    //当前流动性质押
    Data.getPoolListData('all').then(res => {
        setAllBalance(res)
    })
    //当前挖矿产出
    Data.getAllBlock().then(res=>{
        // console.log(`setAllBock`,res)
        setAllBock(res)
    })
    API.getWalletAllTrs().then(res => {
        // console.log(`setBalance`,res)
        setBalance(res)
    })
    
    // 提取
    function extract() {
        // console.log('extract');
        toast()
    }
    // 锁定
    function lockin() {
        // console.log('lockin');
        toast()
    }
    return (
        <>
            <div className="driectorList">
            {isApprovediv && (
                        <Approvediv>{t("director.text13")}</Approvediv>
                    )}
                <div className="driectorItem">
                    <div className="driectorTitle">
                        <img src={ require('../../assets/images/price-icon-defalt-png.png') } alt="" />
                        <span>{t("director.text01")}</span>
                    </div>
                    <p className="driectorContent">${ formatNum(rate) }</p>
                </div>
                <div className="driectorItem">
                    <div className="driectorTitle">
                        <img src={ require('../../assets/images/Pledge-icon-defalt-png.png') } alt="" />
                        <span>{t("director.text02")}</span>
                    </div>
                    <p className="driectorContent">${allBalance}</p>
                </div>
                <div className="driectorItem">
                    <div className="driectorTitle">
                        <img src={ require('../../assets/images/mining-icon-defalt-png.png') } alt="" />
                        <span>{t("director.text03")}</span>
                    </div>
                    <p className="driectorContent"> ${formatNum(allBlock)}</p>
                </div>
                <div className="driectorItem">
                    <div className="driectorTitle">
                        <img src={ require('../../assets/images/value-icon-defalt-png.png') } alt="" />
                        <span>{t("director.text04")}</span>
                    </div>
                    <p className="driectorContent">${formatNum(allBlock*rate)}</p>
                </div>
            </div>
            <div className="driectorBox">
                <img width="64px" height="64px" src={ require('../../assets/images/trs-icon-defalt-png.png') } alt="" />
                <p className="driectorBoxP1">TRS DAO-30</p>
                <p className="driectorBoxP2">{t("director.text09")}：30{t("director.text10")}</p>
                <div className="driectorBoxList">
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/lock-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text05")}：</span>
                        <span>0.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/mine-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text06")}：</span>
                        <span>0.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/untie-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text07")}：</span>
                        <span>0.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/wallet-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text08")}：</span>
                        <span>{balance}</span>
                    </div>
                </div>
                <div className="drictorBut">
                    <button className="drictorExtract" onClick={ ()=> extract() } >{t("director.text11")}</button>
                    <button className="drictorLocking" onClick={ ()=> lockin() }>{t("director.text12")}</button>
                </div>
            </div>
        </>
    )
}