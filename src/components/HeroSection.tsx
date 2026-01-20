import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1A1F2C] mb-6">
            Брендированные сатиновые ленты для вашего бизнеса
          </h2>
          <p className="text-xl text-[#8E9196] mb-8 max-w-2xl mx-auto">
            Премиальное качество печати на сатиновых лентах. Индивидуальный дизайн, быстрое производство, доставка по всей России.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('configurator')} className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 text-white">
              Создать дизайн
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="border-[#1A1F2C] text-[#1A1F2C]">
              Посмотреть портфолио
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <Card className="hover:scale-105 transition-transform duration-300 border-gray-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Palette" className="text-[#D4AF37]" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Индивидуальный дизайн</h3>
              <p className="text-[#8E9196] text-sm">Полная кастомизация: ваш логотип, цвета и размеры</p>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform duration-300 border-gray-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Zap" className="text-[#D4AF37]" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрое производство</h3>
              <p className="text-[#8E9196] text-sm">Стандартный срок 5-7 дней, срочное — 2-3 дня</p>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform duration-300 border-gray-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Award" className="text-[#D4AF37]" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Премиум качество</h3>
              <p className="text-[#8E9196] text-sm">100% сатин, стойкая печать, насыщенные цвета</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
