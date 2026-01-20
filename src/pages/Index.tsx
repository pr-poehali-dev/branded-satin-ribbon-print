import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [ribbonWidth, setRibbonWidth] = useState(25);
  const [ribbonColor, setRibbonColor] = useState('#1A1F2C');
  const [logoFile, setLogoFile] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(100);
  const [length, setLength] = useState(100);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Калькулятор стоимости
  const calculatePrice = () => {
    const basePrice = {
      15: 8,
      25: 12,
      40: 18,
      50: 25
    }[ribbonWidth] || 12;

    const lengthPrice = basePrice * length;
    const discount = quantity >= 500 ? 0.15 : quantity >= 300 ? 0.10 : quantity >= 200 ? 0.05 : 0;
    const totalPrice = lengthPrice * quantity * (1 - discount);

    return {
      basePrice,
      lengthPrice,
      discount: discount * 100,
      totalPrice: Math.round(totalPrice)
    };
  };

  const priceInfo = calculatePrice();

  const ribbonWidthOptions = [15, 25, 40, 50];
  const ribbonColorOptions = [
    { name: 'Тёмно-синий', value: '#1A1F2C' },
    { name: 'Красный', value: '#DC2626' },
    { name: 'Золотой', value: '#D4AF37' },
    { name: 'Белый', value: '#FFFFFF' },
    { name: 'Чёрный', value: '#000000' },
    { name: 'Бордовый', value: '#7F1D1D' },
  ];

  const portfolioItems = [
    { title: 'Корпоративные ленты для банка', category: 'Финансы', image: '🏦' },
    { title: 'Премиум упаковка для бутика', category: 'Ритейл', image: '👗' },
    { title: 'Брендированные ленты для автосалона', category: 'Автомобили', image: '🚗' },
    { title: 'Свадебная коллекция', category: 'События', image: '💍' },
    { title: 'Ленты для юридической компании', category: 'Услуги', image: '⚖️' },
    { title: 'Фармацевтический бренд', category: 'Медицина', image: '💊' },
  ];

  const faqItems = [
    {
      question: 'Какой минимальный тираж для заказа?',
      answer: 'Минимальный тираж — от 100 метров. Для крупных корпоративных заказов предусмотрены специальные условия и скидки.'
    },
    {
      question: 'Какие способы печати вы используете?',
      answer: 'Мы используем профессиональную термотрансферную и шелкографию в зависимости от тиража и требований к качеству.'
    },
    {
      question: 'Сколько времени занимает изготовление?',
      answer: 'Стандартный срок производства — 5-7 рабочих дней. Возможно срочное изготовление за 2-3 дня с доплатой.'
    },
    {
      question: 'Можно ли заказать образец перед основным тиражом?',
      answer: 'Да, мы предоставляем платный образец для утверждения дизайна перед запуском основного тиража.'
    },
    {
      question: 'Какие форматы логотипов вы принимаете?',
      answer: 'Принимаем векторные форматы: AI, EPS, PDF, SVG. Также возможна работа с качественными растровыми изображениями PNG в высоком разрешении.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Award" className="text-[#D4AF37]" size={28} />
              <h1 className="text-2xl font-bold text-[#1A1F2C]">RibbonPrint</h1>
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

      {/* Hero Section */}
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

          {/* Features */}
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

      <Separator />

      {/* Configurator Section */}
      <section id="configurator" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4">Конфигуратор лент</h2>
            <p className="text-[#8E9196]">Создайте уникальный дизайн в режиме реального времени</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Preview */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-2">Предпросмотр</h3>
                  <p className="text-sm text-[#8E9196]">Так будет выглядеть ваша лента</p>
                </div>
                
                <div className="relative mt-8">
                  <div 
                    className="mx-auto shadow-lg transition-all duration-300"
                    style={{
                      width: '100%',
                      height: `${ribbonWidth * 3}px`,
                      backgroundColor: ribbonColor,
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: ribbonColor === '#FFFFFF' ? '1px solid #e5e7eb' : 'none'
                    }}
                  >
                    {logoFile && (
                      <img 
                        src={logoFile} 
                        alt="Logo preview" 
                        className="max-h-[80%] max-w-[200px] object-contain"
                        style={{
                          filter: ribbonColor === '#FFFFFF' || ribbonColor === '#D4AF37' ? 'none' : 'brightness(0) invert(1)'
                        }}
                      />
                    )}
                    {!logoFile && (
                      <span className="text-xs text-white/50">Загрузите логотип</span>
                    )}
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E9196]">Ширина:</span>
                      <span className="font-medium">{ribbonWidth} мм</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E9196]">Цвет:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: ribbonColor }} />
                        <span className="font-medium">{ribbonColorOptions.find(c => c.value === ribbonColor)?.name}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E9196]">Метраж:</span>
                      <span className="font-medium">{length} м</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E9196]">Количество:</span>
                      <span className="font-medium">{quantity} шт</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Calculator */}
              <Card className="mt-6 border-[#D4AF37] border-2 bg-gradient-to-br from-[#D4AF37]/5 to-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Calculator" className="text-[#D4AF37]" size={24} />
                    <h3 className="text-xl font-semibold">Калькулятор стоимости</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-[#8E9196]">Базовая цена (за метр):</span>
                      <span className="font-semibold">{priceInfo.basePrice} ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-[#8E9196]">За {length} метров:</span>
                      <span className="font-semibold">{priceInfo.lengthPrice} ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-[#8E9196]">Количество {quantity} шт:</span>
                      <span className="font-semibold">{priceInfo.lengthPrice * quantity} ₽</span>
                    </div>
                    {priceInfo.discount > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-[#D4AF37]">
                        <span className="text-[#D4AF37] font-medium flex items-center gap-1">
                          <Icon name="Percent" size={16} />
                          Скидка за объём:
                        </span>
                        <span className="font-semibold text-[#D4AF37]">-{priceInfo.discount}%</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-3 bg-[#1A1F2C] text-white px-4 rounded-lg mt-4">
                      <span className="text-lg font-semibold">Итого:</span>
                      <span className="text-2xl font-bold">{priceInfo.totalPrice.toLocaleString()} ₽</span>
                    </div>
                  </div>

                  {quantity >= 200 && (
                    <div className="mt-4 p-3 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-lg text-sm">
                      <div className="flex items-start gap-2">
                        <Icon name="Gift" className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={16} />
                        <div>
                          <span className="font-semibold text-[#D4AF37]">Выгодное предложение!</span>
                          <p className="text-[#8E9196] mt-1">
                            {quantity >= 500 ? 'Скидка 15% за объём от 500 штук' : 
                             quantity >= 300 ? 'Скидка 10% за объём от 300 штук' : 
                             'Скидка 5% за объём от 200 штук'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div>
                <Label className="text-base font-semibold mb-3 block">Ширина ленты</Label>
                <div className="grid grid-cols-2 gap-2">
                  {ribbonWidthOptions.map(width => (
                    <button
                      key={width}
                      onClick={() => setRibbonWidth(width)}
                      className={`p-3 border-2 rounded-lg transition-all font-medium ${
                        ribbonWidth === width 
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1A1F2C]' 
                          : 'border-gray-200 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      {width} мм
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Цвет ленты</Label>
                <div className="grid grid-cols-2 gap-3">
                  {ribbonColorOptions.map(color => (
                    <button
                      key={color.value}
                      onClick={() => setRibbonColor(color.value)}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        ribbonColor === color.value ? 'border-[#D4AF37] shadow-md' : 'border-gray-200 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div 
                        className="w-full h-10 rounded mb-2" 
                        style={{ 
                          backgroundColor: color.value,
                          border: color.value === '#FFFFFF' ? '1px solid #e5e7eb' : 'none'
                        }} 
                      />
                      <span className="text-xs font-medium">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="length" className="text-base font-semibold mb-3 block">Метраж (м)</Label>
                <Input
                  id="length"
                  type="number"
                  min="50"
                  max="1000"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="text-lg font-semibold"
                />
                <p className="text-xs text-[#8E9196] mt-1">От 50 до 1000 метров</p>
              </div>

              <div>
                <Label htmlFor="quantity" className="text-base font-semibold mb-3 block">Количество (шт)</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="100"
                  max="10000"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="text-lg font-semibold"
                />
                <p className="text-xs text-[#8E9196] mt-1">Минимум 100 штук</p>
              </div>

              <div>
                <Label htmlFor="logo" className="text-base font-semibold mb-3 block">Ваш логотип</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#D4AF37] transition-colors cursor-pointer">
                  <input
                    id="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <label htmlFor="logo" className="cursor-pointer">
                    <Icon name="Upload" className="mx-auto mb-2 text-[#8E9196]" size={32} />
                    <p className="text-sm font-medium mb-1">Загрузите логотип</p>
                    <p className="text-xs text-[#8E9196]">PNG, JPG, SVG до 5 МБ</p>
                  </label>
                </div>
              </div>

              <Button size="lg" className="w-full bg-[#D4AF37] text-[#1A1F2C] hover:bg-[#D4AF37]/90 font-semibold" onClick={() => scrollToSection('contacts')}>
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4">Портфолио</h2>
            <p className="text-[#8E9196]">Примеры наших работ для различных отраслей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300 overflow-hidden group cursor-pointer border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl">
                  {item.image}
                </div>
                <CardContent className="pt-4">
                  <div className="text-xs font-medium text-[#D4AF37] mb-1">{item.category}</div>
                  <h3 className="font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4">Часто задаваемые вопросы</h2>
            <p className="text-[#8E9196]">Ответы на популярные вопросы о нашем сервисе</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6 border-gray-200">
                <AccordionTrigger className="text-left font-semibold hover:text-[#D4AF37]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#8E9196]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4">Контакты</h2>
            <p className="text-[#8E9196]">Свяжитесь с нами для обсуждения заказа</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-[#D4AF37] mt-1" size={20} />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-[#8E9196]">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-[#D4AF37] mt-1" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-[#8E9196]">info@ribbonprint.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-[#D4AF37] mt-1" size={20} />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-[#8E9196]">г. Москва, ул. Примерная, д. 123</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-[#D4AF37] mt-1" size={20} />
                  <div>
                    <div className="font-medium">Режим работы</div>
                    <div className="text-[#8E9196]">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Оставить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите о вашем заказе..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Award" className="text-[#D4AF37]" size={24} />
            <span className="text-xl font-bold">RibbonPrint</span>
          </div>
          <p className="text-white/70 text-sm">© 2024 RibbonPrint. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
