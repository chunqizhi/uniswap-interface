import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HomeBottom from './HomeBottom'
import { useTranslation } from "react-i18next"
import Data from '../../apis/api/data.js'
const HomeTop = styled.div`

height: 35px;
display: flex;
flex-flow: row nowrap;
background: #FFF;
margin-bottom: 20px;
justify-content: space-between;
width:100%;
border-radius:20px;

`
const LeftDiv = styled.div`
width: 115px;
justify-content: space-around;
align-items: center;
border-radius: 0px;
background-image: linear-gradient(to right, #40a5ee, #48d675);
padding:0 20px;
display: flex;
border-radius:20px;
`
const LeftDivSpan = styled.span`
flex: 1;
padding-left:10px;
color:#fff;
`
const RightDivSpan = styled.div`
    height:16px;
    font-size:14px;
    font-weight: bold;
`
const RightDiv = styled.div`
display: flex;
flex-direction: column;
margin-right: 10px;
text-align: right;
justify-content: center;
padding-right:6px;
`
const RightSpan = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#999;
    display: block;
    font-size: 12px;
    font-weight: bold;
    
`
const LeftSpan = styled(RightSpan)`
    font-size:16px;
    color: #0278fe;

`
// width:74%;
const TitleDiv = styled.div`
`
const TitleSup = styled.span`
color: #000;
line-height: 18px;
  font-size: 24px;
  font-weight: 700;
  width: 80%;
  margin-top: 10px;
`

// const TitleSub = styled.span`
// color: #949697;
// font-size: 17px;
// margin-top: 5px;
// `

const HomeBXH = styled.p`
margin: 14px 0px ; 
color: #39D496;
font-size: 26px;
width:100%;
text-align: left;
`
const TitleDesc = styled.div`
color: #949697;
margin-bottom: 20px;
font-size: 16px;
font-weight: 400;
line-height: 24px;

`

const HomeBtn01 = styled(NavLink)`
width: 86%;
height: 36px;
font-size: 15px;
text-align: center;
font-weight: bold;
line-height: 45px;
border-radius: 8px;
margin-bottom: 15px;
display: flex;
justify-content: center;
align-items: center;
color: #999;
background: #FFF;
text-decoration:none;
`
const HomeBtn02 = styled(NavLink)`
    width: 86%;
    height: 36px;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    line-height: 45px;
    border-radius: 8px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #01d8a9;
    background: #0278FE;
    text-decoration:none;

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
            temp =pre+'.'+next.substring(0,4)
        }
    } else   temp =str

    return temp
}
export default function Home() {
    // One
    const { t } = useTranslation();
    const [rate, setRate] = useState(0)
    const [allBalance, setAllBalance] = useState(0)
    Data.getTrsRate().then(res => {
        setRate(res.rate)
    })
    Data.getPoolListData('all').then(res => {
        setAllBalance(res)
    })
    return (
        <>
            <HomeTop>
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
                {/* <TitleSub>DEX创新交易平台</TitleSub> */}
            </TitleDiv>
            <HomeBXH>TRS</HomeBXH>
            <TitleDesc>{t("home.text03")}</TitleDesc>
            <HomeBtn01 id={`swap-nav-link`} to={'/swap'}>{t("home.text12")}</HomeBtn01>
            <HomeBtn02 id={`mining-nav-link`} to={'/mining'}>
                <img src={require("../../assets/images/home/button02.png")} height='16' width='16' alt=""/>
                {t("home.text13")}
            </HomeBtn02>
            <HomeBottom key={'home-bottom'} />
        </>
    )
}