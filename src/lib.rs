#![no_std]

extern crate alloc;
extern crate no_panics_whatsoever;

use core::alloc::{GlobalAlloc, Layout};

use alloc::{format,vec::Vec};
use js_sys::Error;
use micromath::F32Ext;
use wasm_bindgen::prelude::*;

pub struct Allocator;

unsafe impl GlobalAlloc for Allocator {
    unsafe fn alloc(&self, _layout: Layout) -> *mut u8 {
        0 as *mut u8
    }
    unsafe fn dealloc(&self, _ptr: *mut u8, _layout: Layout) {
        unreachable!();
    }
}

#[global_allocator]
static GLOBAL_ALLOCATOR: Allocator = Allocator;

#[wasm_bindgen(js_name = cosineSimilarity)]
pub fn cosine_similarity(vec1: Vec<f32>, vec2: Vec<f32>) -> Result<f32, Error>{
    if vec1.len() != vec2.len() {
        return Err(Error::new(&format!(
            "Vectors must have the same length (vec1: {}, vec2: {})",
            vec1.len(),
            vec2.len()
        )))
    }

    fn dot_product(vec1: &Vec<f32>, vec2: &Vec<f32>) -> f32 {
        vec1.iter().zip(vec2.iter()).fold(0.0, |sum, (&x, &y)| sum + x * y)
    }

    fn magnitude(vec: &Vec<f32>) -> f32 {
        vec.iter().fold(0.0, |sum, &x| sum + x * x).sqrt()
    }

    Ok(dot_product(&vec1, &vec2) / (magnitude(&vec1) * magnitude(&vec2)))
}
