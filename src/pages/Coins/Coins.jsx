import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCoins } from "../../services/coins-api";
import styles from './Coins.module.css'
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
        <Link
          to='/coins/coinsDetail'
          state={{coin : coin}}
          key={coin.id}>
            <div>{coin.name}</div>
        </Link>
        )}
    </div>
    </div>
  );
}
 
export default Coins;