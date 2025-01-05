list:
  @just --list

# build via `wasm-pack`
# target: web, bundler
# patch from https://gist.github.com/nicolas-sabbatini/8af10dddc96be76d2bf24fc671131add#file-wasm-bindgen-macroquad-L131-L135
build target='bundler':
  wasm-pack build --release --target {{target}} --out-dir dist --out-name index --no-pack
  rm dist/.gitignore
  # sed -i "s/import \* as __wbg_star0 from 'env';//" dist/index.js
  # sed -i "s/let wasm;/let wasm; export const set_wasm = (w) => wasm = w;/" dist/index.js
  # sed -i "s/imports\['env'\] = __wbg_star0;/return imports.wbg\;/" dist/index.js
  # sed -i "s/const imports = __wbg_get_imports();/return __wbg_get_imports();/" dist/index.js
