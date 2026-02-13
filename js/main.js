/* ---------------------------------------------------------
   Butiktatli - main.js
   - Smooth anchor offset (fixed navbar)
   - Scrollspy active links
   - Mobile menu
   - Swiper gallery (grid) + GLightbox
   - AOS init + optional GSAP parallax
   - Back-to-top + navbar show/hide
   - TR/EN language switch (localStorage)
   - Demo contact form UX (no backend)
---------------------------------------------------------- */

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const navbar = $(".navbar");
  const mobileBtn = $("#burger");
  const mobilePanel = $("#mobilePanel");
  const toTop = $("#toTop");

  /* ------------------------- i18n ------------------------- */
  const I18N = {
    tr: {
      title: "Butiktatli | Boutique Dessert Shop",
      desc: "Butiktatli: butik pasta ve tatlı satışının yanında makaron, cupcake ve tasarım pasta eğitimleri. Modern tek sayfa, responsive website.",
      ogDesc: "Butik tatlı satışları ve profesyonel pastacılık eğitimleri: makaron, cupcake, tasarım pastalar.",
      skip: "İçeriğe atla",
      nav_about: "Hakkında",
      nav_courses: "Kurslar",
      nav_gallery: "Galeri",
      nav_contact: "İletişim",
      cta_primary: "Kayıt & Randevu",
      cta_secondary: "Eğitimler",
      m_cta: "Kayıt & Randevu",
      kicker: "Butik tatlılar • Profesyonel eğitimler • Sıcak atölye deneyimi",
      h1: "Butik pastacılıkta ustalaş: eğitim + satış, hepsi Butiktatli’de.",
      hero_lead: "Makaron, cupcake, buttercream, tasarım pastalar… 15 yıllık tecrübemizle hem üretim yapıyor hem de her seviyeden katılımcıya uygulamalı eğitim veriyoruz. Küçük gruplar, yoğun pratik ve gerçek “butik” teknikler.",
      hero_btn1: "Kursları İncele",
      hero_btn2: "Çalışmalarımız",
      hero_note: "İpucu: Görselleri kendi fotoğraflarınla değiştirmek için /img klasörünü güncellemen yeterli.",
      pill1_title: "Küçük Grup",
      pill1_sub: "maks. 8–12 kişi",
      pill2_title: "Uygulamalı",
      pill2_sub: "yoğun pratik",
      about_h2: "Hakkımızda",
      about_sub: "Butiktatli, butik pasta ve tatlı üretimini eğitimle buluşturan bir atölyedir. Her tarifin arkasında doğru teknik, doğru ölçü ve bolca pratik var.",
      about_badge: "15+ Yıl Tecrübe",
      about_lead: "15 seneyi aşkın deneyimimizle hem butik pasta satışları yapıyor hem de makaron, cupcake, buttercream ve tasarım pasta eğitimleri veriyoruz. Amacımız: tarif ezberletmek değil, tekniği öğretmek.",
      tick1: "Gerçek üretim standardında reçeteler ve malzeme bilgisi",
      tick2: "Şef eşliğinde adım adım uygulama + geri bildirim",
      tick3: "Dekorasyon, dolgu ve sunum teknikleri",
      tick4: "Evde ve profesyonel mutfakta uygulanabilir ipuçları",
      about_btn: "Bilgi Al",
      courses_h2: "Kurslar",
      courses_sub: "Seviye fark etmez: temelden ileri düzeye, butik pastacılığın en çok aranan eğitimleri. Programlar örnektir; içerikleri sen düzenleyebilirsin.",
      courses_badge: "Uygulamalı Atölye",
      c1_title: "Makaron Masterclass",
      c1_desc: "Kabuk dengesi, macaronage, fırın ayarı ve dolgu kremaları. Çatlama/ayak problemi gibi hataları birlikte çözüyoruz.",
      c1_chip1: "1 gün",
      c1_chip2: "10 kişi",
      c1_chip3: "Orta-İleri",
      c2_title: "Cupcake & Buttercream",
      c2_desc: "Nemli kek bazları, dolgu seçenekleri, buttercream kıvamı ve duy teknikleri. Kutulama ve vitrin sunumu dahil.",
      c2_chip1: "1 gün",
      c2_chip2: "12 kişi",
      c2_chip3: "Dekor",
      c3_title: "Butik Pasta Tasarım",
      c3_desc: "Katlama, ganaj, düzgün kaplama, kesim ve modern dekorlar. Pastanı sıfırdan hazırlayıp “butik” bir finalle çıkıyorsun.",
      c3_chip1: "2 gün",
      c3_chip2: "8 kişi",
      c3_chip3: "İleri",
      gallery_h2: "Galeri",
      gallery_sub: "Eğitimlerden ve üretimlerimizden örnekler. Grid yapıda kaydırmalı galeri + tıklayınca büyüyen lightbox.",
      gallery_badge: "Grid + Slider",
      gallery_hint: "Kaydır: mouse wheel / dokunmatik / oklar",
      contact_h2: "İletişim",
      contact_sub: "Kayıt, fiyat ve program bilgisi için mesaj bırak. (Bu form demo; backend yok. İstersen formu WhatsApp’a yönlendirecek şekilde de ayarlarız.)",
      contact_badge: "Hızlı Geri Dönüş",
      label_name: "Ad Soyad",
      ph_name: "Adınız Soyadınız",
      label_email: "E-posta",
      ph_email: "ornek@butiktatli.com",
      label_subject: "Konu",
      ph_subject: "Kurs bilgisi / satış / randevu",
      label_message: "Mesaj",
      ph_message: "Kısaca ne istediğini yaz (ör: Makaron Masterclass için tarih soruyorum)...",
      contact_btn: "Mesaj Gönder",
      contact_notice: "SEO: Semantik başlık yapısı, açıklama meta, OG etiketleri ve JSON‑LD yapılandırılmış veri eklidir.",
      info_phone: "Telefon",
      info_email: "E-posta",
      info_addr: "Konum",
      footer_brand: "Butiktatli",
      footer_p: "Butik tatlı satışları ve pastacılık eğitimleri: makaron, cupcake ve tasarım pastalar. Atölyemizde uygulamalı öğren, evinde veya işinde güvenle uygula.",
      footer_small: "Sorular için WhatsApp’tan yazabilir veya formu kullanabilirsin.",
      footer_social: "Sosyal",
      toast_name: "Lütfen adınızı girin.",
      toast_email: "Lütfen geçerli bir e-posta girin.",
      toast_msg: "Mesaj en az 10 karakter olmalı.",
      toast_ok: "Demo: Mesaj alındı (backend yok)."
    },
    en: {
      title: "Butiktatli | Boutique Dessert Shop",
      desc: "Butiktatli: boutique cakes & desserts plus hands-on classes for macarons, cupcakes, buttercream and signature cake design. Modern single-page, responsive site.",
      ogDesc: "Boutique dessert sales and professional pastry classes: macarons, cupcakes, cake design.",
      skip: "Skip to content",
      nav_about: "About",
      nav_courses: "Classes",
      nav_gallery: "Gallery",
      nav_contact: "Contact",
      cta_primary: "Book / Enroll",
      cta_secondary: "Classes",
      m_cta: "Book / Enroll",
      kicker: "Boutique desserts • Professional classes • Hands-on workshop",
      h1: "Master boutique pastry: classes + shop, all at Butiktatli.",
      hero_lead: "Macarons, cupcakes, buttercream, signature cakes… With 15+ years of experience, we craft boutique desserts and teach practical, step-by-step classes for every level. Small groups, lots of practice, real boutique techniques.",
      hero_btn1: "Explore Classes",
      hero_btn2: "Our Work",
      hero_note: "Tip: Replace images by updating the /img folder with your own photos.",
      pill1_title: "Small Groups",
      pill1_sub: "max 8–12 people",
      pill2_title: "Hands-on",
      pill2_sub: "practice-heavy",
      about_h2: "About Us",
      about_sub: "Butiktatli is a workshop where boutique dessert production meets education. Behind every recipe: the right technique, the right measurements, and plenty of practice.",
      about_badge: "15+ Years",
      about_lead: "With over 15 years of experience, we both sell boutique cakes and desserts and teach classes on macarons, cupcakes, buttercream and cake design. Our goal isn’t memorizing recipes—it's mastering technique.",
      tick1: "Production-grade recipes and ingredient know-how",
      tick2: "Chef-led step-by-step practice + feedback",
      tick3: "Decoration, fillings and presentation techniques",
      tick4: "Tips you can apply at home or professionally",
      about_btn: "Get Info",
      courses_h2: "Classes",
      courses_sub: "All levels welcome: from fundamentals to advanced boutique pastry. Programs are samples—you can customize them.",
      courses_badge: "Hands-on Workshop",
      c1_title: "Macaron Masterclass",
      c1_desc: "Shell balance, macaronage, oven tuning and fillings. We troubleshoot issues like cracks and missing feet together.",
      c1_chip1: "1 day",
      c1_chip2: "10 people",
      c1_chip3: "Mid–Advanced",
      c2_title: "Cupcake & Buttercream",
      c2_desc: "Moist cake bases, fillings, buttercream consistency and piping. Includes boxing and display presentation.",
      c2_chip1: "1 day",
      c2_chip2: "12 people",
      c2_chip3: "Decor",
      c3_title: "Boutique Cake Design",
      c3_desc: "Layering, ganache, smooth coating, slicing and modern decor. You build your cake from scratch and leave with a boutique finish.",
      c3_chip1: "2 days",
      c3_chip2: "8 people",
      c3_chip3: "Advanced",
      gallery_h2: "Gallery",
      gallery_sub: "Highlights from our classes and boutique production. Swipeable grid gallery + click-to-zoom lightbox.",
      gallery_badge: "Grid + Slider",
      gallery_hint: "Swipe: mouse wheel / touch / arrows",
      contact_h2: "Contact",
      contact_sub: "Leave a message for enrollment, pricing and schedule. (This form is a demo—no backend. You can also route it to WhatsApp.)",
      contact_badge: "Fast Reply",
      label_name: "Full name",
      ph_name: "Your name",
      label_email: "Email",
      ph_email: "hello@butiktatli.com",
      label_subject: "Subject",
      ph_subject: "Class info / order / booking",
      label_message: "Message",
      ph_message: "Tell us what you need (e.g., asking for dates for the Macaron Masterclass)...",
      contact_btn: "Send Message",
      contact_notice: "SEO: semantic headings, meta description, OG tags and JSON‑LD structured data included.",
      info_phone: "Phone",
      info_email: "Email",
      info_addr: "Location",
      footer_brand: "Butiktatli",
      footer_p: "Boutique dessert sales and pastry classes: macarons, cupcakes and cake design. Learn hands-on in our workshop and apply confidently at home or at work.",
      footer_small: "You can message us on WhatsApp or use the form.",
      footer_social: "Social",
      toast_name: "Please enter your name.",
      toast_email: "Please enter a valid email.",
      toast_msg: "Message must be at least 10 characters.",
      toast_ok: "Demo: Message received (no backend)."
    }
  };

  const applyLang = (lang) => {
    const L = I18N[lang] || I18N.tr;
    document.documentElement.lang = lang;
    // title + meta
    document.title = L.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", L.desc);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", L.ogDesc);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", L.ogDesc);

    // text nodes
    const setText = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };

    setText("t_skip", L.skip);

    setText("t_nav_about", L.nav_about);
    setText("t_nav_courses", L.nav_courses);
    setText("t_nav_gallery", L.nav_gallery);
    setText("t_nav_contact", L.nav_contact);

    setText("t_m_about", L.nav_about);
    setText("t_m_courses", L.nav_courses);
    setText("t_m_gallery", L.nav_gallery);
    setText("t_m_contact", L.nav_contact);
    setText("t_m_cta", L.m_cta);

    setText("t_cta_primary", L.cta_primary);
    setText("t_cta_secondary", L.cta_secondary);

    // kicker needs inner span text
    const kicker = document.getElementById("t_kicker");
    if (kicker) {
      const span = kicker.querySelector("span");
      if (span) span.textContent = L.kicker;
    }

    setText("t_h1", L.h1);
    setText("t_hero_lead", L.hero_lead);
    setText("t_hero_btn1", L.hero_btn1);
    setText("t_hero_btn2", L.hero_btn2);
    setText("t_hero_note", L.hero_note);

    setText("t_pill1_title", L.pill1_title);
    setText("t_pill1_sub", L.pill1_sub);
    setText("t_pill2_title", L.pill2_title);
    setText("t_pill2_sub", L.pill2_sub);

    setText("t_about_h2", L.about_h2);
    setText("t_about_sub", L.about_sub);
    setText("t_about_badge", L.about_badge);
    setText("t_about_lead", L.about_lead);
    setText("t_tick1", L.tick1);
    setText("t_tick2", L.tick2);
    setText("t_tick3", L.tick3);
    setText("t_tick4", L.tick4);
    setText("t_about_btn", L.about_btn);

    setText("t_courses_h2", L.courses_h2);
    setText("t_courses_sub", L.courses_sub);
    setText("t_courses_badge", L.courses_badge);

    setText("t_c1_title", L.c1_title);
    setText("t_c1_desc", L.c1_desc);
    setText("t_c1_chip1", L.c1_chip1);
    setText("t_c1_chip2", L.c1_chip2);
    setText("t_c1_chip3", L.c1_chip3);

    setText("t_c2_title", L.c2_title);
    setText("t_c2_desc", L.c2_desc);
    setText("t_c2_chip1", L.c2_chip1);
    setText("t_c2_chip2", L.c2_chip2);
    setText("t_c2_chip3", L.c2_chip3);

    setText("t_c3_title", L.c3_title);
    setText("t_c3_desc", L.c3_desc);
    setText("t_c3_chip1", L.c3_chip1);
    setText("t_c3_chip2", L.c3_chip2);
    setText("t_c3_chip3", L.c3_chip3);

    setText("t_gallery_h2", L.gallery_h2);
    setText("t_gallery_sub", L.gallery_sub);
    setText("t_gallery_badge", L.gallery_badge);
    setText("t_gallery_hint", L.gallery_hint);

    setText("t_contact_h2", L.contact_h2);
    setText("t_contact_sub", L.contact_sub);
    setText("t_contact_badge", L.contact_badge);

    setText("t_label_name", L.label_name);
    setText("t_label_email", L.label_email);
    setText("t_label_subject", L.label_subject);
    setText("t_label_message", L.label_message);
    setText("t_contact_btn", L.contact_btn);
    setText("t_contact_notice", L.contact_notice);

    const name = document.getElementById("name");
    if (name) name.setAttribute("placeholder", L.ph_name);
    const email = document.getElementById("email");
    if (email) email.setAttribute("placeholder", L.ph_email);
    const subject = document.getElementById("subject");
    if (subject) subject.setAttribute("placeholder", L.ph_subject);
    const message = document.getElementById("message");
    if (message) message.setAttribute("placeholder", L.ph_message);

    const infoPhone = document.getElementById("t_info_phone");
    if (infoPhone) infoPhone.innerHTML = `<i class="bi bi-telephone"></i> ${L.info_phone}`;
    const infoEmail = document.getElementById("t_info_email");
    if (infoEmail) infoEmail.innerHTML = `<i class="bi bi-envelope"></i> ${L.info_email}`;
    const infoAddr = document.getElementById("t_info_addr");
    if (infoAddr) infoAddr.innerHTML = `<i class="bi bi-geo-alt"></i> ${L.info_addr}`;

    setText("t_footer_brand", L.footer_brand);
    setText("t_footer_p", L.footer_p);
    setText("t_footer_small", L.footer_small);
    setText("t_footer_social", L.footer_social);

    // Buttons active state
    const isTR = lang === "tr";
    $("#langTR")?.classList.toggle("active", isTR);
    $("#langEN")?.classList.toggle("active", !isTR);
    $("#langTR_m")?.classList.toggle("active", isTR);
    $("#langEN_m")?.classList.toggle("active", !isTR);

    // store for validation messages
    applyLang._toast = {
      name: L.toast_name,
      email: L.toast_email,
      msg: L.toast_msg,
      ok: L.toast_ok
    };
  };

  const getLang = () => {
    const saved = localStorage.getItem("butiktatli_lang");
    if (saved === "tr" || saved === "en") return saved;
    // default based on browser language
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("tr") ? "tr" : "en";
  };

  const setLang = (lang) => {
    localStorage.setItem("butiktatli_lang", lang);
    applyLang(lang);
  };

  $("#langTR")?.addEventListener("click", () => setLang("tr"));
  $("#langEN")?.addEventListener("click", () => setLang("en"));
  $("#langTR_m")?.addEventListener("click", () => setLang("tr"));
  $("#langEN_m")?.addEventListener("click", () => setLang("en"));

  applyLang(getLang());

  /* ---------------------- Mobile menu ---------------------- */
  const setMobileOpen = (open) => {
    if (!mobilePanel || !mobileBtn) return;
    mobilePanel.style.display = open ? "block" : "none";
    mobileBtn.setAttribute("aria-expanded", String(open));
    mobileBtn.innerHTML = open
      ? '<i class="bi bi-x-lg" aria-hidden="true"></i>'
      : '<i class="bi bi-list" aria-hidden="true"></i>';
  };
  mobileBtn?.addEventListener("click", () => {
    const isOpen = mobileBtn.getAttribute("aria-expanded") === "true";
    setMobileOpen(!isOpen);
  });
  $$("#mobilePanel a").forEach(a => a.addEventListener("click", () => setMobileOpen(false)));

  /* ---------------- Smooth scrolling w/ offset -------------- */
  const scrollToHash = (hash) => {
    const id = (hash || "").replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const navH = navbar?.offsetHeight ?? 74;
    const y = el.getBoundingClientRect().top + window.scrollY - navH - 24;
    window.scrollTo({ top: y, behavior: "smooth" });
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

  /* ------------------------- Scrollspy ---------------------- */
  const sections = ["about", "courses", "gallery", "contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const allNavLinks = [...$$(".nav-links a"), ...$$("#mobilePanel a")];

  const setActive = (id) => {
    allNavLinks.forEach(a => {
      const href = a.getAttribute("href");
      a.classList.toggle("active", href === `#${id}`);
    });
  };

  const spy = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) setActive(visible.target.id);
  }, { threshold: [0.2, 0.35, 0.5, 0.65] });

  sections.forEach(s => spy.observe(s));

  /* ------------------ Navbar + back-to-top ------------------ */
  let lastY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    lastY = y;

    if (y > 40) navbar?.classList.add("is-compact");
    else navbar?.classList.remove("is-compact");

    if (y > 240 && goingDown) navbar?.classList.add("is-hidden");
    else navbar?.classList.remove("is-hidden");

    if (toTop) toTop.classList.toggle("show", y > 600);
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("load", () => {
    const hash = window.location.hash;
    if (hash) setTimeout(() => scrollToHash(hash), 50);
  });

  /* ------------------------ Vendor inits -------------------- */
  if (window.AOS) {
    AOS.init({ duration: 800, easing: "ease-out-quart", once: true, offset: 90 });
  }

  if (window.Swiper) {
    new Swiper(".gallerySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 14,
      grid: { rows: 2, fill: "row" },
      breakpoints: {
        720:  { slidesPerView: 2.4, spaceBetween: 16, grid: { rows: 2 } },
        980:  { slidesPerView: 3.2, spaceBetween: 16, grid: { rows: 2 } },
        1180: { slidesPerView: 3.6, spaceBetween: 18, grid: { rows: 2 } }
      },
      navigation: { nextEl: ".swiperNext", prevEl: ".swiperPrev" }
    });
  }

  if (window.GLightbox) {
    GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true, openEffect: "zoom", closeEffect: "fade" });
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("[data-parallax]").forEach((el) => {
      gsap.to(el, {
        y: 18,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
      });
    });
  }

  /* ------------------ Demo contact form --------------------- */
  const form = $("#contactForm");
  const toast = $("#toast");
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
    }, 2800);
  };

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const msg = String(fd.get("message") || "").trim();
    const T = applyLang._toast || {};

    if (name.length < 2) return showToast(T.name || "Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return showToast(T.email || "Please enter a valid email.");
    if (msg.length < 10) return showToast(T.msg || "Message too short.");

    form.reset();
    showToast(T.ok || "Message received.");
  });

  $("#toastClose")?.addEventListener("click", () => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%,12px)";
    toast.style.pointerEvents = "none";
  });
})();
