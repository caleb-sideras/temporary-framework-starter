const appDir = {
  entrypoints: ['src/app/example/testing.js', 'src/app/home_/test1.js'],
  outdir: 'static/js',
  format: "esm",
  naming: "[dir]/[name].[ext]", // default
  root: 'src/app/',
}

const globalDir = {
  entrypoints: ['index.js'],
  outdir: 'static/js',
  format: "esm",
  naming: "[dir]/[name].[ext]", // default
}

function printResult(result, out){
  if (!result.success) {
    console.error("Build failed:", out);
    for (const message of result.logs) {
      console.error(message);
    }
  } else {
    console.log("Build successful:", out);
  }
}

const appResult = await Bun.build(appDir)
const globalResult = await Bun.build(globalDir)

printResult(appResult, "App Directory")
printResult(globalResult, "Global Directory")
