import { useState, useEffect } from "react";
import { getAllCoins } from "../../services/coins-api";

const Coins = () => {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const fetchCoinsData = async () => {
      const coins = await getAllCoins()
      setCoins(coins.data)
    }
    fetchCoinsData()
  }, [])
  return (
    <div>
    <h2>List of Coins</h2>
    <div className="all-coins">
      {coins.map(coin =>
        <p>{coin.id}</p>
        )}
    </div>
    </div>
  );
}
 
export default Coins;