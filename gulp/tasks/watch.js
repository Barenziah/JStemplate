'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', ['watch'] ,function () {
    browserSync({
        port: 5000,
        notify: false,
        logPrefix: 'Ajax Project',
        logConnections: true,
        browser:"google chrome",
        server: {
            baseDir: ['app'],
        }
    });
}); 

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], reload);
    gulp.watch(['./app/css/*.css'], function (){
        gulp.start('cssInject');
    })
    gulp.watch(['./app/js/*.js'], ['jshint', reload]);
});

/**
 * Instead of reload, using browserSync default feature
 * browserSync.stream() to inject updated css into browser!
 */
gulp.task('cssInject', ['analyzeCss'], function() {
    return gulp.src('./app/temp/style/style.css')
      .pipe(browserSync.stream());
  });