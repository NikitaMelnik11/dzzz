import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, Heart, Coffee, Send, CheckCircle, Clock, Users } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Клиентов", icon: Users },
    { number: "95%", label: "Довольных клиентов", icon: CheckCircle },
    { number: "24/7", label: "Поддержка", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Нифига
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#Главная" className="text-gray-600 hover:text-purple-600 transition-all hover:scale-105">Главная</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-all hover:scale-105">О нас</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-all hover:scale-105">Услуги</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-all hover:scale-105">Контакты</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all hover:scale-105">
                Связаться
              </button>
            </div>
            
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/80 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded-md">Главная</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded-md">О нас</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded-md">Услуги</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-purple-50 rounded-md">Контакты</a>
            </div>
          </div>
        )}
      </nav>

      {/* Главный герой */}
      <div className={`max-w-7xl mx-auto px-4 pt-32 pb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Создавайте будущее вместе с нами
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Мы помогаем компаниям трансформировать их идеи в успешные цифровые продукты
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all hover:scale-105 inline-flex items-center">
              Начать проект
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:shadow-lg transition-all hover:scale-105">
              Узнать больше
            </button>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <stat.icon className="text-purple-600 mb-4" size={40} />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Карточки услуг */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Наши услуги
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Star className="text-purple-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-4">Веб-разработка</h3>
            <p className="text-gray-600 mb-4">Создаем современные и быстрые веб-приложения с использованием передовых технологий.</p>
            <a href="#" className="text-purple-600 inline-flex items-center hover:text-purple-700">
              Подробнее
              <ChevronRight size={20} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Heart className="text-purple-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-4">UI/UX Дизайн</h3>
            <p className="text-gray-600 mb-4">Разрабатываем интуитивные интерфейсы и создаем уникальный пользовательский опыт.</p>
            <a href="#" className="text-purple-600 inline-flex items-center hover:text-purple-700">
              Подробнее
              <ChevronRight size={20} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Coffee className="text-purple-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-4">Консультации</h3>
            <p className="text-gray-600 mb-4">Помогаем компаниям выбрать правильное направление в цифровой трансформации.</p>
            <a href="#" className="text-purple-600 inline-flex items-center hover:text-purple-700">
              Подробнее
              <ChevronRight size={20} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Ваше имя"
              className="px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:border-purple-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:border-purple-600"
            />
            <textarea
              placeholder="Ваше сообщение"
              className="px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:border-purple-600 md:col-span-2"
              rows={4}
            />
            <button className="md:col-span-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center">
              Отправить сообщение
              <Send size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                BrandName
              </h4>
              <p className="text-gray-400">Создаем инновационные решения для развития вашего бизнеса</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@company.com</li>
                <li>Телефон: +3804342432423</li>
                <li>Адрес: ул. Терпила</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Подписка на новости</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 BrandName. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;