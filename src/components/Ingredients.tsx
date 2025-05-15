
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Ingredient {
  id: number;
  name: string;
  description: string;
  image: string;
  benefits: string[];
}

const ingredients: Ingredient[] = [
  {
    id: 1,
    name: "Иван-чай",
    description: "Традиционный русский травяной чай с мягким вкусом и множеством полезных свойств. Собран вручную в экологически чистых районах Карелии.",
    image: "https://images.unsplash.com/photo-1498601590624-b04e6c7dc878?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    benefits: ["Укрепляет иммунитет", "Богат витаминами", "Снимает воспаление"]
  },
  {
    id: 2,
    name: "Черника",
    description: "Ягоды и листья черники, собранные в карельских лесах. Придают чаю легкий ягодный аромат и приятную кислинку.",
    image: "https://images.unsplash.com/photo-1596591868231-84a8df375c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    benefits: ["Улучшает зрение", "Антиоксидант", "Нормализует обмен веществ"]
  },
  {
    id: 3,
    name: "Мята",
    description: "Свежая мята, добавляющая освежающие нотки и приятное послевкусие. Выращена в экологически чистых условиях.",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    benefits: ["Успокаивает нервную систему", "Облегчает дыхание", "Улучшает пищеварение"]
  },
  {
    id: 4,
    name: "Чабрец",
    description: "Душистый чабрец карельского происхождения. Добавляет чаю пряный аромат и терпкость.",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    benefits: ["Антисептик", "Отхаркивающее действие", "Успокаивающий эффект"]
  },
  {
    id: 5,
    name: "Зверобой",
    description: "Солнечный зверобой, собранный на карельских лугах. Придает чаю легкую горчинку и целебные свойства.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    benefits: ["Антидепрессивное действие", "Противовоспалительные свойства", "Укрепляет сосуды"]
  }
];

export default function Ingredients() {
  const [activeIngredient, setActiveIngredient] = useState(ingredients[0]);
  
  return (
    <section id="ingredients" className="py-20 bg-tapiola-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-tapiola-green/20 text-tapiola-green-dark hover:bg-tapiola-green/30 mb-3">
            100% натуральный состав
          </Badge>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-tapiola-gray-dark mb-4">
            Из чего состоит наш чай
          </h2>
          <p className="text-tapiola-brown max-w-2xl mx-auto">
            Мы тщательно отбираем и собираем карельские травы, сохраняя их целебные свойства. 
            Каждый ингредиент вносит свой вклад в неповторимый вкус и аромат чая Тапиола.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Список ингредиентов */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-medium text-lg text-tapiola-gray-dark mb-4">
                Основные компоненты
              </h3>
              <ul className="space-y-3">
                {ingredients.map(ingredient => (
                  <li key={ingredient.id}>
                    <button 
                      className={`w-full text-left px-4 py-3 rounded-md transition-all ${
                        activeIngredient.id === ingredient.id 
                          ? 'bg-tapiola-green-dark text-white font-medium'
                          : 'bg-tapiola-cream/50 text-tapiola-brown hover:bg-tapiola-green/10'
                      }`}
                      onClick={() => setActiveIngredient(ingredient)}
                    >
                      <div className="flex items-center">
                        <span>{ingredient.name}</span>
                        <Icon 
                          name="ChevronRight" 
                          size={18} 
                          className={`ml-auto transition-transform ${
                            activeIngredient.id === ingredient.id ? 'transform rotate-90' : ''
                          }`}
                        />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Детали активного ингредиента */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={activeIngredient.image} 
                    alt={activeIngredient.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-2xl text-tapiola-gray-dark mb-3">
                    {activeIngredient.name}
                  </h3>
                  <p className="text-tapiola-brown mb-6">
                    {activeIngredient.description}
                  </p>
                  
                  <h4 className="font-montserrat font-medium text-tapiola-gray-dark mb-3">
                    Полезные свойства:
                  </h4>
                  <ul className="space-y-2">
                    {activeIngredient.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" className="text-tapiola-green-dark mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-tapiola-brown">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
