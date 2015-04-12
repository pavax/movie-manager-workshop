/*
 * grunt-babel
 *
 * https://github.com/babel/grunt-babel
 *
 * Turn ES6 code into vanilla ES5 with no runtime required using babel
 */
module.exports.tasks = {
    babel: {
        dev: {
            expand: true,
            src: ['<%= build.dir.dev %><%= build.js.files %>'],
            dest: '',
            ext: '.js'
        },
        options: {
            sourceMap: false
        }
    }
};
