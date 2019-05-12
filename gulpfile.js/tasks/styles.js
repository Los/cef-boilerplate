var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var handleErrors = require('../lib/handleErrors');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var paths = {
	src: path.join(CONFIG.root.src, CONFIG.tasks.styles.src, '/**/*.' + CONFIG.tasks.styles.extensions.join(',')),
	destDev: path.join(CONFIG.root.destDev, CONFIG.tasks.styles.dest),
  destProd: path.join(CONFIG.root.destProd, CONFIG.tasks.styles.dest)
};

gulp.task('styles', function() {
	return gulp.src(paths.src)
		.pipe(sass()).on('error', handleErrors)
		.pipe(autoprefixer())
		.pipe(cleanCSS({ inline: ['none'] }))
		.pipe(
      global.PRODUCTION === true
        ? gulp.dest(paths.destProd)
        : gulp.dest(paths.destDev)
    )
		.pipe(browserSync.stream());
});