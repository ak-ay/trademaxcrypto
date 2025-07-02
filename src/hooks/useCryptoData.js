import { useState, useEffect } from 'react';
import axios from 'axios';

const useCryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,solana,ripple&order=market_cap_desc&per_page=5&page=1&sparkline=false'
      );

      setCryptoData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch crypto data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    
    // Update every 30 seconds
    const interval = setInterval(fetchCryptoData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return { cryptoData, loading, error };
};

export default useCryptoData; 