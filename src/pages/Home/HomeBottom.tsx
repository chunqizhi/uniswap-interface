import React from 'react'
import './test.css'
import Icon01 from '../../assets/images/home/icon01.png'
import Icon02 from '../../assets/images/home/icon02.png'
import Icon03 from '../../assets/images/home/icon03.png'
import Icon04 from '../../assets/images/home/logo.png'
import {useTranslation} from "react-i18next"
const DescList = [
    {
        title: "回购",
        desc: "回购BXH销毁",
        icon: Icon01,
    },
    {
        title: "DAO",
        desc: "社区议案治理",
        icon: Icon02,
    },
    {
        title: "奖励",
        desc: "奖励抵押BXH用户",
        icon: Icon03,
    },
]
export default function HomeBottom() {
    let  {t } =  useTranslation();
    return (
        <>  
            {Line('治理机制')}
            <p>{t('text01')}</p>
            {Desc()}
            {Line('审计机构')}
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
    return (
        <ul className="desc-ul-1">
            {
                DescList.map((item) => {
                    return (
                        <li className="desc-li">
                            <img src={item.icon} alt="" />
                            <span className="desc-title">{item.title}</span>
                            <span className="desc-desc">{item.desc}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}