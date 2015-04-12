/*
 * jsbeautifier
 *
 * https://github.com/vkadam/grunt-jsbeautifier
 *
 * Beautify, unpack or deobfuscate JavaScript and HTML, make JSON/JSONP readable, etc.
 *
 * To be used for config.js after prod build (which minifies it)
 */
module.exports.tasks = {
    jsbeautifier: {
        config: {
            src : ['<%= build.dir.prod %><%= build.config %>'],
            options: {
                js: {
                    braceStyle: "collapse",
                    breakChainedMethods: false,
                    indentChar: " ",
                    indentLevel: 1,
                    indentSize: 4,
                    indentWithTabs: true,
                    keepArrayIndentation: true,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true
                }
            }
        }
    }
};