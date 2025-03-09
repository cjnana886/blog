import { defineConfig } from 'vitepress'
 
export default defineConfig({
  base: '/blog/',
  title: "Bear Tsai",
  description: "記錄前端學習筆記",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { 
        text: 'Skills', 
        items: [
          { text: 'Vue 基礎', link: '/notes/vue/init', },
          { text: 'JS 基礎', link: '/notes/js/init', },
          { text: 'TS 基礎', link: '/notes/ts/init', },
          { text: 'Browser 基礎', link: '/notes/browser/init', },
          { text: 'SEO 基礎', link: '/notes/seo/init', },
        ]
      },
      { text: "About", link: "/about" },
    ],
    sidebar: {
      "/notes": [
        {
          text: "",
          collapsible: false,
          items: [
            { text: '<span class="text-1">INTRO</span>', link: '/notes/' },
          ]
        },
        {
          text: 'Vue',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Vue 基礎', link: '/notes/vue/init' },
          ]
        },
        {
          text: 'JS',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '基礎', link: '/notes/js/init' },
          ]
        },
        {
          text: 'TS',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '基礎', link: '/notes/ts/init' },
          ]
        },
        {
          text: '框架 & Browser',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '基礎', link: '/notes/browser/init' },
          ]
        },
        {
          text: 'SEO',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '基礎', link: '/notes/seo/init' },
          ]
        },
      ],
    },
  }
});
