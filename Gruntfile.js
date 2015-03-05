module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        connect: {
			server: {
				base: '/',
				hostname: 'localhost'
			}
		},

		clean: ["ngCovervid.min.js"],

		uglify: {
			dist: {
				files: {
					'ngCovervid.min.js': ['ngCovervid.js']
				}
			}
		},

		watch: {
			dist: {
				files: 'ngCovervid.js',
				tasks: ['clean', 'uglify', 'watch']
			}
		}

	});

    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'uglify', 'connect:server', 'watch']);
	grunt.registerTask('publish', ['clean', 'uglify']);

};