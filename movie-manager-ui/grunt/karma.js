/*
 * grunt-karma
 *
 * https://github.com/karma-runner/grunt-karma
 *
 * Grunt plugin for Karma test runner
 */
module.exports.tasks = {
    karma: {
        options: {
            files: [
                '<%= test.vendor %>',
                '<%= test.mocks %>',
                '<%= test.config %>',
                '<%= test.templates %>',
                '<%= test.modules %>',
                '<%= test.src %>',
                '<%= test.spec %>'
            ],
            frameworks: ['jasmine'],
            reporters: ['spec'],
            plugins: [
                'karma-jasmine',
                'karma-spec-reporter',
                'karma-chrome-launcher',
                'karma-phantomjs-launcher'
            ]
        },
        unit: {
            browsers: ['Chrome'],
            logLevel: 'info',
            background: true
        },
        continuous: {
            browsers: ['PhantomJS'],
            logLevel: 'info',
            singleRun: true
        }
    }
};