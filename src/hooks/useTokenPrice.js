import { useState, useEffect } from 'react'

// TOKEN DE TESTE (MIKA) - Para verificar funcionamento do rastreamento em tempo real
// Quando o Golden Eggs for lançado, trocar para: 0xaeded60cbadd688279908df18194fd31387baeb4
const TOKEN_ADDRESS = '0x2b3439fc69cae6fdce8276ac52fd0f38ee146072'
const API_URL = `https://api.dexscreener.com/latest/dex/tokens/bsc/${TOKEN_ADDRESS}`
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

