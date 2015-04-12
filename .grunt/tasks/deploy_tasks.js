var chalk = require('chalk');

module.exports = function(grunt) {

    grunt.registerTask('deploy',
        [
            "Deploy to stage/prod openstack box",
            chalk.gray("usage: grunt deploy:<\"stage\" | \"prod\">"),
        ].join("\n"),
        function(deployEnv) {
            if (!deployEnv) {
                deployEnv = "stage"
            }
            grunt.task.run([
                'lint',
                'build',
                'rsync:' + deployEnv,
            ]);
        }
    );

};
