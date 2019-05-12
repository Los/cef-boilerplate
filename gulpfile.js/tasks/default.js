var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
	runSequence(
		'clean',
		'fonts',
		'images',
		'sounds',
		'scripts',
		'styles',
		'html',
		'viewLinker',
		'browserSync',
		'watch',
		cb
	);
});