const { watch, series, parallel} = require('gulp');
const browserSync = require("browser-sync").create();
const { path } = require('./config');

const styles = require('./tasks/styles');
const clean = require('./tasks/clean');
const html = require('./tasks/html');
const scripts = require('./tasks/scripts');
const images = require('./tasks/images');


const watchFiles = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scripts.watch, scripts).on('all', browserSync.reload);
  watch(path.sass.watch, styles).on('all', browserSync.reload);
  watch(path.images.watch, images).on('all', browserSync.reload);
}

const server = () => {
  return browserSync.init({
    server: {
        baseDir: path.defaultDest
      }
  });
}

exports.dev = series(
  clean,
  parallel(html, styles, scripts, images),
  parallel(watchFiles, server)
)
exports.build = series(
  clean,
  parallel(html, styles, scripts, images)
);
exports.scripts = scripts;
exports.styles = styles;
exports.watchFiles = watchFiles;
exports.html = html;
exports.clean = clean;
exports.images = images;