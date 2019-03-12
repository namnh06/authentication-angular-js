var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  autoprefixer = require('autoprefixer'),
  paths = {
    'ROOT': './',
    get APP() {
      return this.ROOT + 'app'
    },
    get ASSETS() {
      return this.APP + '/assets'
    },
    get SCSS() {
      return this.ASSETS + '/scss/**/*.scss'
    },
    get CSS() {
      return this.ASSETS + '/css/'
    }
  };


/** Browser Sync */
function browser(done) {
  browserSync.init({
    server: {
      baseDir: paths.ROOT
    },
    port: 3002
  });
  done();
}

/** BrowserSync Reload */
function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function css() {
  return gulp.src(paths.SCSS)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"
    }).on('error', sass.logError))
    .pipe(gulp.dest(paths.CSS))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(paths.CSS))
    .pipe(browserSync.stream());
}

function watchFiles() {
  console.log(paths.SCSS);
  gulp.watch(paths.SCSS, css);
  gulp.watch(paths.ROOT + '**/*.html', browserSyncReload);
}


var watch = gulp.parallel(watchFiles, browser);


exports.css = css;
exports.watch = watch;