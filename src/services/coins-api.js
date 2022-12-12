const baseURL = 'https://api.coincap.io/v2'
export async function getAllCoins() {
  const res = await fetch(`${baseURL}/assets`)
  return res.json()
}

export async function getCoinDetails(coinId) {
  const res = await fetch(`${baseURL}/assets/${coinId}`)
  return res.json()
}

export async function getCoinPrice(coinId) {
  const res = await fetch(`${baseURL}/assets/${coinId}/history?interval=d1`)
  return res.json()
}