import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
const CoinDetails = (props, {user}) => {
  const { state } = useLocation()
  state.supply = parseFloat(state.supply).toLocaleString()
  // state.maxSupply = parseFloat(state.maxSupply)
  state.priceUsd = parseFloat(state.priceUsd).toFixed(4)
  console.log(state)
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