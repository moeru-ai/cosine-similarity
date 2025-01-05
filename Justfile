list:
  @just --list

# build via `wasm-pack`
build:
  wasm-pack build --release --target bundler --out-dir dist --out-name index --no-pack
  rm dist/.gitignore
