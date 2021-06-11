import React, {useState, Suspense ,useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import AddressClaimModal from '../components/claim/AddressClaimModal'
import Header from '../components/Header'
import PcHeader from '../components/PcHeader/index'
import PcMenu from '../components/Pcmenu/index'
import Polling from '../components/Header/Polling'
// import Tips from '../components/Tips/tips'
// import URLWarning from '../components/Header/URLWarning'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { ApplicationModal } from '../state/application/actions'
import { useModalOpen, useToggleModal } from '../state/application/hooks'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Earn from './Earn'
import Manage from './Earn/Manage'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import Vote from './Vote'
import VotePage from './Vote/VotePage'
import Home from './Home/Home'
import Mining from './Mining/Mining'
import ProvideLiquidity from './ProvideLiquidity/ProvideLiquidity'
// 公共底部
import NavBar from "../components/NavBar/index";
// 董事会页面
import Director from "./Director/index";
//行情
import Market from "./Market/index";
//跨链桥
import ChainBridge from "./ChainBridge/index";
//NFT
import NFT from "./NFT/index";
//背景图片
import home_bg from '../assets/images/home/home-bgimg.png'


const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  background-color:#050822;
  // height:100vh;
  background-image: url(${home_bg});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  height:100%;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  background-color: #080d38;
  position: sticky;
  top: 0;
  z-index: 999;
`

const BodyWrapper = styled.div`
  max-width:800px;
  display: flex;
  flex-direction: column;
  width: 100%;
  // padding-top: 100px;
  padding-top: 20px;
  align-items: center;
  flex: 1;
  // overflow-y: auto;
  // overflow-x: hidden;
  z-index: 10;
  
  margin: 0 auto 61px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 8px 16px 10px;
    // padding-top: 2rem;
    // background-color: #050822;
  `};
  // background-image: url(${home_bg});
  // background-repeat: no-repeat;
  // background-size: cover;
  // z-index: 1;
  position: relative;
  padding-bottom: 10px
`


// const Marginer = styled.div`
//   margin-top: 5rem;
// `
function TopLevelModals() {
  const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
  const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  return <AddressClaimModal isOpen={open} onDismiss={toggle} />
}
// offsetWidth = document.querySelector('body').offsetWidth;
export default function App() {
const [offsetWidth, setOffsetWidth] = useState(document.querySelector('body').offsetWidth)   //显示隐藏 抵押解押弹框
  
  // window.addEventListener('resize', e => {
  //   console.log('78979878979res',e.target.innerWidth)
  //   setOffsetWidth(e.target.innerWidth)
  // })
  useEffect(() => {
    window.addEventListener('resize', e => {
      console.log('78979878979res',e.target.innerWidth)
      setOffsetWidth(e.target.innerWidth)
    })
    // timer()
    return function () {
        window.addEventListener('resize', e => {},false)
    }
}, [])
  return (
    <Suspense fallback={null}>
      <Route component={GoogleAnalyticsReporter} />
      <Route component={DarkModeQueryParamReader} />
      <AppWrapper>
        {/* <URLWarning /> */}
        <HeaderWrapper>
          {/* <Tips/> */}
          {
            offsetWidth > 1024 ?  (<PcHeader />) :( <Header />)
          }
          {/* <Header /> */}
         
        </HeaderWrapper>
        <BodyWrapper>
          {
            offsetWidth > 1200 ? (<PcMenu />) : ''
          }
          {/* <Popups />
          <Polling />
          <TopLevelModals /> */}
          <Web3ReactManager>
            <Switch>
              {/* Home页面 */}
              <Route exact strict path="/home" component={Home} />
              {/*  */}
              <Route exact strict path="/exchange" component={Swap} />
              {/* 流动性挖矿 */}
              <Route exact strict path="/mining" component={Mining} />
              {/* 抵押货币 */}
              <Route exact strict path="/provideLiquidity/:poolIndex" component={ProvideLiquidity} />

              <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} />

              <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
              <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
              <Route exact strict path="/find" component={PoolFinder} />
              <Route exact strict path="/exchange/pool" component={Pool} />
              <Route exact strict path="/uni" component={Earn} />
              <Route exact strict path="/vote" component={Vote} />
              <Route exact strict path="/create" component={RedirectToAddLiquidity} />
              <Route exact path="/add" component={AddLiquidity} />
              <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact path="/create" component={AddLiquidity} />
              <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact strict path="/remove/v1/:address" component={RemoveV1Exchange} />
              <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
              <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
              <Route exact strict path="/migrate/v1" component={MigrateV1} />
              <Route exact strict path="/migrate/v1/:address" component={MigrateV1Exchange} />
              <Route exact strict path="/uni/:currencyIdA/:currencyIdB" component={Manage} />
              <Route exact strict path="/vote/:id" component={VotePage} />
              <Route exact strict path="/director" component={Director} />
              <Route exact strict path="/market" component={Market} />
              <Route exact strict path="/chainbridge" component={ChainBridge} />
              <Route exact strict path="/nft" component={NFT} />
              <Route component={RedirectPathToSwapOnly} />
            </Switch>
          </Web3ReactManager>
          {/* <Marginer /> */}
        </BodyWrapper>
        {/* 公共底部 */}
        {
          offsetWidth <= 1200 ? (<NavBar />) : ''
        }
      </AppWrapper>
    </Suspense>
  )
}
