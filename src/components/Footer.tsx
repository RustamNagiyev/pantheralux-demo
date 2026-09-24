import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'catalog' | 'about') => void;
  onOpenBespokeModal: () => void;
  onOpenPrivacyModal: () => void;
  onOpenDeliveryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBespokeModal,
  onOpenPrivacyModal,
  onOpenDeliveryModal
}) => {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#353534]/40">
      <div className="w-full px-6 md:px-12 lg:px-16 pt-16 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-14">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                alt="Panthera Luxury Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UyuY8RQHsEQJUmNoDNgB54pX3_wnET9jRwvzeHGTFvMrNQKWtmaGmr09EuMKB7W8ZEyAcAeWDkBNvO6OlPhE0HB0D8zEQUGWidjsmcn-zls2rErnVfvJhClQHpzNh0ttWdo_W0wNPNTSrHZ58HntjVGH3PPTdrfGVCQAPYraqbbBPl4X0QLGKEPqOuusq8bQfBolCvgqBO4JkoT7Y0rbukk5n98NaOIVmNmGb22N11ZA09woNj22bFJ9w"
              />
              <span className="font-serif text-[22px] tracking-wider uppercase text-[#e5e2e1]">
                Panthera
              </span>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#e4c18d]">
              Atelier Floral • Bakı, Azərbaycan
            </p>
            <p className="font-sans text-[13px] text-[#d2c3c5] max-w-sm pt-1 font-light leading-relaxed">
              Xüsusi floral aranjimanlar, müəllif kompozisiyaları və dəbdəbəli məkan dekorasiyası. Gecə saatlarında belə zərif botanika sənəti.
            </p>
          </div>

          {/* Naviqasiya links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#e4c18d] mb-2 font-medium">
              Naviqasiya
            </span>
            <button
              onClick={() => {
                onNavigate('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-sans text-[13px] text-[#d2c3c5] hover:text-[#ffeaed] transition-colors duration-200"
            >
              Kataloq
            </button>
            <button
              onClick={onOpenBespokeModal}
              className="text-left font-sans text-[13px] text-[#d2c3c5] hover:text-[#ffeaed] transition-colors duration-200"
            >
              Xüsusi Sifariş
            </button>
            <button
              onClick={onOpenDeliveryModal}
              className="text-left font-sans text-[13px] text-[#d2c3c5] hover:text-[#ffeaed] transition-colors duration-200"
            >
              Çatdırılma və Şərtlər
            </button>
            <button
              onClick={onOpenPrivacyModal}
              className="text-left font-sans text-[13px] text-[#d2c3c5] hover:text-[#ffeaed] transition-colors duration-200"
            >
              Məxfilik
            </button>
          </div>

          {/* Əlaqə & Atelier */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#e4c18d] mb-2 font-medium">
              Əlaqə & Atelier
            </span>
            <div className="flex items-start gap-2 text-[#d2c3c5]">
              <span className="material-symbols-outlined text-[16px] text-[#e4c18d] mt-0.5">location_on</span>
              <span className="font-sans text-[13px]">Nizami küç. 142, Səbail rayonu, Bakı</span>
            </div>
            <a
              href="tel:+994554919940"
              className="flex items-center gap-2 text-[#d2c3c5] hover:text-[#ffeaed] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#e4c18d]">call</span>
              <span className="font-sans text-[13px]">Tel: +994 (55) 491 99 40</span>
            </a>
            <a
              href="https://wa.me/994554919940"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#d2c3c5] hover:text-[#ffeaed] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#e4c18d]">chat</span>
              <span className="font-sans text-[13px]">WhatsApp: +994 (55) 491 99 40</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#d2c3c5] hover:text-[#ffeaed] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#e4c18d]">photo_camera</span>
              <span className="font-sans text-[13px]">Instagram: @panthera.baku</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#353534]/50 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#d2c3c5]/80">
            © 2025 PANTHERA LUXURY FLORAL ATELIER. BÜTÜN HÜQUQLAR QORUNUR.
          </p>
          <span className="font-sans text-[10px] tracking-[0.22em] text-[#e4c18d]/70 uppercase">
            Bakı, Azərbaycan
          </span>
        </div>
      </div>
    </footer>
  );
};
