require("esbuild").build({
    entryPoints: ["./server/index.js", "./client/index.js"],
    bundle: true,
    platform: "node",
    outdir: "dist",
    target: "node20",
    external: Object.keys(require('./package.json').dependencies),
}).catch(() => process.exit(1));