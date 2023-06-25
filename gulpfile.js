// import { task, src, series } from "gulp";
// // import { createProject } from "gulp-typescript";

// import pkg from 'gulp-typescript';
// const { createProject } = pkg;

// var tsProject = createProject("tsconfig.json");

// // Task which would transpile typescript to javascript
// task("typescript", function () {
//     return tsProject.src().pipe(tsProject()).js.pipe(dest("dist"));
// });

// // Task which would delete the old dist directory if present
// task("build-clean", function () {
//     return del(["./dist"]);
// });

// // Task which would just create a copy of the current views directory in dist directory
// task("views", function () {
//     return src("./src/views/**/*.ejs").pipe(dest("./dist/views"));
// });

// // Task which would just create a copy of the current static assets directory in dist directory
// task("assets", function () {
//     return src("./src/public/assets/**/*").pipe(dest("./dist/public/assets"));
// });

// // The default task which runs at start of the gulpfile.js
// task("default", series("build-clean","typescript", "views", "assets"), () => {
//     console.log("Done");
// });



// // "start": "node dist/index.js",
// // "dev": "nodemon src/index.ts",
// // "build": "tsc -p ."