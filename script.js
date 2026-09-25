/**
 * RIMATEL - Core Interactive Logic & Multilingual System
 * Full Arabic (RTL), English (LTR), and French (LTR) Support
 * Cinematic Scroll-Linked 3D Image Sequence Canvas (ezgif-frame-001 to 070)
 * Synchronized Dynamic Text Overlays Across Frame Ranges
 * Interactive Modal, Mobile Drawer, DPR Cover Rendering & Apple-level Fluidity
 */

document.addEventListener('DOMContentLoaded', () => {
  const htmlRoot = document.documentElement;
  
  // Header & Brand
  const brandText = document.getElementById('brand-text');
  const badgeText = document.getElementById('badge-text');
  const heroBadge = document.getElementById('hero-badge');
  const titleLine1 = document.getElementById('title-line-1');
  const titleLine2 = document.getElementById('title-line-2');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const ctaBtnText = document.getElementById('cta-btn-text');
  const mobCtaBtn = document.getElementById('mob-cta-btn');
  const promptInput = document.getElementById('prompt-input');
  const searchBtnText = document.getElementById('search-btn-text');
  const generateBtn = document.getElementById('generate-btn');

  // Hero Scroll Track & Elements
  const heroScrollContainer = document.getElementById('hero-scroll');
  const heroStickyViewport = document.getElementById('hero-sticky-viewport');
  const heroContent = document.getElementById('hero-content');
  const seqCanvas = document.getElementById('sequence-canvas');
  const scrollIndicator = document.getElementById('scroll-indicator');
  const scrollHint = document.getElementById('scroll-hint');

  // Cinematic Frame-Synchronized Caption Elements
  const cinematicCaptionWrapper = document.getElementById('cinematic-caption-wrapper');
  const cinematicCaptionCard = document.getElementById('cinematic-caption-card');
  const cinematicCaptionText = document.getElementById('cinematic-caption-text');
  
  // Desktop Nav Links
  const navHome = document.getElementById('nav-home');
  const navAbout = document.getElementById('nav-about');
  const navFibre = document.getElementById('nav-fibre');
  const navSawi = document.getElementById('nav-sawi');
  const navNum7 = document.getElementById('nav-num7');
  const navFaq = document.getElementById('nav-faq');

  // Mobile Nav Links
  const mobNavHome = document.getElementById('mob-nav-home');
  const mobNavAbout = document.getElementById('mob-nav-about');
  const mobNavFibre = document.getElementById('mob-nav-fibre');
  const mobNavSawi = document.getElementById('mob-nav-sawi');
  const mobNavNum7 = document.getElementById('mob-nav-num7');
  const mobNavFaq = document.getElementById('mob-nav-faq');
  const mobLangLabel = document.getElementById('mob-lang-label');

  // Mobile Toggle & Drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Prompt Tags & Service Cards
  const promptTags = document.querySelectorAll('.prompt-tag');
  const glassCards = document.querySelectorAll('.glass-card');

  // Service Section & About Elements
  const secBadge = document.getElementById('sec-badge');
  const secTitle = document.getElementById('sec-title');
  const secSubtitle = document.getElementById('sec-subtitle');
  
  const cardTag1 = document.getElementById('card-tag-1');
  const cardTitle1 = document.getElementById('card-title-1');
  const cardDesc1 = document.getElementById('card-desc-1');
  const cardBtn1 = document.getElementById('card-btn-1');

  const cardTag2 = document.getElementById('card-tag-2');
  const cardTitle2 = document.getElementById('card-title-2');
  const cardDesc2 = document.getElementById('card-desc-2');
  const cardBtn2 = document.getElementById('card-btn-2');

  const cardTag3 = document.getElementById('card-tag-3');
  const cardTitle3 = document.getElementById('card-title-3');
  const cardDesc3 = document.getElementById('card-desc-3');
  const cardBtn3 = document.getElementById('card-btn-3');

  const cardTag4 = document.getElementById('card-tag-4');
  const cardTitle4 = document.getElementById('card-title-4');
  const cardDesc4 = document.getElementById('card-desc-4');
  const cardBtn4 = document.getElementById('card-btn-4');

  const abtBadge = document.getElementById('abt-badge');
  const abtTitle = document.getElementById('abt-title');
  const abtDesc1 = document.getElementById('abt-desc-1');
  const abtDesc2 = document.getElementById('abt-desc-2');
  const val1 = document.getElementById('val-1');
  const val2 = document.getElementById('val-2');
  const val3 = document.getElementById('val-3');
  const stat1Label = document.getElementById('stat-1-label');
  const stat2Label = document.getElementById('stat-2-label');
  const stat3Label = document.getElementById('stat-3-label');

  const footerTagline = document.getElementById('footer-tagline');
  const footerCopy = document.getElementById('footer-copy');

  // Language buttons (both desktop & mobile)
  const langButtons = document.querySelectorAll('.lang-btn, .mobile-lang-btn');

  // Service Modal Elements
  const serviceModal = document.getElementById('service-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalServiceBadge = document.getElementById('modal-service-badge');
  const modalServiceTitle = document.getElementById('modal-service-title');
  const modalServiceBody = document.getElementById('modal-service-body');
  const modalActionBtn = document.getElementById('modal-action-btn');

  // Comprehensive Multilingual Content Dictionary based on user's exact RIMATEL prompt & frame captions
  const translations = {
    ar: {
      lang: 'ar',
      dir: 'rtl',
      pageTitle: 'ريماتل (RIMATEL) | جيلٌ جديد.. اتصالٌ سديد.. ورقمٌ فريد (5G)',
      brand: 'RIMATEL',
      badge: 'رخصة الجيل الخامس 5G • شبكة المستقبل، وأفقُ الأمل',
      title1: 'جيلٌ جديد.. اتصالٌ سديد',
      title2: 'ورقمٌ فريد (7)',
      subtitle: 'شركة ريماتل (RIMATEL) الرائدة في موريتانيا: نصلك بأسرع أليافٍ بصرية (FTTH)، ونمنحك أوفى باقات "ساوي" اللاسلكية، مع خطوط الجيل الخامس الفائقة بمفتاح الرقم (7).. سرعةٌ تُبهر، وجودةٌ تزهر، واتصالٌ لا يفتر.',
      cta: 'اكتشف العروض',
      searchPlaceholder: 'تحقق من تغطية الفايبر السريع أو باقة ساوي في حيك البديع بنواكشوط...',
      searchBtn: 'فحص التغطية',
      scrollHint: 'مرر للأسفل.. واستكشف المستقبل',
      mobLangLabel: 'اختر اللغة المفضلة:',
      // Frame range captions with elegant rhymed saj'
      captions: [
        { step: '01 / 05', text: 'خدماتٌ فائقة.. وسرعاتٌ بارقة' },
        { step: '02 / 05', text: 'تغطيةٌ شاملة.. في ربوع الوطن كاملة' },
        { step: '03 / 05', text: 'أليافٌ بصرية.. بتدفقاتٍ خيالية' },
        { step: '04 / 05', text: 'دعمٌ وافٍ من عباقرةٍ محترفين.. لخدمتكم في كل حين' },
        { step: '05 / 05', text: 'في قوة الشبكة وشمول التغطية.. ريماتل دوماً هي الرائدة والمرضية' }
      ],
      nav: {
        home: 'الرئيسية',
        about: 'عن ريماتل',
        fibre: 'فايبر أوبتيك',
        sawi: 'خدمة ساوي',
        num7: 'أرقام 7 (5G)',
        faq: 'تطبيق السداد'
      },
      tags: {
        fibre: '✦ فايبر أوبتيك • سرعةٌ لا تنقطع',
        sawi: '✦ باقة ساوي • إنترنتٌ بلا حدود يتسع',
        '5g': '✦ خطوط الجيل الخامس (7) • اتصالٌ بالكمال يرتفع',
        app: '✦ تطبيق السداد • تجديدٌ فوريٌّ يُمتع'
      },
      section: {
        badge: 'بنيةٌ رقمية متينة.. لنهضةٍ وطنية مكينة',
        title: 'حلولُ اتصالٍ تواكب الغد.. وتمدُّ الجسورَ بلا حد',
        subtitle: 'نسدُّ الفجوة الرقمية، وندعم التنمية الوطنية في موريتانيا، عبر أحدث شبكات الجيل الخامس والألياف البصرية الذكية.'
      },
      cards: {
        c1: {
          tag: 'رخصة 5G • انطلاقة الهوية',
          title: 'أرقامٌ تبدأ بـ (7) لآفاقٍ ذكية',
          desc: 'أطلقت ريماتل في أغسطس 2026 هويتها المتجددة وخطوطها بمفتاح (7)؛ رمزاً للكمال، وبشرى بالوفرة والجمال، وفق 3 قيم: اتصالٌ ممتد، وجودةٌ تعتمد، وقيمٌ تواكب المستقبل وتستجد.',
          btn: 'تفاصيل العرض ←'
        },
        c2: {
          tag: 'ثباتٌ مطلق • وتدفقٌ أسرع',
          title: 'خدمة فايبر أوبتيك (FTTH)',
          desc: 'إنترنتٌ فائق الثبات عبر كابلات الألياف البصرية الممتدة للبيوت والمنشآت. تدفقٌ متواصل للبث عالي الدقة والألعاب دون انقطاع، مع عروض تركيب دورية وأسعار في متناول الجميع واستطاع.',
          btn: 'تفاصيل الفايبر ←'
        },
        c3: {
          tag: 'حريةٌ لاسلكية • وسرعةٌ وفية',
          title: 'باقة ساوي (SAWI) اللامحدودة',
          desc: 'إنترنت لاسلكي مرن عبر أحدث أجهزة الراوتر والواي فاي، صُمم ليمنح الأسر والأفراد اتصالاً مفتوحاً بأوفر الأسعار، وتجديداً سهلاً من الهاتف بلمسة زر واستقرار.',
          btn: 'تفاصيل ساوي ←'
        },
        c4: {
          tag: 'دفعٌ رقمي • وأمانٌ محمي',
          title: 'تطبيق ريماتل والدفع عبر "السداد"',
          desc: 'اشحن رصيدك وجدد باقتك في ثوانٍ معدودات، عبر تطبيق ريماتل وشريكنا "السداد" مع خصومات حصرية وتسهيلات، لتنعم بخدمة سلسة وراحةٍ في كل الأوقات.',
          btn: 'طرق الدفع ←'
        }
      },
      about: {
        badge: 'التأسيس والانطلاقة (2021 - 2022)',
        title: 'عن شركة ريماتل • صرحُ الاتصال والأمانيا',
        desc1: 'شركة ريماتل (RIMATEL) هي شركة اتصالات موريتانية رائدة في نواكشوط، متخصصة في خدمات الإنترنت والحلول الرقمية؛ تهدف إلى سد الفجوة الرقمية، ودعم التنمية الاجتماعية والاقتصادية، عبر تقديم خدمات اتصال مبتكرة ترتقي بالطموح وتلبي كل حاجةٍ وروح.',
        desc2: 'وفي مايو 2026، وقّعت ريماتل دفتر شروط رخصة الجيل الخامس (5G)؛ لتخطو خطوة استراتيجية نحو تمكين الحوسبة السحابية، وإنترنت الأشياء، وبناء صروح البيانات المستقبلية.',
        val1: 'اتصالٌ ممتد • يفي بالعهد',
        val2: 'جودةٌ متكاملة • ورعايةٌ شاملة',
        val3: 'قيمٌ تواكب المستقبل • لغدٍ أجمل',
        stat1: 'رخصة 5G الموقعة • عهدٌ لنهضةٍ مُشرعة (مايو 2026)',
        stat2: 'مفتاح 7 الرنان • كمالٌ واستمرارٌ وأمان',
        stat3: 'ألياف الفايبر المتطورة • في كل دارٍ ومؤسسة معتبرة'
      },
      footer: {
        tagline: 'جيلٌ جديد.. اتصالٌ سديد.. ورقمٌ فريد',
        copy: '© 2026 شركة ريماتل (RIMATEL) - شريان الاتصال الرقمي في موريتانيا. جميع الحقوق محفوظة.'
      },
      services: {
        about: {
          badge: 'التأسيس والانطلاقة (2021 - 2022)',
          title: 'عن شركة ريماتل • صرحُ الاتصال والأمانيا',
          body: `
            <p><strong>شركة ريماتل</strong> هي شركة اتصالات موريتانية رائدة متخصصة في توفير خدمات الإنترنت والحلول الرقمية المتقدمة، ومقرها الرئيسي في العاصمة نواكشوط.</p>
            <p>رسالتنا سد الفجوة الرقمية، ودفع عجلة التنمية الوطنية، عبر حلول اتصال موثوقة ومبتكرة تلبي تطلعات الأفراد وتواكب كبرى الشركات بمعايير رفيعة ومتقنة.</p>
            <ul>
              <li><strong>الانطلاقة:</strong> تأسست رسمياً (2021-2022) لترسيخ بنية تحتية حديثة ومستدامة.</li>
              <li><strong>رخصة الجيل الخامس (5G):</strong> تم توقيع دفتر الشروط في مايو 2026 لقيادة التحول الرقمي وإنترنت الأشياء والحوسبة السحابية في موريتانيا.</li>
            </ul>
          `,
          action: 'معرفة المزيد'
        },
        fibre: {
          badge: 'تدفقٌ فائق للمنازل والشركات',
          title: 'خدمة فايبر أوبتيك (Fibre Optique FTTH)',
          body: `
            <p>تقنية الألياف البصرية المتقدمة الواصلة مباشرةً إلى مقرات الشركات والمنازل (FTTH) في موريتانيا؛ لسرعاتٍ قياسية وأداءٍ لا يضاهى.</p>
            <ul>
              <li><strong>ثباتٌ مطلق:</strong> سرعات تدفق متوازنة ومستمرة دون انقطاع أو تباطؤ.</li>
              <li><strong>مثالية للأعمال والاستخدام الكثيف:</strong> تتيح العمل عن بُعد، وبث الفيديو بدقة 4K، والألعاب التنافسية بأقل زمن استجابة.</li>
              <li><strong>تسهيلات وتركيب ميسر:</strong> عروض دورية وتخفيضات مستمرة تتيح للجميع الاستمتاع بأحدث ما توصلت إليه تقنيات الألياف.</li>
            </ul>
          `,
          action: 'طلب تركيب فايبر'
        },
        sawi: {
          badge: 'إنترنت منزلي لاسلكي بلا حدود',
          title: 'خدمة ساوي اللاسلكية (SAWI)',
          body: `
            <p><strong>باقة ساوي (SAWI)</strong> تمنحك حرية الاتصال اللاسلكي غير المحدود عبر أجهزة الراوتر والواي فاي، صُممت بعناية لتلبي تطلعات الأفراد والعائلات.</p>
            <ul>
              <li><strong>اتصالٌ مفتوح وبلا قيود:</strong> باقات شاملة بتكلفة اقتصادية تناسب الجميع.</li>
              <li><strong>تجديدٌ بضغطة زر:</strong> تجديد الاشتراكات فوراً عبر تطبيق ريماتل الرسمي على الهواتف الذكية.</li>
              <li><strong>تكاملٌ سلس مع تطبيق "السداد":</strong> دفع إلكتروني فوري مع خصومات مميزة وعروض متجددة.</li>
            </ul>
          `,
          action: 'اشترك في باقة ساوي'
        },
        '5g': {
          badge: 'هوية متجددة ورقمٌ مميز (أغسطس 2026)',
          title: 'أرقام ريماتل بمفتاح الرقم 7 (5G Ready)',
          body: `
            <p>كشفت ريماتل عن هويتها البصرية الجديدة وشرائح الاتصال المجهزة لسرعات الجيل الخامس (5G)، والتي تزهو بمفتاح الأرقام <strong>"7"</strong>.</p>
            <p>تحت شعارنا الخالد <em>"جيلٌ جديد.. اتصالٌ سديد.. ورقمٌ فريد"</em>، يجسد الرقم 7 معاني الكمال والاستمرار، ويرتكز على 3 مبادئ:</p>
            <ul>
              <li><strong>اتصالٌ ممتد:</strong> شبكة قوية ترافقك وتغطي تنقلاتك في كل مكان.</li>
              <li><strong>جودةٌ متكاملة:</strong> نقاء صوتي وسرعات بيانات ترتقي بتجربتك اليومية.</li>
              <li><strong>قيمٌ تواكب المستقبل:</strong> تهيئة البنية التحتية لتقنيات الذكاء الاصطناعي وإنترنت الأشياء في بلادنا.</li>
            </ul>
          `,
          action: 'احجز رقمك المميز 7'
        },
        app: {
          badge: 'تجربة رقمية وسدادٌ فوري',
          title: 'تطبيق ريماتل والدفع عبر "السداد"',
          body: `
            <p>منظومة دفع إلكتروني متطورة تمكنك من إدارة اشتراكاتك وشحن رصيدك بكل أمان وسهولة:</p>
            <ul>
              <li><strong>تطبيق ريماتل الذكي:</strong> متابعة الاستهلاك وإدارة الحساب في أي وقت ومن أي مكان.</li>
              <li><strong>شراكة "السداد":</strong> تسديد فوري للخدمات واستفادة من خصومات حصرية لعملاء السداد.</li>
              <li><strong>فريق دعمٍ متأهب:</strong> خبراء تقنيون في خدمتك على مدار الساعة لضمان استمرارية الاتصال.</li>
            </ul>
          `,
          action: 'تحميل التطبيق'
        }
      }
    },
    en: {
      lang: 'en',
      dir: 'ltr',
      pageTitle: 'RIMATEL | New Generation.. New Connection.. New Number 7 (5G)',
      brand: 'RIMATEL',
      badge: '5G License • The Future Telecom Network of Mauritania',
      title1: 'New Generation • New Connection',
      title2: 'New Number (7)',
      subtitle: 'RIMATEL is Mauritania’s premier telecommunications leader based in Nouakchott, pioneering ultra-fast FTTH Fibre Optique, unlimited SAWI wireless broadband, and next-gen 5G lines starting with 7.',
      cta: 'Explore Plans',
      searchPlaceholder: 'Check FTTH Fibre or SAWI coverage in your Nouakchott district...',
      searchBtn: 'Check Coverage',
      scrollHint: 'Scroll down to explore',
      mobLangLabel: 'Choose Preferred Language:',
      captions: [
        { step: '01 / 05', text: 'Premium services & ultra-high speeds' },
        { step: '02 / 05', text: 'Comprehensive coverage across the entire nation' },
        { step: '03 / 05', text: 'Ultra-fast fiber optic connectivity' },
        { step: '04 / 05', text: 'Continuous support from professional experts' },
        { step: '05 / 05', text: 'Whether network services or coverage, RIMATEL is the best' }
      ],
      nav: {
        home: 'Home',
        about: 'About Rimatel',
        fibre: 'Fibre Optique',
        sawi: 'SAWI Broadband',
        num7: '5G Lines (7)',
        faq: 'Sedad & App'
      },
      tags: {
        fibre: '✦ Fibre Optique (FTTH)',
        sawi: '✦ SAWI Wireless Broadband',
        '5g': '✦ 5G Mobile Lines (Key 7)',
        app: '✦ App Renewal & Sedad Pay'
      },
      section: {
        badge: 'Next-Gen Digital Infrastructure',
        title: 'Integrated Telecom Solutions for the Future',
        subtitle: 'Bridging the digital divide and driving socioeconomic prosperity in Mauritania through high-speed fiber and 5G networks.'
      },
      cards: {
        c1: {
          tag: '5G License & New Identity',
          title: 'Numbers Starting with 7 (5G)',
          desc: 'In August 2026, Rimatel unveiled its new identity and mobile lines starting with 7, symbolizing perfection, abundance, and continuity under three core values: Extended Connection, Integrated Quality, and Future-Proof Values.',
          btn: 'Learn More →'
        },
        c2: {
          tag: 'Ultra Speed & Stability',
          title: 'Fibre Optique (FTTH)',
          desc: 'High-speed internet via state-of-the-art optical fiber direct to homes and businesses. Ultra-stable for remote work, 4K streaming, and competitive low-latency gaming, with regular installation promotions.',
          btn: 'Fibre Details →'
        },
        c3: {
          tag: 'Unlimited Wireless Internet',
          title: 'SAWI Broadband',
          desc: 'Flexible wireless internet bundle via Wi-Fi routers offering uncapped data at competitive rates for families and individuals, with instant smartphone renewals.',
          btn: 'SAWI Details →'
        },
        c4: {
          tag: 'E-Payment & Exclusive Rebates',
          title: 'Rimatel App & Sedad Pay',
          desc: 'Instant self-service recharges via the Rimatel mobile app and trusted local e-wallets like Sedad, offering exclusive customer rebates and smooth digital experiences.',
          btn: 'Payment Methods →'
        }
      },
      about: {
        badge: 'Founded & Launch (2021 - 2022)',
        title: 'About RIMATEL Mauritania',
        desc1: 'RIMATEL is a leading Mauritanian telecommunications company specializing in broadband internet and advanced digital solutions. Headquartered in Nouakchott, it aims to bridge the digital divide and spur socioeconomic development across Mauritania.',
        desc2: 'In May 2026, RIMATEL signed the terms of reference for the national 5G telecom license, marking a decisive strategic milestone toward enabling IoT, Big Data, and Cloud solutions across Mauritania.',
        val1: 'Extended Connection',
        val2: 'Integrated Quality',
        val3: 'Future-Proof Values',
        stat1: '5G License Signed (May 2026)',
        stat2: 'New SIM Prefix (Perfection & Abundance)',
        stat3: 'Ultra-Fast Fiber Optic to Homes & Offices'
      },
      footer: {
        tagline: 'New Generation.. New Connection.. New Number',
        copy: '© 2026 RIMATEL Telecom - All rights reserved. Nouakchott, Mauritania.'
      },
      services: {
        about: {
          badge: 'Founded & Launch (2021 - 2022)',
          title: 'About RIMATEL Mauritania',
          body: `
            <p><strong>RIMATEL</strong> is a leading Mauritanian telecom operator specializing in broadband internet and modern digital solutions, headquartered in Nouakchott.</p>
            <p>Its mission is to bridge the digital divide and foster socioeconomic growth across Mauritania by delivering innovative, reliable communication services.</p>
            <ul>
              <li><strong>Inception:</strong> Launched in 2021-2022 to elevate connectivity standards.</li>
              <li><strong>5G License:</strong> Signed May 2026 to power IoT, Big Data, and Cloud solutions in Mauritania.</li>
            </ul>
          `,
          action: 'Learn More'
        },
        fibre: {
          badge: 'Ultra-High-Speed Internet for Homes & Businesses',
          title: 'Fibre Optique (FTTH)',
          body: `
            <p>Ultra-high-speed internet over state-of-the-art optical fiber deployed directly to homes and enterprises across Mauritania.</p>
            <ul>
              <li><strong>Zero Interruption:</strong> Rock-solid stability and high throughput for demanding use cases.</li>
              <li><strong>Optimized for Modern Needs:</strong> Remote work, 4K streaming, and competitive low-latency gaming.</li>
              <li><strong>Installation Offers:</strong> Regular promotions lowering setup fees to accelerate fiber adoption.</li>
            </ul>
          `,
          action: 'Order Fiber Setup'
        },
        sawi: {
          badge: 'Unlimited Wireless Home Internet',
          title: 'SAWI Wireless Broadband',
          body: `
            <p><strong>SAWI</strong> is an unlimited wireless broadband bundle powered by high-performance 4G/WiFi routers designed for households and individuals.</p>
            <ul>
              <li><strong>Unlimited Connectivity:</strong> Seamless, uncapped internet at competitive local prices.</li>
              <li><strong>Instant Smartphone Renewal:</strong> Top up anytime via the official Rimatel mobile app.</li>
              <li><strong>Sedad App Integration:</strong> Seamless mobile payments with exclusive promotional discounts.</li>
            </ul>
          `,
          action: 'Get SAWI Plan'
        },
        '5g': {
          badge: 'New Visual Identity (August 2026)',
          title: 'Mobile Lines Starting with 7 (5G Ready)',
          body: `
            <p>In August 2026, RIMATEL unveiled its new visual identity and launched mobile numbers prefixed with <strong>7</strong>, built for 5G speed.</p>
            <p>Under the motto <em>"New Generation.. New Connection.. New Number"</em>, the number 7 symbolizes perfection, abundance, and continuity:</p>
            <ul>
              <li><strong>Extended Connectivity:</strong> Robust coverage accompanying your daily journey.</li>
              <li><strong>Integrated Quality:</strong> Crystal-clear voice and blazing-fast data throughput.</li>
              <li><strong>Future-Proof Values:</strong> Bringing AI, cloud, and next-gen technologies to Mauritanians.</li>
            </ul>
          `,
          action: 'Reserve Your 7 Number'
        },
        app: {
          badge: 'Digital Payments & User Experience',
          title: 'Rimatel App & Sedad Payments',
          body: `
            <p>Enjoy a frictionless digital telecom experience with our dedicated self-service tools:</p>
            <ul>
              <li><strong>Official Rimatel App:</strong> Manage subscriptions, monitor usage, and recharge from anywhere.</li>
              <li><strong>Sedad Payment Integration:</strong> Fast local electronic payments with exclusive user rebates.</li>
              <li><strong>24/7 Technical Support:</strong> Dedicated engineering teams ensuring uninterrupted uptime.</li>
            </ul>
          `,
          action: 'Download App'
        }
      }
    },
    fr: {
      lang: 'fr',
      dir: 'ltr',
      pageTitle: 'RIMATEL | Nouvelle Génération.. Nouvelle Connexion.. Numéro 7 (5G)',
      brand: 'RIMATEL',
      badge: 'Licence 5G • Le Réseau du Futur en Mauritanie',
      title1: 'Nouvelle Génération • Connexion',
      title2: 'Nouveau Numéro (7)',
      subtitle: 'RIMATEL est l’opérateur télécom mauritanien leader à Nouakchott, pionnier de la Fibre Optique très haut débit (FTTH), des forfaits sans fil illimités SAWI et des lignes 5G commençant par le 7.',
      cta: 'Découvrir les offres',
      searchPlaceholder: 'Vérifiez la couverture Fibre FTTH ou SAWI dans votre quartier à Nouakchott...',
      searchBtn: 'Tester l’éligibilité',
      scrollHint: 'Faites défiler pour explorer',
      mobLangLabel: 'Choisissez votre langue :',
      captions: [
        { step: '01 / 05', text: 'Services d’excellence et vitesse ultra-rapide' },
        { step: '02 / 05', text: 'Couverture complète dans tout le pays' },
        { step: '03 / 05', text: 'Connexion très haut débit par fibre optique' },
        { step: '04 / 05', text: 'Support continu par des experts professionnels' },
        { step: '05 / 05', text: 'Services de réseau ou couverture, RIMATEL est le meilleur' }
      ],
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        fibre: 'Fibre Optique',
        sawi: 'Offre SAWI',
        num7: 'Lignes 5G (7)',
        faq: 'App & Sedad'
      },
      tags: {
        fibre: '✦ Fibre Optique (FTTH)',
        sawi: '✦ Forfait Sans Fil SAWI',
        '5g': '✦ Lignes Mobiles 5G (Clé 7)',
        app: '✦ Application & Sedad'
      },
      section: {
        badge: 'Infrastructure Digitale d’Avenir',
        title: 'Solutions Télécoms Intégrées et Innovantes',
        subtitle: 'Combler le fossé numérique et soutenir le développement socio-économique en Mauritanie avec le très haut débit et la 5G.'
      },
      cards: {
        c1: {
          tag: 'Licence 5G & Nouvelle Identité',
          title: 'Lignes commençant par 7 (5G)',
          desc: 'En août 2026, Rimatel a inauguré sa nouvelle identité et ses numéros débutant par le 7, incarnant perfection, abondance et continuité autour de trois valeurs : Connexion étendue, Qualité intégrale, Valeurs d’avenir.',
          btn: 'En savoir plus →'
        },
        c2: {
          tag: 'Très Haut Débit & Stabilité',
          title: 'Fibre Optique (FTTH)',
          desc: 'Internet très haut débit jusqu’à votre domicile ou entreprise. Idéal pour le télétravail, le streaming 4K et le gaming en direct sans latence, avec des promotions régulières d’installation.',
          btn: 'Détails Fibre →'
        },
        c3: {
          tag: 'Internet Sans Fil Illimité',
          title: 'Offre SAWI',
          desc: 'Forfait sans fil illimité via routeur WiFi à des tarifs compétitifs pour les foyers et les professionnels, avec renouvellement immédiat sur smartphone.',
          btn: 'Détails SAWI →'
        },
        c4: {
          tag: 'Paiement Électronique & Remises',
          title: 'Application RIMATEL & Sedad',
          desc: 'Recharge simplifiée via l’application RIMATEL et les solutions locales telles que Sedad avec des réductions exclusives et une expérience utilisateur fluide.',
          btn: 'Modes de paiement →'
        }
      },
      about: {
        badge: 'Fondation et Lancement (2021 - 2022)',
        title: 'À Propos de RIMATEL',
        desc1: 'RIMATEL est un opérateur télécom mauritanien innovant spécialisé dans les solutions internet et digitales haut débit, basé à Nouakchott. Il œuvre pour moderniser le paysage numérique national.',
        desc2: 'En mai 2026, RIMATEL a signé le cahier des charges de la licence 5G, une avancée majeure pour propulser l’IoT, le Big Data et le Cloud computing en Mauritanie.',
        val1: 'Connexion Étendue',
        val2: 'Qualité Intégrale',
        val3: 'Valeurs d’Avenir',
        stat1: 'Licence 5G Signée (Mai 2026)',
        stat2: 'Préfixe 7 (Perfection & Continuité)',
        stat3: 'Fibre Optique FTTH pour Foyers & Entreprises'
      },
      footer: {
        tagline: 'Nouvelle Génération.. Nouvelle Connexion.. Nouveau Numéro',
        copy: '© 2026 Opérateur RIMATEL - Tous droits réservés. Nouakchott, Mauritanie.'
      },
      services: {
        about: {
          badge: 'Fondation et Lancement (2021 - 2022)',
          title: 'À Propos de RIMATEL',
          body: `
            <p><strong>RIMATEL</strong> est un opérateur télécom mauritanien innovant spécialisé dans les solutions internet et digitales haut débit, basé à Nouakchott.</p>
            <p>La société vise à réduire la fracture numérique et soutenir le développement socio-économique en Mauritanie avec des services d'excellence.</p>
            <ul>
              <li><strong>Lancement:</strong> Début d'activité en 2021-2022 pour moderniser les infrastructures nationales.</li>
              <li><strong>Licence 5G:</strong> Signature en mai 2026 pour catalyser l'IoT, le Big Data et le Cloud.</li>
            </ul>
          `,
          action: 'En Savoir Plus'
        },
        fibre: {
          badge: 'Très Haut Débit pour Particuliers & Entreprises',
          title: 'Fibre Optique (FTTH)',
          body: `
            <p>Une connexion ultra-performante par fibre optique déployée jusqu'à votre domicile ou vos bureaux en Mauritanie.</p>
            <ul>
              <li><strong>Stabilité Maximale:</strong> Débits symétriques et réguliers sans aucune coupure.</li>
              <li><strong>Usages Intensifs:</strong> Télétravail, streaming 4K et gaming compétitif en temps réel.</li>
              <li><strong>Promotions d'installation:</strong> Réductions régulières sur les frais de raccordement pour démocratiser la fibre.</li>
            </ul>
          `,
          action: 'Commander la Fibre'
        },
        sawi: {
          badge: 'Internet Résidentiel Sans Fil Illimité',
          title: 'Forfait SAWI',
          body: `
            <p>L’offre <strong>SAWI</strong> propose un accès internet sans fil illimité via routeur WiFi, parfaitement adapté aux foyers et aux familles.</p>
            <ul>
              <li><strong>Volume Illimité:</strong> Forfaits compétitifs pour surfer sans restriction.</li>
              <li><strong>Recharge Facile:</strong> Renouvellement instantané via l’application smartphone RIMATEL.</li>
              <li><strong>Paiement Sedad:</strong> Intégration directe avec l’application Sedad avec des réductions exclusives.</li>
            </ul>
          `,
          action: 'Souscrire à SAWI'
        },
        '5g': {
          badge: 'Nouvelle Identité & Numéro 7 (Août 2026)',
          title: 'Lignes 5G commençant par le 7',
          body: `
            <p>En août 2026, RIMATEL a déployé sa nouvelle identité visuelle et ses cartes SIM prêtes pour la 5G, débutant par le préfixe <strong>7</strong>.</p>
            <p>Sous le slogan <em>"Nouvelle génération.. Nouvelle connexion.. Nouveau numéro"</em>, le 7 incarne perfection, abondance et continuité :</p>
            <ul>
              <li><strong>Connectivité Étendue:</strong> Couverture continue pour tous vos déplacements.</li>
              <li><strong>Qualité Intégrale:</strong> Clarté d'appel et débits mobiles de dernière génération.</li>
              <li><strong>Valeurs d’Avenir:</strong> Préparation active à l'écosystème 5G en Mauritanie.</li>
            </ul>
          `,
          action: 'Choisir mon numéro 7'
        },
        app: {
          badge: 'Expérience Client & Paiement Numérique',
          title: 'Application RIMATEL & Sedad',
          body: `
            <p>Une expérience digitale simplifiée pour gérer vos forfaits et payer en toute tranquillité :</p>
            <ul>
              <li><strong>Application RIMATEL:</strong> Suivi de consommation et recharges en quelques clics.</li>
              <li><strong>Paiement Sedad:</strong> Paiement mobile rapide avec avantages promotionnels réguliers.</li>
              <li><strong>Support Dédié:</strong> Équipes techniques mobilisées 24/7 à Nouakchott.</li>
            </ul>
          `,
          action: 'Télécharger l’App'
        }
      }
    }
  };

  let currentLang = 'ar';
  let activeCaptionIndex = 0;

  // Frame range caption updater
  function applyCaption(index, forceImmediate = false) {
    if (!cinematicCaptionText) return;
    const langData = translations[currentLang];
    const captionList = langData.captions || [];
    const item = captionList[index];
    if (!item) return;

    if (forceImmediate) {
      cinematicCaptionText.textContent = item.text;
      return;
    }

    cinematicCaptionText.classList.add('caption-fade-out');
    cinematicCaptionText.classList.remove('caption-fade-in');

    setTimeout(() => {
      cinematicCaptionText.textContent = item.text;
      cinematicCaptionText.classList.remove('caption-fade-out');
      cinematicCaptionText.classList.add('caption-fade-in');
    }, 110);
  }

  // Apply Language & Direction
  function setLanguage(lang) {
    currentLang = lang;
    const data = translations[lang];
    if (!data) return;

    // Set HTML Dir and Lang
    htmlRoot.setAttribute('dir', data.dir);
    htmlRoot.setAttribute('lang', data.lang);
    document.title = data.pageTitle;

    // Update Brand & Hero
    if (brandText) brandText.textContent = data.brand;
    if (badgeText) badgeText.textContent = data.badge;
    if (titleLine1) titleLine1.textContent = data.title1;
    if (titleLine2) titleLine2.textContent = data.title2;
    if (heroSubtitle) heroSubtitle.textContent = data.subtitle;
    if (ctaBtnText) ctaBtnText.textContent = data.cta;
    if (mobCtaBtn) mobCtaBtn.textContent = data.cta;
    if (searchBtnText) searchBtnText.textContent = data.searchBtn;
    if (promptInput) promptInput.placeholder = data.searchPlaceholder;
    if (scrollHint && data.scrollHint) scrollHint.textContent = data.scrollHint;
    if (mobLangLabel) mobLangLabel.textContent = data.mobLangLabel;

    // Refresh active frame caption
    applyCaption(activeCaptionIndex, true);

    // Desktop Nav
    if (navHome) navHome.textContent = data.nav.home;
    if (navAbout) navAbout.textContent = data.nav.about;
    if (navFibre) navFibre.textContent = data.nav.fibre;
    if (navSawi) navSawi.textContent = data.nav.sawi;
    if (navNum7) navNum7.textContent = data.nav.num7;
    if (navFaq) navFaq.textContent = data.nav.faq;

    // Mobile Nav
    if (mobNavHome) mobNavHome.textContent = data.nav.home;
    if (mobNavAbout) mobNavAbout.textContent = data.nav.about;
    if (mobNavFibre) mobNavFibre.textContent = data.nav.fibre;
    if (mobNavSawi) mobNavSawi.textContent = data.nav.sawi;
    if (mobNavNum7) mobNavNum7.textContent = data.nav.num7;
    if (mobNavFaq) mobNavFaq.textContent = data.nav.faq;

    // Tags
    promptTags.forEach(tag => {
      const key = tag.getAttribute('data-service');
      if (key && data.tags[key]) {
        tag.textContent = data.tags[key];
      }
    });

    // Section Header
    if (secBadge) secBadge.textContent = data.section.badge;
    if (secTitle) secTitle.textContent = data.section.title;
    if (secSubtitle) secSubtitle.textContent = data.section.subtitle;

    // Service Cards
    if (cardTag1) cardTag1.textContent = data.cards.c1.tag;
    if (cardTitle1) cardTitle1.textContent = data.cards.c1.title;
    if (cardDesc1) cardDesc1.textContent = data.cards.c1.desc;
    if (cardBtn1) cardBtn1.textContent = data.cards.c1.btn;

    if (cardTag2) cardTag2.textContent = data.cards.c2.tag;
    if (cardTitle2) cardTitle2.textContent = data.cards.c2.title;
    if (cardDesc2) cardDesc2.textContent = data.cards.c2.desc;
    if (cardBtn2) cardBtn2.textContent = data.cards.c2.btn;

    if (cardTag3) cardTag3.textContent = data.cards.c3.tag;
    if (cardTitle3) cardTitle3.textContent = data.cards.c3.title;
    if (cardDesc3) cardDesc3.textContent = data.cards.c3.desc;
    if (cardBtn3) cardBtn3.textContent = data.cards.c3.btn;

    if (cardTag4) cardTag4.textContent = data.cards.c4.tag;
    if (cardTitle4) cardTitle4.textContent = data.cards.c4.title;
    if (cardDesc4) cardDesc4.textContent = data.cards.c4.desc;
    if (cardBtn4) cardBtn4.textContent = data.cards.c4.btn;

    // About Section
    if (abtBadge) abtBadge.textContent = data.about.badge;
    if (abtTitle) abtTitle.textContent = data.about.title;
    if (abtDesc1) abtDesc1.textContent = data.about.desc1;
    if (abtDesc2) abtDesc2.textContent = data.about.desc2;
    if (val1) val1.textContent = data.about.val1;
    if (val2) val2.textContent = data.about.val2;
    if (val3) val3.textContent = data.about.val3;
    if (stat1Label) stat1Label.textContent = data.about.stat1;
    if (stat2Label) stat2Label.textContent = data.about.stat2;
    if (stat3Label) stat3Label.textContent = data.about.stat3;

    // Footer
    if (footerTagline) footerTagline.textContent = data.footer.tagline;
    if (footerCopy) footerCopy.textContent = data.footer.copy;

    // Update active language buttons
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Language switch event listener
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });

  // Mobile Menu Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('active');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileDrawer.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile drawer when clicking any mobile link
    const mobileLinks = mobileDrawer.querySelectorAll('a, button');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!link.classList.contains('mobile-lang-btn')) {
          mobileDrawer.classList.remove('active');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileDrawer.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // Service Modal Logic
  function openServiceModal(serviceKey) {
    const langData = translations[currentLang];
    const serviceInfo = (langData.services && langData.services[serviceKey]) || langData.services['about'];

    if (modalServiceBadge) modalServiceBadge.textContent = serviceInfo.badge;
    if (modalServiceTitle) modalServiceTitle.textContent = serviceInfo.title;
    if (modalServiceBody) modalServiceBody.innerHTML = serviceInfo.body;
    if (modalActionBtn) modalActionBtn.textContent = serviceInfo.action;

    if (serviceModal) {
      serviceModal.classList.add('active');
      serviceModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeServiceModal() {
    if (serviceModal) {
      serviceModal.classList.remove('active');
      serviceModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeServiceModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeServiceModal();
  });

  // Modal Triggers on Tags & Cards
  promptTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const key = tag.getAttribute('data-service');
      if (key) openServiceModal(key);
    });
  });

  glassCards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-service');
      if (key) openServiceModal(key);
    });
  });

  if (heroBadge) {
    heroBadge.addEventListener('click', () => openServiceModal('5g'));
  }

  // Coverage test simulation
  if (generateBtn && promptInput) {
    generateBtn.addEventListener('click', () => {
      const val = promptInput.value.trim();
      const origText = searchBtnText.textContent;

      searchBtnText.textContent = currentLang === 'ar' ? 'جارٍ الفحص...' : (currentLang === 'fr' ? 'Vérification...' : 'Checking...');
      generateBtn.style.opacity = '0.85';

      setTimeout(() => {
        searchBtnText.textContent = currentLang === 'ar' ? 'منطقة مغطاة ✓' : (currentLang === 'fr' ? 'Zone Couverte ✓' : 'Area Covered ✓');

        setTimeout(() => {
          searchBtnText.textContent = origText;
          generateBtn.style.opacity = '1';
        }, 2400);
      }, 900);
    });
  }

  // ---------------------------------------------------------------------------
  // CINEMATIC SCROLL-LINKED SEQUENCE ENGINE (70 Frames: ezgif-frame-001 to 070)
  // ---------------------------------------------------------------------------
  const TOTAL_FRAMES = 70;
  const frameImages = new Array(TOTAL_FRAMES);
  const frameLoaded = new Array(TOTAL_FRAMES).fill(false);
  let targetFrameIndex = 0;
  let currentFrameIndex = 0;
  let lastDrawnFrameIndex = -1;
  let scrollProgress = 0;
  let isCanvasReady = false;
  let needsCanvasRedraw = true;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Build image path
  function getFrameSrc(index) {
    const num = String(index + 1).padStart(3, '0');
    return `assets/Folder_PNGs/ezgif-frame-${num}.png`;
  }

  // Preload frame helper
  function preloadFrame(index) {
    if (frameImages[index]) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = getFrameSrc(index);
    img.onload = () => {
      frameLoaded[index] = true;
      if (index === 0 || Math.round(currentFrameIndex) === index) {
        needsCanvasRedraw = true;
      }
    };
    frameImages[index] = img;
  }

  // 1. Immediately preload Frame 0 (ezgif-frame-001.png)
  preloadFrame(0);

  // 2. Preload first 5 frames for instantaneous initial scrolling
  for (let i = 1; i <= 5; i++) {
    preloadFrame(i);
  }

  // 3. Progressively queue the remaining frames (6 to 69) with idle batches
  let nextQueueIndex = 6;
  function loadNextBatch() {
    if (nextQueueIndex >= TOTAL_FRAMES) return;
    const batchEnd = Math.min(nextQueueIndex + 6, TOTAL_FRAMES);
    for (let i = nextQueueIndex; i < batchEnd; i++) {
      preloadFrame(i);
    }
    nextQueueIndex = batchEnd;
    if (nextQueueIndex < TOTAL_FRAMES) {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadNextBatch, { timeout: 400 });
      } else {
        setTimeout(loadNextBatch, 80);
      }
    }
  }
  setTimeout(loadNextBatch, 50);

  // Fallback to nearest loaded frame to avoid any blank flicker
  function getBestAvailableFrame(index) {
    if (frameLoaded[index] && frameImages[index]?.complete) {
      return frameImages[index];
    }
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = index - offset;
      if (prev >= 0 && frameLoaded[prev] && frameImages[prev]?.complete) {
        return frameImages[prev];
      }
      const next = index + offset;
      if (next < TOTAL_FRAMES && frameLoaded[next] && frameImages[next]?.complete) {
        return frameImages[next];
      }
    }
    return null;
  }

  // Canvas cover drawing with DPR & retina support
  if (seqCanvas) {
    const seqCtx = seqCanvas.getContext('2d', { alpha: false });

    function resizeSeqCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = heroStickyViewport ? heroStickyViewport.clientWidth : window.innerWidth;
      const height = heroStickyViewport ? heroStickyViewport.clientHeight : window.innerHeight;

      seqCanvas.width = Math.round(width * dpr);
      seqCanvas.height = Math.round(height * dpr);
      seqCanvas.style.width = '100%';
      seqCanvas.style.height = '100%';

      isCanvasReady = true;
      needsCanvasRedraw = true;
    }

    window.addEventListener('resize', resizeSeqCanvas, { passive: true });
    window.addEventListener('orientationchange', resizeSeqCanvas, { passive: true });
    resizeSeqCanvas();

    function drawCoverImage(img) {
      if (!img || !img.complete || !img.naturalWidth) return;
      const cw = seqCanvas.width;
      const ch = seqCanvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Cover scaling math
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const nx = (cw - nw) * 0.5;
      const ny = (ch - nh) * 0.5;

      seqCtx.drawImage(img, nx, ny, nw, nh);
    }

    // Scroll metrics calculator
    function updateScrollState() {
      if (!heroScrollContainer) return;
      const rect = heroScrollContainer.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const maxScroll = heroScrollContainer.offsetHeight - viewportH;
      if (maxScroll <= 0) return;

      const scrolled = -rect.top;
      scrollProgress = Math.max(0, Math.min(1, scrolled / maxScroll));
      
      // 0% scroll -> frame 1 (index 0), 100% scroll -> frame 70 (index 69)
      targetFrameIndex = scrollProgress * (TOTAL_FRAMES - 1);
    }

    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    // Persistent animation loop driven by requestAnimationFrame
    function renderAnimationLoop() {
      if (isCanvasReady) {
        // Smooth interpolation (lerp) toward target frame
        if (prefersReducedMotion) {
          currentFrameIndex = targetFrameIndex;
        } else {
          currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.14;
        }

        const targetInt = Math.round(currentFrameIndex);
        if (targetInt !== lastDrawnFrameIndex || needsCanvasRedraw) {
          const imgToDraw = getBestAvailableFrame(targetInt);
          if (imgToDraw) {
            drawCoverImage(imgToDraw);
            lastDrawnFrameIndex = targetInt;
            needsCanvasRedraw = false;
          }
        }

        // Synchronize Dynamic Text Overlays Across Frame Ranges:
        // Frame 001 to 011 -> Index 0
        // Frame 012 to 027 -> Index 1
        // Frame 028 to 042 -> Index 2
        // Frame 043 to 056 -> Index 3
        // Frame 057 to 070 -> Index 4
        const frame1Based = Math.max(1, Math.min(TOTAL_FRAMES, targetInt + 1));
        let nextCaptionIdx = 0;
        if (frame1Based >= 1 && frame1Based <= 11) {
          nextCaptionIdx = 0;
        } else if (frame1Based >= 12 && frame1Based <= 27) {
          nextCaptionIdx = 1;
        } else if (frame1Based >= 28 && frame1Based <= 42) {
          nextCaptionIdx = 2;
        } else if (frame1Based >= 43 && frame1Based <= 56) {
          nextCaptionIdx = 3;
        } else {
          nextCaptionIdx = 4;
        }

        if (nextCaptionIdx !== activeCaptionIndex) {
          activeCaptionIndex = nextCaptionIdx;
          applyCaption(activeCaptionIndex);
        }

        // Smoothly fade out top hero title & search bar during first 24% of scroll
        if (heroContent) {
          if (scrollProgress <= 0.26) {
            const contentFade = Math.max(0, 1 - (scrollProgress / 0.20));
            heroContent.style.opacity = contentFade.toFixed(3);
            heroContent.style.transform = `translateY(${-scrollProgress * 140}px)`;
            heroContent.style.pointerEvents = contentFade < 0.15 ? 'none' : 'auto';
          } else {
            heroContent.style.opacity = '0';
            heroContent.style.pointerEvents = 'none';
          }
        }

        // Fade out scroll indicator as soon as user begins scrolling
        if (scrollIndicator) {
          const indFade = Math.max(0, 1 - (scrollProgress / 0.06));
          scrollIndicator.style.opacity = indFade.toFixed(3);
          scrollIndicator.style.pointerEvents = indFade < 0.1 ? 'none' : 'auto';
        }
      }

      requestAnimationFrame(renderAnimationLoop);
    }

    renderAnimationLoop();
  }

  // Ambient Cyber Particles Canvas (Subtle Floating Neon Light Dust)
  const ambientCanvas = document.getElementById('ambient-canvas');
  if (ambientCanvas) {
    const ambCtx = ambientCanvas.getContext('2d');
    let width = (ambientCanvas.width = window.innerWidth);
    let height = (ambientCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = ambientCanvas.width = window.innerWidth;
      height = ambientCanvas.height = window.innerHeight;
    }, { passive: true });

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 30), 35);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.15,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? '#bcf143' : '#10b981'
      });
    }

    function renderAmbientCanvas() {
      ambCtx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ambCtx.beginPath();
        ambCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ambCtx.fillStyle = p.color;
        ambCtx.globalAlpha = p.alpha;
        ambCtx.shadowBlur = 8;
        ambCtx.shadowColor = p.color;
        ambCtx.fill();
      }

      ambCtx.globalAlpha = 1;
      requestAnimationFrame(renderAmbientCanvas);
    }
    renderAmbientCanvas();
  }

  // Initialize with Arabic (Default)
  setLanguage('ar');
  applyCaption(0, true);
});
