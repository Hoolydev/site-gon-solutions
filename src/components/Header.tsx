import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-purple-900/95 via-purple-800/95 to-teal-900/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-purple-900/80 via-purple-800/80 to-teal-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="https://i.postimg.cc/VS4cR47g/GON-RGB-A.png" 
              alt="GON Solutions Logo" 
              className="h-10 sm:h-12 md:h-16 w-auto"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+CjxwYXRoIGQ9Ik0xMiAxNkgxNlYyNEgxMlYxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAxNkgyNFYyNEgyMFYxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yOCAxNkgzMlYyNEgyOFYxNloiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTMzM0VBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=';
              }}
            />
            <span className="text-lg sm:text-xl font-bold text-white">
              <span className="text-green-400">Solutions</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Sobre', id: 'sobre' },
              { name: 'Serviços', id: 'servicos' },
              { name: 'Animações 3D', id: 'animacao-3d' },
              { name: 'Blog', id: 'blog', isLink: true },
              { name: 'Demonstração', id: 'demo' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              item.isLink ? (
                <Link
                  key={item.id}
                  to="/blog"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <nav className="px-4 py-4 space-y-4">
              {[
                { name: 'Sobre', id: 'sobre' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Animações 3D', id: 'animacao-3d' },
                { name: 'Blog', id: 'blog', isLink: true },
                { name: 'Demonstração', id: 'demo' },
                { name: 'Contato', id: 'contato' }
              ].map((item) => (
                item.isLink ? (
                  <Link
                    key={item.id}
                    to="/blog"
                    className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;