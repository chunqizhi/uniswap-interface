import React, { useState, useEffect } from 'react';
import './provide.css'
import { ArrowLeft } from 'react-feather'
import creatHistory from 'history/createHashHistory'

import Data from '../../apis/api/data.js'
import styled from 'styled-components'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import home_cart1 from "../../assets/images/home/nav-logo.png"
import mining_cart1 from "../../assets/images/mining/mining-card1.png"
import mining_cart2 from "../../assets/images/mining/mining-card2.png"


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

const Miningpledget = styled.div`
    display:flex;
    background-image: url(${mining_cart1});
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    color:#AB5729;
    position: relative;
    max-width:450px;
    border-radius: 30px;
    margin-bottom: 10px;
`
const Miningtopbgimg = styled.div`
    width:50px;
    height:50px;
    background-image: url(${home_cart1});
    background-repeat: no-repeat;
    background-size: cover;
    margin:33px 0px 20px;
`
const Miningtopbtn = styled.div`
    width:80%;
    padding:10px 0;
    color:#fff;
    background-color:#ab5729;
    text-align:center;
    border-radius:20px;
    margin:30px 0 20px;
`
const Miningcart2box = styled(Miningpledget)`
    background-image: url(${mining_cart2});
`

const Miningtopimg = styled.div`
    display:flex;
    align-item:center;
    margin:33px 0 20px;
    > img{
        width:50px;
        height:50px;
        position: relative;
    }
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
const StyledArrowLeft = styled(ArrowLeft)`
  // color: ${({ theme }) => theme.text1};
  position: absolute;
    left: 8%;
    top: 10%;
`
let API, coinInfo ,timers


export default function ProvideLiquidity(props: RouteComponentProps<{ poolIndex: string }>) {
const { t } = useTranslation()
const history = creatHistory();


    const poolIndex = props.match.params.poolIndex
    API = Data.getCurrentPool(poolIndex).API
    coinInfo = Data.getCurrentPool(poolIndex).coinInfo
    const [addFlag, setAddFlag] = useState(false)   //显示隐藏 抵押解押弹框
    const [popType, setType] = useState('stake')    //当前弹框类型 stake/抵押    withdraw/解押
    const [isApprove, setApprove] = useState(false) // 授权/非授权
    const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权
    const [pengingApprove, setPengingApprove] = useState(false)
    const [inputValue, setInputVal] = useState('0')   //input的值
    const [stakedLp, setStakedLp] = useState('0.00')//已质押
    const [unStakedLp, setUnStakedLp] = useState('0.00')//未质押
    const [earned, setEarned] = useState('0.00')//当前收益
    // const clickListener = () => {}
    const approveFn = () => {
        setPengingApprove(true)
        API.approve().then(res => {
            setPengingApprove(false)
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
        // window.addEventListener("click", clickListener, false)
        // timerFn()
        timer()
        return function () {
            // window.removeEventListener("click", clickListener, false)
            setTimeoutTimer && clearTimeout(setTimeoutTimer)
        }
    }, [])


    return (
        <>
            <div className="add" key={poolIndex}>
                {/* <p className="desc">{t("provideLiquidity.text02")} {coinInfo.coin_name}{t("provideLiquidity.text13")}</p> */}

                {/* <div className="add-content">
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
                                        setApprovediv(true)
                                        toast()
                                    }
                                    else approveFn()
                                    return
                                }
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
                    <ProvideBtn id={`mining-nav-link`} to={`/mining`}>
                        <div className="add-div-btn other-back">{t("provideLiquidity.text14")}</div>
                    </ProvideBtn>
                </div> */}

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
                                    {popType === 'stake' ? `${t("provideLiquidity.text06")}` : `${t("provideLiquidity.text16")}`}</p>
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
                {
                    pengingApprove && (
                        <Approvediv>{t("provideLiquidity.text25")}</Approvediv>
                    )
                }

            </div>
            <div>
            
            </div>
            <Miningpledget>
                <StyledArrowLeft style={{ color: '#d19d7e' }} onClick={()=>{
                    history.goBack();
                    // adding && dispatch(resetMintState())
                }}/>
                <Miningtopbgimg></Miningtopbgimg>
                <div className='earnings'>{earned.substring(0, 18)}</div>
                <div className='upearnings'>{t("provideLiquidity.text20")}TTQ{t("provideLiquidity.text21")}</div>
                <Miningtopbtn onClick={
                            () => {
                                if (!isApprove) {
                                    if (pengingApprove) {
                                        setApprovediv(true)
                                        toast()
                                    }
                                    else approveFn()
                                    return
                                }
                                API.getReward().then(res => {
                                })
                            }
                        }>{t("provideLiquidity.text09")}</Miningtopbtn>
            </Miningpledget>
            <Miningcart2box>
                <Miningtopimg>
                    {
                        coinInfo.coin_name.indexOf('/') == '-1' ? '' : (<img style={{left:'7px',zIndex:'2'}} src={ coinInfo.pre_coin } alt="" />)
                    }
                    <img style={{right:'7px'}} src={ coinInfo.next_coin } alt="" />
                </Miningtopimg>
                <div className='earnings'>{coinInfo.coin_name}</div>
                <div className='upearnings'>{t("provideLiquidity.text08")}:{stakedLp.substring(0, 18)}</div>
                <div className='upearnings'>{t("provideLiquidity.text24")}:{unStakedLp.substring(0, 18)}</div>
                <Miningbottombtn>
                    <Miningbtn1 onClick={() => {
                            if (!isApprove) {
                                if (pengingApprove) {
                                    setApprovediv(true)
                                    toast()
                                }
                                else  approveFn()
                                return
                            }
                            setAddFlag(true)
                            setType('withdraw')
                        }}>{t("provideLiquidity.text22")}</Miningbtn1>
                    
                    {
                        !isApprove ? (
                            // <div className="add-div-btn other-btn" onClick={() => {
                            //     approveFn()
                            // }}>{t("provideLiquidity.text10")}</div>
                            <Miningbtn2  onClick={
                                () => {
                                    approveFn()
                                }}>{t("provideLiquidity.text23")}</Miningbtn2>
                        ) : (
                            <Miningbtn2  onClick={
                            () => {
                                if (!isApprove) {
                                    if (pengingApprove) {
                                        setApprovediv(true)
                                        toast()
                                    }
                                    else  approveFn()
                                    return
                                }
                                setAddFlag(true)
                                setType('stake')
                            }}>{t("provideLiquidity.text23")}</Miningbtn2>
                        )
                    }
                </Miningbottombtn>
            </Miningcart2box>
        </>
    )
}