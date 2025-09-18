import React from 'react';
import { Bot, Cpu, Sparkles, Zap, Brain, Network, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: 'Agentes de IA Inteligentes',
      subtitle: 'Inteligência artificial que trabalha para você',
      description: 'Desenvolvemos agentes de IA personalizados que aprendem, evoluem e tomam decisões autônomas para otimizar seus processos de negócio.',
      features: ['Aprendizado contínuo', 'Tomada de decisões autônomas', 'Integração com sistemas existentes'],
      gradient: 'from-purple-600 to-purple-700',
      borderGradient: 'from-purple-500/50 to-purple-600/50',
      stats: { value: '95%', label: 'Precisão' }
    },
    {
      icon: Cpu,
      title: 'Automação de Processos',
      subtitle: 'Eficiência máxima, esforço mínimo',
      description: 'Automatizamos tarefas repetitivas usando tecnologias avançadas como n8n, Python e RPA, liberando sua equipe para focar no estratégico.',
      features: ['Integração total de sistemas', 'Workflows inteligentes', 'Monitoramento em tempo real'],
      gradient: 'from-green-400 to-green-500',
      borderGradient: 'from-green-400/50 to-green-500/50',
      stats: { value: '24/7', label: 'Operação' }
    },
    {
      icon: Sparkles,
      title: 'Personagens 3D Interativos',
      subtitle: 'Dê rosto e voz à sua marca',
      description: 'Criamos avatares inteligentes e interativos que representam sua marca com personalidade única, comunicação natural e engajamento excepcional.',
      features: ['Comunicação natural', 'Personalidade única', 'Engajamento elevado'],
      gradient: 'from-blue-500 to-purple-600',
      borderGradient: 'from-blue-500/50 to-purple-600/50',
      stats: { value: '10x', label: 'Engajamento' }
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0c0414] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c1528] rounded-full border border-purple-500/30 mb-6">
            <span className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-green-400 p-1.5 rounded-full">
                <Brain className="w-4 h-4 text-white" />
              </span>
              Soluções Inteligentes
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Nossos <span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent">Serviços</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Soluções completas de IA que transformam a forma como sua empresa opera, 
            automatiza processos e engaja clientes de forma inteligente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-[#1c1528]/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.stats.value}</div>
                      <div className="text-sm text-gray-400">{service.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-green-400 font-medium mb-4 text-lg">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-gray-700/50">
                    <button className="group/btn text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 inline-flex items-center gap-2">
                      Saiba mais
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-green-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para transformar seu negócio com IA?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Nossos especialistas estão prontos para criar a solução perfeita para suas necessidades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-flex items-center space-x-3">
                  <Sparkles className="h-5 w-5" />
                  <span>Solicitar Consultoria</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;