'use strict';

module.exports = function(grunt) {
    return {
        options: {},
        src: {
            src: [
                "<%= eslint.src %>"
            ],
        },
        json: {
            src: [
                "./package.json",
                "<%= paths.src %>/**/*.json",
                "<%= paths.config %>/**/*.json",
            ],
        },
        test: {
            src: [
                "<%= eslint.test %>"
            ],
        },
        grunt: {
            src: [
                "./Gruntfile.js",
                "./grunt/options/*.js",
                "./grunt/tasks/*.js",
                "!./grunt/tasks/todos.js"
            ],
        },
    };
};
