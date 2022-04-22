import lightning from '@lightningjs/core'
import { Carousel } from '@lightningjs/ui'
import { SlideShowItem } from '../../components/Slideshow/SlideShowItem'
import { Colors } from '../../const/colors'

export class Landing extends lightning.Component {
  static _template() {
    return {
      SlideShow: {
        type: Carousel,
        itemType: SlideShowItem,
        h: 500,
        w: 1920,
        scroll: 0.5,
        items: [
          { type: SlideShowItem, color: Colors.yellow },
          { type: SlideShowItem, color: Colors.green },
          { type: SlideShowItem, color: Colors.pink }
        ]
      },
    }
  }

  _getFocused() {
    return this.tag('SlideShow')
  }
}