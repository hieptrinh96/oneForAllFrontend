import { useState, useEffect } from "react";
import { getAllCoins } from "../../services/coins-api";

const Coins = () => {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const fetchCoinsData = async () => {
      const coinsData = await getAllCoins()
      setCoins(coinsData.data)
    }
    fetchCoinsData()
  }, [])
  return (
    <div>
    <h2>List of Coins</h2>
    <div className="all-coins">
      {coins.map(coin =>
        <div key={coin.id}>
          <p>{coin.name}</p>
          <p>{coin.priceUsd}</p>
        </div>
        )}
    </div>
    </div>
  );
}
 
export default Coins;