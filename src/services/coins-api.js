export async function getAllCoins() {
  const res = await fetch('api.coincap.io/v2/assets')
  return res.json()
}
