import React from 'react';
import { Cpu, Network, Zap, Code, Brain, Database, Cloud, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const TechSection = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'Inteligência Artificial Avançada',
      description: 'Modelos de IA de última geração que aprendem e evoluem continuamente',
      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      gradient: 'from-purple-600 to-purple-700',
      stats: { value: '99.9%', label: 'Precisão' }
    },
    {
      icon: Network,
      title: 'Integração Total de Sistemas',
      description: 'Conectamos todos os seus sistemas com APIs inteligentes e workflows automatizados',
      features: ['n8n Workflows', 'Python Scripts', 'RPA Integration', 'Real-time Sync'],
      gradient: 'from-green-400 to-green-500',
      stats: { value: '24/7', label: 'Conectividade' }
    },
    {
      icon: Zap,
      title: 'Automação Instantânea',
      description: 'Processos que se executam em tempo real com resultados imediatos',
      features: ['Event-driven', 'Real-time Processing', 'Auto-scaling', 'Instant Results'],
      gradient: 'from-blue-500 to-purple-600',
      stats: { value: '<100ms', label: 'Latência' }
    },
    {
      icon: Shield,
      title: 'Segurança e Confiabilidade',
      description: 'Infraestrutura robusta com segurança de nível empresarial',
      features: ['End-to-end Encryption', 'GDPR Compliance', 'SOC 2', '99.9% Uptime'],
      gradient: 'from-green-400 to-blue-500',
      stats: { value: '100%', label: 'Segurança' }
    }
  ];

  const techStack = [
    { name: 'OpenAI GPT-4', category: 'AI Models' },
    { name: 'Python', category: 'Backend' },
    { name: 'n8n', category: 'Automation' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'AWS', category: 'Cloud' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0c0414] via-purple-900/10 to-[#0c0414] relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-500 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-1500 opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-2000 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c1528] rounded-full border border-green-500/30 mb-6">
            <span className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 p-1.5 rounded-full">
                <Cpu className="w-4 h-4 text-white" />
              </span>
              Tecnologia Avançada
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tecnologia do <span className="bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Futuro</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Utilizamos as tecnologias mais avançadas de IA e automação para criar soluções 
            inovadoras que transformam a forma como sua empresa opera
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-[#1c1528]/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${tech.gradient} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{tech.stats.value}</div>
                      <div className="text-sm text-gray-400">{tech.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {tech.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossa <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Stack Tecnológica</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Tecnologias de ponta que garantem performance, segurança e escalabilidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-[#1c1528]/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-green-400 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                  <p className="text-gray-400 text-sm">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-purple-900/50 to-green-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Performance e Confiabilidade
            </h3>
            <p className="text-gray-300 text-lg">
              Números que comprovam nossa excelência técnica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300 font-medium">Uptime</div>
              <div className="text-sm text-gray-400">Disponibilidade garantida</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">&lt;100ms</div>
              <div className="text-gray-300 font-medium">Latência</div>
              <div className="text-sm text-gray-400">Resposta ultra-rápida</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10M+</div>
              <div className="text-gray-300 font-medium">Requests</div>
              <div className="text-sm text-gray-400">Processados por dia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Suporte</div>
              <div className="text-sm text-gray-400">Monitoramento contínuo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;