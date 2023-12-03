const SRC = './src';
const DEST = './dist';
module.exports = { 
  path: {
    defaultSrc: SRC,
    defaultDest: DEST,
    html: {
      src: `${SRC}/html/*.html`,
      dest: `${DEST}`,
      watch: `${SRC}/**/*.html`,
    },
    sass: {
      src: `${SRC}/sass/*.scss`,
      dest: `${DEST}/styles`,
      watch: `${SRC}/sass/**/*.{sass,scss}`,
    },
    scripts: {
      src: `${SRC}/scripts/**/*.js`,
      dest: `${DEST}/scripts`,
      watch: `${SRC}/scripts/**/.js`,
    },
    images: {
      src: `${SRC}/images/**/*.{png,jpeg,jpg,giff}`,
      dest: `${DEST}/images`,
      watch: `${SRC}/images/**/*.{png,jpeg,jpg,giff}`,
    },
  }
}