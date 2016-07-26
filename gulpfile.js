var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');
var del = require('del');

var src = ['src/js/*.js'];
var dest = './www/js';

// Build tasks
gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./www'));
});
gulp.task('images', function () {
  return gulp.src('./src/img/**')
    .pipe(gulp.dest('./www/img'));
});
gulp.task('data', function () {
  return gulp.src('./src/data/**')
    .pipe(gulp.dest('./www/data'));
});
gulp.task('css', function () {
  return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./www/css'));
});
gulp.task('scripts', function () {
  return gulp.src('./src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./www/js/'));
});
gulp.task('watch', ['build'], function () {
  gulp.watch('src/*.html', ['html']); 
  gulp.watch('src/img/**', ['images']); 
  gulp.watch('src/data/**', ['data']); 
  gulp.watch('src/css/*.css', ['css']); 
  gulp.watch('src/js/**/*.js', ['scripts']); 
});
gulp.task('serve', function () {
  connect.server({
    root: './www',
    port: 8000,
    livereload: true
  });
});


// tasks you will actually be running
gulp.task('build', ['html', 'images', 'data', 'css', 'scripts']);

gulp.task('clean', function () {
  return del(['./www']);
});

gulp.task('dev', ['serve', 'watch']);
