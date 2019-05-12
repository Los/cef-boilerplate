var gulp = require('gulp');
var del = require('del');

var cleanTask = function cleanTask(cb) {
	if(global.PRODUCTION === true) {
		del([CONFIG.root.destProd], {force:true}).then(function (paths) {
			cb();
		});
	} else {
		del([CONFIG.root.destDev], {force:true}).then(function (paths) {
			cb();
		});
	}
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;