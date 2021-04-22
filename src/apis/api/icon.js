import USDTICON from '../../assets/images/coin/USDT.png'
import TRSICON from '../../assets/images/coin/TRS.png'
import ETHICON from '../../assets/images/coin/ETH.png'
import HTICON from '../../assets/images/coin/HT.png'
import BXHICON from '../../assets/images/coin/BXH.png'
import MDXICON from '../../assets/images/coin/MDX.png'
import HUSDICON from '../../assets/images/coin/HUSD.png'
import TPTICON from '../../assets/images/coin/TPT.png'
import HBTCICON from '../../assets/images/coin/HBTC.png'

export default [{
        pre_coin: ETHICON,
        next_coin: HBTCICON,
        coin_name: "ETH/HBTC",
        coin: "TRS",
        poolIndex: 'one',
        coin_price: 'ETHPRE',
        key_word: 'main'
    },

    {
        pre_coin: USDTICON,
        next_coin: HBTCICON,
        coin_name: "USDT/HBTC",
        coin: "TRS",
        poolIndex: 'two',
        coin_price: 'USDTPRE',
        key_word: 'main'
    },

    {
        pre_coin: ETHICON,
        next_coin: USDTICON,
        coin_name: "ETH/USDT",
        coin: "TRS",
        poolIndex: 'three',
        coin_price: 'USDTNEXT',
        key_word: 'main'
    },


    {
        pre_coin: HTICON,
        next_coin: HUSDICON,
        coin_name: "HT/HUSD",
        coin: "TRS",
        poolIndex: 'four',
        coin_price: 'HTPRE',
        key_word: 'main'
    },

    {
        pre_coin: USDTICON,
        next_coin: HUSDICON,
        coin_name: "USDT/HUSD",
        coin: "TRS",
        poolIndex: 'five',
        coin_price: 'USDTPRE',
        key_word: 'main'
    },
    {
        pre_coin: TRSICON,
        next_coin: USDTICON,
        coin_name: "TRS/USDT",
        coin: "TRS",
        poolIndex: 'six',
        coin_price: 'USDTNEXT',
        key_word: 'flat'
    },
    {
        pre_coin: TRSICON,
        next_coin: HTICON,
        coin_name: "TRS/HT",
        coin: "TRS",
        poolIndex: 'seven',
        coin_price: 'HTNEXT',
        key_word: 'flat'
    },
    {
        pre_coin: MDXICON,
        next_coin: USDTICON,
        coin_name: "MDX/USDT",
        coin: "TRS",
        poolIndex: 'eight',
        coin_price: 'USDTNEXT',
        key_word: "ideas"
    },
    {
        pre_coin: BXHICON,
        next_coin: USDTICON,
        coin_name: "BXH/USDT",
        coin: "TRS",
        poolIndex: 'nine',
        coin_price: 'USDTNEXT',
        key_word: "ideas"
    },

    {
        pre_coin: TPTICON,
        next_coin: USDTICON,
        coin_name: "TPT/USDT",
        coin: "TRS",
        poolIndex: 'ten',
        coin_price: 'USDTNEXT',
        key_word: "ideas"
    },
]