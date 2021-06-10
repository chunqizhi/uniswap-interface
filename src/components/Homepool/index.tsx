import React, { useState, useEffect } from 'react'
import { Text } from 'rebass'
import Data from '../../apis/api/data.js'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from "react-i18next"

import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import home_cart2bg from "../../assets/images/home/home-card2-bg.png"
import { useETHBalances } from '../../state/wallet/hooks'

const Homesize = styled(NavLink)`
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #D19C7D;
`
const Homecart2 = styled.div`
    background-image: url(${home_cart2bg});
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
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
    >img{
        display: flex;
    }
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
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #722F0D;
`

export default function HomePool() {
    const { t } = useTranslation();
    const clickListener = () => {}
    const [mainList, setMainList] = useState([])

  useEffect(() => {
    let setTimeoutTimer;
    const timerFn = function () {
        Data.getPoolListData('all').then(res => {
            setMainList(res[1])
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
    // timerFn()
    timer()
    return function () {
      window.removeEventListener("click", clickListener, false)
      setTimeoutTimer && clearTimeout(setTimeoutTimer)
    }
  }, [])
  return (
    <Homecart2>
    <Homecarttop>
        <Homecart2tl>
            <img width='16px' height="16px" src={require('../../assets/images/home/hot.png')} alt="" />
            {t("home.text23")}
        </Homecart2tl>
        <Homesize to={"/mining"}>{t("home.text24")} ></Homesize>
    </Homecarttop>

    <Homecart2canter>
        {
            mainList.map((item,index) => {
                return(
                    <Homecart2list to={`/provideLiquidity/${item.poolIndex}`} key={index}>
                        <Homecart2listt>
                            {
                                item.coin_name.indexOf('/') == '-1' ? (
                                    <img style={{position: 'relative',zIndex:'2',marginRight:'7px'}} width="22" height="22" src={ item.pre_coin } alt="" />
                                ) : (
                                    <div style={{display: 'flex'}}>
                                         <img style={{position: 'relative',zIndex:'2'}} width="22" height="22" src={ item.pre_coin } alt="" />
                                        <img style={{position: 'relative',left: '-7px'}} width="22" height="22" src={ item.next_coin } alt="" />
                                    </div>
                                )
                            }
                            
                            <Homecart2name>{item.coin_name}</Homecart2name>
                        </Homecart2listt>
                        <Homecart2listb>
                            <div>{item.apy}</div>
                            <div>APY</div>
                        </Homecart2listb>
                    </Homecart2list>
                )
            })
        }
    </Homecart2canter>
</Homecart2>
  )
}
