import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredients";
import Story from "@/components/Story";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Анимация появления элементов при прокрутке
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const checkReveals = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", checkReveals);
    checkReveals(); // Проверяем при первом рендере

    return () => window.removeEventListener("scroll", checkReveals);
  }, []);

  return (
    <div className="min-h-screen bg-tapiola-cream">
      <Navbar />
      <Hero />

      <div id="about" className="reveal">
        <section className="py-20 bg-tapiola-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://i.imgur.com/YkSgYZ5.jpg"
                  alt="Карельский чай"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-tapiola-gray-dark mb-4">
                  О бренде Тапиола
                </h2>
                <p className="text-tapiola-brown mb-4">
                  <strong>Тапиола</strong> – это премиальный бренд травяного чая
                  из Карелии, созданный с глубоким уважением к природе и
                  традициям северного края.
                </p>
                <p className="text-tapiola-brown mb-4">
                  Мы собираем травы в экологически чистых районах Карелии,
                  соблюдая устоявшиеся веками традиции сбора и сушки. Наш чай не
                  содержит искусственных ароматизаторов и добавок – только
                  чистая сила карельской природы.
                </p>
                <p className="text-tapiola-brown mb-6">
                  Каждая чашка Тапиолы – это погружение в атмосферу северных
                  лесов и озер, возможность ощутить гармонию и силу дикой
                  природы.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-montserrat font-medium text-tapiola-green-dark">
                      Органический
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-montserrat font-medium text-tapiola-green-dark">
                      Без ГМО
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-montserrat font-medium text-tapiola-green-dark">
                      Веганский
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-montserrat font-medium text-tapiola-green-dark">
                      Без глютена
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-montserrat font-medium text-tapiola-green-dark">
                      Локальный
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-montserrat font-medium text-tapiola-green-dark">
                      Эко-упаковка
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="reveal">
        <Products />
      </div>

      <div className="reveal">
        <Ingredients />
      </div>

      <div className="reveal">
        <Story />
      </div>

      <div className="reveal">
        <CTA />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
