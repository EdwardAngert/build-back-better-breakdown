// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Build Back Better - HR-5376',
  tagline: 'Reorganized and made sense of.',
  url: 'https://edwardangert.github.io',
  baseUrl: '/build-back-better-breakdown/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EdwardAngert', // Usually your GitHub org/user name.
  projectName: 'build-back-better-breakdown', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The name of deployment branch. Defaults to 'gh-pages' for non-organization GitHub Pages repos (projectName not ending in .github.io). Otherwise, this needs to be explicit as a config field or environment variable.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/EdwardAngert/build-back-better-breakdown/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/EdwardAngert/build-back-better-breakdown/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'H.R.5376',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Explore the Act',
          },
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://github.com/EdwardAngert/build-back-better-breakdown',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'H.R.5376',
            items: [
              {
                label: 'Explore the Act',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Discussions',
                to: 'https://github.com/EdwardAngert/build-back-better-breakdown/discussions',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EdwardAngert/build-back-better-breakdown',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
