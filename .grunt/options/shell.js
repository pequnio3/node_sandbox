module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('./package.json');

    var result = {
        options: {
            stdout: true,
            stderr: true,
        },

        startserver: {
            // Sets shell env var so other shell scripts can access them
            command: "./bin/start",
        },

    };
    return result;
};
