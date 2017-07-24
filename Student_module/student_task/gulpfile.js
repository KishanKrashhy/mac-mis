var gulp = require('gulp');
var htmltopug = require('gulp-html2pug');


gulp.task('html2pug', function(){
    var dest = gulp.dest('views');
    gulp
    .src('html/*.html')
    .pipe(htmltopug())
    .pipe(dest)
});

gulp.task('default', ['html2pug'] );