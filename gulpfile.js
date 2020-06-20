'use strict';
const gulp = require('gulp');
const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');

function scssTask() {
  return src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream());
}
function jsBuild() {
  return src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
}
function html() {
  return src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
}

//watch changes
//function watch() {
//  browserSync.init({
//    server: {
//      baseDir: './dist',
//    },
//  });
//  gulp.watch('src/scss/*.scss', scssTask);
// gulp.watch('src/js/*.js', jsBuild);
//  gulp.watch('src/js/**/*.js', jsBuild);
//  gulp.watch('src/*.html', html);
// gulp.watch('src/*.html').on('change', browserSync.reload);
// gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
//}

//exports.default = series(scssTask, jsBuild, html, watch);
exports.default = series(scssTask, jsBuild, html);
