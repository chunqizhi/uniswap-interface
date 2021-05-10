import React,{ Fragment } from "react";
import { useTranslation } from "react-i18next"
import './index.css'

export default function Director() {
    const { t } = useTranslation();
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
                        <span>TRS价格{t("director.text01")}</span>
                    </div>
                    <p className="driectorContent">7,397,507.51</p>
                </div>
                <div className="driectorItem">
                    <div className="driectorTitle">
                        <img src={ require('../../assets/images/Pledge-icon-defalt-png.png') } alt="" />
                        <span>当前流动性质押</span>
                    </div>
                    <p className="driectorContent">16,551,898.80</p>
                </div>
                <div className="driectorItem">
                    <div className="driectorTitle">
                        <img src={ require('../../assets/images/mining-icon-defalt-png.png') } alt="" />
                        <span>当前挖矿产出</span>
                    </div>
                    <p className="driectorContent">7,397,507.51</p>
                </div>
                <div className="driectorItem">
                    <div className="driectorTitle">
                        <img src={ require('../../assets/images/value-icon-defalt-png.png') } alt="" />
                        <span>当前挖矿产出价值</span>
                    </div>
                    <p className="driectorContent">0.00</p>
                </div>
            </div>
            <div className="driectorBox">
                <img src={ require('../../assets/images/trs-icon-defalt-png.png') } alt="" />
                <p className="driectorBoxP1">TRS DAO-5</p>
                <p className="driectorBoxP2">锁仓期：5天</p>
                <div className="driectorBoxList">
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/lock-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">总锁仓量：</span>
                        <span>100.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/mine-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">我的锁仓：</span>
                        <span>100.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/untie-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">解锁数量：</span>
                        <span>100.000</span>
                    </div>
                    <div className="driectorBoxItem">
                        <img src={ require('../../assets/images/wallet-icon-defalt-png.png') } alt="" />
                        <span className="driectorBoxItemSpan">钱包余额：</span>
                        <span>100.000</span>
                    </div>
                </div>
                <div className="drictorBut">
                    <button className="drictorExtract" onClick={ ()=> extract() } >提取</button>
                    <button className="drictorLocking" onClick={ ()=> lockin() }>锁仓</button>
                </div>
            </div>
        </>
    )
}