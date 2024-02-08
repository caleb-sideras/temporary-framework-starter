const globalDir = {
  entrypoints: ['index.ts'],
  outdir: 'static/js',
  format: "esm",
  naming: "[dir]/[name].[ext]", // default
  // root: 'src/app/',
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

const globalResult = await Bun.build(globalDir)
printResult(globalResult, "Global Directory")
