import React,{useState} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HomeBottom from './HomeBottom'
import {useTranslation} from "react-i18next"
import Data from '../../apis/api/data.js'
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
    // One
    const   {t } =  useTranslation();
    const [rate, setRate] = useState(0)
    const [allBalance,setAllBalance] = useState(0)
    Data.getTrsRate().then(res=>{
        setRate(res.rate)
    })
    Data.getPoolListData('all').then(res=>{
        console.log(res)
        setAllBalance(res)
    })
    return (
        <>
            <HomeTop>
                <LeftDiv>
                    <LeftDivSpan>${rate}</LeftDivSpan>
                    <RightSpan>TRS</RightSpan>
                </LeftDiv>
                <RightDiv>
                    <LeftDivSpan>${allBalance}</LeftDivSpan>
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
            <HomeBtn02 id={`mining-nav-link`} to={'/mining'}>{t("home.text13")}</HomeBtn02>
            <HomeBottom key={'home-bottom'}/>
        </>
    )
}