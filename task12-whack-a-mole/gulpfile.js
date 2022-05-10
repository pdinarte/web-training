const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

const compile = () => {
  return src('./src/assets/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass())
    .pipe(dest('./src/assets/'));
}

exports.compile = compile;