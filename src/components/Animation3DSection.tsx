import React from 'react';
import { Play, Palette, Zap, Users, Monitor, Gamepad2 } from 'lucide-react';

const Animation3DSection = () => {
  const features = [
    {
      icon: Play,
      title: 'Animações Realistas',
      description: 'Criamos animações 3D com movimentos naturais e expressões faciais detalhadas usando motion capture e keyframes avançados.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Modelagem de Personagens',
      description: 'Desenvolvemos personagens 3D únicos com texturas realistas, rigging completo e personalidade visual marcante.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Renderização em Tempo Real',
      description: 'Tecnologia de ponta para animações interativas em jogos, realidade virtual e experiências imersivas.',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Avatares Interativos',
      description: 'Personagens 3D inteligentes que interagem com usuários, ideais para atendimento virtual e apresentações.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Monitor,
      title: 'Conteúdo Audiovisual',
      description: 'Produção completa de vídeos 3D para marketing, treinamentos corporativos e apresentações institucionais.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'Experiências Gamificadas',
      description: 'Desenvolvimento de personagens e animações para jogos educativos e experiências interativas de marca.',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const applications = [
    {
      title: 'Marketing Digital',
      description: 'Personagens 3D que representam sua marca em campanhas publicitárias e redes sociais.',
      image: '🎬'
    },
    {
      title: 'Treinamento Corporativo',
      description: 'Simulações 3D interativas para capacitação de equipes e onboarding de funcionários.',
      image: '🎓'
    },
    {
      title: 'Atendimento Virtual',
      description: 'Assistentes virtuais 3D que humanizam o atendimento ao cliente com IA conversacional.',
      image: '🤖'
    },
    {
      title: 'Apresentações Executivas',
      description: 'Avatares executivos para apresentações corporativas e comunicação institucional.',
      image: '👔'
    }
  ];

  return (
    <section id="animacao-3d" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Animações <span className="text-purple-400">3D</span> & Personagens
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Damos vida às suas ideias com personagens 3D realistas e animações cinematográficas que conectam, engajam e convertem
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                     style={{backgroundImage: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`}}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Applications Section */}
        <div className="bg-gray-800/30 rounded-3xl p-8 md:p-12 border border-gray-700/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Aplicações <span className="text-purple-400">Práticas</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Veja como nossos personagens 3D transformam diferentes áreas do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-700/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{app.image}</div>
                <h4 className="text-lg font-bold text-white mb-3">{app.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Tecnologias <span className="text-purple-400">Avançadas</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Blender', 'Maya', 'Cinema 4D', 'Unity', 'Unreal Engine', 'Motion Capture', 'AI Animation'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium hover:bg-purple-600/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para dar vida às suas ideias?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossos especialistas em animação 3D estão prontos para criar personagens únicos que representem sua marca com impacto visual extraordinário.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              Solicitar Orçamento
              <Play className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation3DSection;