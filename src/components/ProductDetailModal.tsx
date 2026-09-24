import React from 'react';
import { FloralProduct } from '../data/products';

interface ProductDetailModalProps {
  product: FloralProduct | null;
  onClose: () => void;
  onAddToCart: (product: FloralProduct) => void;
  onOpenOrderModal: (productName?: string, price?: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenOrderModal
}) => {
  if (!product) return null;

  const whatsappMessage = `Salam, Panthera Atelye. ${product.name} (${product.refCode}, ${product.price} AZN) haqqında məlumat almaq və sifariş etmək istəyirəm.`;
  const whatsappUrl = `https://wa.me/994508002020?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#201f1f] border border-[#353534] w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          aria-label="Bağla"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#131313]/60 text-[#d2c3c5] hover:text-[#e5e2e1] hover:bg-[#131313] transition-colors"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Preview */}
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#0e0e0e] border border-[#353534]/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0e0e0e]/90 backdrop-blur-md rounded-full border border-[#e4c18d]/30">
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#e4c18d] font-medium">
                  {product.badge}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#e4c18d] font-medium">
                    Ref. {product.refCode}
                  </span>
                  {product.rating && (
                    <span className="flex items-center gap-1 text-[#e4c18d] text-xs">
                      <span className="material-symbols-outlined text-[14px]">star</span>
                      <span>{product.rating}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-[26px] text-[#e5e2e1] mb-2 leading-tight">
                  {product.name}
                </h3>

                <p className="font-sans text-[14px] text-[#d2c3c5] font-light leading-relaxed mb-4">
                  {product.fullDesc}
                </p>

                {/* Composition Highlights */}
                <div className="space-y-2 mb-6 pt-2 border-t border-[#353534]/50">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] block font-medium">
                    Kompozisiya Tərkibi
                  </span>
                  <ul className="space-y-1">
                    {product.flowersIncluded.map((flower, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[12px] text-[#d2c3c5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c18d]/60"></span>
                        <span>{flower}</span>
                      </li>
                    ))}
                  </ul>

                  {product.origin && (
                    <div className="pt-2 text-[11px] text-[#d2c3c5]/80 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-[#e4c18d]">location_on</span>
                      <span>Mənşə: {product.origin}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 border-t border-[#353534]/50">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#d2c3c5]">
                    Qiymət
                  </span>
                  <span className="font-serif text-[26px] text-[#e4c18d] font-medium">
                    {product.price} ₼
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <a
                    className="w-full py-3.5 px-4 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2 rounded transition-colors hover:bg-[#f0c9d0] text-center"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WhatsApp-la Sürətli Sifariş
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                      className="py-3 px-3 bg-[#2a2a2a] text-[#e5e2e1] hover:bg-[#353534] font-sans text-[10px] uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                      <span>Səbətə Əlavə Et</span>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenOrderModal(product.name, product.price);
                      }}
                      className="py-3 px-3 border border-[#e4c18d]/40 text-[#e4c18d] hover:bg-[#e4c18d]/10 font-sans text-[10px] uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>Rəsmi Sifariş</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
