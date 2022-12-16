import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as coinService from "../../services/coins-api";
import { Link } from "react-router-dom";
const CoinDetails = () => {
  const [coinDetail, setCoinDetail] = useState([])
  const location = useLocation()
  useEffect(() => {
    const fetchCoinsDetail = async () => {
      const coinData = await coinService.getCoinDetails(location.state.coin.id)
      setCoinDetail(coinData.data)
    }
    fetchCoinsDetail()
  }, [location.state.coin.id])

  const handleAddCoin = async () => {
    const coinData = await coinService.addCoinToWallet(coinDetail)
  }

  return (
    <div>
      <h2>Coin Details</h2>
      <div>
        <p>Rank: {coinDetail.rank}</p>
        <p>Symbol: {coinDetail.symbol}</p>
        <p>Price: ${coinDetail.priceUsd}</p>
        <button onClick={() => handleAddCoin()}>Add to wallet</button>
      </div>
      
    </div>
  );
}

export default CoinDetails;