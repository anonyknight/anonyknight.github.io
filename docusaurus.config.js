/* eslint-disable import/no-import-module-exports */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const tailwindCSS = require("tailwindcss");
const autoprefixerModule = require("autoprefixer");
const { themes } = require("prism-react-renderer");

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const baseUrl = "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Anonyknight's Life Journey",
  tagline:
    "Life is short. Cherish everyday, learning everyday, enjoy everyday!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://anonyknight.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Gatech", // Usually your GitHub org/user name.
  projectName: "anonyknight", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/anonyknight${baseUrl}/edit/master/`,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({ content, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 220 } }),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/anonyknight/${baseUrl}/edit/master/`,
          blogSidebarCount: "ALL",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(tailwindCSS);
          postcssOptions.plugins.push(autoprefixerModule);
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Anonyknight",
        logo: {
          alt: "Anonyknight",
          src: "img/logo.webp",
        },
        items: [
          {
            to: "/docs",
            type: "docSidebar",
            sidebarId: "docsSidebarID",
            position: "left",
            label: "Techs",
          },
          {
            to: "/readings",
            type: "docSidebar",
            sidebarId: "readingsSidebarID",
            position: "left",
            label: "Readings",
          },
          {
            to: "/blog",
            label: "Blogs",
            position: "left",
          },
          { to: "/about_me", label: "About Me" },
          {
            href: "https://github.com/anonyknight",
            label: "GitHub",
          },
        ],
      },
      footer: {
        style: "dark",
        // Redundant to the header. Comment out unless we have more info.
        // links: [
        //   {
        //     title: "GoTo",
        //     items: [
        //       {
        //         label: "Docs",
        //         to: "/docs",
        //       },
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/anonyknight",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Anonyknight, Dingan(Will) Wang, built with <a href="https://docusaurus.io/">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        // https://mermaid.js.org/config/theming.html
        theme: { light: "default", dark: "forest" },
      },
    }),
  // Enable mermaid in markdown.
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  //   Integrate webpack with SWC to speed up building time.
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
