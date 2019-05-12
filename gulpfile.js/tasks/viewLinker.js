var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var path = require('path');
var gulpif = require('gulp-if');
var minifyHTML = require('gulp-minify-html');

var paths = {
	src: path.join(CONFIG.root.src, CONFIG.tasks.viewLinker.src, 'index.html'),
	dest: path.join(CONFIG.root.destDev, CONFIG.tasks.viewLinker.dest)
};

gulp.task('viewLinker', function () {
	var opts = { comments: false, spare: true };
	
	return gulp.src(paths.src)
		.pipe(changed(paths.dest))
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream());
});