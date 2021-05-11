// import React,{ Fragment } from "react";
import React , { useState }from "react";
import { useTranslation } from "react-i18next"
import Data from '../../apis/api/data.js'

import './index.css'


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

export default function Director() {
    const { t } = useTranslation();
    const [rate, setRate] = useState(0)
    const [allBalance, setAllBalance] = useState(0)
    const [allBlock, setAllBock] = useState(0.00)

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
    // 提取
    function extract() {
        console.log('extract');
    }
    // 锁定
    function lockin() {
        console.log('lockin');
    }
    return (
        <>
            <div className="driectorList">
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
                <img src={ require('../../assets/images/trs-icon-defalt-png.png') } alt="" />
                <p className="driectorBoxP1">TRS DAO-5</p>
                <p className="driectorBoxP2">{t("director.text09")}：5{t("director.text10")}</p>
                <div className="driectorBoxList">
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/lock-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text05")}：</span>
                        <span>100.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/mine-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text06")}：</span>
                        <span>100.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/untie-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text07")}：</span>
                        <span>100.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/wallet-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">{t("director.text08")}：</span>
                        <span>100.000</span>
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