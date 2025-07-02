import React, { useState } from 'react';
import trademaxLogo from '../assets/trademax-logo.png';

const TOP_CRYPTOS = [
  { symbol: 'BTCUSDT', label: 'BTC' },
  { symbol: 'ETHUSDT', label: 'ETH' },
  { symbol: 'BNBUSDT', label: 'BNB' },
  { symbol: 'SOLUSDT', label: 'SOL' },
  { symbol: 'XRPUSDT', label: 'XRP' },
];

const TradingView = () => {
  const [selected, setSelected] = useState('BTCUSDT');

  // Map symbol to TradingView widget symbol
  const tvSymbol = {
    BTCUSDT: 'BINANCE:BTCUSDT',
    ETHUSDT: 'BINANCE:ETHUSDT',
    BNBUSDT: 'BINANCE:BNBUSDT',
    SOLUSDT: 'BINANCE:SOLUSDT',
    XRPUSDT: 'BINANCE:XRPUSDT',
  }[selected];

  return (
    <section className="pt-20 pb-20 bg-black/40 w-screen relative left-1/2 right-1/2 -mx-[50vw] ml-[-50vw] mr-[-50vw]">
      {/* Crypto Selector */}
      <div className="flex justify-center gap-4 mb-8 w-full">
        {TOP_CRYPTOS.map((crypto) => (
          <button
            key={crypto.symbol}
            className={`px-4 py-2 rounded-full font-semibold shadow transition-all border border-blue-500/30 backdrop-blur-md text-white/90 ${selected === crypto.symbol ? 'bg-blue-500/80' : 'bg-slate-700/80 hover:bg-blue-600'}`}
            onClick={() => setSelected(crypto.symbol)}
          >
            {crypto.label}
          </button>
        ))}
      </div>
      {/* TradingView Widget */}
      <div className="w-screen h-[500px] bg-black/40 flex items-center justify-center border-t border-b border-blue-500/20 overflow-hidden">
        <iframe
          title={`TradingView ${selected} Chart`}
          src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${selected}&symbol=${tvSymbol}&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hidevolume=0&hidelegend=0&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en#`}
          width="100%"
          height="500"
          allowtransparency="true"
          frameBorder="0"
          allowFullScreen
          className="border-0"
          style={{ minWidth: 0 }}
        />
      </div>
    </section>
  );
};

export default TradingView; 