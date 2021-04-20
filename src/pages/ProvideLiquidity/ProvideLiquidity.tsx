import React, { useState, useEffect } from 'react';
import './provide.css'
import PreCoin from '../../assets/images/mining/pre_coin.png'
import NextCoin from '../../assets/images/mining/next_coin.png'

import One from '../../apis/api/one.js'
import Two from '../../apis/api/two.js'
import Three from '../../apis/api/three.js'
import Four from '../../apis/api/four.js'
import Five from '../../apis/api/five.js'
import Six from '../../apis/api/six.js'
import Seven from '../../apis/api/seven.js'
import Eight from '../../apis/api/eight.js'
import Nine from '../../apis/api/nine.js'
import Ten from '../../apis/api/ten.js'

import styled from 'styled-components'
import { NavLink, RouteComponentProps } from 'react-router-dom'
// import contract from '../../apis/api/index'

const ProvideBtn = styled(NavLink)`
text-decoration: none;
`
let API

export default function ProvideLiquidity(props: RouteComponentProps<{ poolIndex: string }>) {
    const poolIndex = props.match.params.poolIndex

    switch (poolIndex) {
        case "one":
            API = One
            break;
        case "two":
            API = Two
            break;
        case "three":
            API = Three
            break;
        case "four":
            API = Four
            break;
        case "five":
            API = Five
            break;
        case "six":
            API = Six
            break;
        case "seven":
            API = Seven
            break;
        case "eight":
            API = Eight
            break;
        case "nine":
            API = Nine
            break;
        case "ten":
            API = Ten
            break;
        default:
            console.log('error')
    }

    const [addFlag, setAddFlag] = useState(false)   //显示隐藏 抵押解押弹框
    const [popType, setType] = useState('stake')    //当前弹框类型 stake/抵押    withdraw/解押
    const [isApprove, setApprove] = useState(false) // 授权/非授权
    const [inputValue, setInputVal] = useState('0')   //input的值
    const [stakedLp, setStakedLp] = useState('0.00')
    const [unStakedLp, setUnStakedLp] = useState('0.00')
    const [earned, setEarned] = useState('0.00')
    const clickListener = () => {
        console.log("clickListener")
    }

    useEffect(() => {
        let setTimeoutTimer;
        const timerFn = function () {
            API.isApprove().then(res => {
                console.log("是否授权" + res)
                setApprove(res)
            })
            // 抵押的LP
            API.getStakedLp().then(res => {
                setStakedLp(res)
                console.log("抵押的LP" + res)
            })
            // 未抵押的
            API.getUnStakedLp().then(res => {
                setUnStakedLp(res)
                console.log("未抵押的" + res)
            })
            // 当前收益
            API.getEarned().then(res => {
                setEarned(res)
                console.log("当前收益：" + res)
            })
        }


        const timer = function () {
            setTimeoutTimer && clearTimeout(setTimeoutTimer)
            timerFn()
            setTimeoutTimer = setTimeout(() => {
                timer()
            }, 4000);
        }
        //使用事件冒泡模型
        window.addEventListener("click", clickListener, false)
        timerFn()
        timer()
        return function () {
            window.removeEventListener("click", clickListener, false)
            setTimeoutTimer && clearTimeout(setTimeoutTimer)
        }
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
                        <span className="num">{earned.substring(0, 6)}</span>
                    </p>
                    <p className="my-p-text">我的LP</p>
                    <p className="add-info">
                        <img src={PreCoin} alt="" />
                        <img src={NextCoin} alt="" />
                        <span>USDT/HUSD</span>
                        <span className="num">{
                            unStakedLp.substring(0, 6)
                        }</span>
                    </p>
                    {/* <p className="add-info">
                        <span>份额占比</span>
                        <span className="num">{`<0.01%`}</span>
                    </p> */}
                    <span className="line"></span>
                    <p className="add-info">
                        <span>抵押</span>
                    </p>
                    <p className="add-tips">获得流动资金LP，需抵押后才开始流动性挖矿</p>
                    <p className="staked">
                        <span>已抵押LP</span>
                        <span className="num">{stakedLp.substring(0, 6)}</span>
                    </p>
                    <div className="receive-btn add-div-btn"
                        onClick={
                            () => {
                                if (!isApprove) return
                                API.getReward().then(res => {
                                })
                            }
                        }
                    >领取收益</div>
                    <div className="add-div-btn other-btn"

                        onClick={
                            () => {
                                if (!isApprove) return
                                setAddFlag(true)
                                setType('stake')
                            }}
                    >抵押</div>
                    <div className="add-div-btn other-btn"
                        onClick={() => {
                            if (!isApprove) return
                            setAddFlag(true)
                            setType('withdraw')
                        }}
                    >取回流动性</div>

                    {
                        !isApprove && (
                            <div className="add-div-btn other-btn" onClick={() => {
                                API.approve().then(res => {
                                    // approFn(res)
                                })
                            }}>授权</div>
                        )
                    }

                    {/*   返回 */}
                    <ProvideBtn id={`mining-nav-link`} to={`/mining`}>
                        <div className="add-div-btn other-btn">返回</div>
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
                                <p className="mask-title">{popType === 'stake' ? '抵押' : '解押'}</p>
                                <p className="mask-info">
                                    {/* {popType==='stake'?'':''} */}
                                    <span>可用余额</span>
                                    <span className="num">
                                        {/* unStakedLp */}
                                        {popType === 'stake' ? unStakedLp : stakedLp}
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
                                            switch (popType) {
                                                case 'stake':
                                                    setInputVal(unStakedLp)
                                                    break;
                                                case 'withdraw':
                                                    setInputVal(stakedLp)
                                                    break;
                                                default:
                                                    setInputVal(unStakedLp);

                                            }
                                        }
                                    }>最大</span>
                                </div>
                                <div className="mask-bottom">
                                    <div className="bottom-btn left-btn" onClick={
                                        () => {
                                            setAddFlag(false)
                                            setInputVal('0')
                                        }
                                    }>取消</div>
                                    <div className="bottom-btn right-btn"
                                        onClick={
                                            () => {
                                                switch (popType) {
                                                    case 'stake':
                                                        API.stakedLpToPool(inputValue).then(res => {
                                                            setAddFlag(false)
                                                            console.log("stakedLpToPool:" + res)
                                                        })
                                                        break;
                                                    case 'withdraw':
                                                        API.stakedLpOutPool(inputValue).then(res => {
                                                            setAddFlag(false)
                                                            console.log("stakedLpOutPool:" + res)
                                                        })
                                                        break;
                                                    default:

                                                }
                                            }
                                        }
                                    >确认</div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}