'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('jshint', function () {
    return gulp.src([
        './app/js/*.js',
        './app/*.html'
    ])
        .pipe(reload({ stream: true, once: true }))
        .pipe($.jshint.extract()) // Extract JS from .html files
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail'))); //don't really need 
});