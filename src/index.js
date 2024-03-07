import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js'; // Import your Redux store
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TrendingCoins from './TrendingCoins.js';
import YouMayAlsoLike from './YouMayAlsoLike.js';
import TrendingCoinBotom from './TrendingCoinBotom.js';
import C1 from './C1.jsx';
import F1 from './F1.js';
import F3 from './F3.js';
import TradingViewWidget from './TradingViewWidget.jsx';
import CryptoPrice from './cryptoPrice.js';
import CoinCarousel from './CoinCarousel.js';
import About from "./About.js";
import Team from "./Team.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
   <>
    {/* <App />
    <h1>Hello</h1> */}
    {/* <YouMayAlsoLike />
    <TrendingCoins /> */}
    {/* <TrendingCoinBotom /> */}
    <CryptoPrice />
    <TradingViewWidget />
    <About />
    <Team />
    <h4>   You May also like</h4>
    <CoinCarousel />
    <h4>   Trending Coins</h4>
    <CoinCarousel />
    
    <img src="https://assets.coingecko.com/coins/images/16548/small/opulous.PNG?1696516110" alt="Opulous Coin Logo" />
    {/* <F3 />
    <C1 /> */}
   
   {/* <F1 /> */}
   </>
   </Provider>
  </React.StrictMode>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
