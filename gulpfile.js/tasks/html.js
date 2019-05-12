var gulp = require("gulp");
var changed = require("gulp-changed");
var browserSync = require("browser-sync");
var path = require("path");
var minifyHTML = require("gulp-minify-html");

var paths = {
  src: path.join(CONFIG.root.src, CONFIG.tasks.html.src, "/**/*"),
  destDev: path.join(CONFIG.root.destDev, CONFIG.tasks.html.dest),
  destProd: path.join(CONFIG.root.destProd, CONFIG.tasks.html.dest)
};

gulp.task("html", function() {
  var opts = { comments: false, spare: true };

  return gulp
    .src(paths.src)
    .pipe(
      global.PRODUCTION === true
        ? changed(paths.destProd)
        : changed(paths.destDev)
    )
    .pipe(minifyHTML(opts))
    .pipe(
      global.PRODUCTION === true
        ? gulp.dest(paths.destProd)
        : gulp.dest(paths.destDev)
    )
    .pipe(browserSync.stream());
});
