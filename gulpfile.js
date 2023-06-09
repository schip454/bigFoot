const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const del = require("del");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
}

function cleanDist() {
  return del("dist");
}

function images() {
  return src("app/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function scripts() {
  return (
    src([
      // "node_modules/jquery/dist/jquery.js",
      // "node_modules/slick-slider/slick/slick.js",
      // "node_modules/mixitup/dist/mixitup.min.js",
      // "node_modules/swiper/swiper-bundle.esm.browser.min.js",
      // "app/js/watch-maximum.js",
      // "app/js/blog-about.js",
      // "app/js/blog-page.js",

      "app/js/blog-main.js",
    ])
      // .pipe(concat("mixitup.min.js"))
      // .pipe(concat("blog-about.min.js"))
      // .pipe(concat("swiper-bundle.min.js"))

      .pipe(concat("blog-main.min.js"))
      // .pipe(concat("blog-page.min.js"))
      // .pipe(concat("libs.min.js"))
      // .pipe(concat("watch-maximum.min.js"))
      .pipe(uglify())
      .pipe(dest("app/js"))
      .pipe(browserSync.stream())
  );
}

function styles() {
  return src("app/scss/**/*.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function build() {
  return src(
    [
      "app/css/style.min.css",
      "app/fonts/**/*",
      "app/js/watch-maximum.min.js",
      "app/*.html",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(
    [
      "app/js/**/*.js",
      "!app/js/blog-about.min.js",
      "!app/js/watch-maximum.min.js",
      "!app/js/libs.min.js",
      "!app/js/blog-page.min.js",
      "!app/js/blog-main.min.js",
      "!app/js/mixitup.min.js",
      "!app/js/swiper-bundle.min.js",
    ],
    scripts
  );
  watch(["app/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);
