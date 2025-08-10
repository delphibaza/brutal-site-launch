import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const products = [
    {
      id: 1,
      name: "TITAN TEST BOOST",
      price: "4 990 ₽",
      originalPrice: "6 990 ₽",
      description: "Премиальный тестобустер для максимальной силы",
      features: ["100% натуральный", "30 капсул", "Быстрый результат"],
      image: "/img/e5ae1533-1071-46ba-9092-2f56fda0b3dc.jpg"
    },
    {
      id: 2,
      name: "ALPHA BEARD OIL",
      price: "1 990 ₽",
      originalPrice: "2 490 ₽", 
      description: "Масло для бороды с древесным ароматом",
      features: ["Органическое", "50мл", "Питание и блеск"],
      image: "/img/717ad022-c97d-44b4-9e6c-03f8ae4f05b3.jpg"
    },
    {
      id: 3,
      name: "WARRIOR STACK",
      price: "7 990 ₽",
      originalPrice: "9 990 ₽",
      description: "Комплект: тестобустер + масло для бороды",
      features: ["Лучшая цена", "Полный уход", "Быстрая доставка"],
      image: "/img/45e553b2-90a8-4b07-99a4-24e309f5c10f.jpg"
    }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Отличный тестобустер! Чувствую прилив энергии уже через неделю приема."
    },
    {
      name: "Дмитрий К.", 
      rating: 5,
      text: "Масло для бороды просто огонь! Борода стала мягче и ухоженнее."
    },
    {
      name: "Сергей Р.",
      rating: 5, 
      text: "Заказывал комплект - результат превзошел ожидания. Рекомендую!"
    }
  ];

  const menuItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "catalog", label: "Каталог", icon: "Package" },
    { id: "about", label: "О нас", icon: "Users" },
    { id: "reviews", label: "Отзывы", icon: "Star" },
    { id: "delivery", label: "Доставка", icon: "Truck" },
    { id: "contacts", label: "Контакты", icon: "Phone" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Dumbbell" size={32} className="text-orange-500" />
              <h1 className="text-2xl font-bold">ALPHA STORE</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded transition-colors ${
                    activeSection === item.id
                      ? "bg-orange-500 text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              UNLEASH YOUR
              <span className="text-orange-500 block">INNER ALPHA</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Премиальные тестобустеры и средства для ухода за бородой для настоящих мужчин
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8">
                КАТАЛОГ ТОВАРОВ
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                УЗНАТЬ БОЛЬШЕ
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Catalog Section */}
      {activeSection === "catalog" && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">КАТАЛОГ</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <div className="h-48 bg-gray-800 rounded mb-4 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-white">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                      <span className="text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold">
                      ЗАКАЗАТЬ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">О НАС</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">НАША МИССИЯ</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Мы создали ALPHA STORE для современных мужчин, которые стремятся к совершенству. 
                  Наши продукты помогают раскрыть потенциал каждого мужчины.
                </p>
                <div className="flex items-center space-x-4">
                  <Icon name="Award" size={24} className="text-orange-500" />
                  <span>Только проверенные бренды</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">ПРЕИМУЩЕСТВА</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-orange-500 mr-3" />
                    100% оригинальная продукция
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-orange-500 mr-3" />
                    Быстрая доставка по всей России
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-orange-500 mr-3" />
                    Гарантия качества
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-orange-500 mr-3" />
                    Консультация специалистов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {activeSection === "reviews" && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">ОТЗЫВЫ</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">{review.name}</CardTitle>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-orange-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Delivery Section */}
      {activeSection === "delivery" && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">ДОСТАВКА</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <Icon name="Truck" size={32} className="text-orange-500 mb-4" />
                  <CardTitle className="text-white">КУРЬЕРСКАЯ ДОСТАВКА</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">Доставка по Москве и МО в течение 1-2 дней</p>
                  <ul className="space-y-2">
                    <li>• Бесплатно от 3000 ₽</li>
                    <li>• Стоимость: 300 ₽</li>
                    <li>• Время: 10:00 - 22:00</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <Icon name="Package" size={32} className="text-orange-500 mb-4" />
                  <CardTitle className="text-white">ПОЧТА РОССИИ</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">Доставка по всей России</p>
                  <ul className="space-y-2">
                    <li>• Срок: 5-14 дней</li>
                    <li>• Стоимость: 350 ₽</li>
                    <li>• Наложенный платеж</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Contacts Section */}
      {activeSection === "contacts" && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">КОНТАКТЫ</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-orange-500">СВЯЖИТЕСЬ С НАМИ</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={24} className="text-orange-500" />
                    <div>
                      <p className="font-semibold">+7 (495) 123-45-67</p>
                      <p className="text-gray-400 text-sm">Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={24} className="text-orange-500" />
                    <div>
                      <p className="font-semibold">info@alphastore.ru</p>
                      <p className="text-gray-400 text-sm">Ответим в течение часа</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="MessageCircle" size={24} className="text-orange-500" />
                    <div>
                      <p className="font-semibold">Telegram: @alphastore_bot</p>
                      <p className="text-gray-400 text-sm">Круглосуточная поддержка</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-orange-500">ОФИС</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" size={24} className="text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold">Москва, ул. Примерная, д. 1</p>
                      <p className="text-gray-400">м. Центральная</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 h-40 rounded flex items-center justify-center">
                    <Icon name="Map" size={48} className="text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Icon name="Dumbbell" size={24} className="text-orange-500" />
              <span className="font-bold">ALPHA STORE</span>
            </div>
            <div className="flex space-x-6">
              <Icon name="Instagram" size={24} className="text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Icon name="Twitter" size={24} className="text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Icon name="Youtube" size={24} className="text-gray-400 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>
          <Separator className="my-4 bg-gray-800" />
          <p className="text-center text-gray-400">© 2024 Alpha Store. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;