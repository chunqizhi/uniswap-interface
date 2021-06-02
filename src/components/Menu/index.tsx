import React, { useRef, useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import { Twitter, GitHub } from 'react-feather'
import styled from 'styled-components'
// import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
// import menu from '../../assets/images/menu.png'
// import menu1 from '../../assets/images/menu1.png'
// import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { useTranslation } from "react-i18next"
import { ExternalLink } from '../../theme'
// import { ButtonPrimary } from '../Button'
import icon1 from '../../assets/images/menu/dh.png'
import icon2 from '../../assets/images/menu/zjc.png'
import icon3 from '../../assets/images/menu/wk.png'
import icon4 from '../../assets/images/menu/award.png'
import icon5 from '../../assets/images/menu/bps.png'
import icon6 from '../../assets/images/menu/sjbg.png'
import icon7 from '../../assets/images/menu/hz.png'
import icon8 from '../../assets/images/menu/github.png'
import icon9 from '../../assets/images/menu/tt.png'
import icon10 from '../../assets/images/menu/db.png'
import icon11 from '../../assets/images/menu/fy.png'

import i18n from "../../i18n"

// const StyledMenuIcon = styled(MenuIcon)`
//   path {
//     stroke: ${({ theme }) => theme.text1};
//   }
// `

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff9f0;
  margin: 0;
  padding: 0;
  height: 35px;
  // background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  padding:0px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:8px;
  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: #fff9f0;
    // background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  // margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  width:50%;
  height:100%;
  position: absolute;
  top:0;
  right: 0;
  z-index: 100;
  background-color: #fff9f2;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color:#D19C7D;
 
`

const MenuItem = styled(ExternalLink)`
  // flex: 1;
  font-size:12px;
  padding: 0.5rem 0.5rem;
  color: #D19C7D;
  display:flex;
  align-items:center;
  // color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > img {
    margin-right:5px;
    color:#333;
  }
  > svg {
    margin-right: 8px;
  }
`
const MuneBox = styled.div`
position: fixed;
background-color: rgba(0,0,0,.8);
top: 8%;
left: 0;
right: 0;
bottom: 0;
}
`
const Language = styled.p`
margin:0;
font-size:12px;
display:flex;
align-items:center;
padding: 0.5rem ;
text-decoration:none;
color: #D19C7D;
// color: ${({ theme }) => theme.text2};
>img{
  margin-right:5px;
}
`
const NavLinkItem = styled(NavLink)`
padding: 0.5rem 0.5rem;
text-decoration:none;
// color: #722F0D;
font-size:12px;
color:#D19C7D;
display:flex;
align-items:center;
// color: ${({ theme }) => theme.text2};
>img{
  margin-right:5px;
}
`
const Approvediv = styled.div`
    padding:10px 20px;
    background-color:#f2f2f2;
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
const CODE_LINK = 'https://github.com/Tree-Swap/Tree-Swap'

let timers, domUrl
export default function Menu() {
  // const { account } = useActiveWeb3React()
  const { t } = useTranslation();
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  const [isApprovediv, setApprovediv] = useState(false) // 授权/非授权
  const [menu, setMenu] = useState(require('../../assets/images/home/menu.png'));
  // 根据open监听是否打开弹窗
  useEffect(() => {
    open === false? setMenu(require('../../assets/images/home/menu.png')) : setMenu(require('../../assets/images/home/menu1.png'))
  }, [open]);

  useOnClickOutside(node, open ? toggle : undefined)
  // const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  const toast = () => {
    timers = setTimeout(() => {
      setApprovediv(false)
      clearTimeout(timers)
    }, 3000);
  }
  //复制
  const copyUrl = () => {
    clearTimeout(timers);
    domUrl = document.createElement('input');
    domUrl.value = 'treeswap.service@outlook.com';
    domUrl.id = 'creatDom';
    document.body.appendChild(domUrl);
    domUrl.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    let creatDom = document.getElementById('creatDom');
    creatDom.parentNode.removeChild(creatDom);
    setApprovediv(true)
    toast()
    //       Toast.success('已复制好，可贴粘。');
  }

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <img src={ menu } width="18px" height="18px" alt="" />
        {/* <StyledMenuIcon /> */}
      </StyledMenuButton>
      { isApprovediv && (
            <Approvediv>{t("navlist.text10")}</Approvediv>
          )}
      {/* open &&  */}
      {open && (
        <MuneBox onClick={toggle}>
          <MenuFlyout>
            <NavLinkItem id={`exchange-nav-link`} to={'/exchange'}>
              <img src={icon1} width='14' height='14' alt='' />
              {t("navlist.text01")}
            </NavLinkItem>
            <NavLinkItem id={`pool-nav-link`} to={'/exchange/pool'}>
              <img src={icon2} width='14' height='14' alt='' />
              {t("navlist.text03")}
            </NavLinkItem>
            <NavLinkItem id={`mining-nav-link`} to={'/mining'}>
              <img src={icon3} width='14' height='14' alt='' />
              {t("navlist.text02")}
            </NavLinkItem>
            <MenuItem id="link">
              <img src={icon4} width='14' height='14' alt='' />
              {t("navlist.text11")}
            </MenuItem>
            {/* <NavLinkItem id={`pool-nav-link`} to={'/exchange/pool'}>{t("navlist.text03")}</NavLinkItem> */}
            <MenuItem id="link" href="https://www.tree-swap.org/data/WhitePapers.pdf">
              <img src={icon5} width='14' height='14' alt='' />
              {t("navlist.text04")}
            </MenuItem>
            <MenuItem id="link" href="https://www.tree-swap.org/data/SwapAudit.pdf">
              <img src={icon6} width='14' height='14' alt='' />
              {t("navlist.text09")}
            </MenuItem>
            
            <MenuItem onClick={copyUrl}>
              {/* <BookOpen size={14} />  id="link" href="https://uniswap.org/docs/v2" */}
              {/* <img src={require('../../assets/images/wx.png')} width='14' height='14' alt='' /> */}
              <img src={icon7} width='14' height='14' alt='' />
              {t("navlist.text05")}
            </MenuItem>
            <MenuItem id="link" href={CODE_LINK}>
              {/* <GitHub size={14} /> */}
              <img src={icon8} width='14' height='14' alt='' />
              {t("navlist.text06")}
            </MenuItem>
            <MenuItem id="link" href="https://twitter.com/TreeswapBest">
              {/* <Twitter size={14} /> */}
              <img src={icon9} width='14' height='14' alt='' />
              {t("navlist.text07")}
            </MenuItem>
            <MenuItem id="link" href="https://t.me/treeswaporg">
              {/* <img src={require('../../assets/images/telegram.png')} width='14' height='14' alt='' /> */}
              <img src={icon10} width='14' height='14' alt='' />
              {t("navlist.text08")}
            </MenuItem>
            {/* {account && (
              <ButtonPrimary onClick={openClaimModal} padding="8px 16px" width="100%" borderRadius="12px" mt="0.5rem">
                Claim UNI
              </ButtonPrimary>
            )} */}
            <Language onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
              <img src={icon11} width='14' height='14' alt='' />
              {i18n.language === 'en' ? '中文' : 'English'}
            </Language>
          </MenuFlyout>
        </MuneBox>
      )}
    </StyledMenu>
  )
}
