/*
 * html2js
 *
 * https://github.com/karlgoldstein/grunt-html2js
 *
 * Converts AngularJS templates to JavaScript
 */
module.exports.tasks = {
    html2js: {
        app: {
            options: {
                base: '<%= src.templates.base %>'
            },
            src: [ '<%= src.templates.src %>' ],
            dest: '<%= build.dir.dev %><%= build.templates %>'
        }
    }
};