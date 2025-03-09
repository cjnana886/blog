import { defineConfig } from 'vitepress'
 
export default defineConfig({
  base: '/blog/',
  title: "Garrix CJ Blog",
  description: "記錄前端學習筆記",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "文章", link: "/posts/" },
      { text: "關於", link: "/about" }
    ],
    sidebar: {
      "/posts/": [
        {
          text: "技術文章",
          collapsible: true,
          items: [
            { text: "第一篇文章", link: "/posts/first-post" }
          ]
        }
      ]
    }
  }
});
