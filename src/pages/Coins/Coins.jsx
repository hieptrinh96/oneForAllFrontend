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
    <>
    <h2>List of Coins</h2>
    <div className={styles.headerContainer}>
      <h2>Rank</h2>
      <h2>Symbol</h2>
      <h2>Name</h2>
      <h2>Price</h2>
      <h2>Supply</h2>
      <h2>Max Supply</h2>
    </div>
    <div className={styles["all-coins"]}>
      {coins.map(coin =>
        <Link 
          to='/coins/coinsDetail'  
          key={coin.id}
          state={coin}>
            <p>{coin.name}</p>
            <p>{coin.rank}</p>
            <p>{coin.symbol}</p>
            <p>{coin.supply}</p>
            <p>{coin.maxSupply}</p>
        </Link>
        )}
    </div>
    </>
  );
}
 
export default Coins;