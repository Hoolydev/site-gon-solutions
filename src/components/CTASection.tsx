import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-600/10 to-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-green-400 p-4 rounded-full">
            <Calendar className="h-8 w-8 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Pronto para{' '}
          <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Automatizar
          </span>?
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Veja como nossa automação pode transformar seus processos em minutos, não meses
        </p>

        <div className="space-y-6 mb-12">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 inline-flex items-center space-x-3"
          >
            <span>Solicite uma Demonstração</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <p className="text-gray-400 text-sm">
            ⚡ Demonstração gratuita • 📞 Sem compromisso • 🚀 Resultados imediatos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <div className="text-green-400 text-2xl font-bold mb-2">15 min</div>
            <div className="text-gray-300">Demonstração personalizada</div>
          </div>
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <div className="text-purple-400 text-2xl font-bold mb-2">0 custo</div>
            <div className="text-gray-300">Consultoria inicial gratuita</div>
          </div>
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <div className="text-green-400 text-2xl font-bold mb-2">24h</div>
            <div className="text-gray-300">Proposta personalizada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;