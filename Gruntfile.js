module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			server : {
				options: {
					port: 9000,
					hostname: 'localhost',
					livereload: true,
					open: true
				}
			}
		},
		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: ['sass']
			},
			html: {
				files: ['index.html'],
				options: {
					livereload: true,
				}
			},
			css: {
				files: ['css/*.css'],
				options: {
					livereload: true,
				}
			}
			},
			sass:{ 
    			dist: {
     				 options: { 
       					style: 'expanded',
						compass: true		
     				 },
      			files:{ 
      			  'css/main.css': 'scss/main.scss',
     			 }
			    }
			  }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['connect', 'watch']);
};
