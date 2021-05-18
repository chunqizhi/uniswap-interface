// import React,{ Fragment } from "react";
// import React from "react";
import React , { useState }from "react";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"
import styled from 'styled-components'

import './index.css'


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
const Narberdiv = styled.div`
`

export default function NarBar() {
    const { t } = useTranslation();
    const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权
    const [isopen, setisopen] = useState(true) // 授权/非授权

    const toast = () => {
        setApprovediv(true)
        if (isopen) {
            let timer = 0
            setisopen(false)    
            timer = setTimeout(() => {
                setApprovediv(false)
                setisopen(true)
                clearTimeout(timer)
            }, 1000);
        }
        
    }
    function opentoast() {
        // console.log('extract');
        toast()
    }
    return (
        <>
        {isApprovediv && (
                        <Approvediv>{t("director.text13")}</Approvediv>
                    )}
            <div className="navBar">
                <NavLink exact to="/home" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-index-copy"></span>
                    <span>{t("navbar.text01")}</span>
                </NavLink>
                <NavLink to="/exchange" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-duihuan"></span>
                    <span>{t("navbar.text02")}</span>
                </NavLink>
                <NavLink exact to="/mining" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-yejinkuangchan"></span>
                    <span>{t("navbar.text03")}</span>
                </NavLink>
                {/* to="/" */}
                <NavLink exact to="/market" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-hangqing"></span>
                    <span>{t("navbar.text04")}</span>
                </NavLink>
                {/* <Narberdiv onClick={ ()=> opentoast() }  className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-hangqing"></span>
                    <span>{t("navbar.text04")}</span>
                </Narberdiv> */}

                <NavLink exact to="/director" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-ren"></span>
                    <span>{t("navbar.text05")}</span>
                </NavLink>
            </div>
        </>
    )
}