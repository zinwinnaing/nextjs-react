const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://demo.achromex.co',
  pagesDirectory: __dirname + '/pages',
  ignoreIndexFiles: true,
  targetDirectory: 'public/',
  nextConfigPath: __dirname + '/next.config.js',
  ignoredExtensions: ['png', 'jpg', 'jpeg', 'svg'],
});

console.log(`✅ sitemap.xml generated!`);
