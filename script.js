// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.left=mx+'px'; cursor.style.top=my+'px'; });
(function animRing(){ rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animRing); })();

const translations = {
  ar: {
    navServices:'خدماتنا', navPortfolio:'أعمالنا', navWhy:'لماذا نحن', navProcess:'آلية العمل', navContact:'تواصل معنا',
    navCta:'اطلب استشارة',
    heroBadge:'PREMIUM DIGITAL STUDIO — CAIRO',
    heroTitle:'نحن لا نصمم واجهات فقط<br><span class="line-gold">نبني المستقبل الرقمي</span><br>لعملك',
    heroSub:'Crafting Premium Digital Experiences that Convert',
    heroBtn1:'ابدأ مشروعك معنا ←', heroBtn2:'استعرض أعمالنا',
    servicesTag:'WHAT WE DO', servicesTitle:'خدماتنا المتكاملة', servicesDesc:'نقدم حلولاً رقمية فاخرة مبنية على فهم عميق لأهداف عملك وهوية علامتك التجارية.',
    service1Name:'تصميم واجهات المستخدم', service1Desc:'تصاميم UI/UX مخصصة بالكامل لمواقعك وتطبيقاتك ولوحات التحكم التفاعلية. نعمل على Figma بنظام تصميم متكامل.',
    service2Name:'تطوير المواقع والبرمجة', service2Desc:'تحويل تصاميمنا إلى كود نظيف وأداء عالٍ. نتعاون مع أفضل المطورين لضمان منتج نهائي متكامل ومتجاوب.', service2Badge:'COMING SOON',
    service3Name:'هوية بصرية وبراندينج', service3Desc:'بناء هوية بصرية قوية ومتماسكة من شعار وألوان وأنماط تحمل شخصية علامتك التجارية وتميّزها في السوق.',
    portfolioFilterAll:'الكل', portfolioFilterEcommerce:'متاجر إلكترونية', portfolioFilterCompany:'مواقع شركات', portfolioFilterDashboard:'لوحات تحكم',
    portfolio1Tag:'CONCEPT — موقع عقارات', portfolio1Name:'Luxe Estates — وجهة العقار الفاخر',
    portfolio2Tag:'CONCEPT — متجر ساعات فاخرة', portfolio2Name:'Chronos — متجر الفخامة',
    portfolio3Tag:'CONCEPT — لوحة تحكم SaaS', portfolio3Name:'Analytics Pro Dashboard',
    portfolio4Tag:'CONCEPT — متجر إلكتروني', portfolio4Name:'Nova Store — تجربة تسوق فريدة',
    portfolioLink:'عرض النموذج التفاعلي',
    whyTag:'WHY VANGUARD', whyTitle:'ما الذي يجعلنا مختلفين؟', whyDesc:'لسنا مجرد مصممين نضع شاشات جميلة. نحن شركاء نجاح رقميين نفكر بمنطق الأعمال ونصنع تجارب تحوّل الزوار إلى عملاء.',
    whyStat1:'تصاميم مخصصة', whyStat2:'أول عرض أولي', whyStat3:'تعديلات مجانية', whyStat4:'ملفات Figma منظمة',
    whyFeat1Title:'فخامة بصرية لا تُنسى', whyFeat1Desc:'تصاميم مخصصة 100% تناسب هوية براندك. لا قوالب مستهلكة، كل مشروع يُعامَل كعمل فني فريد.',
    whyFeat2Title:'تسليم منظم — Design System', whyFeat2Desc:'نسلّم ملفات Figma بنظام تصميم كامل يجعل عملية التكويد أسرع بـ60% وبدون أخطاء في التفسير.',
    whyFeat3Title:'تفكير UX يزيد المبيعات', whyFeat3Desc:'نصمم رحلة المستخدم بعناية لتقليل معدل الارتداد وزيادة معدل التحويل وتجعل التصفح تجربة ممتعة وآمنة.',
    whyFeat4Title:'شفافية كاملة في التواصل', whyFeat4Desc:'تحديثات منتظمة، نسخ تفاعلية للمراجعة قبل التسليم النهائي، ولا مفاجآت في الأسعار أو المواعيد.',
    processTag:'OUR PROCESS', processTitle:'كيف نعمل معاً؟', processDesc:'أربع مراحل واضحة تضمن لك مشروعاً متكاملاً يتجاوز توقعاتك.',
    processStep1Name:'الاستكشاف والفهم', processStep1Desc:'نبدأ بجلسة مكثفة لفهم فكرتك وأهداف عملك وجمهورك المستهدف والمنافسين.',
    processStep1Tag1:'DISCOVERY', processStep1Tag2:'BRIEF', processStep1Tag3:'RESEARCH',
    processStep2Name:'التخطيط والهيكلة', processStep2Desc:'نرسم الهيكل التجريبي لكل صفحة ونضع خريطة رحلة المستخدم قبل لمس أي لون.',
    processStep2Tag1:'WIREFRAMES', processStep2Tag2:'USER FLOW', processStep2Tag3:'IA',
    processStep3Name:'التصميم البصري الفاخر', processStep3Desc:'نضع اللمسة الجمالية الكاملة: الألوان، الخطوط، التباعد، والتفاصيل الدقيقة.',
    processStep3Tag1:'UI DESIGN', processStep3Tag2:'TYPOGRAPHY', processStep3Tag3:'BRAND',
    processStep4Name:'التفاعل والتسليم', processStep4Desc:'نرسل لك نموذجاً تفاعلياً حياً قبل الاعتماد النهائي، ثم نسلّم ملفات Figma منظمة وجاهزة للتكويد.',
    processStep4Tag1:'PROTOTYPE', processStep4Tag2:'REVIEW', processStep4Tag3:'HANDOFF',
    contactTag:'GET IN TOUCH', contactTitle:'ابدأ مشروعك اليوم', contactDesc:'استشارة مجانية لا تلزمك بشيء. أخبرنا عن فكرتك وسنعود إليك خلال 24 ساعة.',
    contactLabelEmail:'البريد الإلكتروني', contactValueEmail:'hello@vanguardcode.io',
    contactLabelWhatsapp:'واتساب / تيليجرام', contactValueWhatsapp:'+20 100 000 0000',
    contactLabelHours:'ساعات العمل', contactValueHours:'السبت – الخميس · 10ص – 8م',
    contactLabelReply:'متوسط وقت الرد', contactValueReply:'أقل من 4 ساعات عمل',
    formLabelName:'الاسم الكريم', formNamePlaceholder:'محمد أحمد',
    formLabelEmail:'البريد الإلكتروني', formEmailPlaceholder:'name@company.com',
    formLabelSite:'رابط شركتك الحالية', formSitePlaceholder:'www.yoursite.com (اختياري)',
    formLabelBudget:'الميزانية المتوقعة', budgetOptionDefault:'اختر النطاق', budgetOption1:'أقل من $500', budgetOption2:'$500 – $1,500', budgetOption3:'$1,500 – $3,000', budgetOption4:'$3,000 – $5,000', budgetOption5:'أكثر من $5,000',
    formLabelType:'نوع المشروع', typeOptionDefault:'اختر نوع المشروع', typeOption1:'موقع شركة / خدمات', typeOption2:'متجر إلكتروني', typeOption3:'تطبيق موبايل', typeOption4:'لوحة تحكم / SaaS', typeOption5:'هوية بصرية', typeOption6:'أخرى',
    formLabelMessage:'تفاصيل المشروع', formMessagePlaceholder:'أخبرنا عن فكرتك، جمهورك المستهدف، وأي مرجع تصميمي تحبه...',
    formSuccess:'✦   شكراً! تم استلام طلبك وسنتواصل معك خلال 24 ساعة.', submitBtn:'إرسال الطلب ←',
    footerLogo:'Vanguard Code', footerCopy:'© 2025 Vanguard Code. جميع الحقوق محفوظة.', footerPrivacy:'سياسة الخصوصية', footerTerms:'الشروط والأحكام'
  },
  en: {
    navServices:'Services', navPortfolio:'Portfolio', navWhy:'Why Us', navProcess:'Process', navContact:'Contact',
    navCta:'Request Consultation',
    heroBadge:'PREMIUM DIGITAL STUDIO — CAIRO',
    heroTitle:'We don’t just design interfaces<br><span class="line-gold">We build your digital future</span><br>for your business',
    heroSub:'Crafting premium digital experiences that convert visitors into customers.',
    heroBtn1:'Start your project ←', heroBtn2:'View our work',
    servicesTag:'WHAT WE DO', servicesTitle:'Integrated Services', servicesDesc:'We deliver premium digital solutions built on a deep understanding of your goals and brand identity.',
    service1Name:'UI / UX Design', service1Desc:'Custom UI/UX design for websites, mobile apps, and dashboards with a polished design system workflow.',
    service2Name:'Web Development', service2Desc:'Transform designs into clean, high-performance code with responsive, production-ready development.', service2Badge:'COMING SOON',
    service3Name:'Branding & Visual Identity', service3Desc:'Build a strong visual identity with logo, colors, and patterns that reflect your brand personality.',
    portfolioFilterAll:'All', portfolioFilterEcommerce:'E-commerce', portfolioFilterCompany:'Company Sites', portfolioFilterDashboard:'Dashboards',
    portfolio1Tag:'CONCEPT — Real Estate Site', portfolio1Name:'Luxe Estates — Luxury Property Destination',
    portfolio2Tag:'CONCEPT — Luxury Watch Store', portfolio2Name:'Chronos — Premium Watch Experience',
    portfolio3Tag:'CONCEPT — SaaS Dashboard', portfolio3Name:'Analytics Pro Dashboard',
    portfolio4Tag:'CONCEPT — E-commerce Store', portfolio4Name:'Nova Store — Unique Shopping Experience',
    portfolioLink:'View interactive demo',
    whyTag:'WHY VANGUARD', whyTitle:'What makes us different?', whyDesc:'We are not just designers of pretty screens. We are digital growth partners who build experiences that convert visitors into clients.',
    whyStat1:'Custom designs', whyStat2:'Initial concept in 48h', whyStat3:'Unlimited revisions', whyStat4:'Organized Figma files',
    whyFeat1Title:'Memorable premium visuals', whyFeat1Desc:'Custom, non-template designs crafted to fit your brand and stand out as an elegant digital experience.',
    whyFeat2Title:'Organized delivery — Design System', whyFeat2Desc:'We deliver full design systems in Figma so development is faster, cleaner, and easier to hand off.',
    whyFeat3Title:'UX thinking that boosts sales', whyFeat3Desc:'We design user journeys that reduce bounce, increase conversions, and make browsing enjoyable.',
    whyFeat4Title:'Clear communication every step', whyFeat4Desc:'Regular updates, interactive review versions, and no surprises on pricing or deadlines.',
    processTag:'OUR PROCESS', processTitle:'How we work together', processDesc:'Four clear stages to deliver a polished project that exceeds expectations.',
    processStep1Name:'Discovery & Research', processStep1Desc:'We begin with a deep kickoff session to understand your idea, goals, audience, and competitors.',
    processStep1Tag1:'DISCOVERY', processStep1Tag2:'BRIEF', processStep1Tag3:'RESEARCH',
    processStep2Name:'Planning & Structure', processStep2Desc:'We map the page structure and user journey before adding any visual design.',
    processStep2Tag1:'WIREFRAMES', processStep2Tag2:'USER FLOW', processStep2Tag3:'IA',
    processStep3Name:'Premium Visual Design', processStep3Desc:'We craft the visual design: colors, typography, spacing, and refined details.',
    processStep3Tag1:'UI DESIGN', processStep3Tag2:'TYPOGRAPHY', processStep3Tag3:'BRAND',
    processStep4Name:'Interaction & Delivery', processStep4Desc:'We deliver an interactive prototype and organized Figma files ready for development.',
    processStep4Tag1:'PROTOTYPE', processStep4Tag2:'REVIEW', processStep4Tag3:'HANDOFF',
    contactTag:'GET IN TOUCH', contactTitle:'Start your project today', contactDesc:'Free consultation with no commitment. Share your idea and we’ll get back within 24 hours.',
    contactLabelEmail:'Email', contactValueEmail:'hello@vanguardcode.io',
    contactLabelWhatsapp:'WhatsApp / Telegram', contactValueWhatsapp:'+20 100 000 0000',
    contactLabelHours:'Working hours', contactValueHours:'Sat – Thu · 10am – 8pm',
    contactLabelReply:'Average response time', contactValueReply:'Less than 4 business hours',
    formLabelName:'Full name', formNamePlaceholder:'Mohamed Ahmed',
    formLabelEmail:'Email address', formEmailPlaceholder:'name@company.com',
    formLabelSite:'Current website URL', formSitePlaceholder:'www.yoursite.com (optional)',
    formLabelBudget:'Estimated budget', budgetOptionDefault:'Choose range', budgetOption1:'Under $500', budgetOption2:'$500 – $1,500', budgetOption3:'$1,500 – $3,000', budgetOption4:'$3,000 – $5,000', budgetOption5:'More than $5,000',
    formLabelType:'Project type', typeOptionDefault:'Choose project type', typeOption1:'Company / Service Site', typeOption2:'E-commerce Store', typeOption3:'Mobile App', typeOption4:'Dashboard / SaaS', typeOption5:'Visual Identity', typeOption6:'Other',
    formLabelMessage:'Project details', formMessagePlaceholder:'Tell us about your idea, audience, and any design references you like...',
    formSuccess:'✦   Thank you! Your request has been received and we’ll reply within 24 hours.', submitBtn:'Send inquiry ←',
    footerLogo:'Vanguard Code', footerCopy:'© 2025 Vanguard Code. All rights reserved.', footerPrivacy:'Privacy Policy', footerTerms:'Terms & Conditions'
  }
};

const textElements = document.querySelectorAll('[data-i18n]');
const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');

function setLanguage(lang){
  if (!translations[lang]) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  const activeLabel = lang === 'ar' ? 'العربية' : 'English';
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.textContent.trim() === activeLabel));

  textElements.forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value === undefined) return;
    if (el.dataset.i18nHtml === 'true') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  placeholderElements.forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const value = translations[lang][key];
    if (value !== undefined) {
      el.placeholder = value;
    }
  });
}

setLanguage('ar');
document.querySelectorAll('button,a,.service-card,.portfolio-item,.why-feature,.process-step').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ ring.style.width='60px'; ring.style.height='60px'; ring.style.borderColor='rgba(200,168,75,0.8)'; });
  el.addEventListener('mouseleave',()=>{ ring.style.width='36px'; ring.style.height='36px'; ring.style.borderColor='rgba(200,168,75,0.5)'; });
});

// Particles
const pContainer = document.getElementById('particles');
for(let i=0;i<25;i++){
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random()*100+'%';
  p.style.animationDuration = (6+Math.random()*12)+'s';
  p.style.animationDelay = (-Math.random()*15)+'s';
  p.style.width = p.style.height = (1+Math.random()*2)+'px';
  pContainer.appendChild(p);
}

// Count up
function countUp(el, target, duration=1800){
  let start=0, step=target/60;
  const interval = setInterval(()=>{
    start = Math.min(start+step, target);
    el.textContent = Math.floor(start) + (el.dataset.count==98?'%':'');
    if(start>=target) clearInterval(interval);
  }, duration/60);
}
const statNums = document.querySelectorAll('.stat-num');
let counted = false;
const heroObs = new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting && !counted){ counted=true; statNums.forEach(el=>countUp(el, parseInt(el.dataset.count))); }
},{threshold:0.5});
heroObs.observe(document.getElementById('hero'));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
revealEls.forEach(el=>obs.observe(el));

// Portfolio filter
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== FORM — Backend mail =====
document.getElementById('submitBtn').addEventListener('click', async () => {
  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const siteUrl = document.getElementById('fsiteurl').value.trim();
  const budget  = document.getElementById('fbudget').value;
  const ptype   = document.getElementById('ftype').value;
  const message = document.getElementById('fmessage').value.trim();

  if (!name || !email) {
    alert('يرجى تعبئة الاسم والبريد الإلكتروني على الأقل.');
    return;
  }

  const btn = document.getElementById('submitBtn');
  btn.textContent = 'جاري الإرسال...';
  btn.disabled = true;

  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        companyUrl: siteUrl,
        budget,
        projectType: ptype,
        details: message
      })
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.ok) {
      document.getElementById('formSuccess').style.display = 'block';
      btn.style.display = 'none';
    } else {
      throw new Error(data?.message || 'Failed to send');
    }
  } catch (e) {
    console.error(e);
    btn.textContent = 'حدث خطأ، حاول مرة أخرى';
    btn.disabled = false;
  }
});


// Stagger
document.querySelectorAll('.service-card').forEach((el,i)=>{ el.style.transitionDelay=i*0.1+'s'; });
document.querySelectorAll('.process-step').forEach((el,i)=>{ el.style.transitionDelay=i*0.12+'s'; });