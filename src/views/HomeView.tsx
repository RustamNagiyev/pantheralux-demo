import React from 'react';
import { FEATURED_COLLECTION, FeaturedProduct } from '../data/products';

interface HomeViewProps {
  onNavigate: (page: 'home' | 'catalog' | 'about') => void;
  onSelectFeatured: (product: FeaturedProduct) => void;
  onOpenOrderModal: (productName?: string, price?: number) => void;
  onOpenBespokeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectFeatured,
  onOpenOrderModal,
  onOpenBespokeModal
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. FULL-SCREEN LUXURY HERO */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden -mt-20">
        {/* Visual Backdrop with Deep Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Panthera Grand Luxury Bouquet"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] scale-100 transition-transform duration-1000 ease-out hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX3y7spldDZJ_mirbegmTZc90xyivmc_Mus4neHi3XBN0JpREO9zC9dXlma6ZDAbkKWHijnyelzseNY6g6awTw8ri2b5Uw994LfqWNThwBY_vEZZ2bb6JjIgSlvVmqDfpRjZh4MSEio8IRFiZLF7JwmyBhQA3dDA_TEjuhmwV1LX19W5mdXbzOXQP5YbsGpLGZ40PeTB3cSG8dAJrWE1vdNB3NPpj0blA3cCw6Tq9LhFfzYdja2w0ATw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-[#131313]/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(19,19,19,0.3)_50%,rgba(19,19,19,0.9)_100%)]"></div>
        </div>

        {/* Hero Content Stage */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-36 pb-16 flex flex-col items-center text-center">
          {/* Atelier Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1b1b]/80 backdrop-blur-md mb-6 shadow-sm border border-[#e4c18d]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e4c18d]"></span>
            <span className="font-sans text-[10px] text-[#e4c18d] tracking-[0.28em] uppercase font-medium">
              ÖZƏL ATELYE • BAKI
            </span>
          </div>

          {/* Grand Playfair Display Headline */}
          <h1 className="font-serif text-[38px] sm:text-[46px] md:text-[56px] text-[#e5e2e1] max-w-4xl tracking-tight leading-[1.14] mb-6 drop-shadow-md">
            Hər Ləçəkdə Dərin Zəriflik və{' '}
            <span className="italic font-normal text-[#f0c9d0]">Əbədi Ehtiras</span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="font-sans text-[15px] sm:text-[17px] md:text-[18px] text-[#d2c3c5] max-w-2xl font-light tracking-wide leading-relaxed mb-8">
            Zövqlə seçilmiş elit qızılgüllər, unikal müəllif kompozisiyaları və Bakı daxilində qüsursuz, təhlükəsiz çatdırılma.
          </p>

          {/* Action Cluster */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={() => onOpenOrderModal()}
              className="w-full sm:w-auto px-10 py-4 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#f0c9d0] hover:shadow-[0_12px_36px_rgba(240,201,208,0.22)] text-center cursor-pointer"
            >
              Sifariş et
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('kolleksiya');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onNavigate('catalog');
                }
              }}
              className="group inline-flex items-center justify-center gap-2 font-sans text-[11px] text-[#e4c18d] hover:text-[#ffdead] uppercase tracking-[0.2em] py-3 transition-colors duration-200"
            >
              <span>Kataloqa baxış</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Micro Curator Spec */}
          <div className="mt-14 pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[#d2c3c5]/70 font-sans text-[10px] uppercase tracking-[0.22em]">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#e4c18d]">verified</span>
              <span>100% Hollandiya Sortları</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#e4c18d]/40 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#e4c18d]">schedule</span>
              <span>2 Saat Ərzində Qapıda</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL BRAND STATEMENT */}
      <section className="w-full bg-[#0e0e0e] relative py-16 md:py-24 border-y border-[#353534]/30">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#f0c9d0]/5 blur-3xl pointer-events-none rounded-full"></div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#e4c18d]/40"></span>
            <span className="font-sans text-[10px] text-[#e4c18d] uppercase tracking-[0.25em] font-medium">
              Atelier Fəlsəfəsi
            </span>
            <span className="h-px w-12 bg-[#e4c18d]/40"></span>
          </div>

          <blockquote className="font-serif text-[28px] sm:text-[34px] md:text-[40px] text-[#e5e2e1] font-normal leading-[1.3] tracking-tight mb-6 max-w-4xl mx-auto">
            “Biz sadəcə gül satmırıq; Bakının ən dəbdəbəli anlarını{' '}
            <span className="italic text-[#e4c18d]">sənət əsərinə</span> çeviririk.”
          </blockquote>

          <p className="font-sans text-[14px] sm:text-[15px] text-[#d2c3c5] max-w-xl mx-auto font-light tracking-wide leading-relaxed">
            Panthera — Qara mat kağızın arxitektural zərifliyi və təbii çiçəklərin nadir, toxunulmaz gözəlliyi.
          </p>

          {/* Signature Seal Icon */}
          <div className="mt-8 inline-flex items-center justify-center text-[#e4c18d]/70">
            <span className="material-symbols-outlined text-[28px]">spa</span>
          </div>
        </div>
      </section>

      {/* 3. SEÇİLMİŞ BUKETLƏR (FEATURED BOUQUET CARDS) */}
      <section className="w-full bg-[#131313] py-20" id="kolleksiya">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header with Asymmetric Meta Counter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#e4c18d] block mb-2 font-medium">
                Məhdud Buraxılış
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] text-[#e5e2e1] tracking-tight">
                Seçilmiş Kolleksiya
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-sans text-[13px] text-[#d2c3c5] max-w-xs text-left md:text-right font-light">
                Hər kompozisiya sifariş anında yalnız ən təzə premium qönçələrdən əllə toplanır.
              </p>
            </div>
          </div>

          {/* 4-Card Luxury Mosaic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURED_COLLECTION.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-[#1c1b1b] border border-[#353534]/30 rounded-none transition-all duration-500 hover:bg-[#201f1f] hover:border-[#e4c18d]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden bg-[#0e0e0e] cursor-pointer"
                  onClick={() => onSelectFeatured(item)}
                >
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    src={item.image}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0e0e0e]/90 backdrop-blur-sm border border-[#e4c18d]/20">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-[#e4c18d] font-medium">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3
                        onClick={() => onSelectFeatured(item)}
                        className="font-serif text-[20px] text-[#e5e2e1] hover:text-[#ffeaed] cursor-pointer transition-colors"
                      >
                        {item.name}
                      </h3>
                      <span className="font-sans text-[14px] text-[#e4c18d] font-medium tracking-wider">
                        {item.price} ₼
                      </span>
                    </div>
                    <p className="font-sans text-[13px] text-[#d2c3c5] line-clamp-2 mb-6 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onOpenOrderModal(item.name, item.price)}
                      className="w-full py-2.5 bg-[#2a2a2a] text-[#e5e2e1] hover:bg-[#ffeaed] hover:text-[#42292f] font-sans text-[10px] uppercase tracking-widest text-center transition-colors duration-200 cursor-pointer font-medium"
                    >
                      Sifariş et
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Catalog Link */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#e4c18d]/40 text-[#e4c18d] hover:bg-[#e4c18d]/10 hover:border-[#e4c18d] font-sans text-[11px] uppercase tracking-[0.2em] transition-all"
            >
              <span>Bütün Kataloqu Gör</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM DELIVERY & CONCIERGE HIGHLIGHT STRIP */}
      <section className="w-full bg-[#0e0e0e] py-16 md:py-20 border-y border-[#353534]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col p-6 bg-[#1c1b1b] border border-[#353534]/30 transition-colors duration-300 hover:bg-[#201f1f] hover:border-[#e4c18d]/20">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#353534] text-[#e4c18d] mb-4">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              </div>
              <h4 className="font-serif text-[18px] text-[#e5e2e1] mb-1.5 font-normal">
                Sürətli Çatdırılma
              </h4>
              <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                Bakı daxilində 2 saat ərzində xüsusi klimat-nəzarətli qoruyucu avtomobillərlə tam təravətli təhvil.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col p-6 bg-[#1c1b1b] border border-[#353534]/30 transition-colors duration-300 hover:bg-[#201f1f] hover:border-[#e4c18d]/20">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#353534] text-[#e4c18d] mb-4">
                <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
              </div>
              <h4 className="font-serif text-[18px] text-[#e5e2e1] mb-1.5 font-normal">
                Eksklüziv Seçim
              </h4>
              <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                Hollandiya hərraclarından və Ekvador plantasiyalarından birbaşa hava yolu ilə gətirilən seçmə sortlar.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col p-6 bg-[#1c1b1b] border border-[#353534]/30 transition-colors duration-300 hover:bg-[#201f1f] hover:border-[#e4c18d]/20">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#353534] text-[#e4c18d] mb-4">
                <span className="material-symbols-outlined text-[20px]">history_edu</span>
              </div>
              <h4 className="font-serif text-[18px] text-[#e5e2e1] mb-1.5 font-normal">
                Fərdi Toxunuş
              </h4>
              <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                Hər buketlə birlikdə qızılı mum ştampla möhürlənmiş zərf və xəttatlıq üslubunda əllə yazılmış təbrik mətni.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col p-6 bg-[#1c1b1b] border border-[#353534]/30 transition-colors duration-300 hover:bg-[#201f1f] hover:border-[#e4c18d]/20">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#353534] text-[#e4c18d] mb-4">
                <span className="material-symbols-outlined text-[20px]">concierge</span>
              </div>
              <h4 className="font-serif text-[18px] text-[#e5e2e1] mb-1.5 font-normal">
                24/7 Konsyerj
              </h4>
              <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                Gecə saatlarında belə təcili çatdırılma, özəl ziyafətlər və korporativ tədbirlər üçün fərdi florist xidməti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BESPOKE ATELIER BANNER */}
      <section className="w-full bg-[#131313] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative bg-[#1c1b1b] border border-[#353534]/40 overflow-hidden p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            {/* Subtle Background Artwork Shimmer */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#f0c9d0]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col items-start max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#e4c18d] text-[18px]">auto_awesome</span>
                <span className="font-sans text-[10px] text-[#e4c18d] uppercase tracking-[0.25em] font-medium">
                  Kutür Sifariş
                </span>
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] text-[#e5e2e1] mb-3 tracking-tight">
                Fərdi Kompozisiya İstəyirsiniz?
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#d2c3c5] font-light leading-relaxed">
                Baş floristlərimiz sizin və ya sevdiyiniz şəxsin xarakterinə, xüsusi anın ovqatına və interyerə uyğun təkrarsız kompozisiyanı fərdi şəkildə əllə aranjiman edir.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenBespokeModal}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#f0c9d0] hover:shadow-[0_10px_30px_rgba(240,201,208,0.2)] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Floristlə Əlaqə</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
