---
layout: page
title: About
permalink: /about/
---

<style>
.about-creative { --about-ink:#302e3c; --about-muted:#807b8e; --about-accent:#7965bd; --about-line:#e8e3f0; max-width:720px; color:var(--about-ink); }
.about-creative * { box-sizing:border-box; }
.about-creative .eyebrow { margin:0 0 1.15rem; color:var(--about-accent); font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; }
.about-creative .intro { margin:0 0 1.2rem; font-size:clamp(1.8rem,5vw,2.9rem); line-height:1.38; font-weight:650; letter-spacing:-.055em; color:var(--about-ink); }
.about-creative .intro em { font-style:normal; color:var(--about-accent); }
.about-creative .lead { margin:0 0 3.5rem; max-width:37rem; font-size:1rem; line-height:1.9; color:#625e70; }
.about-creative section { margin:0 0 3rem; }
.about-creative .section-heading { display:flex; align-items:baseline; gap:.8rem; margin:0 0 1.1rem; font-size:1.1rem; line-height:1.5; letter-spacing:-.025em; color:var(--about-ink); }
.about-creative .section-heading::after { content:""; flex:1; height:1px; background:var(--about-line); }
.about-creative .project-list, .about-creative .skill-list, .about-creative .contact-list { list-style:none; margin:0; padding:0; }
.about-creative .project-list li { padding:.85rem 0; border-bottom:1px solid var(--about-line); }
.about-creative .project-list strong { display:block; font-weight:600; line-height:1.55; }
.about-creative .project-list span { display:block; margin-top:.2rem; color:var(--about-muted); font-size:.86rem; line-height:1.6; }
.about-creative .skill-group { display:grid; grid-template-columns:120px minmax(0,1fr); gap:1rem; padding:.8rem 0; border-bottom:1px solid var(--about-line); }
.about-creative .skill-group dt { color:var(--about-muted); font-size:.84rem; }
.about-creative .skill-group dd { margin:0; line-height:1.75; font-size:.94rem; }
.about-creative .contact-list li { margin:.6rem 0; }
.about-creative a { color:var(--about-accent); text-decoration:none; border-bottom:1px solid transparent; transition:border-color .18s ease; }
.about-creative a:hover, .about-creative a:focus-visible { border-bottom-color:currentColor; }
.about-creative .closing { margin:3rem 0 0; color:var(--about-muted); font-size:.86rem; }
@media(max-width:520px) { .about-creative .skill-group { grid-template-columns:1fr; gap:.15rem; } .about-creative .lead { margin-bottom:2.5rem; } }
</style>

<div class="about-creative">
  <p class="eyebrow">안녕하세요 혜풍입니다.</p>
  <h1 class="intro">코드를 쓰고<br>세계를 만들고<br><em>그 사이를 탐색합니다.</em></h1>
  <p class="lead">소프트웨어 아티스트이자 풀스택 개발자입니다. 기술을 기능을 구현하는 수단이자 새로운 경험을 표현하는 재료로 바라봅니다. 인터랙티브 콘텐츠를 만들고 개발하며 떠오른 생각과 실험을 이곳에 기록합니다.</p>

  <section aria-labelledby="about-projects">
    <h2 id="about-projects" class="section-heading">Things I've made</h2>
    <ul class="project-list">
      <li><strong>Worldplay</strong><span>Interactive Contents Realgame Platform</span></li>
      <li><strong>Worldplay Studio</strong><span>Play Engine</span></li>
      <li><strong>Memento</strong></li>
    </ul>
  </section>

  <section aria-labelledby="about-skills">
    <h2 id="about-skills" class="section-heading">Things I work with</h2>
    <dl class="skill-list">
      <div class="skill-group"><dt>Languages</dt><dd>HTML · CSS · JavaScript · TypeScript · Python · Java</dd></div>
      <div class="skill-group"><dt>Frameworks</dt><dd>Express.js · React · Spring · Next.js</dd></div>
      <div class="skill-group"><dt>Backends</dt><dd>Node.js · Django</dd></div>
      <div class="skill-group"><dt>Creative tools</dt><dd>Unity · Blender</dd></div>
    </dl>
  </section>

  <section aria-labelledby="about-contact">
    <h2 id="about-contact" class="section-heading">Find me elsewhere</h2>
    <ul class="contact-list">
      <li><a href="https://github.com/hyefengtech" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
      <li><a href="https://maily.so/playableip" target="_blank" rel="noopener noreferrer">세계관을 팝니다 뉴스레터 ↗</a></li>
    </ul>
    <!-- 실제 이메일 주소를 입력한 뒤 아래 주석을 해제하세요.
    <p><a href="mailto:hyefengenterprise@gmail.com">Email ↗</a></p>
    -->
  </section>

  <p class="closing">Software Artist · Fullstack Developer</p>
</div>



