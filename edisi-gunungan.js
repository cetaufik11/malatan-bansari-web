// =========================================================================
// EDISI II: ARSITEKTUR KAYON GUNUNGAN & RIGEN BAMBU 3D (edisi-gunungan.js)
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

const NAV_PAGES = [
  { id: "beranda", label: "Beranda & Profil" },
  { id: "linimasa", label: "Lini Masa Sejarah" },
  { id: "peta-kultural", label: "Peta Kontur Spasial" },
  { id: "ensiklopedia", label: "Budaya & Tembakau" },
  { id: "bina-damai", label: "Harmoni Bina Damai" },
  { id: "eksplorasi-ai", label: "Tanya Sejarah & Kuis" },
  { id: "referensi", label: "Referensi Ilmiah" }
];

let origamiObserver = null;
let currentPageIndex = 0;
let isPageTransitioning = false;
const IS_MOBILE_DEVICE = window.matchMedia("(max-width: 980px), (pointer: coarse)").matches;

document.addEventListener("DOMContentLoaded", () => {
  initKayonSplitGate();
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
  initBidirectionalOrigamiScroll();
  initRigenShutterMultiPage();
  initFloating3DRigenStage();
  initInteractiveDiorama3D();
  initDetailPopupModal();

  document.getElementById("printArchiveBtn")?.addEventListener("click", () => {
    window.print();
  });
});

// 1. Atmospheric Twilight Sindoro & 3D Bell Spotlight Gate (Pull-Down Interactive Physics)
function initKayonSplitGate() {
  const gate = document.getElementById("kayonSplitGate");
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

  function openGateIntoMainContent() {
    if (isGateOpened) return;
    isGateOpened = true;
    gate.classList.add("gate-opened");
    document.body.classList.remove("gate-locked");
    showToast("Selamat datang di Portal Sejarah & Warisan Dusun Malatan");
    // Hapus penuh elemen gate dari render tree setelah animasi selesai agar GPU HP 100% ringan
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
    setTimeout(openGateIntoMainContent, 1100);
  }

  function startPull(clientY, e) {
    if (isLit) {
      openGateIntoMainContent();
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

// 2. 10-Slat 3D Bamboo Rigen Louver Shutter & Multi-Page Navigation
function initRigenShutterMultiPage() {
  const slatsGrid = document.getElementById("rigenSlatsGrid");
  const curtain = document.getElementById("rigenShutterCurtain");
  const titleEl = document.getElementById("shutterPageTitle");
  const prevBtn = document.getElementById("prevPageBtn");
  const nextBtn = document.getElementById("nextPageBtn");
  const indicator = document.getElementById("pagerIndicator");
  const topbarChapter = document.getElementById("topbarActiveChapter");

  if (slatsGrid) {
    const slatCount = IS_MOBILE_DEVICE ? 6 : 10;
    const mid = (slatCount - 1) / 2;
    let slatsHtml = "";
    for (let i = 0; i < slatCount; i++) {
      const distFromCenter = Math.abs(i - mid);
      const delay = Math.round(distFromCenter * (IS_MOBILE_DEVICE ? 24 : 38));
      slatsHtml += `<div class="rigen-slat" style="--slat-delay:${delay}ms;"></div>`;
    }
    slatsGrid.innerHTML = slatsHtml;
  }

  function updatePageUi(index) {
    currentPageIndex = index;
    const activePage = NAV_PAGES[index];

    NAV_PAGES.forEach((p, i) => {
      const sec = document.getElementById(p.id);
      if (sec) sec.classList.toggle("active-page", i === index);
    });

    document.querySelectorAll("#navLinks a").forEach((link) => {
      link.classList.toggle("active-nav", link.getAttribute("href") === `#${activePage.id}`);
    });

    if (indicator) {
      indicator.textContent = `Lembar ${index + 1} / ${NAV_PAGES.length} · ${activePage.label}`;
    }
    if (topbarChapter) {
      topbarChapter.textContent = `Lembar 0${index + 1} / 0${NAV_PAGES.length} — ${activePage.label}`;
    }
    if (prevBtn) {
      prevBtn.disabled = index === 0;
      prevBtn.textContent = index > 0 ? `← ${NAV_PAGES[index - 1].label}` : "← Lembar Awal";
    }
    if (nextBtn) {
      nextBtn.disabled = index === NAV_PAGES.length - 1;
      nextBtn.textContent = index < NAV_PAGES.length - 1 ? `${NAV_PAGES[index + 1].label} →` : "Lembar Terakhir";
    }

    window.scrollTo({ top: 0, behavior: "instant" });

    const activeSection = document.getElementById(activePage.id);
    if (activeSection) {
      activeSection.querySelectorAll(".origami-anim").forEach((el) => {
        el.classList.add("unfolded");
        el.classList.remove("fold-bottom", "fold-top");
      });
    }
  }

  function navigateWithRigenShutter(targetId) {
    const targetIndex = NAV_PAGES.findIndex((p) => p.id === targetId);
    if (targetIndex < 0 || targetIndex === currentPageIndex || isPageTransitioning) return;

    isPageTransitioning = true;
    const targetPage = NAV_PAGES[targetIndex];
    if (titleEl) titleEl.textContent = targetPage.label;

    const swapTime = IS_MOBILE_DEVICE ? 360 : 540;
    const openTime = IS_MOBILE_DEVICE ? 440 : 660;
    const doneTime = IS_MOBILE_DEVICE ? 820 : 1180;

    curtain.classList.remove("shutter-reset", "shutter-opening");
    void curtain.offsetWidth;
    curtain.classList.add("shutter-closing");

    setTimeout(() => {
      updatePageUi(targetIndex);
    }, swapTime);

    setTimeout(() => {
      curtain.classList.remove("shutter-closing");
      curtain.classList.add("shutter-opening");
    }, openTime);

    setTimeout(() => {
      curtain.classList.add("shutter-reset");
      curtain.classList.remove("shutter-opening");
      void curtain.offsetWidth;
      setTimeout(() => {
        curtain.classList.remove("shutter-reset");
        isPageTransitioning = false;
      }, 30);
    }, doneTime);
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return;
      const targetId = href.slice(1);
      if (NAV_PAGES.some((p) => p.id === targetId)) {
        e.preventDefault();
        navigateWithRigenShutter(targetId);
      }
    });
  });

  prevBtn?.addEventListener("click", () => {
    if (currentPageIndex > 0) navigateWithRigenShutter(NAV_PAGES[currentPageIndex - 1].id);
  });

  nextBtn?.addEventListener("click", () => {
    if (currentPageIndex < NAV_PAGES.length - 1) navigateWithRigenShutter(NAV_PAGES[currentPageIndex + 1].id);
  });

  window.addEventListener("beforeprint", () => {
    document.querySelectorAll(".page-section").forEach((s) => s.classList.add("active-page"));
  });
  window.addEventListener("afterprint", () => {
    updatePageUi(currentPageIndex);
  });

  updatePageUi(0);
}

// 3. Bidirectional 3D Origami Unfold Scroll Animation (Aktif Dua Arah & 60fps di HP maupun Desktop)
function initBidirectionalOrigamiScroll() {
  origamiObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("unfolded");
          el.classList.remove("fold-bottom", "fold-top");
        } else {
          el.classList.remove("unfolded");
          if (entry.boundingClientRect.top < 0) {
            el.classList.add("fold-top");
            el.classList.remove("fold-bottom");
          } else {
            el.classList.add("fold-bottom");
            el.classList.remove("fold-top");
          }
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -15px 0px" }
  );

  registerOrigamiTargets();
}

function registerOrigamiTargets() {
  if (!origamiObserver) return;
  const targets = document.querySelectorAll(
    ".origami-anim, .timeline-card, .archive-card, .peace-card, .ref-item"
  );
  targets.forEach((node, idx) => {
    if (!node.classList.contains("origami-anim")) {
      node.classList.add("origami-anim", "fold-bottom");
      node.style.setProperty("--origami-delay", `${(idx % 5) * 55}ms`);
    }
    origamiObserver.observe(node);
  });
}

// 4. Floating 3D Bamboo Rigen Trays & Interactive 3D Diorama (Aktif & Lancar di HP maupun Desktop)
function initFloating3DRigenStage() {
  const container = document.getElementById("floating3DObjects");
  if (!container) return;

  const allTrays = [
    { x: "82%", y: "10%", w: "175px", h: "105px", z: "-30px", dur: "8.5s", delay: "0s" },
    { x: "88%", y: "66%", w: "190px", h: "115px", z: "-50px", dur: "9.8s", delay: "-2s" },
    { x: "26%", y: "78%", w: "155px", h: "95px", z: "-80px", dur: "10.5s", delay: "-4s" },
    { x: "55%", y: "8%", w: "145px", h: "88px", z: "-95px", dur: "9.2s", delay: "-1.2s" }
  ];
  const trays = IS_MOBILE_DEVICE ? allTrays.slice(0, 2) : allTrays;

  container.innerHTML = trays.map((t) => `
    <div class="rigen-3d-tray"
         style="--tray-x:${t.x}; --tray-y:${t.y}; --tray-w:${t.w}; --tray-h:${t.h};
                --tray-z:${t.z}; --tray-dur:${t.dur}; --tray-delay:${t.delay};"></div>
  `).join("");
}

function initInteractiveDiorama3D() {
  const box = document.getElementById("heroDioramaBox");
  if (!box) return;

  let rafDio = null;
  function updateDioramaTilt(clientX, clientY) {
    if (rafDio) return;
    rafDio = requestAnimationFrame(() => {
      rafDio = null;
      const rect = box.getBoundingClientRect();
      const nx = (clientX - rect.left) / rect.width - 0.5;
      const ny = (clientY - rect.top) / rect.height - 0.5;
      box.style.setProperty("--dio-rx", `${(-ny * 14).toFixed(1)}deg`);
      box.style.setProperty("--dio-ry", `${(nx * 18).toFixed(1)}deg`);
      box.querySelectorAll(".diorama-floating-badge").forEach((b, idx) => {
        const factor = (idx + 1) * 7;
        b.style.setProperty("--badge-dx", `${(nx * factor).toFixed(1)}px`);
        b.style.setProperty("--badge-dy", `${(ny * factor).toFixed(1)}px`);
      });
    });
  }

  function resetDioramaTilt() {
    box.style.setProperty("--dio-rx", "0deg");
    box.style.setProperty("--dio-ry", "0deg");
    box.querySelectorAll(".diorama-floating-badge").forEach((b) => {
      b.style.setProperty("--badge-dx", "0px");
      b.style.setProperty("--badge-dy", "0px");
    });
  }

  box.addEventListener("mousemove", (e) => updateDioramaTilt(e.clientX, e.clientY), { passive: true });
  box.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) updateDioramaTilt(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  box.addEventListener("mouseleave", resetDioramaTilt, { passive: true });
  box.addEventListener("touchend", resetDioramaTilt, { passive: true });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
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
    if (bar) bar.style.width = scrolled + "%";
  });
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");

  function syncUi(theme) {
    if (icon) icon.textContent = theme === "light" ? "☀️" : "🌙";
    if (label) label.textContent = theme === "light" ? "Tema Terang: Lontar 3D" : "Tema Gelap: Wayang Emas";
  }

  syncUi(document.documentElement.getAttribute("data-theme") || "light");

  btn?.addEventListener("click", () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    syncUi(next);
    showToast(
      next === "light"
        ? "☀️ Tema Terang: Naskah Lontar & Rigen Bambu 3D diaktifkan"
        : "🌙 Tema Gelap: Panggung Wayang & Kayon Emas diaktifkan"
    );
  });
}

// 5. Timeline, Spatial Map, Encyclopedia, QA, Quiz, Oral History & References
function initTimeline() {
  const container = document.getElementById("timelineContainer");
  const buttons = document.querySelectorAll("#timelineFilters .filter-btn");

  function render(eraFilter) {
    const items = eraFilter === "all"
      ? TIMELINE_DATA
      : TIMELINE_DATA.filter((item) => item.era === eraFilter);

    container.innerHTML = items.map((item, idx) => `
      <article class="timeline-card" data-tl-idx="${idx}" style="cursor:pointer;">
        <div>
          <div class="tl-meta">
            <span class="tl-year">${item.year}</span>
            <span class="tl-badge">${item.badge}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div>
          <div class="tl-source">📚 Sumber: ${item.source}</div>
          <div class="card-popup-trigger">🔍 Buka Pop-up Bacaan Jelas →</div>
        </div>
      </article>
    `).join("");

    container.querySelectorAll(".timeline-card").forEach((card) => {
      card.addEventListener("click", () => {
        const item = items[Number(card.getAttribute("data-tl-idx"))];
        if (item) {
          openDetailPopup({
            category: item.year,
            meta: item.badge,
            title: item.title,
            body: item.desc,
            highlight: `📚 Sumber: ${item.source}`
          });
        }
      });
    });

    registerOrigamiTargets();
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

  toggleContours?.addEventListener("change", () => {
    if (layerContours) layerContours.style.display = toggleContours.checked ? "block" : "none";
  });
  toggleHydro?.addEventListener("change", () => {
    if (layerHydro) layerHydro.style.display = toggleHydro.checked ? "block" : "none";
  });
  toggleGrid?.addEventListener("change", () => {
    if (layerGrid) layerGrid.style.display = toggleGrid.checked ? "block" : "none";
  });

  if (svg) {
    const telemetryEl = document.getElementById("topoTelemetry");
    svg.addEventListener("mousemove", (e) => {
      const rect = svg.getBoundingClientRect();
      const nx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const ny = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
      const radial = Math.sqrt(nx * nx * 0.65 + ny * ny * 0.55);
      const elev = Math.round(2120 - radial * 1080);
      const slopePct = Math.max(6, Math.min(42, Math.round(38 - radial * 28)));
      const slopeDesc = slopePct > 25 ? "Curam" : (slopePct > 14 ? "Agak Curam" : "Landai");
      if (telemetryEl) {
        telemetryEl.innerHTML = `
          <span>⛰️ Elevasi: <strong>${elev.toLocaleString("id-ID")} mdpl</strong></span>
          <span>📐 Lereng: <strong>${slopePct}% (${slopeDesc})</strong></span>
        `;
      }
    });
  }

  function renderSpot(key, elevBadge) {
    const spot = MAP_SPOTS[key];
    if (!spot || !panel) return;
    if (profileLabel) profileLabel.textContent = `Lokus Aktif: ${spot.title} (${elevBadge || "1.250 mdpl"})`;

    panel.innerHTML = `
      <div>
        <span class="spot-tag">${spot.tag}</span>
        <h3>${spot.title}</h3>
        <p>${spot.desc}</p>
        <div class="spot-facts">
          ${spot.facts.map((f) => `<div>${f}</div>`).join("")}
        </div>
        <button type="button" class="btn-secondary" id="openSpotModalBtn2" style="margin-top:14px; width:100%;">
          🔍 Buka Pop-up Bacaan Jelas (${spot.title})
        </button>
      </div>
    `;

    document.getElementById("openSpotModalBtn2")?.addEventListener("click", () => {
      openDetailPopup({
        category: spot.tag,
        meta: `Elevasi: ${elevBadge || "1.250 mdpl"}`,
        title: spot.title,
        body: spot.desc,
        highlight: spot.facts.join(" • ")
      });
    });
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

function initEncyclopedia() {
  const grid = document.getElementById("archiveGrid");
  const searchInput = document.getElementById("archiveSearch");
  const catSelect = document.getElementById("archiveCategory");

  function render() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const cat = catSelect?.value || "all";

    const filtered = ARCHIVE_DATA.filter((item) => {
      const matchCat = cat === "all" || item.category === cat;
      const matchText = !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.highlight.toLowerCase().includes(q);
      return matchCat && matchText;
    });

    grid.innerHTML = filtered.map((item, idx) => `
      <article class="archive-card" data-arch-idx="${idx}" style="cursor:pointer;">
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
        if (item) {
          openDetailPopup({
            category: item.category,
            meta: "Ensiklopedia Budaya & Tembakau Bansari",
            title: item.title,
            body: item.desc,
            highlight: item.highlight
          });
        }
      });
    });

    registerOrigamiTargets();
  }

  searchInput?.addEventListener("input", render);
  catSelect?.addEventListener("change", render);
  render();
}

function initTabs() {
  const btns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.getAttribute("data-tab"))?.classList.add("active");
    });
  });
}

function initHistorianQA() {
  const chatBox = document.getElementById("chatBox");
  const form = document.getElementById("qaForm");
  const input = document.getElementById("qaInput");
  const chips = document.querySelectorAll(".q-chip");

  function answerQuery(question) {
    const q = question.toLowerCase();
    let reply = "";
    if (q.includes("kecamatan") || q.includes("2001") || q.includes("peran")) {
      reply = "<strong>Sejarah Pembentukan Kecamatan Bansari & Peran Dusun Malatan:</strong><br>Kecamatan Bansari resmi dibentuk pada <strong>tahun 2001</strong> sebagai hasil pemekaran dari Kecamatan Parakan, Kabupaten Temanggung (membawahi 13 desa & 43 dusun). Desa Bansari menjadi ibu kota kecamatan dan <strong>Dusun Malatan</strong> menjadi pusat pemerintahan tempat berdirinya Kantor Kecamatan Bansari.";
    } else if (q.includes("kerukunan") || q.includes("agama") || q.includes("uin") || q.includes("damai")) {
      reply = "<strong>Model Kerukunan Antarumat Beragama (Bina Damai) di Dusun Malatan:</strong><br>Dalam riset sosiologi agama <em>UIN Sunan Kalijaga Yogyakarta</em>, Dusun Malatan dijadikan rujukan karena harmonisasi warga Muslim dan Kristen/Katolik yang hidup berdampingan bahkan dalam satu keluarga besar melalui sambatan, kenduri, dan silaturahmi lintas hari raya.";
    } else if (q.includes("tembakau") || q.includes("wiwitan") || q.includes("jamasan") || q.includes("gobang")) {
      reply = "<strong>Tradisi Tembakau Lembutan, Wiwitan & Jamasan Gobang:</strong><br>Dusun Malatan berada di lereng timur Gunung Sindoro (1.000–1.500 mdpl) penghasil <strong>Tembakau Lembutan dan Srintil</strong>. Menjelang musim panen, petani menggelar ritual <strong>Wiwitan</strong> dan <strong>Jamasan Gobang</strong> (penyucian pisau rajang tembakau).";
    } else if (q.includes("mohaedi") || q.includes("manuskrip")) {
      reply = "<strong>Jejak Ulama Kyai Mohaedi Anwar & Manuskrip Kuno Desa Bansari:</strong><br>Di Desa Bansari (Dusun Tambahrejo), terdapat peninggalan <strong>Manuskrip Mushaf Al-Qur'an Kuno</strong> tulisan tangan koleksi almarhum <strong>Kyai Mohaedi Anwar</strong> yang diteliti oleh akademisi UIN Salatiga dan UIN Walisongo.";
    } else {
      reply = "<strong>Merti Dusun, Nyadran & Gelar Budaya Malatan:</strong><br>Warga Dusun Malatan rutin menyelenggarakan <strong>Merti Dusun / Nyadran</strong> dan <strong>Gelar Budaya Malatan</strong> (Jaran Kepang, Warok, dan Kembul Bujana) sebagai pengikat solidaritas lintas iman di lereng Gunung Sindoro.";
    }

    chatBox.innerHTML += `
      <div class="chat-msg user">${question}</div>
      <div class="chat-msg bot">${reply}</div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    input.value = "";
    answerQuery(val);
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => answerQuery(chip.getAttribute("data-q")));
  });
}

function initQuiz() {
  const container = document.getElementById("quizContainer");
  let current = 0;
  let score = 0;

  function renderQuestion() {
    if (!container) return;
    if (current >= QUIZ_QUESTIONS.length) {
      container.innerHTML = `
        <div class="quiz-card" style="text-align:center; padding: 20px;">
          <h3>🎉 Kuis Selesai! Skor Anda: ${score} / ${QUIZ_QUESTIONS.length}</h3>
          <div><button class="btn-primary" id="restartQuizBtn">Ulangi Kuis</button></div>
        </div>
      `;
      document.getElementById("restartQuizBtn")?.addEventListener("click", () => {
        current = 0;
        score = 0;
        renderQuestion();
      });
      return;
    }

    const item = QUIZ_QUESTIONS[current];
    container.innerHTML = `
      <div class="quiz-card">
        <div style="font-size:13px; color:var(--accent-gold); font-weight:800;">SOAL ${current + 1} DARI ${QUIZ_QUESTIONS.length} · SKOR: ${score}</div>
        <h3>${item.q}</h3>
        <div class="quiz-options">
          ${item.options.map((opt, idx) => `<button class="quiz-opt" data-idx="${idx}">${opt}</button>`).join("")}
        </div>
        <div id="quizFeedback" style="display:none; padding:12px; border-radius:10px; background:var(--bg-secondary);"></div>
      </div>
    `;

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
        document.getElementById("nextQuizBtn")?.addEventListener("click", () => {
          current++;
          renderQuestion();
        });
      });
    });
  }

  renderQuestion();
}

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
    if (!listEl) return;
    listEl.innerHTML = getArchives().map((item) => `
      <div class="oral-item">
        <div style="font-size:12px; color:var(--accent-gold); font-weight:800;">${item.category} · ${item.date}</div>
        <strong style="display:block; margin:4px 0;">Narasumber: ${item.speaker}</strong>
        <p>${item.content}</p>
      </div>
    `).join("");
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const speaker = document.getElementById("oralSpeaker").value.trim();
    const category = document.getElementById("oralCategory").value;
    const content = document.getElementById("oralContent").value.trim();
    if (!speaker || !content) return;
    const current = getArchives();
    current.unshift({ speaker, category, date: new Date().toLocaleDateString("id-ID"), content });
    localStorage.setItem("malatan-oral-archives", JSON.stringify(current));
    form.reset();
    render();
    showToast("Catatan sejarah lisan berhasil disimpan!");
  });

  exportBtn?.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(getArchives(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "arsip-sejarah-lisan-malatan-bansari.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  render();
}

function initReferences() {
  const list = document.getElementById("referenceList");
  if (!list) return;
  list.innerHTML = REFERENCES_DATA.map((ref) => `
    <div class="ref-item origami-anim">
      <div class="ref-text">
        <strong>${ref.category}</strong>
        <p>${ref.citation}</p>
      </div>
      <button class="btn-outline copy-ref-btn" data-cite="${ref.citation.replace(/"/g, '&quot;')}">📋 Salin Sitasi</button>
    </div>
  `).join("");

  list.querySelectorAll(".copy-ref-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(btn.getAttribute("data-cite"));
      showToast("Sitasi referensi berhasil disalin!");
    });
  });
}

function openDetailPopup({ category, meta, title, body, highlight }) {
  const modal = document.getElementById("detailPopupModal");
  if (!modal) return;
  document.getElementById("popupCategoryBadge").textContent = category || "ARSIP MALATAN";
  document.getElementById("popupMetaBadge").textContent = meta || "Dusun Malatan · Desa Bansari";
  document.getElementById("popupTitle").textContent = title || "";
  document.getElementById("popupBodyText").textContent = body || "";
  document.getElementById("popupHighlightBox").textContent = highlight || "";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function initDetailPopupModal() {
  const modal = document.getElementById("detailPopupModal");
  if (!modal) return;
  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };
  document.getElementById("closePopupBtn")?.addEventListener("click", close);
  document.getElementById("okPopupBtn")?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  document.getElementById("copyPopupBtn")?.addEventListener("click", () => {
    const t = document.getElementById("popupTitle")?.textContent || "";
    const b = document.getElementById("popupBodyText")?.textContent || "";
    const h = document.getElementById("popupHighlightBox")?.textContent || "";
    navigator.clipboard.writeText(`${t}\n\n${b}\n\n${h}`);
    showToast("Teks detail pop-up berhasil disalin!");
  });

  document.querySelectorAll(".peace-card").forEach((card) => {
    card.style.cursor = "pointer";
    const trigger = document.createElement("div");
    trigger.className = "card-popup-trigger";
    trigger.textContent = "🔍 Buka Pop-up Bacaan Jelas →";
    card.appendChild(trigger);
    card.addEventListener("click", () => {
      openDetailPopup({
        category: "LABORATORIUM BINA DAMAI",
        meta: "Dusun Malatan · Desa Bansari",
        title: card.querySelector("h3")?.textContent || "",
        body: card.querySelector("p")?.textContent || "",
        highlight: card.querySelector(".theory-tag")?.textContent || ""
      });
    });
  });
}
