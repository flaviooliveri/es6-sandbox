module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-babel");
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: "jshint.json"
            },
            "gruntfile": ["Gruntfile.js"],
            "example": ["src/**/*.js"]
        },
        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: "src",
                        src: ["*.js"],
                        dest: "build/"
                    }
                ]
            }
        },
        clean: {
            build: ["build"]
        }
    });
    grunt.registerTask("default", ["clean", "jshint", "babel"]);
};

