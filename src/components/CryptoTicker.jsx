import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import useCryptoData from '../hooks/useCryptoData';

const CryptoTicker = () => {
  const { cryptoData, loading, error } = useCryptoData();

  if (loading) {
    return (
      <div className="h-14 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-400 font-medium">Loading market data...</span>
            </div>
            <div className="flex space-x-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-slate-700 rounded animate-pulse"></div>
                  <div className="w-12 h-3 bg-slate-700 rounded animate-pulse"></div>
                  <div className="w-8 h-3 bg-slate-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-14 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-red-400" />
            <span className="text-xs text-slate-400">Market data unavailable</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-14 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Live Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400 font-medium">LIVE MARKETS</span>
          </div>

          {/* Crypto Pairs */}
          <div className="flex space-x-8">
            {cryptoData.map((crypto, index) => (
              <motion.div
                key={crypto.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-3 group cursor-pointer hover:bg-slate-800/50 px-2 py-1 rounded transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-sm font-semibold text-white">{crypto.symbol.toUpperCase()}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white">
                    ${crypto.current_price.toLocaleString()}
                  </div>
                  <div className={`flex items-center text-xs font-medium ${
                    crypto.price_change_percentage_24h > 0 
                      ? 'text-emerald-400' 
                      : 'text-red-400'
                  }`}>
                    {crypto.price_change_percentage_24h > 0 ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Market Status */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400">24H VOL:</span>
            <span className="text-xs text-white font-medium">$2.4B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker; 