
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Обработка прокрутки для изменения фона навбара
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Логотип */}
          <a href="#" className="flex items-center">
            <span className="text-tapiola-green-dark font-montserrat font-bold text-xl md:text-2xl">
              ТАПИОЛА
            </span>
          </a>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium transition-colors">
              О нас
            </a>
            <a href="#products" className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium transition-colors">
              Продукты
            </a>
            <a href="#ingredients" className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium transition-colors">
              Состав
            </a>
            <a href="#story" className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium transition-colors">
              История
            </a>
          </nav>

          {/* Кнопка купить */}
          <div className="hidden md:block">
            <Button className="bg-tapiola-green-dark hover:bg-tapiola-green text-white">
              Купить сейчас
            </Button>
          </div>

          {/* Мобильная кнопка меню */}
          <button 
            className="md:hidden p-2 rounded-md text-tapiola-gray-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 pb-4">
              <a 
                href="#about" 
                className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </a>
              <a 
                href="#products" 
                className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Продукты
              </a>
              <a 
                href="#ingredients" 
                className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Состав
              </a>
              <a 
                href="#story" 
                className="text-tapiola-gray-dark hover:text-tapiola-green-dark font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                История
              </a>
              <Button 
                className="bg-tapiola-green-dark hover:bg-tapiola-green text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Купить сейчас
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
