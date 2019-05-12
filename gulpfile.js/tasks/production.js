var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("production", function(cb) {
  global.PRODUCTION = true;
  runSequence(
    "clean",
    "fonts",
    "images",
    "sounds",
    "scripts",
    "styles",
    "html",
    "viewLinker",
    function cb() {
      process.exit(0);
    }
  );
});
