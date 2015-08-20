module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',
          'assets/stylesheets/features.css': 'assets/stylesheets/src/features.scss',
          'assets/stylesheets/pricing.css': 'assets/stylesheets/src/pricing.scss',
          'assets/stylesheets/portfolio.css': 'assets/stylesheets/src/portfolio.scss',
          'assets/stylesheets/team.css': 'assets/stylesheets/src/team.scss',
          'assets/stylesheets/testimonial.css': 'assets/stylesheets/src/testimonial.scss',
          'assets/stylesheets/contact.css': 'assets/stylesheets/src/contact.scss',
          'assets/stylesheets/newsletter.css': 'assets/stylesheets/src/newsletter.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css': [
                                          'assets/stylesheets/common.css',
                                          'assets/stylesheets/land.css',
                                          'assets/stylesheets/features.css',
                                          'assets/stylesheets/pricing.css',
                                          'assets/stylesheets/portfolio.css',
                                          'assets/stylesheets/team.css',
                                          'assets/stylesheets/testimonial.css',
                                          'assets/stylesheets/contact.css',
                                          'assets/stylesheets/newsletter.css'
                                         ]
        }
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'cssmin', 'watch'])
}