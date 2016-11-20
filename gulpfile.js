var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stylish = require('jshint-stylish');

gulp.task('default', ['lint-client', 'lint-server', 'minify-concat']);

gulp.task('lint-client', function() {
    return gulp.src(__dirname + '/client/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('lint-server', function() {
    var include = __dirname + '/server/**/*.js';
    var exclude = '!' + __dirname + '/node_modules';

    return gulp.src([include, exclude])
        .pipe(jshint({
            esversion: 6
        }))
        .pipe(jshint.reporter(stylish));
});

gulp.task('minify-concat', function() {
    return gulp.src(__dirname + '/client/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('javascript.js'))
        .pipe(gulp.dest('./client/dist/'));
});
