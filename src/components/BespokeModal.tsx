import React, { useState } from 'react';

interface BespokeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeModal: React.FC<BespokeModalProps> = ({ isOpen, onClose }) => {
  const [budget, setBudget] = useState('500 - 800 ₼');
  const [occasion, setOccasion] = useState('Ad Günü / Yubiley');
  const [palette, setPalette] = useState('Qara & Tünd Qırmızı (İmza Panthera)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('+994 ');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleStartWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*PANTHERA ATELIER - FƏRDİ FLORİSTİKA SİFARİŞİ*\n\n` +
      `👤 *Müştəri:* ${clientName || 'Ad qeyd edilməyib'}\n` +
      `📞 *Əlaqə:* ${clientPhone}\n` +
      `🎯 *Məqsəd/Tədbir:* ${occasion}\n` +
      `💰 *Büdcə:* ${budget}\n` +
      `🎨 *Rəng Qamması:* ${palette}\n` +
      `📝 *Xüsusi İstəklər:* ${notes || 'Yoxdur'}\n\n` +
      `Baş floristlə fərdi kompozisiya dizaynını müzakirə etmək istəyirəm.`;
    window.open(`https://wa.me/994554919940?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#201f1f] border border-[#353534] w-full max-w-lg rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#353534]/60 flex items-center justify-between bg-[#1c1b1b]">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-[#e4c18d] text-sm">auto_awesome</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] font-medium">
                Haute Couture Botanika
              </span>
            </div>
            <h3 className="font-serif text-[22px] text-[#e5e2e1]">
              Fərdi Kompozisiya İstəyi
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#d2c3c5] hover:text-[#e5e2e1] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <form onSubmit={handleStartWhatsApp} className="p-6 overflow-y-auto space-y-4">
          <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
            Baş floristlərimiz sizin zövqünüzə, tədbirin ovqatına və məkana uyğun xüsusi, tək nüsxədə aranjiman dizayn edir.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                Adınız
              </label>
              <input
                type="text"
                required
                placeholder="Ad & Soyad"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
              />
            </div>
            <div>
              <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                Telefon Nömrəniz
              </label>
              <input
                type="tel"
                required
                placeholder="+994 (55) 000 00 00"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
              Tədbir / Səbəb
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
            >
              <option value="Ad Günü / Yubiley">Ad Günü / Yubiley</option>
              <option value="Evlilik Təklifi">Evlilik Təklifi</option>
              <option value="Toy / Nişan Masası">Toy / Nişan Masası</option>
              <option value="Korporativ / Qala Ziyafəti">Korporativ / Qala Ziyafəti</option>
              <option value="İnteryer / Rezidensiya Dekoru">İnteryer / Rezidensiya Dekoru</option>
              <option value="Özəl Jest">Özəl Jest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                Planlaşdırılan Büdcə
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
              >
                <option value="300 - 500 ₼">300 - 500 ₼</option>
                <option value="500 - 800 ₼">500 - 800 ₼</option>
                <option value="800 - 1500 ₼">800 - 1500 ₼</option>
                <option value="1500 ₼ və yuxarı (VIP Monumental)">1500 ₼ və yuxarı (VIP Monumental)</option>
              </select>
            </div>

            <div>
              <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                Rəng Qamması
              </label>
              <select
                value={palette}
                onChange={(e) => setPalette(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
              >
                <option value="Qara & Tünd Qırmızı (İmza Panthera)">Qara & Tünd Qırmızı (İmza)</option>
                <option value="Pudra Çəhrayı & Krem Pionlar">Pudra Çəhrayı & Krem</option>
                <option value="Qızılı Şampan & İsti Qürub">Qızılı Şampan & Şaftalı</option>
                <option value="Qar Ağlığı & Minimalist Monoxrom">Qar Ağlığı & Monoxrom</option>
                <option value="Dərin Bordo & Qara Anthurium">Bordo & Qara Anthurium</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
              Əlavə Təfərrüatlar & Sevilən Çiçəklər
            </label>
            <textarea
              rows={3}
              placeholder="Məs. Sevdiyi güllər pion və fransız qızılgülüdür, qızıl detallar çox olsun..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
            />
          </div>

          <div className="pt-4 border-t border-[#353534]/60 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 text-xs uppercase tracking-wider text-[#d2c3c5] hover:text-[#e5e2e1]"
            >
              Ləğv et
            </button>
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-wider rounded hover:bg-[#f0c9d0] transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Floristlə WhatsApp-da Başla</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
