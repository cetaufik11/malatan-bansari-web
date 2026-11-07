// =========================================================================
// PORTAL SEJARAH DIGITAL DUSUN MALATAN — DESA BANSARI, KAB. TEMANGGUNG
// =========================================================================

const TIMELINE_DATA = [
  {
    era: "kuno",
    year: "Abad VIII – X M",
    badge: "Jejak Peradaban Kuno Lereng Sindoro",
    title: "Lanskap Agraris Kuno Koridor Sindoro – Kedu",
    desc: "Wilayah lereng timur Gunung Sindoro (kawasan Bansari, Parakan, hingga Liyangan) merupakan sabuk vulkanik subur yang sejak masa Mataram Kuno telah menjadi ruang pemukiman agraris dan jalur spiritual masyarakat Jawa kuno yang memuliakan mata air pegunungan.",
    source: "Konteks Arkeologi & Geohistori Kedu–Sindoro, Pemkab Temanggung"
  },
  {
    era: "kuno",
    year: "Abad XVIII – XIX",
    badge: "Babad Alas & Tradisi Lisan Sesepuh",
    title: "Pembukaan Permukiman Dusun Malatan & Desa Bansari",
    desc: "Berdasarkan tradisi lisan (folklore) sesepuh dusun, kawasan Malatan dan Bansari berkembang dari pemukiman petani pembuka lahan (babad alas) di lereng Sindoro pada ketinggian 1.000–1.500 mdpl yang mengandalkan kesuburan tanah andosol dan sumber air pegunungan.",
    source: "Tradisi Lisan Sesepuh Dusun Malatan & Monografi Desa Bansari"
  },
  {
    era: "agraris",
    year: "Abad XIX – Awal Abad XX",
    badge: "Revolusi Ekonomi 'Emas Hijau'",
    title: "Budidaya Tembakau Lereng Sindoro & Tradisi Tembakau Lembutan",
    desc: "Masuknya komoditas tembakau di Temanggung menjadikan Desa Bansari dan Dusun Malatan sebagai salah satu sentra penghasil Tembakau Lembutan dan Srintil terbaik. Dari sinilah lahir tradisi Wiwitan, Jamasan Gobang (alat perajang tembakau), dan tatanan sosial ekonomi petani rigen.",
    source: "Dokumentasi Budaya Tembakau Temanggung & Pemprov Jawa Tengah"
  },
  {
    era: "intelektual",
    year: "Abad XX (1920-an – 1980-an)",
    badge: "Warisan Ulama & Manuskrip Kuno",
    title: "Kiprah Kyai Mohaedi Anwar & Manuskrip Mushaf Kuno Desa Bansari",
    desc: "Desa Bansari (khususnya Dusun Tambahrejo yang berdekatan dengan Malatan) menjadi pusat keilmuan Islam lokal dengan tokoh ulama karismatik Kyai Mohaedi Anwar. Beliau meninggalkan koleksi manuskrip Mushaf Al-Qur'an kuno tulisan tangan yang kini menjadi objek kajian filologi perguruan tinggi.",
    source: "Riset Filologi & Sejarah Lokal UIN Salatiga & UIN Walisongo Semarang"
  },
  {
    era: "intelektual",
    year: "Paruh Kedua Abad XX",
    badge: "Pertumbuhan Komunitas Lintas Iman",
    title: "Terbentuknya Harmoni Masjid & Gereja di Dusun Malatan",
    desc: "Tumbuhnya komunitas umat Islam dan umat Kristen/Katolik di Dusun Malatan melahirkan struktur sosial unik: warga berbeda keyakinan hidup berdampingan bahkan dalam satu garis keluarga besar, merawat nilai tepa slira, gotong royong membangun tempat ibadah, dan tradisi kenduri bersama.",
    source: "Repositori Kajian Sosiologi Agama UIN Sunan Kalijaga Yogyakarta"
  },
  {
    era: "modern",
    year: "Tahun 2001",
    badge: "Tonggak Administratif & Otonomi Daerah",
    title: "Pemekaran Kecamatan Bansari & Penetapan Pusat Pemerintahan di Malatan",
    desc: "Seiring otonomi daerah tahun 2001, wilayah Bansari resmi dimekarkan dari Kecamatan Parakan menjadi Kecamatan Bansari (membawahi 13 desa, 43 dusun, 45 RW, dan 176 RT). Desa Bansari menjadi ibu kota kecamatan, dengan Kantor Kecamatan Bansari berpusat di Dusun Malatan.",
    source: "Data Administratif Pemerintah Kabupaten Temanggung & BPS"
  },
  {
    era: "modern",
    year: "2015 – 2026 (Era Kontemporer)",
    badge: "Pelestarian Budaya, Ekologi & Bina Damai",
    title: "Gelar Budaya Malatan, Embung Bansari & Laboratorium Kerukunan",
    desc: "Dusun Malatan rutin menggelar Gelar Budaya (Jaran Kepang, Warok, Merti Dusun/Nyadran), menjadi rujukan riset nasional tentang Bina Damai (Peace Building), sekaligus penyangga kawasan ekowisata Embung Bansari di lereng Gunung Sindoro.",
    source: "Publikasi Kebudayaan Kab. Temanggung & Studi Bina Damai (2020–2026)"
  }
];

const MAP_SPOTS = {
  "malatan-pusat": {
    tag: "LOKUS 01 · PUSAT PEMERINTAHAN & SOSIAL",
    title: "Pusat Dusun Malatan & Kompleks Kantor Kecamatan Bansari",
    desc: "Dusun Malatan memegang posisi strategis sebagai jantung administratif Desa Bansari sekaligus lokasi berdirinya Kantor Kecamatan Bansari sejak pemekaran wilayah dari Kecamatan Parakan pada tahun 2001.",
    facts: [
      "🏛️ Fungsi Utama: Ibu kota pemerintahan Kecamatan Bansari (membawahi 13 desa & 43 dusun).",
      "🤝 Peran Sosial: Lokasi penyelenggaraan Musrenbang, pelayanan publik, dan balai pertemuan warga lintas dusun.",
      "📍 Letak Geografis: Koridor utama Desa Bansari di kaki timur Gunung Sindoro."
    ]
  },
  "harmoni-ibadah": {
    tag: "LOKUS 02 · LABORATORIUM BINA DAMAI",
    title: "Kawasan Harmoni Masjid & Gereja Dusun Malatan",
    desc: "Lokus yang menjadi sorotan peneliti sosiologi agama (seperti dari UIN Sunan Kalijaga Yogyakarta). Di Dusun Malatan, umat Islam dan umat Kristen hidup berdampingan secara damai, bahkan tidak jarang berada dalam satu atap keluarga besar.",
    facts: [
      "🕊️ Tradisi Toleransi: Saling menjaga keamanan saat ibadah Hari Raya Idulfitri maupun perayaan Natal.",
      "🔨 Gotong Royong: Warga lintas agama terlibat aktif dalam kerja bakti pembangunan rumah ibadah maupun fasilitas dusun.",
      "📚 Teori Akademik: Mencerminkan konsep Positive Peace (Johan Galtung) dan integrasi sosial AGIL (Talcott Parsons)."
    ]
  },
  "sentra-tembakau": {
    tag: "LOKUS 03 · WARISAN AGRARIS EMAS HIJAU",
    title: "Pelataran Rigen & Sentra Tembakau Lembutan Malatan",
    desc: "Saat musim kemarau tiba (Juli–Oktober), halaman rumah dan pelataran di Dusun Malatan berubah menjadi hamparan rigen bambu tempat menjemur rajangan Tembakau Lembutan beraroma khas lereng Sindoro.",
    facts: [
      "🌿 Varietas Unggulan: Tembakau Kemloko / Lembutan lereng Sindoro yang terkenal memiliki kadar nikotin dan aroma khas.",
      "🔪 Instrumen Tradisional: Penggunaan Gobang (pisau rajang tradisional) yang disucikan melalui ritual Jamasan.",
      "💰 Dampak Ekonomi: Penopang utama kesejahteraan petani Desa Bansari dari generasi ke generasi."
    ]
  },
  "gelar-budaya": {
    tag: "LOKUS 04 · PANGGUNG TRADISI RAKYAT",
    title: "Arena Merti Dusun, Nyadran & Gelar Budaya Malatan",
    desc: "Ruang terbuka kultural tempat warga Dusun Malatan berkumpul menyelenggarakan Merti Dusun (bersih desa), kenduri Kembul Bujana, serta pementasan Gelar Budaya lintas generasi.",
    facts: [
      "🎭 Kesenian Rakyat: Pementasan Jaran Kepang (Kuda Lumping), tari Warok, dan kesenian tradisional khas Temanggung.",
      "🍱 Kembul Bujana: Tradisi makan bersama di atas daun pisang sebagai simbol kesetaraan warga tanpa sekat agama maupun status sosial.",
      "🌱 Regenerasi: Wahana pewarisan kesadaran sejarah lokal kepada generasi muda (Gen Z) Dusun Malatan."
    ]
  },
  "manuskrip-tambahrejo": {
    tag: "LOKUS 05 · JEJAK INTELEKTUAL & FILOLOGI",
    title: "Jejak Ulama Kyai Mohaedi Anwar & Manuskrip Kuno (Tambahrejo, Bansari)",
    desc: "Berada dalam satu kesatuan wilayah Desa Bansari, Dusun Tambahrejo menyimpan warisan intelektual Islam masa lampau berupa manuskrip Mushaf Al-Qur'an kuno peninggalan ulama lokal Kyai Mohaedi Anwar.",
    facts: [
      "📜 Artefak Sejarah: Manuskrip Mushaf Al-Qur'an tulisan tangan di atas kertas kuno dengan iluminasi khas.",
      "🎓 Kajian Ilmiah: Diteliti oleh akademisi UIN Salatiga dan UIN Walisongo Semarang sebagai bukti literasi keagamaan lereng Sindoro.",
      "🕌 Jaringan Ulama: Menunjukkan peran Desa Bansari sebagai simpul penyebaran dakwah kultural yang santun di Temanggung."
    ]
  },
  "embung-bansari": {
    tag: "LOKUS 06 · EKOLOGI & KONSERVASI AIR",
    title: "Embung Bansari & Hulu Ekologi Lereng Gunung Sindoro",
    desc: "Terletak di bagian atas Desa Bansari (~1.400 mdpl), Embung Bansari berfungsi sebagai tandon konservasi air hujan untuk mengairi lahan pertanian warga sekaligus titik pandang panorama 9 puncak gunung di Jawa Tengah.",
    facts: [
      "💧 Fungsi Hidrologis: Menjaga cadangan air irigasi perkebunan tembakau, kopi, dan sayuran warga Desa Bansari.",
      "⛰️ Panorama 9 Gunung: Dari titik ini terlihat Gunung Sindoro, Sumbing, Merbabu, Merapi, Telomoyo, Andong, Ungaran, Prau, dan Slamet.",
      "🌿 Ekowisata Desa: Menggerakkan ekonomi kreatif pemuda Desa Bansari."
    ]
  }
};

const ARCHIVE_DATA = [
  {
    category: "Ritual Adat",
    title: "Tradisi Merti Dusun & Nyadran Malatan",
    desc: "Upacara adat tahunan masyarakat Dusun Malatan sebagai wujud rasa syukur kepada Tuhan Yang Maha Esa atas limpahan hasil bumi lereng Sindoro, keselamatan warga, serta penghormatan terhadap para leluhur pendiri dusun (cikal bakal).",
    highlight: "Nilai Utama: Menggabungkan doa lintas iman, ziarah leluhur, dan makan bersama (Kembul Bujana) yang mempererat kohesi sosial."
  },
  {
    category: "Warisan Tembakau",
    title: "Ritual Wiwitan & Jamasan Gobang Tembakau",
    desc: "Sebelum memetik daun tembakau pertama (wiwit) dan memulai musim rajang raya, petani di kawasan Bansari melakukan tradisi doa syukur serta Jamasan (pencucian pusaka alat pertanian, khususnya pisau Gobang perajang tembakau).",
    highlight: "Makna Filosofis: Menghormati alam Gunung Sindoro dan memohon agar panen tembakau menghasilkan kualitas terbaik (Srintil/Lembutan)."
  },
  {
    category: "Warisan Tembakau",
    title: "Seni Perajangan Tembakau Lembutan Bansari",
    desc: "Berbeda dengan tembakau pabrikan biasa, petani di Desa Bansari dan Malatan mewarisi keahlian mengiris daun tembakau sangat halus (lembutan) pada dini hari, lalu menjemurnya di atas rigen bambu mengikuti kemiringan sinar matahari lereng Sindoro.",
    highlight: "Fakta Sejarah: Tembakau lereng Sindoro di Kecamatan Bansari berulang kali mencatat rekor kualitas dan nilai jual tertinggi di Temanggung."
  },
  {
    category: "Seni Pertunjukan",
    title: "Gelar Budaya Dusun Malatan (Jaran Kepang & Warok)",
    desc: "Pesta rakyat di Dusun Malatan yang menampilkan kolaborasi kelompok kesenian tradisional, mulai dari tari Jaran Kepang (Kuda Lumping), atraksi Warok, hingga musik gamelan kerakyatan yang ditonton seluruh lapisan masyarakat.",
    highlight: "Fungsi Sosial: Ruang ekspresi pemuda dusun sekaligus benteng pelestarian budaya lokal di tengah arus modernisasi."
  },
  {
    category: "Naskah & Tokoh",
    title: "Manuskrip Kuno Mushaf Al-Qur'an Kyai Mohaedi Anwar",
    desc: "Peninggalan berharga di Desa Bansari (Dusun Tambahrejo) berupa naskah Mushaf Al-Qur'an kuno milik almarhum Kyai Mohaedi Anwar. Naskah ini menjadi bukti otentik tradisi intelektual dan penyalinan kitab suci di lereng Gunung Sindoro.",
    highlight: "Rujukan Ilmiah: Dikaji dalam penelitian akademik UIN Salatiga dan UIN Walisongo Semarang."
  },
  {
    category: "Ritual Adat",
    title: "Tradisi Sambatan & Gotong Royong Lintas Agama",
    desc: "Praktik tolong-menolong tradisional (sambatan) warga Dusun Malatan saat mendirikan rumah, menggarap lahan pertanian, maupun merenovasi tempat ibadah (Masjid dan Gereja) tanpa memandang perbedaan agama.",
    highlight: "Kajian Sosiologis: Kunci utama mengapa Dusun Malatan bebas dari konflik komunal selama puluhan tahun."
  }
];

const REFERENCES_DATA = [
  {
    category: "Jurnal & Skripsi Sosiologi Agama (UIN Sunan Kalijaga)",
    citation: "Repositori UIN Sunan Kalijaga Yogyakarta. (2021). Studi Fungsionalisme Struktural dan Bina Damai (Peace Building) Kerukunan Antarumat Beragama di Dusun Malatan, Desa Bansari, Kecamatan Bansari, Kabupaten Temanggung. Yogyakarta: Fakultas Ushuluddin dan Pemikiran Islam UIN Sunan Kalijaga."
  },
  {
    category: "Kajian Filologi & Sejarah Islam Lokal (UIN Salatiga & UIN Walisongo)",
    citation: "Kajian Manuskrip Nusantara. (2022). Karakteristik dan Sejarah Manuskrip Mushaf Al-Qur'an Kuno Koleksi Kyai Mohaedi Anwar di Dusun Tambahrejo, Desa Bansari, Kecamatan Bansari, Kabupaten Temanggung. Salatiga/Semarang: Repositori Akademik."
  },
  {
    category: "Monografi & Data Wilayah Pemerintah Daerah",
    citation: "Pemerintah Kabupaten Temanggung & BPS Kabupaten Temanggung. (2024). Kecamatan Bansari Dalam Angka: Profil Geografis, Sejarah Pemekaran Wilayah Tahun 2001, dan Struktur Pemerintahan Desa Bansari (13 Desa, 43 Dusun). Temanggung: BPS Kabupaten Temanggung."
  },
  {
    category: "Dokumentasi Budaya Agraris & Tembakau Lereng Sindoro",
    citation: "Pemerintah Provinsi Jawa Tengah & Komunitas Pelestari Budaya Temanggung. (2023). Tradisi Wiwitan, Jamasan Gobang, dan Gelar Budaya Masyarakat Petani Tembakau Lembutan di Lereng Gunung Sindoro Kecamatan Bansari. Jawa Tengah: Portal Berita & Dokumentasi Budaya."
  }
];

const QUIZ_QUESTIONS = [
  {
    q: "1. Pada tahun berapakah Kecamatan Bansari resmi dimekarkan dari Kecamatan Parakan dengan pusat pemerintahan di Desa Bansari (Dusun Malatan)?",
    options: ["A. Tahun 1985", "B. Tahun 1998", "C. Tahun 2001", "D. Tahun 2010"],
    correct: 2,
    explanation: "Tepat! Kecamatan Bansari dibentuk pada tahun 2001 seiring kebijakan otonomi daerah di Kabupaten Temanggung, membawahi 13 desa dan 43 dusun."
  },
  {
    q: "2. Mengapa Dusun Malatan di Desa Bansari menjadi objek penelitian terkenal oleh akademisi UIN Sunan Kalijaga Yogyakarta?",
    options: [
      "A. Karena ditemukan candi bawah tanah terbesar di Jawa Tengah",
      "B. Karena menjadi laboratorium hidup kerukunan antarumat beragama (Bina Damai) antara warga Muslim dan Kristen/Katolik",
      "C. Karena menjadi lokasi pabrik gula kolonial terbesar",
      "D. Karena merupakan pelabuhan maritim kuno"
    ],
    correct: 1,
    explanation: "Benar! Dusun Malatan dikenal sebagai model Bina Damai (Peace Building) di mana warga lintas agama hidup sangat rukun bahkan dalam satu ikatan keluarga besar."
  },
  {
    q: "3. Apa nama ritual penyucian alat perajang tembakau tradisional (Gobang) yang dilakukan petani di kawasan Bansari menjelang panen raya?",
    options: ["A. Sekaten", "B. Jamasan Gobang & Wiwitan", "C. Labuhan Samudra", "D. Kasada"],
    correct: 1,
    explanation: "Benar! Petani tembakau di Bansari menggelar tradisi Wiwitan dan Jamasan Gobang sebagai ungkapan syukur sebelum merajang Tembakau Lembutan."
  },
  {
    q: "4. Siapakah nama tokoh ulama lokal di Desa Bansari (Dusun Tambahrejo) yang meninggalkan warisan sejarah berupa manuskrip Mushaf Al-Qur'an kuno?",
    options: ["A. Kyai Mohaedi Anwar", "B. Sunan Geseng", "C. Ki Ageng Makukuhan", "D. Pangeran Diponegoro"],
    correct: 0,
    explanation: "Tepat sekali! Kyai Mohaedi Anwar dari Dusun Tambahrejo, Desa Bansari dikenal luas atas peninggalan manuskrip Mushaf Al-Qur'an kuno yang dikaji peneliti filologi."
  },
  {
    q: "5. Dusun Malatan, Desa Bansari terletak di lereng sebelah timur gunung apa pada ketinggian sekitar 1.000–1.500 mdpl?",
    options: ["A. Gunung Merapi", "B. Gunung Lawu", "C. Gunung Sindoro", "D. Gunung Muria"],
    correct: 2,
    explanation: "Benar! Desa Bansari dan Dusun Malatan berada tepat di lereng timur Gunung Sindoro, Kabupaten Temanggung."
  }
];

const DEFAULT_ORAL_ARCHIVES = [
  {
    speaker: "Catatan Sesepuh Dusun Malatan (Arsip Dokumentasi Budaya)",
    category: "Asal-usul & Babad Alas",
    date: "Arsip Dasar",
    content: "Sejak masa para pendahulu membuka lahan di kaki Gunung Sindoro, warga Dusun Malatan memegang teguh prinsip 'rukun agawe santosa'. Meski kemudian keturunan warga memeluk keyakinan yang berbeda (Islam dan Kristen), ikatan darah leluhur dusun dan tradisi Merti Dusun tetap menyatukan seluruh warga tanpa terkecuali."
  },
  {
    speaker: "Komunitas Petani Tembakau Desa Bansari",
    category: "Sejarah Pertanian Tembakau",
    date: "Arsip Dasar",
    content: "Tembakau Lembutan Bansari hanya bisa menghasilkan aroma dan mutu terbaik apabila dirajang pada dini hari dan dijemur di atas rigen bambu dengan embun pagi dan panas matahari lereng timur Gunung Sindoro."
  }
];

// =========================================================================
// INITIALIZATION & RENDERING
// =========================================================================

let scrollObserver = null;
let currentPageIndex = 0;
let isPageTransitioning = false;
const IS_MOBILE_DEVICE = window.matchMedia("(max-width: 920px), (pointer: coarse)").matches;

const NAV_PAGES = [
  { id: "beranda", label: "Beranda" },
  { id: "linimasa", label: "Lini Masa Sejarah" },
  { id: "peta-kultural", label: "Peta Spasial & Kontur" },
  { id: "ensiklopedia", label: "Budaya & Tembakau" },
  { id: "bina-damai", label: "Harmoni Sosial (Bina Damai)" },
  { id: "eksplorasi-ai", label: "Tanya Sejarah & Kuis" },
  { id: "referensi", label: "Referensi Ilmiah" }
];

document.addEventListener("DOMContentLoaded", () => {
  initSindoroGate();
  initScrollProgress();
  initThemeToggle();
  initTimeline();
  initSpatialMap();
  initEncyclopedia();
  initTabs();
  initHistorianQA();
  initQuiz();
  initOralHistory();
  initReferences();
  initBidirectionalScrollAnimations();
  initMultiPageTobaccoNavigation();
  if (!IS_MOBILE_DEVICE) {
    initInteractive3DTilt();
    initMicroParallax();
    init3DTobaccoLightTheme();
  }
  initDetailPopupModal();

  document.getElementById("printArchiveBtn").addEventListener("click", () => {
    window.print();
  });
});

function createTobaccoLeafSvg(variantIndex) {
  const palettes = [
    // 0: Fresh Emerald Tobacco Leaf (Daun Tembakau Segar Lereng Sindoro)
    { id: `tbGrad0_${variantIndex}`, c1: "#16a34a", c2: "#064e3b", vein: "#86efac", stroke: "#052e16" },
    // 1: Ripening Golden-Olive Leaf (Daun Tembakau Matang Wiwitan)
    { id: `tbGrad1_${variantIndex}`, c1: "#65a30d", c2: "#365314", vein: "#fde047", stroke: "#1a2e05" },
    // 2: Cured Srintil / Lembutan Gold-Amber Leaf (Emas Hijau Temanggung)
    { id: `tbGrad2_${variantIndex}`, c1: "#d97706", c2: "#78350f", vein: "#fef08a", stroke: "#451a03" }
  ];
  const pal = palettes[variantIndex % palettes.length];

  return `
    <svg viewBox="0 0 240 240" width="100%" height="100%" aria-hidden="true">
      <defs>
        <linearGradient id="${pal.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${pal.c1}" />
          <stop offset="100%" stop-color="${pal.c2}" />
        </linearGradient>
      </defs>
      <!-- Botanical Broad Ovate Tobacco Leaf Blade -->
      <path d="M 120,10
               C 168,38 206,86 202,142
               C 198,188 162,216 120,226
               C 78,216 42,188 38,142
               C 34,86 72,38 120,10 Z"
            fill="url(#${pal.id})"
            stroke="${pal.stroke}"
            stroke-width="3" />
      <!-- Central Midrib (Tulang Daun Utama) -->
      <path d="M 120,16 L 120,232" stroke="${pal.vein}" stroke-width="3.2" stroke-linecap="round" opacity="0.88" />
      <!-- Lateral Veins (Urat Daun Tembakau) -->
      <path d="M 120,52 Q 152,48 172,38
               M 120,82 Q 164,74 190,62
               M 120,115 Q 170,106 196,94
               M 120,148 Q 165,140 192,130
               M 120,180 Q 154,174 176,166
               M 120,52 Q 88,48 68,38
               M 120,82 Q 76,74 50,62
               M 120,115 Q 70,106 44,94
               M 120,148 Q 75,140 48,130
               M 120,180 Q 86,174 64,166"
            fill="none"
            stroke="${pal.vein}"
            stroke-width="1.7"
            stroke-linecap="round"
            opacity="0.68" />
    </svg>
  `;
}

function initMultiPageTobaccoNavigation() {
  const layer = document.getElementById("tobaccoLeavesLayer");
  const curtain = document.getElementById("tobaccoLeafCurtain");
  const curtainTitle = document.getElementById("tobaccoCurtainTitle");
  const prevBtn = document.getElementById("prevPageBtn");
  const nextBtn = document.getElementById("nextPageBtn");
  const indicator = document.getElementById("pagerIndicator");

  // Build overlapping Tobacco Leaves (12 on mobile for 60fps smoothness, 32 on desktop)
  if (layer) {
    const cols = IS_MOBILE_DEVICE ? 4 : 8;
    const rows = IS_MOBILE_DEVICE ? 3 : 4;
    let html = "";
    let idx = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const xPct = (c / (cols - 1)) * 100;
        const yPct = (r / (rows - 1)) * 100;

        // Calculate outward sweep vectors from screen center
        const dx = xPct - 50;
        const dy = yPct - 50;
        const angleRad = Math.atan2(dy, dx);
        const startDist = 115; // vw/vh offscreen
        const txStart = `${Math.round(Math.cos(angleRad) * startDist)}vw`;
        const tyStart = `${Math.round(Math.sin(angleRad) * startDist)}vh`;
        const txEnd = `${Math.round(Math.cos(angleRad + 0.35) * -startDist)}vw`;
        const tyEnd = `${Math.round(Math.sin(angleRad + 0.35) * -startDist)}vh`;

        const rotStart = `${(idx * 47) % 360 - 180}deg`;
        const rotMid = `${((idx * 29) % 90) - 45}deg`;
        const rotEnd = `${(idx * 61) % 360 - 180}deg`;
        const delayMs = ((r + c) % 5) * (IS_MOBILE_DEVICE ? 18 : 32);
        const sizePx = 390 + ((idx * 23) % 110);

        html += `
          <div class="tobacco-leaf-item"
               style="--leaf-x:${xPct}%; --leaf-y:${yPct}%; --leaf-size:${sizePx}px;
                      --tx-start:${txStart}; --ty-start:${tyStart};
                      --tx-end:${txEnd}; --ty-end:${tyEnd};
                      --rot-start:${rotStart}; --rot-mid:${rotMid}; --rot-end:${rotEnd};
                      --leaf-delay:${delayMs}ms; --scale-mid:1.32;">
            ${createTobaccoLeafSvg(idx)}
          </div>
        `;
        idx++;
      }
    }

    if (!IS_MOBILE_DEVICE) {
      // Add 18 golden Sindoro dew / pollen spores on desktop
      for (let s = 0; s < 18; s++) {
        const sx = 8 + ((s * 37) % 84);
        const sy = 10 + ((s * 53) % 80);
        const sSize = 6 + (s % 5) * 2;
        const sDx = ((s % 2 === 0 ? 1 : -1) * (25 + (s * 11) % 60)) + "px";
        const sDy = (-30 - ((s * 17) % 55)) + "px";
        const sDelay = (s % 6) * 35;
        html += `
          <span class="tobacco-spore"
                style="--spore-x:${sx}%; --spore-y:${sy}%; --spore-size:${sSize}px;
                       --spore-dx:${sDx}; --spore-dy:${sDy}; --spore-delay:${sDelay}ms;"></span>
        `;
      }
    }

    layer.innerHTML = html;
  }

  // Convert all 7 sections into independent pages
  NAV_PAGES.forEach((p, i) => {
    const sec = document.getElementById(p.id);
    if (sec) {
      sec.classList.add("page-section");
      if (i === 0) sec.classList.add("active-page");
    }
  });

  function updatePageUi(index) {
    currentPageIndex = index;
    const activePage = NAV_PAGES[index];

    NAV_PAGES.forEach((p, i) => {
      const sec = document.getElementById(p.id);
      if (sec) sec.classList.toggle("active-page", i === index);
    });

    // Update top navbar active state
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.toggle("active-nav", link.getAttribute("href") === `#${activePage.id}`);
    });

    // Update bottom pager dock
    if (indicator) {
      indicator.textContent = `Halaman ${index + 1} / ${NAV_PAGES.length} · ${activePage.label}`;
    }
    if (prevBtn) {
      prevBtn.disabled = index === 0;
      prevBtn.textContent = index > 0
        ? `← ${NAV_PAGES[index - 1].label}`
        : "← Awal Halaman";
    }
    if (nextBtn) {
      nextBtn.disabled = index === NAV_PAGES.length - 1;
      nextBtn.textContent = index < NAV_PAGES.length - 1
        ? `${NAV_PAGES[index + 1].label} →`
        : "Halaman Terakhir";
    }

    window.scrollTo({ top: 0, behavior: "instant" });

    // Re-trigger entrance animations for elements on the newly active page
    const activeSection = document.getElementById(activePage.id);
    if (activeSection) {
      activeSection.querySelectorAll(".scroll-anim").forEach((el) => {
        el.classList.remove("in-view", "out-top");
        el.classList.add("out-bottom");
        setTimeout(() => {
          el.classList.add("in-view");
          el.classList.remove("out-bottom");
        }, 60);
      });
    }

    if (activePage.id === "beranda") {
      animateHeroCounters();
    } else if (activePage.id === "peta-kultural") {
      animateMapSvgPaths();
    }
  }

  function navigateWithTobaccoLeaves(targetId) {
    const targetIndex = NAV_PAGES.findIndex((p) => p.id === targetId);
    if (targetIndex < 0 || targetIndex === currentPageIndex || isPageTransitioning) return;

    isPageTransitioning = true;
    const targetPage = NAV_PAGES[targetIndex];
    if (curtainTitle) {
      curtainTitle.textContent = targetPage.label;
    }

    // Ensure clean starting state before sweeping leaves in
    curtain.classList.remove("resetting", "opening");
    void curtain.offsetWidth;
    curtain.classList.add("closing");

    // Phase 2: While screen is covered by tobacco leaves, swap the active page
    setTimeout(() => {
      updatePageUi(targetIndex);
    }, 580);

    // Phase 3: Tobacco leaves part and sweep away to reveal the new page
    setTimeout(() => {
      curtain.classList.remove("closing");
      curtain.classList.add("opening");
    }, 680);

    // Phase 4: Seamless transitionless reset back to starting coordinates
    setTimeout(() => {
      curtain.classList.add("resetting");
      curtain.classList.remove("opening");
      void curtain.offsetWidth;
      setTimeout(() => {
        curtain.classList.remove("resetting");
        isPageTransitioning = false;
      }, 30);
    }, 1240);
  }

  // Intercept all internal #hash links (Navbar, Brand, Hero CTAs)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return;
      const targetId = href.slice(1);
      if (NAV_PAGES.some((p) => p.id === targetId)) {
        e.preventDefault();
        navigateWithTobaccoLeaves(targetId);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPageIndex > 0) {
        navigateWithTobaccoLeaves(NAV_PAGES[currentPageIndex - 1].id);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentPageIndex < NAV_PAGES.length - 1) {
        navigateWithTobaccoLeaves(NAV_PAGES[currentPageIndex + 1].id);
      }
    });
  }

  // Ensure printing shows all pages
  window.addEventListener("beforeprint", () => {
    document.querySelectorAll(".page-section").forEach((s) => s.classList.add("active-page"));
  });
  window.addEventListener("afterprint", () => {
    updatePageUi(currentPageIndex);
  });

  updatePageUi(0);
}

function initBidirectionalScrollAnimations() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  // Setup IntersectionObserver (on mobile, unobserve once in view for 60fps native scrolling)
  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          el.classList.remove("out-bottom", "out-top");
          if (IS_MOBILE_DEVICE) {
            scrollObserver.unobserve(el);
          }
        } else if (!IS_MOBILE_DEVICE) {
          el.classList.remove("in-view");
          if (entry.boundingClientRect.top < 0) {
            el.classList.add("out-top");
            el.classList.remove("out-bottom");
          } else {
            el.classList.add("out-bottom");
            el.classList.remove("out-top");
          }
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -15px 0px"
    }
  );

  registerScrollTargets();

  // Navbar shadow on scroll up/down
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (navbar) {
      navbar.classList.toggle("scrolled-nav", scrollY > 24);
    }
  }, { passive: true });
}

function registerScrollTargets() {
  if (!scrollObserver) return;

  const groups = [
    { selector: ".hero-content > *", anim: "fade-up", stagger: 80 },
    { selector: ".hero-card", anim: "slide-right", stagger: 0 },
    { selector: ".stat-item", anim: "zoom-soft", stagger: 75 },
    { selector: ".section-header", anim: "fade-up", stagger: 0 },
    { selector: ".timeline-card", anim: "slide-left", stagger: 70 },
    { selector: ".map-canvas-box", anim: "slide-left", stagger: 0 },
    { selector: ".map-detail-panel", anim: "slide-right", stagger: 100 },
    { selector: ".archive-card", anim: "fade-up", stagger: 65 },
    { selector: ".peace-card", anim: "zoom-soft", stagger: 90 },
    { selector: ".interactive-tabs, .tab-panel.active", anim: "fade-up", stagger: 60 },
    { selector: ".ref-item", anim: "slide-left", stagger: 65 }
  ];

  groups.forEach((group) => {
    const nodes = document.querySelectorAll(group.selector);
    nodes.forEach((node, idx) => {
      if (!node.classList.contains("scroll-anim")) {
        node.classList.add("scroll-anim", "out-bottom");
        node.setAttribute("data-anim", group.anim);
        if (group.stagger > 0) {
          const delay = (idx % 6) * group.stagger;
          node.style.setProperty("--anim-delay", `${delay}ms`);
        }
      }
      scrollObserver.observe(node);
    });
  });
}

function initSindoroGate() {
  const gate = document.getElementById("sindoroGate");
  const scene = document.getElementById("bellScene");
  const bellTrigger = document.getElementById("bellTrigger");
  const holdBtn = document.getElementById("holdBtn");
  const btnText = document.getElementById("btnText");

  if (!gate || !scene || !bellTrigger || !holdBtn) return;

  let isLit = false;
  let isGateOpened = false;
  let isPulling = false;
  let startY = 0;
  let currentPullY = 0;
  let rafPullId = null;
  const PULL_THRESHOLD = 44; // Jarak tarik ke bawah (px) agar saklar lampu menyala

  // Smooth interactive parallax on desktop mouse move when not pulling
  if (!IS_MOBILE_DEVICE) {
    scene.addEventListener("pointermove", (e) => {
      if (isLit || isPulling) return;
      const nx = (e.clientX / window.innerWidth) - 0.5;
      const ny = (e.clientY / window.innerHeight) - 0.5;
      scene.style.setProperty("--bell-sway", `${(-nx * 2.2).toFixed(2)}deg`);
      scene.style.setProperty("--bg-shift-x", `${(-nx * 14).toFixed(1)}px`);
      scene.style.setProperty("--bg-shift-y", `${(-ny * 9).toFixed(1)}px`);
    }, { passive: true });
  }

  function openMainWebsite() {
    if (isGateOpened) return;
    isGateOpened = true;
    gate.classList.add("gate-hidden");
    document.body.classList.remove("gate-locked");
    animateHeroCounters();
    showToast("Selamat datang di Portal Sejarah & Warisan Dusun Malatan");
    setTimeout(() => {
      gate.style.display = "none";
    }, 950);
  }

  function igniteBrightLampAndEnter() {
    if (isLit) return;
    isLit = true;
    isPulling = false;
    if (rafPullId) cancelAnimationFrame(rafPullId);
    scene.classList.remove("is-pulling", "pull-ready");
    scene.style.setProperty("--bell-sway", "0deg");
    scene.style.setProperty("--pull-y", "0px");
    scene.style.setProperty("--pull-progress", "1");
    scene.classList.add("lit");
    gate.classList.add("lamp-lit");
    if (btnText) btnText.textContent = "✨ Lampu Menyala · Memasuki Portal...";
    setTimeout(openMainWebsite, 1100);
  }

  function startPull(clientY, e) {
    if (isLit) {
      openMainWebsite();
      return;
    }
    if (e && e.cancelable) e.preventDefault();
    isPulling = true;
    startY = clientY;
    currentPullY = 0;
    scene.classList.add("is-pulling");
    scene.classList.remove("pull-hint-bounce");
    if (btnText) btnText.textContent = "↓ Tarik Terus ke Bawah...";
  }

  function movePull(clientY) {
    if (!isPulling || isLit) return;
    const rawDelta = Math.max(0, clientY - startY);
    const dampedY = rawDelta <= PULL_THRESHOLD
      ? rawDelta
      : PULL_THRESHOLD + (rawDelta - PULL_THRESHOLD) * 0.45;
    currentPullY = Math.min(100, dampedY);

    if (currentPullY >= PULL_THRESHOLD + 22) {
      igniteBrightLampAndEnter();
      return;
    }

    if (rafPullId) return;
    rafPullId = requestAnimationFrame(() => {
      rafPullId = null;
      if (!isPulling || isLit) return;
      const progress = Math.min(1, currentPullY / PULL_THRESHOLD);
      scene.style.setProperty("--pull-y", `${currentPullY.toFixed(1)}px`);
      scene.style.setProperty("--pull-progress", progress.toFixed(2));
      scene.classList.toggle("pull-ready", currentPullY >= PULL_THRESHOLD);

      if (btnText) {
        if (currentPullY >= PULL_THRESHOLD) {
          btnText.textContent = "✨ Lepaskan Tarikan Untuk Menyalakan";
        } else {
          const pct = Math.max(5, Math.round(progress * 100));
          btnText.textContent = `↓ Tarik ke Bawah (${pct}%)`;
        }
      }
    });
  }

  function endPull() {
    if (!isPulling || isLit) return;
    isPulling = false;
    if (rafPullId) {
      cancelAnimationFrame(rafPullId);
      rafPullId = null;
    }
    scene.classList.remove("is-pulling", "pull-ready");

    if (currentPullY >= PULL_THRESHOLD) {
      igniteBrightLampAndEnter();
    } else {
      scene.style.setProperty("--pull-y", "0px");
      scene.style.setProperty("--pull-progress", "0");
      scene.classList.remove("pull-hint-bounce");
      void scene.offsetWidth;
      scene.classList.add("pull-hint-bounce");
      if (btnText) btnText.textContent = "↓ Tarik Lampu / Tali ke Bawah Untuk Menyalakan";
    }
    currentPullY = 0;
  }

  [bellTrigger, holdBtn].forEach((el) => {
    el.addEventListener("mousedown", (e) => startPull(e.clientY, e));
    el.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches[0]) startPull(e.touches[0].clientY, e);
    }, { passive: false });

    el.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown" || e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        scene.style.setProperty("--pull-y", "50px");
        scene.style.setProperty("--pull-progress", "1");
        setTimeout(igniteBrightLampAndEnter, 220);
      }
    });
  });

  window.addEventListener("mousemove", (e) => movePull(e.clientY), { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (isPulling && e.touches && e.touches[0]) {
      if (e.cancelable) e.preventDefault();
      movePull(e.touches[0].clientY);
    }
  }, { passive: false });

  window.addEventListener("mouseup", endPull, { passive: true });
  window.addEventListener("touchend", endPull, { passive: true });
  window.addEventListener("touchcancel", endPull, { passive: true });
}

function triggerCrossfade(el) {
  if (!el) return;
  el.classList.remove("ui-crossfade-enter");
  void el.offsetWidth;
  el.classList.add("ui-crossfade-enter");
}

function animateHeroCounters() {
  const statStrongNodes = document.querySelectorAll(".hero-stats .stat-item strong");
  if (statStrongNodes.length < 4) return;

  const configs = [
    { el: statStrongNodes[0], render: (p) => String(Math.round(1850 + p * (2001 - 1850))) },
    {
      el: statStrongNodes[1],
      render: (p) => {
        const v1 = Math.round(p * 1000).toLocaleString("id-ID");
        const v2 = Math.round(p * 1500).toLocaleString("id-ID");
        return `${v1}–${v2}m`;
      }
    },
    {
      el: statStrongNodes[2],
      render: (p) => `${Math.round(p * 13)} Desa / ${Math.round(p * 43)} Dusun`
    },
    {
      el: statStrongNodes[3],
      render: (p) => `${Math.round(p * 100)}% Harmoni`
    }
  ];

  const duration = 1250;
  const startTime = performance.now();

  configs.forEach((c) => c.el.classList.add("stat-counting"));

  function step(now) {
    const t = Math.min(1, (now - startTime) / duration);
    // Ease out quart
    const eased = 1 - Math.pow(1 - t, 4);
    configs.forEach((c) => {
      c.el.textContent = c.render(eased);
    });
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      configs.forEach((c) => c.el.classList.remove("stat-counting"));
    }
  }

  requestAnimationFrame(step);
}

function animateMapSvgPaths() {
  const svg = document.getElementById("culturalMapSvg");
  if (!svg) return;
  const paths = svg.querySelectorAll("#layerContours path.contour-index, #layerContours path.contour-sub, #layerHydro path");
  paths.forEach((p, idx) => {
    try {
      const len = Math.ceil(p.getTotalLength());
      if (len > 0) {
        p.classList.remove("svg-draw-path");
        p.style.setProperty("--path-len", String(len));
        p.style.setProperty("--draw-delay", `${(idx % 12) * 45}ms`);
        void p.getBoundingClientRect();
        p.classList.add("svg-draw-path");
      }
    } catch {
      // Ignore if path length is unavailable
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    bar.style.width = scrolled + "%";
  });
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");

  function syncThemeButton(theme) {
    if (icon) icon.textContent = theme === "dark" ? "🌿" : "🌙";
    if (label) label.textContent = theme === "dark" ? "Tema Terang 3D" : "Tema Gelap";
  }

  syncThemeButton(document.documentElement.getAttribute("data-theme") || "dark");

  btn.addEventListener("click", () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    syncThemeButton(next);
    showToast(
      next === "light"
        ? "🌿 Tema Terang: Lanskap Tanaman Tembakau 3D Lereng Sindoro diaktifkan"
        : "🌙 Tema Gelap: Arsip Malam Lereng Sindoro diaktifkan"
    );
  });
}

// 1. Timeline
function initTimeline() {
  const container = document.getElementById("timelineContainer");
  const buttons = document.querySelectorAll("#timelineFilters .filter-btn");

  function render(eraFilter) {
    const items = eraFilter === "all"
      ? TIMELINE_DATA
      : TIMELINE_DATA.filter((item) => item.era === eraFilter);

    container.innerHTML = items.map((item, idx) => `
      <article class="timeline-card" data-tl-idx="${idx}" style="cursor:pointer;" title="Klik untuk membuka Pop-up Detail">
        <div class="tl-meta">
          <span class="tl-year">${item.year}</span>
          <span class="tl-badge">${item.badge}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="tl-source">📚 Sumber / Rujukan: ${item.source}</div>
        <div class="card-popup-trigger">🔍 Buka Pop-up Bacaan Jelas →</div>
      </article>
    `).join("");

    container.querySelectorAll(".timeline-card").forEach((card) => {
      card.addEventListener("click", () => {
        const item = items[Number(card.getAttribute("data-tl-idx"))];
        if (!item) return;
        openDetailPopup({
          category: item.year,
          meta: item.badge,
          title: item.title,
          body: item.desc,
          highlight: `📚 Sumber / Rujukan Akademik: ${item.source}`
        });
      });
    });

    triggerCrossfade(container);
    registerScrollTargets();
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.getAttribute("data-era"));
    });
  });

  render("all");
}

// 2. Spatial Cultural & Topographic Contour Map
function initSpatialMap() {
  const pins = document.querySelectorAll(".map-pin");
  const panel = document.getElementById("mapDetailPanel");
  const svg = document.getElementById("culturalMapSvg");
  const profileLabel = document.getElementById("activeProfileSpot");

  const toggleContours = document.getElementById("toggleContours");
  const toggleHydro = document.getElementById("toggleHydro");
  const toggleGrid = document.getElementById("toggleGrid");
  const layerContours = document.getElementById("layerContours");
  const layerHydro = document.getElementById("layerHydro");
  const layerGrid = document.getElementById("layerGrid");

  if (toggleContours && layerContours) {
    toggleContours.addEventListener("change", () => {
      layerContours.style.display = toggleContours.checked ? "block" : "none";
      if (toggleContours.checked) animateMapSvgPaths();
    });
  }
  if (toggleHydro && layerHydro) {
    toggleHydro.addEventListener("change", () => {
      layerHydro.style.display = toggleHydro.checked ? "block" : "none";
      if (toggleHydro.checked) animateMapSvgPaths();
    });
  }
  if (toggleGrid && layerGrid) {
    toggleGrid.addEventListener("change", () => {
      layerGrid.style.display = toggleGrid.checked ? "block" : "none";
    });
  }

  // Real-time Topographic Cursor Elevation & Slope Telemetry
  if (svg) {
    const telemetryEl = document.getElementById("topoTelemetry");
    svg.addEventListener("mousemove", (e) => {
      const rect = svg.getBoundingClientRect();
      const nx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const ny = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

      // Distance from NW Gunung Sindoro slope origin (0,0) -> SE lower valley (1,1)
      const radial = Math.sqrt(nx * nx * 0.65 + ny * ny * 0.55);
      const elev = Math.round(2120 - radial * 1080);
      const slopePct = Math.max(6, Math.min(42, Math.round(38 - radial * 28)));
      const slopeDesc = slopePct > 25 ? "Curam (Lereng Atas)" : (slopePct > 14 ? "Agak Curam (Lereng Tengah)" : "Landai (Sabuk Permukiman)");

      const latSec = Math.round(15 + ny * 95);
      const lonSec = Math.round(20 + nx * 135);
      const latMin = 17 + Math.floor(latSec / 60);
      const lonMin = Math.floor(lonSec / 60);

      if (telemetryEl) {
        telemetryEl.innerHTML = `
          <span>🧭 Koordinat: <strong>07°${latMin}'${String(latSec % 60).padStart(2, "0")}" LS · 110°0${lonMin}'${String(lonSec % 60).padStart(2, "0")}" BT</strong></span>
          <span>⛰️ Elevasi Kontur: <strong>${elev.toLocaleString("id-ID")} mdpl</strong></span>
          <span>📐 Kemiringan: <strong>${slopePct}% (${slopeDesc})</strong></span>
        `;
      }
    });
  }

  function renderSpot(key, elevBadge) {
    const spot = MAP_SPOTS[key];
    if (!spot) return;
    if (profileLabel) {
      profileLabel.textContent = `Lokus Aktif: ${spot.title} (${elevBadge || "1.250 mdpl"})`;
    }
    panel.innerHTML = `
      <div>
        <span class="spot-tag">${spot.tag}</span>
        <div style="margin-bottom: 8px; font-size: 12.5px; color: var(--accent-emerald-bright); font-weight: 700; font-family: monospace;">
          ⛰️ Garis Kontur: ${elevBadge || "1.250 mdpl"} · Tanah Andosol Vulkanik Sindoro
        </div>
        <h3>${spot.title}</h3>
        <p>${spot.desc}</p>
        <div class="spot-facts">
          ${spot.facts.map((f) => `<div>${f}</div>`).join("")}
        </div>
        <button type="button" class="btn-secondary" id="openSpotPopupBtn" style="margin-top: 14px; width: 100%;">
          🔍 Buka Pop-up Detail Lokus (${spot.title})
        </button>
      </div>
      <div style="margin-top: 18px; font-size: 12.5px; color: var(--text-muted);">
        💡 Geser kursor di atas garis kontur untuk melihat perubahan ketinggian (mdpl), atau klik nomor lokus lain.
      </div>
    `;
    const spotPopupBtn = document.getElementById("openSpotPopupBtn");
    if (spotPopupBtn) {
      spotPopupBtn.addEventListener("click", () => {
        openDetailPopup({
          category: spot.tag,
          meta: `Elevasi Kontur: ${elevBadge || "1.250 mdpl"}`,
          title: spot.title,
          body: spot.desc,
          highlight: spot.facts.join(" • ")
        });
      });
    }
    triggerCrossfade(panel);
  }

  pins.forEach((pin) => {
    pin.addEventListener("click", () => {
      pins.forEach((p) => p.classList.remove("active"));
      pin.classList.add("active");
      renderSpot(pin.getAttribute("data-spot"), pin.getAttribute("data-elev"));
    });
  });

  renderSpot("malatan-pusat", "1.250 mdpl");
}

// 3. Encyclopedia Archive
function initEncyclopedia() {
  const grid = document.getElementById("archiveGrid");
  const searchInput = document.getElementById("archiveSearch");
  const catSelect = document.getElementById("archiveCategory");

  function render() {
    const q = searchInput.value.trim().toLowerCase();
    const cat = catSelect.value;

    const filtered = ARCHIVE_DATA.filter((item) => {
      const matchCat = cat === "all" || item.category === cat;
      const matchText = !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.highlight.toLowerCase().includes(q);
      return matchCat && matchText;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p style="color: var(--text-muted);">Tidak ditemukan entri yang cocok dengan kata kunci tersebut.</p>`;
      return;
    }

    grid.innerHTML = filtered.map((item, idx) => `
      <article class="archive-card" data-arch-idx="${idx}" style="cursor:pointer;" title="Klik untuk membuka Pop-up Detail">
        <div>
          <div class="archive-cat">${item.category}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div>
          <div class="archive-highlight">${item.highlight}</div>
          <div class="card-popup-trigger">🔍 Buka Pop-up Bacaan Jelas →</div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".archive-card").forEach((card) => {
      card.addEventListener("click", () => {
        const item = filtered[Number(card.getAttribute("data-arch-idx"))];
        if (!item) return;
        openDetailPopup({
          category: item.category,
          meta: "Ensiklopedia Budaya & Tembakau Bansari",
          title: item.title,
          body: item.desc,
          highlight: item.highlight
        });
      });
    });

    triggerCrossfade(grid);
    registerScrollTargets();
  }

  searchInput.addEventListener("input", render);
  catSelect.addEventListener("change", render);
  render();
}

// 4. Interactive Tabs
function initTabs() {
  const btns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const targetPanel = document.getElementById(btn.getAttribute("data-tab"));
      if (targetPanel) {
        targetPanel.classList.add("active");
        triggerCrossfade(targetPanel);
      }
    });
  });
}

// 5. Smart Historian QA
function initHistorianQA() {
  const chatBox = document.getElementById("chatBox");
  const form = document.getElementById("qaForm");
  const input = document.getElementById("qaInput");
  const chips = document.querySelectorAll(".q-chip");

  function answerQuery(question) {
    const q = question.toLowerCase();
    let reply = "";

    if (q.includes("kecamatan") || q.includes("pemekaran") || q.includes("2001") || q.includes("peran")) {
      reply = "<strong>Sejarah Pembentukan Kecamatan Bansari & Peran Dusun Malatan:</strong><br>Kecamatan Bansari resmi dibentuk pada <strong>tahun 2001</strong> sebagai hasil pemekaran dari Kecamatan Parakan, Kabupaten Temanggung. Kecamatan ini membawahi <strong>13 desa, 43 dusun, 45 RW, dan 176 RT</strong>. Desa Bansari ditetapkan sebagai ibu kota kecamatan, dan <strong>Dusun Malatan</strong> menjadi pusat aktivitas pemerintahan tempat berdirinya Kantor Kecamatan Bansari.";
    } else if (q.includes("kerukunan") || q.includes("agama") || q.includes("uin") || q.includes("gereja") || q.includes("masjid") || q.includes("damai")) {
      reply = "<strong>Model Kerukunan Antarumat Beragama (Bina Damai) di Dusun Malatan:</strong><br>Dalam penelitian sosiologi agama (seperti skripsi & jurnal di <em>UIN Sunan Kalijaga Yogyakarta</em>), Dusun Malatan dijadikan rujukan karena harmonisasi warga Muslim dan Kristen/Katolik yang hidup berdampingan—bahkan dalam satu keluarga besar. Menggunakan kerangka <em>Peace Building</em> (Johan Galtung) dan <em>AGIL</em> (Talcott Parsons), kohesi warga Malatan dijaga melalui tradisi sambatan (gotong royong), silaturahmi lintas hari raya, serta kenduri dusun bersama.";
    } else if (q.includes("tembakau") || q.includes("wiwitan") || q.includes("jamasan") || q.includes("gobang") || q.includes("lembutan")) {
      reply = "<strong>Tradisi Tembakau Lembutan, Wiwitan & Jamasan Gobang:</strong><br>Bansari dan Dusun Malatan berada di lereng timur Gunung Sindoro (1.000–1.500 mdpl) yang menghasilkan <strong>Tembakau Lembutan dan Srintil</strong> bernilai tinggi. Menjelang musim panen dan perajangan, petani menggelar ritual <strong>Wiwitan</strong> (doa syukur panen pertama) dan <strong>Jamasan Gobang</strong> (pencucian pisau perajang tembakau tradisional) sebagai penghormatan terhadap alam dan warisan leluhur.";
    } else if (q.includes("mohaedi") || q.includes("manuskrip") || q.includes("kuno") || q.includes("tambahrejo") || q.includes("ulama")) {
      reply = "<strong>Jejak Ulama Kyai Mohaedi Anwar & Manuskrip Kuno Desa Bansari:</strong><br>Di Desa Bansari (khususnya Dusun Tambahrejo yang bersebelahan dengan Malatan), terdapat peninggalan sejarah intelektual Islam berupa <strong>Manuskrip Mushaf Al-Qur'an Kuno</strong> koleksi almarhum <strong>Kyai Mohaedi Anwar</strong>. Manuskrip tulisan tangan ini telah diteliti oleh akademisi UIN Salatiga dan UIN Walisongo sebagai bukti tingginya budaya literasi keagamaan di lereng Sindoro.";
    } else if (q.includes("merti") || q.includes("nyadran") || q.includes("gelar budaya") || q.includes("jaran kepang")) {
      reply = "<strong>Merti Dusun, Nyadran & Gelar Budaya Malatan:</strong><br>Warga Dusun Malatan rutin menyelenggarakan <strong>Merti Dusun / Nyadran</strong> dan <strong>Gelar Budaya Malatan</strong> yang menampilkan kesenian tradisional seperti <em>Jaran Kepang (Kuda Lumping)</em>, <em>Warok</em>, serta tradisi makan bersama (<em>Kembul Bujana</em>). Tradisi ini menjadi pengikat solidaritas warga lintas iman dan sarana edukasi sejarah lokal bagi generasi muda.";
    } else {
      reply = "<strong>Informasi Sejarah Dusun Malatan & Desa Bansari:</strong><br>Dusun Malatan merupakan dusun sentral di <strong>Desa Bansari, Kecamatan Bansari, Kabupaten Temanggung</strong> (lereng timur Gunung Sindoro, 1.000–1.500 mdpl). Dusun ini dikenal karena tiga pilar utama: (1) Pusat pemerintahan Kecamatan Bansari sejak pemekaran 2001, (2) Sentra budaya agraris <em>Tembakau Lembutan</em> & <em>Gelar Budaya Merti Dusun</em>, serta (3) Laboratorium hidup toleransi antarumat beragama (<em>Bina Damai</em>).";
    }

    chatBox.innerHTML += `
      <div class="chat-msg user">${question}</div>
      <div class="chat-msg bot">${reply}</div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    input.value = "";
    answerQuery(val);
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      answerQuery(chip.getAttribute("data-q"));
    });
  });
}

// 6. Local History Quiz
function initQuiz() {
  const container = document.getElementById("quizContainer");
  let current = 0;
  let score = 0;

  function renderQuestion() {
    if (current >= QUIZ_QUESTIONS.length) {
      container.innerHTML = `
        <div class="quiz-card" style="text-align:center; padding: 20px;">
          <h3>🎉 Kuis Selesai! Skor Anda: ${score} / ${QUIZ_QUESTIONS.length}</h3>
          <p style="color: var(--text-secondary);">Terima kasih telah mempelajari sejarah lokal Dusun Malatan dan Desa Bansari, Kecamatan Bansari, Kabupaten Temanggung.</p>
          <div>
            <button class="btn-primary" id="restartQuizBtn">Ulangi Kuis</button>
          </div>
        </div>
      `;
      document.getElementById("restartQuizBtn").addEventListener("click", () => {
        current = 0;
        score = 0;
        renderQuestion();
      });
      return;
    }

    const item = QUIZ_QUESTIONS[current];
    container.innerHTML = `
      <div class="quiz-card">
        <div style="font-size:13px; color:var(--accent-gold); font-weight:700;">SOAL ${current + 1} DARI ${QUIZ_QUESTIONS.length} · SKOR SEMENTARA: ${score}</div>
        <h3>${item.q}</h3>
        <div class="quiz-options" id="quizOptions">
          ${item.options.map((opt, idx) => `<button class="quiz-opt" data-idx="${idx}">${opt}</button>`).join("")}
        </div>
        <div id="quizFeedback" style="display:none; padding:12px; border-radius:10px; background:var(--bg-secondary); font-size:14px;"></div>
      </div>
    `;
    triggerCrossfade(container);

    const opts = container.querySelectorAll(".quiz-opt");
    const feedback = document.getElementById("quizFeedback");

    opts.forEach((btn) => {
      btn.addEventListener("click", () => {
        const picked = Number(btn.getAttribute("data-idx"));
        opts.forEach((b) => (b.disabled = true));
        if (picked === item.correct) {
          btn.classList.add("correct");
          score++;
        } else {
          btn.classList.add("wrong");
          opts[item.correct].classList.add("correct");
        }
        feedback.style.display = "block";
        feedback.innerHTML = `
          <p>${item.explanation}</p>
          <button class="btn-primary" id="nextQuizBtn" style="margin-top:10px;">Soal Berikutnya →</button>
        `;
        document.getElementById("nextQuizBtn").addEventListener("click", () => {
          current++;
          renderQuestion();
        });
      });
    });
  }

  renderQuestion();
}

// 7. Oral History Archive
function initOralHistory() {
  const form = document.getElementById("oralForm");
  const listEl = document.getElementById("oralList");
  const exportBtn = document.getElementById("exportOralBtn");

  function getArchives() {
    try {
      const saved = JSON.parse(localStorage.getItem("malatan-oral-archives") || "null");
      return Array.isArray(saved) && saved.length ? saved : DEFAULT_ORAL_ARCHIVES;
    } catch {
      return DEFAULT_ORAL_ARCHIVES;
    }
  }

  function render() {
    const items = getArchives();
    listEl.innerHTML = items.map((item) => `
      <div class="oral-item">
        <div style="font-size:11.5px; color:var(--accent-gold); font-weight:700;">${item.category} · ${item.date}</div>
        <strong style="display:block; margin: 4px 0;">Narasumber: ${item.speaker}</strong>
        <p style="color:var(--text-secondary);">${item.content}</p>
      </div>
    `).join("");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const speaker = document.getElementById("oralSpeaker").value.trim();
    const category = document.getElementById("oralCategory").value;
    const content = document.getElementById("oralContent").value.trim();
    if (!speaker || !content) return;

    const current = getArchives();
    current.unshift({
      speaker,
      category,
      date: new Date().toLocaleDateString("id-ID"),
      content
    });
    localStorage.setItem("malatan-oral-archives", JSON.stringify(current));
    form.reset();
    render();
    showToast("Catatan sejarah lisan berhasil disimpan!");
  });

  exportBtn.addEventListener("click", () => {
    const data = JSON.stringify(getArchives(), null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "arsip-sejarah-lisan-malatan-bansari.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Arsip JSON berhasil diunduh");
  });

  render();
}

// 8. Academic References
function initReferences() {
  const list = document.getElementById("referenceList");
  list.innerHTML = REFERENCES_DATA.map((ref, idx) => `
    <div class="ref-item">
      <div class="ref-text">
        <strong>${ref.category}</strong>
        <p id="ref-cite-${idx}">${ref.citation}</p>
      </div>
      <button class="btn-outline copy-ref-btn" data-cite="${ref.citation.replace(/"/g, '&quot;')}">📋 Salin Sitasi</button>
    </div>
  `).join("");

  list.querySelectorAll(".copy-ref-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(btn.getAttribute("data-cite"));
      showToast("Sitasi referensi berhasil disalin ke Clipboard!");
    });
  });
}

// 9. Interactive 3D Perspective Tilt & Radial Cursor Spotlight
function initInteractive3DTilt() {
  const cardSelector = ".hero-card, .timeline-card, .archive-card, .peace-card, .stat-item, .ref-item";

  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(cardSelector);
    if (!card) return;

    if (!card.classList.contains("tilt-card")) {
      card.classList.add("tilt-card");
      card.addEventListener("mouseleave", () => {
        card.classList.remove("is-tilting");
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      }, { once: false });
    }

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = x / rect.width - 0.5;
    const ny = y / rect.height - 0.5;

    const tiltX = (-ny * 6.5).toFixed(2) + "deg";
    const tiltY = (nx * 6.5).toFixed(2) + "deg";

    card.style.setProperty("--mouse-x", `${Math.round(x)}px`);
    card.style.setProperty("--mouse-y", `${Math.round(y)}px`);
    card.style.setProperty("--tilt-x", tiltX);
    card.style.setProperty("--tilt-y", tiltY);
    card.classList.add("is-tilting");
  }, { passive: true });
}

// 10. Micro-Parallax for Kecamatan Bansari Watermark & Gunung Sindoro Gate
function initMicroParallax() {
  const watermark = document.getElementById("bansariBgWatermark");
  const gatePhoto = document.querySelector(".sindoro-photo-bg");

  let mouseOffsetX = 0;
  let mouseOffsetY = 0;
  let scrollOffsetY = 0;

  function applyWatermarkTransform() {
    if (!watermark) return;
    watermark.style.transform = `translate3d(${mouseOffsetX.toFixed(1)}px, ${(mouseOffsetY + scrollOffsetY).toFixed(1)}px, 0)`;
  }

  window.addEventListener("mousemove", (e) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    mouseOffsetX = -nx * 22;
    mouseOffsetY = -ny * 18;
    applyWatermarkTransform();

    if (gatePhoto && document.body.classList.contains("gate-locked")) {
      gatePhoto.style.transform = `scale(1.06) translate3d(${(-nx * 18).toFixed(1)}px, ${(-ny * 12).toFixed(1)}px, 0)`;
    }
  }, { passive: true });

  window.addEventListener("scroll", () => {
    const sy = window.scrollY || window.pageYOffset;
    scrollOffsetY = -(sy * 0.045);
    applyWatermarkTransform();
  }, { passive: true });
}

// 11. 3D Botanical Tobacco Plants (Nicotiana tabacum) for Light Theme UI
function createTobaccoBlossomCrownSvg(seed) {
  return `
    <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="blossomGlow_${seed}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="55%" stop-color="#f472b6" />
          <stop offset="100%" stop-color="#be185d" />
        </radialGradient>
      </defs>
      <!-- Calyx Stems -->
      <path d="M60,112 L60,55 M60,82 L34,48 M60,82 L86,48 M60,68 L22,62 M60,68 L98,62"
            stroke="#15803d" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <!-- 5-Pointed Nicotiana Tabacum Blossom Trumpet Flowers -->
      <g transform="translate(60, 36)">
        <circle r="19" fill="url(#blossomGlow_${seed})" stroke="#fef9c3" stroke-width="1.8" />
        <circle r="6" fill="#fde047" />
      </g>
      <g transform="translate(32, 46) scale(0.78)">
        <circle r="18" fill="url(#blossomGlow_${seed})" stroke="#fef9c3" stroke-width="1.6" />
        <circle r="5" fill="#fde047" />
      </g>
      <g transform="translate(88, 46) scale(0.78)">
        <circle r="18" fill="url(#blossomGlow_${seed})" stroke="#fef9c3" stroke-width="1.6" />
        <circle r="5" fill="#fde047" />
      </g>
      <g transform="translate(20, 62) scale(0.62)">
        <circle r="16" fill="url(#blossomGlow_${seed})" stroke="#fef9c3" stroke-width="1.5" />
      </g>
      <g transform="translate(100, 62) scale(0.62)">
        <circle r="16" fill="url(#blossomGlow_${seed})" stroke="#fef9c3" stroke-width="1.5" />
      </g>
    </svg>
  `;
}

function build3DTobaccoPlantMarkup(plantSeed, leafCount) {
  let leavesHtml = "";
  // Phyllotactic spiral (137.5 deg golden angle) from bottom mature leaves to upper young leaves
  for (let i = 0; i < leafCount; i++) {
    const progress = i / (leafCount - 1); // 0 = bottom, 1 = top
    const tierY = Math.round(68 - progress * 54); // % from top
    const ry = Math.round((i * 137.5 + plantSeed * 45) % 360);
    const pitch = Math.round(66 - progress * 24); // lower leaves droop wider, upper leaves point higher
    const scale = (1.12 - progress * 0.42).toFixed(2);
    const phase = ((i * 0.37) % 3.2).toFixed(2);
    // Lower leaves are golden-olive ripening (variant 1/2), upper leaves are fresh emerald (variant 0)
    const variant = progress < 0.25 ? 2 : (progress < 0.55 ? 1 : 0);

    leavesHtml += `
      <div class="plant-3d-leaf"
           style="--tier-y:${tierY}%; --leaf-ry:${ry}deg; --leaf-pitch:${pitch}deg;
                  --leaf-scale:${scale}; --leaf-phase:${phase}s;">
        ${createTobaccoLeafSvg(plantSeed * 20 + i + variant)}
      </div>
    `;
  }

  return `
    <div class="plant-3d-rotor">
      <div class="plant-3d-stem"></div>
      <div class="plant-3d-crown">
        ${createTobaccoBlossomCrownSvg(plantSeed)}
      </div>
      ${leavesHtml}
    </div>
  `;
}

function init3DTobaccoLightTheme() {
  const garden = document.getElementById("tobacco3DGarden");
  const specimenViewport = document.getElementById("specimen3DViewport");
  const heroBox = document.getElementById("heroTobacco3DBox");

  if (garden) {
    const plantConfigs = [
      { left: "-2%", bottom: "-35px", w: "300px", h: "490px", z: "40px", dur: "6.8s", delay: "0s", leaves: 11 },
      { left: "9%", bottom: "-45px", w: "230px", h: "380px", z: "-50px", dur: "8.2s", delay: "-1.5s", leaves: 9 },
      { left: "79%", bottom: "-32px", w: "310px", h: "500px", z: "50px", dur: "7.2s", delay: "-0.8s", leaves: 11 },
      { left: "69%", bottom: "-48px", w: "225px", h: "370px", z: "-60px", dur: "8.6s", delay: "-2.4s", leaves: 9 },
      { left: "22%", bottom: "-65px", w: "185px", h: "300px", z: "-110px", dur: "9.1s", delay: "-3.1s", leaves: 8 },
      { left: "58%", bottom: "-62px", w: "190px", h: "310px", z: "-95px", dur: "8.9s", delay: "-1.9s", leaves: 8 }
    ];

    let gardenHtml = plantConfigs.map((cfg, idx) => `
      <div class="tobacco-3d-plant"
           style="--plant-left:${cfg.left}; --plant-bottom:${cfg.bottom};
                  --plant-w:${cfg.w}; --plant-h:${cfg.h}; --plant-z:${cfg.z};
                  --sway-dur:${cfg.dur}; --sway-delay:${cfg.delay};">
        ${build3DTobaccoPlantMarkup(idx + 1, cfg.leaves)}
      </div>
    `).join("");

    // Add 22 sunlit golden pollen & morning dew motes
    for (let m = 0; m < 22; m++) {
      const mx = 4 + ((m * 43) % 92);
      const my = 14 + ((m * 31) % 78);
      const msz = 5 + (m % 4) * 2;
      const mdur = (6.5 + (m % 5) * 1.4).toFixed(1) + "s";
      const mdelay = (-((m * 0.9) % 6)).toFixed(1) + "s";
      gardenHtml += `
        <span class="garden-pollen-mote"
              style="--mote-x:${mx}%; --mote-y:${my}%; --mote-sz:${msz}px;
                     --mote-dur:${mdur}; --mote-delay:${mdelay};"></span>
      `;
    }

    garden.innerHTML = gardenHtml;

    // Interactive 3D perspective response to cursor movement
    window.addEventListener("mousemove", (e) => {
      if (document.documentElement.getAttribute("data-theme") !== "light") return;
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      garden.style.setProperty("--scene-ry", `${(nx * 24).toFixed(1)}deg`);
      garden.style.setProperty("--scene-rx", `${(-ny * 10).toFixed(1)}deg`);
    }, { passive: true });
  }

  // Interactive 360° 3D Tobacco Specimen Turntable inside Hero Card
  if (specimenViewport) {
    specimenViewport.innerHTML = `
      <div class="specimen-3d-turntable" id="specimenTurntable">
        <div class="specimen-3d-pedestal"></div>
        ${build3DTobaccoPlantMarkup(99, 12)}
      </div>
    `;

    const turntable = document.getElementById("specimenTurntable");
    if (heroBox && turntable) {
      heroBox.addEventListener("mousemove", (e) => {
        const rect = heroBox.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        turntable.style.animation = "none";
        turntable.style.setProperty("--spec-ry", `${(nx * 190).toFixed(1)}deg`);
        turntable.style.setProperty("--spec-rx", `${(-8 - ny * 26).toFixed(1)}deg`);
      });

      heroBox.addEventListener("mouseleave", () => {
        turntable.style.removeProperty("animation");
      });
    }
  }
}

// 12. High-Contrast Accessible Detail Pop-up Modal (#detailPopupModal)
function openDetailPopup({ category, meta, title, body, highlight }) {
  const modal = document.getElementById("detailPopupModal");
  if (!modal) return;

  const catEl = document.getElementById("popupCategoryBadge");
  const metaEl = document.getElementById("popupMetaBadge");
  const titleEl = document.getElementById("popupTitle");
  const bodyEl = document.getElementById("popupBodyText");
  const highEl = document.getElementById("popupHighlightBox");

  if (catEl) catEl.textContent = category || "ARSIP MALATAN";
  if (metaEl) metaEl.textContent = meta || "Dusun Malatan · Desa Bansari";
  if (titleEl) titleEl.textContent = title || "";
  if (bodyEl) bodyEl.textContent = body || "";
  if (highEl) highEl.textContent = highlight || "";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function initDetailPopupModal() {
  const modal = document.getElementById("detailPopupModal");
  const closeBtn = document.getElementById("closePopupBtn");
  const okBtn = document.getElementById("okPopupBtn");
  const copyBtn = document.getElementById("copyPopupBtn");

  if (!modal) return;

  function closePopup() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  if (closeBtn) closeBtn.addEventListener("click", closePopup);
  if (okBtn) okBtn.addEventListener("click", closePopup);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closePopup();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closePopup();
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const title = document.getElementById("popupTitle")?.textContent || "";
      const body = document.getElementById("popupBodyText")?.textContent || "";
      const high = document.getElementById("popupHighlightBox")?.textContent || "";
      navigator.clipboard.writeText(`${title}\n\n${body}\n\n${high}`);
      showToast("Teks detail pop-up berhasil disalin ke Clipboard!");
    });
  }

  // Also make Peace Cards (.peace-card) clickable to open in the high-contrast Pop-up Modal
  document.querySelectorAll(".peace-card").forEach((card) => {
    card.style.cursor = "pointer";
    const prompt = document.createElement("div");
    prompt.className = "card-popup-trigger";
    prompt.textContent = "🔍 Buka Pop-up Bacaan Jelas →";
    card.appendChild(prompt);

    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.textContent || "Harmoni Bina Damai";
      const body = card.querySelector("p")?.textContent || "";
      const tag = card.querySelector(".theory-tag")?.textContent || "Kajian Sosiologis";
      openDetailPopup({
        category: "LABORATORIUM BINA DAMAI",
        meta: "Dusun Malatan · Desa Bansari",
        title,
        body,
        highlight: tag
      });
    });
  });
}
