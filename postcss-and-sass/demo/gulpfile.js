var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    lost = require('lost');

gulp.task('sass', function() {
  return gulp.src('src/css/**/*.*')
    .pipe(sass())
    .pipe(postcss([
      lost()
    ]))
    .pipe(gulp.dest('dist/css/'));
});

gulp.watch('src/**/*.*', ['sass']);

gulp.task('default', ['sass']);
