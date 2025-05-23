import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Таежный сбор",
    description:
      "Классический карельский сбор с иван-чаем, чабрецом и ягодами черники.",
    price: 390,
    image: "https://i.imgur.com/fTc2mxF.jpg",
    ingredients: ["Иван-чай", "Чабрец", "Черника", "Мята"],
  },
  {
    id: 2,
    name: "Лесные ягоды",
    description:
      "Насыщенный ягодный вкус черники, брусники и клюквы с легкими нотками мяты.",
    price: 420,
    image: "https://i.imgur.com/KFsKdzs.jpg",
    ingredients: ["Черника", "Брусника", "Клюква", "Мята"],
  },
  {
    id: 3,
    name: "Карельское утро",
    description:
      "Бодрящий сбор с зверобоем, чабрецом и листьями смородины. Идеален для начала дня.",
    price: 350,
    image: "https://i.imgur.com/GVj7kzq.jpg",
    ingredients: ["Зверобой", "Чабрец", "Смородина"],
  },
  {
    id: 4,
    name: "Вечерний релакс",
    description:
      "Успокаивающий сбор с мятой, мелиссой и лавандой. Помогает расслабиться после долгого дня.",
    price: 380,
    image: "https://i.imgur.com/SgqQwEg.jpg",
    isNew: true,
    ingredients: ["Мята", "Мелисса", "Лаванда", "Ромашка"],
  },
];

export default function Products() {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const showMore = () => {
    setVisibleProducts(products.length);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-tapiola-gray-dark mb-4">
            Наши травяные чаи
          </h2>
          <p className="text-tapiola-brown max-w-2xl mx-auto">
            Откройте для себя разнообразие вкусов и ароматов карельских трав в
            нашей коллекции премиальных травяных чаев. Каждый сбор создан с
            заботой о вашем здоровье и наслаждении.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-tapiola-green text-tapiola-green-dark hover:bg-tapiola-green/10"
              onClick={showMore}
            >
              Показать больше
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
