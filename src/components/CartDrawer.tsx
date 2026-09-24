import React from 'react';
import { FloralProduct } from '../data/products';

export interface CartItem {
  product: FloralProduct;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onOpenOrderModal: (productName?: string, price?: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onOpenOrderModal
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckoutViaWhatsApp = () => {
    if (items.length === 0) return;
    const itemsList = items
      .map((item) => `• ${item.product.name} (x${item.quantity}) - ${item.product.price * item.quantity} ₼`)
      .join('\n');
    const msg =
      `*PANTHERA ATELIER - SƏBƏT SİFARİŞİ*\n\n` +
      `Seçilmiş Buketlər:\n${itemsList}\n\n` +
      `💰 *Cəmi Məbləğ:* ${total} ₼\n` +
      `📍 *Çatdırılma:* Bakı daxilində lüks klimat-nəzarətli avtomobillə (Ödənişsiz)\n\n` +
      `Sifarişimi qeydiyyata almağınızı xahiş edirəm.`;
    window.open(`https://wa.me/994508002020?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#0e0e0e]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#1c1b1b] border-l border-[#353534] h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#353534] flex items-center justify-between bg-[#131313]">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] font-medium block">
              Alış-veriş
            </span>
            <h3 className="font-serif text-[20px] text-[#e5e2e1]">Səbətiniz</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#d2c3c5] hover:text-[#e5e2e1] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center text-[#d2c3c5] space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#e4c18d]/40">
                shopping_bag
              </span>
              <p className="font-serif text-lg text-[#e5e2e1]">Səbətiniz hazırda boşdur.</p>
              <p className="text-xs text-[#d2c3c5] font-light max-w-xs mx-auto">
                Kataloqdan zövqünüzə uyğun eksklüziv buket seçin.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-3 bg-[#201f1f] rounded-lg border border-[#353534]/50"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded bg-[#0e0e0e] shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif text-base text-[#e5e2e1]">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 0)}
                        className="text-[#d2c3c5] hover:text-[#ffb4ab] text-sm"
                        title="Sil"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                    <span className="text-[10px] text-[#e4c18d] uppercase tracking-wider block">
                      Ref. {item.product.refCode}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-serif text-sm text-[#e4c18d] font-bold">
                      {item.product.price * item.quantity} ₼
                    </span>

                    <div className="flex items-center gap-2 bg-[#2a2a2a] rounded px-2 py-0.5 border border-[#353534]">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, Math.max(0, item.quantity - 1))
                        }
                        className="text-xs text-[#d2c3c5] hover:text-white px-1"
                      >
                        -
                      </button>
                      <span className="text-xs font-mono text-[#e5e2e1]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="text-xs text-[#d2c3c5] hover:text-white px-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Total and Order CTAs */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#353534] bg-[#131313] space-y-4">
            <div className="space-y-1.5 text-xs text-[#d2c3c5]">
              <div className="flex justify-between">
                <span>Çatdırılma (Bakı daxili):</span>
                <span className="text-[#e4c18d] font-medium">Ödənişsiz (Klimat nəzarətli)</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-[#353534]/50">
                <span className="font-sans uppercase text-[#e5e2e1] font-semibold tracking-wider">
                  Cəmi:
                </span>
                <span className="font-serif text-xl text-[#e4c18d] font-bold">{total} ₼</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCheckoutViaWhatsApp}
                className="w-full py-3.5 px-4 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-[#f0c9d0] transition-colors"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>WhatsApp-la Sürətli Təsdiq</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenOrderModal(items[0]?.product.name, total);
                }}
                className="w-full py-3 px-4 bg-[#2a2a2a] text-[#e5e2e1] font-sans text-[10px] uppercase tracking-wider rounded hover:bg-[#353534] transition-colors"
              >
                Ünvan və Detal Formunu Doldur
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
