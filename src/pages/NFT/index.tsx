// import React,{ Fragment } from "react";
import React, { useState, useEffect } from 'react';

import { useTranslation } from "react-i18next"
import styled from 'styled-components'
import '../Director/index.css'
import Data from '../../apis/api/data.js'
import API from '../../apis/api/six.js'
import cart1 from '../../assets/images/mining/driector-card-top.png'
import home_cart1 from "../../assets/images/home/nav-logo.png"
import nft_cart1 from "../../assets/images/nft/label-not-sale.png"
import nft_cart2 from "../../assets/images/nft/piture-ttq.png"
import title_name from "../../assets/images/nft/title-name.png"

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
const Directortitle = styled.div`
    font-size: 40px;
    font-family: HYChaoCuYuanJ;
    font-weight: 700;
    color: #722F0D;
    width:100%;
    height:40px;
    padding:0 10px;
    margin:10px 0;
    >img{
      width:100%;
    }
    max-width:450px;
`
const Directoricon = styled.div`
  width:5px;
  height:100%;
  background-color:red;
  background: linear-gradient(to bottom,#e96811,#f9e4c1);
  border-radius: 5px;
  margin-right:2px;
`
const Directorcolor = styled.div`
  color:#722F0D;
`
const Directornum = styled(Directorcolor)`
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
`
const DirectorAllTotalSupply = styled(Directornum)`
  margin-bottom:14px;
  font-size: 20px;
  font-weight: bold;
  color: #722F0D;
  display:flex;
  align-items:center;
`
const Directorh2 = styled.div`
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #722F0D;
`
const Directorh3 = styled(Directorh2)`
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #722F0D;
`
const Directortopbox = styled.div`
height:auot;
display: flex;
padding: 9vh 0 30px;
margin-top:25px;
flex-direction: column;
align-items: center;
background-image: url(${cart1});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
position: relative;
width: 100%;
box-shadow: 4px 11px 11px -12px #ccc;
  border-radius: 12px;
>img{
  position: absolute;
  left: 15%;
  top: 8%;
  transform-origin: 32vw 60vw;
  transform:rotate(8deg);
  animation: imganimation 1.5s cubic-bezier(0, 0.5, 0.34, 0.99) 0.5s forwards;
  @keyframes imganimation {
    0% {
      transform:rotate(8deg);
  　}
    60%{
      　transform:rotate(46deg);
    }
    80%{
      　transform:rotate(36deg);
    }
    90%{
      　transform:rotate(42deg);
    }
  　100% {
    　transform:rotate(40deg);
  　}
  }
}
max-width:450px;
`
const Nftcenter = styled.div`
  width:214px;
  padding:20px;
  margin:20px auto;
  background-color:#fff9f0;
  border-radius:20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Nftcenterbg = styled.div`
    width:174px;
    height:218px
    background-image: url(${nft_cart2});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
const Nftcolor = styled.div`
    color:#722F0D;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    padding:10px 0;
    width:100%;
`
const Nftprice = styled(Nftcolor)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Nftbtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    padding:8px 0;
    background-color:#722f0d;
    color:#fff;
    border-radius:6px;
    font-size: 12px;
`
const Nftprorbg = styled.div`
    position: absolute;
    background-image: url(${nft_cart1});
    background-repeat: no-repeat;
    background-size: cover;
    padding:12px 20px;
    color:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: -1%;
    left: -5%;
    font-size:12px;
    z-index:2;
`
const Nftprortext = styled.div`
    position: absolute;
    top:5%;
    right:5%;
    padding:6px 10px;
    background-color:#fec489;
    color:#733515;
    font-size:12px;
    border-radius:4px;
    z-index:2;
    transform: scale(0.8);
`
const formatNum = function (str: string | number) {
  if (str * 1 < 0) return 0
  str = "" + str
  let flag = str.indexOf('.') > 0
  let temp
  if (flag) {
    if (str.split('.')[0].length > 4) {
      let pre = str.split('.')[0]
      let next = str.split('.')[1]
      temp = pre + '.' + next.substring(0, 2)
    }
    else {
      let pre = str.split('.')[0]
      let next = str.split('.')[1]
      temp = pre + '.' + next.substring(0,6)
    }
  } else {
    if (str.length > 4) {
      temp = str + '.00'
    } else {
      temp = str + '.0000'
    }

  }
  return temp
}
const add0 = (sum) => { return sum >= 10 ? sum : `0${sum}` }

let timers

export default function Director() {
  const { t } = useTranslation();
  const [timerd, setTimer] = useState(0)
  const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权 isApprovedivdao
  const [text, settext] = useState(0)//弹窗提示
  const [allTotalSupply, setAllTotalSupply] = useState(0.00) //当前总锁仓量
  const clickListener = () => {
  }
  useEffect(() => {
    let setTimeoutTimer;
    const timerFn = function () {
      API.getAllTotalSupply().then(res => {
        // console.log('总锁仓量',res[0],res[1],res[2],res[3])
        // console.log('总仓量',Number(res[0])+Number(res[1])+Number(res[2])+Number(res[3]))
        setAllTotalSupply(Number(res[2]))
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

  const toast = (type) => {
    if (type == 'extract') {
        settext(1)
    }else if(type == 'balanceof'){
        settext(3)
    }else if(type == 'Dontopen'){
      settext(2)
    }else{
        settext(0)
    }
    setApprovediv(true)
    timers && clearTimeout(timers)
    timers = setTimeout(() => {
      setApprovediv(false)
      clearTimeout(timers)
    }, 2000);
  }


  const getdao = () => {
    let daotime = setTimeout(() => {
    }, 6000);
    setTimer(daotime)
  }
  return (
    <>
      {isApprovediv && (
          text == 1 ? <Approvediv>{t("director.text17")}</Approvediv> : text == 0 ? <Approvediv>{t("director.text18")}</Approvediv> : text == 2 ? <Approvediv>{t("director.text14")}</Approvediv> :<Approvediv>{t("director.text19")}</Approvediv> 
        )}
      <Directortitle>
        <img src={title_name} alt="" />
      </Directortitle>
      <Directorh2>NFT{t("debris.text71")}</Directorh2>
      <Directortopbox className='directortopbox'>
        <img width='30px' height='30px' src={ require("../../assets/images/mining/driector-card3.png")} alt="" />
        <DirectorAllTotalSupply>
          <Directoricon></Directoricon>
          {/* {formatNum(allTotalSupply)} */}
          ${formatNum(0.00)}
        </DirectorAllTotalSupply>
        <Directorh3>NFT{t("debris.text72")}</Directorh3>
      </Directortopbox>
      <Nftcenter>
          <Nftprorbg>{t("debris.text73")}</Nftprorbg>
          <Nftcenterbg>
              <Nftprortext>{t("debris.text74")}</Nftprortext>
          </Nftcenterbg>
          <Nftcolor>TTQSWAP #03</Nftcolor>
          <Nftprice>
              <div>{t("debris.text75")}</div>
              <div>1TTQ</div>
          </Nftprice>
          <Nftbtn>{t("debris.text76")}</Nftbtn>
      </Nftcenter>
    </>
  )
}