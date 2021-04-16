import React, { useState, useEffect } from 'react';
import './provide.css'
import PreCoin from '../../assets/images/mining/pre_coin.png'
import NextCoin from '../../assets/images/mining/next_coin.png'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ProvideBtn = styled(NavLink)`
text-decoration: none;
`
export default function ProvideLiquidity() {
    const [addFlag, setAddFlag] = useState(false)
    const clickListener = () => {
        console.log("clickListener")
    }
    useEffect(() => {
        //使用事件冒泡模型
        window.addEventListener("click", clickListener, false)
        return () => window.removeEventListener("click", clickListener, false)
    }, [])


    //   to={`/remove/${currencyId(currency0)}/${currencyId(currency1)}`
    return (
        <>
            <div className="add">
                <p className="title">提供流动性</p>
                <p className="desc">获取 USDT/HUSD-LP 赚取BXH</p>

                <div className="add-content">
                    <p className="content-title">
                        <span>未领取挖矿收益</span>
                        <span className="num">0.004597</span>
                    </p>
                    <p className="my-p-text">我的仓位</p>
                    <p className="add-info">
                        <img src={PreCoin} alt="" />
                        <img src={NextCoin} alt="" />
                        <span>USDT/HUSD</span>
                        <span className="num">0</span>
                    </p>
                    <p className="add-info">
                        <span>份额占比</span>
                        <span className="num">{`<0.01%`}</span>
                    </p>
                    <span className="line"></span>
                    <p className="add-info">
                        <span>抵押</span>
                    </p>
                    <p className="add-tips">获得流动资金LP，需抵押后才开始流动性挖矿</p>
                    <p className="staked">
                        <span>已抵押LP</span>
                        <span className="num">0.00004</span>
                    </p>
                    <div className="receive-btn add-div-btn" onClick={
                        () => {
                            setAddFlag(true)
                        }
                    }>领取收益</div>
                    <div className="add-div-btn other-btn">抵押</div>
                    <div className="add-div-btn other-btn">取回流动性</div>

                    {/*   跳转到移除 */}
                    <ProvideBtn id={`remove-nav-link`} to={`/remove/0x53afB93BB1Fbf7FbF8DF9A119807F8d1d495d81A/0xd218695d0312afA08C230315fa506383cA6447a8`}>
                        <div className="add-div-btn other-btn">- 流动资金</div>
                    </ProvideBtn>
                </div>

                {
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
                                <p className="mask-title">抵押</p>
                                <p className="mask-info">
                                    <span>可用余额</span>
                                    <span className="num">0.00036</span>
                                </p>
                                <div className="mask-input-box">
                                    <input type="text" />
                                    <span>最大</span>
                                </div>
                                <div className="mask-bottom">
                                    <div className="bottom-btn left-btn" onClick={
                                        () => {
                                            setAddFlag(false)
                                        }
                                    }>取消</div>
                                    <div className="bottom-btn right-btn">确认</div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}