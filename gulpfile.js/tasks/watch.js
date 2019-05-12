var gulp = require("gulp");
var watch = require("gulp-watch");
var path = require("path");

gulp.task("watch", function() {
  let tasks = [
    {
      path: path.join(
        CONFIG.root.src,
        CONFIG.tasks.scripts.src,
        "/**/*." + CONFIG.tasks.scripts.extensions.join(",")
      ),
      name: "scripts"
    },
    {
      path: path.join(
        CONFIG.root.src,
        CONFIG.tasks.styles.src,
        "/**/*." + CONFIG.tasks.styles.extensions.join(",")
      ),
      name: "styles"
    },
    {
      path: path.join(CONFIG.root.src, CONFIG.tasks.images.src, "/**"),
      name: "images"
    },
    {
      path: path.join(CONFIG.root.src, CONFIG.tasks.sounds.src, "/**"),
      name: "sounds"
    },
    {
      path: path.join(CONFIG.root.src, CONFIG.tasks.fonts.src, "/**/*"),
      name: "fonts"
    },
    {
      path: path.join(
        CONFIG.root.src,
        CONFIG.tasks.html.src,
        "/**/*." + CONFIG.tasks.html.extensions.join(",")
      ),
      name: "html"
    },
    {
      path: path.join(
        CONFIG.root.src,
        CONFIG.tasks.viewLinker.src,
        "index.html"
      ),
      name: "viewLinker"
    }
  ];

  for (let i in tasks) {
    gulp.watch(tasks[i].path).on("change", function() {
      gulp.start(tasks[i].name);
    });
  }
});
