var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
});

// gulp.task('watch',
//     gulp.series('clean', gulp.parallel('scss'),
//         function () {
//             gulp.watch('scss/**/*.scss', ['scss']);
//         })
// );

gulp.task("watch", function() {
 gulp.watch('scss/**/*.scss', gulp.series("scss"));
});

gulp.task("default", gulp.series("watch", gulp.parallel("watch")));

// gulp.task('watch', ['scss'], function () {
//     gulp.watch('public/scss/**/*.scss', ['scss']);
// });
