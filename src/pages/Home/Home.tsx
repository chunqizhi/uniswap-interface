import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HomeBottom from './HomeBottom'
// import {useTranslation} from "react-i18next"
const HomeTop = styled.div`

height: 45px;
display: flex;
flex-flow: row nowrap;
background: #FFF;
border-radius: 17.5px;
margin-bottom: 20px;
justify-content: space-between;
width:100%;
`
const LeftDiv = styled.div`
width: 115px;
border-radius: 17.5px;
background-image: linear-gradient(to right, #40a5ee, #48d675);
display: flex;
flex-direction: column;
display: flex;
justify-content: flex-end;
`
const LeftDivSpan = styled.span`
flex: 1;
padding-left:10px;
`
const RightDiv = styled.div`
display: flex;
flex-direction: column;
margin-right: 10px;
text-align: right;
`
const RightSpan = styled.span`
    flex: 1;
    padding-left: 10px;
    line-height: 22px;
    color: #777;
    display: block;
    font-size: 12px;
    font-weight: bold;
`

// width:74%;
const TitleDiv = styled.div`
`
const TitleSup = styled.span`
color: #000;
  font-size: 24px;
  font-weight: 700;
  width: 80%;
  margin-top: 10px;
`

const TitleSub = styled.span`
color: #949697;
font-size: 17px;
margin-top: 5px;
`

const HomeBXH = styled.p`
margin: 14px 0px ; 
color: #39D496;
font-size: 26px;
width:100%;
text-align: left;
`
const TitleDesc = styled.p`
color: #949697;
margin-bottom: 20px;
font-size: 16px;
font-weight: 400;
`


const HomeBtn01 = styled(NavLink)`
width: 100%;
height: 45px;
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
width: 100%;
height: 45px;
font-size: 15px;
text-align: center;
font-weight: bold;
line-height: 45px;
border-radius: 8px;
margin-bottom: 15px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
background: #0278FE;
text-decoration:none;
`


export default function Home() {
    // let  {t } =  useTranslation();
    return (
        <>
            <HomeTop>
                <LeftDiv>
                    <LeftDivSpan>$2.9</LeftDivSpan>
                    <RightSpan>BXH</RightSpan>
                </LeftDiv>
                <RightDiv>
                    <LeftDivSpan>$234153453.236</LeftDivSpan>
                    <RightSpan>当前流动性质押</RightSpan>
                </RightDiv>

            </HomeTop>
            <TitleDiv>
                <TitleSup>火币生态链heco和APY的双链</TitleSup>
                <TitleSub>DEX创新交易平台</TitleSub>
            </TitleDiv>
            <HomeBXH>BXH</HomeBXH>
            <TitleDesc>一个去中心化的交易平台，采取双链挖矿机制。每个人都可以参与！</TitleDesc>
            <HomeBtn01 id={`swap-nav-link`} to={'/swap'}>兑换</HomeBtn01>
            <HomeBtn02 id={`mining-nav-link`} to={'/mining'}>流动性挖矿</HomeBtn02>
            <HomeBottom />
        </>
    )
}