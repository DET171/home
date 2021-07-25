
module.exports = {
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			title: 'Index',
			chunks: [ 'chunk-vendors', 'chunk-common', 'index']
		},
		eris: {
			entry: 'src/pages/eris/main.js',
			template: 'public/index.html',
			title: 'Eris',
			chunks: [ 'chunk-vendors', 'chunk-common', 'eris']
		},
		erisparti: {
			entry: 'src/pages/eris/parti/main.js',
			template: 'public/index.html',
			title: 'Part I',
			chunks: [ 'chunk-vendors', 'chunk-common', 'erisparti']
		},
		erispartii: {
			entry: 'src/pages/eris/partii/main.js',
			template: 'public/index.html',
			title: 'Part II',
			chunks: [ 'chunk-vendors', 'chunk-common', 'erispartii']
		},
		erispartiii: {
			entry: 'src/pages/eris/partiii/main.js',
			template: 'public/index.html',
			title: 'Part III',
			chunks: [ 'chunk-vendors', 'chunk-common', 'erispartiii']
		},
		erispartiv: {
			entry: 'src/pages/eris/partiv/main.js',
			template: 'public/index.html',
			title: 'Part IV',
			chunks: [ 'chunk-vendors', 'chunk-common', 'erispartiv']
		}
	},
	publicPath: process.env.NODE_ENV === 'production'
    ? '/home/'
    : '/',
}
