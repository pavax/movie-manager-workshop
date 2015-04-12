/*
 * grunt-angular-architecture-graph
 *
 * https://github.com/lucalanca/grunt-angular-architecture-graph
 *
 * Create graphs of your angular projects using angular-architecture-graph
 *
 * !!! DEPENDENCY !!!
 * Graphviz - Graph Visualization Software
 * http://www.graphviz.org/ must be available in system environment
 *
 */

module.exports.tasks = {
    angular_architecture_graph: {
        diagram: {
            files: {
                'architecture': [ '<%= build.dir.prod %>/js/app*.js' ]
            }
        }
    }
};