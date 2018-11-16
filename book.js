module.exports = {
  title: 'scuttlebutt modules',
  author: 'mixmix',
  gitbook: '^3.2.3',
  plugins: [
    'anchors',
    'theme-official@2.1.1', '-sharing', '-fontsettings',
    'prism', '-highlight',
    'search-plus', '-search', '-lunr',
    'sitemap'
  ],
  pluginsConfig: {
    'theme-default': {
      'showLevel': false
    },
    sitemap: {
      hostname: 'https://modules.scuttlebutt.nz'
    }
  }
}
