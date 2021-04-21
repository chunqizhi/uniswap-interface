import React, { useState, useEffect } from 'react';
import './mining.css'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Data from '../../apis/api/data.js'
import API from '../../apis/api/one.js'

const TitleDiv = styled.div`
`
const TitleSup = styled.span`
color: #000;
  font-size: 24px;
  font-weight: 700;
  width: 80%;
  margin-top: 10px;
`
const ItemBtn = styled(NavLink)`
text-decoration:none;
color:#FFF;
display:block;
width:100%;
height:100%;
`

const nav_type = [
    {
        text: "主区",
        type: "main",
    },
    {
        text: "FLAT",
        type: "flat",
    },
    {
        text: "创新区",
        type: "ideas",
    },
]

interface Item {
    pre_coin: string,
    next_coin: string,
    coin_name: string,
    coin: string,
    per_day: string | number,
    per_month: string | number,
    apy: string | number,
    tvl: string | number,
    poolIndex: string

}


export default function Mining() {
    const [flag, setFlag] = useState(0)
    const [type, setType] = useState('main')
    const [mainList, setMainList] = useState({ 'main': [], 'flat': [], 'ideas': [] })
    const [rate, setRate] = useState(0.00)
    const [allBlock, setAllBock] = useState(0.00)
    const [balance, setBalance] = useState(0.00)

    Data.getPoolListData().then(res => {
        setMainList(res)
    })
    API.getBalanceOf().then(res => {
        setBalance(res)

    })

    API.getLastTime().then(res => {
        setAllBock(res)
    })

    const nav_list = [
        {
            text: "当前挖矿产出",
            end_val: allBlock + " ",
            start_val: 0,
        },
        {
            text: "当前挖矿产出价值",
            end_val: allBlock * rate + " ",
            start_val: 0,
        },
        {
            text: "已回购TRS数量",
            end_val: "0",
            start_val: 0,
        },
        {
            text: "个人余额",
            end_val: balance+" ",
            start_val: 0,
        },
    ];

    useEffect(() => {
        API.getPoolData().then(res => {
            setRate(res.rate)
        })

    }, [])
    return (
        <>
            <Title />
            <TopContent rate={rate} nav_list={nav_list} />
            <MidTitle />
            <ul className="nav-ul">
                {
                    nav_type.map((item, index) => {
                        return (
                            <li key={item.type} onClick={() => {
                                setFlag(index)
                                setType(item.type)
                            }}
                                className={flag === index ? 'nav-li active' : 'nav-li'}>
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>

            {
                type && mainList[type] && (<div className="pool-list">
                    {

                        mainList[type].map((item: Item, index:number) => {
                            return (
                                <>
                                    <div className="pool-item" key={index}>
                                        <div className="item-img">
                                            <img src={item.pre_coin} alt="" className="pre" />
                                            <img src={item.next_coin} alt="" className="next" />
                                        </div>
                                        <p className="item-coin">{item.coin_name}</p>
                                        <p>
                                            <span className="item-span">{item.per_day}</span>
                                            <span>每天赚{item.coin}</span>
                                        </p>
                                        <p>
                                            <span>赚</span>
                                            <span className="item-span">{item.per_month}</span>
                                            <span> {item.coin}月</span>
                                        </p>
                                        <div className="item-div">
                                            <span>APY</span>
                                            <span>{item.apy}</span>
                                        </div>
                                        <div className="item-div">
                                            <span>TVL</span>
                                            <span>{item.tvl}</span>
                                        </div>

                                        <div className="item-btn">
                                            {/* 跳转到 流动资金到时候  /add/token1/token2 */}
                                            <ItemBtn id={`/provideLiquidity-nav-link`} to={"/provideLiquidity/" + item.poolIndex}>+流动资金</ItemBtn>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>)
            }

        </>
    )
}

function Title() {
    return (
        <>
            <TitleDiv>
                <TitleSup>火币生态链heco和APY的双链</TitleSup>
            </TitleDiv>
        </>
    )
}

function TopContent(props) {
    let { rate, nav_list } = props
    return (
        <>
            <div className="mini-top">
                <p className="title">DEX创新交易平台</p>
                <div className="mini-1-div">
                    <p>
                        <span>TRS价格</span>
                        <span>${rate}</span>
                    </p>
                </div>
                <div className="top-div">
                    {
                        nav_list.map((item) => {
                            return (
                                <>
                                    <div className="item" key={item.text}>
                                        <p className="text">{item.text}</p>
                                        <p className="balance">
                                            {/* {(" "+(item.end_val)).substring(0,6)} */}
                                            {
                                                item.end_val.length > 7 ? item.end_val.substring(0, 6) : item.end_val
                                            }
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function MidTitle() {
    return (
        <>
            <div className="mid-title">
                <p className="mid-text">流动性挖矿</p>
                <p className="mid-sub">提供流动性，赚取BXH Tokens</p>
            </div>
        </>
    )
}



