/*
 * grunt-contrib-watch
 *
 * https://github.com/gruntjs/grunt-contrib-clean
 *
 * Clean files and folders.
 */
module.exports.tasks = {
    clean: {
        src: [
            '<%= build.dir.dev %>',
            '<%= build.dir.prod %>'
        ]
    }
};
