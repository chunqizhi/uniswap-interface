import React, { useState } from 'react'
import { Text } from 'rebass'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoDark from '../../assets/svg/nav-logo.png'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'
import Menu from '../Menu'
import Row, { RowFixed } from '../Row'
import ClaimModal from '../claim/ClaimModal'
import Modal from '../Modal'
import UniBalanceContent from './UniBalanceContent'
import english_icon from '../../assets/images/home/nav-language-click.png'
import china_icon from '../../assets/images/home/zh1.png'

import i18n from "../../i18n"
import { useTranslation } from "react-i18next"


const HeaderFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 1rem;
  z-index: 2;
  background-color:#fff9f0;
 
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
  `}
  display: flex;
    align-items: center;
    justify-content: center;
`
const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
  >img{
      margin-right:5px;
  }
`

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
  display: flex;
  align-items: center;
  justify-content: space-between;
    width: 1200px;
`

const HeaderLinks = styled(Row)`
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem 0 1rem 1rem;
    padding:0px;
    justify-content: flex-end;
`};
`

export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`
const HomeBtn01 = styled(NavLink)`
text-decoration:none;
display:flex;
align-items: center;
`
const Titlename = styled.div`
  // font-size:4.3vw;
//   width:32vw;
  color:#722F0D;
  margin-left:5px;
  font-size: 15px;
  font-family: MicrosoftYaHei;
  color: #722F0D;
  >div{
      text-align:center;
  }
`
const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    >span{
        margin-left:5px;
    }
`
// const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
//   [ChainId.RINKEBY]: 'Rinkeby',
//   [ChainId.ROPSTEN]: 'Ropsten',
//   [ChainId.GÖRLI]: 'Görli',
//   [ChainId.KOVAN]: 'Kovan',
//   [ChainId.HECO_TESTNET]: 'HECO_TESTNET'
// }

export default function PcHeader() {
  const { account } = useActiveWeb3React()
  const { t } = useTranslation();

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [darkMode] = useDarkModeManager()


  const [showUniBalanceModal, setShowUniBalanceModal] = useState(false)

  return (
    <HeaderFrame>
      <ClaimModal />
      {/* <Modal isOpen={showUniBalanceModal} onDismiss={() => setShowUniBalanceModal(false)}>
        <UniBalanceContent setShowUniBalanceModal={setShowUniBalanceModal} />
      </Modal> */}
      <HeaderRow>
        <HomeBtn01 id={`home-nav-link`} to={'/home'}> <img width={'34px'} src={darkMode ? LogoDark : LogoDark} alt="logo" />
          <Titlename>
              <div>TTQ</div>
              <div style={{'font-size':'12px'}}>TTQSWAP</div>
          </Titlename>
        </HomeBtn01>
        {/* <HeaderLinks>
        </HeaderLinks> */}
        {/* <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}> */}
          {/* <Web3Status /> */}
        {/* </AccountElement> */}
        <HeaderElementWrap onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
          {/* <Menu /> */}
          {/* <img src={icon11} width='14' height='14' alt='' />
              {i18n.language === 'en' ? '中文' : 'English'} */}
              {
                  i18n.language === 'en' ? (<HeaderChina></HeaderChina>) : (<HeaderEnglish></HeaderEnglish>)
              }
            
            
        </HeaderElementWrap>
      </HeaderRow>
    </HeaderFrame>
  )
}
function HeaderEnglish() {
    const { t } = useTranslation()
    return (
      <>
        <TitleDiv>
            <img width='28px' src={english_icon} alt="" /><span>English</span>
        </TitleDiv>
      </>
    )
  }
  function HeaderChina() {
    const { t } = useTranslation()
    return (
      <>
        <TitleDiv>
            <img width='28px' src={china_icon} alt="" /><span>简体中文</span>
        </TitleDiv>
      </>
    )
  }
