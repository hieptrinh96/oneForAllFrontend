const MyCoins = ({coins}) => {

  return (
    <>
    <p>My Coins</p>
    <div>
      {coins.map(coin => 
        <div key={coin.id}>
          {console.log('hello', coin._id)}
          <p>{coin.rank}</p>
          <p>{coin.name}</p>
        </div>  
      )}
    </div>
    </>
  );
}
 
export default MyCoins;