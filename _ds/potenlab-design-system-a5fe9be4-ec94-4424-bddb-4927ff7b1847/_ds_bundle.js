/* @ds-bundle: {"format":3,"namespace":"PotenlabDesignSystem_a5fe9b","components":[],"sourceHashes":{"ui_kits/planningbox/IdeaComposer.jsx":"9c53b00fa076","ui_kits/planningbox/PBHeader.jsx":"fe39ab07f878","ui_kits/planningbox/PBHero.jsx":"7c1499aacdf2","ui_kits/planningbox/ToolCard.jsx":"5359daa370b6","ui_kits/potenlab/Footer.jsx":"dc3653cf5db0","ui_kits/potenlab/Header.jsx":"6f004e13a27e","ui_kits/potenlab/Hero.jsx":"60f5d5702d83","ui_kits/potenlab/PortfolioGrid.jsx":"13be48fdf237","ui_kits/potenlab/ServiceCard.jsx":"8a9a7d6fe7a3","ui_kits/potenlab/partnership/FAQAndCTA.jsx":"8de365a6d759","ui_kits/potenlab/partnership/Icons.jsx":"1d1593b57e20","ui_kits/potenlab/partnership/PartnershipHero.jsx":"9181ffa68e5e","ui_kits/potenlab/partnership/Pricing.jsx":"6b54e6cd3433","ui_kits/potenlab/partnership/Sections.jsx":"b08131ccc281","ui_kits/potenlab/partnership/Spectrum.jsx":"325a9ddce59a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PotenlabDesignSystem_a5fe9b = window.PotenlabDesignSystem_a5fe9b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/planningbox/IdeaComposer.jsx
try { (() => {
function IdeaComposer({
  onSubmit
}) {
  const [v, setV] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(15,15,26,0.8)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 20,
      padding: 8,
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      backdropFilter: 'blur(10px)',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: "\uD55C \uC904\uB85C \uC544\uC774\uB514\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694 \u2014 \uC608: \uBC18\uB824\uB3D9\uBB3C \uC8FC\uC778\uC744 \uC704\uD55C \uC774\uB3D9 \uC11C\uBE44\uC2A4",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      color: '#fff',
      fontSize: 15,
      padding: '12px 16px',
      outline: 'none',
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSubmit?.(v),
    disabled: !v,
    style: {
      height: 44,
      padding: '0 20px',
      borderRadius: 14,
      border: 'none',
      background: v ? 'linear-gradient(135deg, #8B5CF6, #7C3AED)' : 'rgba(255,255,255,0.1)',
      color: '#fff',
      fontSize: 14,
      fontWeight: 600,
      cursor: v ? 'pointer' : 'not-allowed',
      boxShadow: v ? '0 4px 16px rgba(139,92,246,0.4)' : 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2726"), " \uAE30\uD68D \uC2DC\uC791"));
}
window.IdeaComposer = IdeaComposer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/planningbox/IdeaComposer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/planningbox/PBHeader.jsx
try { (() => {
function PBHeader({
  plan = 'free',
  user
}) {
  const planColor = plan === 'free' ? {
    c: '#94A3B8',
    bg: 'rgba(148,163,184,0.12)',
    b: 'rgba(148,163,184,0.25)'
  } : {
    c: '#C4B5FD',
    bg: 'rgba(139,92,246,0.18)',
    b: 'rgba(139,92,246,0.4)'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(6,6,12,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: 1156,
      margin: '0 auto',
      padding: '0 32px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(139,92,246,0.4)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 L14 10 L21 12 L14 14 L12 21 L10 14 L3 12 L10 10 Z"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, "PlanningBox")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, user ? /*#__PURE__*/React.createElement("button", {
    style: {
      height: 34,
      padding: '0 12px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      border: 'none',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 10,
      fontWeight: 700
    }
  }, (user.name || '?')[0].toUpperCase()), /*#__PURE__*/React.createElement("span", null, user.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 4,
      color: planColor.c,
      background: planColor.bg,
      border: `1px solid ${planColor.b}`
    }
  }, plan)) : /*#__PURE__*/React.createElement("button", {
    style: {
      height: 34,
      padding: '0 18px',
      borderRadius: 9999,
      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      color: '#fff',
      border: 'none',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(139,92,246,0.35)',
      fontFamily: 'inherit'
    }
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("a", {
    style: {
      height: 34,
      padding: '0 14px',
      fontSize: 13,
      color: 'rgba(255,255,255,0.4)',
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, "Potenlab \u2197"))));
}
window.PBHeader = PBHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/planningbox/PBHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/planningbox/PBHero.jsx
try { (() => {
function PBHero({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '100px 32px 120px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 800px 500px at 50% 20%, rgba(139,92,246,0.28) 0%, rgba(6,6,12,0) 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px',
      borderRadius: 9999,
      background: 'rgba(139,92,246,0.15)',
      color: '#C4B5FD',
      border: '1px solid rgba(139,92,246,0.3)',
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 28,
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\u2726"), " AI PLANNING, FOR EVERYONE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 64,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      margin: '0 0 24px',
      color: '#fff'
    }
  }, "IT \uC11C\uBE44\uC2A4 \uAE30\uD68D\uC758", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg, #C4B5FD, #8B5CF6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, "\uBAA8\uB4E0 \uAC83.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.6)',
      margin: '0 0 40px',
      maxWidth: 560,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "\uC544\uC774\uB514\uC5B4\uBD80\uD130 \uD654\uBA74\uC124\uACC4\uAE4C\uC9C0, AI\uC640 \uD568\uAED8 \uD55C \uBC15\uC2A4\uB85C.", /*#__PURE__*/React.createElement("br", null), "\uD63C\uC790\uC11C\uB3C4 \uC644\uACB0\uB41C IT \uC11C\uBE44\uC2A4 \uAE30\uD68D\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement(IdeaComposer, {
    onSubmit: onStart
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 12,
      color: 'rgba(255,255,255,0.3)'
    }
  }, "\uBB34\uB8CC\uB85C \uC2DC\uC791 \xB7 \uB85C\uADF8\uC778 \uC5C6\uC774 \uCCB4\uD5D8 \uAC00\uB2A5")));
}
window.PBHero = PBHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/planningbox/PBHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/planningbox/ToolCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ToolCard({
  title,
  body,
  tag,
  highlight
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#0F0F1A',
      border: `1px solid ${hover ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: 20,
      padding: 28,
      transition: 'all 200ms cubic-bezier(.4,0,.2,1)',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(139,92,246,0.4)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 L14 10 L21 12 L14 14 L12 21 L10 14 L3 12 L10 10 Z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: highlight ? '#C4B5FD' : 'rgba(255,255,255,0.4)',
      marginBottom: 8
    }
  }, tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 20,
      fontWeight: 700,
      color: '#fff',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.6)',
      margin: 0
    }
  }, body));
}
function Tools() {
  const items = [{
    tag: 'Tools · Core',
    title: '아이디어 구체화',
    body: '문제 정의부터 핵심 가설까지, 구조화된 프레임워크로 탐색합니다.',
    highlight: true
  }, {
    tag: 'Tools · PRD',
    title: 'PRD Generator',
    body: '한 줄 아이디어로 완결된 PRD 문서까지, 한 박스로.'
  }, {
    tag: 'Tools · Chat',
    title: 'Estimator Chat',
    body: '대화형으로 견적과 일정을 즉시 산출합니다.'
  }, {
    tag: 'Tools · UI',
    title: 'UI Builder',
    body: '텍스트로 화면 설계. 이식 예정 — 기존 경로에서 사용 중.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px',
      background: '#06060C'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: 12
    }
  }, "TOOLS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 40,
      fontWeight: 800,
      color: '#fff',
      margin: '0 0 40px',
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    }
  }, "IT \uAE30\uD68D, \uD55C \uBC15\uC2A4\uB85C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, items.map(i => /*#__PURE__*/React.createElement(ToolCard, _extends({
    key: i.title
  }, i))))));
}
window.ToolCard = ToolCard;
window.Tools = Tools;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/planningbox/ToolCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/Footer.jsx
try { (() => {
function Footer() {
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#1A1A1A',
      color: '#fff',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
      gap: 40,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== 'undefined' && window.__resources && window.__resources.logoWhite || "../../assets/logos/potenlab_logo_white.png",
    alt: "Potenlab",
    style: {
      height: 24,
      marginBottom: 16,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.7,
      color: '#999',
      margin: 0
    }
  }, "\uBE44\uC988\uB2C8\uC2A4 \uC131\uC7A5\uC758 \uD30C\uD2B8\uB108", /*#__PURE__*/React.createElement("br", null), "Potenlab")), [{
    h: '핵심서비스',
    items: ['IT/Biz 컨설팅', 'MVP 개발', 'UX/UI 디자인', '플랫폼 개발']
  }, {
    h: '인사이트',
    items: ['콘텐츠', '자료실', '포텐스쿨 ↗']
  }, {
    h: 'Company',
    items: ['회사소개서 ↗', 'Style Guide', 'FAQ', 'contact@potenlab.dev']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#fff',
      margin: '0 0 14px'
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 13,
      color: '#999',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#666'
    }
  }, "\xA9 ", year, " Potenlab. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#999'
    }
  }, "\uD83C\uDF10 \uD55C\uAD6D\uC5B4  \xB7  \uD83D\uDD12 Admin"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/Header.jsx
try { (() => {
function Header({
  onNavigate,
  active = 'home'
}) {
  const links = ['소개', '포트폴리오', '아티클', '자료실'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.04)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: 1156,
      margin: '0 auto',
      padding: '0 32px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate?.('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== 'undefined' && window.__resources && window.__resources.logoBlue || "../../assets/logos/potenlab_logo_blue.png",
    alt: "Potenlab",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNavigate?.(l),
    style: {
      height: 36,
      padding: '0 16px',
      border: 'none',
      borderRadius: 24,
      background: active === l ? '#F8FAFC' : 'transparent',
      color: active === l ? '#0E1116' : '#64748B',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'all 200ms cubic-bezier(.4,0,.2,1)'
    },
    onMouseEnter: e => {
      if (active !== l) {
        e.currentTarget.style.background = '#F8FAFC';
        e.currentTarget.style.color = '#0E1116';
      }
    },
    onMouseLeave: e => {
      if (active !== l) {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#64748B';
      }
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate?.('ai'),
    style: {
      height: 44,
      padding: '0 20px',
      borderRadius: 24,
      border: '2px solid #0079FF',
      background: '#fff',
      color: '#0079FF',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2726"), " AI \uAE30\uD68D ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      opacity: 0.6
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate?.('contact'),
    style: {
      height: 44,
      padding: '0 24px',
      borderRadius: 24,
      border: 'none',
      background: '#0079FF',
      color: '#fff',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgb(0 121 255 / .2), 0 1px 2px rgb(0 121 255 / .2)',
      fontFamily: 'inherit'
    }
  }, "\uBB38\uC758\uD558\uAE30"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/Hero.jsx
try { (() => {
function Hero({
  onCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1156,
      margin: '0 auto',
      padding: '80px 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 9999,
      background: '#E6F3FF',
      color: '#0066D2',
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\u2726"), " MVP to AI"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
      margin: '0 0 20px',
      color: '#0A0A0A'
    }
  }, "MVP\uBD80\uD130 AI\uAE4C\uC9C0,", /*#__PURE__*/React.createElement("br", null), "\uBE44\uC988\uB2C8\uC2A4 \uC131\uC7A5 \uD30C\uD2B8\uB108"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: '#475569',
      margin: '0 0 32px',
      maxWidth: 520
    }
  }, "\uD3EC\uD150\uB7A9\uC740 MVP \uAC1C\uBC1C\uBD80\uD130 AI \uACE0\uB3C4\uD654\uAE4C\uC9C0,", /*#__PURE__*/React.createElement("br", null), "\uBE44\uC988\uB2C8\uC2A4 \uC5B8\uC5B4\uB97C \uC774\uD574\uD558\uB294 \uAE30\uC220 \uD30C\uD2B8\uB108\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onCTA?.('contact'),
    style: {
      height: 48,
      padding: '0 28px',
      borderRadius: 24,
      border: 'none',
      background: '#0079FF',
      color: '#fff',
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgb(0 121 255 / .2), 0 1px 2px rgb(0 121 255 / .2)',
      fontFamily: 'inherit'
    }
  }, "\uD504\uB85C\uC81D\uD2B8 \uC0C1\uB2F4\uD558\uAE30"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onCTA?.('portfolio'),
    style: {
      height: 48,
      padding: '0 28px',
      borderRadius: 24,
      border: '2px solid #E2E8F0',
      background: '#fff',
      color: '#334155',
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/backgrounds/hero_rocket.webp",
    alt: "",
    style: {
      width: '100%',
      height: 'auto',
      borderRadius: 16
    }
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/PortfolioGrid.jsx
try { (() => {
function PortfolioGrid({
  onOpen
}) {
  const items = [{
    id: 'poten_manager',
    title: '포텐매니저',
    tag: 'SaaS',
    img: '../../assets/portfolio/poten_manager.png'
  }, {
    id: 'the_potential',
    title: '더포텐셜',
    tag: 'Community',
    img: '../../assets/portfolio/the_potential.png'
  }, {
    id: 'cafe_around',
    title: '카페어라운드',
    tag: 'Mobile',
    img: '../../assets/portfolio/cafe_around.png'
  }, {
    id: 'kviewo',
    title: 'K-Viewo',
    tag: 'Platform',
    img: '../../assets/portfolio/kviewo.png'
  }, {
    id: 'purple_elephant',
    title: 'Purple Elephant',
    tag: 'AI',
    img: '../../assets/portfolio/purple_elephant.png'
  }, {
    id: 'robot_lawyer',
    title: 'Robot Lawyer',
    tag: 'AI · Legal',
    img: '../../assets/portfolio/robot_lawyer.png'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F8FAFB',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#64748B',
      marginBottom: 12
    }
  }, "Portfolio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#0F172A',
      margin: 0,
      lineHeight: 1.2
    }
  }, "\uD568\uAED8 \uC131\uC7A5\uD55C \uD504\uB85C\uC81D\uD2B8")), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 40,
      padding: '0 18px',
      borderRadius: 24,
      border: '1px solid #E2E8F0',
      background: '#fff',
      color: '#334155',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "\uC804\uCCB4\uBCF4\uAE30 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen?.(p.id),
    style: {
      background: '#fff',
      border: '1px solid #E2E8F0',
      borderRadius: 12,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'box-shadow 200ms'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = '0 8px 24px rgb(0 121 255 / .12)',
    onMouseLeave: e => e.currentTarget.style.boxShadow = 'none'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: '#F1F5F9'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: 9999,
      background: '#E6F3FF',
      color: '#0066D2',
      fontSize: 11,
      fontWeight: 600,
      marginBottom: 8
    }
  }, p.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0F172A',
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif'
    }
  }, p.title)))))));
}
window.PortfolioGrid = PortfolioGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/PortfolioGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  eyebrow,
  title,
  body,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      border: '1px solid #E2E8F0',
      borderRadius: 12,
      padding: 28,
      cursor: 'pointer',
      boxShadow: hover ? '0 8px 24px rgb(0 121 255 / .12)' : '0 2px 8px rgb(0 121 255 / .04)',
      transition: 'box-shadow 200ms cubic-bezier(.4,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#0079FF',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 20,
      fontWeight: 600,
      color: '#1E293B',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: '#475569',
      margin: 0
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 13,
      color: '#0079FF',
      fontWeight: 500
    }
  }, "\uC790\uC138\uD788 \uBCF4\uAE30 \u2192"));
}
function Services({
  onPick
}) {
  const items = [{
    id: 'consulting',
    eyebrow: 'IT · Biz Consulting',
    title: 'IT/비즈니스 컨설팅',
    body: '시장 진입 전략부터 기술 스택까지, 비즈니스 맥락에서 함께 설계합니다.'
  }, {
    id: 'mvp',
    eyebrow: 'MVP Development',
    title: '4주 MVP 개발',
    body: '검증된 MVP 프레임워크로 아이디어를 빠르게 제품으로 전환합니다.'
  }, {
    id: 'uxui',
    eyebrow: 'UX / UI Design',
    title: 'UX·UI 디자인',
    body: '사용자가 머무르는 인터페이스. 리서치부터 디자인 시스템까지 일관되게.'
  }, {
    id: 'platform',
    eyebrow: 'Platform Development',
    title: '커스텀 플랫폼 개발',
    body: 'SaaS, 관리자, 데이터 파이프라인까지 비즈니스에 맞춘 확장형 설계.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1156,
      margin: '0 auto',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#64748B',
      marginBottom: 12
    }
  }, "Core Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#0F172A',
      margin: '0 0 40px',
      lineHeight: 1.2
    }
  }, "\uBE44\uC988\uB2C8\uC2A4 \uC131\uC7A5\uC744 \uAC00\uC18D\uD654\uD558\uB294", /*#__PURE__*/React.createElement("br", null), "\uB124 \uAC00\uC9C0 \uD575\uC2EC \uC11C\uBE44\uC2A4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20
    }
  }, items.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.id
  }, s, {
    onClick: () => onPick?.(s.id)
  })))));
}
window.ServiceCard = ServiceCard;
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/partnership/FAQAndCTA.jsx
try { (() => {
// FAQ accordion + final CTA
function FAQ() {
  const I = window.PIcons;
  const [open, setOpen] = React.useState(0);
  const items = [{
    q: '어떤 서비스가 파트너십 대상이 되나요?',
    a: '이미 고객이 있고 매출이 발생하고 있는 서비스를 우선합니다. B2B SaaS, 커머스, 예약 플랫폼, 교육 서비스 등 다양한 분야의 파트너를 모집하고 있습니다.'
  }, {
    q: '수익 쉐어는 어떻게 정산되나요?',
    a: '월 단위 정산이 기본이며, 매출 데이터를 투명하게 공유합니다. 정확한 비율과 정산 방식은 파트너십 계약 시 협의합니다.'
  }, {
    q: '지분/수익쉐어 비율은 어떻게 결정되나요?',
    a: '비즈니스 성숙도, 시장 검증 정도, 포텐랩의 투입 리소스(개발·마케팅·PM)를 종합해 협의합니다. Growth는 3~5%, Partner는 7~12% 범위에서 스코프에 따라 조정됩니다.'
  }, {
    q: '포텐부스터가 뭔가요?',
    a: '포텐랩의 자체 개발 프레임워크로, 일반 에이전시 대비 2~5배 빠른 속도로 개발이 가능합니다. AI 코드 생성과 자동화 파이프라인을 결합한 솔루션입니다.'
  }, {
    q: '계약 기간은 어떻게 되나요?',
    a: '최소 12개월을 기본으로 하며, 성과에 따라 연장 가능합니다. Venture 모델의 경우 장기 파트너십을 전제로 합니다.'
  }, {
    q: '기존 개발팀/외주사가 있어도 협업 가능한가요?',
    a: '가능합니다. 기존 팀의 역할을 유지하면서 포텐랩은 신규 기능·리뉴얼·자동화 영역만 맡는 하이브리드 구조도 자주 운영합니다.'
  }, {
    q: '실패 시 책임은 어떻게 분배되나요?',
    a: 'Standard·Growth는 개발물 인도 기준으로 책임이 명확히 분리됩니다. Partner·Venture는 공동 리스크 모델이며, 사전에 마일스톤과 출구 조건을 명문화합니다.'
  }, {
    q: '진단 받으면 반드시 계약해야 하나요?',
    a: '아니요. 초기 진단(30~60분)은 무료이며, 적합한 모델이 없다면 솔직히 말씀드립니다. 다른 파트너사를 추천드리기도 합니다.'
  }, {
    q: '경쟁사와 동시에 파트너십을 진행하나요?',
    a: '동일 카테고리 내 파트너는 시장 중복도를 기준으로 심사합니다. 필요 시 독점 기간 조항을 계약에 포함할 수 있습니다.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F8F9FA',
      padding: '128px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    center: true,
    eyebrow: "FAQ",
    title: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map((faq, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px',
        border: 'none',
        background: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: '#0E1116',
        paddingRight: 16
      }
    }, faq.q), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#8B95A1',
        flexShrink: 0,
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 200ms cubic-bezier(.4,0,.2,1)'
      }
    }, /*#__PURE__*/React.createElement(I.Chevron, {
      s: 20
    }))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 24px 20px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: '#666',
        lineHeight: 1.7,
        margin: 0
      }
    }, faq.a)));
  }))));
}
function FinalCTA({
  onContact
}) {
  const I = window.PIcons;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '144px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, #0079FF 0%, #0055CC 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.04,
      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 'clamp(28px, 3.8vw, 44px)',
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.2,
      margin: '0 0 16px',
      letterSpacing: '-0.02em'
    }
  }, "\uC6B0\uB9AC \uC11C\uBE44\uC2A4\uB3C4", /*#__PURE__*/React.createElement("br", null), "\uD30C\uD2B8\uB108\uC2ED \uB300\uC0C1\uC77C\uAE4C\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.7)',
      maxWidth: 480,
      margin: '0 auto 40px',
      lineHeight: 1.7
    }
  }, "5\uBD84\uB9CC \uC8FC\uC2DC\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4. \uD604\uC7AC \uC0C1\uD669\uC744 \uC54C\uB824\uC8FC\uC2DC\uBA74 \uB124 \uAC00\uC9C0 \uBAA8\uB378 \uC911 \uC801\uD569\uD55C \uBC29\uD5A5\uC744 \uBA3C\uC800 \uC81C\uC548\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("button", {
    onClick: onContact,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 56,
      padding: '0 32px',
      borderRadius: 9999,
      border: 'none',
      background: '#fff',
      color: '#0079FF',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      transition: 'all 200ms cubic-bezier(.4,0,.2,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.02)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    }
  }, "5\uBD84 \uB9CC\uC5D0 \uC9C4\uB2E8\uBC1B\uAE30 ", /*#__PURE__*/React.createElement(I.ArrowRight, {
    s: 20
  }))));
}
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/partnership/FAQAndCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/partnership/Icons.jsx
try { (() => {
// Shared inline SVG icons for Partnership page — stroke 2, follows Lucide style
window.PIcons = {
  Rocket: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 18,
    height: p.s || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
  })),
  ArrowRight: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 16,
    height: p.s || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  Check: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 16,
    height: p.s || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  Refresh: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v5h-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21v-5h5"
  })),
  Bulb: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 22h4"
  })),
  Building: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22v-4h6v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 14h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 14h.01"
  })),
  Zap: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
  })),
  Youtube: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 15 5-3-5-3z"
  })),
  File: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17H8"
  })),
  Chevron: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 20,
    height: p.s || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  Code: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m16 18 6-6-6-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8 6-6 6 6 6"
  })),
  Trend: p => /*#__PURE__*/React.createElement("svg", {
    width: p.s || 22,
    height: p.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 7h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.5 8.5-5-5L2 17"
  }))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/partnership/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/partnership/PartnershipHero.jsx
try { (() => {
// Hero — split layout with rocket illustration + full-bleed blue stats banner
function PartnershipHero({
  onPrimary,
  onScrollPricing
}) {
  const I = window.PIcons;
  const R = typeof window !== 'undefined' && window.__resources || {};
  const heroIllu = R.heroIllustration || '../../assets/partnership/hero_illustration.png';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #E6F3FF 0%, #FFFFFF 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.04,
      backgroundImage: 'linear-gradient(#0079FF 1px, transparent 1px), linear-gradient(90deg, #0079FF 1px, transparent 1px)',
      backgroundSize: '64px 64px',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1156,
      margin: '0 auto',
      padding: '80px 32px 72px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
      alignItems: 'center',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      borderRadius: 9999,
      border: '1px solid rgba(0,121,255,0.3)',
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(8px)',
      color: '#0079FF',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.04em',
      marginBottom: 20,
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, /*#__PURE__*/React.createElement(I.Rocket, {
    s: 14
  }), "REVENUE SHARE PARTNERSHIP"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 'clamp(30px, 3.6vw, 48px)',
      fontWeight: 700,
      color: '#0E1116',
      lineHeight: 1.15,
      margin: '0 0 18px',
      letterSpacing: '-0.02em'
    }
  }, "\uAC80\uC99D\uB41C \uC11C\uBE44\uC2A4\uC5D0,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0079FF'
    }
  }, "\uD3EC\uD150\uB7A9\uC774 \uD568\uAED8 \uD22C\uC790"), "\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: '#475569',
      lineHeight: 1.6,
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, "\uAC1C\uBC1C\uBE44\uB294 \uCD5C\uB300 80%\uAE4C\uC9C0 \uD3EC\uD150\uB7A9\uC774 \uBD80\uB2F4\uD558\uACE0, \uC218\uC775\uC740 \uD568\uAED8 \uB098\uB215\uB2C8\uB2E4. \uC678\uC8FC\uAC00 \uC544\uB2CC, \uC9C0\uBD84\uD615 \uAE30\uC220 \uD30C\uD2B8\uB108\uC2ED\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onPrimary,
    style: {
      height: 48,
      padding: '0 26px',
      borderRadius: 9999,
      border: 'none',
      background: '#0079FF',
      color: '#fff',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      boxShadow: '0 2px 12px rgba(0,121,255,0.3)',
      fontFamily: 'inherit',
      transition: 'all 200ms cubic-bezier(.4,0,.2,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#0066DD';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,121,255,0.4)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = '#0079FF';
      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,121,255,0.3)';
    }
  }, "\uD30C\uD2B8\uB108\uC2ED \uC9C4\uB2E8\uBC1B\uAE30 ", /*#__PURE__*/React.createElement(I.ArrowRight, {
    s: 14
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onScrollPricing,
    style: {
      height: 48,
      padding: '0 26px',
      borderRadius: 9999,
      border: '1px solid #E5E7EB',
      background: '#fff',
      color: '#333',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'all 200ms cubic-bezier(.4,0,.2,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#F8F9FA';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = '#fff';
    }
  }, "\uBAA8\uB378 \uBE44\uAD50\uD558\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 380,
      aspectRatio: '1 / 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '10%',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,121,255,0.15) 0%, rgba(0,121,255,0.0) 70%)',
      filter: 'blur(8px)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: heroIllu,
    alt: "\uB85C\uCF13 \uC77C\uB7EC\uC2A4\uD2B8",
    style: {
      position: 'relative',
      width: '88%',
      height: '88%',
      objectFit: 'contain',
      animation: 'heroFloat 4.5s ease-in-out infinite'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(135deg, #0079FF 0%, #0055CC 100%)',
      padding: '44px 32px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) auto',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(20px, 2.2vw, 28px)',
      fontWeight: 600,
      margin: 0,
      lineHeight: 1.35,
      letterSpacing: '-0.01em'
    }
  }, "\uAC1C\uBC1C\uBE44 \uBD80\uB2F4\uC740 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, "1/10"), "\uB85C,", /*#__PURE__*/React.createElement("br", null), "\uC131\uC7A5 \uC18D\uB3C4\uB294 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, "10\uBC30"), "\uB85C.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, [{
    v: '80%',
    l: '최대 개발비 분담'
  }, {
    v: '2~5x',
    l: '개발 속도'
  }, {
    v: '12개월',
    l: '기본 기간'
  }].map((s, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      minWidth: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.8,
      marginTop: 4
    }
  }, s.l)), i < arr.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 36,
      background: 'rgba(255,255,255,0.25)'
    }
  })))))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @media (max-width: 880px) {
          #__hero_split { grid-template-columns: 1fr !important; }
        }
      `));
}
window.PartnershipHero = PartnershipHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/partnership/PartnershipHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/partnership/Pricing.jsx
try { (() => {
// Pricing — 4 tiers (Standard, Growth, Partner-recommended, Venture-dark)
function Pricing({
  onContact
}) {
  const I = window.PIcons;
  const plans = [{
    tier: 'Standard',
    devCost: '100%',
    rev: '0%',
    headline: '깔끔한 외주',
    desc: '일반 외주 개발 및 유지보수. 필요한 만큼, 명확하게.',
    features: ['요구사항 기반 개발', '유지보수 계약 가능', '프로젝트 단위 진행'],
    variant: 'light'
  }, {
    tier: 'Growth',
    devCost: '50%',
    rev: '3~5%',
    headline: '성장 파트너십',
    desc: '개발비 절반 부담으로 안정적인 리뉴얼과 운영 파트너십.',
    features: ['개발비 50% 절감', '월간 운영 리포트', '기술 자문 포함', '분기별 전략 미팅'],
    variant: 'light'
  }, {
    tier: 'Partner',
    devCost: '20%',
    rev: '7~12%',
    headline: '전략적 기술 파트너',
    desc: '포텐랩의 개발력과 마케팅을 당신의 서비스에 직접 투자합니다.',
    features: ['개발비 80% 절감', '포텐부스터 적용', '민썸 채널 마케팅', '비즈니스 전략 공동 수립', '전담 PM 배정'],
    variant: 'blue',
    badge: 'RECOMMENDED'
  }, {
    tier: 'Venture',
    devCost: '협의',
    rev: '지분 협의',
    headline: '공동 창업',
    desc: '검증된 비즈니스 모델에 공동 창업 수준으로 참여합니다.',
    features: ['전폭적 기술 지원', '지분 및 수익 공유', '경영 전략 참여', '장기적 동반 성장', '풀타임 리소스 투입'],
    variant: 'dark'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      padding: '128px 32px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    center: true,
    eyebrow: "PARTNERSHIP MODELS",
    title: "\uBE44\uC988\uB2C8\uC2A4\uC5D0 \uB9DE\uB294 \uBAA8\uB378\uC744 \uC120\uD0DD\uD558\uC138\uC694",
    desc: "\uAC1C\uBC1C\uBE44 \uBD80\uB2F4\uC744 \uC904\uC77C\uC218\uB85D, \uD3EC\uD150\uB7A9\uC774 \uB354 \uAE4A\uC774 \uCC38\uC5EC\uD569\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      alignItems: 'stretch'
    }
  }, plans.map(plan => {
    const dark = plan.variant !== 'light';
    const blue = plan.variant === 'blue';
    const onyx = plan.variant === 'dark';
    const surface = blue ? 'linear-gradient(135deg, #0079FF 0%, #0055CC 100%)' : onyx ? '#191F28' : '#fff';
    const borderC = blue ? 'transparent' : onyx ? 'transparent' : '#E5E7EB';
    const elevate = blue ? '0 8px 30px rgba(0,121,255,0.18)' : onyx ? '0 8px 30px rgba(0,0,0,0.12)' : 'none';
    const fg = dark ? '#fff' : '#0E1116';
    const fgSoft = dark ? 'rgba(255,255,255,0.7)' : '#8B95A1';
    const fgBody = dark ? 'rgba(255,255,255,0.7)' : '#666';
    const fgItem = dark ? 'rgba(255,255,255,0.9)' : '#333';
    const revC = blue ? '#7DD3FC' : dark ? '#fff' : '#0079FF';
    const checkC = blue ? '#7DD3FC' : dark ? 'rgba(255,255,255,0.5)' : '#0079FF';
    const costBg = dark ? 'rgba(255,255,255,0.1)' : '#F8F9FA';
    return /*#__PURE__*/React.createElement("div", {
      key: plan.tier,
      style: {
        position: 'relative',
        background: surface,
        border: `2px solid ${borderC}`,
        borderRadius: 16,
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: elevate,
        marginTop: blue ? -16 : 0,
        transition: 'all 300ms cubic-bezier(.4,0,.2,1)'
      }
    }, plan.badge && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -12,
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '4px 16px',
        borderRadius: 9999,
        background: '#0079FF',
        color: '#fff',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.15em',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }
    }, plan.badge)), /*#__PURE__*/React.createElement("p", {
      style: {
        color: fgSoft,
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        margin: '0 0 4px',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }
    }, plan.tier), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: fg,
        margin: '0 0 20px',
        letterSpacing: '-0.01em'
      }
    }, plan.headline), /*#__PURE__*/React.createElement("div", {
      style: {
        background: costBg,
        borderRadius: 12,
        padding: 16,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: fgSoft
      }
    }, "\uAC1C\uBC1C\uBE44"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: fg
      }
    }, plan.devCost)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: fgSoft
      }
    }, "\uC218\uC775 \uC250\uC5B4"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: revC
      }
    }, plan.rev))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: fgBody,
        lineHeight: 1.7,
        margin: '0 0 24px'
      }
    }, plan.desc), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 24,
        flex: 1
      }
    }, plan.features.map((f, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: checkC,
        flexShrink: 0,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      s: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: fgItem,
        lineHeight: 1.5
      }
    }, f)))), /*#__PURE__*/React.createElement("button", {
      onClick: onContact,
      style: {
        width: '100%',
        height: 44,
        borderRadius: 12,
        border: onyx ? '1px solid rgba(255,255,255,0.3)' : 'none',
        background: blue ? '#fff' : onyx ? 'rgba(255,255,255,0.15)' : '#0079FF',
        color: blue ? '#0079FF' : '#fff',
        fontSize: 14,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'all 200ms cubic-bezier(.4,0,.2,1)'
      },
      onMouseEnter: e => {
        if (blue) e.currentTarget.style.background = 'rgba(255,255,255,0.9)';else if (onyx) e.currentTarget.style.background = 'rgba(255,255,255,0.25)';else e.currentTarget.style.background = '#0066DD';
      },
      onMouseLeave: e => {
        if (blue) e.currentTarget.style.background = '#fff';else if (onyx) e.currentTarget.style.background = 'rgba(255,255,255,0.15)';else e.currentTarget.style.background = '#0079FF';
      }
    }, "\uBB38\uC758\uD558\uAE30"));
  }))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/partnership/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/partnership/Sections.jsx
try { (() => {
// Target + ValueProp + Process (3 shared-pattern sections)

function SectionLabel({
  eyebrow,
  title,
  desc,
  center
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: center ? 'center' : 'left',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#0079FF',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      margin: '0 0 12px',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 'clamp(28px, 3.8vw, 44px)',
      fontWeight: 700,
      color: '#0E1116',
      lineHeight: 1.2,
      margin: '0 0 16px',
      letterSpacing: '-0.02em'
    }
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: '#666',
      lineHeight: 1.7,
      maxWidth: 560,
      margin: center ? '0 auto' : 0
    }
  }, desc));
}
function TargetSection() {
  const I = window.PIcons;
  const R = typeof window !== 'undefined' && window.__resources || {};
  const items = [{
    img: R.targetChart || '../../assets/partnership/target_chart.png',
    title: '매출이 증명된 서비스를 운영 중인 대표님',
    desc: '이미 고객과 매출이 있지만, 제품 경험·전환율·리텐션에서 다음 단계의 성장 레버가 필요한 시점.'
  }, {
    img: R.targetBulb || '../../assets/partnership/target_card2.png',
    title: '검증된 아이디어를 빠르게 확장하려는 창업자',
    desc: '수요는 확인됐고 이제 MVP를 넘어 앱·AI·자동화까지 동시에 돌려야 하는 그로스 스테이지.'
  }, {
    img: R.targetFolder || '../../assets/partnership/target_folder.png',
    title: '코어 사업에 집중하며 기술을 맡기고 싶은 오너',
    desc: '내부 개발팀을 꾸리기엔 비효율적이지만, 단순 외주로는 품질과 속도가 나오지 않는 비즈니스.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F8F9FA',
      padding: '112px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    eyebrow: "WHO IS THIS FOR?",
    title: "\uC774\uB7F0 \uBD84\uC744 \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4",
    desc: "\uD55C \uAC00\uC9C0\uB77C\uB3C4 \uD574\uB2F9\uB41C\uB2E4\uBA74, \uD3EC\uD150\uB7A9\uC774 \uD568\uAED8 \uD22C\uC790\uD560 \uC218 \uC788\uB294 \uD30C\uD2B8\uB108\uC785\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #E6F3FF 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28,
      boxShadow: '0 8px 24px rgba(0,121,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.img,
    alt: "",
    style: {
      width: 88,
      height: 88,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#0E1116',
      margin: '0 0 12px',
      letterSpacing: '-0.01em',
      maxWidth: 280,
      lineHeight: 1.4
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#666',
      lineHeight: 1.7,
      margin: 0,
      maxWidth: 300
    }
  }, t.desc))))));
}
function ValueProp() {
  const I = window.PIcons;
  const items = [{
    Icon: I.Zap,
    iconBg: '#E6F3FF',
    iconFg: '#0079FF',
    title: '압축 개발 사이클',
    tag: 'Velocity',
    tagColor: '#0079FF',
    desc: '자체 프레임워크 포텐부스터와 AI 파이프라인으로 MVP부터 운영까지의 사이클을 압축합니다. 빠르게 출시하고, 데이터로 다음 결정을 내립니다.'
  }, {
    Icon: I.Bulb,
    iconBg: '#E6F3FF',
    iconFg: '#0079FF',
    title: '밀착 파트너 운영',
    tag: 'Partnership',
    tagColor: '#0079FF',
    desc: '주간 스탠드업·월간 리포트·분기 전략 미팅으로 지속 연결됩니다. 전담 PM이 배정되어 런칭 이후에도 한 팀처럼 제품을 움직입니다.'
  }, {
    Icon: I.Code,
    iconBg: '#E6F3FF',
    iconFg: '#0079FF',
    title: 'AX 운영 자동화',
    tag: 'AI Operations',
    tagColor: '#0079FF',
    desc: '고객 지원·콘텐츠 제작·백오피스의 반복 업무를 AI 워크플로우로 대체합니다. 인력 확장 없이 운영을 스케일업할 수 있습니다.'
  }, {
    Icon: I.Trend,
    iconBg: '#E6F3FF',
    iconFg: '#0079FF',
    title: '비즈니스 공동 고민',
    tag: 'Business Context',
    tagColor: '#0079FF',
    desc: '외주 엔지니어링이 아닌 경영 파트너로 일합니다. 시장·고객·수익 구조까지 같이 이해하고, 제품 결정에 비즈니스 맥락을 더합니다.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F8F9FA',
      padding: '128px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    eyebrow: "WHY POTENLAB?",
    title: "\uD3EC\uD150\uB7A9\uB9CC\uC758 \uBB34\uAE30",
    desc: "\uAC1C\uBC1C\uB9CC \uB118\uAE30\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC18D\uB3C4\xB7\uBC00\uCC29\xB7\uC6B4\uC601 \uC790\uB3D9\uD654\xB7\uBE44\uC988\uB2C8\uC2A4 \uC774\uD574\uAE4C\uC9C0 \uD3EC\uD150\uB7A9\uC774 \uD568\uAED8 \uCC45\uC784\uC9C0\uB294 4\uAC00\uC9C0 \uB808\uBC84."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: 16,
      padding: 28,
      transition: 'all 300ms cubic-bezier(.4,0,.2,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(0,121,255,0.4)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,121,255,0.08)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = '#E5E7EB';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: t.iconBg,
      color: t.iconFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(t.Icon, {
    s: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#0E1116',
      margin: '0 0 6px',
      letterSpacing: '-0.01em'
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: t.tagColor,
      fontWeight: 500,
      margin: '0 0 14px'
    }
  }, t.tag), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#666',
      lineHeight: 1.7,
      margin: 0
    }
  }, t.desc))))));
}
function Process() {
  const I = window.PIcons;
  const steps = [{
    step: '01',
    Icon: I.File,
    title: '무료 진단',
    desc: '30~60분 미팅으로 비즈니스·기술 현황과 적합한 파트너십 모델을 함께 진단합니다.'
  }, {
    step: '02',
    Icon: I.Code,
    title: '스코프 합의',
    desc: '투자 범위·수익쉐어·KPI·출구 조건을 계약서에 명문화합니다.'
  }, {
    step: '03',
    Icon: I.Rocket,
    title: '공동 빌드',
    desc: '포텐부스터로 제품을 만들고, 민썸 채널로 초기 사용자를 데려옵니다.'
  }, {
    step: '04',
    Icon: I.Trend,
    title: '지속 성장',
    desc: '월간 리포트와 분기 전략 미팅으로 레버를 조정하며 수익을 함께 키웁니다.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '128px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    center: true,
    eyebrow: "PROCESS",
    title: "\uD30C\uD2B8\uB108\uC2ED \uC9C4\uD589 \uACFC\uC815"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0,
      position: 'relative'
    }
  }, steps.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '24px 16px'
    }
  }, i < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 42,
      left: 'calc(50% + 28px)',
      width: 'calc(100% - 56px)',
      height: 2,
      background: 'linear-gradient(90deg, rgba(0,121,255,0.3), rgba(0,121,255,0.1))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: '#0079FF',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      boxShadow: '0 4px 16px rgba(0,121,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement(item.Icon, {
    s: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#0E1116',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, item.step)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#0E1116',
      margin: '0 0 8px',
      letterSpacing: '-0.01em'
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#666',
      lineHeight: 1.7,
      margin: 0,
      maxWidth: 200
    }
  }, item.desc))))));
}
window.TargetSection = TargetSection;
window.ValueProp = ValueProp;
window.Process = Process;
window.SectionLabel = SectionLabel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/partnership/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/potenlab/partnership/Spectrum.jsx
try { (() => {
// Participation Spectrum — three visualization modes (graph / slider / matrix)
// Shows the core insight: dev-cost ↓ as Potenlab involvement ↑
// Shared data
const _TIERS = [{
  tier: 'Standard',
  headline: '깔끔한 외주',
  devCost: 100,
  devLabel: '100%',
  rev: '0%',
  involvement: 10,
  color: '#94A3B8'
}, {
  tier: 'Growth',
  headline: '성장 파트너십',
  devCost: 50,
  devLabel: '50%',
  rev: '3~5%',
  involvement: 40,
  color: '#60A5FA'
}, {
  tier: 'Partner',
  headline: '전략적 기술 파트너',
  devCost: 20,
  devLabel: '20%',
  rev: '7~12%',
  involvement: 75,
  color: '#0079FF'
}, {
  tier: 'Venture',
  headline: '공동 창업',
  devCost: 0,
  devLabel: '협의',
  rev: '지분 협의',
  involvement: 100,
  color: '#0E1116'
}];
const _MATRIX_ROWS = [{
  key: 'devCost',
  label: '개발비',
  fmt: t => t.devLabel
}, {
  key: 'rev',
  label: '수익 쉐어',
  fmt: t => t.rev
}, {
  key: 'involvement',
  label: '포텐랩 참여도',
  fmt: t => t.involvement + '%'
}, {
  key: 'marketing',
  label: '민썸 채널 마케팅',
  fmt: t => ['—', '—', '✓', '✓'][_TIERS.indexOf(t)]
}, {
  key: 'pm',
  label: '전담 PM',
  fmt: t => ['—', '공유', '전담', '풀타임'][_TIERS.indexOf(t)]
}, {
  key: 'contract',
  label: '계약 형태',
  fmt: t => ['프로젝트', '월간', '연간+리포트', '공동 창업'][_TIERS.indexOf(t)]
}];

// ───────────────── mode: graph (static spectrum chart) ─────────────────
function SpectrumGraph() {
  // X = dev-cost (100 → 0),  Y = potenlab involvement.
  // Draw axes + a diagonal curve through the 4 tier dots.
  const W = 880,
    H = 320,
    padL = 72,
    padR = 48,
    padT = 32,
    padB = 56;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const xFromDev = dev => padL + (100 - dev) / 100 * innerW; // invert X
  const yFromInv = inv => padT + (100 - inv) / 100 * innerH;
  const pts = _TIERS.map(t => ({
    t,
    x: xFromDev(t.devCost),
    y: yFromInv(t.involvement)
  }));
  const pathD = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p.x + ',' + p.y).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, [0, 25, 50, 75, 100].map(v => /*#__PURE__*/React.createElement("line", {
    key: 'hy' + v,
    x1: padL,
    y1: yFromInv(v),
    x2: W - padR,
    y2: yFromInv(v),
    stroke: "#E5E7EB",
    strokeWidth: "1",
    strokeDasharray: v === 0 || v === 100 ? '0' : '3,4'
  })), [100, 75, 50, 25, 0].map(v => /*#__PURE__*/React.createElement("line", {
    key: 'vx' + v,
    x1: xFromDev(v),
    y1: padT,
    x2: xFromDev(v),
    y2: H - padB,
    stroke: "#E5E7EB",
    strokeWidth: "1",
    strokeDasharray: v === 0 || v === 100 ? '0' : '3,4'
  })), /*#__PURE__*/React.createElement("text", {
    x: W / 2,
    y: H - 14,
    textAnchor: "middle",
    fontSize: "12",
    fill: "#8B95A1",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    letterSpacing: "0.08em"
  }, "\uAC1C\uBC1C\uBE44 \uBD80\uB2F4  \u2192  \uB0AE\uC744\uC218\uB85D \uD3EC\uD150\uB7A9 \uCC38\uC5EC \u2191"), /*#__PURE__*/React.createElement("text", {
    x: 16,
    y: H / 2,
    textAnchor: "middle",
    fontSize: "12",
    fill: "#8B95A1",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    transform: `rotate(-90 16 ${H / 2})`,
    letterSpacing: "0.08em"
  }, "\uD3EC\uD150\uB7A9 \uCC38\uC5EC\uB3C4"), [100, 50, 20, 0].map((v, i) => /*#__PURE__*/React.createElement("text", {
    key: 'xt' + v,
    x: xFromDev(v),
    y: H - padB + 18,
    textAnchor: "middle",
    fontSize: "11",
    fill: "#64748B"
  }, v === 0 ? '협의' : v + '%')), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "spectrumLine",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#94A3B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "45%",
    stopColor: "#0079FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0E1116"
  }))), /*#__PURE__*/React.createElement("path", {
    d: pathD,
    fill: "none",
    stroke: "url(#spectrumLine)",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: p.t.tier
  }, /*#__PURE__*/React.createElement("circle", {
    cx: p.x,
    cy: p.y,
    r: p.t.tier === 'Partner' ? 14 : 10,
    fill: "#fff",
    stroke: p.t.color,
    strokeWidth: p.t.tier === 'Partner' ? 4 : 3
  }), p.t.tier === 'Partner' && /*#__PURE__*/React.createElement("circle", {
    cx: p.x,
    cy: p.y,
    r: 22,
    fill: "none",
    stroke: p.t.color,
    strokeOpacity: "0.25",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: p.x,
    y: p.y - (p.t.tier === 'Partner' ? 32 : 24),
    textAnchor: "middle",
    fontSize: "13",
    fontWeight: "700",
    fill: p.t.color,
    fontFamily: "Plus Jakarta Sans, sans-serif",
    letterSpacing: "0.1em"
  }, p.t.tier.toUpperCase()), /*#__PURE__*/React.createElement("text", {
    x: p.x,
    y: p.y + (p.t.tier === 'Partner' ? 34 : 28),
    textAnchor: "middle",
    fontSize: "12",
    fill: "#0E1116",
    fontWeight: "600"
  }, p.t.headline), /*#__PURE__*/React.createElement("text", {
    x: p.x,
    y: p.y + (p.t.tier === 'Partner' ? 50 : 44),
    textAnchor: "middle",
    fontSize: "11",
    fill: "#64748B"
  }, "\uC218\uC775\uC250\uC5B4 ", p.t.rev)))));
}

// ───────────────── mode: slider (interactive) ─────────────────
function SpectrumSlider() {
  const [dev, setDev] = React.useState(20);
  // pick nearest tier
  const tier = _TIERS.reduce((best, t) => Math.abs(t.devCost - dev) < Math.abs(best.devCost - dev) ? t : best, _TIERS[0]);
  const involvement = 100 - dev;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#8B95A1',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, "\uAC1C\uBC1C\uBE44 \uBD80\uB2F4"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#0E1116',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, dev, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 999,
      background: '#F1F5F9',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: dev + '%',
      background: 'linear-gradient(90deg, #94A3B8, #64748B)',
      transition: 'width 200ms cubic-bezier(.4,0,.2,1)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#0079FF',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, "\uD3EC\uD150\uB7A9 \uCC38\uC5EC\uB3C4"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#0079FF',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, involvement, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 999,
      background: '#F1F5F9',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: involvement + '%',
      background: 'linear-gradient(90deg, #60A5FA, #0079FF)',
      transition: 'width 200ms cubic-bezier(.4,0,.2,1)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '8px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: dev,
    onChange: e => setDev(+e.target.value),
    style: {
      width: '100%',
      accentColor: '#0079FF'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, _TIERS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.tier,
    onClick: () => setDev(t.devCost),
    style: {
      background: 'transparent',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: t.tier === tier.tier ? t.color : '#CBD5E1',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      transition: 'color 200ms cubic-bezier(.4,0,.2,1)'
    }
  }, t.tier.toUpperCase())))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: tier.tier === 'Venture' ? '#191F28' : tier.tier === 'Partner' ? 'linear-gradient(135deg, #0079FF 0%, #0055CC 100%)' : '#fff',
      color: tier.tier === 'Venture' || tier.tier === 'Partner' ? '#fff' : '#0E1116',
      border: tier.tier === 'Venture' || tier.tier === 'Partner' ? 'none' : '1px solid #E5E7EB',
      borderRadius: 16,
      padding: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      boxShadow: tier.tier === 'Partner' ? '0 8px 30px rgba(0,121,255,0.2)' : 'none',
      transition: 'all 300ms cubic-bezier(.4,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      margin: '0 0 6px',
      opacity: 0.7,
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, "\uD604\uC7AC \uC120\uD0DD \uBAA8\uB378"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, tier.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: '4px 0 0',
      opacity: 0.8
    }
  }, tier.tier, " \xB7 \uC218\uC775\uC250\uC5B4 ", tier.rev)), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 44,
      padding: '0 24px',
      borderRadius: 9999,
      border: 'none',
      background: tier.tier === 'Venture' || tier.tier === 'Partner' ? '#fff' : '#0079FF',
      color: tier.tier === 'Venture' || tier.tier === 'Partner' ? tier.color : '#fff',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'inherit',
      whiteSpace: 'nowrap'
    }
  }, "\uC774 \uBAA8\uB378\uB85C \uC0C1\uB2F4\uD558\uAE30 \u2192")));
}

// ───────────────── mode: matrix (comparison table) ─────────────────
function SpectrumMatrix() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      border: '1px solid #E5E7EB',
      borderRadius: 16,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '20px 24px',
      background: '#F8F9FA',
      borderBottom: '1px solid #E5E7EB',
      fontSize: 12,
      fontWeight: 700,
      color: '#8B95A1',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      width: 180
    }
  }, "\uD56D\uBAA9"), _TIERS.map(t => {
    const isPartner = t.tier === 'Partner';
    return /*#__PURE__*/React.createElement("th", {
      key: t.tier,
      style: {
        padding: '20px 16px',
        background: isPartner ? 'linear-gradient(135deg, #0079FF 0%, #0055CC 100%)' : t.tier === 'Venture' ? '#191F28' : '#F8F9FA',
        color: isPartner || t.tier === 'Venture' ? '#fff' : '#0E1116',
        borderBottom: '1px solid #E5E7EB',
        textAlign: 'left',
        position: 'relative'
      }
    }, isPartner && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 6,
        right: 8,
        padding: '2px 8px',
        borderRadius: 9999,
        background: '#fff',
        color: '#0079FF',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.15em',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }
    }, "RECOMMENDED"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        opacity: 0.7,
        marginBottom: 4,
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }
    }, t.tier), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: '-0.01em'
      }
    }, t.headline));
  }))), /*#__PURE__*/React.createElement("tbody", null, _MATRIX_ROWS.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.key,
    style: {
      background: i % 2 === 0 ? '#fff' : '#FAFBFC'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 24px',
      fontWeight: 600,
      color: '#334155',
      borderBottom: '1px solid #F1F5F9'
    }
  }, row.label), _TIERS.map(t => {
    const val = row.fmt(t);
    const isPartner = t.tier === 'Partner';
    return /*#__PURE__*/React.createElement("td", {
      key: t.tier,
      style: {
        padding: '16px',
        color: isPartner ? '#0079FF' : t.tier === 'Venture' ? '#0E1116' : '#0E1116',
        fontWeight: isPartner ? 700 : 500,
        borderBottom: '1px solid #F1F5F9',
        background: isPartner ? 'rgba(0,121,255,0.04)' : 'transparent'
      }
    }, val);
  }))))));
}

// ───────────────── wrapper with mode tabs + TWEAKS sync ─────────────────
function ParticipationSpectrum({
  mode = 'graph',
  onModeChange
}) {
  const modes = [{
    id: 'graph',
    label: 'Graph'
  }, {
    id: 'slider',
    label: 'Slider'
  }, {
    id: 'matrix',
    label: 'Matrix'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px 40px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1156,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#0079FF',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      margin: '0 0 12px',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }
  }, "HOW INVOLVEMENT SCALES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Plus Jakarta Sans, Pretendard, sans-serif',
      fontSize: 'clamp(24px, 3vw, 36px)',
      fontWeight: 700,
      color: '#0E1116',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      margin: '0 0 8px'
    }
  }, "\uAC1C\uBC1C\uBE44\uB97C \uC904\uC77C\uC218\uB85D, \uD3EC\uD150\uB7A9\uC774 \uB354 \uAE4A\uC774 \uCC38\uC5EC\uD569\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#666',
      lineHeight: 1.7,
      margin: 0,
      maxWidth: 620
    }
  }, "\uB2E8\uC21C \uC678\uC8FC\uC5D0\uC11C \uACF5\uB3D9 \uCC3D\uC5C5\uAE4C\uC9C0 \u2014 \uB124 \uAC1C\uC758 \uBAA8\uB378\uC774 \uD55C \uC2A4\uD399\uD2B8\uB7FC \uC704\uC5D0 \uB193\uC5EC \uC788\uC5B4\uC694.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#F1F5F9',
      borderRadius: 9999,
      padding: 4,
      gap: 2
    }
  }, modes.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => onModeChange?.(m.id),
    style: {
      height: 36,
      padding: '0 18px',
      border: 'none',
      borderRadius: 9999,
      background: mode === m.id ? '#fff' : 'transparent',
      color: mode === m.id ? '#0079FF' : '#64748B',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'inherit',
      boxShadow: mode === m.id ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 200ms cubic-bezier(.4,0,.2,1)'
    }
  }, m.label)))), mode === 'graph' && /*#__PURE__*/React.createElement(SpectrumGraph, null), mode === 'slider' && /*#__PURE__*/React.createElement(SpectrumSlider, null), mode === 'matrix' && /*#__PURE__*/React.createElement(SpectrumMatrix, null)));
}
window.ParticipationSpectrum = ParticipationSpectrum;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/potenlab/partnership/Spectrum.jsx", error: String((e && e.message) || e) }); }

})();
