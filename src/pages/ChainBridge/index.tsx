import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HomeBottom from './HomeBottom'
import { useTranslation } from "react-i18next"
import Data from '../../apis/api/data.js'
import { Carousel } from 'antd-mobile';
import './index.css'
import nav_logo from "../../assets/images/home/nav-logo.png"
import icon_BSC from "../../assets/images/chainbridge/icon-BSC.png"
import icon_heco from "../../assets/images/chainbridge/icon-heco.png"
import { request } from 'http'

const Bridgebg = styled.div`
    width: 100%;
    height: 274px;
    background-color: #722f0d;
    position: fixed;
    top: 0;
    z-index: -1;
    max-width: 1200px;
`

const Bridgeh1 = styled.div`
    padding:20px 0;
    width:100%;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color:#fff;
`
const Bridgebox = styled.div`
    border-radius:15px;
    padding:15px;
    background-color:#fff9f0;
    width:100%;
    margin-bottom:20px;
    max-width:450px;
`

const Bridgetitle = styled.div`
    padding:10px 0;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
`
const Bridgebgcolor = styled.div`
    background-color:#fff3e0;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #722F0D;
    padding:10px 15px;
    display:flex;
    align-items:center;
`
const Bridgerow = styled.div`
    width:100%;
    padding:10px 0;
    display:flex;
    align-items: center;
`

const Bridgerow1 = styled(Bridgerow)`
    justify-content: space-between;
`
const Bridgeform = styled.div`
    width:65%;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #722F0D;
`
const Bridgeto = styled(Bridgeform)`
    width:10%
`
const Bridgeitem1 = styled.div`
    color:#000;
    width:35%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color:#fff3e0;
    padding:10px;
    border-radius:10px;
    box-shadow: 3px 4px 11px 0px #ccc;
    >img{
        position: relative;
        top: 4px;
    }
`
const Bridgeh2 = styled.div`
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #722F0D;
    padding:10px 0;
`
const Bridgehint = styled.div`
    font-size:12px;
    color:#666;
    text-align:left;
`
const Bridgeremark = styled.div`
    text-align:left;
    font-size:18px;
    color:#EB1F1F;
    position: relative;
    transform: scale(0.5) translateX(-50%);
    width: 100%;

`
const Bridgeamount = styled(Bridgebgcolor)`
    display:flex;
    align-items: center;
    justify-content: space-around;
`
const Bridgeleft = styled.div`
    display:flex;
    align-items: center;
    flex:2;
`
const Bridgerighttext = styled.div`
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #722F0D;
`
const Bridgerightbtn = styled.div`
    padding:4px 10px;
    border-radius:4px;
    background-color:#ab5729;
    font-size:12px;
    margin-left:5px;
    color:#fff;
`
const Bridgebtn = styled.div`
    width:100%;
    border-radius:25px;
    padding:15px 0;
    text-align:center;
    background-color:#ab5729;
    color:#fff;
`
const Bridgefoot = styled.div`
    text-align:center;
    margin:30px 0 0;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #722F0D;
`
const Bridgetop = styled.div`
    padding: 0 0 30px;
    color: #fff;
    text-align: center;
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
    return (
        <>
            {/* 轮播图 */}
            <Bridgebg></Bridgebg>
            <Bridgetop>
                <div className='Bridgetop1'>Ethereum生态币种交易 多快好省就选TTQSWAP.COM</div>
                <div className='Bridgetop2'>打造DeFi生态最大的集DEX、IMO。DAO为一体的平台</div>
            </Bridgetop>
            {/* <Bridgeh1>{t('chainbridge.text01')}</Bridgeh1> */}
            <Bridgebox>
                <Bridgetitle>{t('chainbridge.text02')}</Bridgetitle>
                <Bridgebgcolor>
                    <img style={{marginRight:"5px"}} width="29" height="29" src={nav_logo} alt="" />
                    TTQ
                </Bridgebgcolor>
                <Bridgerow>
                    <Bridgeform>{t('chainbridge.text03')}</Bridgeform>
                    <Bridgeto>{t('chainbridge.text04')}</Bridgeto>
                </Bridgerow>
                <Bridgerow1>
                    <Bridgeitem1>
                        <img width="34" height="34" src={icon_heco} alt="" />
                        HECO
                    </Bridgeitem1>
                    <img width="20" height="20" src={require("../../assets/images/chainbridge/icon-exchange.png")} alt="" />
                    <Bridgeitem1>
                        <img width="34" height="34" src={icon_BSC} alt="" />
                        BSC
                    </Bridgeitem1>
                </Bridgerow1>
                <Bridgeh2>{t('chainbridge.text05')}</Bridgeh2>
                <Bridgerow>
                    <input type="text" name="" placeholder={t('chainbridge.text06')} className="addrinp" id="" />
                </Bridgerow>
                <Bridgehint>{t('chainbridge.text07')}</Bridgehint>
                <Bridgeremark>({t('chainbridge.text08')})</Bridgeremark>
                <Bridgeh2>{t('chainbridge.text09')}</Bridgeh2>
                <Bridgeamount>
                    <Bridgeleft>
                        <img width="30" height="30" src={nav_logo} alt="" />
                        <input type="text" className="Bridgeleftinp" placeholder={t('chainbridge.text14')} name="" id="" />
                    </Bridgeleft>
                    <Bridgeleft style={{flex:'1'}}>
                        <Bridgerighttext>TTQ</Bridgerighttext>
                        <Bridgerightbtn>{t('chainbridge.text10')}</Bridgerightbtn>
                    </Bridgeleft>
                </Bridgeamount>
                <Bridgeh2>{t('chainbridge.text11')}0TTQ</Bridgeh2>
                <Bridgebtn>{t('chainbridge.text12')}</Bridgebtn>
                <Bridgefoot>{t('chainbridge.text13')}</Bridgefoot>
            </Bridgebox>
        </>
    )
}