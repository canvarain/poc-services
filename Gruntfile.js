/*global module:false*/
module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    buildtag: '-dev-' + grunt.template.today(),
    meta: {
      banner: '/**\n' +
        ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %><%= buildtag %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' */'
    },
    clean: [ '<%= distdir %>' ],
    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        files: {
          '<%= distdir %>/services.min.js': ['services.js'],
        }

      }
    },
    jshint: {
      all: ['Gruntfile.js', 'services.js', 'src/*.js'],
      options: {
        eqnull: true
      }
    },
    copy: {
      files: {
        cwd:  './',
        src:  'services.js',
        dest: '<%= distdir %>/',
        expand: true
      }
    }
  });

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dist', 'Perform a clean build', ['jshint', 'clean', 'uglify', 'copy']);
};
