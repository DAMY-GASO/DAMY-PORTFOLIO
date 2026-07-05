'use strict';

// -----------------------------------------------------------------
// EN / SW translations dictionary
// Each key maps to { en: "...", sw: "..." }
// -----------------------------------------------------------------
const translations = {
  // Sidebar
  profession: {
    en: 'Web Developer & Graphics Designer <br> SEO & Content Marketing specialist | <br> Cyber Security Consultant ',
    sw: 'Mtengenezaji wa Tovuti & Mbunifu wa michoro <br> Mtaalamu wa SEO na Masoko ya Maudhui| <br> Mshauri wa Usalama wa Mtandao '
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
    en: `Welcome to my digital space!
I'm a passionate Cybersecurity Consultant, SEO & Content Marketing Specialist, Web Developer, and Graphic Designer dedicated to helping businesses build secure, modern, and impactful digital experiences.

With a strong combination of technical expertise and creative problem-solving, I work on securing systems, improving online visibility, developing responsive websites, and creating visually engaging designs that strengthen brand identity. My goal is to deliver solutions that are not only functional and secure, but also user-friendly and results-driven.`,
    sw: `Karibu kwenye nafasi yangu ya kidijitali!
Mimi ni Mshauri wa Usalama wa Mtandao mwenye msukumo wa matokeo, nikiwa na uzoefu mpana katika utengenezaji wa tovuti, mikakati ya SEO, na usalama wa mtandao. Kazi yangu inalenga kusaidia watu binafsi, biashara, na mashirika kujenga mifumo salama, iliyoboreshwa, na yenye ufanisi wa hali ya juu inayoleta matokeo halisi.`
  },

  // Services
  service_title: { en: "What i'm doing", sw: 'Ninachofanya' },
  service1_title: { en: 'Web development & solutions', sw: 'Utengenezaji wa Tovuti na Suluhisho' },
  service1_text: {
    en: 'I build and maintain responsive, fast, and SEO-friendly websites using HTML, CSS, JavaScript, and modern frameworks. My goal is to create user-centered digital experiences that perform flawlessly across devices.',
    sw: 'Ninajenga na kudumisha tovuti zinazojibadilisha (responsive), za haraka, na rafiki kwa SEO kwa kutumia HTML, CSS, JavaScript, na mifumo ya kisasa. Lengo langu ni kutengeneza uzoefu wa kidijitali unaomlenga mtumiaji na unaofanya kazi vizuri kwenye vifaa vyote.'
  },
  service2_title: { en: ' SEO & Content Marketing', sw: ' SEO na Masoko ya Maudhui' },
  service2_text: {
    en: 'As an SEO Specialist, I design data-driven strategies that boost visibility and organic traffic. I create and optimize content that connects with audiences while aligning with search engine best practices.',
    sw: 'Kama Mtaalamu wa SEO, ninabuni mikakati inayotegemea data ili kuongeza mwonekano na trafiki ya kiasili. Ninatengeneza na kuboresha maudhui yanayowasiliana na hadhira huku yakizingatia kanuni bora za injini za utafutaji.'
  },
  service3_title: { en: 'Cybersecurity Consulting', sw: 'Ushauri wa Usalama wa Mtandao' },
  service3_text: {
    en: 'I help businesses adopt modern technology solutions to enhance efficiency and scalability in security from system integration to workflow automation and digital transformation strategies.',
    sw: 'Ninasaidia biashara kutumia teknolojia za kisasa ili kuongeza ufanisi na uwezo wa kukua katika usalama — kuanzia muunganiko wa mifumo hadi automesheni ya kazi na mikakati ya mabadiliko ya kidijitali.'
  },
  service4_title: { en: 'Web security & Penetration Testing', sw: 'Usalama wa Tovuti na Upimaji wa Udhaifu' },
  service4_text: {
    en: 'With a strong foundation in ethical hacking and cyber awareness, I assess system vulnerabilities, conduct penetration testing, and deliver tailored cybersecurity solutions to safeguard digital assets.',
    sw: 'Nikiwa na msingi imara katika ethical hacking na uelewa wa usalama wa mtandao, ninachunguza udhaifu wa mifumo, kufanya penetration testing, na kutoa suluhisho maalum za usalama ili kulinda mali za kidijitali.'
  },
  service5_title: { en: ' Graphics Design & Branding', sw: ' Usanifu wa Picha na Brand' },
  service5_text: {
    en: 'I create UI/UX-focused visuals, brand identity, and creative designs that make businesses stand out. From logos to full brand kits, I deliver graphics that strengthen visibility and leave a lasting impression.',
    sw: 'Ninatengeneza picha zinazolenga UI/UX, utambulisho wa brand, na usanifu wa kibunifu unaofanya biashara zisimame wazi. Kuanzia logo hadi vifurushi kamili vya brand, ninatoa michoro inayoimarisha mwonekano na kuacha athari ya kudumu.'
  },

  clients_title: { en: 'My Sponsors', sw: 'Wadhamini Wangu' },

  // Resume
  resume_header: { en: 'Resume', sw: 'Wasifu' },
  education_title: { en: 'Education', sw: 'Elimu' },
  edu_degree: { en: 'Bachelor Degree of Science in Cybersecurity', sw: 'Shahada ya Kwanza ya Sayansi katika Usalama wa Mtandao' },
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
    en: 'Design and build responsive, SEO-friendly websites using HTML, CSS, JavaScript, PHP, and React for individuals and businesses across various industries.',
    sw: 'Ninabuni na kujenga tovuti zinazojibadilisha na rafiki kwa SEO kwa kutumia HTML, CSS, JavaScript, PHP, na React kwa watu binafsi na biashara katika sekta mbalimbali.'
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

  skills_title: { en: 'My skills', sw: 'Ujuzi Wangu' },
  skill_vuln: { en: 'Vulnerability assessment', sw: 'Tathmini ya Udhaifu' },
  skill_mysql: { en: 'MYSQL database', sw: 'Hifadhidata ya MYSQL' },
  skill_js: { en: 'Javascript', sw: 'Javascript' },
  skill_react: { en: 'React Js', sw: 'React Js' },
  skill_node: { en: 'Node Js & Express Js', sw: 'Node Js na Express Js' },
  skill_htmlcss: { en: 'HTML & CSS', sw: 'HTML na CSS' },
  skill_phpjava: { en: 'PHP & Java', sw: 'PHP na Java' },

  cv_download_title: { en: 'Download My CV', sw: 'Pakua CV Yangu' },

  // Portfolio
  portfolio_header: { en: 'Projects', sw: 'Miradi' },
  filter_all: { en: 'All', sw: 'Zote' },
  filter_apps: { en: 'Applications', sw: 'Programu' },
  filter_webdev: { en: 'Web development', sw: 'Utengenezaji wa Tovuti' },
  filter_graphics: { en: 'Graphics Design', sw: 'Usanifu wa Picha' },
  select_default: { en: 'Select category', sw: 'Chagua Aina' },

  // Contact
  contact_header: { en: 'Contact Me', sw: 'Wasiliana Nami' },
  contact_form_title: { en: 'Contact Form', sw: 'Fomu ya Mawasiliano' },
  ph_fullname: { en: 'Full name', sw: 'Jina Kamili' },
  ph_email: { en: 'Email address', sw: 'Anwani ya Barua Pepe' },
  ph_message: { en: 'Your Message', sw: 'Ujumbe Wako' },
  send_message: { en: 'Send Message', sw: 'Tuma Ujumbe' },
  connect_title: { en: 'Connect With Me', sw: 'Ungana Nami' }
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
