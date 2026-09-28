import './style.css';

const content = {
  zh: {
    nav: [
      ['intro', '首页'],
      ['about', '关于'],
      ['path', 'AI 路径'],
      ['experience', '经历'],
      ['work', '作品'],
      ['education', '轨迹'],
      ['contact', '联系'],
    ],
    brandRole: 'AI 产品探索者 · 独立构建者',
    hero: {
      eyebrow: 'BRUCE TU / 屠炳豪',
      title: 'Bruce Tu',
      nameCn: '屠炳豪',
      motto: 'Always be proud of yourself',
      subtitle: 'AI 产品探索者 · 独立构建者',
      body: '我在教育技术、AI 产品与旅行体验之间工作，把想法做成真实可用的作品。',
      note: 'Currently · 香港城市大学 CityU 硕士生',
      primary: '查看作品',
      secondary: '联系我',
      portraitAlt: '屠炳豪的肖像照片',
      portraitPlace: '宁波 · NINGBO',
      floating: ['MSc CIE @ CityU', '香港 / 宁波', 'AI 产品创作者'],
    },
    about: {
      kicker: '01 / ABOUT',
      title: '让产品，改变下一步。',
      body: '我在香港城市大学攻读计算机与信息工程硕士，持续探索教育技术、AI 产品与真实用户体验。',
      body2: '把复杂流程讲清楚，把想法做成有人愿意使用的作品。',
      metrics: [
        { value: 2800, suffix: '+', label: '独立访客 / unique visitors' },
        { value: 100, suffix: '+', label: '有效线索 / qualified leads' },
        { value: 40, suffix: '%', label: '咨询到下单转化 / conversion' },
        { value: 4, suffix: '', label: '软件著作权 / software copyrights' },
      ],
      chips: ['AI 产品设计', '用户研究', '全栈原型', '学习科学', '增长与转化'],
    },
    path: {
      kicker: '02 / AI PRODUCT PATH',
      title: '把问题，做成产品。',
      body: '理解处境，找到重点，设计交互，再快速迭代。',
      focusLabel: 'AI 产品路径',
      focus: '用户问题 → 产品策略 → 体验设计 → 0→1 交付 → 数据迭代',
      intentLabel: '我在做什么 / WHAT I MAKE',
      intent: 'AI 产品 · 学习工具 · 旅行体验',
      intentBody: '把研究、设计与工程，连接成真实作品。',
    },
    experience: {
      kicker: '03 / EXPERIENCE',
      title: '把问题，做成结果。',
      intro: '从教育研究到旅行服务，把流程、数据与体验连起来。',
      items: [
        ['实习 / INTERNSHIP', '2023.08 — 2024.04', '希游旅行有限公司', '产品与客户服务 · Product & Customer Service', '70+ 日均订单，持续优化服务与转化。', '70+ orders / day · 60% conversion'],
        ['实习 / INTERNSHIP', '2025.04 — 2025.05', '整智智能信息技术（杭州）有限公司', '数据标注员 · Data Annotator', '复核 120+ 教育文本，准确率 85%+，返工率下降 30%。', '120+ texts · 85%+ pass rate'],
        ['项目实习 / RESEARCH', '2025.08', '华东师范大学智能教育学院', '项目研究实习生 · Research Intern', '研究 K-12 学习特征，参与 Agent 设计。', 'K-12 learning · Agent design'],
        ['项目研究 / RESEARCH', '2026.02 — 2026.04', '北京大学', '复杂学习任务与智能体协同研究', '完成眼动数据清洗、分析与可视化。', '40 students · 3,500+ records'],
        ['毕业设计 / THESIS', '2025 — 2026', '浙江工业大学', 'SSRL + COZE 智能协作共同体', '优秀本科毕业论文，4 项软件著作权。', 'Outstanding thesis · 4 copyrights'],
      ],
    },
    work: {
      kicker: '04 / SELECTED WORK',
      title: '把想法，带到真实世界。',
      intro: '两个上线产品，展示我的 0→1 实践。',
      visit: '访问项目 ↗',
      cards: [
        {
          id: 'travel',
          label: '01 / LIVE PRODUCT',
          title: 'Xiooh Travel',
          titleEn: 'Japan airport transfers · 2025.12 — 2026.07',
          body: '围绕日本机场接送、点对点用车等场景，设计从服务展示、需求确认到在线咨询的转化路径。',
          metric: '150+ orders · ¥120k+ GMV',
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
          titleEn: 'AI Japan trip planner · 2025.10 — 2026.07',
          body: '从 0 设计并开发日本自由行 AI 个性化路线规划平台，连接地点、交通、预算与行程执行。',
          metric: '2,800+ visitors · 7,600+ views',
          image: './assets/xioohplanner.png',
          url: 'https://xioohplanner.vercel.app/',
          tags: ['AI 旅行规划', '用户体验', 'Vercel / Maps'],
          logo: false,
          alt: 'XioohPlanner 网站界面截图',
        },
      ],
      moreLabel: 'MORE FROM THE RESUME',
      more: [
        ['国家级创新创业项目', '主持 2024 / 2025 两项国家级项目，围绕知识图谱、多模态智能体与协同文本创作展开研究。'],
        ['研究论文', 'GCCCE 2025 · ICIC 2026 · EMNLP 2025，覆盖 AI 教育、认知负荷与协作学习。'],
        ['产品与数据', '从服务订单、页面浏览到有效线索，持续用数据验证体验与转化。'],
      ],
    },
    journey: {
      kicker: '05 / GROWTH & EDUCATION',
      title: '学习，最终回到真实问题。',
      intro: '教育经历与研究训练，构成我的产品底色。',
      growthLabel: '成长轨迹 / GROWTH PATH',
      growthTitle: '一步一步，把兴趣变成能力。',
      growthIntro: '从教育技术到 AI 产品，沿着真实问题持续升级。',
      growth: [['2022', '教育技术', 'Education technology'], ['2024', '服务现场', 'Real-world service'], ['2025', 'AI 研究', 'AI research'], ['2026', '真实产品', 'Live products']],
      items: [
        ['2026.09.01 — 2027.06.01', '香港城市大学', '硕士 · 工程学院 · MSc Computer and Information Engineering', '智能体构建与设计 · 人机交互 · 数据分析 · 导师：许玮。', './assets/cityu-campus.jpg', 'Official City University of Hong Kong campus photo'],
        ['2022.09.01 — 2026.06.01', '浙江工业大学', '本科 · 教育学院 · 教育技术学（师范）', '专业综合排名第 4，获优秀毕业生与奖学金。', './assets/zjut-campus.jpg', 'Official Zhejiang University of Technology campus photo'],
      ],
      credentials: [['会议论文 / CONFERENCES', 'GCCCE 2025', 'ICIC 2026', 'EMNLP 2025'], ['毕业成果 / GRADUATION', '优秀本科毕业论文', '4 项软件著作权']],
      papers: [
        ['Do Large Language Models Suffer from Cognitive Overload?', 'CCF-C · 一作 · Benchmark and Orchestration Framework'],
        ['新课标视域下信息科技课程游戏化教学模式设计与应用', 'GCCCE 2025 · 一作'],
        ['Educator-role Moral and Normative Large Language Models Profiling', 'EMNLP 2025 · CCF-B'],
        ['Cultivating Collaborative Problem-Solving Skills in the Era of Human-AI Interaction', 'EI · 一作'],
      ],
      awards: ['浙江工业大学优秀毕业生', '浙江工业大学二等奖学金', '浙江工业大学创新奖学金', 'NECCS 三等奖', '浙江省大学生金融创新大赛金奖', '全国大学生数学竞赛二等奖'],
    },
    contact: {
      kicker: '06 / CONTACT',
      title: '把好想法，做成真实产品。',
      body: 'AI 产品、教育科技、旅行体验，欢迎交流。',
      cta: '发一封邮件',
      github: '查看 GitHub',
      emailLabel: 'Email',
      emailAltLabel: 'Gmail',
      emailAlt: 'bruce031103@gmail.com',
      basedLabel: '所在地',
      location: 'Ningbo',
    },
    footer: '© 2026 Bruce Tu. Built with curiosity and care.',
    toggle: 'EN',
    ariaToggle: '切换到英文',
    scrollHint: '向下探索',
  },
  en: {
    nav: [
      ['intro', 'Intro'],
      ['about', 'About'],
      ['path', 'AI Path'],
      ['experience', 'Experience'],
      ['work', 'Work'],
      ['education', 'Journey'],
      ['contact', 'Contact'],
    ],
    brandRole: 'AI Product Explorer · Independent Maker',
    hero: {
      eyebrow: 'BRUCE TU / 2026',
      title: 'Bruce Tu',
      nameCn: '屠炳豪',
      motto: 'Always be proud of yourself',
      subtitle: 'CityU MSc Student · AI Product Builder',
      body: 'I work between research, design, and launch: starting with an ambiguous problem, shaping it into a testable experience, then building the experience into something real.',
      note: 'Currently · MSc Computer and Information Engineering, CityU',
      primary: 'See selected work',
      secondary: 'Let’s talk',
      portraitAlt: 'Portrait of Bruce Tu',
      portraitPlace: 'Ningbo · NINGBO',
      floating: ['MSc CIE @ CityU', 'Hong Kong / Ningbo', 'AI product path'],
    },
    about: {
      kicker: '01 / ABOUT',
      title: 'Change the next step.',
      body: 'I study Computer and Information Engineering at CityU while exploring educational technology, AI products, and real user experience.',
      body2: 'I make complex flows legible and turn ideas into work people can use.',
      metrics: [
        { value: 2800, suffix: '+', label: 'unique visitors' },
        { value: 100, suffix: '+', label: 'qualified leads' },
        { value: 40, suffix: '%', label: 'inquiry-to-order conversion' },
        { value: 4, suffix: '', label: 'software copyrights' },
      ],
      chips: ['AI product design', 'User research', 'Full-stack prototyping', 'Learning sciences', 'Growth & conversion'],
    },
    path: {
      kicker: '02 / AI PRODUCT PATH',
      title: 'Make problems useful.',
      body: 'Understand the context, find the signal, design the interaction, then iterate.',
      focusLabel: 'AI product path',
      focus: 'User problem → Product strategy → Experience design → 0→1 delivery → Data iteration',
      intentLabel: 'WHAT I MAKE / 我在做什么',
      intent: 'AI products · learning tools · travel experiences',
      intentBody: 'I connect research, design, and engineering into real work.',
    },
    experience: {
      kicker: '03 / EXPERIENCE',
      title: 'Problems → outcomes.',
      intro: 'From education research to travel service, I connect process, data, and experience.',
      items: [
        ['INTERNSHIP / 实习', 'Aug 2023 — Apr 2024', 'Xiooh Travel Co., Ltd.', 'Product & Customer Service', '70+ daily orders; improved service flow and conversion.', '70+ orders / day · 60% conversion'],
        ['INTERNSHIP / 实习', 'Apr — May 2025', 'Zhengzhi Intelligent Information Technology', 'Data Annotator', 'Reviewed 120+ educational texts; reduced rework by 30%.', '120+ texts · 85%+ pass rate'],
        ['RESEARCH / 项目实习', 'Aug 2025', 'East China Normal University', 'Research Intern · Intelligent Education', 'Studied K-12 learning and supported Agent design.', 'K-12 learning · Agent design'],
        ['RESEARCH / 项目研究', 'Feb — Apr 2026', 'Peking University', 'Complex Learning Tasks & Agent Collaboration', 'Built the eye-tracking data analysis flow.', '40 students · 3,500+ records'],
        ['THESIS / 毕业设计', '2025 — 2026', 'Zhejiang University of Technology', 'SSRL + COZE Collaborative Learning Community', 'Outstanding thesis with 4 software copyrights.', 'Outstanding thesis · 4 copyrights'],
      ],
    },
    work: {
      kicker: '04 / SELECTED WORK',
      title: 'Ideas, made real.',
      intro: 'Two live products from my 0→1 practice.',
      visit: 'Visit project ↗',
      cards: [
        {
          id: 'travel',
          label: '01 / LIVE PRODUCT',
          title: 'Xiooh Travel',
          titleEn: 'Japan airport transfers · 2025.12 — 2026.07',
          body: 'A conversion path for Japan airport transfers and point-to-point rides, from service display to needs confirmation and consultation.',
          metric: '150+ orders · ¥120k+ GMV',
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
          titleEn: 'AI Japan trip planner · 2025.10 — 2026.07',
          body: 'An AI itinerary product designed from zero, connecting places, transport, budgets, and an executable trip plan.',
          metric: '2,800+ visitors · 7,600+ views',
          image: './assets/xioohplanner.png',
          url: 'https://xioohplanner.vercel.app/',
          tags: ['AI travel planning', 'Experience design', 'Vercel / Maps'],
          logo: false,
          alt: 'XioohPlanner website screenshot',
        },
      ],
      moreLabel: 'MORE FROM THE RESUME',
      more: [
        ['National innovation projects', 'Led two national projects on knowledge graphs, multimodal agents, and collaborative text creation.'],
        ['Research papers', 'GCCCE 2025 · ICIC 2026 · EMNLP 2025 across AI in education, cognitive load, and collaborative learning.'],
        ['Product & data', 'Using orders, page views, and qualified leads to validate experience and conversion.'],
      ],
    },
    journey: {
      kicker: '05 / GROWTH & EDUCATION',
      title: 'Learning, in motion.',
      intro: 'Education and research shaped my product foundation.',
      growthLabel: 'GROWTH PATH / 成长轨迹',
      growthTitle: 'Step by step, interest becomes ability.',
      growthIntro: 'From educational technology to AI products, I keep leveling up through real questions.',
      growth: [['2022', '教育技术', 'Education technology'], ['2024', '服务现场', 'Real-world service'], ['2025', 'AI 研究', 'AI research'], ['2026', '真实产品', 'Live products']],
      items: [
        ['Sep 1, 2026 — Jun 1, 2027', 'City University of Hong Kong', 'MSc · College of Engineering · Computer and Information Engineering', 'Focus: agent building & design, human-computer interaction, and data analysis. Advisor: 许玮.', './assets/cityu-campus.jpg', 'Official City University of Hong Kong campus photo'],
        ['Sep 1, 2022 — Jun 1, 2026', 'Zhejiang University of Technology', 'BEd · School of Education · Educational Technology', 'Ranked 4th overall; recognized as an outstanding graduate with scholarships.', './assets/zjut-campus.jpg', 'Official Zhejiang University of Technology campus photo'],
      ],
      credentials: [['CONFERENCES / 会议论文', 'GCCCE 2025', 'ICIC 2026', 'EMNLP 2025'], ['GRADUATION / 毕业成果', 'Outstanding undergraduate thesis', '4 software copyrights']],
      papers: [
        ['Do Large Language Models Suffer from Cognitive Overload?', 'CCF-C · First author · Benchmark and Orchestration Framework'],
        ['Gamified Teaching Models for Information Technology under the New Curriculum', 'GCCCE 2025 · First author'],
        ['Educator-role Moral and Normative Large Language Models Profiling', 'EMNLP 2025 · CCF-B'],
        ['Cultivating Collaborative Problem-Solving Skills in the Era of Human-AI Interaction', 'EI · First author'],
      ],
      awards: ['Outstanding Graduate, ZJUT', 'ZJUT Second-class Scholarship', 'ZJUT Innovation Scholarship', 'NECCS Third Prize', 'Zhejiang Financial Innovation Gold Award', 'National Mathematics Contest Second Prize'],
    },
    contact: {
      kicker: '06 / CONTACT',
      title: 'Build something real.',
      body: 'AI products, education, travel, and real users.',
      cta: 'Send an email',
      github: 'View GitHub',
      emailLabel: 'Email',
      emailAltLabel: 'Gmail',
      emailAlt: 'bruce031103@gmail.com',
      basedLabel: 'Based in',
      location: 'Ningbo',
    },
    footer: '© 2026 Bruce Tu. Built with curiosity and care.',
    toggle: '中',
    ariaToggle: '切换到中文',
    scrollHint: 'Scroll to explore',
  },
};

let lang = localStorage.getItem('bruce-lang') || 'zh';

const app = document.querySelector('#app');

function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const run = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || '';
    const start = performance.now();
    const duration = 1250;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased).toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach((counter) => {
      counter.textContent = `${Number(counter.dataset.target || 0).toLocaleString()}${counter.dataset.suffix || ''}`;
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  counters.forEach((counter) => observer.observe(counter));
}

function render() {
  const copy = content[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = lang === 'zh' ? '屠炳豪 Bruce Tu — 个人主页' : 'Bruce Tu — Personal Site';
  app.innerHTML = `
    <div class="site-shell">
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>
      <header class="site-header">
        <nav class="site-nav" aria-label="Primary navigation">
          ${copy.nav.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}
        </nav>
        <button class="lang-toggle" type="button" aria-label="${copy.ariaToggle}" title="${copy.ariaToggle}">${copy.toggle}</button>
      </header>

      <main>
        <section class="hero section-pad" id="intro">
          <div class="hero-copy">
            <div class="eyebrow"><span class="eyebrow-dot"></span>${copy.hero.eyebrow}</div>
            <h1>${copy.hero.title}<small>${copy.hero.nameCn}</small></h1>
            <p class="hero-motto">${copy.hero.motto}</p>
            <p class="hero-subtitle">${copy.hero.subtitle}</p>
            <p class="hero-body">${copy.hero.body}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#work">${copy.hero.primary}<span>↘</span></a>
              <a class="button button-quiet" href="#contact">${copy.hero.secondary}<span>↗</span></a>
            </div>
            <div class="hero-note"><span class="status-dot"></span>${copy.hero.note}</div>
          </div>
          <div class="portrait-wrap">
            <div class="portrait-orbit orbit-one"></div>
            <div class="portrait-orbit orbit-two"></div>
            <div class="portrait-card">
              <img src="./assets/profile.jpg" alt="${copy.hero.portraitAlt}" />
              <div class="portrait-caption"><span>PORTRAIT / 2026</span><span>${copy.hero.portraitPlace}</span></div>
            </div>
            <div class="floating-card floating-top"><span class="card-label">CURRENTLY</span><strong>${copy.hero.floating[0]}</strong></div>
            <div class="floating-card floating-bottom"><span>${copy.hero.floating[1]}</span><span>${copy.hero.floating[2]}</span></div>
          </div>
          <a class="scroll-cue" href="#about"><span class="scroll-line"></span>${copy.scrollHint}</a>
        </section>

        <section class="section-pad about-section" id="about">
          <div class="about-layout">
            <div class="about-lead"><span class="section-kicker">${copy.about.kicker}</span><h2>${copy.about.title}</h2></div>
            <div class="about-story"><p>${copy.about.body}</p><p>${copy.about.body2}</p><div class="chip-row">${copy.about.chips.map(chip => `<span>${chip}</span>`).join('')}</div><figure class="about-visual"><img src="./assets/maker-studio.jpg" alt="A calm maker workspace with notes, maps, and product ideas" /><figcaption>MADE WITH CURIOSITY / 保持好奇</figcaption></figure></div>
            <div class="metric-grid">${copy.about.metrics.map(metric => `<div class="metric"><strong class="metric-value" data-counter data-target="${metric.value}" data-suffix="${metric.suffix}">${metric.value.toLocaleString()}${metric.suffix}</strong><span>${metric.label}</span></div>`).join('')}</div>
          </div>
        </section>

        <section class="section-pad path-section" id="path">
          <div class="section-heading"><span class="section-kicker">${copy.path.kicker}</span><h2>${copy.path.title}</h2><p>${copy.path.body}</p></div>
          <div class="path-grid">
            <article class="path-card path-flow"><span class="path-label">${copy.path.focusLabel}</span><p>${copy.path.focus}</p><img class="path-visual" src="./assets/ai-path-flow.png" alt="" aria-hidden="true" /></article>
            <article class="path-card path-intent"><img class="path-card-art" src="./assets/ai-product-map.jpg" alt="" aria-hidden="true" /><span class="path-label">${copy.path.intentLabel}</span><h3>${copy.path.intent}</h3><p>${copy.path.intentBody}</p></article>
          </div>
        </section>

        <section class="section-pad experience-section" id="experience">
          <div class="section-heading"><span class="section-kicker">${copy.experience.kicker}</span><h2>${copy.experience.title}</h2><p>${copy.experience.intro}</p></div>
          <div class="experience-visual"><img src="./assets/travel-experience.jpg" alt="Editorial travel route and service notes" loading="lazy" /><span>FIELD NOTES / PRODUCT & SERVICE</span></div>
          <div class="experience-list">${copy.experience.items.map(([type, date, place, role, detail, result], index) => `<article class="experience-item"><div class="experience-index">0${index + 1}<span>${type}</span></div><div class="experience-date">${date}</div><div class="experience-content"><h3>${place}</h3><strong>${role}</strong><p>${detail}</p></div><div class="experience-result">${result}</div></article>`).join('')}</div>
        </section>

        <section class="work-section" id="work">
          <div class="section-pad work-inner">
            <div class="section-heading light"><span class="section-kicker">${copy.work.kicker}</span><h2>${copy.work.title}</h2><p>${copy.work.intro}</p></div>
            <div class="project-grid">
              ${copy.work.cards.map(card => `
                <article class="project-card ${card.id}">
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
                    <div class="project-meta"><span>${card.metric}</span><a href="${card.url}" target="_blank" rel="noreferrer">${copy.work.visit}</a></div>
                    <div class="project-tags">${card.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                  </div>
                </article>`).join('')}
            </div>
            <div class="lab-grid"><span class="lab-label">${copy.work.moreLabel}</span>${copy.work.more.map(([title, text], index) => `<div class="lab-item"><span class="lab-index">0${index + 3}</span><div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}</div>
          </div>
        </section>

        <section class="section-pad journey-section" id="education">
          <div class="section-heading"><span class="section-kicker">${copy.journey.kicker}</span><h2>${copy.journey.title}</h2><p>${copy.journey.intro}</p></div>
          <div class="growth-track" aria-label="${copy.journey.growthLabel}">
            <img class="growth-track-art" src="./assets/growth-trajectory.jpg" alt="" aria-hidden="true" loading="lazy" />
            <div class="growth-track-head"><span class="mini-kicker">${copy.journey.growthLabel}</span><h3>${copy.journey.growthTitle}</h3><p>${copy.journey.growthIntro}</p></div>
            <div class="growth-steps">${copy.journey.growth.map(([year, title, label], index) => `<div class="growth-step"><span class="growth-step-dot">0${index + 1}</span><strong>${year}</strong><span>${lang === 'zh' ? title : label}</span></div>`).join('')}</div>
          </div>
          <div class="education-grid">${copy.journey.items.map(([date, place, role, detail, image, imageAlt]) => `<article class="education-card"><div class="education-image"><img src="${image}" alt="${imageAlt}" /></div><div class="education-copy"><span class="education-date">${date}</span><h3>${place}</h3><strong>${role}</strong><p>${detail}</p></div></article>`).join('')}</div>
          <div class="research-strip"><span class="credential-label">RESEARCH & RECOGNITION</span><div class="credential-groups">${copy.journey.credentials.map(([label, ...items]) => `<div class="credential-group"><strong>${label}</strong><div>${items.map(item => `<span>${item}</span>`).join('')}</div></div>`).join('')}</div></div>
          <div class="research-grid"><div><span class="mini-kicker">PAPERS / 论文</span>${copy.journey.papers.map(([title, meta], index) => `<article class="paper-item"><span>0${index + 1}</span><div><h3>${title}</h3><p>${meta}</p></div></article>`).join('')}</div><div><span class="mini-kicker">AWARDS / 获奖</span><img class="research-visual" src="./assets/research-workbench.jpg" alt="Editorial research workbench with notes and data sketches" /><div class="award-list">${copy.journey.awards.map(award => `<span>${award}</span>`).join('')}</div></div></div>
        </section>

        <section class="section-pad contact-section" id="contact">
          <div class="contact-card">
            <div class="contact-copy"><span class="section-kicker">${copy.contact.kicker}</span><h2>${copy.contact.title}</h2><p>${copy.contact.body}</p><a class="button button-light" href="mailto:tubinghao11103@163.com">${copy.contact.cta}<span>↗</span></a></div>
            <div class="contact-details"><div class="detail-row"><span>${copy.contact.emailLabel}</span><a href="mailto:tubinghao11103@163.com">tubinghao11103@163.com</a></div><div class="detail-row"><span>${copy.contact.emailAltLabel}</span><a href="mailto:${copy.contact.emailAlt}">${copy.contact.emailAlt}</a></div><div class="detail-row"><span>GitHub</span><a href="https://github.com/Bruce-778" target="_blank" rel="noreferrer">github.com/Bruce-778 ↗</a></div><div class="detail-row"><span>${copy.contact.basedLabel}</span><span>${copy.contact.location}</span></div></div>
          </div>
        </section>
      </main>
      <footer class="site-footer"><span>${copy.footer}</span><span>BT / 2026</span></footer>
    </div>
  `;

  document.querySelector('.lang-toggle').addEventListener('click', () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('bruce-lang', lang);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  animateCounters();
}

render();
