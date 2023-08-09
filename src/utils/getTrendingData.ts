export async function getTrendingData(
  connectedWallet: string,
  chainId: number
) {
  const res = await fetch(
    `/api/trending?connectedWallet=${connectedWallet}&chain=${chainId}`
  )

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return data
}