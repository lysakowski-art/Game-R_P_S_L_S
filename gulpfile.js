const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

function server(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}

function makeCSS() {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle : "compressed" //compact, compressed, nested, expanded
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function watch(cb) {
    gulp.watch("./scss/**/*.scss", gulp.series(makeCSS));
    gulp.watch("./*.html").on('change', browserSync.reload);
    cb();
}

exports.makeCSS = makeCSS;
exports.watch = watch;
exports.default = gulp.series(makeCSS, watch, server);
