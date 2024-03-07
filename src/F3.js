// F3.jsx
import React from 'react';

const F3 = () => {
  const sparklineUrl = 'https://www.coingecko.com/coins/33511/sparkline.svg'; // Replace with actual sparkline URL

  return (
    <div>
      <h2>My Sparkline Chart (F3)</h2>
      <img src={sparklineUrl} alt="Sparkline Chart" />
    </div>
  );
};

export default F3;
