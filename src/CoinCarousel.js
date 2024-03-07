// CoinCarousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CoinCarousel.css'; // Import the CSS file for styling

const CoinCarousel = () => {
  const [coinArray, setCoinArray] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        const data = await response.json();
        setCoinArray(data.coins);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoinData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className="w-3/4 m-auto bg-red">
        <div className="mt-20 bg-red">
      <Slider {...settings}>
        {coinArray.map((coin, index) => (
          <div key={index} className="bg-gray h-[450 px] text-black rounded-xl">
            <div className="h-5 bg-blue-500 flex justify-center items-center rounded-t-xl">
            <img src={coin.item.thumb} alt="" className="h-100 w-100 rounded-full" />
            
         
            {/* Other card content can be added here */}
            </div>
          </div>
            //  <h3>{coin.item.name}</h3>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default CoinCarousel;
