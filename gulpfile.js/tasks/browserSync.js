var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', function () {
	var proxy = CONFIG.tasks.browserSync.proxy || null;
	if (typeof proxy === 'string') {
		CONFIG.tasks.browserSync.proxy = proxy = {
			target: proxy
		};
	}

	var server = proxy || CONFIG.tasks.browserSync.server;
	browserSync.init(CONFIG.tasks.browserSync);
});