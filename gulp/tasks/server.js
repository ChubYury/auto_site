export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`,
            routes: {
                "/product": `${app.path.build.html}/product.html`,
            }
        },
        notify: false,
        port: 3000,
    });
}