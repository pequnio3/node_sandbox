module.exports = function(grunt) {

    grunt.registerTask('lint', [
        'todos',
        'eslint',
    ]);

    grunt.registerTask('build', [
        'clean',
        'lint',
        'webpack',
        'sass',
        'rsync:stage'
    ]);

    grunt.registerTask('docs', [

    ]);
};
