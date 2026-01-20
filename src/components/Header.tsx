import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/projects/fc1c126a-0ad0-465a-84d0-e9176bb71a30/files/3c982754-9d23-4094-bc65-42281a21646f.jpg" alt="LENTA perfect logo" className="h-10 w-10 object-contain" />
            <h1 className="text-2xl font-bold text-[#1A1F2C]">LENTA <span className="text-[#D4AF37]">perfect</span></h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Главная</button>
            <button onClick={() => scrollToSection('configurator')} className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Конфигуратор</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-[#D4AF37] transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Контакты</button>
          </nav>

          <Button onClick={() => scrollToSection('configurator')} className="bg-[#D4AF37] text-[#1A1F2C] hover:bg-[#D4AF37]/90 font-semibold">
            Создать дизайн
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;