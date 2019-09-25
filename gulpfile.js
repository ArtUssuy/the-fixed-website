const gulp = require("gulp")
const sass = require("gulp-sass")
const browserSync = require("browser-sync")
const sourceMaps = require("gulp-sourcemaps")
const babel = require("gulp-babel")
const concat = require("gulp-concat")


function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch("./src/scss/**/*.scss", styles)
    gulp.watch("./src/js/**/*.js", functions)
    gulp.watch("./common/**/*.*").on("change", browserSync.reload)
    gulp.watch("./*.html").on("change", browserSync.reload)
}

function styles() {
    console.log("STYLING...")
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sourceMaps.init())
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(sourceMaps.write("."))
        .pipe(browserSync.stream())
        .pipe(gulp.dest("./common"))
}
function functions() {
    return gulp.src("src/js/**/*.js")
        .pipe(sourceMaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(sourceMaps.write("."))
        .pipe(browserSync.stream())
        .pipe(gulp.dest("./common"))
}

exports.default = gulp.series(styles, functions, watch)