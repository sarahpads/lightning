import lightning from '@lightningjs/core'

export class SlideShow extends lightning.Component {
  static _template() {
    return {
      Image: {
        x: 0,
        y: 0,
        src: 'https://source.unsplash.com/random'
      }
    }
  }
}