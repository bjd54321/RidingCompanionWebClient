var gulp = require('gulp');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var lr = require('tiny-lr');
var server = lr();
var connect = require('gulp-connect');

var paths = {
  pages: ['src/*', 'src/**/*'],
  scss: ['sass/*', 'sass/partials/**/*']
};

// html templating task
gulp.task('fileinclude', function() {

  gulp.src(['src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));

  gulp.src(['src/pages/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./pages/'))
    .pipe(livereload());

});

// Sass compilation task
gulp.task('sass', function () {
    gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// Server
gulp.task('connect', function(){
  connect.server({
    port: 3000,
    root: [__dirname],
    livereload: false
  })
});

// Rerun the file-include & sass compilation on file changes
gulp.task('watch', function() {
  watchFiles();
});

function watchFiles() {
    server.listen(35728, function (err) {
    if (err) {
      return console.error(err) 
      //TODO use notify to log a message on Sass compile fail and Beep
    };
 
    //Watch task for file includes
    gulp.watch(paths.pages, ['fileinclude']);

    //Watch tasks for sass
    gulp.watch(paths.scss, ['sass']);
 
  });
}

gulp.task('default', ['fileinclude', 'sass', 'connect', 'watch'], function() {
 
});