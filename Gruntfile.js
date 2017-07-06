module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*tslint: {
        default: {
            options: {
                rulesDirectory: 'node_modules/tslint-microsoft-contrib',
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src : [
                    "jsdeck.ts"
                ]
            }
        }
    },*/
    ts : {
        default : {
             options: {
                sourceMap : false
            },
            src : [
                'jsdeck.ts'
            ]
        }
    },
  });

    grunt.loadNpmTasks('grunt-ts');
    //grunt.loadNpmTasks('grunt-tslint');

    grunt.task.registerTask('test', 'Run Mocha test suite', function() {
        var exec = require('child_process').exec;
            var cb = this.async();
            exec('npm test', {cwd: './'}, function(err, stdout, stderr) {
                console.log(stdout);
                cb();
            });
    });

    grunt.registerTask('default', ['tslint']);
    grunt.registerTask('build', ['ts']);

};