/* ---------------------------------------------------------
   Butiktatli - main.js
   - Smooth anchor offset (fixed navbar)
   - Scrollspy active links
   - Mobile menu
   - Swiper gallery + GLightbox
   - AOS init + GSAP parallax
   - Back-to-top + navbar show/hide
   - TR/EN language switch (localStorage)
   - Contact form UX
   - Video grid (5 videos)
---------------------------------------------------------- */

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const navbar      = $(".navbar");
  const mobileBtn   = $("#burger");
  const mobilePanel = $("#mobilePanel");
  const toTop       = $("#toTop");

  /* ========================= i18n ========================= */
  const I18N = {
    tr: {
      title:          "Butik Pasta Siparişi İstanbul | Pastacılık Kursu | Butiktatli",
      desc:           "İstanbul'da butik pasta siparişi ve özel tasarım pastacılık. Doğum günü, nişan pastaları, makaron, cupcake. Profesyonel pastacılık kursu. 20+ yıl tecrübe.",
      ogDesc:         "İstanbul'da butik pasta siparişi, tatlı satışı ve profesyonel pastacılık eğitimleri.",
      skip:           "İçeriğe atla",
      nav_about:      "Hakkımızda",
      nav_courses:    "Eğitimler",
      nav_satis:      "Pasta Siparişi",
      nav_gallery:    "Galeri",
      nav_contact:    "İletişim",
      cta_primary:    "Sipariş Ver",
      cta_secondary:  "Eğitimler",
      m_about:        "Hakkımızda",
      m_courses:      "Eğitimler",
      m_satis:        "Pasta Siparişi",
      m_gallery:      "Galeri",
      m_contact:      "İletişim",
      m_cta:          "WhatsApp'tan Sipariş Ver",
      kicker:         "Butik pastalar • Özel sipariş • Profesyonel eğitimler",
      h1:             "İstanbul'da butik pasta siparişi ve pastacılık eğitimi.",
      hero_lead:      "Makaron, cupcake, buttercream, özel tasarım pastalar… 20+ yıllık tecrübemizle hem sipariş üretimi yapıyor hem de her seviyeye uygulamalı eğitim veriyoruz.",
      hero_btn1:      "Sipariş Ver",
      hero_btn2:      "Eğitimleri Gör",
      stat1:          "Yıl Tecrübe",
      stat2:          "Mutlu Müşteri",
      stat3:          "Eğitilen Öğrenci",
      pill1_title:    "Sipariş & Satış",
      pill1_sub:      "Özel tasarım",
      pill2_title:    "Uygulamalı Eğitim",
      pill2_sub:      "1–4 kişi",
      about_tag:      "Hakkımızda",
      about_h2:       "Butik pastacılık tutkumuz.",
      about_sub:      "Butiktatli, butik pasta ve tatlı üretimini eğitimle buluşturan bir atölyedir.",
      about_badge:    "20+ Yıl Tecrübe",
      about_lead:     "20 yılı aşkın deneyimimizle hem butik pasta siparişi alıyor hem de makaron, cupcake, buttercream ve tasarım pasta eğitimleri veriyoruz. Amacımız: tarif ezberletmek değil, tekniği öğretmek.",
      tick1:          "Gerçek üretim standardında reçeteler ve malzeme bilgisi",
      tick2:          "Şef eşliğinde adım adım uygulama + geri bildirim",
      tick3:          "Dekorasyon, dolgu ve sunum teknikleri",
      tick4:          "Evde ve profesyonel mutfakta uygulanabilir ipuçları",
      about_btn:      "Bilgi Al",
      courses_tag:    "Eğitimler",
      courses_h2:     "Pastacılık eğitimleri.",
      courses_sub:    "Seviye fark etmez: temelden ileri düzeye, butik pastacılığın en çok aranan eğitimleri.",
      courses_badge:  "Uygulamalı Atölye",
      c1_register:    "Kayıt Ol",
      c1_title:       "Makaron Masterclass",
      c1_desc:        "Kabuk dengesi, macaronage, fırın ayarı ve dolgu kremaları. Çatlama/ayak problemi gibi hataları birlikte çözüyoruz.",
      c1_chip1:       "1 gün",
      c1_chip2:       "1–4 kişi",
      c1_chip3:       "Her seviye",
      c2_register:    "Kayıt Ol",
      c2_title:       "Cupcake & Buttercream",
      c2_desc:        "Nemli kek bazları, dolgu seçenekleri, buttercream kıvamı ve duy teknikleri. Kutulama ve vitrin sunumu dahil.",
      c2_chip1:       "1 gün",
      c2_chip2:       "1–4 kişi",
      c2_chip3:       "Her seviye",
      c3_register:    "Kayıt Ol",
      c3_title:       "Butik Pasta Tasarım",
      c3_desc:        "Katlama, ganaj, düzgün kaplama, kesim ve modern dekorlar. Pastanı sıfırdan hazırlayıp “butik” bir finalle çıkıyorsun.",
      c3_chip1:       "1 gün",
      c3_chip2:       "1–4 kişi",
      c3_chip3:       "Her seviye",
      c4_register:    "Kayıt Ol",
      c4_title:       "Genel Paket Eğitimi",
      c4_desc:        "Figürlü pasta, macaron, cupcake, isviçre merengi, cakepops, şeker hamurlu pasta ve çiçek eğitimi — 6 derste pastacılığın en önemli teknikleri tek pakette.",
      c4_chip1:       "6 gün",
      c4_chip2:       "1–4 kişi",
      c4_chip3:       "Her seviye",
      c5_register:    "Kayıt Ol",
      c5_title:       "Figür Eğitimi",
      c5_desc:        "Şeker hamuru ve fondan ile üç boyutlu figür yapımı; insan, hayvan ve obje tasarımları. Renk harmanlama, detay çalışması ve statik denge teknikleriyle pastanızı sanatsal bir hikâyeye dönüştürün.",
      c5_chip1:       "1 gün",
      c5_chip2:       "1–4 kişi",
      c5_chip3:       "Orta–ileri",
      course_own:     "Eğitimlerde yapılan ürünler sizin olur.",
      categories_title: "Sipariş Aldığımız Pasta Çeşitleri",
      allTypes: "Tüm Çeşitler",
      catNames: {
        'anneler-gunu-pastasi.html': 'Anneler Günü Pastası',
        'dogum-gunu-pastasi.html':   'Doğum Günü Pastası',
        'nisan-pastasi.html':        'Söz / Nişan Pastası',
        'cupcake.html':              'Cupcake',
        'makaron.html':              'Butik Makaron',
        'cocuk-pastasi.html':        'Çocuk Pastaları',
        'cicekli-pasta.html':        'Çiçekli Pastalar',
        'kremali-pasta.html':        'Kremalı Pastalar',
        'resim-baski-pasta.html':    'Resim Baskılı Pastalar',
        'sevgililer-gunu-pastasi.html': 'Sevgililer Günü Pastaları',
        'taraftar-spor-pastasi.html':'Taraftar ve Spor Pastaları',
        'vegan-pasta.html':          'Vegan Pastalar',
        'cakepops.html':             'Cake Pops'
      },
      tags: [
        'Babalar Günü Pastası','Harf Pasta','Hoşgeldin Bebek Pastası',
        'Baby Shower Pastası','1 Yaş Pastası','Diş Buğdayı',
        'Doktor Pastası','Yetişkin Pastaları','Naked Pasta',
        '3D Elbise Pasta','Beze / Mereng','Kurabiye',
        'Çizgi Film Karakterleri Pastası','Figürlü Pasta',
        'Düğün Organizasyon Pastası','Özel Tasarım Pasta İstanbul'
      ],
      satis_tag:      "Pasta Siparişi",
      satis_h2:       "Özel tasarım pasta siparişi.",
      satis_sub:      "Doğum günü, düğün, nişan veya özel gün için sipariş bazlı butik pasta hazırlıyoruz. WhatsApp'tan fotoğraf ve detaylarınızı paylaşın, size özel teklif hazırlayalım.",
      satis_badge:    "Sipariş Bazlı",
      order_title:    "Sipariş vermek çok kolay!",
      order_desc:     "WhatsApp'tan istediğiniz tasarım, boyut ve tarih bilgisini paylaşın. En kısa sürede fiyat teklifinizi hazırlayalım.",
      order_btn_text: "WhatsApp'tan Sipariş Ver",
      gallery_tag:    "Galeri",
      gallery_badge:  "Atölye Fotoğrafları",
      gallery_h2:     "Atölyemizden kareler.",
      gallery_sub:    "Eğitimlerimizden ve atölye çalışmalarından fotoğraflar. Resme tıklayarak büyütebilirsin.",
      videos_tag:     "Videolar",
      videos_badge:   "Atölye Videoları",
      videos_h2:      "Atölyemizden videolar.",
      videos_sub:     "Eğitimlerimizden canlı atölye çalışması videoları.",
      v1_title:       "Atölye Çalışması 1",
      v1_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      v2_title:       "Atölye Çalışması 2",
      v2_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      v3_title:       "Atölye Çalışması 3",
      v3_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      v4_title:       "Atölye Çalışması 4",
      v4_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      v5_title:       "Atölye Çalışması 5",
      v5_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      v6_title:       "Atölye Çalışması 6",
      v6_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      v7_title:       "Atölye Çalışması 7",
      v7_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      v8_title:       "Atölye Çalışması 8",
      v8_desc:        "Butiktatli atölyesinden pastacılık eğitimi.",
      contact_tag:    "İletişim",
      contact_h2:     "Bizimle iletişime geç.",
      contact_sub:    "Kayıt, fiyat, sipariş ve program bilgisi için mesaj bırak. En kısa sürede geri döneceğiz.",
      contact_badge:  "Hızlı Geri Dönüş",
      label_name:     "Ad Soyad",
      ph_name:        "Adınız Soyadınız",
      label_email:    "E-posta",
      ph_email:       "ornek@gmail.com",
      label_phone:    "Telefon",
      label_subject:  "Konu",
      ph_subject:     "Pasta siparişi / kurs bilgisi / randevu",
      label_message:  "Mesaj",
      ph_message:     "Kısaca ne istediğinizi yazın (ör: Doğum günü pastası sipariş etmek istiyorum)...",
      contact_btn:    "Mesaj Gönder",
      info_phone:     "Telefon / WhatsApp",
      info_email:     "E-posta",
      info_addr:      "Konum",
      info_wa_btn:    "WhatsApp'tan Yaz",
      footer_brand:   "Butiktatli",
      footer_p:       "Butik tatlı satışları ve pastacılık eğitimleri: makaron, cupcake ve tasarım pastalar. Atölyemizde uygulamalı öğren, evinde veya işinde güvenle uygula.",
      footer_small:   "Sorular için WhatsApp'tan yazabilir veya formu kullanabilirsiniz.",
      reviews_tag:    "Yorumlar",
      reviews_h2:     "Müşterilerimiz ne diyor?",
      reviews_sub:    "148 Google yorumunda 5 yıldızla değerlendiriliyoruz.",
      reviews_badge:  "Google Doğrulamalı",
      reviews_count:  "148 yorum",
      reviews_cta:    "Tüm Yorumları Google'da Gör",
      reviews_all:    "Tüm 148 Yorumu Google'da Gör",
      reviews_note:   "Yorumlar Google tarafından doğrulanmıştır.",
      rev1_text:      "Zeynep hanım inanılmaz yetenekli, pasta tam istediğimiz gibi oldu. İç lezzeti çok güzeldi herkes bayıldı. Oğlumun ilk doğum günü için kesinlikle mükemmel bir seçimdi, partinin yıldızı oldu diyebilirim. Tekrardan çok teşekkürler, ellerinize sağlık ♥️",
      rev2_text:      "Zeynep hocamdan pastacılık kursu eğitimi aldım, memnuniyetimi anlatmaya kelimeler yetmez. İşini çok seven ve hakkıyla yapan biri; öğrettiği tariflerle lezzetli ve kaliteli pastalar, kekler yapabiliyoruz. Ne yaptıysak herkes bayılarak yedi 😍 İyi ki yollarımız kesişmiş canım Zeynep hocam 🌺",
      rev3_text:      "Oğlumuzun doğum günü için şahane bir pasta hazırladı Zeynep Hanım, çok teşekkür ediyoruz. Glutensiz, şekersiz ve son derece lezzetli. Emeğinize sağlık 🌸",
      footer_link1:   "Hakkımızda",
      footer_link2:   "Eğitimler",
      footer_link3:   "Pasta Siparişi",
      footer_link4:   "Galeri",
      footer_link5:   "Yorumlar",
      footer_link6:   "İletişim",
      toast_name:     "Lütfen adınızı girin.",
      toast_email:    "Lütfen geçerli bir e-posta girin.",
      toast_msg:      "Mesaj en az 10 karakter olmalı.",
      toast_ok:       "✓ Mesajınız iletildi! En kısa sürede dönüş yapacağız."
    },
    en: {
      title:          "Boutique Cake Orders Istanbul | Pastry Classes | Butiktatli",
      desc:           "Boutique cake orders and custom-design cakes in Istanbul. Birthday, engagement cakes, macarons, cupcakes. Professional pastry classes. 20+ years experience.",
      ogDesc:         "Boutique cake orders, dessert sales and professional pastry classes in Istanbul.",
      skip:           "Skip to content",
      nav_about:      "About",
      nav_courses:    "Classes",
      nav_satis:      "Order a Cake",
      nav_gallery:    "Gallery",
      nav_contact:    "Contact",
      cta_primary:    "Order Now",
      cta_secondary:  "Classes",
      m_about:        "About",
      m_courses:      "Classes",
      m_satis:        "Order a Cake",
      m_gallery:      "Gallery",
      m_contact:      "Contact",
      m_cta:          "Order via WhatsApp",
      kicker:         "Boutique cakes • Custom orders • Professional classes",
      h1:             "Boutique cake orders and pastry classes in Istanbul.",
      hero_lead:      "Macarons, cupcakes, buttercream, custom cakes… With 20+ years of experience, we take custom orders and teach hands-on classes for every level.",
      hero_btn1:      "Order Now",
      hero_btn2:      "Explore Classes",
      stat1:          "Years Experience",
      stat2:          "Happy Customers",
      stat3:          "Students Trained",
      pill1_title:    "Order & Sales",
      pill1_sub:      "Custom design",
      pill2_title:    "Hands-on Class",
      pill2_sub:      "1–4 people",
      about_tag:      "About Us",
      about_h2:       "Boutique pastry is our passion.",
      about_sub:      "Butiktatli is a workshop where boutique dessert production meets education.",
      about_badge:    "20+ Years",
      about_lead:     "With over 20 years of experience, we take boutique cake orders and teach classes on macarons, cupcakes, buttercream and cake design. Our goal isn't memorizing recipes—it's mastering technique.",
      tick1:          "Production-grade recipes and ingredient know-how",
      tick2:          "Chef-led step-by-step practice + feedback",
      tick3:          "Decoration, fillings and presentation techniques",
      tick4:          "Tips you can apply at home or professionally",
      about_btn:      "Get Info",
      courses_tag:    "Classes",
      courses_h2:     "Pastry classes.",
      courses_sub:    "All levels welcome: from fundamentals to advanced boutique pastry.",
      courses_badge:  "Hands-on Workshop",
      c1_register:    "Enroll",
      c1_title:       "Macaron Masterclass",
      c1_desc:        "Shell balance, macaronage, oven tuning and fillings. We troubleshoot cracks and missing feet together.",
      c1_chip1:       "1 day",
      c1_chip2:       "1–4 people",
      c1_chip3:       "All levels",
      c2_register:    "Enroll",
      c2_title:       "Cupcake & Buttercream",
      c2_desc:        "Moist cake bases, fillings, buttercream consistency and piping. Includes boxing and display presentation.",
      c2_chip1:       "1 day",
      c2_chip2:       "1–4 people",
      c2_chip3:       "All levels",
      c3_register:    "Enroll",
      c3_title:       "Boutique Cake Design",
      c3_desc:        "Layering, ganache, smooth coating, slicing and modern decor. You build your cake from scratch and leave with a boutique finish.",
      c3_chip1:       "1 day",
      c3_chip2:       "1–4 people",
      c3_chip3:       "All levels",
      c4_register:    "Enroll",
      c4_title:       "General Package Course",
      c4_desc:        "Figurine cake, macarons, cupcakes, Swiss meringue, cake pops, fondant cake and flower decoration — the essential techniques in one 6-lesson package.",
      c4_chip1:       "6 lessons",
      c4_chip2:       "1–4 people",
      c4_chip3:       "All levels",
      c5_register:    "Enroll",
      c5_title:       "Figure Modelling Course",
      c5_desc:        "Three-dimensional figure modelling with sugar paste and fondant — people, animals and objects. Master colour blending, fine detail work and structural balance to turn your cake into a work of edible art.",
      c5_chip1:       "1 day",
      c5_chip2:       "1–4 people",
      c5_chip3:       "Intermediate+",
      course_own:     "Everything you make in class is yours to keep.",
      categories_title: "Cake Varieties We Make to Order",
      allTypes: "All Types",
      catNames: {
        'anneler-gunu-pastasi.html': "Mother's Day Cake",
        'dogum-gunu-pastasi.html':   'Birthday Cake',
        'nisan-pastasi.html':        'Engagement Cake',
        'cupcake.html':              'Cupcake',
        'makaron.html':              'Boutique Macarons',
        'cocuk-pastasi.html':        "Kids' Cakes",
        'cicekli-pasta.html':        'Floral Cakes',
        'kremali-pasta.html':        'Cream Cakes',
        'resim-baski-pasta.html':    'Photo Print Cakes',
        'sevgililer-gunu-pastasi.html': "Valentine's Day Cakes",
        'taraftar-spor-pastasi.html':'Fan & Sports Cakes',
        'vegan-pasta.html':          'Vegan Cakes',
        'cakepops.html':             'Cake Pops'
      },
      tags: [
        "Father's Day Cake",'Letter Cake','Welcome Baby Cake',
        'Baby Shower Cake','1st Birthday Cake','First Tooth Cake',
        'Doctor Cake','Adult Cakes','Naked Cake',
        '3D Dress Cake','Meringue','Cookies',
        'Cartoon Character Cake','Figurine Cake',
        'Wedding Cake','Custom Design Cake Istanbul'
      ],
      satis_tag:      "Order a Cake",
      satis_h2:       "Custom boutique cake orders.",
      satis_sub:      "We make custom boutique cakes for birthdays, weddings, engagements and special occasions. Share your idea on WhatsApp and we'll prepare a personalised quote.",
      satis_badge:    "Order-Based",
      order_title:    "Ordering is easy!",
      order_desc:     "Send us your desired design, size and date on WhatsApp. We'll prepare your personalised quote as soon as possible.",
      order_btn_text: "Order via WhatsApp",
      gallery_tag:    "Gallery",
      gallery_badge:  "Workshop Photos",
      gallery_h2:     "Moments from our workshop.",
      gallery_sub:    "Photos from our classes and workshop sessions. Click to enlarge.",
      videos_tag:     "Videos",
      videos_badge:   "Workshop Videos",
      videos_h2:      "Videos from our workshop.",
      videos_sub:     "Live workshop videos from our pastry classes.",
      v1_title:       "Workshop Session 1",
      v1_desc:        "Pastry class from Butiktatli workshop.",
      v2_title:       "Workshop Session 2",
      v2_desc:        "Pastry class from Butiktatli workshop.",
      v3_title:       "Workshop Session 3",
      v3_desc:        "Pastry class from Butiktatli workshop.",
      v4_title:       "Workshop Session 4",
      v4_desc:        "Pastry class from Butiktatli workshop.",
      v5_title:       "Workshop Session 5",
      v5_desc:        "Pastry class from Butiktatli workshop.",
      v6_title:       "Workshop Session 6",
      v6_desc:        "Pastry class from Butiktatli workshop.",
      v7_title:       "Workshop Session 7",
      v7_desc:        "Pastry class from Butiktatli workshop.",
      v8_title:       "Workshop Session 8",
      v8_desc:        "Pastry class from Butiktatli workshop.",
      contact_tag:    "Contact",
      contact_h2:     "Get in touch with us.",
      contact_sub:    "Leave a message for enrollment, pricing, orders and schedule. We'll get back to you shortly.",
      contact_badge:  "Fast Reply",
      label_name:     "Full Name",
      ph_name:        "Your name",
      label_email:    "Email",
      ph_email:       "hello@example.com",
      label_phone:    "Phone",
      label_subject:  "Subject",
      ph_subject:     "Cake order / class info / booking",
      label_message:  "Message",
      ph_message:     "Tell us what you need (e.g. I'd like to order a birthday cake)...",
      contact_btn:    "Send Message",
      info_phone:     "Phone / WhatsApp",
      info_email:     "Email",
      info_addr:      "Location",
      info_wa_btn:    "Text on WhatsApp",
      footer_brand:   "Butiktatli",
      footer_p:       "Boutique dessert sales and pastry classes: macarons, cupcakes and cake design. Learn hands-on in our workshop and apply confidently at home or at work.",
      footer_small:   "Message us on WhatsApp or use the contact form.",
      reviews_tag:    "Reviews",
      reviews_h2:     "What do our customers say?",
      reviews_sub:    "Rated 5 stars across 148 Google reviews.",
      reviews_badge:  "Google Verified",
      reviews_count:  "148 reviews",
      reviews_cta:    "See All Reviews on Google",
      reviews_all:    "See All 148 Reviews on Google",
      reviews_note:   "Reviews verified by Google.",
      rev1_text:      "Zeynep Hanım is incredibly talented — the cake turned out exactly as we wanted. The taste was wonderful, everyone loved it. It was absolutely the perfect choice for my son's first birthday. Thank you so much, a true masterpiece! ♥️",
      rev2_text:      "I took a pastry course from Zeynep Hoca and words can't describe how happy I am. She truly loves what she does and teaches it brilliantly. Everything we made was delicious and everyone devoured it 😍 So glad our paths crossed 🌺",
      rev3_text:      "Zeynep Hanım prepared a wonderful cake for our son's birthday — gluten-free, sugar-free and absolutely delicious. Thank you so much for your effort 🌸",
      footer_link1:   "About",
      footer_link2:   "Classes",
      footer_link3:   "Order a Cake",
      footer_link4:   "Gallery",
      footer_link5:   "Reviews",
      footer_link6:   "Contact",
      toast_name:     "Please enter your name.",
      toast_email:    "Please enter a valid email.",
      toast_msg:      "Message must be at least 10 characters.",
      toast_ok:       "✓ Message sent! We'll get back to you shortly."
    }
  };

  const applyLang = (lang) => {
    const L = I18N[lang] || I18N.tr;
    document.documentElement.lang = lang;

    document.title = L.title;
    const m = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    m('meta[name="description"]',     "content", L.desc);
    m('meta[property="og:description"]', "content", L.ogDesc);
    m('meta[name="twitter:description"]', "content", L.ogDesc);

    const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
    const ph  = (id, txt) => { const el = document.getElementById(id); if (el) el.setAttribute("placeholder", txt); };
    const html= (id, txt) => { const el = document.getElementById(id); if (el) el.innerHTML = txt; };

    set("t_skip", L.skip);

    set("t_nav_about",   L.nav_about);
    set("t_nav_courses", L.nav_courses);
    set("t_nav_satis",   L.nav_satis);
    set("t_nav_gallery", L.nav_gallery);
    set("t_nav_reviews", L.reviews_tag);
    set("t_nav_contact", L.nav_contact);

    set("t_m_about",   L.m_about);
    set("t_m_courses", L.m_courses);
    set("t_m_satis",   L.m_satis);
    set("t_m_gallery",  L.m_gallery);
    set("t_m_reviews",  L.reviews_tag);
    set("t_m_contact",  L.m_contact);
    set("t_m_cta",      L.m_cta);

    set("t_cta_secondary", L.cta_secondary);
    const ctaPrimary = document.getElementById("t_cta_primary");
    if (ctaPrimary) {
      const span = ctaPrimary.querySelector("span");
      if (span) span.textContent = L.cta_primary;
      else ctaPrimary.childNodes[ctaPrimary.childNodes.length - 1].textContent = " " + L.cta_primary;
    }

    const kicker = document.getElementById("t_kicker");
    if (kicker) { const s = kicker.querySelector("span"); if (s) s.textContent = L.kicker; }

    /* h1 özel çeviri — gradient span ortada, text hem önde hem arkada */
    const h1el = document.getElementById("t_h1");
    if (h1el) {
      if (lang === "tr") {
        h1el.innerHTML = 'İstanbul\'da <span class="gradient-text">butik pasta</span> siparişi ve pastacılık eğitimi.';
      } else {
        h1el.innerHTML = 'Boutique <span class="gradient-text">cake orders</span> and pastry classes in Istanbul.';
      }
    }
    set("t_hero_lead", L.hero_lead);
    set("t_hero_btn1", L.hero_btn1);
    set("t_hero_btn2", L.hero_btn2);
    set("t_stat1", L.stat1);
    set("t_stat2", L.stat2);
    set("t_stat3", L.stat3);
    set("t_pill1_title", L.pill1_title);
    set("t_pill1_sub",   L.pill1_sub);
    set("t_pill2_title", L.pill2_title);
    set("t_pill2_sub",   L.pill2_sub);

    set("t_about_tag",   L.about_tag);
    set("t_about_badge", L.about_badge);
    set("t_about_lead",  L.about_lead);
    set("t_about_btn",   L.about_btn);
    set("t_tick1", L.tick1);
    set("t_tick2", L.tick2);
    set("t_tick3", L.tick3);
    set("t_tick4", L.tick4);

    set("t_courses_tag",   L.courses_tag);
    set("t_courses_badge", L.courses_badge);
    set("t_c1_register",   L.c1_register);
    set("t_c1_title",  L.c1_title);
    set("t_c1_desc",   L.c1_desc);
    set("t_c1_chip1",  L.c1_chip1);
    set("t_c1_chip2",  L.c1_chip2);
    set("t_c1_chip3",  L.c1_chip3);
    set("t_c2_register", L.c2_register);
    set("t_c2_title",  L.c2_title);
    set("t_c2_desc",   L.c2_desc);
    set("t_c2_chip1",  L.c2_chip1);
    set("t_c2_chip2",  L.c2_chip2);
    set("t_c2_chip3",  L.c2_chip3);
    set("t_c3_register", L.c3_register);
    set("t_c3_title",  L.c3_title);
    set("t_c3_desc",   L.c3_desc);
    set("t_c3_chip1",  L.c3_chip1);
    set("t_c3_chip2",  L.c3_chip2);
    set("t_c3_chip3",  L.c3_chip3);
    set("t_c4_register", L.c4_register);
    set("t_c4_title",  L.c4_title);
    set("t_c4_desc",   L.c4_desc);
    set("t_c4_chip1",  L.c4_chip1);
    set("t_c4_chip2",  L.c4_chip2);
    set("t_c4_chip3",  L.c4_chip3);
    set("t_c5_register", L.c5_register);
    set("t_c5_title",  L.c5_title);
    set("t_c5_desc",   L.c5_desc);
    set("t_c5_chip1",  L.c5_chip1);
    set("t_c5_chip2",  L.c5_chip2);
    set("t_c5_chip3",  L.c5_chip3);
    $$(".t_course_own").forEach(el => { el.textContent = L.course_own; });

    set("t_categories_title", L.categories_title);
    set("t_satis_tag",        L.satis_tag);
    set("t_satis_badge",    L.satis_badge);
    set("t_order_title",    L.order_title);
    set("t_order_desc",     L.order_desc);
    set("t_order_btn_text", L.order_btn_text);

    /* Dropdown category items */
    $$('#navDropdownMenu a[href]').forEach(a => {
      const href = a.getAttribute('href');
      const icon = a.querySelector('i');
      if (icon && L.catNames && L.catNames[href]) {
        a.innerHTML = icon.outerHTML + ' ' + L.catNames[href];
      } else if (href === '#satis' && icon) {
        a.innerHTML = icon.outerHTML + ' ' + L.allTypes;
      }
    });

    /* Mobile submenu trigger label */
    const mst = $('.mobile-submenu-trigger');
    if (mst) mst.innerHTML = (lang === 'en' ? 'Order a Cake' : 'Pasta Siparişi') + ' <i class="bi bi-chevron-down"></i>';

    /* Mobile submenu items */
    $$('.mobile-submenu-list a[href]').forEach(a => {
      const href = a.getAttribute('href');
      const icon = a.querySelector('i');
      if (icon && L.catNames && L.catNames[href]) {
        a.innerHTML = icon.outerHTML + ' ' + L.catNames[href];
      } else if (href === '#satis' && icon) {
        a.innerHTML = icon.outerHTML + ' ' + L.allTypes;
      }
    });

    /* Category grid cards */
    $$('.cat-menu-card[href]').forEach(a => {
      const nameSpan = a.querySelector('.cat-menu-name');
      if (nameSpan && L.catNames && L.catNames[a.getAttribute('href')]) {
        nameSpan.textContent = L.catNames[a.getAttribute('href')];
      }
    });

    /* Category tags */
    if (L.tags) {
      $$('.categories-tags span').forEach((span, i) => {
        if (L.tags[i]) span.textContent = L.tags[i];
      });
    }

    set("t_gallery_tag",        L.gallery_tag);
    set("t_gallery_badge_text", L.gallery_badge);

    set("t_videos_tag",        L.videos_tag);
    set("t_videos_badge_text", L.videos_badge);
    set("t_v1_title", L.v1_title); set("t_v1_desc", L.v1_desc);
    set("t_v2_title", L.v2_title); set("t_v2_desc", L.v2_desc);
    set("t_v3_title", L.v3_title); set("t_v3_desc", L.v3_desc);
    set("t_v4_title", L.v4_title); set("t_v4_desc", L.v4_desc);
    set("t_v5_title", L.v5_title); set("t_v5_desc", L.v5_desc);
    set("t_v6_title", L.v6_title); set("t_v6_desc", L.v6_desc);
    set("t_v7_title", L.v7_title); set("t_v7_desc", L.v7_desc);
    set("t_v8_title", L.v8_title); set("t_v8_desc", L.v8_desc);

    set("t_reviews_tag",      L.reviews_tag);
    set("t_reviews_badge",    L.reviews_badge);
    set("t_reviews_count",    L.reviews_count);
    set("t_reviews_cta_text", L.reviews_cta);
    set("t_reviews_see_all",  L.reviews_all);
    set("t_reviews_note",     L.reviews_note);
    set("t_rev1_text",     L.rev1_text);
    set("t_rev2_text",     L.rev2_text);
    set("t_rev3_text",     L.rev3_text);

    set("t_contact_tag",   L.contact_tag);
    set("t_contact_badge", L.contact_badge);
    set("t_label_name",    L.label_name);
    set("t_label_email",   L.label_email);
    set("t_label_phone",   L.label_phone);
    set("t_label_subject", L.label_subject);
    set("t_label_message", L.label_message);
    set("t_contact_btn",   L.contact_btn);

    ph("name",    L.ph_name);
    ph("email",   L.ph_email);
    ph("subject", L.ph_subject);
    ph("message", L.ph_message);

    set("t_info_wa_text", L.info_wa_btn);
    const iP = document.getElementById("t_info_phone");
    if (iP) iP.innerHTML = `<i class="bi bi-telephone"></i> ${L.info_phone}`;
    const iE = document.getElementById("t_info_email");
    if (iE) iE.innerHTML = `<i class="bi bi-envelope"></i> ${L.info_email}`;
    const iA = document.getElementById("t_info_addr");
    if (iA) iA.innerHTML = `<i class="bi bi-geo-alt"></i> ${L.info_addr}`;

    set("t_footer_brand",  L.footer_brand);
    set("t_footer_p",      L.footer_p);
    set("t_footer_small",  L.footer_small);
    set("t_footer_link1",  L.footer_link1);
    set("t_footer_link2",  L.footer_link2);
    set("t_footer_link3",  L.footer_link3);
    set("t_footer_link4",  L.footer_link4);
    set("t_footer_link5",  L.footer_link5);
    set("t_footer_link6",  L.footer_link6);

    /* h2 translations — keep gradient-text span */
    [
      ["t_about_h2",   L.about_h2,   "tutkumuz.",        "passion."],
      ["t_courses_h2", L.courses_h2, "eğitimleri.",      "classes."],
      ["t_satis_h2",   L.satis_h2,   "pasta siparişi.",  "cake orders."],
      ["t_gallery_h2",  L.gallery_h2,  "kareler.",         "moments."],
      ["t_videos_h2",   L.videos_h2,  "videolar.",        "videos."],
      ["t_reviews_h2",  L.reviews_h2, "diyor?",           "say?"],
      ["t_contact_h2",  L.contact_h2, "iletişime geç.",   "get in touch."]
    ].forEach(([id, full]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const span = el.querySelector(".gradient-text");
      if (span) {
        const parts = full.split(span.textContent);
        const newGradientText = full.split(" ").slice(-2).join(" ");
        const plainText = full.slice(0, full.length - newGradientText.length).trim();
        el.childNodes[0].textContent = plainText + " ";
        span.textContent = newGradientText;
      } else {
        el.textContent = full;
      }
    });

    /* subtitle translations */
    [
      ["t_about_sub",   L.about_sub],
      ["t_courses_sub", L.courses_sub],
      ["t_satis_sub",   L.satis_sub],
      ["t_gallery_sub",  L.gallery_sub],
      ["t_videos_sub",   L.videos_sub],
      ["t_reviews_sub",  L.reviews_sub],
      ["t_contact_sub",  L.contact_sub]
    ].forEach(([id, txt]) => set(id, txt));

    const isTR = lang === "tr";
    $("#langTR")?.classList.toggle("active", isTR);
    $("#langEN")?.classList.toggle("active", !isTR);
    $("#langTR_m")?.classList.toggle("active", isTR);
    $("#langEN_m")?.classList.toggle("active", !isTR);

    applyLang._toast = { name: L.toast_name, email: L.toast_email, msg: L.toast_msg, ok: L.toast_ok };

    /* Firefox reflow fix: dil değişince navbar gizlenmesini önle */
    navbar?.classList.remove("is-hidden");
    const _lastY = window.scrollY;
    setTimeout(() => { lastY = _lastY; }, 150);
  };

  const getLang = () => {
    const saved = localStorage.getItem("butiktatli_lang");
    if (saved === "tr" || saved === "en") return saved;
    return "tr";
  };
  const setLang = (lang) => { localStorage.setItem("butiktatli_lang", lang); applyLang(lang); };

  $("#langTR")?.addEventListener("click",   () => setLang("tr"));
  $("#langEN")?.addEventListener("click",   () => setLang("en"));
  $("#langTR_m")?.addEventListener("click", () => setLang("tr"));
  $("#langEN_m")?.addEventListener("click", () => setLang("en"));

  applyLang(getLang());

  /* =================== Mobile menu =================== */
  let menuOpenScrollY = 0;
  const setMobileOpen = (open) => {
    if (!mobilePanel || !mobileBtn) return;
    mobilePanel.style.display = open ? "block" : "none";
    document.body.style.overflow = open ? "hidden" : "";
    if (open) menuOpenScrollY = window.scrollY;
    mobileBtn.setAttribute("aria-expanded", String(open));
    mobileBtn.innerHTML = open
      ? '<i class="bi bi-x-lg" aria-hidden="true"></i>'
      : '<i class="bi bi-list" aria-hidden="true"></i>';
  };
  mobileBtn?.addEventListener("click", () => setMobileOpen(mobileBtn.getAttribute("aria-expanded") !== "true"));
  $$("#mobilePanel a").forEach(a => a.addEventListener("click", () => setMobileOpen(false)));
  window.addEventListener("scroll", () => {
    if (mobileBtn?.getAttribute("aria-expanded") === "true" && window.scrollY > menuOpenScrollY + 150) {
      setMobileOpen(false);
    }
  }, { passive: true });


  /* Mobil submenu toggle */
  const subTrigger = $(".mobile-submenu-trigger");
  const subList    = $(".mobile-submenu-list");
  subTrigger?.addEventListener("click", () => {
    const open = subList.classList.toggle("open");
    subTrigger.setAttribute("aria-expanded", String(open));
  });

  /* ================ Smooth scroll + offset ================ */
  const scrollToHash = (hash) => {
    const id = (hash || "").replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const navH = navbar?.offsetHeight ?? 74;
    const targetY = el.getBoundingClientRect().top + window.scrollY - navH - 20;
    const startY = window.scrollY;
    const dist = targetY - startY;
    if (Math.abs(dist) < 2) return;
    const duration = 680;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
      window.scrollTo(0, startY + dist * e);
      if (p < 1) { requestAnimationFrame(step); }
      else {
        el.classList.remove('section-arrive');
        void el.offsetWidth;
        el.classList.add('section-arrive');
        setTimeout(() => el.classList.remove('section-arrive'), 900);
      }
    };
    requestAnimationFrame(step);
  };

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      history.pushState(null, "", href);
      scrollToHash(href);
    });
  });

  /* =================== Scrollspy =================== */
  const sectionIds = ["about", "courses", "satis", "gallery", "videos", "reviews", "contact"];
  const sections   = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const allLinks   = [...$$(".nav-links a"), ...$$("#mobilePanel a")];

  const setActive = (id) => allLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));

  const scrollSpy = () => {
    const y = window.scrollY + 90;
    let active = sections[0]?.id || '';
    sections.forEach(s => { if (s.offsetTop <= y) active = s.id; });
    setActive(active);
  };
  window.addEventListener('scroll', scrollSpy, { passive: true });
  scrollSpy();

  /* ============ Navbar show/hide + back-to-top ============ */
  let lastY = window.scrollY, ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    lastY = y;
    navbar?.classList.toggle("is-compact", y > 40);
    if (y > 260 && goingDown) navbar?.classList.add("is-hidden");
    else navbar?.classList.remove("is-hidden");
    toTop?.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; } }, { passive: true });
  onScroll();
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener("load", () => {
    const navType = performance.getEntriesByType('navigation')[0]?.type;
    if (navType === 'reload') {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 50);
      return;
    }
    if (window.location.hash) setTimeout(() => scrollToHash(window.location.hash), 60);
  });

  /* =================== Stat counter =================== */
  const runCounters = () => {
    $$('.hero-stats .stat-item strong[data-count]').forEach(el => {
      const end = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const startTime = performance.now();
      const tick = (now) => {
        const p = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * end) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  const statsEl = $('.hero-stats');
  if (statsEl) {
    let counted = false;
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted) { counted = true; runCounters(); }
    }, { threshold: 0.5 }).observe(statsEl);
  }

  /* =================== Vendor inits =================== */
  if (window.AOS) {
    AOS.init({ duration: 750, easing: "ease-out-quart", once: true, offset: 80 });
  }

  if (window.Swiper) {
    new Swiper(".gallerySwiper", {
      slidesPerView: 1, spaceBetween: 12,
      loop: true, watchOverflow: true,
      observer: true, observeParents: true,
      touchStartPreventDefault: false,
      breakpoints: {
        600:  { slidesPerView: 1 },
        768:  { slidesPerView: 2, spaceBetween: 14 },
        1024: { slidesPerView: 3, spaceBetween: 16 }
      },
      navigation: { nextEl: ".swiperNext", prevEl: ".swiperPrev" },
      a11y: { prevSlideMessage: "Önceki", nextSlideMessage: "Sonraki" }
    });

    const galleryWrapper = document.getElementById("galleryWrapper");
    if (galleryWrapper && typeof EDU_IMAGES !== "undefined") {
      galleryWrapper.innerHTML = EDU_IMAGES.map((f, i) =>
        `<div class="swiper-slide"><a class="gallery-item glightbox" href="img/${f}" data-gallery="edu" data-title="Butiktatli Pastacılık Eğitimi"><img src="img/${f}" alt="Butiktatli pastacılık eğitimi atölyesi ${i + 1}" loading="lazy" /></a></div>`
      ).join("");
    }

    new Swiper(".reviewsSwiper", {
      slidesPerView: 1, spaceBetween: 22,
      loop: true, watchOverflow: true,
      observer: true, observeParents: true,
      touchStartPreventDefault: false,
      breakpoints: {
        768: { slidesPerView: 3, spaceBetween: 22 }
      },
      navigation: { nextEl: ".reviewsNext", prevEl: ".reviewsPrev" },
      a11y: { prevSlideMessage: "Önceki yorum", nextSlideMessage: "Sonraki yorum" }
    });

    const salesWrapper = document.getElementById("salesWrapper");
    if (salesWrapper && typeof SALES_IMAGES !== "undefined") {
      salesWrapper.innerHTML = SALES_IMAGES.map((f, i) =>
        `<div class="swiper-slide"><a class="sales-item glightbox" href="img/${f}" data-gallery="satis" data-title="Butiktatli Özel Tasarım Pasta"><img src="img/${f}" alt="Özel tasarım pasta ${i + 1}" loading="lazy" /><div class="sales-overlay"><i class="bi bi-zoom-in"></i></div></a></div>`
      ).join("");
    }

    new Swiper(".salesSwiper", {
      slidesPerView: 1, spaceBetween: 12,
      loop: true, watchOverflow: true,
      observer: true, observeParents: true,
      touchStartPreventDefault: false,
      breakpoints: {
        480:  { slidesPerView: 2, spaceBetween: 12 },
        768:  { slidesPerView: 3, spaceBetween: 14 },
        1024: { slidesPerView: 4, spaceBetween: 16 },
        1280: { slidesPerView: 5, spaceBetween: 16 }
      },
      navigation: { nextEl: ".salesNext", prevEl: ".salesPrev" },
      a11y: { prevSlideMessage: "Önceki", nextSlideMessage: "Sonraki" }
    });
  }

  if (window.GLightbox) {
    GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true, openEffect: "zoom", closeEffect: "fade", moreLength: 0 });
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("[data-parallax]").forEach(el => {
      gsap.to(el, { y: 22, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
    });
  }

  /* =================== Contact form =================== */
  const form      = $("#contactForm");
  const toast     = $("#toast");
  const toastText = $("#toastText");

  const showToast = (msg) => {
    if (!toast) return;
    toastText.textContent = msg;
    toast.style.opacity = "1";
    toast.style.transform = "translate(-50%,0)";
    toast.style.pointerEvents = "auto";
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translate(-50%,12px)";
      toast.style.pointerEvents = "none";
    }, 3000);
  };

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd    = new FormData(form);
    const name  = String(fd.get("name")    || "").trim();
    const email = String(fd.get("email")   || "").trim();
    const msg   = String(fd.get("message") || "").trim();
    const T = applyLang._toast || {};

    if (name.length < 2)               return showToast(T.name  || "Lütfen adınızı girin.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return showToast(T.email || "Geçerli bir e-posta girin.");
    if (msg.length < 10)               return showToast(T.msg   || "Mesaj çok kısa.");

    const subjectField = document.getElementById("subjectField");
    if (subjectField) {
      const sub = String(fd.get("subject") || "").trim();
      subjectField.value = sub ? `Butiktatli: ${sub}` : "Butiktatli İletişim Formu";
    }

    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.style.opacity = "0.55"; }

    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        form.reset();
        showToast(T.ok || "✓ Mesajınız iletildi!");
      } else {
        showToast(data.message || "Gönderim başarısız, lütfen tekrar deneyin.");
      }
    } catch { showToast("Bağlantı hatası. İnternet bağlantınızı kontrol edin."); }
    finally { if (btn) { btn.disabled = false; btn.style.opacity = ""; } }
  });

  $("#toastClose")?.addEventListener("click", () => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%,12px)";
    toast.style.pointerEvents = "none";
  });

  /* =================== Video grid =================== */
  const videoGrid = document.getElementById("videoGrid");
  if (videoGrid && typeof VIDEOS !== "undefined") {
    videoGrid.innerHTML = VIDEOS.map((f, i) => {
      const n = i + 1;
      return `<div class="video-card" id="vc${n}">
        <div class="video-thumb" onclick="openVideo(${n})">
          <video class="video-preview" src="videos/${f}" preload="metadata" muted playsinline></video>
          <div class="video-overlay"><div class="play-btn" aria-label="Videoyu oynat"><i class="bi bi-play-fill"></i></div></div>
        </div>
        <div class="video-body">
          <h3 class="video-title" id="t_v${n}_title">Atölye Çalışması ${n}</h3>
          <p class="video-desc" id="t_v${n}_desc">Butiktatli atölyesinden pastacılık eğitimi.</p>
        </div>
        <div class="video-expand" id="ve${n}">
          <div class="video-embed-wrap">
            <video id="vplayer${n}" controls controlsList="nodownload" muted style="width:100%;height:100%;border-radius:16px;background:#000;" src="videos/${f}"></video>
          </div>
          <button class="video-close" onclick="closeVideo(${n})" aria-label="Kapat"><i class="bi bi-x-lg"></i> Kapat</button>
        </div>
      </div>`;
    }).join("");
  }

  document.querySelectorAll(".video-preview").forEach(v => {
    v.addEventListener("loadedmetadata", () => { v.currentTime = 2; });
  });

  let openVideoId = null;

  window.openVideo = (id) => {
    if (openVideoId && openVideoId !== id) closeVideo(openVideoId);
    const card   = document.getElementById(`vc${id}`);
    const player = document.getElementById(`vplayer${id}`);
    if (!card || !player) return;
    player.muted = true;
    card.classList.add("is-open");
    openVideoId = id;
    setTimeout(() => { card.scrollIntoView({ behavior: "smooth", block: "start" }); player.play(); }, 80);
  };

  window.closeVideo = (id) => {
    const card   = document.getElementById(`vc${id}`);
    const player = document.getElementById(`vplayer${id}`);
    if (!card || !player) return;
    player.pause();
    card.classList.remove("is-open");
    if (openVideoId === id) openVideoId = null;
  };

})();
