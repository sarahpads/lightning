import lightning from '@lightningjs/core'
import { SlideShow } from '../../components/Slideshow/Slideshow'

export class Landing extends lightning.Component {
  static _template() {
    return {
      SlideShow: {
        type: SlideShow
      }
    }
  }
}