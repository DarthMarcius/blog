var gulp = require("gulp"),
	livereload = require("gulp-livereload"),
	sass = require("gulp-ruby-sass");

var paths = {
  sass: "public/css/sass/main.scss",
  sassWatchPAth: "public/css/sass/**/*.scss",
  sassOut: "public/css/main.css",
  sourcemapPath: "public/css"
};

gulp.task("sass", function() {

  return gulp.src(paths.sass)
        .pipe(sass({sourcemap: true, sourcemapPath: paths.sourcemapPath}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
        /*.pipe(sass({
	        sourcemap: true, 
	        sourcemapPath: paths.sassOut
	    }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(paths.sassOut)
        .pipe(livereload());*/
});

gulp.task('watch', function() {
  gulp.watch(paths.sassWatchPAth, ['sass']);
  console.log("hi")
});

gulp.task('default', ['watch']);