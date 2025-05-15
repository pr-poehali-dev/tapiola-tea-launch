
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1546848760-0c6bf3a70509?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
          alt="Карельский пейзаж" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tapiola-cream/80 to-tapiola-cream/90" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-montserrat font-bold text-tapiola-gray-dark leading-tight mb-4">
              Вкус карельской природы в каждой чашке
            </h1>
            <p className="text-lg md:text-xl text-tapiola-brown mb-8">
              Натуральный травяной чай, собранный в экологически чистых лесах Карелии. 
              Мы бережно относимся к природе и сохраняем все полезные свойства растений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-tapiola-green-dark hover:bg-tapiola-green text-white px-8 py-6 text-lg">
                Купить сейчас
              </Button>
              <Button variant="outline" className="border-tapiola-green hover:bg-tapiola-cream/80 text-tapiola-green-dark px-8 py-6 text-lg">
                Подробнее
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center mt-8 space-x-4">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Покупатель" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Покупатель" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Покупатель" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Icon key={i} name="Star" className="w-4 h-4 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-tapiola-brown">
                  5.0 • Более 500 довольных клиентов
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-tapiola-green/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-tapiola-green/20 rounded-full" />
            
            <img 
              src="https://images.unsplash.com/photo-1536304575888-ccb70eeef59b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Травяной чай Тапиола" 
              className="relative z-10 rounded-lg shadow-2xl max-w-md mx-auto transform -rotate-3"
            />
            
            <img 
              src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Карельские травы" 
              className="absolute bottom-12 -left-12 w-48 h-48 object-cover rounded-lg shadow-xl transform rotate-6 z-20 border-4 border-white"
            />
          </div>
        </div>
        
        {/* Прокрутка вниз */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-tapiola-brown text-sm mb-2">Узнать больше</span>
          <Icon name="ChevronDown" className="text-tapiola-green-dark" />
        </div>
      </div>
    </section>
  );
}
