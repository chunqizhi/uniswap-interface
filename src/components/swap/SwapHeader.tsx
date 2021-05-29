import React , { useState }from "react";
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
// import { TYPE } from '../../theme'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"
// import creatHistory from 'history/createHashHistory'
// import { ArrowLeft } from 'react-feather'
import './index.css';

const StyledSwapHeader = styled.div`
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  color: ${({ theme }) => theme.text2};

`
// const StyledArrowLeft = styled(ArrowLeft)`
//   color: ${({ theme }) => theme.text1};
//   margin-right:5px;
// `
const Dspdiv = styled.div`
  display:flex;
  // align-items: center;
  justify-content: space-between;
  width: 80%;
`
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
export default function SwapHeader() {
  const { t } = useTranslation()
  // const history = creatHistory();
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
    <StyledSwapHeader>
      {isApprovediv && (
                        <Approvediv>{t("director.text14")}</Approvediv>
                    )}
      <RowBetween>
        <Dspdiv>
          {/* <StyledArrowLeft  onClick={()=>{
            history.goBack();
          }}/> */}
          {/* 跳链接 */}
          <NavLink exact to="/exchange" className="exchangeLink" activeClassName="exchangeActive">
          {t("swap.text21")}
          </NavLink>
          <NavLink exact to="/exchange/pool" className="exchangeLink" activeClassName="exchangeActive">
          {t("swap.text22")}
          </NavLink>
          <NavLink exact to="/chainbridge" className="exchangeLink" activeClassName="exchangeActive">
          {t("swap.text23")}
          </NavLink>
          {/* <Narberdiv onClick={ ()=> opentoast() } className="exchangeLink" activeClassName="exchangeActive">
          {t("swap.text23")}
          </Narberdiv> */}
          {/* <TYPE.black>
          {t("swap.text21")}
          </TYPE.black> */}
        </Dspdiv>
        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
