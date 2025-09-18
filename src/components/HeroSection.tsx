import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Sparkles, Zap, Bot, Cpu } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-[#0c0414] text-white flex flex-col relative overflow-hidden">
      {/* Advanced Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
          <div className="w-[10rem] h-[20rem] bg-gradient-to-br from-purple-600 to-blue-300"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-br from-green-400 to-purple-500"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-br from-blue-500 to-green-300"></div>
        </div>
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg] opacity-30">
          <div className="w-[10rem] h-[20rem] bg-gradient-to-br from-purple-600 to-blue-300"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-br from-green-400 to-purple-500"></div>
          <div className="w-[10rem] h-[20rem] bg-gradient-to-br from-blue-500 to-green-300"></div>
        </div>
        <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg] opacity-20">
          <div className="w-[10rem] h-[30rem] bg-gradient-to-br from-purple-600 to-blue-300"></div>
          <div className="w-[10rem] h-[30rem] bg-gradient-to-br from-green-400 to-purple-500"></div>
          <div className="w-[10rem] h-[30rem] bg-gradient-to-br from-blue-500 to-green-300"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* AI Badge */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1c1528] rounded-full px-6 py-3 flex items-center gap-3 w-fit mx-4 border border-purple-500/30">
              <span className="text-sm flex items-center gap-2">
                <span className="bg-gradient-to-r from-purple-500 to-green-400 p-1.5 rounded-full">
                  <Brain className="w-4 h-4 text-white" />
                </span>
                Agentes de IA Inteligentes
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transformamos{' '}
            <span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              tarefas repetitivas
            </span>{' '}
            em{' '}
            <span className="bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              automação inteligente
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Agentes de IA que aprendem, evoluem e otimizam seus processos automaticamente, 
            liberando sua equipe para focar no que realmente importa
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={scrollToDemo}
              className="group bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-flex items-center space-x-3"
            >
              <Sparkles className="h-5 w-5" />
              <span>Solicite uma demonstração</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
          </div>

          {/* AI Features Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group p-6 bg-[#1c1528]/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300 font-medium">Redução em tarefas manuais</div>
              <div className="text-sm text-gray-400 mt-2">Automação inteligente que elimina processos repetitivos</div>
            </div>
            
            <div className="group p-6 bg-[#1c1528]/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Automação contínua</div>
              <div className="text-sm text-gray-400 mt-2">Agentes que trabalham sem parar para otimizar resultados</div>
            </div>
            
            <div className="group p-6 bg-[#1c1528]/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-300 font-medium">Aumento de produtividade</div>
              <div className="text-sm text-gray-400 mt-2">IA que aprende e evolui para resultados extraordinários</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-700/50">
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["OpenAI", "Google AI", "Microsoft", "Meta AI", "Anthropic"].map((company, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-green-400 rounded"></div>
                  <span className="text-gray-400 font-medium">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;