var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var del = require('del');


// Build tasks
gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./www'));
});
gulp.task('images', () => {
  return gulp.src('./src/img/**')
    .pipe(gulp.dest('./www/img'));
});
gulp.task('css',  () => {
  return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./www/css'));
});
gulp.task('scripts', () => {
  return gulp.src('./src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./www/js/'));
});
gulp.task('watch', ['build'], () => {
  gulp.watch('src/*.html', ['html']); 
  gulp.watch('src/img/**', ['images']); 
  gulp.watch('src/css/*.css', ['css']); 
  gulp.watch('src/js/**/*.js', ['scripts']); 
});
gulp.task('serve', () => {
  connect.server({
    root: './www',
    port: 8000,
    livereload: true
  });
});


// tasks you will actually be running
gulp.task('build', ['html', 'images', 'css', 'scripts']);

gulp.task('clean', () => {
  return del(['./www']);
});

gulp.task('dev', ['serve', 'watch']);
