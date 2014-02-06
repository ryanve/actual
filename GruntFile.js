module.exports = function(grunt) {
  var _ = grunt.util._,
    pkg = grunt.file.readJSON('package.json'),
    path = require('path'),
    from = 'src/',
    main = pkg.main && path.basename(pkg.main) || 'index.js',
    source = [_.find([from + 'index.js', from + main, from + pkg.name], function(v) {
      return this.existsSync(v);
    }, require('fs'))],
    holder = (function(who) {
      return typeof who == 'string' ? who.split(/\s+</)[0].trim() : who && who.name || '';
    }(pkg.author));

  grunt.initConfig({
    pkg: pkg,
    aok: { test: ['./test'] },
    jshint: {
      // gruntjs.com/configuring-tasks#globbing-patterns
      // **/** matches in current and sub dirs
      all: ['./'], // current dir and sub dirs
      sub: ['*/'], // sub dirs
      dir: ['*.js'], // current dir
      src: ['src/'],
      test: ['test/'],
      grunt: [path.basename(__filename)],
      build: [main],
      options: {
        ignores: ['**/**/node_modules/', '**/**/vendor/', '**/**.min.js'],
        debug:true, expr:true, sub:true, boss:true, supernew:true, node:true, 
        undef:true, unused:true, devel:true, evil:true, laxcomma:true, eqnull:true, 
        browser:true, globals:{ender:true, define:true}, jquery:true, maxerr:10
      }
    },
    concat: {
      options: {
        banner: [
          '/*!',
          ' * <%= pkg.name %> <%= pkg.version %>+<%= grunt.template.today("UTC:yyyymmddHHMM") %>',
          ' * <%= pkg.homepage %>',
          ' * MIT License <%= grunt.template.today("UTC:yyyy") %> ' + holder,
          ' */\n\n'
        ].join('\n')
      },
      build: {
        files: _.object([main], [source])
      }
    },
    uglify: {
      options: {
        report: 'gzip',
        preserveComments: 'some'
      },
      build: {
        files: _.object([main.replace(/\.js$/i, '.min.js')], [main])
      }
    }
  });

  grunt.loadNpmTasks('aok');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jshint:grunt', 'jshint:sub', 'concat', 'jshint:build', 'uglify']);
};