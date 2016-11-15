var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


gulp.task('sass', function(){
  return gulp.src('src/sass/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch(['src/*.html', 'src/**/*.js'], browserSync.reload);
});

gulp.task('browser-sync', function(){
  browserSync.init({
        server:'src/'
    });
});

gulp.task('default', ['sass', 'browser-sync', 'watch']);
