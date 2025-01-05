#![no_std]

extern crate alloc;

use alloc::{format,vec::Vec};
use js_sys::Error;
use lol_alloc::{AssumeSingleThreaded, FreeListAllocator};
use libm::sqrt;
use wasm_bindgen::prelude::*;

// https://github.com/craig-macomber/lol_alloc#usage
#[global_allocator]
static GLOBAL_ALLOCATOR: AssumeSingleThreaded<FreeListAllocator> = unsafe { AssumeSingleThreaded::new(FreeListAllocator::new()) };

// https://docs.rust-embedded.org/book/start/panicking.html
#[cfg(debug_assertions)]
extern crate panic_semihosting;
#[cfg(not(debug_assertions))]
extern crate panic_halt;

#[wasm_bindgen(js_name = cosineSimilarity)]
pub fn cosine_similarity(vec1: Vec<f64>, vec2: Vec<f64>) -> Result<f64, Error>{
    if vec1.len() != vec2.len() {
        return Err(Error::new(&format!(
            "Vectors must have the same length (vec1: {}, vec2: {})",
            vec1.len(),
            vec2.len()
        )))
    }

    fn dot_product(vec1: &Vec<f64>, vec2: &Vec<f64>) -> f64 {
        vec1.iter().zip(vec2.iter()).fold(0.0, |sum, (&x, &y)| sum + x * y)
    }

    fn magnitude(vec: &Vec<f64>) -> f64 {
        sqrt(vec.iter().fold(0.0, |sum, &x| sum + x * x))
    }

    Ok(dot_product(&vec1, &vec2) / (magnitude(&vec1) * magnitude(&vec2)))
}
