// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Introduction to DhiWise - DhiWise',
  tagline: 'This is the place where you can find official information on how to use DhiWise effectively for your Web and Mobile App development. Dig into our documentation and quickstart guides. From syncing your Figma designs with DhiWise to how to use modified DhiWise code in your favourite IDEs, we’ve got you covered with everything.',
  url: 'https:/dhiwise.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DhiWise', // Usually your GitHub org/user name.
  projectName: 'DhiWise Document', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          // sidebarPath: require.resolve('./sidebars.js'),
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'docs-api',
    //     path: 'docs-api',
    //     routeBasePath: 'docs-api',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   }, 
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'docs-system',
    //     path: 'docs-system',
    //     routeBasePath: 'docs-system',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   }, 
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{title:"Introduction to DhiWise - DhiWise", content:"This is the place where you can find official information on how to use DhiWise effectively for your Web and Mobile App development. Dig into our documentation and quickstart guides. From syncing your Figma designs with DhiWise to how to use modified DhiWise code in your favourite IDEs, we’ve got you covered with everything.", url:"https://uploads-ssl.webflow.com/618e36726d3c0f19c9284e56/63026091c32fa7ee81164bf2_A.jpg"}],
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: '',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: '',
  
      //   indexName: '',
  
      //   // Optional: see doc section below
      //   // contextualSearch: true,
  
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   // externalUrlRegex: 'external\\.com|domain\\.com',
  
      //   // Optional: Algolia search parameters
      //   // searchParameters: {},
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',

      //   position:"left"
      //   //... other Algolia params
      // },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'logo',
          src: 'images/logo.svg',
        },
        items: [
          {
            to:"/home",
            position: 'left',
            label: 'Home',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'Designguidelines', 
            label: 'Design Guidelines',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'smarteditor', 
            label: 'Smart Editor',
          },
          {
            // to: '/flutter',    // ./docs-api/Intro.md
            type: 'docSidebar',
            label: 'Flutter',
            sidebarId: 'flutter',
            position: 'left',
            // activeBaseRegex: `/docs-api/`,
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'iOS',
            sidebarId: 'ios',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Android',
            sidebarId: 'android',
          },
          {
            // to: '/flutter',    // ./docs-api/Intro.md
            type: 'docSidebar',
            label: 'React',
            sidebarId: 'react',
            position: 'left',
            // activeBaseRegex: `/docs-api/`,
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'React Admin Panel',
            sidebarId: 'reactadminpanel',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Nodejs',
            sidebarId: 'node',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Laravel',
            sidebarId: 'laravel',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'App Resources',
            sidebarId: 'appresources',
          },
          {
            href: 'https://github.com/DhiWise',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://app.dhiwise.com/sign-up',
            label: 'Sign up for free',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
