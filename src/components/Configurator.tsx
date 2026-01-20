import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ConfiguratorProps {
  ribbonWidth: number;
  setRibbonWidth: (width: number) => void;
  ribbonColor: string;
  setRibbonColor: (color: string) => void;
  logoFile: string | null;
  handleLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  length: number;
  setLength: (length: number) => void;
  scrollToSection: (section: string) => void;
}

const Configurator = ({
  ribbonWidth,
  setRibbonWidth,
  ribbonColor,
  setRibbonColor,
  logoFile,
  handleLogoUpload,
  quantity,
  setQuantity,
  length,
  setLength,
  scrollToSection
}: ConfiguratorProps) => {
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

  return (
    <section id="configurator" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4">Конфигуратор лент</h2>
          <p className="text-[#8E9196]">Создайте уникальный дизайн в режиме реального времени</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
  );
};

export default Configurator;
