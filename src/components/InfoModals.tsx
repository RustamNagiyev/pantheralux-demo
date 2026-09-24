import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  type: 'delivery' | 'privacy' | null;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#201f1f] border border-[#353534] w-full max-w-xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#353534]/60 flex items-center justify-between bg-[#1c1b1b]">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] font-medium block">
              Panthera Standartları
            </span>
            <h3 className="font-serif text-[22px] text-[#e5e2e1]">
              {type === 'delivery' ? 'Çatdırılma və Şərtlər' : 'Məxfilik Siyasəti'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#d2c3c5] hover:text-[#e5e2e1] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#d2c3c5] font-light leading-relaxed">
          {type === 'delivery' ? (
            <>
              <div>
                <h4 className="font-serif text-base text-[#e5e2e1] mb-1">
                  1. Klimat Nəzarətli Lüks Çatdırılma
                </h4>
                <p>
                  Bütün kompozisiyalar Bakı şəhəri üzrə xüsusi soyuducu və rütubət tənzimləyici sistemlə təchiz edilmiş atelye avtomobilləri ilə təhvil verilir. Çiçəklər təbii təravətini və xüsusi su kapsullarındakı qidalandırıcı mühiti qoruyur.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base text-[#e5e2e1] mb-1">
                  2. 2 Saat Ərzində Ekspres Çatdırılma
                </h4>
                <p>
                  Təcili sifarişlər zamanı çiçəklər 120 dəqiqə ərzində ünvanınıza çatdırılır. Gecə saatlarında belə (23:00 — 08:00) 24/7 VIP konsyerj xidmətimiz aktivdir.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base text-[#e5e2e1] mb-1">
                  3. Xüsusi Qablaşdırma və Zərf Möhürü
                </h4>
                <p>
                  Hər buket İtalyan mat örtüyü, ipək lent və fərdi xəttatlıq təbrik kartı ilə təmin olunur. Müştərinin seçiminə əsasən xüsusi qızılı və ya bordo mum ştampla möhürlənir.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base text-[#e5e2e1] mb-1">
                  4. Ödəniş Üsulları
                </h4>
                <p>
                  Ödəniş nağd, onlayn bank köçürməsi, Visa/Mastercard və ya korporativ müştərilər üçün bank hesabı fakturası ilə qəbul edilir.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-serif text-base text-[#e5e2e1] mb-1">
                  Tam Məxfilik və Konfidensiallıq
                </h4>
                <p>
                  Panthera Luxury Floral Atelier müştərilərinin şəxsi məlumatlarının toxunulmazlığını 100% zəmanət altına alır.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base text-[#e5e2e1] mb-1">
                  Anonim Çatdırılma Zəmanəti
                </h4>
                <p>
                  Əgər sifariş zamanı "Anonim Çatdırılma" seçilmişsə, kuryerimiz və əməkdaşlarımız göndərənin şəxsiyyəti haqqında heç bir məlumatı qəbul edən şəxsə və ya üçüncü tərəflərə bildirmir.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base text-[#e5e2e1] mb-1">
                  Məlumatların Təhlükəsizliyi
                </h4>
                <p>
                  Telefon nömrəniz, çatdırılma ünvanınız və kart detallarınız yalnız cari sifarişin icrası üçün istifadə olunur və heç vaxt marketinq bazalarına ötürülmür.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-[#353534]/50">
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#ffeaed] text-[#42292f] font-sans text-xs uppercase font-semibold tracking-wider rounded"
            >
              Bağla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
