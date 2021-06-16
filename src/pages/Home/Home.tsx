import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HomeBottom from './HomeBottom'
import { useTranslation } from "react-i18next"
import Data from '../../apis/api/data.js'
import { Carousel } from 'antd-mobile';
import 'antd-mobile/lib/carousel/style/index.less'
// import home_price1 from "../../assets/images/home_price1.png"
// import home_price2 from "../../assets/images/home_price2.png"
import home_cart1 from "../../assets/images/home/home-card01.png"
import home_cart2bg from "../../assets/images/home/home-card2-bg.png"
// import icon_ht from "../../assets/images/coin/HT.png"
// import icon_husd from "../../assets/images/coin/HUSD.png"
// import icon_usdt from "../../assets/images/coin/USDT.png"
import HomePool from '../../components/Homepool/index'
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
    border-raduis:15px;
`
const Hometolink = styled(NavLink)`

`
const Hometolink1 = styled.div`

`
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
    // const [mainList, setMainList] = useState([])

    // const clickListener = () => {}

    // 判断是否是第一次加载页面  判断发送请求
    // const [ pageFlag, setPageFlag ] = useState(false);
    // 轮播图
    // const [flag] = useState(true);
    const [slideList] = useState([{
        title: 'banner1',
        url: require('../../assets/images/home/home-banner1.jpg'),
        // path:'/home'
    },{
        title: 'banner2',
        url: require('../../assets/images/home/home-banner2.png'),
        // path:'/director'
    }]);
    useEffect(() => {
        let setTimeoutTimer;
        const timerFn = function () {
            API.getAllTotalSupply().then(res => {
                setAllTotalSupply(Number(res[0])+Number(res[1])+Number(res[2])+Number(res[3]))
            })
            Data.getTtqRate().then( res => {
                setRate(res.rate)
            })
            Data.getPoolListData('all').then(res => {
                setAllBalance(res[0])
                // setMainList(res[1])
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
        // window.addEventListener("click", clickListener, false)
        // timerFn()
        timer()
        return function () {
        //   window.removeEventListener("click", clickListener, false)
          setTimeoutTimer && clearTimeout(setTimeoutTimer)
        }
      }, [])
    return (
        <>
            {/* 轮播图 */}
            <HomeBanner>
                <Carousel
                    autoplay = {true}
                    infinite
                    dotStyle={{ backgroundColor: '#fff',borderRadius:'15px' }}
                    dotActiveStyle={{ backgroundColor: '#06DD7A' }}
                    autoplayInterval={2000}>
                    {slideList.map((item, value) => (
                        <Hometolink1 style={{ display: 'inline-block', width: '100%' }}>
                            <img
                                src={ item.url }
                                alt={ item.title }
                                key={ value }
                                style={{ width: '100%', verticalAlign: 'top',borderRadius:'15px' }}
                            />
                        </Hometolink1>
                    ))}
                </Carousel>
                {/* <img width="100%" style={{borderRadius:'10px'}} src={ require('../../assets/images/home/home-banner1.png') } alt="" /> */}
            </HomeBanner>
            <Homelist className="homelist">
                <HomelistRow>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>{t("home.text15")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            {/* <span>{formatNum(balance)}</span> */}
                            <span>{formatNum(0)}</span>
                        </Homelistval>
                    </Homelistc>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>TVL</Homelisttitle>
                        {/* <Homelistval>${formatNum(allBalance)}</Homelistval> */}
                        <Homelistval>${formatNum(0)}</Homelistval>
                    </Homelistc>
                </HomelistRow>
                <HomelistRow>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>TTQ{t("home.text16")}</Homelisttitle>
                        {/* <Homelistval>{formatNum(rate)}</Homelistval> */}
                        <Homelistval>{formatNum(0)}</Homelistval>
                    </Homelistc>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>TTQ{t("home.text17")}</Homelisttitle>
                        {/* <Homelistval>${formatNum(rate*1000000000)}</Homelistval> */}
                        <Homelistval>${formatNum(0)}</Homelistval>
                    </Homelistc>
                </HomelistRow>
                <HomelistRow>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>{t("home.text18")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            {/* <span>{formatNum(allBlock)}</span> */}
                            <span>{formatNum(0)}</span>
                        </Homelistval>
                    </Homelistc>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>{t("home.text19")}</Homelisttitle>
                        {/* <Homelistval>${formatNum(allBlock * rate)}</Homelistval> */}
                        <Homelistval>${formatNum(0)}</Homelistval>
                    </Homelistc>
                </HomelistRow>
                <HomelistRow>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>{t("home.text20")}TTQ{t("home.text21")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            <span>0.00</span>
                        </Homelistval>
                    </Homelistc>
                    <Homelistc className='homelistc'>
                        <Homelisttitle>DAO{t("home.text22")}</Homelisttitle>
                        <Homelistval>
                            <img width="21" height="21" src={ require('../../assets/images/home/nav-logo.png') } alt="" />
                            {/* <span>{formatNum(allTotalSupply)}</span> */}
                            <span>{formatNum(0)}</span>
                        </Homelistval>
                    </Homelistc>
                </HomelistRow>
            </Homelist>
            <HomePool />
        </>
    )
}