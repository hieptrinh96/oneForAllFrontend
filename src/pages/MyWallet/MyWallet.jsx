const MyWallet = ({coins}) => {

  return (
    <>
    <p>My Coins</p>
    <div>
      {coins.map(coin => 
        <div key={coin.id}>
          <div>
          <p>{coin.rank}</p>
          <p>{coin.name}</p>
          </div>
        </div>  
      )}
    </div>
    </>
  );
}
 
export default MyWallet;