var gulp=require('gulp'),
    fs = require('fs-extra'),
    concat=require('gulp-concat'),
    uglify = require('gulp-uglify'),
    BUILD_NAME='elliptical.generic.repository.js',
    MIN_NAME='elliptical.generic.repository.min.js',
    REPO_NAME='elliptical generic repository',
    DIST='./dist';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp build|minify"');
});

gulp.task('build',function(){
    fileStream('./lib/linq.js',DIST);
    concatFileStream('./lib/repository.js',DIST,BUILD_NAME);
});

gulp.task('minify',function(){
    minFileStream('./lib/linq.js',DIST,'linq.min.js');
    minFileStream('./lib/repository.js',DIST,MIN_NAME);
});


function fileStream(src,dest){
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

function concatFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(gulp.dest(dest));
}

function minFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}