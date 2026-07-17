'use strict';

// -----------------------------------------------------------------
// EN / SW translations dictionary
// Each key maps to { en: "...", sw: "..." }
// -----------------------------------------------------------------
const translations = {
  // Sidebar
  profession: {
    en: 'Web Developer & Graphics Designer <br> SEO & Content Marketing specialist  <br> Cyber Security Consultant ',
    sw: 'Mtengenezaji wa Tovuti & Msanifu wa Picha <br> Mtaalamu wa SEO na Masoko ya Maudhui  <br> Mshauri wa Usalama wa Mtandao '
  },
  show_contacts: { en: 'Show Contacts', sw: 'Onyesha Mawasiliano' },
  contact_email: { en: 'Email', sw: 'Barua Pepe' },
  contact_phone: { en: 'Phone', sw: 'Simu' },
  contact_location: { en: 'Location', sw: 'Mahali' },
  contact_cv: { en: 'CV / Resume', sw: 'CV / Wasifu' },
  cv_download_link: { en: 'Download CV (PDF)', sw: 'Pakua CV (PDF)' },

  // Navbar
  nav_about: { en: 'About', sw: 'Kuhusu' },
  nav_resume: { en: 'Resume', sw: 'Wasifu' },
  nav_portfolio: { en: 'Portfolio', sw: 'Kazi Zangu' },
  nav_contact: { en: 'Contact', sw: 'Wasiliana' },

  // About
  about_header: { en: 'About me', sw: 'Kunihusu' },
  about_text: {
    en: `I am a dedicated technology and creative expert with a unique ability to bridge the gap between cybersecurity, digital strategy, and brand identity. My mission is to empower businesses and organizations to build an online presence that is secure, impactful, and globally recognized. I am passionate about leveraging technology and creative design to solve complex business challenges with maximum efficiency.`,
    sw: `Mimi ni mtaalamu wa teknolojia na ubunifu niliyejitoa, nikiwa na uwezo wa kipekee wa kuunganisha usalama wa mtandao, mikakati ya kidijitali, na utambulisho wa brand. Dhamira yangu ni kuwezesha biashara na mashirika kujenga uwepo wa mtandaoni ulio salama, wenye matokeo, na unaotambulika kimataifa. Nina shauku ya kutumia teknolojia na ubunifu wa kisanii kutatua changamoto ngumu za kibiashara kwa ufanisi wa hali ya juu.`
  },
  view_projects_btn: { en: 'View My Projects', sw: 'Angalia Miradi Yangu' },

  // Services
  service_title: { en: "What I do", sw: 'Ninachofanya' },
  service1_title: { en: 'Cybersecurity Consultant', sw: 'Mshauri wa Usalama wa Mtandao' },
  service1_text: {
    en: "I ensure your company's information systems are resilient against cyber threats. I conduct comprehensive risk assessments and implement robust strategies to protect sensitive company and client data.",
    sw: 'Ninahakikisha mifumo ya taarifa ya kampuni yako inakabiliana vyema na vitisho vya kimtandao. Ninafanya tathmini kamili za hatari na kutekeleza mikakati imara ya kulinda data nyeti ya kampuni na wateja.'
  },
  service2_title: { en: 'SEO & Content Marketing Specialist', sw: 'Mtaalamu wa SEO na Masoko ya Maudhui' },
  service2_text: {
    en: 'I optimize your digital footprint to ensure high visibility on search engines like Google, driving organic traffic to your business. I create high-quality, targeted content that boosts conversion rates and builds lasting trust with your audience.',
    sw: 'Ninaboresha uwepo wako wa kidijitali ili kuhakikisha mwonekano mzuri kwenye injini za utafutaji kama Google, na kuongeza trafiki ya kiasili kwenye biashara yako. Ninatengeneza maudhui bora, yanayolenga hadhira, yanayoongeza kiwango cha ubadilishaji na kujenga uaminifu wa kudumu.'
  },
  service3_title: { en: 'Graphic & Brand Identity Designer', sw: 'Msanifu wa Picha na Utambulisho wa Brand' },
  service3_text: {
    en: "I build the visual face of your brand. From logos and color palettes to marketing collateral, I ensure your brand maintains a modern, professional, and memorable aesthetic.",
    sw: 'Ninajenga sura ya kuona ya brand yako. Kuanzia logo na rangi hadi vifaa vya masoko, ninahakikisha brand yako inabaki ya kisasa, ya kitaalamu, na inayokumbukwa.'
  },
  service4_title: { en: 'Website Developer', sw: 'Mtengenezaji wa Tovuti' },
  service4_text: {
    en: 'I build modern, high-performance websites that are fully responsive across mobile and desktop devices. My development process focuses not just on technical functionality, but on achieving specific business objectives.',
    sw: 'Ninajenga tovuti za kisasa, zenye utendaji wa hali ya juu, na zinazojibadilisha vizuri kwenye simu na kompyuta. Mchakato wangu wa utengenezaji hauangalii tu utendaji wa kiufundi, bali pia kufikia malengo mahususi ya kibiashara.'
  },

  // Testimonials
  
  testimonial2_name: { en: 'Client Name', sw: 'Jina la Mteja' },
  testimonial2_role: { en: 'Company / Role', sw: 'Kampuni / Cheo' },

  leave_review_title: { en: 'Leave a Review', sw: 'Acha Maoni Yako' },

  // Resume
  resume_header: { en: 'Resume', sw: 'Wasifu' },
  education_title: { en: 'Education', sw: 'Elimu' },
  edu_degree: { en: 'Bachelor Degree of Science in Cybersecurity', sw: 'Shahada ya Kwanza ya Sayansi katika Usalama wa Mtandao' },

  certifications_title: { en: 'Certifications', sw: 'Vyeti' },
  cert1_title: { en: 'UniAthena partnership with Cambridge International Qualifications', sw: 'UniAthena ikiwa ubia na Cambridge International Qualifications' },
  cert1_text: {
    en: 'Certified in Digital Marketing, covering SEO, content marketing, and social media advertising.',
    sw: 'Nina cheti cha Digital Marketing, kikijumuisha SEO, masoko ya maudhui, na matangazo ya mitandao ya kijamii.'
  },

  experience_title: { en: 'Experience', sw: 'Uzoefu' },

  exp1_title: { en: 'Software troubleshooting', sw: 'Utatuzi wa Matatizo ya Programu' },
  exp1_text: {
    en: 'Diagnosed and resolved hardware, software, and network issues for clients, ensuring minimal downtime and reliable day-to-day system performance.',
    sw: 'Nilichambua na kutatua matatizo ya vifaa, programu, na mtandao kwa wateja, nikihakikisha muda mfupi wa kusimama na utendaji thabiti wa mifumo kila siku.'
  },
  exp2_title: { en: 'Digital marketing', sw: 'Masoko ya Kidijitali' },
  exp2_text: {
    en: 'Plan and execute SEO and content marketing campaigns that grow organic traffic, improve search rankings, and strengthen brand visibility for clients.',
    sw: 'Ninapanga na kutekeleza kampeni za SEO na masoko ya maudhui zinazokuza trafiki ya kiasili, kuboresha nafasi kwenye injini za utafutaji, na kuimarisha mwonekano wa brand kwa wateja.'
  },
  exp3_title: { en: 'website development', sw: 'Utengenezaji wa Tovuti' },
  exp3_text: {
    en: 'Design and build responsive, SEO-friendly websites using HTML, CSS, JavaScript, and PHP (Laravel), for individuals and businesses across various industries.',
    sw: 'Ninabuni na kujenga tovuti zinazojibadilisha na rafiki kwa SEO kwa kutumia HTML, CSS, JavaScript, na PHP, kwa watu binafsi na biashara katika sekta mbalimbali.'
  },
  exp4_title: { en: 'Mobile apps development', sw: 'Utengenezaji wa Programu za Simu' },
  exp4_text: {
    en: 'Build cross-platform mobile applications with a focus on clean UI/UX, secure data handling, and smooth performance.',
    sw: 'Ninatengeneza programu za simu zinazofanya kazi kwenye mifumo mbalimbali, nikizingatia UI/UX safi, usimamizi salama wa data, na utendaji mzuri.'
  },
  exp5_title: { en: 'Vulnerability analysis', sw: 'Uchambuzi wa Udhaifu' },
  exp5_text: {
    en: 'Conduct vulnerability assessments and penetration tests to identify security gaps, then deliver clear, actionable remediation reports to clients.',
    sw: 'Ninafanya tathmini za udhaifu na penetration testing ili kubaini mapengo ya usalama, kisha kutoa ripoti wazi na za vitendo za urekebishaji kwa wateja.'
  },
  exp6_title: { en: 'Graphics Design & Branding', sw: 'Usanifu wa Picha na Brand' },
  exp6_text: {
    en: 'Design logos, brand identity kits, social media graphics, and UI/UX mockups using Adobe Photoshop and Illustrator, and produce motion graphics and video intros with Adobe After Effects for clients across various industries.',
    sw: 'Ninabuni logo, vifurushi vya utambulisho wa brand, michoro ya mitandao ya kijamii, na mockups za UI/UX kwa kutumia Adobe Photoshop na Illustrator, na kutengeneza motion graphics na video intros kwa Adobe After Effects kwa wateja katika sekta mbalimbali.'
  },

  skills_title: { en: 'My skills', sw: 'Ujuzi Wangu' },
  skill_sm: { en: 'Social Media Management', sw: 'Usimamizi wa mitandao ya kijamii' },
  skill_cont: { en: 'Content Writing', sw: 'Uandishi wa Maudhui' },
  skill_vuln: { en: 'Vulnerability assessment', sw: 'Tathmini ya Udhaifu' },
  skill_mysql: { en: 'MYSQL database', sw: 'Hifadhidata ya MYSQL' },
  skill_js: { en: 'Javascript', sw: 'Javascript' },
  skill_htmlcss: { en: 'HTML & CSS', sw: 'HTML na CSS' },
  skill_phpjava: { en: 'PHP & Java', sw: 'PHP na Java' },
  skill_photoshop_illustrator: { en: 'Adobe Photoshop & Illustrator', sw: 'Adobe Photoshop na Illustrator' },
  skill_aftereffects: { en: 'Adobe After Effects (Motion Graphics)', sw: 'Adobe After Effects (Michoro ya Mwendo)' },
  skill_gsc: { en: 'Google Search Console', sw: 'Google Search Console' },
  skill_ga: { en: 'Google Analytics', sw: 'Google Analytics' },
  skill_keywordresearch: { en: 'SEO & Keyword Research', sw: 'SEO na Utafiti wa Maneno Muhimu' },

  cv_download_title: { en: 'Download My CV', sw: 'Pakua CV Yangu' },

  // Portfolio
  portfolio_header: { en: 'Projects', sw: 'Miradi' },
  filter_all: { en: 'All', sw: 'Zote' },
  filter_apps: { en: 'Applications', sw: 'Programu' },
  filter_webdev: { en: 'Web development', sw: 'Utengenezaji wa Tovuti' },
  filter_graphics: { en: 'Graphics Design', sw: 'Usanifu wa Picha' },
  filter_seo: { en: 'SEO & Content Marketing', sw: 'SEO na Masoko ya Maudhui' },
  filter_cyber: { en: 'Cyber Security', sw: 'Usalama wa Mtandao' },
  select_default: { en: 'Select category', sw: 'Chagua Aina' },

  // Contact
  contact_header: { en: 'Contact Me', sw: 'Wasiliana Nami' },
  contact_form_title: { en: 'Contact Form', sw: 'Fomu ya Mawasiliano' },
  ph_fullname: { en: 'Full name', sw: 'Jina Kamili' },
  ph_email: { en: 'Email address', sw: 'Anwani ya Barua Pepe' },
  ph_message: { en: 'Your Message', sw: 'Ujumbe Wako' },
  send_message: { en: 'Send via WhatsApp', sw: 'Tuma kupitia WhatsApp' },
  connect_title: { en: 'Connect With Me', sw: 'Ungana Nami' },

  // Project problem/solution descriptions
  pp_damygaso: { en: 'Challenge: The company needed a professional online presence to showcase its services clearly. Solution: I built a fast, SEO-friendly business website that improved credibility and inquiries.', sw: 'Changamoto: kampuni ilihitaji uwepo wa mtandaoni wa kitaalamu kuonyesha huduma zake wazi. Ufumbuzi: nilijenga tovuti ya haraka na rafiki kwa SEO iliyoongeza uaminifu na maswali kutoka kwa wateja.' },
  pp_myportfolio: { en: 'Challenge: Needed a single place to present multi-disciplinary skills (dev, SEO, security, design) clearly. Solution: built this responsive, bilingual portfolio with clear service breakdown.', sw: 'Changamoto: kuhitaji sehemu moja ya kuonyesha ujuzi wa fani mbalimbali (dev, SEO, usalama, design) kwa uwazi. Ufumbuzi: nilijenga portfolio hii inayojibadilisha na yenye lugha mbili.' },
  pp_encryption: { en: 'Challenge: sensitive data needed protection from unauthorized access. Solution: built an app implementing secure encryption/decryption for safe data handling.', sw: 'Changamoto: data nyeti ilihitaji ulinzi dhidi ya ufikiaji usioidhinishwa. Ufumbuzi: nilijenga app inayotekeleza usimbaji/kufungua data kwa usalama.' },
  pp_bluetooth: { en: 'Challenge: enabling communication without internet access in low-connectivity areas. Solution: developed a chat app using Bluetooth for offline peer-to-peer messaging.', sw: 'Changamoto: kuwezesha mawasiliano pasipo mtandao wa intaneti maeneo yenye mtandao hafifu. Ufumbuzi: nilitengeneza app ya chat inayotumia Bluetooth kwa ujumbe wa moja kwa moja bila intaneti.' },
  pp_attendance: { en: 'Challenge: manual attendance tracking was slow and error-prone. Solution: I built a digital system that automates recording and reporting of attendance.', sw: 'Changamoto: ufuatiliaji wa mahudhurio kwa mkono ulikuwa mgumu na wenye makosa. Ufumbuzi: nilijenga mfumo wa kidijitali unaofanya kazi ya kurekodi na kutoa taarifa za mahudhurio kiotomatiki.' },
  pp_logo1: { en: 'Brief: created a memorable, professional logo for the client\'s brand identity.', sw: 'Lengo: Nilitengeneza logo inayokumbukwa na ya kitaalamu kwa ajili ya utambulisho wa brand ya mteja.' },
  pp_logo2: { en: 'Brief: design a distinctive logo reflecting the client\'s brand personality.', sw: 'Lengo: Nilibuni logo ya kipekee inayoakisi tabia ya brand ya mteja.' },
  pp_logo3: { en: 'Brief: created a clean, versatile logo usable across print and digital media.', sw: 'Lengo: Nilitengeneza logo safi inayoweza kutumika kwenye machapisho na midia ya kidijitali.
  pp_brandkit: { en: 'Brief: built a cohesive website services poster for consistent brand presentation.', sw: 'Lengo: kujenga bango la huduma za websites kwa uwasilishaji thabiti wa brand.' },
  pp_social1: { en: 'Brief: designed engaging social media content to boost audience engagement.', sw: 'Lengo: kubuni maudhui ya mitandao ya kijamii yanayovutia ili kuongeza ushirikiano wa hadhira.' },
  pp_social2: { en: 'Brief: created a striking social media post design aligned with the client\'s campaign goals.', sw: 'Lengo: kutengeneza muundo wa chapisho la mitandao ya kijamii linalovutia kulingana na malengo ya kampeni ya mteja.' },
  pp_social3: { en: 'Brief: designed a professional social media graphic to strengthen the client\'s online presence.', sw: 'Lengo: kubuni mchoro wa kitaalamu wa mitandao ya kijamii kuimarisha uwepo wa mteja mtandaoni.' },
  pp_bookcover1: { en: 'Brief: designed an eye-catching book cover mockup that reflects the book\'s theme.', sw: 'Lengo: kubuni mfano wa jalada la kitabu linalovutia linaloakisi mada ya kitabu.' },
  pp_blog: {
    en: 'Challenge: Needed a platform to demonstrate real SEO and content marketing skills, not just claim them. Solution: I built and grew a blog covering tech, security, and marketing topics — optimized for search visibility and organic reach.',
    sw: 'Changamoto: Kuhitaji jukwaa la kuonyesha ujuzi halisi wa SEO na masoko ya maudhui, si kudai tu. Ufumbuzi: Nilijenga na kukuza blog inayohusu teknolojia, usalama, na masoko — iliyoboreshwa kwa mwonekano kwenye injini za utafutaji.'
  },
  pp_macspoofer: {
    en: "Challenge: devices often need to change their network identity for privacy testing and access control audits. Solution: built a tool that spoofs a device's MAC address, useful for network security testing and privacy research.",
    sw: 'Changamoto: vifaa mara nyingi vinahitaji kubadili utambulisho wake wa mtandao kwa ajili ya majaribio ya faragha na ukaguzi wa udhibiti wa ufikiaji. Ufumbuzi: nilijenga tool inayobadilisha MAC address ya kifaa, inayosaidia katika majaribio ya usalama wa mtandao na utafiti wa faragha.'
  },
};

// -----------------------------------------------------------------
// Language switching logic
// -----------------------------------------------------------------
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Translate text/HTML content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (!entry) return;
    const value = entry[lang] || entry.en;
    if (value.indexOf('<br>') !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const entry = translations[key];
    if (!entry) return;
    el.setAttribute('placeholder', entry[lang] || entry.en);
  });

  // Keep the "Select category" dropdown label in sync if it was
  // previously changed by a filter selection made in the other language
  const selectValueEl = document.querySelector('[data-select-value]');
  const activeFilterBtn = document.querySelector('[data-filter-btn].active');
  if (selectValueEl && activeFilterBtn) {
    selectValueEl.textContent = activeFilterBtn.textContent;
  }

  // Update toggle button active states
  document.querySelectorAll('[data-lang-toggle] .lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Wire up the toggle buttons
document.querySelectorAll('[data-lang-toggle] .lang-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.dataset.lang !== currentLang) {
      applyLanguage(this.dataset.lang);
    }
  });
});

// Default language on load
applyLanguage('en');
