module.exports = function(grunt) {

   grunt.initConfig({
      /* Copy files to directory 'dist' */
      copy: {
         public: {
           expand: true,
           cwd: 'public',
           src: '**',
           dest: 'dist'
         }
     },

     clean: {
          dist: {
              src: 'dist'
          }
     },

     useminPrepare: {
       html: 'dist/**/*.html'
     },

     usemin: {
       html: 'dist/**/*.html'
     },


    rev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
      },

      minificados: {
        src: ['dist/js/**/*.min.js', 'dist/css/**/*.min.css']
      }
    },

    compass: {                  // Task
        compile: {                   // Target
          options: {              // Target options
            sassDir: 'public/sass',
            cssDir: 'public/css',
            environment: 'production'
          }
        },
    watch: {

      compass: {
        options: {
          event: ['added', 'changed']
        },
        files: 'public/sass/**/*.sass',
        tasks: 'compass:compile'
      },

      js: {
        options: {
          event: ['changed']
        },
        files: 'public/js/**/*.js',
        tasks: 'jshint:js'
      }
    },

    jshint: {
      js: {
        src: ['public/js/**/*.js']
      }
    }

  });

  // Tasks

  grunt.registerTask('dist', ['clean', 'copy']);

  grunt.registerTask('minifica', ['useminPrepare',
                                  'concat', 'uglify', 'cssmin' ,'rev:minificados', 'usemin']);

  // registrando tasks
  grunt.registerTask('default', ['dist', 'minifica', ]);

  // carregando tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');


}
