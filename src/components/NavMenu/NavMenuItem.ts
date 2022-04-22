import lightning from '@lightningjs/core'
import { Colors } from '../../const/colors'

export class NavMenuItem extends lightning.Component {
  static _template() {
    return {
      h: 50,
      w: 50,
      rect: true,
      color: Colors.grey,
      Icon: {
        texture: {
          type: lightning.textures.ImageTexture,
          src: ''
        }
      }
    }
  }

  _focus() {
    this.setSmooth('color', Colors.yellow)
  }

  _unfocus() {
    this.setSmooth('color', Colors.grey)
  }
}