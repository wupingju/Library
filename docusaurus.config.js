const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {

  title: 'Pin 起來的收集箱',
  tagline: '工具、服務、網站、書籍、電影',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://library.pinchlime.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wupingju/library/edit/master/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    metadata: [{name: 'keywords', content: '生產力工具、效率工具、AI 工具'}],
    image: 'https://pinchlime-screenshots.s3.ap-northeast-1.amazonaws.com/og-02-1200-630_1hIeSM.png',
    navbar: {
      title: 'Pin 起來的收集箱',
      logo: {
        alt: 'Pin 起來的收集箱',
        src: 'https://pinchlime-screenshots.s3.ap-northeast-1.amazonaws.com/pinchlime-logo-02-no-sub-96x96_Bgz9Ey.webp',
      },
      items: [
        {
          to: '/toolbox',
          position: 'left',
          label: '工具箱',
        },
        {
          to: '/unused-tools',
          position: 'left',
          label: '不再使用的工具',
        },
        {
          href: 'https://pinchlime.com',
          label: 'Pin 起來主網站',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Changelog',
              to: '/changelog',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/wupingju',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Pin 起來',
              href: 'https://pinchlime.com',
            },
          ],
        },
      ],
      copyright: `Copyright © 2022-${new Date().getFullYear()} Pin 起來`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};