/*
 * grunt-replace
 *
 * https://github.com/outaTiME/grunt-replace
 *
 * Replace text patterns
 */

var grunt = require('grunt'),
    _ = require('lodash');


function getFilePaths() {
    var orderedSrc = ['src/app/**/*Module.js', 'src/app/**/*.js', '!src/app/**/*spec.js'],
        result = '';
    grunt.file.expand(orderedSrc).forEach(function(path, index) {
        result += index !== 0 ? '\n\t\t' : '';
        result += '<script src="' + path.replace('src', 'js') + '"></script>';
    });
    result += '\n\t\t<script src="<%= build.templates %>"></script>';
    return result;
}

module.exports.tasks = {
    replace: {
        dev: {
            options: {
                patterns: [
                    {
                        match: /<!-- angular:src:js -->/,
                        replacement: getFilePaths()
                    },
                    {
                        match: /<!-- app:version -->/,
                        replacement: '<%= pkg.version %>'
                    }
                ]
            },
            files: [ {expand: true, flatten: true, src: ['<%= build.dir.dev %><%= build.index %>'], dest: '<%= build.dir.dev %>'} ]
        }
    }
};


