/**
 * Post processes CSS files
 *
 * Uses cssnext for autoprefixing and polyfills for advanced CSS features
 *
 * ---------------------------------------------------------------
 * For usage docs see:
 * 		http://postcss.org
 */
module.exports = function(grunt) {
    grunt.config.set('postcss', {
        options: {
            map: {
                inline: false,
                annotation: 'css/'
            },
            processors: [
                require('postcss-cssnext')({browsers: 'last 2 versions, ie >= 9, and_chr >= 2.3, ios_saf >= 8.4'})
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
};