import nodemon from 'gulp-nodemon'

export default (gulp, path) => {
    gulp.task('server', () => {
        nodemon({
            script: path.root + '/bin/www',
            execMap: {
                "js": "node"
            },
            watch: [
                `${path.root}/app.js`,
                `${path.root}/config/**/*`,
                `${path.root}/controllers/**/*`,
                `${path.root}/middlewares/**/*`,
                `${path.root}/pages/**/*`,
                `${path.root}/routes/**/*`
            ],
            env: {
                'NODE_ENV': 'development'
            },
            tasks: ['eslint']
        }).on('start', function() {
            gutil.log(gutil.colors.yellow(
                'http://localhost:8837'));
        })
    })
}
