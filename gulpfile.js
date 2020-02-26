var gulp        = require('gulp');
var browser_sync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var deployPage      = require("gulp-gh-pages");
var concat      = require('gulp-concat');
const { series } = require('gulp');
const { parallel } = require('gulp');
const { spawn } = require('child_process');


var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

function jekyllExec() {
    browser_sync.notify(messages.jekyllBuild);
    return spawn(jekyll, ['build'], { stdio: "inherit" });
}

function browserSyncStart(done) {
    browser_sync({
        server: {
            baseDir: '_site',
        },
        port: 8080
    });
    done();
}

function browserSyncReload(done) {
    browser_sync.reload();
    done();
}

// /**
// * Concat the js files needed for production
// */
function concatJS () {
    return gulp.src(['js/typed.min.js','js/site.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js/'));
}

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
function buildSass () {
    return gulp.src('./_scss/main.scss')
    .pipe(sass({
        includePaths: ['./_scss'],
        onError: browser_sync.notify,
        outputStyle: 'compressed'
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browser_sync.reload({stream: true}))
    .pipe(gulp.dest('css'));
}

function watchAll () {
    // Watch files
    gulp.watch('./_scss/*.scss', series(buildSass, browserSyncReload));
    gulp.watch(['./js/*.js', '!./js/all.js'], series(concatJS, browserSyncReload));
    gulp.watch(
      [
        '*.html',
        './_includes/**',
        './_layouts/**',
        './_posts/**',
        './_job_offers/**',
        './_data/**',
        './img/**',
    ], series(jekyllExec, browserSyncReload));
    gulp.watch('./js/*.js', browserSyncReload);
}

function deployGhPages (cb) {
    gulp.src('./_site/**/*')
    .pipe(deployPage());
    cb();
}

const build = series(parallel(buildSass, concatJS), jekyllExec);

exports.build = build;
exports.deploy = series(build, deployGhPages);
exports.default = series(browserSyncStart, build, watchAll);