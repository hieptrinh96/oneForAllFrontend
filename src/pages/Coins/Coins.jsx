import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCoins } from "../../services/coins-api";
import CoinDetails from "../CoinDetails/CoinDetails";
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
    <div className={styles["coins-container"]}>
    <h2>List of Coins</h2>
    <div className={styles["all-coins"]}>
      {coins.map(coin =>
        <Link 
          to='/coins/coinsDetail'  
          key={coin.id}
          state={coin}
        ><p>{coin.name}</p></Link>
        )}
    </div>
    </div>
  );
}
 
export default Coins;