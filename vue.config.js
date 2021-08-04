module.exports = {
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			title: 'Index',
			chunks: [ 'chunk-vendors', 'chunk-common', 'index'],
		},
		yuuko: {
			entry: 'src/pages/eris/main.js',
			template: 'public/index.html',
			title: 'Yuuko',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuuko'],
		},
		yuuko_parti: {
			entry: 'src/pages/eris/parti/main.js',
			template: 'public/index.html',
			title: 'Part I',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuuko_parti'],
		},
		yuuko_partii: {
			entry: 'src/pages/eris/partii/main.js',
			template: 'public/index.html',
			title: 'Part II',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuuko_partii'],
		},
		yuuko_partiii: {
			entry: 'src/pages/eris/partiii/main.js',
			template: 'public/index.html',
			title: 'Part III',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuuko_partiii'],
		},
		yuuko_partiv: {
			entry: 'src/pages/eris/partiv/main.js',
			template: 'public/index.html',
			title: 'Part IV',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuuko_partiv'],
		},
		check: {
			entry: 'src/pages/browser/main.js',
			template: 'public/index.html',
			title: 'Browser Check',
			chunks: [ 'chunk-vendors', 'chunk-common', 'check'],
		},
		npm_search: {
			entry: 'src/pages/npm/main.js',
			template: 'public/index.html',
			title: 'Search NPM',
			chunks: [ 'chunk-vendors', 'chunk-common', 'npm_search'],
		},
		quote: {
			entry: 'src/pages/quotes/main.js',
			template: 'public/index.html',
			title: 'Quotes',
			chunks: [ 'chunk-vendors', 'chunk-common', 'quote'],
		},
		random: {
			entry: 'src/pages/random/main.js',
			template: 'public/index.html',
			title: 'Random Number Generator',
			chunks: [ 'chunk-vendors', 'chunk-common', 'random'],
		},
		repo_search: {
			entry: 'src/pages/ghs/main.js',
			template: 'public/index.html',
			title: 'Search GitHub Repositories',
			chunks: [ 'chunk-vendors', 'chunk-common', 'repo_search'],
		},
		404: {
			entry: 'src/pages/404/main.js',
			template: 'public/404.html',
			title: '404 Page Not Found',
			chunks: [ 'chunk-vendors', 'chunk-common', '404'],
		},
	},
	publicPath: process.env.NODE_ENV === 'production'
		? '/'
		: '/',
};
