import React from 'react';
import { User, Settings, Brain } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: 'Personagem 3D',
      subtitle: 'Dê rosto à sua marca. Dê voz ao seu negócio.',
      description: 'Criamos avatares inteligentes e interativos que representam sua marca com personalidade única e comunicação natural.',
      gradient: 'from-purple-600 to-purple-700',
      borderGradient: 'from-purple-500/50 to-purple-600/50'
    },
    {
      icon: Settings,
      title: 'Automação de Processos',
      subtitle: 'Seu time foca no que importa. A GON cuida do resto.',
      description: 'Automatizamos tarefas repetitivas usando n8n, Python e RPA, integrando sistemas para que sua equipe se concentre no estratégico.',
      gradient: 'from-green-400 to-green-500',
      borderGradient: 'from-green-400/50 to-green-500/50'
    },
    {
      icon: Brain,
      title: 'Integração com IA',
      subtitle: 'A inteligência da sua marca em ação.',
      description: 'Implementamos agentes de IA inteligentes que aprendem, tomam decisões autônomas e evoluem com seu negócio para resultados extraordinários.',
      gradient: 'from-purple-600 to-green-400',
      borderGradient: 'from-purple-500/50 to-green-400/50'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-green-400">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas que transformam a forma como sua empresa opera
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl`}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-green-400 font-medium mb-4 text-lg">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 group/btn">
                      Saiba mais{' '}
                      <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;