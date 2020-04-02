module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        browserify: {
            dev: {
                files: {
                    'dist/LiveRegion.js': ['index.js']
                },
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    transform: [
                        ['babelify', { presets: ['es2015'] } ]
                    ]
                }
            }
        },
        watch: {
            css: {
                files: ['src/**/*', 'index.js'],
                tasks: ['browserify:dev']
            }
        }
    });

    grunt.registerTask('default', ['browserify:dev', 'watch']);

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};