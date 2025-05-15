
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CTA() {
  return (
    <section className="py-16 bg-tapiola-green-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Почувствуйте вкус Карелии прямо сейчас
            </h2>
            <p className="text-white/80 mb-6 max-w-lg">
              Специальное предложение для новых клиентов: скидка 10% на первый заказ и бесплатная доставка при покупке от 1500 ₽.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-tapiola-green-dark hover:bg-tapiola-cream">
                Заказать сейчас
                <Icon name="ShoppingCart" className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon name="Truck" size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-medium mb-2">Быстрая доставка</h3>
              <p className="text-white/80">Доставляем по всей России в течение 2-7 дней.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon name="Leaf" size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-medium mb-2">100% Натурально</h3>
              <p className="text-white/80">Только натуральные травы без добавок и ароматизаторов.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon name="RefreshCw" size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-medium mb-2">Подписка</h3>
              <p className="text-white/80">Оформите подписку и получайте свежий чай каждый месяц.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon name="Gift" size={24} />
              </div>
              <h3 className="text-xl font-montserrat font-medium mb-2">Подарочные наборы</h3>
              <p className="text-white/80">Идеальный подарок для любителей натуральных продуктов.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
