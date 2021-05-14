import USDTICON from '../../assets/images/coin/USDT.png'
import TRSICON from '../../assets/images/coin/TRS.png'
import ETHICON from '../../assets/images/coin/ETH.png'
import HTICON from '../../assets/images/coin/HT.png'
import BXHICON from '../../assets/images/coin/BXH.png'
import MDXICON from '../../assets/images/coin/MDX.png'
import HUSDICON from '../../assets/images/coin/HUSD.png'
// import TPTICON from '../../assets/images/coin/TPT.png'
import DOGEICON from '../../assets/images/coin/DOGE.png'
import HBTCICON from '../../assets/images/coin/HBTC.png'
import XFICON from '../../assets/images/coin/XF.png'
import HDOTICON from '../../assets/images/coin/HDOT.png'
import HFILICON from '../../assets/images/coin/HFIL.png'
import SHIBICON from '../../assets/images/coin/SHIB.png'
import HLTCICON from '../../assets/images/coin/HLTC.png'
import UNIICON from '../../assets/images/coin/UNI.png'
import XRPICON from '../../assets/images/coin/XRP.png'
import HBCHICON from '../../assets/images/coin/HBCH.png'
import ADAICON from '../../assets/images/coin/ADA.png'
import EOSICON from '../../assets/images/coin/EOS.png'
import LINKICON from '../../assets/images/coin/LINK.png'
import AAVEICON from '../../assets/images/coin/AAVE.png'



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

    // {
    //     pre_coin: TPTICON,
    //     next_coin: USDTICON,
    //     coin_name: "TPT/USDT",
    //     coin: "TRS",
    //     poolIndex: 'ten',
    //     coin_price: 'USDTNEXT',
    //     key_word: "ideas"
    // },
    {
        pre_coin: HTICON,
        next_coin: USDTICON,
        coin_name: "HT/USDT",
        coin: "TRS",
        poolIndex: 'eleven',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: XFICON,
        next_coin: USDTICON,
        coin_name: "XF/USDT",
        coin: "TRS",
        poolIndex: 'twelve',
        coin_price: 'USDTNEXT',
        key_word: "ideas"
    },
    {
        pre_coin: TRSICON,
        next_coin: DOGEICON,
        coin_name: "TRS/DOGE",
        coin: "TRS",
        poolIndex: 'thirteen',
        coin_price: 'TRSPRE',
        key_word: "flat"
    },
    {
        pre_coin: HBTCICON,
        next_coin: HTICON,
        coin_name: "HBTC/HT",
        coin: "TRS",
        poolIndex: 'fourteen',
        coin_price: 'HTNEXT',
        key_word: "main"
    },
    {
        pre_coin: ETHICON,
        next_coin: HTICON,
        coin_name: "ETH/HT",
        coin: "TRS",
        poolIndex: 'fifteen',
        coin_price: 'HTNEXT',
        key_word: "main"
    },
    {
        pre_coin: HFILICON,
        next_coin: USDTICON,
        coin_name: "HFIL/USDT",
        coin: "TRS",
        poolIndex: 'hfilusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: HDOTICON,
        next_coin: USDTICON,
        coin_name: "HDOT/USDT",
        coin: "TRS",
        poolIndex: 'hdotusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: TRSICON,
        next_coin: SHIBICON,
        coin_name: "TRS/SHIB",
        coin: "TRS",
        poolIndex: 'trsshib',
        coin_price: 'TRSPRE',
        key_word: "flat"
    },
    {
        pre_coin: TRSICON,
        next_coin: ETHICON,
        coin_name: "TRS/ETH",
        coin: "TRS",
        poolIndex: 'trseth',
        coin_price: 'TRSPRE',
        key_word: "flat"
    },
    {
        pre_coin: DOGEICON,
        next_coin: USDTICON,
        coin_name: "DOGE/USDT",
        coin: "TRS",
        poolIndex: 'dogeusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: SHIBICON,
        next_coin: USDTICON,
        coin_name: "SHIB/USDT",
        coin: "TRS",
        poolIndex: 'shibusdt',
        coin_price: 'USDTNEXT',
        key_word: "ideas"
    },
    {
        pre_coin: HLTCICON,
        next_coin: USDTICON,
        coin_name: "HLTC/USDT",
        coin: "TRS",
        poolIndex: 'hltcusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: UNIICON,
        next_coin: USDTICON,
        coin_name: "UNI/USDT",
        coin: "TRS",
        poolIndex: 'uniusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: XRPICON,
        next_coin: USDTICON,
        coin_name: "XRP/USDT",
        coin: "TRS",
        poolIndex: 'xrpusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: HBCHICON,
        next_coin: USDTICON,
        coin_name: "HBCH/USDT",
        coin: "TRS",
        poolIndex: 'hbchusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: ADAICON,
        next_coin: USDTICON,
        coin_name: "ADA/USDT",
        coin: "TRS",
        poolIndex: 'adausdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: EOSICON,
        next_coin: USDTICON,
        coin_name: "EOS/USDT",
        coin: "TRS",
        poolIndex: 'eosusdt',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: ETHICON,
        next_coin: HUSDICON,
        coin_name: "ETH/HUSD",
        coin: "TRS",
        poolIndex: 'ethhusd',
        coin_price: 'ETHPRE',
        key_word: "main"
    },
    {
        pre_coin: LINKICON,
        next_coin: USDTICON,
        coin_name: "LINK/USDT",
        coin: "TRS",
        poolIndex: 'linkusdt',
        coin_price: 'USDTNEXT',
        key_word: "ideas"
    },
    {
        pre_coin: AAVEICON,
        next_coin: USDTICON,
        coin_name: "AAVE/USDT",
        coin: "TRS",
        poolIndex: 'aaveusdt',
        coin_price: 'USDTNEXT',
        key_word: "ideas"
    },
    {
        pre_coin: TRSICON,
        next_coin: HUSDICON,
        coin_name: "TRS/HUSD",
        coin: "TRS",
        poolIndex: 'trshusd',
        coin_price: 'TRSPRE',
        key_word: "flat"
    },
]