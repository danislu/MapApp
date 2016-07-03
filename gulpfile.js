var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('connect', function(){
  return connect.server({
    port: 8080,
    livereload: true,
    fallback: ''
  });
});

gulp.task('js:build', function () {
  return browserify({
    entries: 'app/index.jsx',
    extensions: ['.jsx', '.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('js:watch', function () {
   return gulp.watch(['app/**/*.js', 'app/**/*.jsx'], ['js:build']);
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  return gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'sass', 'js:build', 'js:watch', 'sass:watch']);
//gulp.task('default', ['connect', 'js:watch', 'build']);
