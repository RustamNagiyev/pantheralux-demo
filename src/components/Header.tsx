import React, { useState } from 'react';

interface HeaderProps {
  currentPage: 'home' | 'catalog' | 'about';
  onNavigate: (page: 'home' | 'catalog' | 'about') => void;
  onOpenOrderModal: () => void;
  onOpenContactModal: () => void;
  onOpenVipModal: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenOrderModal,
  onOpenContactModal,
  onOpenVipModal,
  cartCount,
  onOpenCart
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#4f4446]/20 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-20 w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center group text-left transition-opacity duration-300 hover:opacity-85 cursor-pointer"
          >
            <img
              alt="Panthera Luxury Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UyuY8RQHsEQJUmNoDNgB54pX3_wnET9jRwvzeHGTFvMrNQKWtmaGmr09EuMKB7W8ZEyAcAeWDkBNvO6OlPhE0HB0D8zEQUGWidjsmcn-zls2rErnVfvJhClQHpzNh0ttWdo_W0wNPNTSrHZ58HntjVGH3PPTdrfGVCQAPYraqbbBPl4X0QLGKEPqOuusq8bQfBolCvgqBO4JkoT7Y0rbukk5n98NaOIVmNmGb22N11ZA09woNj22bFJ9w"
            />
          </button>
          <span className="hidden lg:inline-block font-sans text-[10px] uppercase tracking-[0.22em] text-[#e4c18d] pl-3 border-l border-[#e4c18d]/30">
            Boutique Atelier
          </span>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <button
            onClick={() => onNavigate('home')}
            className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
              currentPage === 'home'
                ? 'text-[#ffeaed] font-bold border-b border-[#ffeaed]/40 pb-0.5'
                : 'text-[#d2c3c5] hover:text-[#e5e2e1]'
            }`}
          >
            Ana səhifə
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
              currentPage === 'catalog'
                ? 'text-[#ffeaed] font-bold border-b border-[#ffeaed]/40 pb-0.5'
                : 'text-[#d2c3c5] hover:text-[#e5e2e1]'
            }`}
          >
            Kataloq
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
              currentPage === 'about'
                ? 'text-[#ffeaed] font-bold border-b border-[#ffeaed]/40 pb-0.5'
                : 'text-[#d2c3c5] hover:text-[#e5e2e1]'
            }`}
          >
            Haqqımızda
          </button>
          <button
            onClick={onOpenContactModal}
            className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#d2c3c5] hover:text-[#e5e2e1] transition-colors duration-200"
          >
            Əlaqə & Sifariş
          </button>
        </nav>

        {/* Right side CTAs */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Direct Phone / WhatsApp link */}
          <a
            className="hidden xl:flex items-center gap-2 text-[#e4c18d] hover:text-[#ffdead] transition-colors duration-200"
            href="https://wa.me/994554919940?text=Salam,%20Panthera%20Atelier-dən%20buket%20sifarişi%20ilə%20bağlı%20əlaqə%20saxlayıram."
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            <span className="font-sans text-[10px] tracking-wider font-medium">+994 (55) 491 99 40</span>
          </a>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#d2c3c5] hover:text-[#e5e2e1] transition-colors"
            title="Səbət"
            aria-label="Səbət"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ffeaed] text-[#42292f] text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Sifariş Et CTA button */}
          <button
            onClick={onOpenOrderModal}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-[#e4c18d]/40 text-[#e5e2e1] font-sans text-[11px] uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#e4c18d] hover:bg-[#e4c18d]/10 hover:text-white"
          >
            Sifariş et
          </button>

          {/* Profile / VIP Avatar button */}
          <button
            onClick={onOpenVipModal}
            className="w-8 h-8 rounded-full bg-[#ffeaed] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            title="Panthera Club Privé"
            aria-label="Panthera Club Privé"
          >
            <span className="material-symbols-outlined text-[#42292f] text-[18px]">person</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e5e2e1] hover:text-[#ffeaed]"
            aria-label="Menyu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1c1b1b] border-b border-[#353534] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className={`text-left font-sans text-[12px] uppercase tracking-[0.18em] py-2 ${
              currentPage === 'home' ? 'text-[#ffeaed] font-bold' : 'text-[#d2c3c5]'
            }`}
          >
            Ana səhifə
          </button>
          <button
            onClick={() => {
              onNavigate('catalog');
              setMobileMenuOpen(false);
            }}
            className={`text-left font-sans text-[12px] uppercase tracking-[0.18em] py-2 ${
              currentPage === 'catalog' ? 'text-[#ffeaed] font-bold' : 'text-[#d2c3c5]'
            }`}
          >
            Kataloq
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setMobileMenuOpen(false);
            }}
            className={`text-left font-sans text-[12px] uppercase tracking-[0.18em] py-2 ${
              currentPage === 'about' ? 'text-[#ffeaed] font-bold' : 'text-[#d2c3c5]'
            }`}
          >
            Haqqımızda
          </button>
          <button
            onClick={() => {
              onOpenContactModal();
              setMobileMenuOpen(false);
            }}
            className="text-left font-sans text-[12px] uppercase tracking-[0.18em] py-2 text-[#d2c3c5]"
          >
            Əlaqə & Sifariş
          </button>

          <div className="pt-4 border-t border-[#353534] flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenOrderModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-center"
            >
              Sifariş et
            </button>
            <a
              href="https://wa.me/994554919940"
              target="_blank"
              rel="noreferrer"
              className="text-center font-sans text-[11px] text-[#e4c18d] uppercase tracking-wider py-2 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              +994 (55) 491 99 40
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
