module.exports = {
  basePath: '/eurian/out',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/comic': { page: '/comic' },
    }
  },
}
