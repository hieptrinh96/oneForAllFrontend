import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCoinDetails } from "../../services/coins-api";
import { Link } from "react-router-dom";
const CoinDetails = () => {
  const [coinDetail, setCoinDetail] = useState({})
  const location = useLocation()
  useEffect(() => {
    const fetchCoinsDetail = async () => {
      const coinData = await getCoinDetails(location.state.starship.url)
    }
  })
  return (
    <div>
      <h2>Coin Details</h2>
    </div>
  );
}

export default CoinDetails;