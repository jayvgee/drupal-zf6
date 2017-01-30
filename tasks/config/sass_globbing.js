/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

    grunt.config.set('sass_globbing', {
        default: {
            files: {
                'scss/styles.scss': 'scss/partials/**/*.scss'
            },
            options: {
                signature: '// generated with grunt-sass-globbing',
                useSingleQuotes: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass-globbing');
};
