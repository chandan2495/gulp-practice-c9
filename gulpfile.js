var gulp = require("gulp"); //including gulp
var sass = require("gulp-sass"); // for compilig sass to css using libsass

//writing a simple task
gulp.task('hello', function(){
    console.log('first gulp task'); 
});

// a little bit more complex gulp task
gulp.task('copy', function() {  // copying files from src directory to build directory
   return gulp.src('src/**/*.js')       // ** for child directories
        .pipe(gulp.dest('build'));
});

//preprocessing with gulp
//compiling sass to css using gulp-sass
gulp.task('sass', function() {
   return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

//watching files for changes
gulp.watch('src/**/*.js',['copy']);

// watching multiple places for gulp
gulp.task('watch', function() {
    gulp.watch('src/**/*.js',['copy']);
    gulp.watch('src/**/*.scss',['sass']);
});
