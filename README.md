### 语言
```
    import {useTranslation} from "react-i18next"
    const   { t } = useTranslation()
   {t('key')}
```


## 矿池添加 e.g  添加 BTC-USDT 矿池
```
    1 初始化矿池对象 在/src/apis/ 下添加 BTC.js
    2 pre-abi 引入 BTC的 abi  next-abi 引入USDT的abi 
    3 pre addr 和 next addr 分别为 BTC USDT addr
    4 在src/apis/data.js 中引入 BTC.js  并在函数 getCurrentPool  中添加case btc
    5 在src/apis/data.js 添加
                getAllStartTime   BTC.getPoolStartTime
                getPoolListData   BTC.getPoolData
                getAllBlock       BTCgetLastTime  
                getAllRewardRate  BTCgetRewardRate

    6 在src/apis/icon.js 中添加BTC-USDT 
                {
                    pre_coin: ETHICON,      // BTC icon
                    next_coin: HBTCICON,    // USDT icon
                    coin_name: "ETH/HBTC",  // 矿池币对名
                    coin: "TRS",            // 挖矿奖励 货币名
                    poolIndex: 'one',       // getCurrentPool 函数中对应的case
                    coin_price: 'ETHPRE',   // 计算tvl使用 btc 还是USDT 
                    key_word: 'main'        // main flat ideas
                }
```

