
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tapiola-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Бренд и социальные сети */}
          <div className="space-y-4">
            <h3 className="text-tapiola-gray-dark font-montserrat font-bold text-xl">ТАПИОЛА</h3>
            <p className="text-tapiola-brown max-w-xs">
              Чай из карельских трав, собранных в экологически чистых районах Республики Карелия.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-tapiola-green-dark hover:text-tapiola-green transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-tapiola-green-dark hover:text-tapiola-green transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-tapiola-green-dark hover:text-tapiola-green transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-tapiola-green-dark hover:text-tapiola-green transition-colors">
                <Icon name="Vk" size={24} />
                <span className="sr-only">ВКонтакте</span>
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div className="md:pl-8">
            <h4 className="text-tapiola-gray-dark font-montserrat font-medium text-lg mb-4">Навигация</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-tapiola-brown hover:text-tapiola-green-dark transition-colors">О нас</a>
              <a href="#products" className="text-tapiola-brown hover:text-tapiola-green-dark transition-colors">Продукты</a>
              <a href="#ingredients" className="text-tapiola-brown hover:text-tapiola-green-dark transition-colors">Состав</a>
              <a href="#story" className="text-tapiola-brown hover:text-tapiola-green-dark transition-colors">История</a>
              <a href="#" className="text-tapiola-brown hover:text-tapiola-green-dark transition-colors">Контакты</a>
            </nav>
          </div>
          
          {/* Подписка */}
          <div>
            <h4 className="text-tapiola-gray-dark font-montserrat font-medium text-lg mb-4">Подпишитесь на новости</h4>
            <p className="text-tapiola-brown mb-4">Получайте новости о новинках и акциях.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-white px-4 py-2 rounded-l-md focus:outline-none border border-tapiola-green/30 focus:border-tapiola-green-dark flex-grow"
              />
              <Button className="bg-tapiola-green-dark hover:bg-tapiola-green rounded-l-none text-white">
                <Icon name="ArrowRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-tapiola-green/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tapiola-brown text-sm">&copy; {currentYear} Тапиола. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-tapiola-brown hover:text-tapiola-green-dark text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-tapiola-brown hover:text-tapiola-green-dark text-sm transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
