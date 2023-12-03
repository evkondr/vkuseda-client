const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const { path } = require('../config');

const images = () => {
  return src(path.images.src)
  .pipe(newer(path.images.dest))
  .pipe(imagemin())
  .pipe(dest(path.images.dest));
}
module.exports = images;