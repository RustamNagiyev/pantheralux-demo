import React, { useState } from 'react';
import { CATALOG_PRODUCTS, FloralProduct } from '../data/products';

interface CatalogViewProps {
  onSelectProduct: (product: FloralProduct) => void;
  onOpenOrderModal: (productName?: string, price?: number) => void;
  onOpenBespokeModal: () => void;
  onAddToCart: (product: FloralProduct) => void;
}

type CategoryType = 'all' | 'mono' | 'composition' | 'luxury-basket' | 'events' | 'rare-peony';

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'all', label: 'Hamısı' },
  { id: 'mono', label: 'Mono Buketlər' },
  { id: 'composition', label: 'Kompozisiyalar' },
  { id: 'luxury-basket', label: 'Lüks Səbətlər' },
  { id: 'events', label: 'Bayram & Tədbir Buketləri' },
  { id: 'rare-peony', label: 'Nadir Növlər & Pionlar' },
];

export const CatalogView: React.FC<CatalogViewProps> = ({
  onSelectProduct,
  onOpenOrderModal,
  onOpenBespokeModal,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = CATALOG_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.refCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-[#f0c9d0]/5 blur-[120px] rounded-full"></div>

        {/* 1. PAGE HEADER SECTION */}
        <header className="w-full px-6 md:px-12 lg:px-16 pt-12 md:pt-16 pb-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-6 h-px bg-[#e4c18d]/60"></span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#e4c18d] font-medium">
              Panthera Kolleksiyası
            </span>
            <span className="inline-block w-6 h-px bg-[#e4c18d]/60"></span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[40px] text-[#e5e2e1] tracking-tight max-w-2xl text-balance">
            Eksklüziv Buketlər və Çiçək Sənəti
          </h1>

          <p className="font-sans text-[14px] sm:text-[15px] text-[#d2c3c5] max-w-xl mt-4 font-light leading-relaxed">
            Hər biri atelye floristlərimiz tərəfindən əl işi olaraq dizayn edilən premium kompozisiyalar və nadir botanika inciləri.
          </p>

          {/* Decorative Fine Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#e4c18d]/40 to-transparent mt-8"></div>
        </header>

        {/* 2. CATEGORY FILTER TABS */}
        <nav aria-label="Buket Kateqoriyaları" className="w-full px-6 md:px-12 mb-12">
          <div className="max-w-5xl mx-auto flex items-center justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar text-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-sans text-[11px] tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2a2a2a] text-[#ffeaed] shadow-sm font-semibold border border-[#e4c18d]/40'
                    : 'bg-[#1c1b1b] text-[#d2c3c5] hover:text-[#e5e2e1] hover:bg-[#201f1f] border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Optional Search filter if desired */}
          {searchQuery && (
            <div className="text-center mt-3">
              <span className="text-xs text-[#d2c3c5]">
                "{searchQuery}" üçün nəticələr (
                <button onClick={() => setSearchQuery('')} className="underline text-[#e4c18d] ml-1">
                  təmizlə
                </button>
                )
              </span>
            </div>
          )}
        </nav>

        {/* 3. PRODUCT GRID SECTION */}
        <section className="w-full px-6 md:px-12 lg:px-16 pb-20 max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center text-[#d2c3c5]">
              <span className="material-symbols-outlined text-4xl mb-3 text-[#e4c18d]/50">spa</span>
              <p className="font-serif text-xl text-[#e5e2e1]">Bu kateqoriyada hazırda buket tapılmadı.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 px-6 py-2 bg-[#2a2a2a] text-[#ffeaed] text-xs uppercase tracking-wider"
              >
                Bütün Kolleksiyaya Bax
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="product-item group flex flex-col bg-[#1c1b1b] rounded-xl overflow-hidden shadow-md border border-[#353534]/40 transition-all duration-500 hover:shadow-2xl hover:bg-[#201f1f] hover:border-[#e4c18d]/30"
                >
                  {/* Image Container with Badge and Hover Button */}
                  <div
                    className="relative aspect-[4/5] w-full overflow-hidden bg-[#0e0e0e] cursor-pointer"
                    onClick={() => onSelectProduct(product)}
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      data-alt={product.altText}
                      alt={product.name}
                      src={product.image}
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="font-sans text-[10px] tracking-widest uppercase px-3 py-1 bg-[#0e0e0e]/85 backdrop-blur-md text-[#e4c18d] rounded-full shadow-sm border border-[#e4c18d]/20">
                        {product.badge}
                      </span>
                    </div>

                    {/* Quick Order Hover Button */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col gap-2">
                      <a
                        className="w-full py-3 px-4 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2 rounded shadow-lg hover:bg-[#f0c9d0] transition-colors"
                        href={`https://wa.me/994554919940?text=${encodeURIComponent(
                          `Salam, Panthera Atelye. ${product.name} (${product.refCode}, ${product.price} AZN) haqqında məlumat almaq və sifariş etmək istəyirəm.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="material-symbols-outlined text-base">shopping_bag</span>
                        Sürətli Sifariş (WhatsApp)
                      </a>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-sans text-[10px] tracking-wider uppercase text-[#e4c18d]/80">
                          Ref. {product.refCode}
                        </span>
                        {product.rating ? (
                          <span className="flex items-center gap-1 text-[#e4c18d] text-xs">
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            <span className="font-sans text-[10px]">{product.rating}</span>
                          </span>
                        ) : (
                          <span className="font-sans text-[10px] text-[#e4c18d]">
                            {product.category === 'events'
                              ? 'Qala Tədbirləri'
                              : product.category === 'rare-peony'
                              ? 'Məhdud Say'
                              : product.category === 'composition'
                              ? product.name.includes('Onyx')
                                ? 'Qızıl Vurğu'
                                : 'Mövsümi'
                              : product.name.includes('Eternity')
                              ? '3 İl Qalıcı'
                              : product.name.includes('Atelier Bespoke')
                              ? 'Şəxsi Sifariş'
                              : 'Klassik'}
                          </span>
                        )}
                      </div>

                      <h2
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-[22px] text-[#e5e2e1] mb-2 tracking-normal hover:text-[#ffeaed] cursor-pointer transition-colors"
                      >
                        {product.name}
                      </h2>
                      <p className="font-sans text-[13px] text-[#d2c3c5] font-light line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#353534]/40">
                      <div className="flex flex-col">
                        <span className="font-sans text-[10px] uppercase text-[#d2c3c5] tracking-wider">
                          Qiymət
                        </span>
                        <span className="font-serif text-[22px] text-[#e4c18d] font-medium">
                          {product.price} ₼
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          aria-label="Səbətə əlavə et"
                          title="Səbətə əlavə et"
                          onClick={() => onAddToCart(product)}
                          className="p-2.5 rounded-full bg-[#201f1f] text-[#d2c3c5] hover:text-[#ffeaed] hover:bg-[#2a2a2a] transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                        </button>
                        <button
                          aria-label="Ətraflı bax"
                          title="Ətraflı bax"
                          className="p-2.5 rounded-full bg-[#353534] text-[#e5e2e1] hover:text-[#ffeaed] hover:bg-[#e4c18d] hover:text-[#42292f] transition-colors"
                          onClick={() => onSelectProduct(product)}
                        >
                          <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 4. BESPOKE STRIP / CALL TO ACTION */}
        <section className="w-full px-6 md:px-12 lg:px-16 pb-20 max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-[#201f1f] border border-[#353534]/40 rounded-2xl p-8 md:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Ambient subtle gradient inside */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#f0c9d0]/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex flex-col max-w-2xl text-left z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#e4c18d] text-lg">auto_awesome</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] font-medium">
                  Fərdi Floristika Xidməti
                </span>
              </div>
              <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] text-[#e5e2e1] mb-3">
                Kataloqda istədiyiniz kompozisiyanı tapmadınız?
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#d2c3c5] font-light leading-relaxed">
                Şəxsi floristimiz sizin zövqünüzə, tədbirin konsepsiyasına və ya hədiyyə etmək istədiyiniz şəxsin xarakterinə uyğun bənzərsiz, unikal buket ərsəyə gətirsin.
              </p>
            </div>

            <div className="flex-shrink-0 z-10 w-full sm:w-auto">
              <button
                onClick={onOpenBespokeModal}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#ffeaed] text-[#42292f] rounded font-sans text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-[#f0c9d0] shadow-md cursor-pointer"
              >
                <span>Fərdi Sifariş Et</span>
                <span className="material-symbols-outlined ml-2 text-base">north_east</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
