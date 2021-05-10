import React from 'react'
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"
import creatHistory from 'history/createHashHistory'
import { ArrowLeft } from 'react-feather'
import './index.css';

const StyledSwapHeader = styled.div`
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  color: ${({ theme }) => theme.text2};
`
const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.text1};
  margin-right:5px;
`
const Dspdiv = styled.div`
  display:flex;
  // align-items: center;
  justify-content: space-between;
  width: 80%;
`

export default function SwapHeader() {
  const { t } = useTranslation()
  const history = creatHistory();


  return (
    <StyledSwapHeader>
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
          <NavLink exact to="/" className="exchangeLink" activeClassName="exchangeActive">
          {t("swap.text23")}
          </NavLink>
          {/* <TYPE.black>
          {t("swap.text21")}
          </TYPE.black> */}
        </Dspdiv>
        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
