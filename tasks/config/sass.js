module.exports = function(grunt) {

    grunt.config.set('sass', {
        dist: {
            options: {
                loadPath: [
                    'bower_components/foundation-sites/scss',
                    'bower_components/motion-ui/src',
                    'bower_components/sass-list-maps'
                ]
            },
            files: [{
                expand: true,
                cwd: 'scss',
                src: [
                    'styles.scss',
                ], // leaving syntax to do whole dirs
                dest: 'css',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};