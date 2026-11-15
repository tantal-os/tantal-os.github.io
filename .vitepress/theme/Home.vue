<script setup lang="ts">
import { computed, h } from 'vue'
import { useData, withBase } from 'vitepress'
import { VPButton, VPImage } from 'vitepress/theme-without-fonts'
import icons from './icons'

const { frontmatter } = useData()
const t = computed(() => frontmatter.value.landing)

const Icon = (p: { n: string }) =>
  h('svg', { viewBox: '0 -960 960 960', 'aria-hidden': 'true' }, h('path', { d: icons[p.n] }))
</script>

<template>
  <div class="landing">
    <section class="hero">
      <div class="hero-text">
        <h1>
          <span v-for="line in t.hero.title" :key="line">{{ line }}</span>
        </h1>
        <p class="lead">{{ t.hero.text }}</p>
        <div class="actions">
          <VPButton :text="t.hero.follow" href="https://github.com/tantal-os" />
          <VPButton theme="alt" :text="t.hero.apps" href="#apps" />
        </div>
        <p class="base">
          {{ t.hero.base }} <a :href="withBase(t.hero.baseLink)">{{ t.hero.baseText }}</a>
        </p>
      </div>

      <div class="art">
        <VPImage :image="{ light: '/favicon.svg', dark: '/logo.svg', alt: t.hero.logo }" />
      </div>
    </section>

    <section id="apps" class="section">
      <h2>{{ t.apps.title }}</h2>
      <p class="lead">{{ t.apps.text }}</p>
      <ul class="apps">
        <li v-for="a in t.apps.list" :key="a.page">
          <a :href="withBase(t.apps.base + a.page)">
            <span class="app-icon"><Icon :n="a.icon" /></span>{{ a.name }}
          </a>
        </li>
      </ul>
      <p class="note">{{ t.apps.status }}</p>
    </section>

    <section class="section">
      <h2>{{ t.ai.title }}</h2>
      <p class="lead">{{ t.ai.text }}</p>
      <ul class="points">
        <li v-for="p in t.ai.points" :key="p.icon">
          <span class="point-icon"><Icon :n="p.icon" /></span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </li>
      </ul>
      <div class="diagram" role="img" :aria-label="t.ai.diagram.label">
        <div class="node">
          <span class="node-icon"><Icon n="folder" /></span>
          <b>{{ t.ai.diagram.data }}</b><small>{{ t.ai.diagram.dataNote }}</small>
        </div>
        <span class="link"><Icon n="swap_horiz" /></span>
        <div class="node core">
          <span class="node-icon"><Icon n="memory" /></span>
          <b>{{ t.ai.diagram.core }}</b><small>{{ t.ai.diagram.coreNote }}</small>
        </div>
        <span class="link cut"><Icon n="close" /></span>
        <div class="node off">
          <span class="node-icon"><Icon n="cloud" /></span>
          <b>{{ t.ai.diagram.cloud }}</b><small>{{ t.ai.diagram.cloudNote }}</small>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="join">
        <h2>{{ t.join.title }}</h2>
        <p>{{ t.join.text }}</p>
        <div class="actions">
          <VPButton text="GitHub" href="https://github.com/tantal-os" />
          <VPButton theme="alt" :text="t.join.contact" :href="t.join.contactLink" />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.landing {
  margin: 0 auto;
  max-width: 1152px;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .landing {
    padding: 0 48px;
  }
}

.landing svg {
  fill: currentColor;
}

.landing h2 {
  line-height: 1.1;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 750;
  font-stretch: 108%;
  letter-spacing: -0.01em;
}

/* 36em keeps lines at about 80 characters */
.landing .lead {
  margin-top: 20px;
  max-width: 36em;
  line-height: 1.6;
  font-size: clamp(17px, 2vw, 19px);
  color: var(--md-on-surface-variant);
}

.landing .actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.landing .hero {
  display: grid;
  align-items: center;
  gap: 56px;
  padding: 48px 0 32px;
}

@media (min-width: 960px) {
  .landing .hero {
    grid-template-columns: 1fr auto;
    padding: 72px 64px 32px 0;
  }
}

.landing h1 {
  line-height: 1.05;
  font-size: clamp(40px, 6.4vw, 68px);
  font-weight: 800;
  font-stretch: 112.5%;
  letter-spacing: -0.02em;
}

.landing h1 span {
  display: block;
  width: fit-content;
}

.landing h1 span:last-child {
  color: transparent;
  background: var(--tantal);
  background-clip: text;
  -webkit-background-clip: text;
}

.landing .base {
  margin-top: 28px;
  max-width: 36em;
  line-height: 1.6;
  font-size: 15px;
  color: var(--md-on-surface-variant);
}

.landing .base a {
  font-weight: 600;
  color: var(--md-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.landing .art {
  position: relative;
  justify-self: center;
  width: clamp(192px, 30vw, 320px);
  aspect-ratio: 1;
}

/* two container-colored shapes peeking from behind the logo */
.landing .art::before,
.landing .art::after {
  position: absolute;
  content: '';
}

.landing .art::before {
  top: -8%;
  right: -26%;
  border-radius: 999px;
  width: 100%;
  height: 54%;
  background-color: var(--md-primary-container);
  transform: rotate(-24deg);
}

.landing .art::after {
  bottom: -12%;
  left: -16%;
  border-radius: 50%;
  width: 48%;
  height: 48%;
  background-color: var(--md-tertiary-container);
}

.landing .art img {
  position: relative;
  z-index: 1;
  width: 100%;
}

.landing .section {
  padding-top: 112px;
}

.landing .apps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: 32px 16px;
  margin-top: 48px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
}

.landing .app-icon {
  display: grid;
  place-items: center;
  margin: 0 auto 12px;
  border-radius: 50%;
  width: 76px;
  height: 76px;
  color: var(--md-on-primary-container);
  background-color: var(--md-primary-container);
  transition: border-radius var(--md-spring);
}

.landing .apps a {
  display: block;
  color: inherit;
}

.landing .apps a:hover .app-icon,
.landing .apps a:focus-visible .app-icon {
  border-radius: 24px;
}

.landing .apps li:nth-child(3n + 2) .app-icon {
  color: var(--md-on-tertiary-container);
  background-color: var(--md-tertiary-container);
}

.landing .apps li:nth-child(3n) .app-icon {
  color: var(--md-on-secondary-container);
  background-color: var(--md-secondary-container);
}

.landing .app-icon svg {
  width: 36px;
  height: 36px;
}

.landing .note {
  margin-top: 40px;
  max-width: 36em;
  line-height: 1.6;
  font-size: 15px;
  color: var(--md-on-surface-variant);
}

.landing .points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 48px;
}

.landing .points li {
  border-radius: 28px;
  padding: 28px;
  background-color: var(--md-surface-container);
}

.landing .point-icon {
  display: grid;
  place-items: center;
  border-radius: 16px;
  width: 56px;
  height: 56px;
  color: var(--md-on-primary-container);
  background-color: var(--md-primary-container);
}

.landing .point-icon svg {
  width: 28px;
  height: 28px;
}

.landing .points h3 {
  margin-top: 24px;
  font-size: 20px;
  font-weight: 700;
  font-stretch: 105%;
}

.landing .points p {
  margin-top: 8px;
  line-height: 1.6;
  font-size: 15px;
  color: var(--md-on-surface-variant);
}

.landing .diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  border-radius: 28px;
  padding: 40px 24px;
  background-color: var(--md-surface-container-low);
}

@media (min-width: 768px) {
  .landing .diagram {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
  }
}

.landing .node {
  display: grid;
  justify-items: center;
  width: 150px;
  text-align: center;
}

.landing .node-icon {
  display: grid;
  place-items: center;
  margin-bottom: 12px;
  border-radius: 24px;
  width: 72px;
  height: 72px;
  color: var(--md-on-secondary-container);
  background-color: var(--md-secondary-container);
}

.landing .node.core .node-icon {
  border-radius: 50%;
  color: var(--md-on-primary);
  background-color: var(--md-primary);
}

.landing .node.off {
  color: var(--md-on-surface-variant);
}

.landing .node.off .node-icon {
  color: var(--md-outline);
  background-color: var(--md-surface-container-high);
}

.landing .node-icon svg {
  width: 36px;
  height: 36px;
}

.landing .node small {
  font-size: 14px;
  color: var(--md-on-surface-variant);
}

.landing .link {
  flex: none;
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  color: var(--md-primary);
}

.landing .link svg {
  width: 40px;
  height: 40px;
}

/* a dashed connection with a cross over it */
.landing .link.cut {
  position: relative;
  color: var(--md-error);
}

.landing .link.cut::before {
  position: absolute;
  inset: 50% 4px auto;
  border-top: 3px dashed var(--md-outline);
  translate: 0 -50%;
  content: '';
}

.landing .link.cut svg {
  position: relative;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: var(--md-surface-container-low);
}

@media (max-width: 767px) {
  .landing .link {
    transform: rotate(90deg);
  }
}

.landing .join {
  border-radius: 40px;
  padding: clamp(32px, 6vw, 64px);
  color: var(--md-surface-container-lowest);
  background: var(--tantal);
}

.landing .join p {
  margin-top: 16px;
  max-width: 36em;
  line-height: 1.6;
  font-size: clamp(17px, 2vw, 19px);
}

.landing .join .VPButton.brand {
  color: var(--md-on-surface);
  background-color: var(--md-surface);
}

.landing .join .VPButton.alt {
  border: 2px solid currentColor;
  color: inherit;
  background-color: transparent;
}
</style>
