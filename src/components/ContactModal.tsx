import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onOpenOrderModal
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#201f1f] border border-[#353534] w-full max-w-xl rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#353534]/60 flex items-center justify-between bg-[#1c1b1b]">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] font-medium block">
              Panthera Atelier Baku
            </span>
            <h3 className="font-serif text-[22px] text-[#e5e2e1]">
              Əlaqə & Salon Ziyarəti
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#d2c3c5] hover:text-[#e5e2e1] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Info Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#1c1b1b] border border-[#353534]/50 rounded-lg">
              <div className="flex items-center gap-2 text-[#e4c18d] mb-1.5">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">
                  Ünvan
                </span>
              </div>
              <p className="text-sm text-[#e5e2e1] font-medium">Nizami küç. 142</p>
              <p className="text-xs text-[#d2c3c5]">Səbail rayonu, Bakı, Azərbaycan</p>
              <p className="text-[11px] text-[#e4c18d]/70 mt-1">Fəvvarələr Meydanı yaxınlığı</p>
            </div>

            <div className="p-4 bg-[#1c1b1b] border border-[#353534]/50 rounded-lg">
              <div className="flex items-center gap-2 text-[#e4c18d] mb-1.5">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">
                  İş Rejimi
                </span>
              </div>
              <p className="text-sm text-[#e5e2e1] font-medium">Salon: 09:00 — 23:00</p>
              <p className="text-xs text-[#d2c3c5]">Hər gün fasiləsiz</p>
              <p className="text-[11px] text-[#ffeaed] mt-1 font-medium">VIP Konsyerj: 24/7 Aktiv</p>
            </div>
          </div>

          {/* Direct Contact Buttons */}
          <div className="space-y-3">
            <a
              href="https://wa.me/994508002020?text=Salam,%20Panthera%20Atelier-lə%20əlaqə%20saxlayıram."
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 bg-[#1c1b1b] border border-[#e4c18d]/40 rounded-lg flex items-center justify-between hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ffeaed] text-[#42292f] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#e5e2e1]">WhatsApp Konsyerj</div>
                  <div className="text-xs text-[#d2c3c5]">+994 (50) 800 20 20</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#e4c18d] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href="tel:+994124902020"
              className="w-full py-3.5 px-4 bg-[#1c1b1b] border border-[#353534] rounded-lg flex items-center justify-between hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#353534] text-[#e4c18d] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#e5e2e1]">Şəhər Telefonu</div>
                  <div className="text-xs text-[#d2c3c5]">+994 (12) 490 20 20</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#d2c3c5] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 bg-[#1c1b1b] border border-[#353534] rounded-lg flex items-center justify-between hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#353534] text-[#e4c18d] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#e5e2e1]">Rəsmi İnstagram</div>
                  <div className="text-xs text-[#d2c3c5]">@panthera.baku</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#d2c3c5] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Quick Action */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenOrderModal();
              }}
              className="w-full py-3.5 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-wider rounded text-center hover:bg-[#f0c9d0] transition-colors cursor-pointer"
            >
              Onlayn Sifariş Formunu Aç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
