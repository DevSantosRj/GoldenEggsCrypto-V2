import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Coins, TrendingUp, Shield, Users, Rocket, Target, CheckCircle2, Twitter, Send, Instagram, Menu, X, ChevronDown, ExternalLink, Copy, Check, DollarSign, PieChart, Award } from 'lucide-react'
import LanguageSelector from './components/LanguageSelector'
import SwapWidget from './components/SwapWidget'
import tulioImg from './assets/tulio-rodrigues.webp'
import marcosImg from './assets/marcos-santos.webp'
import luizImg from './assets/luiz-oliveira.webp'
import logoImg from './assets/golden-eggs-logo-transparent.png'
import logoHeaderImg from './assets/golden-eggs-logo-header-transparent.png'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [copied, setCopied] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
      setActiveSection(sectionId)
    }
  }

  const copyContract = () => {
    const contractAddress = '0xaeded60cbadd688279908df18194fd31387baeb4'
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoHeaderImg} alt="Golden Eggs Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                GOLDEN EGGS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection('sobre')} className="hover:text-yellow-400 transition-colors">{t('about')}</button>
              <button onClick={() => scrollToSection('tokenomics')} className="hover:text-yellow-400 transition-colors">{t('tokenomics')}</button>
              <button onClick={() => scrollToSection('beneficios')} className="hover:text-yellow-400 transition-colors">{t('benefits')}</button>
              <button onClick={() => scrollToSection('roadmap')} className="hover:text-yellow-400 transition-colors">{t('roadmap')}</button>
              <button onClick={() => scrollToSection('equipe')} className="hover:text-yellow-400 transition-colors">{t('team')}</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-yellow-400 transition-colors">{t('contact')}</button>
              <LanguageSelector />
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold"
                onClick={() => window.open('https://goldeneggsrwa.com', '_blank')}
              >
                {t('visitWebsite')}
              </Button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">{t('about')}</button>
              <button onClick={() => scrollToSection('tokenomics')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">{t('tokenomics')}</button>
              <button onClick={() => scrollToSection('beneficios')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">{t('benefits')}</button>
              <button onClick={() => scrollToSection('roadmap')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">{t('roadmap')}</button>
              <button onClick={() => scrollToSection('equipe')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">{t('team')}</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">{t('contact')}</button>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold"
                onClick={() => window.open('https://goldeneggsrwa.com', '_blank')}
              >
                {t('visitWebsite')}
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-2xl shadow-yellow-500/50">
              <img src={logoImg} alt="Golden Eggs Logo" className="w-full h-full rounded-full" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-yellow-400 font-semibold">($GEG)</p>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto px-4">
            <span className="text-yellow-400 font-semibold">{t('heroSubtitle')}</span> {t('heroSubtitle2')}
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-12 text-slate-400 max-w-2xl mx-auto px-4">
            {t('heroDescription')}
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 px-4">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">200M</div>
                <div className="text-slate-400">{t('totalSupply')}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">$0.0024</div>
                <div className="text-slate-400">{t('initialPrice')}</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">RWA</div>
                <div className="text-slate-400">{t('realWorldAsset')}</div>
              </CardContent>
            </Card>
          </div>

          {/* Swap Widget */}
          <div className="mt-12 px-4">
            <SwapWidget />
          </div>
          
          <div className="flex justify-center mt-6 px-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 text-lg px-8 py-6"
              onClick={() => scrollToSection('sobre')}
            >
              {t('knowProject')} <ChevronDown className="ml-2" size={20} />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-12 px-4">
            <Badge variant="outline" className="border-green-500 text-green-400 px-4 py-2 text-sm">
              <CheckCircle2 className="mr-2" size={16} /> {t('audited')}
            </Badge>
            <Badge variant="outline" className="border-blue-500 text-blue-400 px-4 py-2 text-sm">
              <Shield className="mr-2" size={16} /> {t('realBacking')}
            </Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2 text-sm">
              <TrendingUp className="mr-2" size={16} /> {t('transparent')}
            </Badge>
          </div>

          {/* Contract Address */}
          <div className="mt-8 flex justify-center px-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 max-w-2xl w-full">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-slate-400 text-sm mb-1">{t('contractAddress')}</p>
                  <p className="text-yellow-400 font-mono text-xs sm:text-sm break-all">
                    0xaeded60cbadd688279908df18194fd31387baeb4
                  </p>
                </div>
                <Button
                  onClick={copyContract}
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold whitespace-nowrap"
                  size="sm"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={16} />
                      {t('copied')}
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={16} />
                      {t('copyContract')}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-12 sm:py-16 md:py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent px-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
            {t('aboutDescription')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-yellow-400">{t('institutionalSecurity')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  {t('institutionalSecurityDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-yellow-400">{t('corporateGovernance')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  {t('corporateGovernanceDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-yellow-400">{t('consistentResults')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  {t('consistentResultsDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Profit Sharing Section */}
      <section id="profit-sharing" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {t('profitSharingTitle')}
            </h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              {t('profitSharingDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            <Card className="bg-gradient-to-br from-green-900/30 to-slate-900 border-green-500/30 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="text-green-400" size={24} />
                </div>
                <CardTitle className="text-green-400 text-xl">{t('profitShare')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-400 mb-2">15%</div>
                <p className="text-slate-400 text-sm">
                  Do lucro líquido distribuído aos holders
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/30 to-slate-900 border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-blue-400" size={24} />
                </div>
                <CardTitle className="text-blue-400 text-xl">{t('transparency')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Relatórios financeiros transparentes e auditados regularmente
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-purple-400" size={24} />
                </div>
                <CardTitle className="text-purple-400 text-xl">{t('community')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Alinhamento de interesses entre negócio e comunidade cripto
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/30 to-slate-900 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-yellow-400 text-xl">{t('sustainableModel')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Crescimento sustentável com valorização de longo prazo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {t('tokenomicsTitle')}
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            {t('tokenomicsSubtitle')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto px-4">
            {/* Distribuição do Token */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400">{t('tokenDistribution')}</CardTitle>
                <CardDescription className="text-slate-400">{t('totalSupplyLabel')}: 200.000.000 $GEG</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">{t('farmExpansion')}</span>
                    <span className="text-yellow-400 font-bold">75%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">{t('liquidity')}</span>
                    <span className="text-yellow-400 font-bold">15%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">{t('marketing')}</span>
                    <span className="text-yellow-400 font-bold">5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">{t('maintenance')}</span>
                    <span className="text-yellow-400 font-bold">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Taxas de Transação */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400">{t('transactionFees')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">{t('buyFee')}</h4>
                  <div className="space-y-2 pl-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{t('burn')}</span>
                      <span className="text-slate-400">1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{t('liquidity')}</span>
                      <span className="text-slate-400">1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{t('marketing')}</span>
                      <span className="text-slate-400">3%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-3">{t('sellFee')}</h4>
                  <div className="space-y-2 pl-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{t('burn')}</span>
                      <span className="text-slate-400">1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{t('marketing')}</span>
                      <span className="text-slate-400">4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{t('usdtReflections')}</span>
                      <span className="text-slate-400">10%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clube Seguro Bank Section */}
      <section id="beneficios" className="py-12 sm:py-16 md:py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {t('seguroBankTitle')}
            </h2>
            <p className="text-xl text-slate-400">{t('seguroBankSubtitle')}</p>
            <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">
              {t('seguroBankDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 px-4">
            {/* Ouro */}
            <Card className="bg-gradient-to-br from-yellow-600 to-yellow-800 border-yellow-500 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-400 text-slate-950">{t('mostPopular')}</Badge>
              </div>
              <CardHeader>
                <div className="text-5xl mb-4">🥇</div>
                <CardTitle className="text-2xl text-white">{t('categoryGold')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <div>
                  <p className="text-sm opacity-90">{t('minInvestment')}</p>
                  <p className="text-3xl font-bold">$2.000</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('insuranceCoverage')}</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('monthlyReward')}</span>
                    <span className="font-bold">$20 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('maxReward')}</span>
                    <span className="font-bold">$2.000 USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prata */}
            <Card className="bg-gradient-to-br from-slate-400 to-slate-600 border-slate-400">
              <CardHeader>
                <div className="text-5xl mb-4">🥈</div>
                <CardTitle className="text-2xl text-white">{t('categorySilver')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <div>
                  <p className="text-sm opacity-90">{t('minInvestment')}</p>
                  <p className="text-3xl font-bold">$1.000</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('insuranceCoverage')}</span>
                    <span className="font-bold">50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('monthlyReward')}</span>
                    <span className="font-bold">$15 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('maxReward')}</span>
                    <span className="font-bold">$500 USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bronze */}
            <Card className="bg-gradient-to-br from-amber-700 to-amber-900 border-amber-600">
              <CardHeader>
                <div className="text-5xl mb-4">🥉</div>
                <CardTitle className="text-2xl text-white">{t('categoryBronze')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <div>
                  <p className="text-sm opacity-90">{t('minInvestment')}</p>
                  <p className="text-3xl font-bold">$500</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('insuranceCoverage')}</span>
                    <span className="font-bold">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('monthlyReward')}</span>
                    <span className="font-bold">$10 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('maxReward')}</span>
                    <span className="font-bold">$125 USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefícios */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">{t('benefitsTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">{t('rewardValidity')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{t('rewardValidityDesc')}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">{t('directPayments')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{t('directPaymentsDesc')}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">{t('insuranceActivation')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{t('insuranceActivationDesc')}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">{t('exclusiveClub')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{t('exclusiveClubDesc')}</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold text-lg px-8 py-6"
                onClick={() => window.open('https://criptonopix.app.br', '_blank')}
              >
                {t('investNow')} <ExternalLink className="ml-2" size={20} />
              </Button>
              
              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-slate-800/50 border border-yellow-500/30 rounded-lg max-w-2xl mx-auto">
                <p className="text-slate-300 text-sm">
                  <span className="text-yellow-400 font-semibold">{t('disclaimer')}</span> {t('disclaimerText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {t('roadmapTitle')}
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            {t('roadmapSubtitle')}
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Fase 1 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-yellow-500/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 font-bold">1</div>
                  <CardTitle className="text-2xl text-yellow-400">{t('phase1')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase1Item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase1Item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase1Item3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase1Item4')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 2 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <CardTitle className="text-2xl text-slate-300">{t('phase2')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase2Item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase2Item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase2Item3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase2Item4')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 3 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <CardTitle className="text-2xl text-slate-300">{t('phase3')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase3Item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase3Item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase3Item3')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 4 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <CardTitle className="text-2xl text-slate-300">{t('phase4')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase4Item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase4Item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase4Item3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>{t('phase4Item4')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-slate-400 mt-12 max-w-3xl mx-auto">
            {t('roadmapFooter')}
          </p>
        </div>
      </section>

      {/* Equipe Section */}
      <section id="equipe" className="py-12 sm:py-16 md:py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {t('teamTitle')}
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            {t('teamSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Túlio */}
            <Card className="bg-slate-900/50 border-slate-800 hover:border-yellow-500 transition-all duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-yellow-500">
                  <img src={tulioImg} alt="Túlio Rodrigues" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-center text-yellow-400">Túlio Rodrigues</CardTitle>
                <CardDescription className="text-center text-slate-400">CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  {t('tulioDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Marcos */}
            <Card className="bg-slate-900/50 border-slate-800 hover:border-yellow-500 transition-all duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-yellow-500">
                  <img src={marcosImg} alt="Marcos Santos" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-center text-yellow-400">Marcos Santos</CardTitle>
                <CardDescription className="text-center text-slate-400">CCO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  {t('marcosDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Luiz */}
            <Card className="bg-slate-900/50 border-slate-800 hover:border-yellow-500 transition-all duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-yellow-500">
                  <img src={luizImg} alt="Luiz Oliveira" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-center text-yellow-400">Luiz Oliveira</CardTitle>
                <CardDescription className="text-center text-slate-400">{t('luizRole')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  {t('luizDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato/Comunidade Section */}
      <section id="contato" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {t('contactTitle')}
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer" onClick={() => window.open('https://x.com/GoldenEggsrwa', '_blank')}>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Twitter className="text-blue-400" size={32} />
                </div>
                <CardTitle className="text-center text-blue-400">X (Twitter)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">@GoldenEggsrwa</p>
                <Badge className="mt-2 bg-blue-500">{t('official')}</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer" onClick={() => window.open('https://t.me/goldeneggsalpha', '_blank')}>
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-cyan-400" size={32} />
                </div>
                <CardTitle className="text-center text-cyan-400">Telegram</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">@goldeneggsalpha</p>
                <Badge className="mt-2 bg-cyan-500">{t('official')}</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-pink-500 transition-all duration-300 cursor-pointer" onClick={() => window.open('https://instagram.com/goldeneggsrwa', '_blank')}>
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="text-pink-400" size={32} />
                </div>
                <CardTitle className="text-center text-pink-400">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">@goldeneggsrwa</p>
                <Badge className="mt-2 bg-pink-500">{t('official')}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center font-bold text-slate-950">
              GEG
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              GOLDEN EGGS
            </span>
          </div>
          <p className="text-slate-400 mb-4">
            {t('footerDescription')}
          </p>
          <p className="text-slate-500 text-sm">
            {t('footerText')}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

