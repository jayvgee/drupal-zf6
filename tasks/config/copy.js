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

	grunt.config.set('copy', {
		default: {
			files: [
				// copy vendor js from child theme
				{
					flatten: true,
					expand: true,
					cwd: './bower_components',
					src: [
                        'jquery/dist/jquery.min.js',
                        // 'foundation-sites/js/foundation.core.js',
						// 'foundation-sites/js/foundation.interchange.js',
						//'foundation-sites/js/foundation.util.box.js',
                        //'foundation-sites/js/foundation.util.keyboard.js',
                        //'foundation-sites/js/foundation.util.mediaQuery.js',
                        //'foundation-sites/js/foundation.util.motion.js',
						//'foundation-sites/js/foundation.dropdown.js',
                        //'foundation-sites/js/foundation.reveal.js',
                        //'foundation-sites/js/foundation.util.nest.js',
                        //'foundation-sites/js/foundation.util.timerAndImageLoader.js',
                        //'foundation-sites/js/foundation.util.touch.js',
                        //'foundation-sites/js/foundation.util.triggers.js',
						//'foundation-sites/js/foundation.tooltip.js',
                        'foundation-sites/dist/foundation.min.js',
                        'modernizr/modernizr.js',
                        'what-input/what-input.min.js'
					],
					dest: './js/vendor'
				}
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
