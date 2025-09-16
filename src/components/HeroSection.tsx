import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-green-400 p-3 rounded-full">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos{' '}
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              tarefas repetitivas
            </span>{' '}
            em tempo livre, eficiência e escala
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Automação inteligente que liberta sua equipe para focar no que realmente importa
          </p>

          <button
            onClick={scrollToDemo}
            className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-flex items-center space-x-2"
          >
            <span>Solicite uma demonstração</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
            <div className="p-4 sm:p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-300">Redução em tarefas manuais</div>
            </div>
            <div className="p-4 sm:p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-300">Automação contínua</div>
            </div>
            <div className="p-4 sm:p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-sm sm:text-base text-gray-300">Aumento de produtividade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;