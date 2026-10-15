import './style.css';

const content = {
  zh: {
    nav: [
      ['intro', '首页'],
      ['about', '关于'],
      ['experience', '实习'],
      ['work', '项目'],
      ['education', '学习'],
      ['contact', '联系'],
    ],
    hero: {
      eyebrow: 'BRUCE TU / 屠炳豪',
      title: 'Bruce Tu',
      nameCn: '屠炳豪',
      motto: 'Always be proud of yourself',
      note: '香港城市大学 · 计算机与信息工程硕士在读',
      primary: '查看作品',
      secondary: '查看简历',
      portraitAlt: '屠炳豪的肖像照片',
      portraitPlace: '宁波 · NINGBO',
      floating: ['MSc CIE @ CityU', '香港 / 宁波', 'AI 产品创作者'],
    },
    about: {
      kicker: '01 / ABOUT',
      title: '关于我',
      body: '香港城市大学计算机与信息工程硕士在读。',
      body2: '教育技术学背景，关注人机交互与 AI 应用。',
      metrics: [
        { value: 2800, suffix: '+', label: '独立访客' },
        { value: 100, suffix: '+', label: '有效咨询' },
        { value: 40, suffix: '%', label: '咨询到下单转化' },
        { value: 4, suffix: '', label: '软件著作权' },
      ],
      chips: ['AI 产品设计', '用户研究', '全栈原型', '学习科学', '增长与转化'],
      galleryLabel: '产品与研究方向',
      gallery: [
        { label: '产品', title: '产品设计与开发', image: 'maker-studio.jpg', alt: '蓝色笔记本与旅行明信片的产品设计主题静物插画' },
        { label: '研究', title: 'AI 与教育研究', image: 'research-workbench.jpg', alt: '研究笔记与数据草图的静物插画' },
        { label: '旅行', title: '旅行服务与规划', image: 'product-route-studio.jpg', alt: '淡蓝色纸面上的路线规划主题插画' },
      ],
    },
    experience: {
      kicker: '02 / EXPERIENCE',
      title: '实习经历',
      intro: '产品服务、数据标注与学术研究。',
      items: [
        ['实习', '2023.08 — 2024.04', '希游旅行有限公司', '产品与客户服务', '优化用车服务流程与用户转化', ['70+ 日均订单', '60% 转化率']],
        ['实习', '2025.04 — 2025.05', '整智智能信息技术（杭州）有限公司', '数据标注员', '复核教育文本，推动返工率下降 30%', ['120+ 教育文本', '85%+ 通过率']],
        ['项目实习', '2025.08', '华东师范大学智能教育学院', '项目研究实习生', '研究 K–12 学习特征，参与智能体设计', ['学习研究', '智能体设计']],
        ['项目研究', '2026.02 — 2026.04', '北京大学', '复杂学习任务与智能体协同研究', '完成眼动数据清洗、分析与可视化', ['40 位学生', '3,500+ 条记录']],
      ],
    },
    work: {
      kicker: '03 / PROJECTS',
      title: '项目经历',
      intro: '独立设计、开发并上线的产品。',
      visit: '访问项目 ↗',
      cards: [
        {
          id: 'travel',
          label: '01 / LIVE PRODUCT',
          title: 'Xiooh Travel',
          titleEn: '日本机场接送服务',
          body: '从服务选择到预订咨询，让日本用车更简单。',
          metric: ['150+ 订单', '¥12 万+ GMV'],
          image: './assets/xioohtravel.png',
          url: 'https://xioohtravel.com/',
          tags: ['产品负责人', '独立开发', 'Next.js / Supabase'],
          logo: true,
          alt: 'Xiooh Travel 网站界面截图',
        },
        {
          id: 'planner',
          label: '02 / AI PRODUCT',
          title: 'XioohPlanner',
          titleEn: 'AI 日本旅行规划',
          body: '连接目的地、交通与预算，规划适合自己的旅程。',
          metric: ['多城市规划', '行程分享'],
          image: './assets/xioohplanner.png',
          url: 'https://xioohplanner.vercel.app/',
          tags: ['AI 旅行规划', '用户体验', 'Vercel / Maps'],
          logo: false,
          alt: 'XioohPlanner 网站界面截图',
        },
      ],
      moreLabel: '相关项目与研究',
      more: [
        ['国家级创新创业项目', '主持 2024 / 2025 两项国家级项目，围绕知识图谱、多模态智能体与协同文本创作展开研究。'],
        ['研究论文', 'GCCCE 2025 · ICIC 2026 · EMNLP 2025，覆盖 AI 教育、认知负荷与协作学习。'],
        ['产品与数据', '从服务订单、页面浏览到有效线索，持续用数据验证体验与转化。'],
      ],
    },
    journey: {
      kicker: '04 / EDUCATION',
      title: '学习经历',
      intro: '香港城市大学 · 浙江工业大学',
      growthLabel: '成长轨迹',
      growthTitle: '学习与实践',
      growthIntro: '2022 — 2026',
      growth: [['2022', '教育技术', 'Education technology'], ['2024', '服务现场', 'Real-world service'], ['2025', 'AI 研究', 'AI research'], ['2026', '真实产品', 'Live products']],
      items: [
        {
          id: 'cityu', date: '2026.09 — 2027.06', name: ['香港城市大学'],
          degree: '硕士', faculty: '工程学院', status: '在读',
          program: ['计算机与信息工程'],
          programEn: ['MSc Computer and', 'Information Engineering'],
          image: './assets/cityu-campus.jpg', imageAlt: '香港城市大学校园',
        },
        {
          id: 'zjut', date: '2022.09 — 2026.06', name: ['浙江工业大学'],
          degree: '本科', faculty: '教育学院',
          program: ['教育技术学（师范）'],
          focus: ['智能体构建与设计', '人机交互', '数据分析'],
          advisor: '导师：许玮', achievements: ['专业排名第 4', '优秀毕业生', '奖学金'],
          image: './assets/zjut-campus.jpg', imageAlt: '浙江工业大学校园',
        },
      ],
      credentials: [['会议论文', 'GCCCE 2025', 'ICIC 2026', 'EMNLP 2025'], ['毕业成果', '优秀本科毕业论文', '4 项软件著作权']],
      papers: [
        ['Do Large Language Models Suffer from Cognitive Overload?', 'CCF-C · 一作 · Benchmark and Orchestration Framework'],
        ['新课标视域下信息科技课程游戏化教学模式设计与应用', 'GCCCE 2025 · 一作'],
        ['Educator-role Moral and Normative Large Language Models Profiling', 'EMNLP 2025 · CCF-B'],
        ['Cultivating Collaborative Problem-Solving Skills in the Era of Human-AI Interaction', 'EI · 一作'],
      ],
      awards: ['浙江工业大学优秀毕业生', '浙江工业大学二等奖学金', '浙江工业大学创新奖学金', 'NECCS 三等奖', '浙江省大学生金融创新大赛金奖', '全国大学生数学竞赛二等奖'],
    },
    contact: {
      kicker: '05 / CONTACT',
      title: '联系我',
      body: '欢迎交流与项目合作。',
      cta: '发一封邮件',
      github: '查看 GitHub',
      emailLabel: 'Email',
      emailAltLabel: 'Gmail',
      emailAlt: 'bruce031103@gmail.com',
      basedLabel: '所在地',
      location: 'Ningbo',
      resumeLabel: '简历',
      resumeLink: '查看简历 PDF ↗',
    },
    footer: '© 2026 屠炳豪 Bruce Tu',
    toggle: 'EN',
    ariaToggle: '切换到英文',
    scrollHint: '向下探索',
  },
  en: {
    nav: [
      ['intro', 'Intro'],
      ['about', 'About'],
      ['experience', 'Experience'],
      ['work', 'Projects'],
      ['education', 'Education'],
      ['contact', 'Contact'],
    ],
    hero: {
      eyebrow: 'HI, I’M BRUCE',
      title: 'Binghao Tu',
      motto: 'Always be proud of yourself',
      note: 'MSc student at City University of Hong Kong',
      primary: 'See selected work',
      secondary: 'View résumé',
      portraitAlt: 'Portrait of Binghao Tu, also known as Bruce',
      portraitPlace: 'NINGBO',
      floating: ['MSc CIE @ CityU', 'Hong Kong / Ningbo', 'Independent maker'],
    },
    about: {
      kicker: '01 / ABOUT',
      title: 'About me',
      body: 'MSc in Computer and Information Engineering at CityU.',
      body2: 'Educational technology, HCI, and AI applications.',
      metrics: [
        { value: 2800, suffix: '+', label: 'Unique visitors' },
        { value: 100, suffix: '+', label: 'Qualified leads' },
        { value: 40, suffix: '%', label: 'Conversion' },
        { value: 4, suffix: '', label: 'Copyrights' },
      ],
      chips: ['AI product design', 'User research', 'Full-stack prototyping', 'Learning sciences', 'Growth & conversion'],
      galleryLabel: 'Product and research interests',
      gallery: [
        { label: 'Products', title: 'Product design & development', image: 'maker-studio.jpg', alt: 'Illustrated still life with a blue notebook and travel postcard' },
        { label: 'Research', title: 'AI & education research', image: 'research-workbench.jpg', alt: 'Illustrated research notes and data sketches on a workbench' },
        { label: 'Travel', title: 'Travel services & planning', image: 'product-route-studio.jpg', alt: 'An illustrated route connecting milestones on paper' },
      ],
    },
    experience: {
      kicker: '02 / EXPERIENCE',
      title: 'Work experience',
      intro: 'Product services, data annotation, and academic research.',
      items: [
        ['Internship', 'Aug 2023 — Apr 2024', 'Xiooh Travel', 'Product & Customer Service', 'Improved ride services and customer conversion', ['70+ daily orders', '60% conversion']],
        ['Internship', 'Apr — May 2025', 'Zhengzhi Intelligent Information Technology', 'Data Annotator', 'Reviewed educational texts and reduced rework by 30%', ['120+ texts', '85%+ pass rate']],
        ['Research intern', 'Aug 2025', 'East China Normal University', 'Research Intern · Intelligent Education', 'Studied K–12 learning and supported agent design', ['Learning research', 'Agent design']],
        ['Research', 'Feb — Apr 2026', 'Peking University', 'Complex Learning & Agent Collaboration', 'Cleaned, analysed, and visualised eye-tracking data', ['40 students', '3,500+ records']],
      ],
    },
    work: {
      kicker: '03 / PROJECTS',
      title: 'Projects',
      intro: 'Products I designed, built, and launched.',
      visit: 'Visit project ↗',
      cards: [
        {
          id: 'travel',
          label: '01 / LIVE PRODUCT',
          title: 'Xiooh Travel',
          titleEn: 'Japan airport transfers',
          body: 'Simpler rides in Japan, from choosing a service to booking.',
          metric: ['150+ orders', '¥120k+ GMV'],
          image: './assets/xioohtravel.png',
          url: 'https://xioohtravel.com/',
          tags: ['Product lead', 'Independent build', 'Next.js / Supabase'],
          logo: true,
          alt: 'Xiooh Travel website screenshot',
        },
        {
          id: 'planner',
          label: '02 / AI PRODUCT',
          title: 'XioohPlanner',
          titleEn: 'AI Japan trip planner',
          body: 'A personal itinerary connecting places, transport, and budget.',
          metric: ['Multi-city routes', 'Shareable itineraries'],
          image: './assets/xioohplanner.png',
          url: 'https://xioohplanner.vercel.app/',
          tags: ['AI travel planning', 'Experience design', 'Vercel / Maps'],
          logo: false,
          alt: 'XioohPlanner website screenshot',
        },
      ],
      moreLabel: 'RELATED WORK',
      more: [
        ['National innovation projects', 'Led two national projects on knowledge graphs, multimodal agents, and collaborative text creation.'],
        ['Research papers', 'GCCCE 2025 · ICIC 2026 · EMNLP 2025 across AI in education, cognitive load, and collaborative learning.'],
        ['Product & data', 'Using orders, page views, and qualified leads to validate experience and conversion.'],
      ],
    },
    journey: {
      kicker: '04 / EDUCATION',
      title: 'Learning experience',
      intro: 'City University of Hong Kong · Zhejiang University of Technology',
      growthLabel: 'GROWTH PATH',
      growthTitle: 'Education & practice',
      growthIntro: '2022 — 2026',
      growth: [['2022', '教育技术', 'Education'], ['2024', '服务现场', 'Service'], ['2025', 'AI 研究', 'AI research'], ['2026', '真实产品', 'Products']],
      items: [
        {
          id: 'cityu', date: 'Sep 2026 — Jun 2027', name: ['City University', 'of Hong Kong'],
          degree: 'MSc', faculty: 'College of Engineering', status: 'Current',
          program: ['Computer and', 'Information Engineering'],
          image: './assets/cityu-campus.jpg', imageAlt: 'City University of Hong Kong campus',
        },
        {
          id: 'zjut', date: 'Sep 2022 — Jun 2026', name: ['Zhejiang University', 'of Technology'],
          degree: 'BEd', faculty: 'School of Education',
          program: ['Educational Technology'],
          focus: ['Agent building & design', 'Human–computer interaction', 'Data analysis'],
          advisor: 'Advisor: Xu Wei', achievements: ['Ranked 4th', 'Outstanding graduate', 'Scholarships'],
          image: './assets/zjut-campus.jpg', imageAlt: 'Zhejiang University of Technology campus',
        },
      ],
      credentials: [['Conferences', 'GCCCE 2025', 'ICIC 2026', 'EMNLP 2025'], ['Graduation', 'Outstanding undergraduate thesis', '4 software copyrights']],
      papers: [
        ['Do Large Language Models Suffer from Cognitive Overload?', 'CCF-C · First author · Benchmark and Orchestration Framework'],
        ['Gamified Teaching Models for Information Technology under the New Curriculum', 'GCCCE 2025 · First author'],
        ['Educator-role Moral and Normative Large Language Models Profiling', 'EMNLP 2025 · CCF-B'],
        ['Cultivating Collaborative Problem-Solving Skills in the Era of Human-AI Interaction', 'EI · First author'],
      ],
      awards: ['Outstanding Graduate, ZJUT', 'ZJUT Second-class Scholarship', 'ZJUT Innovation Scholarship', 'NECCS Third Prize', 'Zhejiang Financial Innovation Gold Award', 'National Mathematics Contest Second Prize'],
    },
    contact: {
      kicker: '05 / CONTACT',
      title: 'Contact',
      body: 'For inquiries and project collaborations.',
      cta: 'Send an email',
      github: 'View GitHub',
      emailLabel: 'Email',
      emailAltLabel: 'Gmail',
      emailAlt: 'bruce031103@gmail.com',
      basedLabel: 'Based in',
      location: 'Ningbo',
      resumeLabel: 'Résumé',
      resumeLink: 'View résumé PDF ↗',
    },
    footer: '© 2026 Binghao Tu (Bruce)',
    toggle: '中',
    ariaToggle: '切换到中文',
    scrollHint: 'Scroll to explore',
  },
};

let lang = localStorage.getItem('bruce-lang') === 'en' ? 'en' : 'zh';
let cleanupView = [];
let countersSeen = false;
let galleryIndex = 0;

const app = document.querySelector('#app');
const phrases = (items) => items.map(item => `<span class="text-unit">${item}</span>`).join(' ');

// Keep a meaningful phrase together at the end of prose, even between breakpoints.
function protectLineEndings() {
  const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter('zh-CN', { granularity: 'word' }) : null;
  const selectors = [
    'h2', '.hero-motto', '.hero-note > span:last-child', '.section-heading p',
    '.about-story p', '.gallery-caption',
    '.experience-content h3', '.experience-content strong', '.experience-content p',
    '.project-body > p', '.lab-item h3', '.lab-item p',
    '.growth-track-head h3', '.growth-track-head p', '.paper-item h3', '.paper-item p',
    '.award-list > span', '.contact-copy p', '.site-footer > span:first-child',
  ].join(',');
  document.querySelectorAll(selectors).forEach(element => {
    if (element.children.length) return;
    const text = element.textContent.trim();
    const chinese = /\p{Script=Han}/u.test(text);
    let tail = chinese ? text.match(/([\p{Script=Han}]{2,4}[^\p{L}\p{N}]*)$/u)?.[0] : text.match(/\S+\s+\S+$/)?.[0];
    if (chinese && segmenter) {
      const words = [...segmenter.segment(text)];
      let count = 0;
      let length = 0;
      for (let index = words.length - 1; index >= 0; index--) {
        if (words[index].isWordLike) {
          count++;
          length += words[index].segment.length;
        }
        if (count >= 2 && length >= 4) {
          tail = text.slice(words[index].index);
          break;
        }
      }
    }
    if (!tail) return;
    const prefix = text.slice(0, -tail.length);
    const nodes = [];
    if (chinese && segmenter) {
      // Keep Chinese words intact and closing punctuation with the preceding word.
      const tokens = [];
      for (const { segment } of segmenter.segment(prefix)) {
        if (/^[，。！？：；、）》」』]+$/u.test(segment) && tokens.length) tokens[tokens.length - 1] += segment;
        else tokens.push(segment);
      }
      tokens.forEach(token => {
        const word = /\p{Script=Han}/u.test(token) ? document.createElement('span') : document.createTextNode(token);
        if (word.nodeType === Node.ELEMENT_NODE) { word.className = 'word-unit'; word.textContent = token; }
        nodes.push(word);
      });
    } else nodes.push(document.createTextNode(prefix));
    const unit = document.createElement('span');
    unit.className = 'text-tail';
    unit.textContent = tail;
    element.replaceChildren(...nodes, unit);
  });
}

function setupGallery(copy) {
  const gallery = document.querySelector('.interest-gallery');
  const slides = [...gallery.querySelectorAll('.gallery-slide')];
  const selectors = [...gallery.querySelectorAll('[data-gallery-select]')];
  const status = gallery.querySelector('.gallery-status');
  const counter = gallery.querySelector('.gallery-counter');
  const show = (index, announce = true) => {
    galleryIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-current', i === galleryIndex);
      slide.setAttribute('aria-hidden', String(i !== galleryIndex));
    });
    selectors.forEach((button, i) => button.setAttribute('aria-pressed', String(i === galleryIndex)));
    counter.textContent = `0${galleryIndex + 1} / 0${slides.length}`;
    if (announce) status.textContent = `${galleryIndex + 1} / ${slides.length} · ${copy.gallery[galleryIndex].title}`;
  };
  gallery.querySelectorAll('[data-gallery-step]').forEach(button => {
    button.addEventListener('click', () => show(galleryIndex + Number(button.dataset.galleryStep)));
  });
  selectors.forEach((button, i) => button.addEventListener('click', () => show(i)));
  gallery.addEventListener('keydown', event => {
    const target = { ArrowLeft: galleryIndex - 1, ArrowRight: galleryIndex + 1, Home: 0, End: slides.length - 1 }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    show(target);
    if (event.target.hasAttribute('data-gallery-select')) selectors[galleryIndex].focus({ preventScroll: true });
  });
  const stage = gallery.querySelector('.gallery-stage');
  let start = null;
  stage.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button')) return;
    start = { x: event.clientX, y: event.clientY };
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener('pointerup', event => {
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) show(galleryIndex + (dx < 0 ? 1 : -1));
    start = null;
  });
  stage.addEventListener('pointercancel', () => { start = null; });
  show(galleryIndex, false);
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (countersSeen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const frames = new Set();
  const run = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || '';
    const start = performance.now();
    const duration = 1250;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased).toLocaleString('en-US')}${suffix}`;
      if (progress < 1) schedule();
    };
    const schedule = () => {
      const frame = requestAnimationFrame(now => {
        frames.delete(frame);
        tick(now);
      });
      frames.add(frame);
    };
    schedule();
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach((counter) => {
      counter.textContent = `${Number(counter.dataset.target || 0).toLocaleString()}${counter.dataset.suffix || ''}`;
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      countersSeen = true;
      counters.forEach(run);
      observer.disconnect();
    }
  }, { threshold: 0.35 });
  observer.observe(document.querySelector('.metric-grid'));
  cleanupView.push(() => {
    observer.disconnect();
    frames.forEach(cancelAnimationFrame);
  });
}

function setupActiveNavigation() {
  const links = [...document.querySelectorAll('.site-nav a')];
  const sections = links
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);
  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  let frame = 0;
  const update = () => {
    frame = 0;
    const active = sections.filter(section => section.getBoundingClientRect().top <= 150).at(-1);
    setActive(active?.id || 'intro');
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
  cleanupView.push(() => {
    window.removeEventListener('scroll', onScroll);
    cancelAnimationFrame(frame);
  });
}

function render() {
  cleanupView.forEach(cleanup => cleanup());
  cleanupView = [];
  const copy = content[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = lang === 'zh' ? '屠炳豪 Bruce Tu — 个人主页' : 'Binghao Tu (Bruce) — Personal Site';
  app.innerHTML = `
    <div class="site-shell">
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>
      <header class="site-header">
        <nav class="site-nav" aria-label="${lang === 'zh' ? '页面导航' : 'Page navigation'}">
          ${copy.nav.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}
        </nav>
        <button class="lang-toggle" type="button" aria-label="${copy.ariaToggle}" title="${copy.ariaToggle}">${copy.toggle}</button>
      </header>

      <main>
        <section class="hero section-pad" id="intro">
          <div class="hero-copy">
            <div class="eyebrow"><span class="eyebrow-dot"></span>${copy.hero.eyebrow}</div>
            <h1>${copy.hero.title}${copy.hero.nameCn ? `<small>${copy.hero.nameCn}</small>` : ''}</h1>
            <p class="hero-motto">${copy.hero.motto}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#work">${copy.hero.primary}<span>↘</span></a>
              <a class="button button-quiet" href="./assets/bruce-tu-resume.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf" aria-label="${lang === 'zh' ? '查看简历（PDF，新标签页打开）' : 'View résumé (PDF, opens in a new tab)'}">${copy.hero.secondary}<span aria-hidden="true">↗</span></a>
            </div>
            <div class="hero-note"><span class="status-dot"></span><span>${copy.hero.note}</span></div>
          </div>
          <div class="portrait-wrap">
            <div class="portrait-orbit orbit-one"></div>
            <div class="portrait-orbit orbit-two"></div>
            <div class="portrait-card">
              <img src="./assets/profile.jpg" alt="${copy.hero.portraitAlt}" />
              <div class="portrait-caption"><span>${copy.hero.portraitPlace}</span></div>
            </div>
            <div class="floating-card floating-top"><span class="card-label">CURRENTLY</span><strong>${copy.hero.floating[0]}</strong></div>
            <div class="floating-card floating-bottom"><span>${copy.hero.floating[1]}</span><span>${copy.hero.floating[2]}</span></div>
          </div>
          <a class="scroll-cue" href="#about"><span class="scroll-line"></span>${copy.scrollHint}</a>
        </section>

        <section class="section-pad about-section" id="about">
          <div class="about-layout">
            <div class="about-story"><div class="about-lead"><span class="section-kicker">${copy.about.kicker}</span><h2>${copy.about.title}</h2></div><p>${copy.about.body}</p><p>${copy.about.body2}</p><div class="chip-row">${copy.about.chips.map(chip => `<span>${chip}</span>`).join('')}</div></div>
            <div class="interest-gallery" role="region" aria-roledescription="${lang === 'zh' ? '图片轮播' : 'carousel'}" aria-label="${copy.about.galleryLabel}">
              <div class="gallery-stage">
                ${copy.about.gallery.map((slide, index) => `<figure class="gallery-slide${index === galleryIndex ? ' is-current' : ''}" aria-hidden="${index !== galleryIndex}"><img src="./assets/${slide.image}" alt="${slide.alt}" loading="lazy" draggable="false" /><figcaption class="gallery-caption">${slide.title}</figcaption></figure>`).join('')}
                <span class="gallery-counter" aria-hidden="true">0${galleryIndex + 1} / 03</span>
                <div class="gallery-arrows"><button type="button" data-gallery-step="-1" aria-label="${lang === 'zh' ? '上一张图片' : 'Previous image'}">←</button><button type="button" data-gallery-step="1" aria-label="${lang === 'zh' ? '下一张图片' : 'Next image'}">→</button></div>
              </div>
              <div class="gallery-selectors" role="group" aria-label="${lang === 'zh' ? '选择图片' : 'Choose an image'}">${copy.about.gallery.map((slide,index) => `<button type="button" data-gallery-select="${index}" aria-pressed="${index === galleryIndex}"><span aria-hidden="true">0${index + 1}</span>${slide.label}</button>`).join('')}</div>
              <span class="gallery-status sr-only" role="status" aria-live="polite" aria-atomic="true"></span>
            </div>
          </div>
          <div class="metric-grid" aria-label="${lang === 'zh' ? '作品与研究成果' : 'Project and research highlights'}">${copy.about.metrics.map(metric => `<div class="metric"><strong class="metric-value" data-counter data-target="${metric.value}" data-suffix="${metric.suffix}" aria-label="${metric.value.toLocaleString('en-US')}${metric.suffix}">${metric.value.toLocaleString('en-US')}${metric.suffix}</strong><span>${metric.label}</span></div>`).join('')}</div>
        </section>

        <section class="section-pad experience-section" id="experience">
          <div class="section-heading"><span class="section-kicker">${copy.experience.kicker}</span><h2>${copy.experience.title}</h2><p>${copy.experience.intro}</p></div>
          <div class="experience-list">${copy.experience.items.map(([type, date, place, role, detail, result], index) => `<article class="experience-item" data-reading-anchor="experience-${index}"><div class="experience-meta"><span class="experience-type">${type}</span><span class="experience-date">${date}</span></div><div class="experience-content"><h3>${place}</h3><strong>${role}</strong><p>${detail}</p></div><div class="experience-result">${result.map(item => `<span>${item}</span>`).join('')}</div></article>`).join('')}</div>
        </section>

        <section class="work-section" id="work">
          <div class="section-pad work-inner">
            <div class="section-heading light"><span class="section-kicker">${copy.work.kicker}</span><h2>${copy.work.title}</h2><p>${copy.work.intro}</p></div>
            <div class="project-grid">
              ${copy.work.cards.map(card => `
                <article class="project-card ${card.id}" data-reading-anchor="work-${card.id}">
                  <div class="project-image-wrap">
                    <a class="project-image-link" href="${card.url}" target="_blank" rel="noreferrer" aria-label="${copy.work.visit}: ${card.title}">
                      <img src="${card.image}" alt="${card.alt}" loading="lazy" />
                      <div class="image-overlay"><span>${card.label}</span><span>↗</span></div>
                    </a>
                    ${card.logo ? `<img class="project-logo" src="./assets/xiooh-logo.png" alt="Xiooh Travel logo" />` : ''}
                  </div>
                  <div class="project-body">
                    <div class="project-title-row"><div><h3>${card.title}</h3><span>${card.titleEn}</span></div><a href="${card.url}" target="_blank" rel="noreferrer" aria-label="${copy.work.visit}: ${card.title}">↗</a></div>
                    <p>${card.body}</p>
                    <div class="project-meta"><div class="project-results">${card.metric.map(item => `<span>${item}</span>`).join('')}</div><a href="${card.url}" target="_blank" rel="noreferrer">${copy.work.visit}</a></div>
                    <div class="project-tags">${card.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                  </div>
                </article>`).join('')}
            </div>
            <div class="lab-grid"><span class="lab-label">${copy.work.moreLabel}</span>${copy.work.more.map(([title, text], index) => `<div class="lab-item"><span class="lab-index">0${index + 3}</span><div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}</div>
          </div>
        </section>

        <section class="section-pad journey-section" id="education">
          <div class="section-heading"><span class="section-kicker">${copy.journey.kicker}</span><h2>${copy.journey.title}</h2><p>${copy.journey.intro}</p></div>
          <div class="growth-track" aria-label="${copy.journey.growthLabel}" data-reading-anchor="growth-path">
            <img class="growth-track-art" src="./assets/growth-trajectory.jpg" alt="" aria-hidden="true" loading="lazy" />
            <div class="growth-track-head"><span class="mini-kicker">${copy.journey.growthLabel}</span><h3>${copy.journey.growthTitle}</h3><p>${copy.journey.growthIntro}</p></div>
            <div class="growth-steps">${copy.journey.growth.map(([year, title, label], index) => `<div class="growth-step"><span class="growth-step-dot">0${index + 1}</span><strong>${year}</strong><span>${lang === 'zh' ? title : label}</span></div>`).join('')}</div>
          </div>
          <div class="education-grid">${copy.journey.items.map(school => `
            <article class="education-card" data-reading-anchor="education-${school.id}">
              <div class="education-image"><img src="${school.image}" alt="${school.imageAlt}" loading="lazy" /></div>
              <div class="education-copy">
                <div class="education-meta"><span class="education-date">${school.date}</span>${school.status ? `<span class="study-status">${school.status}</span>` : ''}</div>
                <h3>${phrases(school.name)}</h3>
                <div class="degree-meta"><span>${school.degree}</span><span>${school.faculty}</span></div>
                <p class="education-program">${phrases(school.program)}</p>
                ${school.programEn ? `<p class="education-program-en" lang="en">${phrases(school.programEn)}</p>` : ''}
                ${school.focus ? `<ul class="education-focus">${school.focus.map(item => `<li>${item}</li>`).join('')}</ul><p class="education-advisor">${school.advisor}</p><div class="education-achievements">${school.achievements.map(item => `<span>${item}</span>`).join('')}</div>` : ''}
              </div>
            </article>`).join('')}</div>
          <div class="research-strip"><span class="credential-label">RESEARCH & RECOGNITION</span><div class="credential-groups">${copy.journey.credentials.map(([label, ...items]) => `<div class="credential-group"><strong>${label}</strong><div>${items.map(item => `<span>${item}</span>`).join('')}</div></div>`).join('')}</div></div>
          <div class="research-grid"><div><span class="mini-kicker">${lang === 'zh' ? '论文' : 'PAPERS'}</span>${copy.journey.papers.map(([title, meta], index) => `<article class="paper-item"><span>0${index + 1}</span><div><h3>${title}</h3><p>${meta}</p></div></article>`).join('')}</div><div><span class="mini-kicker">${lang === 'zh' ? '获奖' : 'AWARDS'}</span><img class="research-visual" src="./assets/research-workbench.jpg" alt="Editorial research workbench with notes and data sketches" /><div class="award-list">${copy.journey.awards.map(award => `<span>${award}</span>`).join('')}</div></div></div>
        </section>

        <section class="section-pad contact-section" id="contact">
          <div class="contact-card">
            <div class="contact-copy"><span class="section-kicker">${copy.contact.kicker}</span><h2>${copy.contact.title}</h2><p>${copy.contact.body}</p><a class="button button-light" href="mailto:tubinghao11103@163.com">${copy.contact.cta}<span>↗</span></a></div>
            <div class="contact-details"><div class="detail-row"><span>${copy.contact.emailLabel}</span><a href="mailto:tubinghao11103@163.com">tubinghao11103@163.com</a></div><div class="detail-row"><span>${copy.contact.emailAltLabel}</span><a href="mailto:${copy.contact.emailAlt}">${copy.contact.emailAlt}</a></div><div class="detail-row"><span>GitHub</span><a href="https://github.com/Bruce-778" target="_blank" rel="noreferrer">github.com/Bruce-778 ↗</a></div><div class="detail-row"><span>${copy.contact.resumeLabel}</span><a href="./assets/bruce-tu-resume.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf">${copy.contact.resumeLink}</a></div><div class="detail-row"><span>${copy.contact.basedLabel}</span><span>${copy.contact.location}</span></div></div>
          </div>
        </section>
      </main>
      <footer class="site-footer"><span>${copy.footer}</span><span>BT / 2026</span></footer>
    </div>
  `;

  document.querySelector('.lang-toggle').addEventListener('click', () => {
    // Preserve the reading landmark while the new language reflows.
    const landmarks = [...document.querySelectorAll('main section[id], [data-reading-anchor]')];
    const readingLine = Math.min(window.innerHeight * .3, 240);
    const current = landmarks.filter(element => {
      const rect = element.getBoundingClientRect();
      return rect.top <= readingLine && rect.bottom > readingLine;
    }).at(-1) || landmarks[0];
    const key = current.dataset.readingAnchor;
    const previousTop = current.getBoundingClientRect().top;
    const id = current.id;
    lang = lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('bruce-lang', lang);
    render();
    const replacement = key ? document.querySelector(`[data-reading-anchor="${key}"]`) : document.getElementById(id);
    window.scrollBy({ top: replacement.getBoundingClientRect().top - previousTop, behavior: 'instant' });
    document.querySelector('.lang-toggle').focus({ preventScroll: true });
  });

  protectLineEndings();
  setupGallery(copy.about);
  animateCounters();
  setupActiveNavigation();
}

render();
