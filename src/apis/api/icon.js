import USDTICON from '../../assets/images/coin/USDT.png'
import ETHICON from '../../assets/images/coin/ETH.png'
import HTICON from '../../assets/images/coin/HT.png'
import HUSDICON from '../../assets/images/coin/HUSD.png'
import HBTCICON from '../../assets/images/coin/HBTC.png'
import TTQICON from '../../assets/images/coin/TTQ.png'



export default [
    {
        pre_coin: USDTICON,
        next_coin: HBTCICON,
        coin_name: "USDT/HBTC",
        coin: "TTQ",
        poolIndex: 'two',
        coin_price: 'USDTPRE',
        key_word: 'main'
    },

    {
        pre_coin: ETHICON,
        next_coin: USDTICON,
        coin_name: "ETH/USDT",
        coin: "TTQ",
        poolIndex: 'three',
        coin_price: 'USDTNEXT',
        key_word: 'main'
    },
    {
        pre_coin: TTQICON,
        next_coin: USDTICON,
        coin_name: "TTQ/USDT",
        coin: "TTQ",
        poolIndex: 'six',
        coin_price: 'USDTNEXT',
        key_word: 'ttq'
    },
    {
        pre_coin: TTQICON,
        next_coin: HUSDICON,
        coin_name: "TTQ/HUSD",
        coin: "TTQ",
        poolIndex: 'ttqhusd',
        coin_price: 'TTQPRE',
        key_word: "ttq"
    },
    {
        pre_coin: TTQICON,
        next_coin: HTICON,
        coin_name: "TTQ/HT",
        coin: "TTQ",
        poolIndex: 'seven',
        coin_price: 'HTNEXT',
        key_word: 'ttq'
    },
    {
        pre_coin: HTICON,
        next_coin: USDTICON,
        coin_name: "HT/USDT",
        coin: "TTQ",
        poolIndex: 'eleven',
        coin_price: 'USDTNEXT',
        key_word: "main"
    },
    {
        pre_coin: TTQICON,
        next_coin: TTQICON,
        coin_name: "TTQ",
        coin: "TTQ",
        poolIndex: 'ttqttq',
        coin_price: 'TTQONE',
        key_word: "ttq"
    },
]