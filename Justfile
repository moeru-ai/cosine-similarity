list:
  @just --list

# build via `wasm-pack`
build:
  wasm-pack build --target web

# optimize binary size via `wasm-opt`
optimize:
  wasm-opt -Os pkg/moeru_ai_cosine_similarity_bg.wasm -o pkg/moeru_ai_cosine_similarity_bg.wasm
