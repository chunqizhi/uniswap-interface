import React from 'react'
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'
import { useTranslation } from "react-i18next"
// import creatHistory from 'history/createHashHistory'
import {createHashHistory} from 'history'
import { ArrowLeft } from 'react-feather'




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
  align-items: center;
`

export default function SwapHeader() {
  const { t } = useTranslation()
  // const history = creatHistory();
  const history = createHashHistory();


  return (
    <StyledSwapHeader>
      <RowBetween>
        <Dspdiv>
          <StyledArrowLeft  onClick={()=>{
            history.goBack();
          }}/>
          <TYPE.black fontWeight={500}>
          {t("swap.text21")}
          </TYPE.black>
        </Dspdiv>
        
        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
