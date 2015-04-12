/*
 * grunt-contrib-less
 *
 * https://github.com/gruntjs/grunt-contrib-less
 *
 * Compile LESS files to CSS
 */
module.exports.tasks = {
    less: {
        options: {
            paths: ['src']
        },
        app: {
            files: {
                '<%= build.dir.dev %><%= build.styles.main %>': '<%=src.styles.main %>'
            }
        },
        vendor: {
            files: {
                '<%= build.dir.dev %><%= build.styles.vendor %>': '<%= src.styles.vendor %>'
            }
        }
    }
};