import React from 'react';
import { Bot, Mail, Phone, MapPin, Brain, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0c0414] via-purple-900/20 to-[#0c0414] border-t border-gray-700/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                 src="https://i.postimg.cc/VS4cR47g/GON-RGB-A.png" 
                 alt="GON Solutions Logo" 
                 className="h-12 sm:h-14 md:h-16 w-auto"
                 onError={(e) => {
                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+CjxwYXRoIGQ9Ik0xMiAxNkgxNlYyNEgxMlYxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAxNkgyNFYyNEgyMFYxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yOCAxNkgzMlYyNEgyOFYxNloiIGZpbGw9IndoaXRlIi/+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTMzM0VBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=';
                 }}
               />
               <span className="text-xl font-bold text-white">
                 <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Solutions</span>
               </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Transformando processos através da automação inteligente. 
              Especialistas em IA, Python e RPA para o futuro do seu negócio.
            </p>
            <div className="flex space-x-4">
              <div className="group bg-[#1c1528]/80 p-3 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
              <div className="group bg-[#1c1528]/80 p-3 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
              </div>
              <div className="group bg-[#1c1528]/80 p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-400" />
              Serviços
            </h3>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Agentes de IA
              </a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Automação de Processos
              </a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Personagens 3D
              </a></li>
              <li><a href="#demo" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Consultoria
              </a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-400" />
              Empresa
            </h3>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Sobre Nós
              </a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Contato
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Casos de Sucesso
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                Blog
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 GON Solutions. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;