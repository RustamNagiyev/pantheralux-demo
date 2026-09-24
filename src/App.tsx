/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { AboutView } from './views/AboutView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { OrderModal } from './components/OrderModal';
import { BespokeModal } from './components/BespokeModal';
import { ContactModal } from './components/ContactModal';
import { VipModal } from './components/VipModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { InfoModals } from './components/InfoModals';
import { CATALOG_PRODUCTS, FloralProduct, FeaturedProduct } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog' | 'about'>('home');
  const [selectedProduct, setSelectedProduct] = useState<FloralProduct | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderModalDefaults, setOrderModalDefaults] = useState<{
    name?: string;
    price?: number;
  }>({});
  const [isBespokeModalOpen, setIsBespokeModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [infoModalType, setInfoModalType] = useState<'delivery' | 'privacy' | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const handleNavigate = (page: 'home' | 'catalog' | 'about') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (productName?: string, price?: number) => {
    setOrderModalDefaults({ name: productName, price });
    setIsOrderModalOpen(true);
  };

  const handleSelectFeatured = (featured: FeaturedProduct) => {
    const catalogMatch = CATALOG_PRODUCTS.find((p) => p.refCode === featured.refCode) || {
      id: featured.id,
      name: featured.name,
      price: featured.price,
      refCode: featured.refCode,
      category: 'mono' as const,
      badge: featured.badge,
      shortDesc: featured.desc,
      fullDesc: featured.desc,
      image: featured.image,
      altText: featured.name,
      flowersIncluded: ['Seçilmiş Hollandiya Qızılgülləri', 'Mat Qara Dizayner Bükümü', 'İpək Lent'],
      origin: 'Niderland & Ekvador'
    };
    setSelectedProduct(catalogMatch);
  };

  const handleAddToCart = (product: FloralProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Quick subtle feedback banner
    setNotification(`"${product.name}" səbətə əlavə edildi`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#f0c9d0] selection:text-[#42292f]">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 bg-[#1c1b1b] border border-[#e4c18d] text-[#e5e2e1] px-4 py-2.5 rounded shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <span className="material-symbols-outlined text-[#e4c18d] text-sm">check_circle</span>
          <span className="text-xs font-medium">{notification}</span>
        </div>
      )}

      {/* Main Persistent Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onOpenVipModal={() => setIsVipModalOpen(true)}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main View Container */}
      <main className="w-full pt-20 bg-[#131313] flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectFeatured={handleSelectFeatured}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
          />
        )}

        {currentPage === 'catalog' && (
          <CatalogView
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}
      </main>

      {/* Main Persistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
        onOpenDeliveryModal={() => setInfoModalType('delivery')}
        onOpenPrivacyModal={() => setInfoModalType('privacy')}
      />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenOrderModal={handleOpenOrderModal}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        initialProductName={orderModalDefaults.name}
        initialPrice={orderModalDefaults.price}
        onClose={() => setIsOrderModalOpen(false)}
      />

      <BespokeModal
        isOpen={isBespokeModalOpen}
        onClose={() => setIsBespokeModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      <VipModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onOpenOrderModal={handleOpenOrderModal}
      />

      <InfoModals
        isOpen={infoModalType !== null}
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />
    </div>
  );
}
