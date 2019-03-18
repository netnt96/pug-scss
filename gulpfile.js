var gulp = require('gulp');
// var pug = require('gulp-pug');
// var data = require('gulp-data');
// var fs = require('fs');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss') 
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

// gulp.task('pug', function(){
//     return gulp.src('index.pug')
//         .pipe(pug())
//         .pipe(gulp.dest('index.html'))
// });


gulp.task('watchStyles', function(){
    gulp.watch('app/scss/**/*.scss', ['sass'])
})
  
gulp.task('build', function() {
    return gulp.src('_header.pug')
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync('/data.json'))
        }))
        .pipe(pug())
        .pipe(gulp.dest('/dist'));
});

