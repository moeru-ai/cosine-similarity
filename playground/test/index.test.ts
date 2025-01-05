import { describe, it, expect } from 'vitest'
import { cosineSimilarity } from '@moeru-ai/cosine-similarity'

describe('@moeru-ai/cosine-similarity', async () => {

  it('should calculate cosine similarity correctly', () => {
    const vec1 = new Float64Array([1, 2, 3])
    const vec2 = new Float64Array([4, 5, 6])

    const result = cosineSimilarity(vec1, vec2)

    // test against pre-calculated value:
    expect(result).toBeCloseTo(0.9746318461970762, 5)
  });

  it('should calculate negative cosine similarity correctly', () => {
    const vec1 = new Float64Array([1, 0])
    const vec2 = new Float64Array([-1, 0])

    const result = cosineSimilarity(vec1, vec2)

    // test against pre-calculated value:
    expect(result).toBeCloseTo(-1, 5)
  });

  it('should throw an error when vectors have different lengths', () => {
    const vec1 = new Float64Array([1, 2, 3])
    const vec2 = new Float64Array([4, 5])

    expect(() => cosineSimilarity(vec1, vec2)).toThrowError()
  });
})
