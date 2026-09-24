import React from 'react';

interface AboutViewProps {
  onNavigate: (page: 'home' | 'catalog' | 'about') => void;
  onOpenContactModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenContactModal
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: EDITORIAL HERO & INTRO */}
      <section className="relative w-full overflow-hidden bg-[#131313] px-6 md:px-12 lg:px-16 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#e4c18d] opacity-60"></span>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] font-medium">
              Atelier Tarixçəsi & Fəlsəfə
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-[38px] sm:text-[46px] md:text-[56px] text-[#e5e2e1] tracking-tight leading-none mb-3">
                Çiçək Sənətinə <br />
                <span className="italic font-normal text-[#ffeaed]">Yeni Dəbdəbəli</span> Baxış
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="font-sans text-[16px] sm:text-[18px] text-[#d2c3c5] font-light leading-relaxed">
                Panthera Atelye — Bakının qəlbində təbiətin ən nadir incilərini heykəltəraşlıq dəqiqliyi ilə sənətə çevirən məkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DRAMATIC VISUAL EXHIBIT & MANIFESTO */}
      <section className="w-full bg-[#0e0e0e] px-6 md:px-12 lg:px-16 py-16 md:py-24 relative border-y border-[#353534]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual Presentation */}
            <div className="lg:col-span-7 relative group">
              <div className="relative overflow-hidden rounded-lg bg-[#2a2a2a] shadow-2xl border border-[#353534]/40">
                <img
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="Panthera Archive Masterpiece"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtaBdesCNlPldlqY2iaJGfN2qsh5QDcJk9FaoezaHcwrnu7i8Nh70MPcGpBCnzHnYMxuaKN6v3WEsOj0M-P0Y5nN7iY8ZOcYcuAVTnyiyf33wrgukz0QmCS0vIs-DVuHgBNVDqvnvRGxKX5SCg1HaQQzrBCXAgiRYZ7wGqkaA9pqT6TBL_XF1Rytl_XO1z6d9q3rjSx6zcjE0lLNzc2FD63tFc7L1TiTi-B_oofaPB8Mgq5pinIpl1jQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <span className="font-sans text-[10px] tracking-widest text-[#e4c18d] uppercase bg-[#131313]/85 backdrop-blur-md px-3 py-1.5 rounded border border-[#e4c18d]/20">
                    İmza Kompozisiyası • No. 04
                  </span>
                  <span className="font-sans text-[10px] tracking-widest text-[#d2c3c5] uppercase">
                    Baku Atelier Archive
                  </span>
                </div>
              </div>
              {/* Editorial offset ornament */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e4c18d]/5 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            {/* Manifesto Text */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pl-0 lg:pl-4">
              <div className="space-y-1">
                <span className="font-sans text-[10px] text-[#e4c18d] uppercase tracking-widest font-medium">
                  Manifesto
                </span>
                <h2 className="font-serif text-[32px] sm:text-[38px] text-[#e5e2e1]">
                  Botanika Zərgərliyi
                </h2>
              </div>

              <div className="space-y-4 font-sans text-[14px] sm:text-[15px] text-[#d2c3c5] font-light leading-relaxed">
                <p>
                  Panthera ənənəvi çiçək dükanı konseptindən tamamilə uzaqdır. Biz çiçəkləri fani bağ nemətləri deyil, fərdi zərgərlik nümunələri və yüksək dəb aksessuarları kimi qəbul edirik.
                </p>
                <p>
                  Bizim imza stilimiz — qara mat dizayner kağızı, dərin tünd qırmızı və zərif pudra çəhrayı tonlarının dramatik kontrastıdır. Hər kompozisiya duyğuların ən səmimi, sirli və zərif təzahürüdür.
                </p>
                <p>
                  Hollandiya, Ekvador və Keniyanın ən elit qapalı plantasiyalarından birbaşa hava yolu ilə gətirilən çiçəklərimiz Bakıda xüsusi mikroiqlim laboratoriyamızda özəl qayğı ilə bir araya gətirilir.
                </p>
              </div>

              <div className="pt-3 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-serif text-[20px] text-[#ffeaed] font-normal">
                    Leyla Əliyeva
                  </span>
                  <span className="font-sans text-[10px] text-[#e4c18d] uppercase tracking-widest font-medium">
                    Kreativ Direktor & Baş Florist
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-[#4f4446]/50"></div>
                <div className="font-sans text-[10px] text-[#d2c3c5] uppercase tracking-widest">
                  Est. 2018
                  <br />
                  Bakı
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST MARKERS & CRAFT METRICS */}
      <section className="w-full bg-[#1c1b1b] px-6 md:px-12 lg:px-16 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#201f1f] rounded-lg shadow-sm flex flex-col justify-between space-y-4 border border-[#353534]/30 transition-all duration-300 hover:bg-[#2a2a2a] hover:border-[#e4c18d]/30">
              <div className="flex items-center justify-between text-[#e4c18d]">
                <span className="font-serif text-[32px] leading-tight font-normal text-[#e4c18d]">
                  7+ İl
                </span>
                <span className="material-symbols-outlined text-[24px]">history_edu</span>
              </div>
              <div>
                <h3 className="font-serif text-[17px] text-[#e5e2e1] mb-1">Mükəmməl Təcrübə</h3>
                <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                  Bakının ən tələbkar tədbir, korporativ və fərdi müştəriləri üçün eksklüziv xidmət.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#201f1f] rounded-lg shadow-sm flex flex-col justify-between space-y-4 border border-[#353534]/30 transition-all duration-300 hover:bg-[#2a2a2a] hover:border-[#e4c18d]/30">
              <div className="flex items-center justify-between text-[#e4c18d]">
                <span className="font-serif text-[32px] leading-tight font-normal text-[#e4c18d]">
                  100%
                </span>
                <span className="material-symbols-outlined text-[24px]">spa</span>
              </div>
              <div>
                <h3 className="font-serif text-[17px] text-[#e5e2e1] mb-1">Təbii və Təravətli</h3>
                <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                  Həftəlik birbaşa Avropa və Cənubi Amerika xüsusi reysləri ilə operativ idxal.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#201f1f] rounded-lg shadow-sm flex flex-col justify-between space-y-4 border border-[#353534]/30 transition-all duration-300 hover:bg-[#2a2a2a] hover:border-[#e4c18d]/30">
              <div className="flex items-center justify-between text-[#e4c18d]">
                <span className="font-serif text-[32px] leading-tight font-normal text-[#e4c18d]">
                  2 Saat
                </span>
                <span className="material-symbols-outlined text-[24px]">directions_car</span>
              </div>
              <div>
                <h3 className="font-serif text-[17px] text-[#e5e2e1] mb-1">Ekspres Çatdırılma</h3>
                <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                  Xüsusi iqlim və rütubət nəzarətli lüks atelye avtomobilləri ilə ünvana çatdırılma.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#201f1f] rounded-lg shadow-sm flex flex-col justify-between space-y-4 border border-[#353534]/30 transition-all duration-300 hover:bg-[#2a2a2a] hover:border-[#e4c18d]/30">
              <div className="flex items-center justify-between text-[#e4c18d]">
                <span className="font-serif text-[32px] leading-tight font-normal text-[#e4c18d]">
                  Haut
                </span>
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div>
                <h3 className="font-serif text-[17px] text-[#e5e2e1] mb-1">Müəllif Əl İşləri</h3>
                <p className="font-sans text-[13px] text-[#d2c3c5] font-light leading-relaxed">
                  Hər buket beynəlxalq dərəcəli baş floristlərimiz tərəfindən tək nüsxədə tərtib edilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ATELIER VALUES & DETAILS */}
      <section className="w-full bg-[#131313] px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-sans text-[10px] text-[#e4c18d] uppercase tracking-widest block mb-2 font-medium">
              Nizam & Standartlar
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#e5e2e1]">
              Atelyemizin Üç Sütunu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#1c1b1b] p-8 rounded-xl shadow-md border border-[#353534]/40 flex flex-col justify-between group hover:border-[#e4c18d]/30 hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e4c18d] mb-6 group-hover:bg-[#ffeaed] group-hover:text-[#42292f] transition-colors">
                  <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1 block font-medium">
                  01 / İntellekt
                </span>
                <h3 className="font-serif text-[24px] text-[#e5e2e1] mb-3">Fəlsəfəmiz</h3>
                <p className="font-sans text-[14px] text-[#d2c3c5] font-light leading-relaxed">
                  Sükut içində danışan lüks. Parlaq, qışqıran parıltı deyil, dərin monoxrom keyfiyyət, heykəltəraşlıq proporsiyaları və estetik intellekt təklif edirik. Hər ləçək öz yerini bilir.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#e4c18d]/80 font-medium">
                  Estetik Minimalizm
                </span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#1c1b1b] p-8 rounded-xl shadow-md border border-[#353534]/40 flex flex-col justify-between group hover:border-[#e4c18d]/30 hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e4c18d] mb-6 group-hover:bg-[#ffeaed] group-hover:text-[#42292f] transition-colors">
                  <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1 block font-medium">
                  02 / Tekstura
                </span>
                <h3 className="font-serif text-[24px] text-[#e5e2e1] mb-3">Materiallarımız</h3>
                <p className="font-sans text-[14px] text-[#d2c3c5] font-light leading-relaxed">
                  Ekoloji sertifikatlı İtalyan mat örtükləri, Florensiyadan gətirilən təmiz ipək lentlər və isti mumla möhürlənən fərdi zərflər. Kompozisiyanın qablaşdırması sənətin ayrılmaz hissəsidir.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#e4c18d]/80 font-medium">
                  İtalyan İstehsalı Büküm
                </span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#1c1b1b] p-8 rounded-xl shadow-md border border-[#353534]/40 flex flex-col justify-between group hover:border-[#e4c18d]/30 hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e4c18d] mb-6 group-hover:bg-[#ffeaed] group-hover:text-[#42292f] transition-colors">
                  <span className="material-symbols-outlined text-[22px]">concierge</span>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#e4c18d] mb-1 block font-medium">
                  03 / Servis
                </span>
                <h3 className="font-serif text-[24px] text-[#e5e2e1] mb-3">Təcrübəmiz</h3>
                <p className="font-sans text-[14px] text-[#d2c3c5] font-light leading-relaxed">
                  Şəxsi konsyerj dəstəyi, fərdi əl yazısı ilə xəttatlıq təbrikləri və tam konfidensial anonim çatdırılma xidməti. Sevginizi və diqqətinizi ən yüksək etiket qaydaları ilə çatdırırıq.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#e4c18d]/80 font-medium">
                  Tam Məxfilik Zəmanəti
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOTANICAL GALLERY MOSAIC */}
      <section className="w-full bg-[#0e0e0e] px-6 md:px-12 lg:px-16 py-20 border-t border-[#353534]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 space-y-4">
              <span className="font-sans text-[10px] text-[#e4c18d] uppercase tracking-widest font-medium">
                Qalereya & Detallar
              </span>
              <h2 className="font-serif text-[30px] sm:text-[34px] text-[#e5e2e1]">
                Hər Ləçəkdə Dəbdəbə
              </h2>
              <p className="font-sans text-[14px] text-[#d2c3c5] font-light leading-relaxed">
                Qızılgüllərimiz xüsusi qulluq və qidalandırıcı məhlullarla qorunur, beləliklə onlar interyerinizdə uzun müddət öz ilkin təravətini və incə ətrini saxlayır.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('catalog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#e4c18d] hover:text-[#ffeaed] transition-colors"
                >
                  <span>Bütün kolleksiyaya bax</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-lg bg-[#201f1f] shadow-lg aspect-[4/5] group border border-[#353534]/30">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Ekvador Qızılgülü"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD5L6yQDzSE56SKlIJnwXMI7AngEXqTRUG8EwSlclrdHy__yIVh5umwi3woDbm_KN21x1n9KQwkSsQyw5JHC-1cFvnMW0VW42czlvogZ0MyHzlK1wu85L-fZ2Y75Vbw3Hsc60r78mMH7Hz0PTYlmWyhKjQxT5xdqAlBUUFW9sk5O_har_XFVXpMZKC_DXf2AElsWCdRL4e8ADNNNiFMYldr6dYYXaOmCAu4Gp8ddoFM2TmWALG8_P0uQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-sans text-[11px] uppercase tracking-wider text-[#e5e2e1] font-medium">
                  Ekvador Qızılgülü
                </span>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-[#201f1f] shadow-lg aspect-[4/5] group sm:-mt-8 border border-[#353534]/30">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Atelye Prosesi"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc4UzRdgm_0FRXNRnHwOjrXB7Dj9tI-X7UUDnhFenHAvb8aWHDyD64jifZGK3hqvKrwAEqHZnTIGO2LL1lRlhWMrVtfppRHjhaTzR0UbtFi1lQJyOlOeFfkRLNmMtbEY_3uoAHsWbB4KGEQ7Lqs-ZTmNva-iLyTGmm90irkGoXLd7ChtJ79XnciIwLuWWeeMLf_SQddVMMVtJ2SmaKEu6kn_yT2MgHgz7wXKb6yc7B2to-90X_uhUn3w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-sans text-[11px] uppercase tracking-wider text-[#e5e2e1] font-medium">
                  Atelye Prosesi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING INVITATION CTA */}
      <section className="w-full bg-[#1c1b1b] px-6 md:px-12 lg:px-16 py-20 relative overflow-hidden border-t border-[#353534]/30">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="font-sans text-[10px] text-[#e4c18d] uppercase tracking-widest block font-medium">
            Panthera İlə Görüş
          </span>
          <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[50px] text-[#e5e2e1] font-normal leading-tight">
            Gözəlliyi Bizimlə Kəşf Edin
          </h2>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#d2c3c5] max-w-2xl mx-auto font-light leading-relaxed">
            Özəl günləriniz, unudulmaz təbrikləriniz və ya sadəcə zövqlü bir jest üçün bizim floristlərimiz sizə xüsusi floral təcrübə yaratmağa hazırdır.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                onNavigate('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#e5e2e1] text-[#131313] font-sans text-[11px] font-semibold uppercase tracking-widest rounded transition-all duration-300 hover:bg-[#ffeaed] hover:text-[#42292f] shadow-lg text-center cursor-pointer"
            >
              Kataloqu Kəşf Et
            </button>
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto px-8 py-3.5 border border-[#e4c18d]/40 text-[#e5e2e1] font-sans text-[11px] uppercase tracking-widest rounded transition-all duration-300 hover:border-[#e4c18d] hover:bg-[#e4c18d]/10 text-center cursor-pointer"
            >
              Bizimlə Əlaqə
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffeaed]/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </div>
  );
};
