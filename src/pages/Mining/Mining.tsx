import React, { useState ,useMemo} from 'react';
import './mining.css'
import styled from 'styled-components'
import NextCoin from '../../assets/images/mining/next_coin.png'
import PreCoin from '../../assets/images/mining/pre_coin.png'
import { NavLink } from 'react-router-dom'
// import {getInitreward,getUnStakedLp,getStakedLp,stakedLpToPool,stakedLpOutPool,isApprove,checkedDeal} from '../../apis/api/data.js'
import isApprove from '../../apis/api/data.js'
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import { useActiveWeb3React } from '../../hooks'
import { usePairs } from '../../data/Reserves'
import { Pair, JSBI } from 'huiwan-v2-sdk'
import { useStakingInfo } from '../../state/stake/hooks'
import { BIG_INT_ZERO } from '../../constants'
// import { Pair } from '@uniswap/sdk'
// import { unwrappedToken } from '../../utils/wrappedCurrency'
const TitleDiv = styled.div`
`
const TitleSup = styled.span`
color: #000;
  font-size: 24px;
  font-weight: 700;
  width: 80%;
  margin-top: 10px;
`
const ItemBtn = styled(NavLink)`
text-decoration:none;
color:#FFF;
display:block;
width:100%;
height:100%;
`
const nav_list = [
    {
        text: "当前挖矿产出",
        end_val: 7397507.51,
        start_val: 0,
    },
    {
        text: "当前挖矿产出价值",
        end_val: 7397507.51,
        start_val: 0,
    },
    {
        text: "待奖励金额",
        end_val: 397507.51,
        start_val: 0,
    },
    {
        text: "总回购分红数量",
        end_val: 7397107.51,
        start_val: 0,
    },
];
const nav_type = [
    {
        text: "主区",
        type: "main",
    },
    {
        text: "FLAT",
        type: "flat",
    },
    {
        text: "创新区",
        type: "ideas",
    },
]

interface Item {
    pre_coin: string,
    next_coin: string,
    coin_name: string[],
    coin: string[],
    per_day: string[] | number[],
    per_month: string[] | number[],
    apy: string[] | number[],
    tvl: string[] | number[],

}


console.log(isApprove)
isApprove.isApprove().then(res=>{
    console.log(res)
})

  export default function Mining() {
    const [flag, setFlag] = useState(0)
    const [type, setType] = useState('main')
    // const currency0 = showUnwrapped ? pair.token0 : unwrappedToken(pair.token0)
    // const currency1 = showUnwrapped ? pair.token1 : unwrappedToken(pair.token1)

  
    // fetch the user's balances of all tracked V2 LP tokens
    const { account } = useActiveWeb3React()
    const trackedTokenPairs = useTrackedTokenPairs()
    const tokenPairsWithLiquidityTokens = useMemo(
      () => trackedTokenPairs.map(tokens => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
      [trackedTokenPairs]
    )
    const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(tpwlt => tpwlt.liquidityToken), [
      tokenPairsWithLiquidityTokens
    ])
    const [v2PairsBalances] = useTokenBalancesWithLoadingIndicator(
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
  
    const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))
  
    // const hasV1Liquidity = useUserHasLiquidityInAllTokens()
  
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
  
    const pool_list: object = {
        'main': [
            {
                pre_coin: PreCoin,
                next_coin: NextCoin,
                coin_name: "ETH/HBTC",
                coin: "TRS",
                per_day: "20000",
                per_month: "600000",
                apy: "64.53%",
                tvl: "196254628.95",
            },
        ],
        // 'flat': [
        //     {
        //         pre_coin: PreCoin,
        //         next_coin: NextCoin,
        //         coin_name: "ETH/HBTC",
        //         coin: "TRS",
        //         per_day: "20000",
        //         per_month: "600000",
        //         apy: "64.53%",
        //         tvl: "196254628.95",
        //     },
        //     {
        //         pre_coin: PreCoin,
        //         next_coin: NextCoin,
        //         coin_name: "ETH/HBTC",
        //         coin: "TRS",
        //         per_day: "20000",
        //         per_month: "600000",
        //         apy: "64.53%",
        //         tvl: "196254628.95",
        //     },
        // ],
        // 'ideas': [
        //     {
        //         pre_coin: PreCoin,
        //         next_coin: NextCoin,
        //         coin_name: "ETH/HBTC",
        //         coin: "TRS",
        //         per_day: "20000",
        //         per_month: "600000",
        //         apy: "64.53%",
        //         tvl: "196254628.95",
        //     },
        // ]
    }
    return (
        <>
            <Title />
            <TopContent />
            <MidTitle />
                  {v2PairsWithoutStakedAmount.map(v2Pair => (
                    console.log(v2Pair)
                  ))}
            <ul className="nav-ul">
                {
                    nav_type.map((item, index) => {
                        return (
                            <li onClick={() => {
                                setFlag(index)
                                setType(item.type)
                            }}
                                className={flag === index ? 'nav-li active' : 'nav-li'}>
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>

            {
                type && pool_list[type] && (<div className="pool-list">
                    {
                        pool_list[type].map((item: Item) => {
                            return (
                                <>
                                    <div className="pool-item" >
                                        <div className="item-img">
                                            <img src={item.pre_coin} alt="" className="pre" />
                                            <img src={item.next_coin} alt="" className="next" />
                                        </div>
                                        <p className="item-coin">{item.coin_name}</p>
                                        <p>
                                            <span className="item-span">{item.per_day}</span>
                                            <span>每天赚{item.coin}</span>
                                        </p>
                                        <p>
                                            <span>赚</span>
                                            <span className="item-span">{item.per_month}</span>
                                            <span> {item.coin}月</span>
                                        </p>
                                        <div className="item-div">
                                            <span>APY</span>
                                            <span>{item.apy}</span>
                                        </div>
                                        <div className="item-div">
                                            <span>TVL</span>
                                            <span>{item.tvl}</span>
                                        </div>
                                        <div className="item-btn">
                                            {/* 跳转到 流动资金到时候  /add/token1/token2 */}
                                            <ItemBtn id={`/provideLiquidity-nav-link`} to={'/provideLiquidity'}>+流动资金</ItemBtn>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>)
            }

        </>
    )
}

function Title() {
    return (
        <>
            <TitleDiv>
                <TitleSup>火币生态链heco和APY的双链</TitleSup>
            </TitleDiv>
        </>
    )
}

function TopContent() {
    return (
        <>
            <div className="mini-top">
                <p className="title">DEX创新交易平台</p>
                <div className="mini-1-div">
                    <p>
                        <span>价格</span>
                        <span>$123456</span>
                    </p>
                    <p>
                        <span>余额</span>
                        <span>0</span>
                    </p>
                </div>
                <div className="top-div">
                    {
                        nav_list.map((item) => {
                            return (
                                <>
                                    <div className="item" key={item.text}>
                                        <p className="text">{item.text}</p>
                                        <p className="balance">
                                            {item.end_val}
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function MidTitle() {
    return (
        <>
            <div className="mid-title">
                <p className="mid-text">流动性挖矿</p>
                <p className="mid-sub">提供流动性，赚取BXH Tokens</p>
            </div>
        </>
    )
}



