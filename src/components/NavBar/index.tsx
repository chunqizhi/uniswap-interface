// import React,{ Fragment } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"
import './index.css'

export default function NarBar() {
    const { t } = useTranslation();
    return (
        <>
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
                <NavLink exact to="/" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-hangqing"></span>
                    <span>{t("navbar.text04")}</span>
                </NavLink>
                <NavLink exact to="/director" className="navItem" activeClassName="navItemActive">
                    <span className="iconfont icon-ren"></span>
                    <span>{t("navbar.text05")}</span>
                </NavLink>
            </div>
        </>
    )
}