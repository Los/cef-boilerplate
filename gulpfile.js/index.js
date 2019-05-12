var path = require('path')
var gulp = require('gulp')
var requireDir = require('require-dir')

global.CONFIG = require('./config')

requireDir('./tasks', { recurse: true })