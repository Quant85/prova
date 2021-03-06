//webpack.mix.js

let mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'js').vue()
  .sass('resources/sass/styles.scss', 'css').copy(
        'node_modules/@fortawesome/fontawesome-free/webfonts',
        'public/webfonts'
    ).setPublicPath('public/assets');