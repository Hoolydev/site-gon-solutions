import React from 'react';
import { Target, Lightbulb, Rocket, Brain, Zap, Shield, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco na Eficiência',
      description: 'Identificamos gargalos e processos repetitivos para criar soluções que otimizam o tempo e recursos da sua empresa.',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Implementamos agentes de IA e automação inteligente que aprendem e evoluem, tornando seus processos mais inteligentes e adaptativos.',
      gradient: 'from-green-400 to-green-500'
    },
    {
      icon: Rocket,
      title: 'Escalabilidade',
      description: 'Nossas soluções crescem junto com o seu negócio, garantindo que a automação continue eficiente em qualquer escala.',
      gradient: 'from-blue-500 to-purple-600'
    }
  ];

  const technologies = [
    { name: 'Python', category: 'Desenvolvimento', icon: '🐍' },
    { name: 'n8n', category: 'Automação', icon: '⚡' },
    { name: 'IA', category: 'Inteligência', icon: '🧠' },
    { name: 'API', category: 'Integração', icon: '🔗' }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-[#0c0414] via-purple-900/5 to-[#0c0414] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c1528] rounded-full border border-blue-500/30 mb-6">
            <span className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 rounded-full">
                <Brain className="w-4 h-4 text-white" />
              </span>
              Sobre Nós
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sobre a <span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent">GON Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Criamos automações sob medida com n8n, Python e agentes de IA que integram sistemas, 
            aumentam a produtividade e eliminam trabalhos manuais desnecessários
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Values Section */}
          <div className="space-y-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group flex items-start space-x-6 p-6 bg-[#1c1528]/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${value.gradient} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technologies Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/50 to-green-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Nossa <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Expertise</span>
                </h3>
                <p className="text-gray-300">
                  Tecnologias que dominamos para entregar resultados excepcionais
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="group text-center p-4 bg-[#1c1528]/80 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.category}</div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#1c1528]/80 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400 mb-1">5+</div>
                  <div className="text-sm text-gray-300">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-[#1c1528]/80 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400 mb-1">100+</div>
                  <div className="text-sm text-gray-300">Projetos Entregues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;