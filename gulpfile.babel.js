import '@babel/register';
import gulp from 'gulp';
import {build} from './gulp-tasks';

gulp.task('build', build);