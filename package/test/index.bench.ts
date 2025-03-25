import { cosineSimilarity as moeruAICosineSimilarity } from '@moeru-ai/cosine-similarity'
import { embedMany } from '@xsai/embed'
import { cosineSimilarity as aiCosineSimilarity } from 'ai'
import computeCosineSimilarity from 'compute-cosine-similarity'
import { cosineSimilarity as fastCosineSimilarity } from 'fast-cosine-similarity'
import { bench, describe } from 'vitest'

const conn = {
  baseURL: 'http://localhost:11434/v1/',
  model: 'nomic-embed-text',
} as const

// eslint-disable-next-line @masknet/no-top-level
describe('basic', () => {
  const vecA = [5, 23, 2, 5, 9]
  const vecB = [3, 21, 2, 5, 14]

  bench('@moeru-ai/cosine-similarity', () => {
    moeruAICosineSimilarity(vecA, vecB)
  })

  bench('ai', () => {
    aiCosineSimilarity(vecA, vecB)
  })

  bench('compute-cosine-similarity', () => {
    computeCosineSimilarity(vecA, vecB)
  })

  bench('fast-cosine-similarity', () => {
    fastCosineSimilarity(vecA, vecB)
  })
})

// eslint-disable-next-line @masknet/no-top-level
describe('words', async () => {
  const { embeddings } = await embedMany({
    ...conn,
    input: ['sunny day at the beach', 'rainy afternoon in the city'],
  })

  const vecA = embeddings[0]
  const vecB = embeddings[1]

  bench('@moeru-ai/cosine-similarity', () => {
    moeruAICosineSimilarity(vecA, vecB)
  })

  bench('ai', () => {
    aiCosineSimilarity(vecA, vecB)
  })

  bench('compute-cosine-similarity', () => {
    computeCosineSimilarity(vecA, vecB)
  })

  bench('fast-cosine-similarity', () => {
    fastCosineSimilarity(vecA, vecB)
  })
})

// eslint-disable-next-line @masknet/no-top-level
describe('lipsum 1', async () => {
  const { embeddings } = await embedMany({
    ...conn,
    input: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet orci ut arcu rhoncus interdum. Nulla aliquet efficitur gravida. Vestibulum ac sagittis massa, et ornare sem. Proin dignissim in orci nec aliquam. Nam pharetra iaculis mauris volutpat venenatis. Cras venenatis eleifend lobortis. Ut suscipit sapien id tempor condimentum. Vestibulum varius, augue vitae interdum ornare, ligula purus blandit metus, nec dignissim quam nibh posuere dolor. Aenean vitae tortor non tortor molestie eleifend ac eu diam. Sed facilisis pharetra laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a nisi id lorem bibendum varius sit amet nec massa. Pellentesque vel pulvinar tortor.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis dapibus mattis. Quisque ornare mollis odio, a eleifend ipsum vestibulum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquam ornare ligula, in sagittis felis tincidunt a. Phasellus vestibulum finibus orci, a fermentum felis ornare eu. Vivamus venenatis iaculis lorem at volutpat. Mauris molestie justo vitae massa faucibus bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel purus a dolor semper pellentesque. Maecenas ac tempor nisl, nec faucibus nunc. Aenean fermentum molestie metus, vel facilisis risus pretium non. Aliquam iaculis ut dui non blandit. Vestibulum porta quam suscipit bibendum rhoncus. Curabitur tristique interdum consectetur. Sed non tellus sed nibh luctus facilisis. Praesent eu enim et dolor venenatis tempor nec id dolor.',
    ],
  })

  const vecA = embeddings[0]
  const vecB = embeddings[1]

  bench('@moeru-ai/cosine-similarity', () => {
    moeruAICosineSimilarity(vecA, vecB)
  })

  bench('ai', () => {
    aiCosineSimilarity(vecA, vecB)
  })

  bench('compute-cosine-similarity', () => {
    computeCosineSimilarity(vecA, vecB)
  })

  bench('fast-cosine-similarity', () => {
    fastCosineSimilarity(vecA, vecB)
  })
})

// eslint-disable-next-line @masknet/no-top-level
describe('lipsum 5', async () => {
  const { embeddings } = await embedMany({
    ...conn,
    input: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et orci tellus. Pellentesque efficitur venenatis aliquet. Vivamus consequat gravida porta. Praesent quis odio arcu. Morbi vel viverra metus. Pellentesque ullamcorper est eu metus tempor, ac pellentesque nisi sagittis. Donec risus tortor, aliquam ac nibh eu, semper condimentum ipsum. Quisque non maximus nibh. Suspendisse sollicitudin, mauris a sodales imperdiet, felis augue ullamcorper diam, in vulputate ex mi in velit. Phasellus suscipit eleifend eros. Cras et elementum purus, vitae aliquet leo. Donec consectetur id libero at sagittis.
Donec dignissim lacus purus, laoreet venenatis turpis tempus id. Vivamus consequat lacinia mi, ac congue quam commodo vel. Phasellus congue est sed elit venenatis, at fermentum orci commodo. Vestibulum suscipit magna vitae tincidunt tincidunt. Nullam sapien risus, euismod vel gravida sit amet, faucibus nec libero. Nulla dignissim sodales sodales. Duis quis neque ut diam cursus venenatis. Integer tempus elit at tristique placerat. Vestibulum porta augue quis libero dictum, vitae mollis orci accumsan. Nam leo libero, feugiat ut accumsan sed, fringilla eu mi.
Donec quis tempus eros. Aliquam turpis ante, accumsan quis rhoncus eget, rutrum eget felis. Etiam convallis nulla vel ligula maximus, et dapibus lorem vehicula. Nulla porta est tempor lorem hendrerit, sed iaculis elit vestibulum. Etiam tempus, libero non vehicula mollis, enim eros posuere mi, at consectetur felis purus fringilla neque. Nullam facilisis, nibh vitae vulputate laoreet, neque justo sagittis felis, sit amet interdum felis tellus sed metus. In ligula lorem, iaculis id enim at, pellentesque pulvinar quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl neque, accumsan vitae est sagittis, lacinia porta eros. Pellentesque convallis nisl turpis, non tempor enim mollis vitae. Proin quis lectus ante. Ut suscipit lorem mauris, sed luctus leo pulvinar vitae. Vivamus quis tincidunt ex, eget molestie dui. Suspendisse purus enim, tincidunt interdum metus quis, convallis blandit enim.
Donec eu congue est. Ut accumsan nibh in enim scelerisque, vel imperdiet leo tempor. Cras facilisis, velit nec aliquet fermentum, elit dui suscipit diam, ut ornare orci sem a lectus. Etiam viverra vitae sapien non vestibulum. Suspendisse viverra erat sagittis tortor facilisis pharetra. Suspendisse enim arcu, convallis eget aliquet a, pretium ac magna. Ut a euismod sapien. Phasellus scelerisque condimentum dolor, non aliquam magna vestibulum sed. Nulla at orci tempor, aliquam felis ut, elementum mi. Nullam magna elit, tincidunt quis tellus et, blandit cursus lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec nunc vitae sem blandit porttitor quis ac odio. Cras ligula risus, vestibulum in mauris eu, porta gravida nibh. Pellentesque sed arcu dolor. Nunc augue felis, bibendum non erat eget, ullamcorper venenatis augue.
Suspendisse sed ex pellentesque, viverra lectus eu, aliquam augue. In neque eros, interdum sed dolor eu, fringilla interdum tellus. Aliquam erat volutpat. Pellentesque nec fermentum neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque quis nisl odio. In hac habitasse platea dictumst. Etiam porta nibh odio, vel iaculis mi condimentum a. Praesent at augue justo. Cras molestie id tortor molestie iaculis.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis rutrum ex. Vestibulum consectetur blandit dictum. Ut risus urna, volutpat ut felis at, fringilla tristique leo. Nulla fermentum dolor non lacus accumsan tempor. In at accumsan est. Sed posuere velit sit amet lorem lobortis, eget rhoncus orci gravida. Vivamus justo purus, condimentum id tristique id, rhoncus efficitur massa. Integer id ex in quam facilisis congue non at sem. Suspendisse vitae mi in odio fermentum luctus. Aenean quis purus in turpis convallis congue. Sed faucibus sapien a ipsum malesuada aliquam. Cras augue lorem, sollicitudin non dictum quis, dignissim in risus. Donec viverra purus odio, at tristique nisl sagittis at.
Phasellus luctus, leo et finibus feugiat, enim ex consequat ante, eget feugiat dui ligula quis nisl. Aliquam consequat egestas nisi, dignissim bibendum mi tincidunt vitae. Aenean efficitur libero urna. Etiam bibendum feugiat rhoncus. Nunc lobortis finibus tellus, eget accumsan dolor. Sed neque odio, rhoncus sit amet urna a, consectetur suscipit tellus. Fusce placerat nibh leo, quis auctor arcu aliquet eget. Donec vitae ante fringilla, ullamcorper lorem eu, congue massa. Vivamus at magna in massa sollicitudin convallis. Mauris ac pulvinar elit. Donec posuere, mi non tincidunt aliquam, nunc elit mattis lectus, congue commodo risus diam in magna. Sed varius nec lorem et laoreet.
Etiam placerat purus diam, eu semper leo cursus eu. Fusce at gravida est, vel dignissim quam. Nullam mattis nisl nec lectus ornare pharetra. Sed volutpat luctus ex, eget tincidunt sem lobortis eget. In consectetur maximus mauris, vitae ultricies leo malesuada tristique. Praesent vitae ornare elit. Integer felis eros, vestibulum in nisl sit amet, pellentesque volutpat quam. Phasellus dignissim orci at euismod convallis. Curabitur justo sem, convallis ut nulla quis, elementum vulputate sem. Praesent ullamcorper eget enim vitae feugiat. Cras vel nunc a ex ultricies sodales. Aenean bibendum dapibus ipsum sit amet vestibulum. Pellentesque in lectus ut velit dignissim pharetra. Vestibulum consequat auctor tortor, ac pulvinar massa. Sed luctus massa ut lobortis efficitur. Morbi pretium magna et metus imperdiet eleifend.
Fusce feugiat magna enim, volutpat feugiat tortor accumsan eleifend. Nam convallis porta laoreet. Suspendisse dapibus tempor vulputate. Duis posuere mollis mi sed rutrum. Ut consectetur, magna id semper gravida, metus sapien consectetur ipsum, eu fringilla mi enim a tortor. Etiam in placerat augue. Proin sagittis est in diam pharetra tempor. Integer in euismod orci. Donec consequat sollicitudin blandit.
Mauris vitae blandit diam. Nunc viverra, elit nec hendrerit facilisis, nunc mi convallis lacus, ultricies vehicula augue mauris in elit. Nullam vulputate vestibulum nisi at vulputate. Sed vitae placerat quam, quis consequat nisl. Praesent non imperdiet quam. Aenean in pulvinar ligula. Donec ac faucibus metus. Morbi massa neque, faucibus quis tellus eget, vestibulum lacinia urna. Integer iaculis leo eros, et pharetra mauris rutrum nec. Vestibulum sodales nibh id arcu vehicula facilisis. Pellentesque felis massa, tincidunt eu risus id, interdum lobortis tortor.`,
    ],
  })

  const vecA = embeddings[0]
  const vecB = embeddings[1]

  bench('@moeru-ai/cosine-similarity', () => {
    moeruAICosineSimilarity(vecA, vecB)
  })

  bench('ai', () => {
    aiCosineSimilarity(vecA, vecB)
  })

  bench('compute-cosine-similarity', () => {
    computeCosineSimilarity(vecA, vecB)
  })

  bench('fast-cosine-similarity', () => {
    fastCosineSimilarity(vecA, vecB)
  })
})
