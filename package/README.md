# @moeru-ai/cosine-similarity

## Install

```bash
npm i @moeru-ai/cosine-similarity
```

## Usage

```ts
import { cosineSimilarity } from '@moeru-ai/cosine-similarity'
import { embedMany } from '@xsai/embed'

const { embeddings } = await embedMany({
  baseURL: 'http://localhost:11434/v1/',
  input: ['sunny day at the beach', 'rainy afternoon in the city'],
  model: 'nomic-embed-text',
})

// eslint-disable-next-line @masknet/no-top-level
console.log('cosine similarity:', cosineSimilarity(embeddings[0], embeddings[1]))
```

## License

[MIT](../LICENSE.md)
