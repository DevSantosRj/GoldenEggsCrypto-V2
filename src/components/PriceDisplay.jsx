import { TrendingUp, TrendingDown, Minus, RefreshCw } from 'lucide-react'
import useTokenPrice from '../hooks/useTokenPrice'

const PriceDisplay = ({ showChange = false, className = '' }) => {
  const { price, change24h, loading, error, lastUpdate } = useTokenPrice()

  const formatPrice = (value) => {
    if (!value || value === 0) return '$0.0024'
    
    // Se o preço for muito pequeno, usar notação científica
    if (value < 0.000001) {
      return `$${value.toExponential(4)}`
    }
    
    // Caso contrário, formatar com casas decimais apropriadas
    if (value < 0.01) {
      return `$${value.toFixed(6)}`
    } else if (value < 1) {
      return `$${value.toFixed(4)}`
    } else {
      return `$${value.toFixed(2)}`
    }
  }

  const formatChange = (change) => {
    if (!change || change === 0) return '0.00'
    const formatted = Math.abs(change).toFixed(2)
    return change > 0 ? `+${formatted}` : `-${formatted}`
  }

  const getChangeColor = (change) => {
    if (!change || change === 0) return 'text-slate-400'
    return change > 0 ? 'text-green-400' : 'text-red-400'
  }

  const getChangeIcon = (change) => {
    if (!change || change === 0) return <Minus className="w-3 h-3" />
    return change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />
  }

  if (error) {
    console.error('Price display error:', error)
    // Em caso de erro, mostrar valor padrão
    return (
      <div className={className}>
        <div className="text-4xl font-bold text-yellow-400">$0.0024</div>
        {showChange && (
          <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" />
            Atualizando...
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <div className="text-4xl font-bold text-yellow-400">
          {loading && !price ? (
            <span className="animate-pulse">$0.0024</span>
          ) : (
            formatPrice(price)
          )}
        </div>
        {loading && (
          <RefreshCw className="w-4 h-4 text-yellow-400 animate-spin" />
        )}
      </div>
      
      {showChange && change24h !== 0 && (
        <div className={`text-sm mt-1 flex items-center gap-1 ${getChangeColor(change24h)}`}>
          {getChangeIcon(change24h)}
          <span>{formatChange(change24h)}% (24h)</span>
        </div>
      )}
      
      {lastUpdate && (
        <div className="text-xs text-slate-500 mt-1">
          Atualizado: {lastUpdate.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      )}
    </div>
  )
}

export default PriceDisplay

