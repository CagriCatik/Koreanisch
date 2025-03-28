// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Koreanisch für Anfänger*innen',
  tagline: '', // Optionally add a tagline like "Learn Korean Easily"
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://CagriCatik.github.io',
  // For GitHub Pages deployment, set the baseUrl to '/Koreanisch/'.
  baseUrl: '/Koreanisch/',

  // GitHub pages deployment config.
  organizationName: 'CagriCatik', // GitHub username or organization name.
  projectName: 'Koreanisch', // Repository name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Update the URL to point to the correct repo for the "edit this page" links.
          editUrl: 'https://github.com/CagriCatik/Koreanisch/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card if you have one.
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' ',
        logo: {
          alt: 'Koreanisch Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Grundlagen',
          },
          {
            href: 'https://github.com/CagriCatik/Koreanisch',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Koreanisch Lernen - Built with Docusaurus 🦖`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },
};

export default config;
