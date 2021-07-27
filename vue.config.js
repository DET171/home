
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
		}
	},
	publicPath: process.env.NODE_ENV === 'production'
    ? '/home/'
    : '/',
}
