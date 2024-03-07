function TrendingCoins(){
    fetch('https://api.coingecko.com/api/v3/search/trending')
  .then(response => response.json())
  .then(data => {
     console.log(data)
    // console.log(data.coins[0].item.symbol , data.coins[1].item.symbol , data.coins[2].item.symbol)
    // console.log(data.coins[0].item.data.price_change_percentage_24h.aed)
    for(let i=0;i<3;i++){
      console.log(data.coins[i].item.symbol, data.coins[i].item.data.price_change_percentage_24h.aed )
    }
  })
  .catch(error => console.error('Error:', error));
  
return( 
    <h1>hello this is trendingcoins component</h1>
);


}
export default TrendingCoins;