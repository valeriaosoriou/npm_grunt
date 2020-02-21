module.exports = function(grunt) {
  
  //PROJECT CONFIGURATION
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //UGLIFY
    uglify: {
      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },

    //WATCH
    watch: {
      all: {
        files: ['sass/style.scss', 'css/style.css', 'js/script.js'],
        tasks: ['sass', 'csslint', 'jshint']
      }
    },

    //SASS
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss',       // 'destination': 'source'
      }
      }
    },

    //CSSLINT
    csslint: {
    // options: {
    //   csslintrc: '.csslintrc'
    // },
    // strict: {
    //   options: {
    //     import: 2
    //   },
    //   src: ['css/style.css']
    // },
      lax: {
        options: {
          import: false,
          'order-alphabetical' :false
        },
        src: ['css/style.css'] //or src: ['css/*.css','!*.min.css']
        }
      },
    
    //JSHINT
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  
  // Default task(s).
  grunt.registerTask('ugly', ['uglify']);
  grunt.registerTask('default', ['watch']); //run this using grunt test
};