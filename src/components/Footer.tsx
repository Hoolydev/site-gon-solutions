import React from 'react';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-teal-900 border-t border-purple-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <img 
                 src="https://i.postimg.cc/VS4cR47g/GON-RGB-A.png" 
                 alt="GON Solutions Logo" 
                 className="h-12 sm:h-14 md:h-16 w-auto"
                 onError={(e) => {
                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+CjxwYXRoIGQ9Ik0xMiAxNkgxNlYyNEgxMlYxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAxNkgyNFYyNEgyMFYxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yOCAxNkgzMlYyNEgyOFYxNloiIGZpbGw9IndoaXRlIi/+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTMzM0VBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=';
                 }}
               />
               <span className="text-lg sm:text-xl font-bold text-white">
                 <span className="text-green-400">Solutions</span>
               </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando processos através da automação inteligente. 
              Especialistas em IA, Python e RPA para o futuro do seu negócio.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Automação de Processos</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Integração com IA</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Personagem 3D</a></li>
              <li><a href="#demo" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Consultoria</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Casos de Sucesso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 GON Solutions. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
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