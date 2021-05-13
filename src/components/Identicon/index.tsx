// import React, { useEffect, useRef } from 'react'
import React from 'react'

import styled from 'styled-components'
import headImg from "../../assets/images/wallet-icon-click-png.png"
// import { useActiveWeb3React } from '../../hooks'
// import Jazzicon from 'jazzicon'

const StyledIdenticonContainer = styled.div`
  height: 17px;
  width: 22px;
  // border-radius: 1.125rem;
  // background-color: ${({ theme }) => theme.bg4};
`

export default function Identicon() {
  // const ref = useRef<HTMLDivElement>()

  // const { account } = useActiveWeb3React()

  // useEffect(() => {
  //   if (account && ref.current) {
  //     ref.current.innerHTML = ''
  //     ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)))
  //   }
  // }, [account])

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  // return <StyledIdenticonContainer ref={ref as any} />
  return (
    <StyledIdenticonContainer>
      <img src={ headImg } alt="" />
    </StyledIdenticonContainer>
  )
}
