import './style.css';

const content = {
  zh: {
    nav: [
      ['intro', '首页'],
      ['about', '关于'],
      ['path', 'AI 路径'],
      ['work', '作品'],
      ['journey', '轨迹'],
      ['contact', '联系'],
    ],
    brandRole: 'AI 产品经理 · 独立构建者',
    hero: {
      eyebrow: 'BRUCE TU / 屠炳豪',
      title: 'Bruce Tu',
      nameCn: '屠炳豪',
      motto: '把复杂的 AI，做成有人愿意使用的产品。',
      subtitle: 'AI 产品经理 · 独立构建者',
      body: '我在研究、设计和上线之间工作：从一个模糊问题出发，把它拆成可验证的体验，再把体验做成真正可用的产品。',
      note: 'Currently · 香港城市大学 CityU 硕士生',
      primary: '查看作品',
      secondary: '联系我',
      portraitAlt: '屠炳豪的肖像照片',
      floating: ['MSc CIE @ CityU', '香港 / 杭州', 'AI 产品方向'],
    },
    about: {
      kicker: '01 / ABOUT',
      title: '我关心的，是产品如何真正改变一个人的下一步。',
      body: '我的背景横跨教育技术、AI 产品和一线服务体验。现在，我一边在香港城市大学攻读计算机与信息工程硕士，一边持续构建面向真实用户的 AI 产品。',
      body2: '我喜欢把复杂流程变得清楚，把技术能力变成可感知的价值，也相信每个好产品都应该经得起真实使用。',
      metrics: [
        ['2,800+', '独立访客 / unique visitors'],
        ['100+', '有效线索 / qualified leads'],
        ['40%', '咨询到下单转化 / conversion'],
        ['4', '软件著作权 / software copyrights'],
      ],
      chips: ['AI 产品设计', '用户研究', '全栈原型', '学习科学', '增长与转化'],
    },
    path: {
      kicker: '02 / AI PRODUCT PATH',
      title: '从真实问题出发，走到可用的产品。',
      body: '我把 AI 产品看作一条完整路径：理解用户的处境，找到最值得解决的问题，设计清晰的交互，再用快速迭代把想法交付到真实世界。',
      focusLabel: 'AI 产品路径',
      focus: '用户问题 → 产品策略 → 体验设计 → 0→1 交付 → 数据迭代',
      intentLabel: '求职意向 / Career focus',
      intent: '产品经理 · Product Manager',
      intentBody: '希望继续在 AI 产品方向工作，把研究、设计与工程协作起来，做出真正有人愿意使用的产品。',
    },
    work: {
      kicker: '03 / SELECTED WORK',
      title: '把想法推到真实世界里。',
      intro: '两个已经上线的产品，记录我如何从需求、交互一路做到上线和迭代。',
      visit: '访问项目 ↗',
      cards: [
        {
          id: 'travel',
          label: '01 / LIVE PRODUCT',
          title: 'XioohTravel',
          titleEn: 'Japan airport transfers',
          body: '日本机场接送与点对点交通预订平台。把服务展示、需求确认、车型解释和线索收集串成一条清晰的转化路径。',
          metric: '150+ travel orders · ¥120k+ GMV',
          image: './assets/xioohtravel.png',
          url: 'https://xioohtravel.com/',
          tags: ['产品负责人', '独立开发', 'Next.js / Supabase'],
          logo: true,
          alt: 'XioohTravel 网站界面截图',
        },
        {
          id: 'planner',
          label: '02 / AI PRODUCT',
          title: 'XioohPlanner',
          titleEn: 'AI Japan trip planner',
          body: '用 AI 生成更顺路、更像自己的日本旅行计划。支持多城市路线、地点推荐、地图与交通安排。',
          metric: '2,800+ visitors · 7,600+ page views',
          image: './assets/xioohplanner.png',
          url: 'https://xioohplanner.vercel.app/',
          tags: ['AI 旅行规划', '用户体验', 'Vercel / Maps'],
          logo: false,
          alt: 'XioohPlanner 网站界面截图',
        },
      ],
      moreLabel: 'MORE IN THE LAB',
      more: [
        ['多智能体协作学习系统', 'Guide Agent + Deviation Monitoring Agent，围绕阅读、识别、策略、反馈构建协作干预机制。'],
        ['复杂学习任务研究', '参与北京大学项目，处理 40+ 名学生的眼动与行为数据，完成从清洗到结论的分析链路。'],
      ],
    },
    journey: {
      kicker: '04 / JOURNEY',
      title: '沿着问题走，也沿着人走。',
      intro: '每一段经历都让我更接近同一个问题：如何让技术更有用，也更像人在使用。',
      items: [
        ['2026.09 — 2027.06', '香港城市大学', '计算机与信息工程硕士 · MSc Computer and Information Engineering', '学习计算机系统、智能应用与工程化落地。'],
        ['2025.12 — 至今', 'XioohTravel / XioohPlanner', '产品负责人 · 独立开发者 · Product Lead & Independent Developer', '从 0 到 1 设计、开发并上线两个面向真实用户的 AI / 旅行产品。'],
        ['2025.11 — 至今', '多智能体在线协作系统', '项目负责人 · Project Lead', '用 COZE、提示工程与本地 RAG 设计协作引导和偏离监测机制。'],
        ['2022.09 — 2026.06', '浙江工业大学', '教育技术学（师范）· Educational Technology', '专业综合排名第 4，获优秀毕业生、一等奖学金与学术创新奖学金。'],
        ['2023.08 — 2024.04', '宁波希诺旅行有限公司', '产品与客户服务 · Product & Customer Service', '日均处理 70+ 日本 / 韩国用车订单，持续用数据改进服务流程与转化。'],
      ],
      credentials: 'GCCCE 2025 · ICIC 2026 · EMNLP 2025 · 优秀本科毕业论文 · 4 项软件著作权',
    },
    contact: {
      kicker: '05 / CONTACT',
      title: '如果你也在把一个好想法变成现实，欢迎来聊。',
      body: '我对 AI 产品、教育科技、旅行体验和真实用户反馈保持长期兴趣。',
      cta: '发一封邮件',
      github: '查看 GitHub',
      emailLabel: 'Email',
      location: 'Hangzhou / Hong Kong',
      logoAlt: 'XioohTravel logo',
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
      ['work', 'Work'],
      ['journey', 'Journey'],
      ['contact', 'Contact'],
    ],
    brandRole: 'AI Product Manager · Builder',
    hero: {
      eyebrow: 'BRUCE TU / 2026',
      title: 'Bruce Tu',
      nameCn: '屠炳豪',
      motto: 'I turn complex AI into products people want to use.',
      subtitle: 'CityU MSc Student · AI Product Builder',
      body: 'I work between research, design, and launch: starting with an ambiguous problem, shaping it into a testable experience, then building the experience into something real.',
      note: 'Currently · MSc Computer and Information Engineering, CityU',
      primary: 'See selected work',
      secondary: 'Let’s talk',
      portraitAlt: 'Portrait of Bruce Tu',
      floating: ['MSc CIE @ CityU', 'Hong Kong / Hangzhou', 'AI product path'],
    },
    about: {
      kicker: '01 / ABOUT',
      title: 'I care about how a product changes someone’s next step.',
      body: 'My background sits across educational technology, AI products, and frontline service experience. I am now pursuing an MSc in Computer and Information Engineering at City University of Hong Kong while continuing to ship products for real users.',
      body2: 'I like making complex flows legible, turning technical capability into felt value, and building products that hold up in real use.',
      metrics: [
        ['2,800+', 'unique visitors'],
        ['100+', 'qualified leads'],
        ['40%', 'inquiry-to-order conversion'],
        ['4', 'software copyrights'],
      ],
      chips: ['AI product design', 'User research', 'Full-stack prototyping', 'Learning sciences', 'Growth & conversion'],
    },
    path: {
      kicker: '02 / AI PRODUCT PATH',
      title: 'Starting with a real problem, ending with a product people can use.',
      body: 'I see AI product work as a complete path: understand a person’s context, find the problem worth solving, shape a clear interaction, then ship and learn from real use.',
      focusLabel: 'AI product path',
      focus: 'User problem → Product strategy → Experience design → 0→1 delivery → Data iteration',
      intentLabel: 'Career focus / 求职意向',
      intent: 'Product Manager · 产品经理',
      intentBody: 'I want to keep working on AI products, connecting research, design, and engineering to make things people genuinely choose to use.',
    },
    work: {
      kicker: '03 / SELECTED WORK',
      title: 'Taking ideas into the real world.',
      intro: 'Two live products that show how I move from needs and interaction design to launch and iteration.',
      visit: 'Visit project ↗',
      cards: [
        {
          id: 'travel',
          label: '01 / LIVE PRODUCT',
          title: 'XioohTravel',
          titleEn: 'Japan airport transfers',
          body: 'An airport transfer and point-to-point booking platform for Japan. I shaped a clear path from service display to needs confirmation, vehicle explanation, and lead capture.',
          metric: '150+ travel orders · ¥120k+ GMV',
          image: './assets/xioohtravel.png',
          url: 'https://xioohtravel.com/',
          tags: ['Product lead', 'Independent build', 'Next.js / Supabase'],
          logo: true,
          alt: 'XioohTravel website screenshot',
        },
        {
          id: 'planner',
          label: '02 / AI PRODUCT',
          title: 'XioohPlanner',
          titleEn: 'AI Japan trip planner',
          body: 'An AI planner for routes that feel more connected and more personal, with multi-city itineraries, place recommendations, maps, and transport planning.',
          metric: '2,800+ visitors · 7,600+ page views',
          image: './assets/xioohplanner.png',
          url: 'https://xioohplanner.vercel.app/',
          tags: ['AI travel planning', 'Experience design', 'Vercel / Maps'],
          logo: false,
          alt: 'XioohPlanner website screenshot',
        },
      ],
      moreLabel: 'MORE IN THE LAB',
      more: [
        ['Multi-agent collaboration system', 'A Guide Agent + Deviation Monitoring Agent workflow for reading, identifying, strategizing, and feeding back in collaborative learning.'],
        ['Complex learning tasks research', 'A research project with Peking University, analyzing eye-tracking and behavioral data from 40+ students.'],
      ],
    },
    journey: {
      kicker: '04 / JOURNEY',
      title: 'Following the problem, and the people around it.',
      intro: 'Every chapter brings me closer to the same question: how can technology become more useful, and more human in use?',
      items: [
        ['2026.09 — 2027.06', 'City University of Hong Kong', 'MSc Computer and Information Engineering', 'Exploring computing systems, intelligent applications, and engineering in practice.'],
        ['2025.12 — Present', 'XioohTravel / XioohPlanner', 'Product Lead & Independent Developer', 'Designed, built, launched, and iterated two products for real users from zero to one.'],
        ['2025.11 — Present', 'Multi-agent Online Collaboration System', 'Project Lead', 'Designed collaboration guidance and deviation monitoring with COZE, prompt engineering, and local RAG.'],
        ['2022.09 — 2026.06', 'Zhejiang University of Technology', 'Educational Technology', 'Ranked 4th overall; recognized as an outstanding graduate with top scholarships.'],
        ['2023.08 — 2024.04', 'Ningbo Xinuo Travel Co., Ltd.', 'Product & Customer Service', 'Handled 70+ Japan / Korea vehicle orders per day and improved service flows through data.'],
      ],
      credentials: 'GCCCE 2025 · ICIC 2026 · EMNLP 2025 · Outstanding Undergraduate Thesis · 4 software copyrights',
    },
    contact: {
      kicker: '05 / CONTACT',
      title: 'If you are turning a good idea into something real, let’s talk.',
      body: 'I stay curious about AI products, education technology, travel experiences, and the honest signal that comes from real users.',
      cta: 'Send an email',
      github: 'View GitHub',
      emailLabel: 'Email',
      location: 'Hangzhou / Hong Kong',
      logoAlt: 'XioohTravel logo',
    },
    footer: '© 2026 Bruce Tu. Built with curiosity and care.',
    toggle: '中',
    ariaToggle: '切换到中文',
    scrollHint: 'Scroll to explore',
  },
};

let lang = localStorage.getItem('bruce-lang') || 'zh';

const app = document.querySelector('#app');

function render() {
  const copy = content[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = lang === 'zh' ? '屠炳豪 Bruce Tu — AI 产品经理与独立构建者' : 'Bruce Tu — AI Product Manager & Builder';
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
              <div class="portrait-caption"><span>PORTRAIT / 2026</span><span>杭州 · HANGZHOU</span></div>
            </div>
            <div class="floating-card floating-top"><span class="card-label">CURRENTLY</span><strong>${copy.hero.floating[0]}</strong></div>
            <div class="floating-card floating-bottom"><span>${copy.hero.floating[1]}</span><span>${copy.hero.floating[2]}</span></div>
          </div>
          <a class="scroll-cue" href="#about"><span class="scroll-line"></span>${copy.scrollHint}</a>
        </section>

        <section class="section-pad about-section" id="about">
          <div class="section-heading"><span class="section-kicker">${copy.about.kicker}</span><h2>${copy.about.title}</h2></div>
          <div class="about-grid">
            <div class="about-story"><p>${copy.about.body}</p><p>${copy.about.body2}</p><div class="chip-row">${copy.about.chips.map(chip => `<span>${chip}</span>`).join('')}</div></div>
            <div class="metric-grid">${copy.about.metrics.map(([value, label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>
          </div>
        </section>

        <section class="section-pad path-section" id="path">
          <div class="section-heading"><span class="section-kicker">${copy.path.kicker}</span><h2>${copy.path.title}</h2><p>${copy.path.body}</p></div>
          <div class="path-grid">
            <div class="path-card path-flow"><span class="path-label">${copy.path.focusLabel}</span><p>${copy.path.focus}</p><div class="path-line"><i></i><i></i><i></i><i></i></div></div>
            <div class="path-card path-intent"><span class="path-label">${copy.path.intentLabel}</span><h3>${copy.path.intent}</h3><p>${copy.path.intentBody}</p></div>
          </div>
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
                    ${card.logo ? `<img class="project-logo" src="./assets/xiooh-logo.png" alt="XioohTravel logo" />` : ''}
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

        <section class="section-pad journey-section" id="journey">
          <div class="section-heading"><span class="section-kicker">${copy.journey.kicker}</span><h2>${copy.journey.title}</h2><p>${copy.journey.intro}</p></div>
          <div class="timeline">${copy.journey.items.map(([date, place, role, detail], index) => `<article class="timeline-item"><div class="timeline-marker"><span>0${index + 1}</span></div><div class="timeline-date">${date}</div><div class="timeline-content"><h3>${place}</h3><strong>${role}</strong><p>${detail}</p></div></article>`).join('')}</div>
          <div class="credential-strip"><span class="credential-label">RECOGNITION</span><span>${copy.journey.credentials}</span></div>
        </section>

        <section class="section-pad contact-section" id="contact">
          <div class="contact-card">
            <div class="contact-copy"><span class="section-kicker">${copy.contact.kicker}</span><h2>${copy.contact.title}</h2><p>${copy.contact.body}</p><a class="button button-light" href="mailto:tubinghao11103@163.com">${copy.contact.cta}<span>↗</span></a></div>
            <div class="contact-details"><img src="./assets/xiooh-logo.png" alt="${copy.contact.logoAlt}" /><div class="detail-row"><span>${copy.contact.emailLabel}</span><a href="mailto:tubinghao11103@163.com">tubinghao11103@163.com</a></div><div class="detail-row"><span>GitHub</span><a href="https://github.com/Bruce-778" target="_blank" rel="noreferrer">github.com/Bruce-778 ↗</a></div><div class="detail-row"><span>Based in</span><span>${copy.contact.location}</span></div></div>
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
}

render();
