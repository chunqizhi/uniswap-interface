import React from 'react'
import './test.css'
import Icon01 from '../../assets/images/home/icon01.png'
import Icon02 from '../../assets/images/home/icon02.png'
import Icon03 from '../../assets/images/home/icon03.png'
import Icon04 from '../../assets/images/home/logo.png'
import {useTranslation} from "react-i18next"
const DescList = [
    {
        title: "home.text05",
        desc: "home.text06",
        icon: Icon01,
    },
    {
        title: "home.text07",
        desc: "home.text08",
        icon: Icon02,
    },
    {
        title: "home.text09",
        desc: "home.text10",
        icon: Icon03,
    },
]
export default function HomeBottom() {
    const  {t } =  useTranslation();
    return (
        <>  
            {Line(t("home.text04"))}
            {Desc()}
            {Line(t("home.text11"))}
            <img src={Icon04} className="image-logo" alt="" />
        </>
    )
}


function Line(props: string) {
    return (
        <>
            <div className="home-line">
                <p className="pre"> </p>
                <span>{props}</span>
                <p className="pre"></p>
            </div>
        </>
    )
}

function Desc() {
    const  {t } =  useTranslation();
    return (
        <ul className="desc-ul-1">
            {
                DescList.map((item) => {
                    return (
                        <li className="desc-li">
                            <img src={item.icon} alt="" />
                            <span className="desc-title">{t(item.title)}</span>
                            <span className="desc-desc">{t(item.desc)}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}