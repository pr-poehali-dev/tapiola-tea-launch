import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* История компании */}
          <div>
            <Badge className="bg-tapiola-green/20 text-tapiola-green-dark hover:bg-tapiola-green/30 mb-3">
              Наша история
            </Badge>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-tapiola-gray-dark mb-4">
              От карельских лесов до вашей чашки
            </h2>

            <div className="space-y-6 text-tapiola-brown">
              <p>
                История «Тапиолы» началась в 2018 году, когда семья Карповых,
                потомственные знатоки карельских трав, решили поделиться
                уникальными рецептами травяных сборов, передававшимися из
                поколения в поколение.
              </p>
              <p>
                Название «Тапиола» взято из карело-финской мифологии и означает
                «лесное царство», что отражает нашу глубокую связь с природой
                Карелии. Мы собираем травы в экологически чистых районах, следуя
                лунному календарю и древним традициям.
              </p>
              <p>
                Каждый этап производства – от сбора до упаковки – осуществляется
                с особой заботой. Мы не используем искусственные ароматизаторы
                или добавки, сохраняя все полезные свойства карельских трав.
              </p>

              <div className="pt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-tapiola-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Icon
                        name="CalendarDays"
                        className="text-tapiola-green-dark"
                        size={28}
                      />
                    </div>
                    <div className="font-montserrat font-bold text-tapiola-green-dark text-xl">
                      5+
                    </div>
                    <div className="text-tapiola-brown text-sm">лет опыта</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-tapiola-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Icon
                        name="Users"
                        className="text-tapiola-green-dark"
                        size={28}
                      />
                    </div>
                    <div className="font-montserrat font-bold text-tapiola-green-dark text-xl">
                      10k+
                    </div>
                    <div className="text-tapiola-brown text-sm">клиентов</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-tapiola-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Icon
                        name="LeafyGreen"
                        className="text-tapiola-green-dark"
                        size={28}
                      />
                    </div>
                    <div className="font-montserrat font-bold text-tapiola-green-dark text-xl">
                      15+
                    </div>
                    <div className="text-tapiola-brown text-sm">видов трав</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-tapiola-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Icon
                        name="ShoppingBag"
                        className="text-tapiola-green-dark"
                        size={28}
                      />
                    </div>
                    <div className="font-montserrat font-bold text-tapiola-green-dark text-xl">
                      8+
                    </div>
                    <div className="text-tapiola-brown text-sm">видов чая</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Изображения */}
          <div className="relative">
            <div className="relative z-10 ml-10 mb-10">
              <img
                src="https://i.imgur.com/gEqUm42.jpg"
                alt="Сбор трав в Карелии"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center">
                  <img
                    src="https://i.imgur.com/wZ50Blv.jpg"
                    alt="Основатель"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-montserrat font-medium text-tapiola-gray-dark">
                      Анна Карпова
                    </h4>
                    <p className="text-tapiola-brown text-sm">
                      Основатель Тапиола
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-sm text-tapiola-brown">
                  "Мы создаем не просто чай, а настоящий карельский опыт в
                  каждой чашке."
                </div>
              </div>
            </div>

            <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-tapiola-green/10 rounded-lg -z-10" />

            <img
              src="https://i.imgur.com/Jp56lVA.jpg"
              alt="Процесс производства чая"
              className="absolute bottom-0 right-0 w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
