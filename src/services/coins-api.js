const baseURL = 'https://api.coincap.io/v2'
export async function getAllCoins() {
  const res = await fetch(`${baseURL}/assets`)
  return res.json()
}

export async function getCoinDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}