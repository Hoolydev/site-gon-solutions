import React from 'react';
import { Sparkles } from 'lucide-react';

const DifferentialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/50 via-gray-900 to-green-900/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-green-400 p-4 rounded-full">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Nosso <span className="text-green-400">Diferencial</span>
        </h2>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
            Enquanto muitos entregam{' '}
            <span className="text-purple-400 font-semibold">apenas design</span>{' '}
            ou{' '}
            <span className="text-purple-400 font-semibold">apenas sistemas</span>, 
            a GON integra tudo:{' '}
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent font-bold">
              estética, funcionalidade e evolução tecnológica
            </span>.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-purple-600/20 to-transparent rounded-xl border border-purple-500/30">
            <div className="text-purple-400 text-lg font-semibold mb-2">Estética</div>
            <div className="text-gray-300">Interfaces intuitivas e experiências excepcionais</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-400/20 to-transparent rounded-xl border border-green-400/30">
            <div className="text-green-400 text-lg font-semibold mb-2">Funcionalidade</div>
            <div className="text-gray-300">Automações robustas que realmente funcionam</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-600/20 via-green-400/20 to-transparent rounded-xl border border-gray-600/30">
            <div className="text-purple-300 text-lg font-semibold mb-2">Evolução</div>
            <div className="text-gray-300">Tecnologia que acompanha o futuro</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;