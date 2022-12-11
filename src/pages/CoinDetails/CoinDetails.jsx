import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCoinDetails, getCoinPrice } from "../../services/coins-api";
import { Link } from "react-router-dom";
const CoinDetails = () => {
  const [coinDetail, setCoinDetail] = useState([])
  const [price, setPrice] = useState({})
  const location = useLocation()
  useEffect(() => {
    const fetchCoinsDetail = async () => {
      const coinData = await getCoinDetails(location.state.coin.id)
      const priceData = await getCoinPrice(location.state.coin.id)
      console.log('price data',priceData)
      setPrice(priceData.data)
      setCoinDetail(coinData.data)
    }
    fetchCoinsDetail()
  }, [location.state.coin.id])
  return (
    <div>
      <h2>Coin Details</h2>
      <div>
        <p>Rank: {coinDetail.rank}</p>
        <p>Symbol: {coinDetail.symbol}</p>
        <p>Price: ${console.log(price)}</p>
        <p></p>
        <p>{}</p>
      </div>
      
    </div>
  );
}

export default CoinDetails;