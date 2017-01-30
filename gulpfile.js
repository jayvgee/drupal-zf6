var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src',
  'bower_components/reveal.js/css',
  'bower_components/sass-list-maps',
  'bower_components/slick-carousel/slick'
];

gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      sourceComments: false
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
