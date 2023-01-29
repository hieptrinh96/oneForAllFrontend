import styles from './MyWallet.module.css'
const MyWallet = ({coins}) => {
  return (
    <>
    <div className={styles.headerContainer}>
      <h2>Rank</h2>
      <h2>Symbol</h2>
      <h2>Name</h2>
      <h2>Price</h2>
      <h2>Supply</h2>
      <h2>Max Supply</h2>
    </div>
    <div>
      {coins.map(coin => 
        <div key={coin.id}>
          <div className={styles.coinContainer}>
          <p>{coin.rank}</p>
          <p>{coin.symbol}</p>
          <p>{coin.name}</p>
          <p>{coin.priceUsd}</p>
          <p>{coin.supply}</p>
          <p>{coin.maxSupply}</p>
          </div>
        </div>  
      )}
    </div>
    </>
  );
}
 
export default MyWallet;