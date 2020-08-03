const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gcmq = require('gulp-group-css-media-queries');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
const fileinclude = require('gulp-file-include');
// const webpHTML = require('gulp-webp-html');
const GulpWebpHtml2 = require('gulp-webp-in-html');
const webpcss = require("gulp-webpcss");
const uglify = require('gulp-uglify');
const del = require('del');
const rename = require('gulp-rename');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');



function html() {
  return gulp.src('app/template/*.html') //Выберем файлы по нужному пути
    .pipe(fileinclude()) //Прогоним через include
    .pipe(gulp.dest('app')) //Выплюнем их в папку app
    .pipe(browserSync.reload({
      stream: true
    }));
};

// Конвертация шрифтов
function fonts() {
  return gulp.src('./app/fonts/source/*.ttf')
    .pipe(ttf2woff())
    .pipe(gulp.dest('./app/fonts/')),
    gulp.src('./app/fonts/source/*.ttf')
    .pipe(ttf2woff2())
    .pipe(gulp.dest('./app/fonts/')),
    gulp.src('./app/fonts/source/*.otf')
    .pipe(fonter({
      subset: [66, 67, 68, 69, 70, 71],
      formats: ['ttf']
    }))
    .pipe(gulp.dest('./app/fonts/'));
}

// Подключение шрифтов в CSS
const fs = require('fs');
let project_folder = "dist";
let source_folder = "app";

let path = {
  build: {
    fonts: project_folder + "/fonts/",
  },
  src: {
    fonts: source_folder + "/fonts/",
  }
}

function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + '/scss/_fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/_fonts.scss', '', cb);
    return fs.readdir(path.src.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}

function cb() {

}

// Cтили
function style() {
  return gulp.src('./app/scss/main.scss')
    .pipe(sass())
    .pipe(webpcss())
    .pipe(gcmq())
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('app/css'))
    .pipe(cleanCSS())
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
};

// Скрипты
function vendors() {
  return gulp.src('app/js/0_libs/vendors.js')
    .pipe(fileinclude()) //Прогоним через include
    .pipe(gulp.dest('app/js'))
    .pipe(uglify())
    .pipe(rename("vendors.min.js"))
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.stream());
};

// function vendors() {
//   return gulp.src('app/js/libs/*.js')
//     .pipe(concat('vendors.js'))
//     .pipe(gulp.dest('app/js'))
//     .pipe(uglify())
//     .pipe(rename("vendors.min.js"))
//     .pipe(gulp.dest('./app/js'))
//     .pipe(browserSync.stream());
// };

function scripts1() {
  return gulp.src('app/js/1/*.js')
    .pipe(concat('scripts1.js'))
    .pipe(gulp.dest('./app/js'))
    .pipe(uglify())
    .pipe(rename("scripts1.min.js"))
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.stream());
};

function scripts2() {
  return gulp.src('app/js/2/*.js')
    .pipe(concat('scripts2.js'))
    .pipe(gulp.dest('./app/js'))
    .pipe(uglify())
    .pipe(rename("scripts2.min.js"))
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.stream());
};

function scripts3() {
  return gulp.src('app/js/3/*.js')
    .pipe(concat('scripts3.js'))
    .pipe(gulp.dest('./app/js'))
    .pipe(uglify())
    .pipe(rename("scripts3.min.js"))
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.stream());
};

function scripts4() {
  return gulp.src('app/js/4/*.js')
    .pipe(concat('scripts4.js'))
    .pipe(gulp.dest('./app/js'))
    .pipe(uglify())
    .pipe(rename("scripts4.min.js"))
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.stream());
};

// Изображения
function image() {
  return gulp.src("app/img/**/*.{jpg,png}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest('app/img/'))
    .pipe(gulp.dest('dist/img/')),
    gulp.src("app/img/**/*.{jpg,png,svg,ico}")
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imageminJpegRecompress({
        progressive: true,
        max: 80,
        min: 70
      }),
      imageminPngquant({
        quality: [0.75, 0.85]
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        }]
      })
    ]))
    .pipe(gulp.dest('dist/img/'));
};

// Отслеживание
function watch() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
  gulp.watch('app/template/**/*.html', html);
  gulp.watch('app/scss/*.scss', style);
  gulp.watch('app/scss/blocks/*.scss', style);
  gulp.watch('app/js/0_libs/*.js', vendors);
  gulp.watch('app/js/1/*.js', scripts1);
  gulp.watch('app/js/2/*.js', scripts2);
  gulp.watch('app/js/3/*.js', scripts3);
  gulp.watch('app/js/4/*.js', scripts4);
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
};

// Перемещение
function move() {
  return gulp.src('app/css/main.min.css')
    .pipe(gulp.dest('dist/css/')),
    gulp.src('app/*.html')
    .pipe(GulpWebpHtml2())
    .pipe(gulp.dest('dist/')),
    gulp.src('app/js/*.min.js')
    .pipe(gulp.dest('dist/js/')),
    gulp.src('app/js/webp/webp.min.js')
    .pipe(gulp.dest('dist/js/')),
    gulp.src('app/fonts/*.woff')
    .pipe(gulp.dest('dist/fonts')),
    gulp.src('app/fonts/*.woff2')
    .pipe(gulp.dest('dist/fonts'));
};

// Очистка папки 'dist'
function removedist() {
  return del('dist');
}

exports.html = html;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
exports.style = style;
exports.vendors = vendors;
exports.scripts1 = scripts1;
exports.scripts2 = scripts2;
exports.scripts3 = scripts3;
exports.scripts4 = scripts4;
exports.watch = watch;
exports.image = image;
exports.removedist = removedist;

// Сборка
gulp.task('build', gulp.series(removedist, gulp.parallel(html, style, vendors,
  scripts1, scripts2, scripts3, scripts4, image), move));

//Выгрузка изменений на репозиторий