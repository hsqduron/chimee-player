import base from './rollup.config.base';
export default base({
  output:{
    format: 'umd',
    file: 'lib/chimee-player.browser.js'
  }
});
