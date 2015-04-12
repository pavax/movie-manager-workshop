/*
 * grunt-contrib-imagemin
 *
 * https://github.com/gruntjs/grunt-contrib-imagemin
 *
 * Minify images
 */
module.exports.tasks = {
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: '<%= build.dir.prod %>',
                src: ['<%= build.imagesFiltered %>'],
                dest: '<%= build.dir.prod %>'
            }]
        }
    }
};

