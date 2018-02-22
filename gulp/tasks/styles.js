'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var stylelint = require('stylelint');
var autoprefixer = require('autoprefixer');

var reporter = require('postcss-reporter');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var cssnext = require("postcss-cssnext")


gulp.task('analyzeCss', function(){
    return gulp.src('./app/css/style.css')
        .pipe($.postcss([cssImport, cssnext, nested, stylelint(), reporter(), 
                    autoprefixer({
                        browsers: ['last 2 versions'],
                        cascade: false
                    })
            ]))
        .on('error', function (errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/style/style.css'));
})




