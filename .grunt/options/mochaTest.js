module.exports = function(grunt) {
    return {
        options: {
            require: 'babel/register',
            compilers: 'jsx:babel/register,es6:babel/register',
            reporter: 'tap',
        },

        unit: {
            options: {
                captureFile: '<%= paths.test_results%>/unit_test_results.tap',
            },
            src: [
                '<%= paths.tests %>/unit/*Spec.{es6,js,jsx}',
                '<%= paths.tests %>/unit/**/*Spec.{es6,js,jsx}',
            ]
        },
    };
}
