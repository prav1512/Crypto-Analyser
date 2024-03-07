// CryptoPrice.js
import React, { useState, useEffect } from 'react';
import './CryptoPrice.css'; // Import the CSS file

const CryptoPrice = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        );
        const data = await response.json();
        setCryptoData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
        alt="Bitcoin Logo"
        className="crypto-logo"
      />
      {cryptoData ? (
        <>
          <h1>Bitcoin</h1>
          <p className="crypto-details">Price in INR: {cryptoData.inr}</p>
          <p className="crypto-details">Price in USD: {cryptoData.usd}</p>
          <p className="crypto-details">
            24-hour change (INR): {cryptoData.inr_24h_change}%
          </p>
          <p className="crypto-details">
            24-hour change (USD): {cryptoData.usd_24h_change}%
          </p>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CryptoPrice;
