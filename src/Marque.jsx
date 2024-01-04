import Marquee from "react-fast-marquee";

import btc from './assets/coins/bitcoin-btc-logo.png';
import bnb from './assets/coins/bnb.png';
import cardano from './assets/coins/cardano.png';
import chainlink from './assets/coins/chainlink.png';
import dodge from './assets/coins/dogecoin-doge-logo.svg';
import eth from './assets/coins/ethereum-eth-logo.svg';
import lite from './assets/coins/litecoin.png';
import polygon from './assets/coins/polygon.png';
import solana from './assets/coins/solana.png';
import tether from './assets/coins/tether.png';
import toncoin from './assets/coins/toncoin.png';
import tron from './assets/coins/tron.png';
import usdc from './assets/coins/usd-coin.png';
import wbtc from './assets/coins/wrapped-bitcoin.png';
import xrp from './assets/coins/xrp.png';
import MarqueCard from "./MarqueCard";

const Marque = () => {

    const coins = [
        { name: 'BTC', img: btc, price: '$43.7' },
        { name: 'BNB', img: bnb, price: '$272.25' },
        { name: 'ADA', img: cardano, price: '$0.5996' },
        { name: 'CHAIN', img: chainlink, price: '$14.56' },
        { name: 'DODGE', img: dodge, price: '$0.09158' },
        { name: 'ETH', img: eth, price: '$0.09158' },
        { name: 'TRX', img: tron, price: '$0.104' },
        { name: 'USDC', img: usdc, price: '$1.00' },
        { name: 'XRP', img: xrp, price: '$0.6151' },
        { name: 'SOL', img: solana, price: '$86.60' },
        { name: 'LITE', img: lite, price: '$66.55' },
        { name: 'POLY', img: polygon, price: '$0.8759' },
        { name: 'TETH', img: tether, price: '$1' },
        { name: 'TON', img: toncoin, price: '$2.19' },
        { name: 'WBTC', img: wbtc, price: '$42,801.27' }
    ];

    const list = [];

    coins.forEach((product) => {
        list.push(<div className="flex gap-[5px] p-2 items-center justify-center">
        <img src={product.img} className="h-5" alt="" />
        <h1>{product.name}</h1>
        <p>{product.price}</p>
    </div>)
      })

    return (
        <div>
            <Marquee>
            {list}   
            </Marquee>
        </div>
    );
}

export default Marque;
