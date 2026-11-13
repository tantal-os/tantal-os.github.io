import { defineConfig } from 'vitepress'

// GitHub Pages serves a repository under /<name>/; the deploy workflow passes that prefix
const base = `${process.env.BASE_PATH ?? ''}/`

export default defineConfig({
  title: 'Tantal',
  base,
  cleanUrls: true,
  srcExclude: ['README.md'],
  rewrites: { 'locales/:lang/:rest*': ':lang/:rest*' },
  appearance: 'dark',
  // theme-color repeats the dark --md-surface from theme/palette.css; update both together
  head: [
    // First visit only: a Russian browser goes to the Russian page. The logs have no
    // translation, and the stored flag keeps a later manual language switch in force.
    [
      'script',
      {},
      `try{const b='${base}',p=location.pathname.slice(b.length-1);if(!localStorage.getItem('tantal-lang')&&!/^\\/(ru|devlog|decisions)(\\/|$)/.test(p)){localStorage.setItem('tantal-lang','1');if(/^ru\\b/i.test(navigator.language))location.replace(b+'ru'+p+location.search+location.hash)}}catch{}`
    ],
    ['link', { rel: 'icon', href: `${base}favicon.png`, sizes: '32x32', type: 'image/png' }],
    ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#0c141b' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Hardened Android based on GrapheneOS',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/docs/vs-grapheneos' },
          { text: 'Install', link: '/install/web' },
          { text: 'Devlog', link: '/devlog/' },
          { text: 'Decisions', link: '/decisions/' },
          { text: 'Support', link: '/support' }
        ],
        // a single array, not per-path: every linked page must show this same sidebar
        sidebar: [
          {
            text: 'Docs',
            items: [
              { text: 'Differences from GrapheneOS', link: '/docs/vs-grapheneos' },
              { text: 'Threat model', link: '/docs/threat-model' },
              { text: 'FAQ', link: '/docs/faq' }
            ]
          },
          {
            text: 'Install',
            items: [
              { text: 'Web installer', link: '/install/web' },
              { text: 'Verify signatures', link: '/verify' }
            ]
          },
          {
            text: 'Logs',
            items: [
              { text: 'Devlog', link: '/devlog/' },
              { text: 'Decision log', link: '/decisions/' }
            ]
          },
          {
            text: 'Project',
            items: [
              { text: 'Support the project', link: '/support' },
              { text: 'Contact', link: '/contacts' }
            ]
          }
        ],
        footer: {
          message: 'Based on GrapheneOS. Not affiliated with the GrapheneOS project.'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      description: 'Защищённый Android на основе GrapheneOS',
      themeConfig: {
        nav: [
          { text: 'Документация', link: '/ru/docs/vs-grapheneos' },
          { text: 'Установка', link: '/ru/install/web' },
          { text: 'Поддержать', link: '/ru/support' }
        ],
        // the logs are English-only, so they are not in this sidebar
        sidebar: [
          {
            text: 'Документация',
            items: [
              { text: 'Отличия от GrapheneOS', link: '/ru/docs/vs-grapheneos' },
              { text: 'Модель угроз', link: '/ru/docs/threat-model' },
              { text: 'FAQ', link: '/ru/docs/faq' }
            ]
          },
          {
            text: 'Установка',
            items: [
              { text: 'Веб-установщик', link: '/ru/install/web' },
              { text: 'Проверка подписи', link: '/ru/verify' }
            ]
          },
          {
            text: 'Проект',
            items: [
              { text: 'Поддержать проект', link: '/ru/support' },
              { text: 'Контакты', link: '/ru/contacts' }
            ]
          }
        ],
        outline: { label: 'На этой странице' },
        docFooter: { prev: 'Назад', next: 'Далее' },
        darkModeSwitchLabel: 'Тема',
        lightModeSwitchTitle: 'Светлая тема',
        darkModeSwitchTitle: 'Тёмная тема',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
        langMenuLabel: 'Язык',
        skipToContentLabel: 'К содержимому',
        notFound: {
          title: 'СТРАНИЦА НЕ НАЙДЕНА',
          quote: 'Такой страницы нет или она переехала.',
          linkText: 'На главную'
        },
        footer: {
          message: 'Основано на GrapheneOS. Не связано с проектом GrapheneOS.'
        }
      }
    }
  },

  themeConfig: {
    logo: { light: '/favicon.svg', dark: '/logo.svg', alt: '' },
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: {
                displayDetails: 'Подробнее',
                resetButtonTitle: 'Сбросить',
                backButtonTitle: 'Закрыть',
                noResultsText: 'Ничего не найдено',
                footer: { selectText: 'выбрать', navigateText: 'перейти', closeText: 'закрыть' }
              }
            }
          }
        }
      }
    }
  }
})
