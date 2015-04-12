module.exports = function(grunt) {
    return {
        options: {
            sourceMap: true,
        },
        src: [
            '<%= paths.src %>/*.es6',
            '<%= paths.src %>/**/*.es6',
            '<%= paths.lib %>/*.es6',
            '<%= paths.lib %>/**/*.es6',
        ],
        test: [
            '<%= paths.tests %>/*.es6',
            '<%= paths.tests %>/**/*.es6'
        ],
    };
}
