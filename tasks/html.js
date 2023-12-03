const { src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const { path } = require('../config');

const html = () => {
  return src(path.html.src)
  .pipe(fileinclude({
    prefix: '@@'
  }))
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest(path.html.dest))
}
module.exports = html