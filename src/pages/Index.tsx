import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Configurator from '@/components/Configurator';
import InfoSections from '@/components/InfoSections';

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

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <Separator />
      <Configurator
        ribbonWidth={ribbonWidth}
        setRibbonWidth={setRibbonWidth}
        ribbonColor={ribbonColor}
        setRibbonColor={setRibbonColor}
        logoFile={logoFile}
        handleLogoUpload={handleLogoUpload}
        quantity={quantity}
        setQuantity={setQuantity}
        length={length}
        setLength={setLength}
        scrollToSection={scrollToSection}
      />
      <InfoSections />
    </div>
  );
};

export default Index;
