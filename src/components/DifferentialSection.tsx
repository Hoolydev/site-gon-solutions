import React from 'react';
import { Sparkles, Palette, Cog, Rocket } from 'lucide-react';

const DifferentialSection = () => {
  const differentials = [
    {
      icon: Palette,
      title: 'Estética',
      description: 'Interfaces intuitivas e experiências excepcionais',
      gradient: 'from-purple-600/20 to-transparent',
      borderGradient: 'border-purple-500/30',
      textColor: 'text-purple-400'
    },
    {
      icon: Cog,
      title: 'Funcionalidade',
      description: 'Automações robustas que realmente funcionam',
      gradient: 'from-green-400/20 to-transparent',
      borderGradient: 'border-green-400/30',
      textColor: 'text-green-400'
    },
    {
      icon: Rocket,
      title: 'Evolução',
      description: 'Tecnologia que acompanha o futuro',
      gradient: 'from-blue-500/20 via-purple-400/20 to-transparent',
      borderGradient: 'border-blue-500/30',
      textColor: 'text-blue-400'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0c0414] via-purple-900/10 to-[#0c0414] relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-green-400 p-4 rounded-2xl">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Nosso <span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent">Diferencial</span>
          </h2>
        </div>

        {/* Main Message */}
        <div className="bg-[#1c1528]/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
            Enquanto muitos entregam{' '}
            <span className="text-purple-400 font-semibold">apenas design</span>{' '}
            ou{' '}
            <span className="text-purple-400 font-semibold">apenas sistemas</span>, 
            a GON integra tudo:{' '}
            <span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent font-bold">
              estética, funcionalidade e evolução tecnológica
            </span>.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div key={index} className={`group p-8 bg-gradient-to-br ${diff.gradient} rounded-3xl border ${diff.borderGradient} hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="flex justify-center mb-6">
                  <div className={`bg-gradient-to-r ${diff.gradient.replace('/20', '/40')} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className={`${diff.textColor} text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300`}>
                  {diff.title}
                </div>
                <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {diff.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;