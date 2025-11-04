import { useState, useEffect } from 'react'

// TOKEN OFICIAL GOLDEN EGGS ($GEG)
// Endereço do contrato oficial na BSC
// Preço de lançamento: $0.0024
const TOKEN_ADDRESS = '0xafc7bf77D07779052046bf18c37D68b2a075909b'
const API_URL = `https://api.dexscreener.com/latest/dex/tokens/${TOKEN_ADDRESS}`
const UPDATE_INTERVAL = 30000 // 30 segundos

export const useTokenPrice = () => {
  const [priceData, setPriceData] = useState({
    usd: 0.0024, // Valor padrão fallback
    native: null,
    change24h: 0,
    volume24h: 0,
    liquidity: 0,
    fdv: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(null)

  useEffect(() => {
    let isMounted = true
    let intervalId = null

    const fetchPrice = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            'Accept': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (!isMounted) return

        if (data.pairs && data.pairs.length > 0) {
          // Ordenar pares por liquidez (maior primeiro) e pegar o principal
          const sortedPairs = data.pairs.sort((a, b) => {
            const liquidityA = a.liquidity?.usd || 0
            const liquidityB = b.liquidity?.usd || 0
            return liquidityB - liquidityA
          })

          const mainPair = sortedPairs[0]

          setPriceData({
            usd: parseFloat(mainPair.priceUsd) || 0.0024,
            native: parseFloat(mainPair.priceNative) || null,
            change24h: mainPair.priceChange?.h24 || 0,
            volume24h: mainPair.volume?.h24 || 0,
            liquidity: mainPair.liquidity?.usd || 0,
            fdv: mainPair.fdv || 0,
            pairAddress: mainPair.pairAddress,
            dexId: mainPair.dexId
          })
          setError(null)
        } else {
          // Se não houver pares, manter valor padrão
          console.warn('No pairs found for token, using fallback price')
        }

        setLastUpdate(new Date())
        setLoading(false)
      } catch (err) {
        console.error('Error fetching token price:', err)
        if (isMounted) {
          setError(err.message)
          setLoading(false)
          // Manter o último valor conhecido ou fallback
        }
      }
    }

    // Buscar imediatamente
    fetchPrice()

    // Configurar atualização automática
    intervalId = setInterval(fetchPrice, UPDATE_INTERVAL)

    // Cleanup
    return () => {
      isMounted = false
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [])

  return {
    price: priceData.usd,
    priceNative: priceData.native,
    change24h: priceData.change24h,
    volume24h: priceData.volume24h,
    liquidity: priceData.liquidity,
    fdv: priceData.fdv,
    loading,
    error,
    lastUpdate,
    fullData: priceData
  }
}

export default useTokenPrice

