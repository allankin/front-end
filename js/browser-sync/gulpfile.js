var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
//var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');

gulp.task('minify',function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

gulp.task('minify-css',function(){
	gulp.src('css/*.css')
	.pipe(sourcemaps.init())
	.pipe(cleanCSS({compatibility:'ie8'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/css'));
});

gulp.task('sass',function(){
	gulp.src('css/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/css'));
	//.pipe(livereload());
});
gulp.task('sass:watch',function(){
	var watcher = gulp.watch('css/*.scss',['sass']);
	watcher.on('change',function(event){
		console.log('Event type: ' + event.type); // added, changed, or deleted
   		console.log('Event path: ' + event.path); // The path of the modified file
	});
});

gulp.task('browser-sync', function () {
   var files = [
      './**/*.html',
      './**/*.css',
      './**/*.js'
   ];

   browserSync.init(files, {
      server: {
         //baseDir: './'  // 不能指定为当前目录
      }
   });
});