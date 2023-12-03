const { src } = require('gulp');
const cleanDir = require('gulp-clean');
const { path } = require('../config');

const clean = () => {
  return src(`${path.defaultDest}/*`).pipe(cleanDir());
}

module.exports = clean;