import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HomeBottom from './HomeBottom'
import { useTranslation } from "react-i18next"
import Data from '../../apis/api/data.js'
import { Carousel } from 'antd-mobile';
import 'antd-mobile/lib/carousel/style/index.less'
import home_price1 from "../../assets/images/home_price1.png"
import home_price2 from "../../assets/images/home_price2.png"
import home_cart1 from "../../assets/images/home/home-card01.png"
import icon_ht from "../../assets/images/coin/HT.png"
import icon_husd from "../../assets/images/coin/HUSD.png"
import icon_usdt from "../../assets/images/coin/USDT.png"
import API from '../../apis/api/six.js'

const Homesize = styled(NavLink)`
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #D19C7D;
    text-decoration:none;
`
const HomeBanner = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 5px;
`

// const HomePrice = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     font-family: 'MicrosoftYaHei';
// `
const HomeItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
    //margin:2vw 0;
    margin-bottom:5px;
    border-radius: 6px;
    overflow: hidden;
    background-image: url(${home_price1});
    height: 94px;
    background-repeat: no-repeat;
    background-size: cover;
    // > img {
    //     max-width: 100%;
    //     height: auto;
    // }
`
// const Hometolink = styled(NavLink)`

// `

// const HomeItem2 = styled(HomeItem)`
//     background-image: url(${home_price2});
// `
// const HomeContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: absolute;
//     left: 30px;
//     right: 30px;
//     top: 0;
//     bottom: 0;
//     z-index: 3;
//     > p {
//         font-size: 16px;
//         color: #7984bd;
//         margin-bottom: 5px;
//     }
//     > span {
//         font-size: 20px;
//         color: #fff;
//     }
// `
const Homelist = styled.div`
    padding:20px;
    width:100%;
    background-image: url(${home_cart1});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    margin:15px 0;
    box-shadow: 3px 7px 9px -3px #ddd;
`
const HomelistRow = styled.div`
    display:flex;
    margin:5px 0px;

`
const Homelistc = styled.div`
    margin:5px 0px;
    flex:1;
    
`
const Homelisttitle = styled.div`
    font-size:16px;
    color:#C98D6A;
    font-family: Microsoft YaHei;
    font-weight: 400;
    margin-bottom:5px;
`
const Homelistval = styled.div`
    font-size: 14px;
    font-family: Nirmala UI;
    font-weight: bold;
    color: #722F0D;
    display: flex;
    align-items: center;
    >img{
        margin-right:5px;
    }
`
const Homecart2 = styled.div`
    padding:20px 0;
    background-color:#fff9f0;
    border-radius:15px;
    box-shadow: 3px 7px 9px -3px #ddd;
`
const Homecarttop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:10px;
`
const Homecart2canter = styled.div`
    padding:10px;
    padding-bottom:0px;
    display: flex;
    flex-wrap: wrap;
`
const Homecart2list = styled(NavLink)`
    padding:10px;
    margin:4px;
    border-radius: 14px;
    flex: 1;
    border: 2px solid rgba(248, 215, 196, 0.5019607843137255);
    text-decoration: none;
`
const Homecart2listt = styled.div`
    display: flex;
    aling-item:center;
    font-size:14px;
    color: #722F0D;
    font-family: MicrosoftYaHei;
`
const Homecart2listb = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-family: Tahoma;
    color: #D19C7D;
    padding:10px 0;
`
const Homecart2tl = styled.div`
    // width: 108px;
    background: linear-gradient(256deg, #FFF9F0 0%, #D19C7D 100%);
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #722F0D;
    padding: 7px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 7px 10px 7px 15px;
`
const Homecart2name = styled.div`
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #722F0D;
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
export default function Home() {
    // One
    const { t } = useTranslation();
    const [rate, setRate] = useState(0)
    const [allBalance, setAllBalance] = useState(0)
    const [balance, setBalance] = useState(0.00)//我的余额
    const [allBlock, setAllBock] = useState(0.00)//当前挖出数量
    const [allTotalSupply, setAllTotalSupply] = useState(0.00)//当前锁仓总量
    const clickListener = () => {
    }

    // 判断是否是第一次加载页面  判断发送请求
    // const [ pageFlag, setPageFlag ] = useState(false);
    // 轮播图
    // const [flag] = useState(true);
    const [slideList] = useState([{
        title: 'banner1',
        url: require('../../assets/images/home/home-banner1.png'),
        path:'/home'
    },{
        title: 'banner2',
        url: require('../../assets/images/home/home-banner1.png'),
        path:'/director'
    }]);
    useEffect(() => {
        let setTimeoutTimer;
        const timerFn = function () {
            API.getAllTotalSupply().then(res => {
                setAllTotalSupply(Number(res[0])+Number(res[1])+Number(res[2])+Number(res[3]))
            })
            Data.getTrsRate().then(res => {
                setRate(res.rate)
            })

            Data.getPoolListData('all').then(res => {
                setAllBalance(res)
            })
            Data.getAllBlock().then(res=>{
            //   console.log(`setAllBock`,res)
              setAllBock(res)
          })
            API.getWalletAllTrs().then(res => {
            //   console.log(`setBalance`,res)
              setBalance(res)
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
            {/* 轮播图 */}
            <HomeBanner>
                {/* <Carousel
                    autoplay = {true}
                    infinite
                    dotStyle={{ backgroundColor: '#fff' }}
                    dotActiveStyle={{ backgroundColor: '#06DD7A' }}
                    autoplayInterval={2000}>
                    {slideList.map((item, value) => (
                        <Hometolink to={item.path} style={{ display: 'inline-block', width: '100%' }}>
                            <img
                                src={ item.url }
                                alt={ item.title }
                                key={ value }
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </Hometolink>
                    ))}
                </Carousel> */}
                <img width="100%" style={{borderRadius:'10px'}} src={ require('../../assets/images/home/home-banner1.png') } alt="" />
            </HomeBanner>
            <Homelist>
                <HomelistRow>
                    <Homelistc>
                        <Homelisttitle>{t("home.text15")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <span>{balance}</span>
                        </Homelistval>
                    </Homelistc>
                    <Homelistc>
                        <Homelisttitle>TVL</Homelisttitle>
                        <Homelistval>${formatNum(allBalance)}</Homelistval>
                    </Homelistc>
                </HomelistRow>
                <HomelistRow>
                    <Homelistc>
                        <Homelisttitle>TTQ{t("home.text16")}</Homelisttitle>
                        <Homelistval>{formatNum(rate)}</Homelistval>
                    </Homelistc>
                    <Homelistc>
                        <Homelisttitle>TTQ{t("home.text17")}</Homelisttitle>
                        <Homelistval>${formatNum(rate*1000000000)}</Homelistval>
                    </Homelistc>
                </HomelistRow>
                <HomelistRow>
                    <Homelistc>
                        <Homelisttitle>{t("home.text18")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <span>{formatNum(allBlock)}</span>
                        </Homelistval>
                    </Homelistc>
                    <Homelistc>
                        <Homelisttitle>{t("home.text19")}</Homelisttitle>
                        <Homelistval>{ formatNum(allBlock * rate)}</Homelistval>
                    </Homelistc>
                </HomelistRow>
                <HomelistRow>
                    <Homelistc>
                        <Homelisttitle>{t("home.text20")}TTQ{t("home.text21")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <span>0.00</span>
                        </Homelistval>
                    </Homelistc>
                    <Homelistc>
                        <Homelisttitle>DAO{t("home.text22")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <span>{formatNum(allTotalSupply)}</span>
                        </Homelistval>
                    </Homelistc>
                </HomelistRow>
            </Homelist>
            <Homecart2>
                <Homecarttop>
                    <Homecart2tl>
                        <img width='16px' height="16px" src={require('../../assets/images/home/hot.png')} alt="" />
                        {t("home.text23")}
                    </Homecart2tl>
                    <Homesize to={"/mining"}>{t("home.text24")} ></Homesize>
                </Homecarttop>
                <Homecart2canter>
                    <Homecart2list to={"/provideLiquidity/one"}>
                        <Homecart2listt>
                            <img style={{position: 'relative',zIndex:'2'}} width="22" height="22" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <img style={{position: 'relative',left: '-7px'}} width="22" height="22" src={ icon_usdt } alt="" />
                            <Homecart2name>TTQ/USDT</Homecart2name>
                        </Homecart2listt>
                        <Homecart2listb>
                            <div>66.00%</div>
                            <div>APY</div>
                        </Homecart2listb>
                    </Homecart2list>
                    <Homecart2list to={"/provideLiquidity/one"}>
                        <Homecart2listt>
                            <img style={{position: 'relative',zIndex:'2'}} width="22" height="22" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <img style={{position: 'relative',left: '-7px'}} width="22" height="22" src={ icon_husd } alt="" />
                            <Homecart2name>TTQ/HUSD</Homecart2name>
                        </Homecart2listt>
                        <Homecart2listb>
                            <div>66.00%</div>
                            <div>APY</div>
                        </Homecart2listb>
                    </Homecart2list>
                    <Homecart2list to={"/provideLiquidity/one"}>
                        <Homecart2listt>
                            <img style={{position: 'relative',zIndex:'2'}} width="22" height="22" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <img style={{position: 'relative',left: '-7px'}} width="22" height="22" src={ icon_ht } alt="" />
                            <Homecart2name>TTQ/HT</Homecart2name>
                        </Homecart2listt>
                        <Homecart2listb>
                            <div>66.00%</div>
                            <div>APY</div>
                        </Homecart2listb>
                    </Homecart2list>
                    <Homecart2list to={"/provideLiquidity/one"}>
                        <Homecart2listt>
                            <img style={{position: 'relative',zIndex:'2'}} width="22" height="22" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            {/* <img style={{position: 'relative',left: '-7px',zIndex:'2'}} width="22" height="22" src={ require('../../assets/images/home/nav-logo.png') } alt="" /> */}
                            <Homecart2name>TTQ</Homecart2name>
                        </Homecart2listt>
                        <Homecart2listb>
                            <div>66.00%</div>
                            <div>APY</div>
                        </Homecart2listb>
                    </Homecart2list>
                </Homecart2canter>
            </Homecart2>
            {/* <HomePrice>
                <HomeItem>
                    <HomeContent>
                        <p>{t("home.text01")}</p>
                        <span>${allBalance}</span>
                    </HomeContent>
                </HomeItem>
                <HomeItem2>
                    <HomeContent>
                        <p>{t("home.text14")}</p>
                        <span>${ formatNum(rate) }</span>
                    </HomeContent>
                </HomeItem2>
            </HomePrice> */}

            {/* <HomeTop>
                <LeftDiv>
                    <LeftSpan>TRS</LeftSpan>
                    <LeftDivSpan>${ formatNum(rate) }</LeftDivSpan>
                </LeftDiv>
                <RightDiv>
                    <RightDivSpan>${allBalance}</RightDivSpan>
                    <RightSpan>{t("home.text01")}</RightSpan>
                </RightDiv>
            </HomeTop>
            <TitleDiv>
                <TitleSup>{t("home.text02")}</TitleSup>
                <TitleSub>DEX创新交易平台</TitleSub>
            </TitleDiv>
            <HomeBXH>TRS</HomeBXH>
            <TitleDesc>{t("home.text03")}</TitleDesc>
            <HomeBtn01 id={`swap-nav-link`} to={'/swap'}>
                <img src={require("../../assets/images/home/button01.png")} height='16' width='16' alt=""/>
                {t("home.text12")}
            </HomeBtn01>
            <HomeBtn02 id={`mining-nav-link`} to={'/mining'}>
                <img src={require("../../assets/images/home/button02.png")} height='16' width='16' alt=""/>
                {t("home.text13")}
            </HomeBtn02> */}
            {/* <HomeBottom key={'home-bottom'} /> */}
        </>
    )
}