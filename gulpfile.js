var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat');

gulp.task('default', ['lint', 'concat']);

gulp.task('lint', function() {
    return gulp.src(__dirname + '/client/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('concat', function() {
    return gulp.src(__dirname + '/client/js/**/*.js')
        .pipe(concat('javascript.js'))
        .pipe(gulp.dest('./client/dist/'));
});
