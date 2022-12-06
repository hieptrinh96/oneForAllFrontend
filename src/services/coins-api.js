const baseURL = 'https://api.coincap.io/v2'
export async function getAllCoins() {
  const res = await fetch(`${baseURL}/assets`)
  return res.json()
}
