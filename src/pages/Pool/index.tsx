import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Pair, JSBI } from 'huiwan-v2-sdk'
import { Link } from 'react-router-dom'
import { SwapPoolTabs } from '../../components/NavigationTabs'

import FullPositionCard from '../../components/PositionCard'
import { useUserHasLiquidityInAllTokens } from '../../data/V1'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import { StyledInternalLink, ExternalLink, TYPE, HideSmall } from '../../theme'
import { Text } from 'rebass'
import Card from '../../components/Card'
import { RowBetween, RowFixed } from '../../components/Row'
// import { ButtonPrimary, ButtonSecondary } from '../../components/Button'
import { AutoColumn } from '../../components/Column'

import { useActiveWeb3React } from '../../hooks'
import { usePairs } from '../../data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
import { Dots } from '../../components/swap/styleds'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import { useStakingInfo } from '../../state/stake/hooks'
import { BIG_INT_ZERO } from '../../constants'
import { useTranslation } from "react-i18next"

// import { NavLink } from 'react-router-dom'
import AppBody from '../AppBody'
import SwapHeader from "../../components/swap/SwapHeader";

 const PageWrapper = styled(AutoColumn)`
  max-width: 450px;
  width: 100%;
`

const VoteCard = styled(DataCard)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`

const TitleRow = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`

const ButtonRow = styled(RowFixed)`
  gap: 8px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
  width: 100%;
`
const Headerbox = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:20px 0;
`
const Headername = styled.div`
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #722F0D;
  margin-top:10px;

`
// const ResponsiveButtonPrimary = styled(ButtonPrimary)`
//   width: fit-content;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     width: 48%;
//   `};
//   border-radius:6px;
//   background-color:#0278fe;
//   color:#fff;
//   margin-left:0px;
// `

// const ResponsiveButtonSecondary = styled(ButtonSecondary)`
//   width: fit-content;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     width: 48%;
//   `};
//   border-radius:6px;
// `

const EmptyProposals = styled.div`
  border: 1px solid ${({ theme }) => theme.text4};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CreateButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 45px;
  border-radius: 5px;
  border: 2px solid #773615;
  font-size: 16px;
  color: #722F0D;
  box-sizing: border-box;
  text-decoration: none;
`
const AddButton = styled(Link)`
  width: 48%;
  height: 45px;
  border-radius: 6px;
  border: none;
  background-color: #722f0d;
  text-align: center;
  font-size: 16px;
  color: #fff;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PoolNot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-size: 16px;
  color: #667182;
  > img {
    margin: 10px 0 20px;
  }
`

export default function Pool() {
  const { t } = useTranslation();

  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map(tokens => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(tpwlt => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some(V2Pair => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  const hasV1Liquidity = useUserHasLiquidityInAllTokens()

  // show liquidity even if its deposited in rewards contract
  const stakingInfo = useStakingInfo()
  const stakingInfosWithBalance = stakingInfo?.filter(pool => JSBI.greaterThan(pool.stakedAmount.raw, BIG_INT_ZERO))
  const stakingPairs = usePairs(stakingInfosWithBalance?.map(stakingInfo => stakingInfo.tokens))

  // remove any pairs that also are included in pairs with stake in mining pool
  const v2PairsWithoutStakedAmount = allV2PairsWithLiquidity.filter(v2Pair => {
    return (
      stakingPairs
        ?.map(stakingPair => stakingPair[1])
        .filter(stakingPair => stakingPair?.liquidityToken.address === v2Pair.liquidityToken.address).length === 0
    )
  })

  return (
    <>
      {/* <PageTitle /> */}
      <Headerbox>
        <img width="40" height="40" src={require('../../assets/images/home/nav-logo.png')} alt="" />
        <Headername>TTQSwap</Headername>
      </Headerbox>
      <PageWrapper>
        <SwapPoolTabs active={'pool'} />
        <VoteCard>
          <CardBGImage />
          <CardNoise />
            {
              false &&(
                <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>{t("pool.text01")}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                {t("pool.text02")}
                </TYPE.white>
              </RowBetween>
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                target="_blank"
                href="https://uniswap.org/docs/v2/core-concepts/pools/"
              >
                <TYPE.white fontSize={14}>{t("pool.text03")}</TYPE.white>
              </ExternalLink>
            </AutoColumn>
          </CardSection>
              )
            }
          <CardBGImage />
          <CardNoise />
        </VoteCard>
        <AppBody>
        <SwapHeader />
        <AutoColumn gap="lg" justify="center">
          <AutoColumn gap="lg" style={{ width: '100%', padding: '1rem', boxSizing: 'border-box' }}>
            <TitleRow style={{ marginTop: '1rem' }} padding={'0'}>
              <HideSmall>
                {/* <TYPE.mediumHeader style={{ marginTop: '0.5rem', justifySelf: 'flex-start' }}>
                {t("pool.text04")}
                </TYPE.mediumHeader> */}
              </HideSmall>
              <ButtonRow>
                <CreateButton to={'/create/HT'}>
                  {t("pool.text05")}
                </CreateButton>
                {/* <ResponsiveButtonSecondary as={Link} padding="6px 8px" to="/create/HT">
                {t("pool.text05")}
                </ResponsiveButtonSecondary> */}
                <AddButton to={"/add/HT"}>
                {t("pool.text06")}
                </AddButton>
                {/* <ResponsiveButtonPrimary
                  id="join-pool-button"
                  as={Link}
                  padding="6px 8px"
                  borderRadius="12px"
                  to="/add/HT"
                >
                  <Text fontWeight={500} fontSize={16}>
                    {t("pool.text06")}
                  </Text>
                </ResponsiveButtonPrimary> */}
              </ButtonRow>
            </TitleRow>

            {!account ? (
              <Card padding="40px">
                <TYPE.body color={theme.text3} textAlign="center">
                {t("pool.text07")}
                </TYPE.body>
              </Card>
            ) : v2IsLoading ? (
              <EmptyProposals>
                <TYPE.body color={theme.text3} textAlign="center">
                  <Dots>{t("pool.text08")}</Dots>
                </TYPE.body>
              </EmptyProposals>
            ) : allV2PairsWithLiquidity?.length > 0 || stakingPairs?.length > 0 ? (
              <>
                {/* <ButtonSecondary>
                  <RowBetween>
                    <ExternalLink href={'https://uniswap.info/account/' + account}>
                    {t("pool.text09")}
                    </ExternalLink>
                    <span> ↗</span>
                  </RowBetween>
                </ButtonSecondary> */}
                {v2PairsWithoutStakedAmount.map(v2Pair => (
                  <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                ))}
                {stakingPairs.map(
                  (stakingPair, i) =>
                    stakingPair[1] && ( // skip pairs that arent loaded
                      <FullPositionCard
                        key={stakingInfosWithBalance[i].stakingRewardAddress}
                        pair={stakingPair[1]}
                        stakedBalance={stakingInfosWithBalance[i].stakedAmount}
                      />
                    )
                )}
              </>
            ) : (
              <PoolNot>
                <img width="112" src={ require('../../assets/images/home/icon-no-fluidity.png') } alt="" />
                <span>{t("pool.text10")}</span>
              </PoolNot>
              // <EmptyProposals>
              //   <TYPE.body color={theme.text3} textAlign="center">
              //   {t("pool.text10")}
              //   </TYPE.body>
              // </EmptyProposals>
            )}

            <AutoColumn justify={'center'} gap="md">
              <Text textAlign="center" fontSize={12} style={{ padding: '.5rem 0 .5rem 0', color: '#ABB7CA' }}>
                {hasV1Liquidity ? `${t("pool.text11")}` :  `${t("pool.text12")}`}{' '}
                <StyledInternalLink style={{ color: '#722F0D' }} id="import-pool-link" to={hasV1Liquidity ? '/migrate/v1' : '/find'}>
                  {hasV1Liquidity ? `${t("pool.text13")}` : `${t("pool.text14")}`}
                </StyledInternalLink>
              </Text>
            </AutoColumn>
          </AutoColumn>
        </AutoColumn>
        </AppBody>
      </PageWrapper>
    </>
  )
}

const TitleDiv = styled.div`
width: 100%;
`
const TitleText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 15px;
  background-color: #101a35;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-size: 16px;
  color: #ABB7CA;
  line-height: 27px;
`
const TitleSup = styled.div`
  color: #06DD7A;
  font-size: 24px;
  font-weight: 700;
  line-height:32px;
  width: 100%;
  padding:0;
  margin:0;
`

const TitleSub = styled.p`
color: #ACB7CA;
font-size: 17px;
margin-top: 5px;
margin-bottom:20px;
`
const Textdiv = styled.div`
  width:100%;
`
function PageTitle() {
  const { t } = useTranslation()

  return (
    <>
      <TitleDiv>
        <TitleText>
          <Textdiv>{t("swap.text24")}</Textdiv>
          <Textdiv>{t("swap.text25")}</Textdiv>
        </TitleText>
        <TitleSup>{t("swap.text17")}</TitleSup>
        <TitleSub>{t("swap.text18")}</TitleSub>
      </TitleDiv>
    </>
  )
}