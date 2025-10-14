import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ExternalLink, Wallet, ArrowRight } from 'lucide-react'

const SwapWidget = () => {
  const { t } = useTranslation()
  const [isSwapping, setIsSwapping] = useState(false)
  
  const TOKEN_ADDRESS = '0xaeded60cbadd688279908df18194fd31387baeb4'
  
  // URL do PancakeSwap com o token GEG
  const PANCAKESWAP_URL = `https://pancakeswap.finance/swap?outputCurrency=${TOKEN_ADDRESS}&chainId=56`
  
  const handleSwap = () => {
    setIsSwapping(true)
    // Abre PancakeSwap em nova aba
    window.open(PANCAKESWAP_URL, '_blank')
    setTimeout(() => setIsSwapping(false), 1000)
  }

  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-yellow-500/30 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          {t('buyGEG')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
          <p className="text-slate-400 text-sm mb-2">{t('swapDescription')}</p>
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            <Wallet size={16} />
            <span>{t('connectWallet')}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">{t('network')}:</span>
            <span className="text-white font-medium">BNB Smart Chain (BSC)</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">{t('platform')}:</span>
            <span className="text-white font-medium">PancakeSwap</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">{t('currentPrice')}:</span>
            <span className="text-yellow-400 font-bold">$0.0024</span>
          </div>
        </div>

        <Button
          onClick={handleSwap}
          disabled={isSwapping}
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold text-lg py-6"
        >
          {isSwapping ? (
            <>{t('opening')}...</>
          ) : (
            <>
              <Wallet className="mr-2" size={20} />
              {t('buyOnPancakeSwap')}
              <ExternalLink className="ml-2" size={16} />
            </>
          )}
        </Button>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
          <p className="text-blue-400 text-xs text-center">
            <ArrowRight className="inline mr-1" size={14} />
            {t('swapInfo')}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default SwapWidget
