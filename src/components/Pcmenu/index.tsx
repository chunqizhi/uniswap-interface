import React, { useState, useEffect,useMemo } from 'react'
// import { Text } from 'rebass'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
// import { NavLink } from 'react-router-dom'
import useENSName from '../../hooks/useENSName'
import { useActiveWeb3React } from '../../hooks'
import { NavLink } from "react-router-dom";
import { useWalletModalToggle } from '../../state/application/hooks'
import { shortenAddress } from '../../utils'
import { useETHBalances } from '../../state/wallet/hooks'
import API from '../../apis/api/six.js'
import { useTranslation } from "react-i18next"
import { ButtonSecondary } from '../Button'
import WalletModal from '../WalletModal'
import { TransactionDetails } from '../../state/transactions/reducer'

import { isTransactionRecent, useAllTransactions } from '../../state/transactions/hooks'







import styled from 'styled-components'
import wallet from '../../assets/images/home/nav-icon-wallet.png'
import compile from '../../assets/images/home/sidebar-icon-edit.png'
import row_icon1 from '../../assets/images/home/nav-logo.png'
import row_icon2 from '../../assets/images/home/tab-icon-exchange.png'
import row_icon3 from '../../assets/images/home/tab-icon-mining.png'
import row_icon4 from '../../assets/images/home/tab-icon-news.png'
import row_icon5 from '../../assets/images/home/tab-icon-directors.png'
import row_icon6 from '../../assets/images/home/telegraph.png'
import row_icon7 from '../../assets/images/home/Twitter.png'
import row_icon8 from '../../assets/images/home/Github.png'
import "./index.css"

const Menubox = styled.div`
    max-width:250px;
    min-width:200px;
    position: absolute;
    right: 100%;
    top: 20%;
    z-index: 99999;
    color:#946044;
`
const Menurow = styled.div`
    background-color:#fff9f0;
    border-radius:15px;
    margin:10px 0;
`
const Menutop = styled(Menurow)`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
`
const Menutop1 = styled(ButtonSecondary)`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
`
const Menuwallet = styled(Menurow)`
    display:flex;
    flex-direction: column;
    padding:10px 20px;
    font-size:14px;
`
const Menucenter = styled(Menurow)`
    display:flex;
    flex-direction: column;
    padding:10px 20px;
`
const Menucenterrow = styled.div`
    display:flex;
    align-items: center;
    font-size:14px;
    padding:10px 0;
`
const Menucentericon = styled(NavLink)`
    flex:1;
    display:flex;
    align-items:center;
    text-decoration: none;
    color:#666;
    opacity: 0.4;
    >img{
        margin-right:10px;
    }
`
const Menucentericon2 = styled.div`
flex:1;
display:flex;
align-items:center;

>a{
    margin-right:10px;
}
`
const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 14px;
  width: fit-content;
  font-weight: 500;
`
//github
const LINK_GITHUB = 'https://github.com/TTQSWAP/TTQSWAPContract'
//电报
const LINK_TELEGRAM = 'https://t.me/TTQSWAPCOM'
//推特
const LINK_TWITTER = 'https://twitter.com/ttqswap'

function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
    return b.addedTime - a.addedTime
  }
function formattingtext(text){
    // console.log(typeof text)
    return text && `${text.slice(0,3)}***${text.slice(text.length - 4 )}`
}
export default function PcMenu() {
    const { t } = useTranslation();
    const { account, connector, error } = useWeb3React()
    const toggleWalletModal = useWalletModalToggle()
    const [balance, setBalance] = useState(0.00)//我的余额
  const { ENSName } = useENSName(account ?? undefined)
  const allTransactions = useAllTransactions()

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash)
  const confirmed = sortedRecentTransactions.filter(tx => tx.receipt).map(tx => tx.hash)

useEffect(() => {
    let setTimeoutTimer;
    const timerFn = function () {
        API.getWalletAllTrs().then(res => {
        //   console.log(`setBalance`,res)
          setBalance(res)
      })
      
    }
    const timer = function () {
      setTimeoutTimer && clearTimeout(setTimeoutTimer)
      timerFn()
      setTimeoutTimer = setTimeout(() => {
        timer()
      }, 4000);
    }
    timer()
    return function () {
      setTimeoutTimer && clearTimeout(setTimeoutTimer)
    }
  }, [])
  return (
    <Menubox>
        <Menutop onClick={toggleWalletModal}>
            <div className='menutopbox' >
                <img width="20px" src={wallet} alt="" />
                <Text>{formattingtext(account)}</Text>
            </div>
            <img width="20px" src={compile} alt="" />
        </Menutop>
        <Menuwallet>
            <div>{t("navbar.text06")}</div>
            <div>{balance}</div>
        </Menuwallet>
        <Menucenter>
            <Menucenterrow >
                {/* <Menucentericon  exact to="/home" className="navItem" activeClassName="navItemActive" className="pcmenuactive"> */}
                <Menucentericon exact to="/home" activeClassName="pcmenuactive">
                    <img width="20px" src={row_icon1} alt="" />
                    {t("navbar.text01")}
                </Menucentericon>
            </Menucenterrow>
            <Menucenterrow>
                <Menucentericon  to="/exchange" activeClassName="pcmenuactive">
                    <img width="20px" src={row_icon2} alt="" />
                    {t("navbar.text02")}
                </Menucentericon>
            </Menucenterrow>
            <Menucenterrow className='lastroe'>
                <Menucentericon  exact to="/mining" activeClassName="pcmenuactive">
                    <img width="20px" src={row_icon3} alt="" />
                    {t("navbar.text03")}
                </Menucentericon>
            </Menucenterrow>
            <Menucenterrow>
                <Menucentericon  exact to="/nft" activeClassName="pcmenuactive">
                    <img width="20px" src={row_icon4} alt="" />
                    {t("navbar.text04")}
                </Menucentericon>
            </Menucenterrow>
            <Menucenterrow>
                <Menucentericon  exact to="/director" activeClassName="pcmenuactive">
                    <img width="20px" src={row_icon5} alt="" />
                    {t("navbar.text05")}
                </Menucentericon>
            </Menucenterrow>
            <Menucenterrow>
                <Menucentericon2>
                    <a target="_blank" href={(LINK_TELEGRAM)}><img width="20px" src={row_icon6} alt="" /></a> 
                    <a target="_blank" href={(LINK_TWITTER)}><img width="20px" src={row_icon7} alt="" /></a> 
                    <a target="_blank" href={(LINK_GITHUB)}><img width="20px" src={row_icon8} alt="" /></a>
                </Menucentericon2>
            </Menucenterrow>
            <Menucenterrow>
                <Menucentericon2 className='Powered'>
                    {t("navbar.text08")}
                 </Menucentericon2>
            </Menucenterrow>
            <Menucenterrow>
                <Menucentericon2 className="copyright">
                    {t("navbar.text07")}
                 </Menucentericon2>
            </Menucenterrow>
        </Menucenter>
      <WalletModal ENSName={ENSName ?? undefined} pendingTransactions={pending} confirmedTransactions={confirmed} />

    </Menubox>
    
  )
}
