
module.exports = {
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			title: 'Index',
			chunks: [ 'chunk-vendors', 'chunk-common', 'index']
		},
		yuuko: {
			entry: 'src/pages/eris/main.js',
			template: 'public/index.html',
			title: 'Yuuko',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuuko']
		},
		yuukoparti: {
			entry: 'src/pages/eris/parti/main.js',
			template: 'public/index.html',
			title: 'Part I',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuukoparti']
		},
		yuukopartii: {
			entry: 'src/pages/eris/partii/main.js',
			template: 'public/index.html',
			title: 'Part II',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuukopartii']
		},
		yuukopartiii: {
			entry: 'src/pages/eris/partiii/main.js',
			template: 'public/index.html',
			title: 'Part III',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuukopartiii']
		},
		yuukopartiv: {
			entry: 'src/pages/eris/partiv/main.js',
			template: 'public/index.html',
			title: 'Part IV',
			chunks: [ 'chunk-vendors', 'chunk-common', 'yuukopartiv']
		},
		check: {
			entry: 'src/pages/browser/main.js',
			template: 'public/index.html',
			title: 'Browser Check',
			chunks: [ 'chunk-vendors', 'chunk-common', 'check']
		},
		npmsearch: {
			entry: 'src/pages/search/main.js',
			template: 'public/index.html',
			title: 'Search NPM',
			chunks: [ 'chunk-vendors', 'chunk-common', 'npmsearch']
		},
		quote: {
			entry: 'src/pages/quotes/main.js',
			template: 'public/index.html',
			title: 'Quotes',
			chunks: [ 'chunk-vendors', 'chunk-common', 'quote']
		}
	},
	publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
}
