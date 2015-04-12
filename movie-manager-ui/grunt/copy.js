/*
 * grunt-contrib-copy
 *
 * https://github.com/gruntjs/grunt-contrib-copy
 *
 * Copy files and folders
 */
module.exports.tasks = {

    copy: {
        app_assets: {
            files: [
                {cwd: '<%= src.images.cwd %>', src: ['<%= src.images.src %>'], dest: '<%= build.dir.dev %><%= build.images %>', expand: true },
                {cwd: '<%= src.fonts.cwd %>', src: ['<%= src.fonts.src %>'], dest: '<%= build.dir.dev %><%= build.fonts %>', expand: true }
            ]
        },
        app_index: {
            files: [{src: ['<%= src.index %>'], dest: '<%= build.dir.dev %>', expand: true, flatten: true }]
        },
        app_js: {
            files: [{cwd: '<%= src.js.cwd %>', src: ['<%= src.js.src %>'], dest: '<%= build.dir.dev %><%= build.js.dir %>', expand: true }]
        },
        app_i18n: {
            files: [{cwd: '<%= src.i18n.cwd %>', src: ['<%= src.i18n.src %>'], dest: '<%= build.dir.dev %><%= build.i18n %>', expand: true }]
        },
        app_config: {
            files: [
                {src: ['<%= src.config.dev %>'], dest: '<%= build.dir.dev %>', expand: true, flatten: true, rename: function(dest, src) {
                    return dest + src.replace(/dev\.js/, "js");
                }}
            ]
        },
        prod: {
            files: [
                {src: ['<%= build.dir.dev %><%= build.index %>'], dest: '<%= build.dir.prod %>', expand: true, flatten: true},
                {cwd: '<%= build.dir.dev %>', src: ['<%= build.assets %>'], dest: '<%= build.dir.prod %>', expand: true },
                {src: ['<%= src.config.prod %>'], dest: '<%= build.dir.dev %>', expand: true, flatten: true, rename: function(dest, src) {
                    return dest + src.replace(/prod\.js/, "js");
                }}
            ]
        }
    }
};
