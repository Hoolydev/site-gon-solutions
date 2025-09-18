import React from 'react';
import { ArrowRight, Calendar, Sparkles, Zap, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: '⚡', text: 'Demonstração gratuita' },
    { icon: '📞', text: 'Sem compromisso' },
    { icon: '🚀', text: 'Resultados imediatos' }
  ];

  const stats = [
    { value: '15 min', label: 'Demonstração personalizada', color: 'text-green-400' },
    { value: '0 custo', label: 'Consultoria inicial gratuita', color: 'text-purple-400' },
    { value: '24h', label: 'Proposta personalizada', color: 'text-blue-400' }
  ];

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-[#0c0414] via-purple-900/20 to-[#0c0414] relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-600/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-green-400 p-4 rounded-2xl">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Automatizar
            </span>{' '}
            seu negócio?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Veja como nossa automação inteligente pode transformar seus processos em minutos, 
            não meses, com resultados imediatos e escaláveis
          </p>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-[#1c1528] rounded-full border border-gray-700/50">
              <span className="text-lg">{benefit.icon}</span>
              <span className="text-gray-300 text-sm font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 inline-flex items-center space-x-3"
          >
            <Sparkles className="h-6 w-6" />
            <span>Solicite uma Demonstração</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group p-8 bg-[#1c1528]/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg font-medium group-hover:text-gray-200 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm mb-4">
            Mais de 100 empresas já transformaram seus processos conosco
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"].map((company, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-green-400 rounded"></div>
                <span className="text-gray-400 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;