const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const { path } = require('../config');

const styles = () => {
  return src(path.sass.src, {sourcemaps: true})
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('main.css'))
  .pipe(dest(path.sass.dest, {sourcemaps: true}))
  .pipe(rename({suffix: '.min'}))
  .pipe(csso())
  .pipe(dest(path.sass.dest, {sourcemaps: true}));
};
module.exports = styles;