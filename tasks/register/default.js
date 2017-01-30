module.exports = function (grunt) {
	grunt.registerTask('default', ['copy', 'babel', 'sass_globbing', 'sass', 'postcss', 'watch']);
};
