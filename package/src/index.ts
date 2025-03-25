// eslint-disable-next-line func-style
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const len = vecA.length

  if (len !== vecB.length)
    return Number.NaN

  if (len === 0)
    return 0

  let dotProduct = 0
  let magnitudeA = 0
  let magnitudeB = 0
  let i = 0

  while (i < len) {
    const valueA = vecA[i]
    const valueB = vecB[i]

    dotProduct += valueA * valueB
    magnitudeA += valueA * valueA
    magnitudeB += valueB * valueB
    i++
  }

  return magnitudeA === 0 || magnitudeB === 0
    ? 0
    : dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB))
}
