module.exports = {
    plugins: [
        require("autoprefixer"),
        require("@fullhuman/postcss-purgecss")({
            content: ["./index.html"],
            css: ["./css/styles.css"],
            variables: true,
            safelist: ["flex", "visible", "share-active", "color-white"]
        }),
        require("cssnano")
    ]
}