export interface FloralProduct {
  id: string;
  name: string;
  price: number;
  refCode: string;
  category: 'mono' | 'composition' | 'luxury-basket' | 'events' | 'rare-peony';
  badge: string;
  tagColor?: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary';
  rating?: number;
  shortDesc: string;
  fullDesc: string;
  image: string;
  altText: string;
  flowersIncluded: string[];
  stemCount?: number;
  packaging?: string;
  origin?: string;
}

export const CATALOG_PRODUCTS: FloralProduct[] = [
  {
    id: 'p-101n',
    name: 'Nocturne Noir 101',
    price: 450,
    refCode: 'P-101N',
    category: 'mono',
    badge: 'İmza Kolleksiyası',
    rating: 4.9,
    shortDesc: 'Qara mat dəbdəbəli kağızda 101 ədəd qüsursuz qırmızı holland qızılgülü və qara ipək lent.',
    fullDesc: '101 ədəd dəbdəbəli qırmızı qızılgül, qara mat bağlama, ipək qara lent və xüsusi qoruyucu qat. Panthera atelyesinin əfsanəvi imza kompozisiyası.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXZC53Csv1i6X3RQmFqBy0KLFNyryWBDxr-Y1u6J0Kf6HqY1OX5MjPhAL440J3LHMIeUstnshyWGaFazHunhkjD6SSmnZKq1iORGDvvFgtukSiYu59PuUQ8OIInpM16Z1Apyopp-RuKR7OIUveBaHHMO4VmF9-1b8gK0ZawoYz9_Lb2m7TqQ_Nf1uX0SxzXiJj1ZGpCEENvQmxjW1Qln__7u5EBj82ReHepMbzTaFt0Eune06vM7jqgw',
    altText: '101 Red Roses in Matte Black Wrap',
    flowersIncluded: ['101 Premium Hollandiya Qırmızı Qızılgülü', 'Mat Qara Dizayner Bükümü', 'Fransız Qara İpək Lent', 'Xüsusi Qidalandırıcı Su Kapsulu'],
    stemCount: 101,
    packaging: 'Mat Qara İtalyan Kağızı',
    origin: 'Aalsmeer, Niderland'
  },
  {
    id: 'p-204b',
    name: 'Blush Symphony',
    price: 320,
    refCode: 'P-204B',
    category: 'composition',
    badge: 'Atelye Seçimi',
    shortDesc: 'Pudra çəhrayı pionlar və zərif Ranunculus çiçəklərinin harmonik, lirik kompozisiyası.',
    fullDesc: 'Pudra çəhrayı Sarah Bernhardt pionları, krem Ranunculus, ağ astilbe və evkalipt budaqları. Romantik və təmkinli bir zəriflik nümayişi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfLEcf-FIHlVexzmhi8EOkaIoWF6fDMrZw4oQrgvQ3TyFnwc0tWjnAAmhFbb4xNMBRjFBiIWnoMud1WzxgHQKCluS05w74bOBPKJpErkU3Yu8CRpAqOnvyb9S0UocNzk9d6sR7w16I4nBzXdjZzlFmDbZTY_yr1YGd4Vxc32akYjMOoyZuSTwcPBQiTcNKkvZSDprdZxco6y64XQB7ewWFE07Nvpl7weRNeYr4Z825IaN8JARBbv5KAA',
    altText: 'Blush Symphony Peonies and Ranunculus',
    flowersIncluded: ['Sarah Bernhardt Pudra Pionlar', 'Krem Ranunculus', 'Ağ Astilbe', 'Baby Blue Evkalipt'],
    stemCount: 35,
    packaging: 'Dumanlı Boz İpək Kağız',
    origin: 'Cənubi Fransa & Niderland'
  },
  {
    id: 'p-309c',
    name: 'Onyx & Crimson',
    price: 290,
    refCode: 'P-309C',
    category: 'composition',
    badge: 'Xüsusi Dizayn',
    shortDesc: 'Dərin bordo qızılgüllər, qızılı dekorativ evkalipt yarpaqları və qara lent detalları.',
    fullDesc: 'Dərin bordo bağ gülləri, qızıl örtüklü evkalipt, tünd anthurium və mat qara dizayner bələyi. Modern qotik dəbdəbə.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkNmacG9F7R0Jio8NcIqzzxxbsfv1LPfK3mVO6ThjdpdQ2cM0UqoFuVmanrKeIzhcZC7YiKxxe2V4Btbv4KdkDXbscsovJ788b0V4Cln8q7NCtD-IkFrji7xJDzW4wCaZWqOCx2UiyrR1Jk8E8LTv7_bFeFCHkvDum1ku_HIoVU8KU5MidU0BdvwdWgdl6xh6ikka-DIbf4jHCFqSpMx-JbMbS60CgVx4K93LcOKg4-IMZRY82Bc7zpA',
    altText: 'Onyx & Crimson Botanical Arrangement',
    flowersIncluded: ['Bordo Bağ Qızılgülləri', 'Qızıl Boyanmış Evkalipt', 'Qara Anthurium', 'Qara Məxmər Lent'],
    stemCount: 29,
    packaging: 'Kömür Qara Mat Karton',
    origin: 'Ekvador Dağlıq Plantasiyaları'
  },
  {
    id: 'p-412r',
    name: 'Grand Royal Səbəti',
    price: 650,
    refCode: 'P-412R',
    category: 'luxury-basket',
    badge: 'Monumental',
    shortDesc: 'Qara məxmər örtüklü nəhəng lüks çiçək səbəti, hidrangiya və kral qızılgülləri ilə.',
    fullDesc: 'Xüsusi əl işi məxmər səbət, 120-dən çox seçilmiş qızılgül, qızılı orxideya və zəngin Holland florası. VIP ziyafətlər üçün şah əsər.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_sNFPimMvY5ANJCgJz2wQGIKByUvroU_Oo_lNP4z_krDpcinmn62C4N9dcsKPyAdRsGJqgo4hYDarfifF8dtVx3Wr8KkttP2dLX5VKN6KoOi_DXWBSErvGl2E1SwXyLHdcQoPFITvKm396vXGRHkwq2A_fMi1h1X2pyZ7MrbnGBdBVlg5L_p-Z223JRzNQn1LWNzV70tgOA9whz7PivIvjliD394Iu0-LncH5EBOMwHRqWvio2aBAQg',
    altText: 'Grand Royal Luxury Velvet Floral Basket',
    flowersIncluded: ['120+ Seçilmiş Holland Qızılgülü', 'Ağ & Bordo Hidrangiya', 'Qızılı Phalaenopsis Orxideya', 'Smaragd Salal Yarpaqları'],
    stemCount: 125,
    packaging: 'Qara Məxmər Əl İşi Səbət & Qızıl Qulp',
    origin: 'Keniya & Niderland'
  },
  {
    id: 'p-503p',
    name: 'Petite Blush Bloom',
    price: 210,
    refCode: 'P-503P',
    category: 'mono',
    badge: 'Zərif Seçim',
    shortDesc: 'Zərif Panthera qutusunda 35 ədəd pastel çəhrayı premium qızılgül və ətirli notlar.',
    fullDesc: '35 ədəd seçilmiş pastel qızılgül, xüsusi brendləşdirilmiş dairəvi Panthera qutusu, su kapsulu təminatı. Hər gün üçün zərif hədiyyə.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDglM0mY2rbEfdMmMdKcbcRJS4vZOks1mqmk8qBeshuHmWh1q4TFYpnmvIuMn8PUGQ1cJQUEuVXhwmPzpMrVJgZOHphutPBT1mUX9V2MqwytOEf3lDUa_Iy0YX45uTo6dLxRV3hitp6cwK8HhhQ-kJf5nbOn3DP6Zqlxgliy_LR-juZAaCkgAiBft7VTqZbHJgrXP8LCx4QVma9PVeNBtQkRbbcWdTV_RK_gCBsXbY8itSAeHtQD41g3A',
    altText: 'Petite Blush Bloom in Hatbox',
    flowersIncluded: ['35 Pastel Çəhrayı Qızılgül', 'Panthera Monogramlı Qutu', 'Çəhrayı İpək Bant'],
    stemCount: 35,
    packaging: 'Panthera Dairəvi Qutusu',
    origin: 'Niderland'
  },
  {
    id: 'p-618w',
    name: 'Pure Silk Peony',
    price: 380,
    refCode: 'P-618W',
    category: 'rare-peony',
    badge: 'Nadir İdxal',
    shortDesc: 'Hollandiyadan birbaşa gətirilmiş nadir ağ və krem çalarlı ipək toxumalı pionlar.',
    fullDesc: '25 ədəd premium Duchess de Nemours ağ pion, xüsusi mat kağız və parça qoruyucu paketləmə. Nadir və məhdud mövsümi çiçək.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC4fL0ojbzZ6rG_nRNaW-jLMjYWvHIErJuQoS5MetqU_YQVQObkAs0KfZDxBb1Kmo5Y8E3j2TNxQX595MdYRKnLHDPu_91rA6bP521_ns5oZg0DKrWdy7ykv98NSFkiyUUMP1nz7RZginUZxcJxyCS3hzjzusWfqPAWdponTSgHDxSo2Iz90DL1CHoGqGvsN2Q-DRjHQjyiR3Jka5pm4C4sip6QlYMM6-FQGYjbIxWtBUhPxVZbrd2OA',
    altText: 'Pure Silk White Peonies Bouquet',
    flowersIncluded: ['25 Ağ Duchess de Nemours Pion', 'Mat Dumanlı Kağız', 'Gümüşü Ətirli Qat'],
    stemCount: 25,
    packaging: 'Editorial Zərf Bükümü',
    origin: 'Hollandiya Çiçək Birjası'
  },
  {
    id: 'p-720s',
    name: 'Baku Sunset Deluxe',
    price: 340,
    refCode: 'P-720S',
    category: 'events',
    badge: 'Xəzər İlhamı',
    shortDesc: 'Qızılı şampan və şaftalı rəngli nadir qızılgüllərin təmtəraqlı qarışıq kompozisiyası.',
    fullDesc: 'Şampan tonlarında Keniya qızılgülləri, şaftalı kala zanbaqları, qızıl boyanmış buğda sümbülləri. Xəzərin qürub rənglərini əks etdirir.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2CbPQv8T6S8vKnaoFjqe5m3ht_nU9GwCUYFQfH9CvHEFcq1rArlYtDXsG29AlQAUFjg7pNBxlA0hcLzxnNXlYRWm2-3poHmVnzWphfcINe4rYfHxaBLSaKcfEs_ZXkfBrRniH-nsOae-Ms6dy_6PtenYnOhJ3VcM4gbbfDXixd5lz1fQLYiHz_uDYf7MayBv7PIenGyF9odLM5xupZI9NSaIAE4wyYcZwCI_vt_7jByoSFG43k0aksA',
    altText: 'Baku Sunset Deluxe Warm Bouquet',
    flowersIncluded: ['Şampan Keniya Qızılgülləri', 'Şaftalı Calla Lilies', 'Qızıl Buğda Sünbülləri', 'Krem Ranunculus'],
    stemCount: 40,
    packaging: 'İsti Qəhvəyi & Qara Büküm',
    origin: 'Keniya & İtaliya'
  },
  {
    id: 'p-805v',
    name: 'Eternity Black Velvet',
    price: 480,
    refCode: 'P-805V',
    category: 'luxury-basket',
    badge: 'Uzunömürlü',
    shortDesc: 'Dəbdəbəli silindr qutuda xüsusi stabilizasiya olunmuş qara və bordo güllər.',
    fullDesc: 'Yapon biotexnologiyası ilə 3 il təravətini saxlayan xüsusi qızılgüllər, qara məxmər silindrik qutu. Heç vaxt solmayan sevgi rəmzi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAoiP63zsWKIEmX_53Xop2guoaQtTrMbVi8Qsu_zkRTe1YN31W5hXQ2lJvZPh8qI7FNCKSb-w_ZMys8nrxpxwO-JAHp53moatLEkFigq__xONfufI0z3uhYtBFXAe7AKTs1ZgXbSftR5uiFJOIKRkfN-VMAR956aVxI-fIyNCHo-9hKqP6892Y_mqwGJKDPwNke8isscqyBMF0MqqFRywwBwsUGksa0hOhJGddlYpMtLTgSqUYlruvGg',
    altText: 'Eternity Black Velvet Preserved Roses',
    flowersIncluded: ['Stabilizasiya Olunmuş Qara Qızılgüllər', 'Dərin Bordo Baccara', 'Qızıl Folqa Panthera Monogramı'],
    stemCount: 27,
    packaging: 'Qara Məxmər Dairəvi Silindr',
    origin: 'Kyoto Texnologiyası & Ekvador Qızılgülləri'
  },
  {
    id: 'p-990a',
    name: 'Atelier Bespoke Rose',
    price: 520,
    refCode: 'P-990A',
    category: 'mono',
    badge: 'Couture',
    shortDesc: 'Fərdi ölçü və rəng seçimli nəhəng monoxrom Ekvador qızılgülləri kompozisiyası.',
    fullDesc: 'Fərdi seçilmiş 80 sm-lik Ekvador qızılgülləri, xüsusi aromatik baxım spreyi və kalifrafik məktub kartı. Dərin heykəltəraşlıq sənəti.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD0c9jaWLxy-vBAej0Z4Q1wC0SEG06unxxSEgN7NRIhumg0DNlCpDJfBpd0YwEgJxOhrDiUzjSZAFmtlg0_Ml-K05aMAK6ans5oGUAAS00qHdfGcCqIqBQAkv2VfjMLDPyljz55Ecomh9QdQN9j3jr-jeAWMIEat3iq6gQWO4L_e4RMVP8Et5cuznCf7yRLkUyeT5j5X2TtxzNW1Wa0ntk0s6N_dooCiUgDNDkSHD8ocDoQjN4lAXtrg',
    altText: 'Atelier Bespoke Ecuadorian Roses',
    flowersIncluded: ['150 Ekvador Dərin Qırmızı Qızılgülü (80cm)', 'Arxitektural Mat Büküm', 'Kalifrafik Təbrik Kartı'],
    stemCount: 150,
    packaging: 'Arxitektural Qara Karton & İpək Lent',
    origin: 'Kito, Ekvador'
  }
];

export interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  badge: string;
  badgeType: string;
  desc: string;
  image: string;
  refCode: string;
}

export const FEATURED_COLLECTION: FeaturedProduct[] = [
  {
    id: 'f-1',
    name: 'Nocturne Noir',
    price: 420,
    badge: '101 Qızılgül',
    badgeType: 'secondary',
    desc: '101 tünd qırmızı Hollandiya qızılgülü, Panthera mat qara dizayner bükümü və ipək lent.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVZq-IpDdYSctvkpsuRFO3hc7qkSBjPXq-acjO_-GwG0v3Izhs9ZK7HYvDr44Bj5LjMUAFPuN6b_OQGOZYLpeLY0LI979cHsbNvku2V2a-2a0LVDkO58k_NC6zl6yWZ-FVGVK0yYzFxJCpz0q4njjTL9nU80GHbv0PWsAp0rox-9oaaBBsgAmk_HjIVNfZrrR7hn3K67bQsxGbXfFTUtcDYhj4Vasw_uiDyWtjXcw7eHX5OWPuWbYP4g',
    refCode: 'P-101N'
  },
  {
    id: 'f-2',
    name: 'Blush Velvet',
    price: 360,
    badge: 'Pion & Qızılgül',
    badgeType: 'primary',
    desc: 'Fransız pion gülləri, pudra çəhrayı qızılgül və evkalipt budaqlarının harmoniyası.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQBPldETOLyWh9OOAnJOVJqcYUYCIjqTPf2KJv2RPNeveJWFGvcw783O972VsKnKZ7E8KPGl2Yldc6R5oJgfU2mhShxsP2NKowsjmGaD9KJbTjX6EHvcSmczqVdZwGBBp9G75Rqb5FN6ueS043l9bmlE49bi2LI-bN24YypuKRh5YPkoC7Sy39rWKUyOIol9b6eNKmxyZ9zjdFnP4Ynh3msEcpN4R4oHrp2V7WqPTB8lWpWYFsGlCasA',
    refCode: 'P-204B'
  },
  {
    id: 'f-3',
    name: 'Imperial Gold',
    price: 490,
    badge: 'Bestseller VIP',
    badgeType: 'secondary',
    desc: 'Qızılı zeytun budaqları ilə bəzədilmiş kraliça qızılgülləri və xüsusi hədiyyə kartı.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgblURIzCZxn6cDx8KjT9NvoboL_hBwohR-g1DnFtxc4bYX0FvmJXWneRKYkHKbP2FOzzDm5ROTRdnvRbsH3j-2uI0eQfZLm4Oj9QCT8sJcpKkA8kPAW5uP0gk9859DxdfpHptfyIxY6no_yklrS3MwDH4XZ5xS-6UUvMY33AxdTKygD3OQ4ZNyISNDBowoCMrkhXaXEaZlbOBAo-ouIpjWdesehONhvpsujZr-Myv3e_qhMUszL9uLA',
    refCode: 'P-309C'
  },
  {
    id: 'f-4',
    name: 'Aura Peony',
    price: 380,
    badge: 'Nadir Sezon',
    badgeType: 'secondary',
    desc: 'Təbii ağ və pudra pionların monoxrom lüks harmoniyası, qoxulu botanik toxunuşla.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4IZ_dWy7L1hJieV9Y2irjf7_C8SJRezh8NuITspj7bvBWK5XwTTK_iT4U2OyB-2adqYn_OxAA4wRpeV0DMAIzlfzEgzfJvH8wmS6jl1t7miUEjg2Gzi6jhYAwiNT0tpYE5n1eapIaB0ob8ht1814eZ2ul6SbX5tw4yFfMX536ng1L1ftSTY8a2joBGnSDW2G4MSRud8HzknOEhaF220SbevAUircgqwoJkFBNJdEvqnXyF5La1YNh0g',
    refCode: 'P-618W'
  }
];
