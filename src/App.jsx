import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Coins, TrendingUp, Shield, Users, Rocket, Target, CheckCircle2, Twitter, Send, Instagram, Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import tulioImg from './assets/tulio-rodrigues.webp'
import marcosImg from './assets/marcos-santos.webp'
import luizImg from './assets/luiz-oliveira.webp'
import logoImg from './assets/golden-eggs-logo.webp'
import logoHeaderImg from './assets/golden-eggs-logo-header.webp'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoHeaderImg} alt="Golden Eggs Logo" className="w-12 h-12 rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                GOLDEN EGGS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('sobre')} className="hover:text-yellow-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('tokenomics')} className="hover:text-yellow-400 transition-colors">Tokenomics</button>
              <button onClick={() => scrollToSection('beneficios')} className="hover:text-yellow-400 transition-colors">Benefícios</button>
              <button onClick={() => scrollToSection('roadmap')} className="hover:text-yellow-400 transition-colors">Roadmap</button>
              <button onClick={() => scrollToSection('equipe')} className="hover:text-yellow-400 transition-colors">Equipe</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-yellow-400 transition-colors">Contato</button>
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold"
                onClick={() => window.open('https://goldeneggsrwa.com', '_blank')}
              >
                VISITE O SITE EMPRESARIAL
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('tokenomics')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">Tokenomics</button>
              <button onClick={() => scrollToSection('beneficios')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">Benefícios</button>
              <button onClick={() => scrollToSection('roadmap')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">Roadmap</button>
              <button onClick={() => scrollToSection('equipe')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">Equipe</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 hover:text-yellow-400 transition-colors">Contato</button>
              <Button 
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold"
                onClick={() => window.open('https://goldeneggsrwa.com', '_blank')}
              >
                VISITE O SITE EMPRESARIAL
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full shadow-2xl shadow-yellow-500/50">
              <img src={logoImg} alt="Golden Eggs Logo" className="w-full h-full rounded-full" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            GOLDEN EGGS RWA
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-yellow-400 font-semibold">($GEG)</p>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            <span className="text-yellow-400 font-semibold">Investindo no Futuro da Avicultura</span> com a Segurança da Blockchain.
          </p>
          <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-2xl mx-auto">
            Conectando o investidor digital ao mercado mais resiliente do mundo: a produção de ovos.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">200M</div>
                <div className="text-slate-400">Total Supply</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">$0.0024</div>
                <div className="text-slate-400">Preço Inicial</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">RWA</div>
                <div className="text-slate-400">Real World Asset</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold text-lg px-8 py-6"
              onClick={() => window.open('https://criptonopix.app.br', '_blank')}
            >
              Participar da Venda <ExternalLink className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 text-lg px-8 py-6"
              onClick={() => scrollToSection('sobre')}
            >
              Conheça o Projeto
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <Badge variant="outline" className="border-green-500 text-green-400 px-4 py-2 text-sm">
              <CheckCircle2 className="mr-2" size={16} /> Auditado
            </Badge>
            <Badge variant="outline" className="border-blue-500 text-blue-400 px-4 py-2 text-sm">
              <Shield className="mr-2" size={16} /> Lastro Real
            </Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2 text-sm">
              <TrendingUp className="mr-2" size={16} /> Transparente
            </Badge>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            GOLDEN EGGS RWA ($GEG)
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
            <strong className="text-yellow-400">Golden Eggs ($GEG)</strong> é um projeto inovador de <strong>Ativo do Mundo Real (RWA - Real World Asset)</strong> que conecta o investidor digital diretamente a um dos mercados mais resilientes do mundo: a produção de ovos. Ao tokenizar as operações de uma granja avícola, oferecemos transparência, liquidez e uma oportunidade de investimento tangível e sustentável.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-yellow-400">Segurança Institucional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Ativos lastreados em operações reais do setor agropecuário, garantindo solidez e estabilidade para seu investimento.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-yellow-400">Governança Corporativa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Práticas rigorosas de gestão e transparência, alinhadas aos mais altos padrões do mercado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-yellow-400" size={24} />
                </div>
                <CardTitle className="text-yellow-400">Resultados Consistentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Estratégia de crescimento sustentável, focada em resultados de longo prazo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Distribuição transparente e sustentável do token Golden Eggs ($GEG)
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Distribuição do Token */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400">Distribuição do Token</CardTitle>
                <CardDescription className="text-slate-400">Supply Total: 200.000.000 $GEG</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Expansão da Granja (Tesouraria)</span>
                    <span className="text-yellow-400 font-bold">75%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Liquidez</span>
                    <span className="text-yellow-400 font-bold">15%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Marketing</span>
                    <span className="text-yellow-400 font-bold">5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Manutenção e Operações</span>
                    <span className="text-yellow-400 font-bold">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Taxas de Transação */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400">Taxas de Transação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Taxa de Compra: 5%</h4>
                  <div className="space-y-2 pl-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Queima</span>
                      <span className="text-slate-400">1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Liquidez</span>
                      <span className="text-slate-400">1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Marketing</span>
                      <span className="text-slate-400">3%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Taxa de Venda: 15%</h4>
                  <div className="space-y-2 pl-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Queima</span>
                      <span className="text-slate-400">1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Marketing</span>
                      <span className="text-slate-400">4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Reflexões em USDT</span>
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
      <section id="beneficios" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              🏦 Clube Seguro Bank Golden Eggs
            </h2>
            <p className="text-xl text-slate-400">Exclusivo para os 100 primeiros investidores do token $GEG</p>
            <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">
              O Seguro Bank Golden Eggs é um programa especial de proteção e recompensas criado para apoiar e incentivar os primeiros investidores do projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Ouro */}
            <Card className="bg-gradient-to-br from-yellow-600 to-yellow-800 border-yellow-500 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-400 text-slate-950">MAIS POPULAR</Badge>
              </div>
              <CardHeader>
                <div className="text-5xl mb-4">🥇</div>
                <CardTitle className="text-2xl text-white">Categoria OURO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <div>
                  <p className="text-sm opacity-90">Valor Mínimo de Investimento</p>
                  <p className="text-3xl font-bold">$2.000</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cobertura do Seguro:</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recompensa Mensal:</span>
                    <span className="font-bold">$20 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Máxima Recompensa:</span>
                    <span className="font-bold">$2.000 USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prata */}
            <Card className="bg-gradient-to-br from-slate-400 to-slate-600 border-slate-400">
              <CardHeader>
                <div className="text-5xl mb-4">🥈</div>
                <CardTitle className="text-2xl text-white">Categoria PRATA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <div>
                  <p className="text-sm opacity-90">Valor Mínimo de Investimento</p>
                  <p className="text-3xl font-bold">$1.000</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cobertura do Seguro:</span>
                    <span className="font-bold">50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recompensa Mensal:</span>
                    <span className="font-bold">$15 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Máxima Recompensa:</span>
                    <span className="font-bold">$500 USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bronze */}
            <Card className="bg-gradient-to-br from-amber-700 to-amber-900 border-amber-600">
              <CardHeader>
                <div className="text-5xl mb-4">🥉</div>
                <CardTitle className="text-2xl text-white">Categoria BRONZE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
                <div>
                  <p className="text-sm opacity-90">Valor Mínimo de Investimento</p>
                  <p className="text-3xl font-bold">$500</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cobertura do Seguro:</span>
                    <span className="font-bold">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recompensa Mensal:</span>
                    <span className="font-bold">$10 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Máxima Recompensa:</span>
                    <span className="font-bold">$125 USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefícios */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">🎁 Benefícios do Seguro Bank</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">Validade das Recompensas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Garantidas por até 24 meses enquanto o investidor mantiver o valor investido.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">Pagamentos Diretos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">As recompensas mensais serão pagas em USDT diretamente na carteira do investidor.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">Acionamento do Seguro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Se, após 6 meses, o token $GEG apresentar desvalorização significativa, o seguro poderá ser acionado.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">Garante Sua Vaga no Clube Exclusivo!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Apenas os 100 primeiros investidores terão acesso a estes benefícios únicos.</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold text-lg px-8 py-6"
                onClick={() => window.open('https://criptonopix.app.br', '_blank')}
              >
                Investir Agora <ExternalLink className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Roteiro de Desenvolvimento (Roadmap)
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Nossa jornada de desenvolvimento e expansão
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Fase 1 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-yellow-500/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-slate-950 font-bold">1</div>
                  <CardTitle className="text-2xl text-yellow-400">Fase 1: Fundação e Lançamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>Construção de 4 galpões iniciais, com capacidade para 1.000 aves poedeiras cada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>Aquisição inicial de 4.000 aves poedeiras de alta qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>Desenvolvimento e publicação do Whitepaper oficial e do website do projeto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span>Auditoria e implementação do contrato inteligente (Smart Contract) do token $GEG</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 2 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <CardTitle className="text-2xl text-slate-300">Fase 2: Expansão e Verticalização</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Construção de 10 galpões adicionais para escalar a produção</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Aquisição de 10.000 novas aves poedeiras para atender à crescente demanda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Desenvolvimento de parcerias estratégicas no setor do agronegócio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Implementação de uma fábrica própria de rações para otimizar custos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 3 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <CardTitle className="text-2xl text-slate-300">Fase 3: Autossuficiência e Crescimento de Mercado</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Construção de mais 10 galpões, consolidando a capacidade produtiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Aquisição de 10.000 aves poedeiras adicionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Estabelecimento de matriz própria para produção de pintainhas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fase 4 */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <CardTitle className="text-2xl text-slate-300">Fase 4: Consolidação e Inovação Tecnológica</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Otimização da logística para venda direta ao consumidor final</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Lançamento de plataforma de ensino para novos avicultores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Desenvolvimento de aplicativo próprio para delivery de ovos caipiras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="text-slate-500 mt-1 flex-shrink-0" size={20} />
                    <span>Expansão da presença do token $GEG em novas exchanges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-slate-400 mt-12 max-w-3xl mx-auto">
            Todos os marcos foram cuidadosamente planejados para maximizar o valor para nossos investidores e garantir o crescimento sustentável do projeto.
          </p>
        </div>
      </section>

      {/* Equipe Section */}
      <section id="equipe" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Nossa Equipe
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Conheça os profissionais que fazem a Golden Eggs acontecer
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
                  Owner da Comunidade Ze's Group, Túlio lidera a Golden Eggs com sua vasta experiência em comunidades e mercados digitais, trazendo uma visão inovadora para o setor agropecuário tokenizado.
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
                  Sócio, Analista administrativo e marketing digital
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
                <CardDescription className="text-center text-slate-400">Sócio / Vendas / Faturamento</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm text-center">
                  Assistente financeiro prestando suporte às operações financeiras da empresa. Envolve analisar o controle das contas a pagar e a receber, emissão de notas fiscais e acompanhamento de transações financeiras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato/Comunidade Section */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            Fique por dentro de todas as novidades e participe ativamente do futuro da Golden Eggs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Twitter className="text-blue-400" size={32} />
                </div>
                <CardTitle className="text-center text-blue-400">X (Twitter)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">@GoldenEggsrwa</p>
                <Badge className="mt-2 bg-blue-500">Oficial</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-cyan-400" size={32} />
                </div>
                <CardTitle className="text-center text-cyan-400">Telegram</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">@goldeneggsalpha</p>
                <Badge className="mt-2 bg-cyan-500">Oficial</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-pink-500 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="text-pink-400" size={32} />
                </div>
                <CardTitle className="text-center text-pink-400">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300">@goldeneggsrwa</p>
                <Badge className="mt-2 bg-pink-500">Oficial</Badge>
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
            Conectando a economia digital ao setor agropecuário através da tecnologia blockchain.
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 Golden Eggs. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

