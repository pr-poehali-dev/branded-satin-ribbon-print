import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const InfoSections = () => {
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
    <>
      <Separator />

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

      <footer className="bg-[#1A1F2C] text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="https://cdn.poehali.dev/projects/fc1c126a-0ad0-465a-84d0-e9176bb71a30/files/3c982754-9d23-4094-bc65-42281a21646f.jpg" alt="LENTA perfect logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold">LENTA <span className="text-[#D4AF37]">perfect</span></span>
          </div>
          <p className="text-white/70 text-sm">© 2024 LENTA perfect. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
};

export default InfoSections;