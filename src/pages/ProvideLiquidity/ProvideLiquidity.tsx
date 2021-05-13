import React, { useState, useEffect } from 'react';
import './provide.css'

import Data from '../../apis/api/data.js'
import styled from 'styled-components'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import { useTranslation } from "react-i18next"


const ProvideBtn = styled(NavLink)`
text-decoration: none;
`
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

let API, coinInfo ,timers


export default function ProvideLiquidity(props: RouteComponentProps<{ poolIndex: string }>) {
const { t } = useTranslation()

    const poolIndex = props.match.params.poolIndex
    API = Data.getCurrentPool(poolIndex).API
    coinInfo = Data.getCurrentPool(poolIndex).coinInfo
    const [addFlag, setAddFlag] = useState(false)   //显示隐藏 抵押解押弹框
    const [popType, setType] = useState('stake')    //当前弹框类型 stake/抵押    withdraw/解押
    const [isApprove, setApprove] = useState(false) // 授权/非授权
    const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权
    const [pengingApprove, setPengingApprove] = useState(false)
    const [inputValue, setInputVal] = useState('0')   //input的值
    const [stakedLp, setStakedLp] = useState('0.00')
    const [unStakedLp, setUnStakedLp] = useState('0.00')
    const [earned, setEarned] = useState('0.00')
    const clickListener = () => {
    }
    const approveFn = () => {
        API.approve().then(res => {
        setPengingApprove(true)
        }).catch(error => {
            setPengingApprove(false)
        })
    }
    const toast = () => {
        timers && clearTimeout(timers)
        timers = setTimeout(() => {
            setApprovediv(false)
            clearTimeout(timers)
        }, 3000);
    }

    useEffect(() => {
        let setTimeoutTimer;
        const timerFn = function () {
            API.isApprove().then(res => {
                // console.log("是否授权" + res)
                setApprove(res)
            })
            // 抵押的LP
            API.getStakedLp().then(res => {
                setStakedLp(res)
                // console.log("抵押的LP" + res)
            })
            // 未抵押的
            API.getUnStakedLp().then(res => {
                setUnStakedLp(res)
                // console.log("未抵押的" + res)
            })
            // 当前收益
            API.getEarned().then(res => {
                setEarned(res)
                // console.log("当前收益：" + res)
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


    return (
        <>
            <div className="add" key={poolIndex}>
                {/* <p className="title">{t("provideLiquidity.text01")}</p> */}
                <p className="desc">{t("provideLiquidity.text02")} {coinInfo.coin_name}{t("provideLiquidity.text13")}</p>

                <div className="add-content">
                    <p className="content-title">
                        <span>{t("provideLiquidity.text03")}</span>
                        <span className="num">{earned.substring(0, 18)}</span>
                    </p>
                    <p className="my-p-text">{t("provideLiquidity.text04")}</p>
                    <p className="add-info">
                        <div className="provideTwoImg">
                            <img src={coinInfo.pre_coin} alt="" />
                            <img src={coinInfo.next_coin} alt="" />
                        </div>
                        <span> {coinInfo.coin_name}</span>
                        <span className="num">{
                            unStakedLp.substring(0, 18)
                        }</span>
                    </p>
                    {/* <p className="add-info">
                        <span>份额占比</span>
                        <span className="num">{`<0.01%`}</span>
                    </p> */}
                    <span className="line"></span>
                    <p className="add-info">
                        <span>{t("provideLiquidity.text02")}</span>
                    </p>
                    <p className="add-tips">{t("provideLiquidity.text07")}</p>
                    <p className="staked">
                        <span>{t("provideLiquidity.text08")}</span>
                        <span className="num">{stakedLp.substring(0, 18)}</span>
                    </p>
                    <div className="receive-btn add-div-btn"
                        onClick={
                            () => {
                                if (!isApprove) {
                                    if (pengingApprove) {
                                        // alert(`授权中`)
                                        setApprovediv(true)
                                        toast()
                                    }
                                    else approveFn()
                                    return
                                }
                                // console.log(isApprove)
                                API.getReward().then(res => {
                                })
                            }
                        }
                    >{t("provideLiquidity.text09")}</div>
                    {isApprovediv && (
                        <Approvediv>授权中...</Approvediv>
                    )}
                    <div className="add-div-btn other-btn"

                        onClick={
                            () => {
                                if (!isApprove) {
                                    if (pengingApprove) {
                                        // alert(`授权中`)
                                        setApprovediv(true)
                                        toast()
                                    }
                                    else  approveFn()
                                    return
                                }
                                setAddFlag(true)
                                setType('stake')
                            }}
                    >{t("provideLiquidity.text06")}</div>
                    <div className="add-div-btn other-btn"
                        onClick={() => {
                            if (!isApprove) {
                                if (pengingApprove) {
                                    // alert(`授权中`)
                                    setApprovediv(true)
                                    toast()
                                }
                                else  approveFn()
                                return
                            }
                            setAddFlag(true)
                            setType('withdraw')
                        }}
                    >{t("provideLiquidity.text11")}</div>

                    {
                        !isApprove && (
                            <div className="add-div-btn other-btn" onClick={() => {
                                approveFn()
                            }}>{t("provideLiquidity.text10")}</div>
                        )
                    }

                    {/*   返回 */}
                    <ProvideBtn id={`mining-nav-link`} to={`/mining`}>
                        <div className="add-div-btn other-back">{t("provideLiquidity.text14")}</div>
                    </ProvideBtn>
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
                                <p className="mask-title">{popType === 'stake' ? `${t("provideLiquidity.text06")}` : `${t("provideLiquidity.text16")}`}</p>
                                <p className="mask-info">
                                    {/* {popType==='stake'?'':''} */}
                                    <span>{t("provideLiquidity.text15")}</span>
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
                                                switch (popType) {
                                                    case 'stake':
                                                        API.stakedLpToPool(inputValue).then(res => {
                                                            setAddFlag(false)
                                                            // console.log("stakedLpToPool:" + res)
                                                        })
                                                        break;
                                                    case 'withdraw':
                                                        API.stakedLpOutPool(inputValue).then(res => {
                                                            setAddFlag(false)
                                                            // console.log("stakedLpOutPool:" + res)
                                                        })
                                                        break;
                                                    default:

                                                }
                                            }
                                        }
                                    >{t("provideLiquidity.text19")}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* {
                    pengingApprove && (
                        <isApprovediv>授权中...</isApprovediv>
                    )
                } */}

            </div>
        </>
    )
}