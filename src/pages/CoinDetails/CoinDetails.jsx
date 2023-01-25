import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
const CoinDetails = (props, {user}) => {
  const { state } = useLocation()
  
  return (
    <div>
      <div>
        <p>Rank: {state.rank}</p>
        <p>Symbol: {state.symbol}</p>
        <p>Price: ${state.priceUsd}</p>
        <button onClick={() => props.handleAddCoin(state)}>Save Coin</button>
      </div>
    </div>
  );
}

export default CoinDetails;