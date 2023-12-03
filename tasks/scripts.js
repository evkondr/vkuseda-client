const { src, dest } = require('gulp');
const { path } = require('../config');

const scripts = () => {
  return src(path.scripts.src)
  .pipe(dest(path.scripts.dest))
}
module.exports = scripts;