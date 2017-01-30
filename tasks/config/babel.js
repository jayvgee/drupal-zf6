/**
 * Run ES6 files through Babel transpiler
 */
module.exports = function(grunt) {

    grunt.config.set('babel', {
        default: {
            options: {
                sourceMap: true,
                presets: ['es2015'],
                compact: false
            },
            dist: {
                files: {
                    'js/vendor/foundation.*.js': 'js/vendor/foundation.*.js'
                }
            }}
    });

    grunt.loadNpmTasks('grunt-babel');
};