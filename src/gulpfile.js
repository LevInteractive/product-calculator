var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');

var startfile = './ProductCalculator/ProductCalculator.js';

gulp.task('bundle', function() {
  browserify({
    entries: [startfile],
    transform: [
      [
        'babelify', {
          "presets": [
            "react",
            "es2015"
          ],
          "sourceMaps": false
        }
      ]
    ],
    debug: true
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('../server/'));
});

gulp.task('default', ['bundle']);

gulp.task('watch', function() {
  gulp.watch('./ProductCalculator/**/*.js', ['bundle']);
});
