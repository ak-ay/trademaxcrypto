import React, { useEffect, useState } from "react";
import trademaxLogo from "../assets/trademax-logo.png";
import btcLogo from "../assets/btc.png";
import ethLogo from "../assets/eth.png";
import bnbLogo from "../assets/bnb.png";
import solLogo from "../assets/solana.png";
import xrpLogo from "../assets/xrp.png";
import { motion } from "framer-motion";

const CRYPTO_LOGOS = [
  { src: btcLogo, alt: "BTC" },
  { src: ethLogo, alt: "ETH" },
  { src: bnbLogo, alt: "BNB" },
  { src: solLogo, alt: "SOL" },
  { src: xrpLogo, alt: "XRP" },
];

const Loader = () => {
  const radius = 80;
  const logoSize = 40;
  const trademaxSize = 64;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl top-1/4 left-1/4"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl bottom-1/4 right-1/4"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Large Blurred Logo in Background */}
      <motion.img
        src={trademaxLogo}
        alt="Trademax Logo Background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-10 blur-2xl select-none pointer-events-none"
        animate={{
          scale: [1, 1.03, 1],
          rotate: [0, 360]
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        draggable={false}
        aria-hidden="true"
      />
      {/* Center Trademax Logo Only */}
      <div className="absolute left-1/2 top-1/2 flex items-center justify-center z-20" style={{ transform: 'translate(-50%, -50%)', width: 220, height: 220 }}>
        <motion.img
          src={trademaxLogo}
          alt="Trademax Logo"
          className="object-contain drop-shadow-2xl z-30"
          style={{ width: trademaxSize, height: trademaxSize }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Loader; 