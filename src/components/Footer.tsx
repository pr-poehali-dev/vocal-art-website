
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-vocal-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-vocal-purple text-3xl">♪</span>
              <span className="font-playfair font-bold text-xl text-white">
                Vocal<span className="text-vocal-purple">Art</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Школа вокала, где каждый находит свой уникальный голос. Мы помогаем раскрыть талант и обрести уверенность на сцене.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-vocal-purple transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-vocal-purple transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-vocal-purple transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-vocal-purple transition-colors">
                <Icon name="VK" fallback="Globe" size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-vocal-purple transition-colors">Главная</a>
              </li>
              <li>
                <a href="#directions" className="text-gray-300 hover:text-vocal-purple transition-colors">Направления</a>
              </li>
              <li>
                <a href="#teachers" className="text-gray-300 hover:text-vocal-purple transition-colors">Преподаватели</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-vocal-purple transition-colors">Галерея</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-vocal-purple transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="text-vocal-purple mt-1 shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Музыкальная, д. 42</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-vocal-purple shrink-0" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-vocal-purple shrink-0" />
                <span className="text-gray-300">info@vocalart.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-vocal-purple shrink-0" />
                <span className="text-gray-300">Пн-Пт: 10:00 - 21:00<br />Сб-Вс: 11:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} VocalArt. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
