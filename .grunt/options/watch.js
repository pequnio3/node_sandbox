module.exports = function(grunt) {
    return {
        gruntfile: {
            files: './Gruntfile.js',
            tasks: [
                'jshint:gruntfile'
            ]
        },
        grunttasks: {
            files: [
                'grunt/**/*',
                '.jshintrc',
                '.jscs.jquery.json'
            ],
            options: {
                reload: true
            },
            tasks: [
                // 'jshint:grunttasks'
            ]
        },

        jsx: {
            files: [
                '<%= eslint.src %>',
            ],
            tasks: [
                'lint',
                'test',
            ]
        },

        tests: {
            files: [
                '<%= eslint.test %>'
            ],
            tasks: [
                'lint',
                'test',
            ]
        },

    };
};
