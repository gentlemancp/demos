import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: "./",
    // build: {
    //     rollupOptions: {
    //         input: {
    //             cms: resolve(__dirname, 'geodes-cms/index.html'),
    //             // mindmap: resolve(__dirname, 'mindmap/index.html'),
    //         },
    //         output: {
    //             preserveModules: false
    //         }
    //     },
    // },
    resolve: {
        alias: [
            { find: "@data", replacement: './../assets/data' },
            { find: "@model", replacement: './../assets/model' },
        ]
    }
});