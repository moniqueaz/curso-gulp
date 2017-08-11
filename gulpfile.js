var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');

    gulp.task('copy', ['clean'], function(){
        return gulp.src('src/**/*')
            .pipe(gulp.dest('dist')); // assincrono
    });

    gulp.task('clean', function(){
        return gulp.src('dist')
            .pipe(clean()); // assincrono
    });

    gulp.task('build-img', ['copy'], function(){
        // origem
        gulp.src('dist/img/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img')) // destino
    });