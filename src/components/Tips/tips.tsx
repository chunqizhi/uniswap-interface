import './tips.css'
import React, { useState, useEffect } from 'react';

function format_time(i: any) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let timer

export default function Tips() {
    const [countDown, setCountDown] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
    })
    const [showTips, setShowTips] = useState(true)

    useEffect(() => {
        let timerFn = function () {
            left_time_fn()
            timer && clearTimeout(timer)
            timer = setTimeout(() => {
                timer && clearTimeout(timer)
                timerFn()
            }, 1000);
        }
        timerFn()
        return function () {
            timer && clearTimeout(timer)
        }
    }, [])

    function left_time_fn() {
        // 正式挖矿时间
        // let newtime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })
        // console.log('newtime =>',newtime)
        // let year = 2021, month = 3, day = 28, hour = 20, minute = 0, second = 0;
        let year = 2021, month = 3, day = 1, hour = 20, minute = 0, second = 0;
        let deadTime: any = (new Date(year, month, day, hour, minute, second)).getTime()
        let currentTime: any = (new Date()).getTime()
        let temp = deadTime - currentTime
        if (temp<-30000) {
            timer && clearTimeout(timer)
            setShowTips(false)
            return
        }
        else if (temp>-30000&&temp<0){
            setCountDown({
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            })
            timer = setTimeout(() => {
                timer && clearTimeout(timer)
                setShowTips(false)
            }, );
            return
        }
       
        let _day = format_time(parseInt((temp / 1000 / 60 / 60 / 24), 10))
        let _hour = format_time(parseInt(temp / 1000 / 60 / 60) % 24, 10)
        let _minute = format_time(parseInt((temp / 1000 / 60) % 60, 10))
        let _second = format_time(parseInt((temp / 1000) % 60, 10))
        setCountDown({
            days: _day,
            hours: _hour,
            minutes: _minute,
            seconds: _second,
        })

    }
    return (
        <>
            { showTips && (<div className="tips">
                <div className="tips-time">
                    <p className="tips-title">
                        <span className="tips-coin">TreeSwap</span>
                    </p>
                    <span className="tips-line"></span>
                    <ul className="tips-ul">
                        <li className="tips-li">
                            <span className="time-num num-dot">{countDown.days}</span>
                            <span className="time-text">天</span>
                        </li>
                        <li className="tips-li">
                            <span className="time-num num-dot">{countDown.hours}</span>
                            <span className="time-text">时</span>
                        </li>
                        <li className="tips-li">
                            <span className="time-num num-dot">{countDown.minutes}</span>
                            <span className="time-text">分</span>
                        </li>
                        <li className="tips-li">
                            <span className="time-num">{countDown.seconds}</span>
                            <span className="time-text">秒</span>
                        </li>
                    </ul>
                    <div className="tips-bottom">启动倒计时</div>
                </div>
            </div>
            )}
        </>
    )
}


