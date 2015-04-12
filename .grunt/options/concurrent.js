module.exports = function(grunt) {
    return {
        dev: {
            options: {
                logConcurrentOutput: true
            },
            tasks: [
                // 'shell:ulimit',
                'watch',
                'shell:openapp'
            ],
        },
    };
};
