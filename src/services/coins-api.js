import * as tokenService from './tokenService'
const baseURL = 'https://api.coincap.io/v2'
export async function getAllCoins() {
  const res = await fetch(`${baseURL}/assets`)
  return res.json()
}

export async function getCoinDetails(coinId) {
  const res = await fetch(`${baseURL}/assets/${coinId}`)
  return res.json()
}

export async function addCoinToWallet(coinDetails) {
  try {
    const res = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coinDetails)
    })
    return res.json()
  } catch(err) {
    console.log(err)
  }
}
