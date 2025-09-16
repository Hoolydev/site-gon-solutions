import React from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a <span className="text-green-400">GON Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Criamos automações sob medida com n8n, Python e agentes de IA que integram sistemas, 
            aumentam a produtividade e eliminam trabalhos manuais desnecessários
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Foco na Eficiência</h3>
                <p className="text-gray-300">
                  Identificamos gargalos e processos repetitivos para criar soluções que 
                  otimizam o tempo e recursos da sua empresa.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-lg flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Inteligência Artificial</h3>
                <p className="text-gray-300">
                  Implementamos agentes de IA e automação inteligente com n8n de forma prática 
                  e eficiente, tornando seus processos mais inteligentes e adaptativos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-purple-600 to-green-400 p-3 rounded-lg flex-shrink-0">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Escalabilidade</h3>
                <p className="text-gray-300">
                  Nossas soluções crescem junto com o seu negócio, garantindo que a 
                  automação continue eficiente em qualquer escala.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-green-400/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Python</div>
                  <div className="text-sm text-gray-300">Desenvolvimento Ágil</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-2">RPA</div>
                  <div className="text-sm text-gray-300">Automação Robótica</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">IA</div>
                  <div className="text-sm text-gray-300">Inteligência Artificial</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-2">API</div>
                  <div className="text-sm text-gray-300">Integração Total</div>
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