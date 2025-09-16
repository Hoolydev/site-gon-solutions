import React from 'react';
import { Cpu, Network, Zap, Code } from 'lucide-react';

const TechSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnologia do <span className="text-green-400">Futuro</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Utilizamos as tecnologias mais avançadas para criar soluções inovadoras e eficientes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Processamento Inteligente</h3>
                <p className="text-gray-300">Agentes de IA que analisam, aprendem e otimizam processos automaticamente</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-colors duration-300">
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-lg">
                <Network className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Integração Total</h3>
                <p className="text-gray-300">Conectamos todos os seus sistemas com n8n e Python</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-green-400 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Automação Instantânea</h3>
                <p className="text-gray-300">Resultados imediatos e escaláveis</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-colors duration-300">
              <div className="bg-gradient-to-r from-green-400 to-purple-600 p-3 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Código Limpo</h3>
                <p className="text-gray-300">Soluções robustas e mantíveis</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/50 to-green-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
              {/* Tech Grid Visualization */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg border-2 flex items-center justify-center ${
                      i === 4 
                        ? 'bg-gradient-to-br from-purple-600 to-green-400 border-transparent' 
                        : 'bg-gray-800/50 border-gray-600/50 hover:border-purple-400/50'
                    } transition-all duration-300`}
                  >
                    {i === 4 && (
                      <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400 mb-1">&lt;100ms</div>
                  <div className="text-sm text-gray-300">Resposta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;