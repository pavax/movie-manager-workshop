/*
 * grunt-usemin
 *
 * https://github.com/yeoman/grunt-usemin
 *
 * Replaces references from non-optimized scripts, stylesheets and other assets
 * to their optimized version within a set of HTML files (or any templates/views).
 */
module.exports.tasks = {
    useminPrepare: {
        html: '<%= build.dir.dev %><%= build.index %>',
        options: {
            dest: '<%= build.dir.prod %>',
            staging: '<%= build.dir.dev %><%= config.usemin %>',
            flow: {
                steps: {
                    js: ['concat', 'uglifyjs'],
                    css: ['cssmin']
                },
                post: {
                    js: [{
                            name: 'uglify',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    preserveComments: 'some'
                                };
                            }
                    }]
                }
            }
        }
    },

    usemin: {
        html: '<%= build.dir.prod %><%= build.index %>',
        options: {
            assetsDirs: ['<%= build.dir.prod %>']
        }
    },

    filerev: {
        options: {
            encoding: 'utf8',
            algorithm: 'md5',
            length: 8
        },
        js: {
            src: '<%= build.dir.prod %><%= build.js.filerev %>'
        },
        styles: {
            src: '<%= build.dir.prod %><%= build.styles.filerev %>'
        }
    }
};