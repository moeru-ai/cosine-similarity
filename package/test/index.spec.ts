import { cosineSimilarity } from '@moeru-ai/cosine-similarity'
import { embedMany } from '@xsai/embed'
import { cosineSimilarity as aiCosineSimilarity } from 'ai'
import { describe, expect, it } from 'vitest'

const conn = {
  baseURL: 'http://localhost:11434/v1/',
  model: 'nomic-embed-text',
} as const

// eslint-disable-next-line @masknet/no-top-level
describe('@moeru-ai/cosine-similarity', async () => {
  it('should calculate cosine similarity correctly', () => {
    const vecA = [1, 2, 3]
    const vecB = [4, 5, 6]

    const result = cosineSimilarity(vecA, vecB)

    // test against pre-calculated value:
    expect(result).toBeCloseTo(0.9746318461970762, 5)
  })

  it('should calculate negative cosine similarity correctly', () => {
    const vecA = [1, 0]
    const vecB = [-1, 0]

    const result = cosineSimilarity(vecA, vecB)

    // test against pre-calculated value:
    expect(result).toBeCloseTo(-1, 5)
  })

  it('should return NaN when vectors have different lengths', () => {
    const vecA = [1, 2, 3]
    const vecB = [4, 5]

    const result = cosineSimilarity(vecA, vecB)

    expect(result).toBeNaN()
  })

  it('should be consistent with Vercel AI SDK', async () => {
    const { embeddings } = await embedMany({
      ...conn,
      input: ['sunny day at the beach', 'rainy afternoon in the city'],
    })

    const result = cosineSimilarity(embeddings[0], embeddings[1])
    const aiResult = aiCosineSimilarity(embeddings[0], embeddings[1])

    expect(result).toBe(aiResult)
  })
})
