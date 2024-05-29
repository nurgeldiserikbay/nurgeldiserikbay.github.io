export const COUNTS = [
	{
		class: 'col-lg-3 col-md-6',
		icon: 'bi bi-emoji-smile',
		countMax: 34,
		text: 'labels.clients',
	},
	{
		class: 'col-lg-3 col-md-6 mt-5 mt-md-0',
		icon: 'bi bi-journal-richtext',
		countMax: 42,
		text: 'labels.projects',
	},
	{
		class: 'col-lg-3 col-md-6 mt-5 mt-lg-0',
		icon: 'bi bi-headset',
		countMax: 340,
		text: 'labels.supportTime',
	},
	{
		class: 'col-lg-3 col-md-6 mt-5 mt-lg-0',
		icon: 'bi bi-award',
		countMax: 0,
		text: 'labels.awards',
	},
]

export const INTERESTS = [
	{
		class: 'col-lg-3 col-md-4',
		icon: 'ri-store-line',
		color: '#ffbb2c',
		text: 'pages.about.interests.1',
	},
	{
		class: 'col-lg-3 col-md-4 mt-4 mt-md-0',
		icon: 'ri-bar-chart-box-line',
		color: '#5578ff',
		text: 'pages.about.interests.2',
	},
	{
		class: 'col-lg-3 col-md-4 mt-4 mt-md-0',
		icon: 'ri-calendar-todo-line',
		color: '#e80368',
		text: 'pages.about.interests.3',
	},
]

export const SKILLS = [
	{
		colClass: 'col-lg-6',
		items: [
			{
				name: 'HTML',
				valuenow: 80,
			},
			{
				name: 'CSS',
				valuenow: 80,
			},
			{
				name: 'JavaScript',
				valuenow: 75,
			},
			{
				name: 'TypeScript',
				valuenow: 50,
			},
			{
				name: 'Vue 2, 3',
				valuenow: 80,
			},
			{
				name: 'Nuxt 2, 3',
				valuenow: 60,
			},
		],
	},
	{
		colClass: 'col-lg-6',
		items: [
			{
				name: 'React',
				valuenow: 60,
			},
			{
				name: 'Next',
				valuenow: 40,
			},
			{
				name: 'Git',
				valuenow: 40,
			},
			{
				name: 'Docker',
				valuenow: 20,
			},
			{
				name: 'SCSS',
				valuenow: 70,
			},
			{
				name: 'ExpressJS',
				valuenow: 40,
			},
		],
	},
]

export const OTHERS: string[] = [
	'JQuery',
	'GSAP',
	'TailwindCSS',
	'ThreeJS',
	'BabylonJS',
	'Figma',
	'NestJS',
	'MongoDB',
	'Sequelize',
	'Postgresql',
	'SocketIO',
	'Highcharts',
	'CapacitorJS (PWA, APK)',
]

export const TESTIMONIALS = [
	{
		text: 'reviews.0.text',
		author: 'reviews.0.author',
		role: 'reviews.0.role',
		alt: 'reviews.0.author',
		img: '/assets/img/testimonials/testimonials-1.jpg',
	},
	{
		text: 'reviews.1.text',
		author: 'reviews.1.author',
		role: 'reviews.1.role',
		alt: 'reviews.1.author',
		img: '/assets/img/testimonials/testimonials-2.jpg',
	},
	{
		text: 'reviews.2.text',
		author: 'reviews.2.author',
		role: 'reviews.2.role',
		alt: 'reviews.2.author',
		img: '/assets/img/testimonials/testimonials-3.jpg',
	},
	{
		text: 'reviews.3.text',
		author: 'reviews.3.author',
		role: 'reviews.3.role',
		alt: 'reviews.3.author',
		img: '/assets/img/testimonials/testimonials-4.jpg',
	},
	{
		text: 'reviews.4.text',
		author: 'reviews.4.author',
		role: 'reviews.4.role',
		alt: 'reviews.4.author',
		img: '/assets/img/testimonials/testimonials-5.jpg',
	},
]

export const FILTERS = [
	{ selector: '*', text: 'filters.all' },
	{ selector: '.filter-web', text: 'filters.web' },
	{ selector: '.filter-pwa', text: 'filters.pwa' },
	{ selector: '.filter-apk', text: 'filters.apk' },
]

export const PORTFOLIO = [
	{
		img: '/assets/img/portfolio/aemz.png',
		title: 'AEMZ',
		type: 'Web',
		alt: 'Производство электротехнического оборудования в Казахстане',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/aemz.png',
		ifame: 'https://nurgeldiserikbay.github.io/aemz/',
	},
	{
		img: '/assets/img/portfolio/cacg.png',
		title: 'CACG',
		type: 'Web',
		alt: 'CACG — это динамично развивающаяся IT-компания, которая занимается разработкой и внедрением ПО в сфере управления бизнесом и развитием цифрового образования в Казахстане с 2013 года.',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/cacg.png',
		ifame: 'https://nurgeldiserikbay.github.io/cacg/',
	},
	{
		img: '/assets/img/portfolio/enbek.png',
		title: 'Enbek.kz',
		type: 'Web',
		alt: 'Электронная биржа труда enbek.kz (далее – ЭБТ) представляет собой единую цифровую площадку по трудоустройству, предоставляющую возможности для поиска работы и содействия в подборе персонала.',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/enbek.png',
		ifame: 'https://nurgeldiserikbay.github.io/enbek-kz/',
	},
	{
		img: '/assets/img/portfolio/erg.png',
		title: 'ERG',
		type: 'Web',
		alt: 'Eurasian Resources Group S.à r.l. — крупный поставщик горнодобывающей и сырьевой продукции, работающий в Казахстане',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/erg.png',
		ifame: 'https://nurgeldiserikbay.github.io/erg/',
	},
	{
		img: '/assets/img/portfolio/ipost.png',
		title: 'IPost',
		type: 'Web',
		alt: 'Карго перевозки автомобильным, жд, авиа транспортом из Китая по Казахстану',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/ipost.png',
		ifame: 'https://nurgeldiserikbay.github.io/cargo/',
	},
	{
		img: '/assets/img/portfolio/jobtron.png',
		title: 'JobTron',
		type: 'Web',
		alt: 'Корпоративный портал: полезный для бизнеса, удобный для сотрудников',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/jobtron.png',
		ifame: 'https://nurgeldiserikbay.github.io/jobtron/',
	},
	{
		img: '/assets/img/portfolio/livan.png',
		title: 'Livan',
		type: 'Web',
		alt: 'Основанная 24 января 2022 года, компания LIVAN Auto — это совершенно новый бренд, ориентированный на мобильность под брендом <span>Geely Auto Group</span>. Это значит, что схема производства, цепочка поставки компонентов, стандарты и уровень качества продукции соответствуют стандартам качества и контроля',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/livan.png',
		ifame: 'https://nurgeldiserikbay.github.io/garage/',
	},
	{
		img: '/assets/img/portfolio/medtour.png',
		title: 'Medtour',
		type: 'Web',
		alt: 'Медицинский туризм в Казахстане: лечение и реабилитация мирового уровня',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/medtour.png',
		ifame: 'https://nurgeldiserikbay.github.io/medtour/',
	},
	{
		img: '/assets/img/portfolio/private.png',
		title: 'Private',
		type: 'Web',
		alt: 'Private Equity List is a PE/VC investors database. A perfect solution for consultants, investment bankers, startup founders, researchers, and everyone else looking for funding. Useful for both small teams and large companies. Find, filter and export PE/VC investors across the globe in 3 clicks.',
		class: FILTERS[1].selector.slice(1),
		fullImg: '/assets/img/portfolio/private.png',
		ifame: 'https://nurgeldiserikbay.github.io/private_equity_list/',
	},
	{
		img: '/assets/img/portfolio/stonefall.png',
		title: 'StoneFall',
		type: 'PWA',
		alt: 'Stone Fall - In Stone Fall, your task is simple: guide the falling stone left and right through a maze of obstacles, avoiding contact with the upper boundary at all costs. This addictive game will test your reflexes and accuracy against increasing speed and never-ending challenges. How long can you hold the stone off the end?',
		class: FILTERS[2].selector.slice(1),
		fullImg: '/assets/img/portfolio/stonefall.png',
		ifame: 'https://nurgeldiserikbay.github.io/stonefall/',
	},
	{
		img: '/assets/img/portfolio/chess.png',
		title: 'Chess Knight Puzzles',
		type: 'APK',
		alt: "Chess Knight Puzzles - a unique game that combines the classic mechanics of the knight's move in chess with modern gaming challenges.",
		class: FILTERS[3].selector.slice(1),
		fullImg: '/assets/img/portfolio/chess.png',
		ifame:
			'https://play.google.com/store/apps/details?id=com.thelightcome.chessknightpuzzles',
	},
]

export const SERVICES = [
	{
		id: 0,
		icon: 'bx bxl-dribbble',
		title: 'services.0.title',
		class: '',
		text: 'services.0.text',
		href: '',
	},
	{
		id: 1,
		icon: 'bx bxl-file',
		title: 'services.1.title',
		class: 'mt-4 mt-md-0',
		text: 'services.1.text',
		href: '',
	},
	{
		id: 2,
		icon: 'bx bxl-tachometer',
		title: 'services.2.title',
		class: 'mt-4 mt-lg-0',
		text: 'services.2.text',
		href: '',
	},
	{
		id: 3,
		icon: 'bx bx-world',
		title: 'services.3.title',
		class: 'mt-4',
		text: 'services.3.text',
		href: '',
	},
]

export const LINKS = [
	{ href: '/', text: 'pages.home.title' },
	{ href: '/about', text: 'pages.about.title' },
	{ href: '/resume', text: 'pages.resume.title' },
	{ href: '/services', text: 'pages.services.title' },
	{ href: '/portfolio', text: 'pages.portfolio.title' },
	{ href: '/contact', text: 'pages.contact.title' },
]

export const SOCIALS = [
	// { name: 'twitter', href: '#', icon: 'bi bi-twitter', class: 'twitter' },
	// { name: 'facebook', href: '#', icon: 'bi bi-facebook', class: 'facebook' },
	{
		name: 'instagram',
		href: 'https://www.instagram.com/',
		icon: 'bi bi-instagram',
		class: 'instagram',
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/nurgeldi-serikbay-70b1ba203/',
		icon: 'bi bi-linkedin',
		class: 'linkedin',
	},
	{
		name: 'whatsapp',
		href: 'https://wa.me/77083416054',
		icon: 'bi bi-whatsapp',
		class: 'whatsapp',
	},
	{
		name: 'telegram',
		href: 'https://web.telegram.org/k/',
		icon: 'bi bi-telegram',
		class: 'telegram',
	},
]
