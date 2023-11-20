const settings = {
  entrypoints: ['src/app/example/testing.js', 'src/app/home_/test1.js'],
  outdir: 'static/js',
  format: "esm",
  naming: "[dir]/[name].[ext]", // default
  root: 'src/app/',
}

const result = await Bun.build(settings)


if (!result.success) {
  console.error("Build failed");
  for (const message of result.logs) {
    console.error(message);
  }
}else{
  console.error("Build successful");
}
