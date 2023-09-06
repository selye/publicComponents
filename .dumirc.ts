import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'seyle',
    sidebar: {
      '/guide': [
        {
          children: [
            { title: '快速上手', link: '/guide/quick-start' },
            { title: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
    },
  },
});
