/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     tslint: {
        options: {
           rulesDirectory: 'node_modules/tslint-microsoft-contrib',
           configuration: grunt.file.readJSON("tslint.json")
        },
        files: {
           src: ['src/file1.ts', 'src/file2.ts']
        }
     }
  });


  grunt.loadNpmTasks('grunt-tslint');

  // Default task.
  grunt.registerTask('default', ['tslint']);

};
