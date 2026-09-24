import React, { useState } from 'react';
import { CATALOG_PRODUCTS } from '../data/products';

interface OrderModalProps {
  isOpen: boolean;
  initialProductName?: string;
  initialPrice?: number;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  initialProductName,
  initialPrice,
  onClose
}) => {
  const [selectedProduct, setSelectedProduct] = useState(
    initialProductName || 'Nocturne Noir 101'
  );
  const [recipientName, setRecipientName] = useState('');
  const [phone, setPhone] = useState('+994 ');
  const [district, setDistrict] = useState('Səbail');
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('2 saat ərzində (Təcili)');
  const [waxSeal, setWaxSeal] = useState('Qızılı Mum (İmza)');
  const [cardMessage, setCardMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentProductData = CATALOG_PRODUCTS.find((p) => p.name === selectedProduct);
  const price = currentProductData ? currentProductData.price : initialPrice || 450;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    return `*PANTHERA ATELIER - YENİ SİFARİŞ*\n\n` +
      `🌸 *Buket:* ${selectedProduct} (${price} ₼)\n` +
      `👤 *Müştəri / Qəbul edən:* ${recipientName || 'Qeyd olunmayıb'}\n` +
      `📞 *Əlaqə Nömrəsi:* ${phone}\n` +
      `📍 *Ünvan:* Bakı şəhəri, ${district} r-nu, ${address || 'Dəqiqləşdiriləcək'}\n` +
      `⏰ *Çatdırılma Vaxtı:* ${deliveryDate || 'Bu gün'} | ${timeSlot}\n` +
      `💌 *Zərf Möhürü:* ${waxSeal}\n` +
      `✍️ *Təbrik Mətni (Xəttatlıq):* ${cardMessage ? `"${cardMessage}"` : 'Yoxdur'}\n` +
      `🤫 *Məxfilik:* ${isAnonymous ? 'Bəli, tam anonim çatdırılma' : 'Xeyr'}\n\n` +
      `Zəhmət olmasa sifarişi təsdiqləyin.`;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(constructWhatsAppMessage());
    window.open(`https://wa.me/994508002020?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#201f1f] border border-[#353534] w-full max-w-xl rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#353534]/60 flex items-center justify-between bg-[#1c1b1b]">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] font-medium block">
              Panthera Konsyerj
            </span>
            <h3 className="font-serif text-[22px] text-[#e5e2e1]">
              {isSubmitted ? 'Sifarişiniz Qeydə Alındı' : 'Eksklüziv Sifariş Rəsmiləşdirməsi'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#d2c3c5] hover:text-[#e5e2e1] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#ffeaed] text-[#42292f] mx-auto flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[32px]">check</span>
              </div>
              <div>
                <h4 className="font-serif text-[24px] text-[#e5e2e1] mb-2">
                  Təşəkkür edirik!
                </h4>
                <p className="font-sans text-[14px] text-[#d2c3c5] font-light max-w-md mx-auto leading-relaxed">
                  Sifariş detallarınız sistemdə qeydə alındı. Floristlərimiz dərhal kompozisiyanı hazırlamağa başlasın deyə WhatsApp vasitəsilə təsdiqləyin.
                </p>
              </div>

              {/* Order Summary Card */}
              <div className="bg-[#1c1b1b] p-4 rounded-lg border border-[#353534] text-left text-xs text-[#d2c3c5] space-y-2">
                <div className="flex justify-between border-b border-[#353534]/50 pb-2">
                  <span className="text-[#e4c18d] uppercase tracking-wider">Buket:</span>
                  <span className="font-medium text-[#e5e2e1]">{selectedProduct}</span>
                </div>
                <div className="flex justify-between border-b border-[#353534]/50 pb-2">
                  <span className="text-[#e4c18d] uppercase tracking-wider">Məbləğ:</span>
                  <span className="font-serif text-sm text-[#e4c18d] font-bold">{price} ₼</span>
                </div>
                <div className="flex justify-between border-b border-[#353534]/50 pb-2">
                  <span className="text-[#e4c18d] uppercase tracking-wider">Ünvan:</span>
                  <span className="text-[#e5e2e1]">{district}, {address || 'Bakı'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#e4c18d] uppercase tracking-wider">Zərf:</span>
                  <span className="text-[#e5e2e1]">{waxSeal}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3.5 px-4 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-[#f0c9d0] transition-colors"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  WhatsApp-la Təsdiqlə
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3.5 bg-[#2a2a2a] text-[#e5e2e1] font-sans text-[11px] uppercase tracking-wider rounded hover:bg-[#353534] transition-colors"
                >
                  Bağla
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selection */}
              <div>
                <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                  Seçilmiş Buket
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                >
                  {CATALOG_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.price} ₼) - {p.badge}
                    </option>
                  ))}
                </select>
              </div>

              {/* Recipient & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                    Ad & Soyad
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Məs. Nərgiz Məmmədova"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                    Əlaqə Nömrəsi
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+994 (50) 000 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                  />
                </div>
              </div>

              {/* Delivery District & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                    Bakı Rayonu
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                  >
                    <option value="Səbail">Səbail</option>
                    <option value="Nəsimi">Nəsimi</option>
                    <option value="Nərimanov">Nərimanov</option>
                    <option value="Yasamal">Yasamal</option>
                    <option value="Xətai">Xətai</option>
                    <option value="Binəqədi">Binəqədi</option>
                    <option value="Digər">Digər / Şüvəlan / Mərdəkan</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                    Çatdırılma Ünvanı
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Məs. Nizami küç. 45, mənzil 12"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                  />
                </div>
              </div>

              {/* Delivery Date & Time slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                    Tarix
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                    Vaxt Aralığı
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                  >
                    <option value="2 saat ərzində (Təcili)">2 saat ərzində (Təcili ekspres)</option>
                    <option value="10:00 - 13:00">10:00 - 13:00 (Səhər)</option>
                    <option value="14:00 - 18:00">14:00 - 18:00 (Gündüz)</option>
                    <option value="19:00 - 23:00">19:00 - 23:00 (Axşam)</option>
                    <option value="Gecə 23:00+">Gecə 23:00+ (VIP gecə çatdırılması)</option>
                  </select>
                </div>
              </div>

              {/* Wax Seal Option */}
              <div>
                <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                  Zərf Möhürü (Fransız Mumu)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Qızılı Mum (İmza)', 'Dərin Bordo Mum', 'Onyx Qara Mum'].map((seal) => (
                    <button
                      type="button"
                      key={seal}
                      onClick={() => setWaxSeal(seal)}
                      className={`py-2 px-2 text-[11px] rounded border text-center transition-all ${
                        waxSeal === seal
                          ? 'border-[#e4c18d] bg-[#e4c18d]/10 text-[#e4c18d] font-semibold'
                          : 'border-[#353534] text-[#d2c3c5] hover:border-[#4f4446]'
                      }`}
                    >
                      {seal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calligraphy Greeting Message */}
              <div>
                <label className="block font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1.5 font-medium">
                  Xəttatlıq İlə Əllə Yazılan Təbrik Kartı (İstəyə görə)
                </label>
                <textarea
                  rows={2}
                  placeholder="Məs. Doğum günün mübarək, əbədi zəriflik səninlə olsun..."
                  value={cardMessage}
                  onChange={(e) => setCardMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-[#1c1b1b] border border-[#353534] text-[#e5e2e1] text-sm focus:border-[#e4c18d] outline-none"
                />
              </div>

              {/* Anonymous Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer pt-1 text-xs text-[#d2c3c5]">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="accent-[#e4c18d] w-4 h-4 rounded"
                />
                <span>Məxfi / Anonim çatdırılma (Göndərənin adı qeyd edilmir)</span>
              </label>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-[#353534]/60 flex items-center justify-between">
                <div>
                  <span className="font-sans text-[10px] uppercase text-[#d2c3c5] tracking-widest block">
                    Yekun Məbləğ
                  </span>
                  <span className="font-serif text-[24px] text-[#e4c18d] font-bold">
                    {price} ₼
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#ffeaed] text-[#42292f] font-sans text-[11px] font-semibold uppercase tracking-wider rounded hover:bg-[#f0c9d0] transition-colors cursor-pointer"
                >
                  Sifarişi Tamamla
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
