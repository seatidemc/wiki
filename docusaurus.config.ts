import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'Seatide 服务器文档',
	tagline: '提供服务器相关信息参考，帮助玩家更好地了解服务器',
	favicon: 'img/favicon.ico',

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: 'https://seatidemc.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/wiki/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'seatidemc', // Usually your GitHub org/user name.
	projectName: 'wiki', // Usually your repo name.
	trailingSlash: false,

	onBrokenLinks: 'throw',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans']
	},

	themes: ['@docusaurus/theme-mermaid'],

	plugins: ['plugin-image-zoom'],

	markdown: {
		mermaid: true
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/seatidemc/wiki/tree/main'
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/seatidemc/wiki',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn'
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		mermaid: {
			theme: { light: 'neutral', dark: 'neutral' }
		},
		imageZoom: {
			// CSS selector to apply the plugin to, defaults to '.markdown img'
			selector: '.markdown img',
		},
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		colorMode: {
			respectPrefersColorScheme: true
		},
		navbar: {
			title: 'Seatide Wiki',
			logo: {
				alt: 'The Moon',
				src: '/img/seatide.svg'
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'wikiSidebar',
					position: 'left',
					label: 'Wiki'
				},
				{ href: 'https://seatidemc.github.io', label: '官网', position: 'left' },
				{
					href: 'https://github.com/seatidemc/wiki',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				// {
				//   title: 'Docs',
				//   items: [
				//     {
				//       label: 'Tutorial',
				//       to: '/docs/intro',
				//     },
				//   ],
				// },
				// {
				//   title: 'Community',
				//   items: [
				//     {
				//       label: 'Stack Overflow',
				//       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				//     },
				//     {
				//       label: 'Discord',
				//       href: 'https://discordapp.com/invite/docusaurus',
				//     },
				//     {
				//       label: 'X',
				//       href: 'https://x.com/docusaurus',
				//     },
				//   ],
				// },
				{
					title: '相关链接',
					items: [
						{
							label: '官网',
							to: 'https://seatidemc.github.io'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/seatidemc'
						}
					]
				},
				{
					title: '服务器',
					items: [
						{
							label: '控制台',
							href: 'https://st.subilan.win'
						},
						{
							label: '服务器状态',
							href: 'https://st.subilan.win/#/status'
						}
					]
				},
				{
					title: '加入Seatide',
					items: [
						{
							label: 'QQ 讨论群',
							href: 'https://qm.qq.com/q/XijStp4T6u'
						},
						{
							label: '白名单问卷（wjx）',
							href: 'https://v.wjx.cn/vm/m93QvcR.aspx'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Seatide 服务器. Built with Docusaurus.`
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula
		}
	} satisfies Preset.ThemeConfig
};

export default config;
