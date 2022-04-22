import lightning from '@lightningjs/core'
import { Colors } from '../../const/colors'
import { getKey, KeyCode } from '../../const/keycode'
import { SlideShowItem } from './SlideShowItem'

export class SlideShow extends lightning.Component {
  private _index = 0
  private _items = [Colors.yellow, Colors.green, Colors.pink]

  static _template() {
    return {
      w: (w: number) => w,
      h: 500,
      rect: true,
      children: []
    }
  }

  _init() {
    console.log(this.stage.coordsWidth)
    this.children = this._items.map((color, index) => ({
      type: SlideShowItem,
      color,
      x: this.stage.coordsWidth * index
    }))
  }

  _handleKey(event: KeyboardEvent) {
    switch (getKey(event)) {
      case KeyCode.KEY_LEFT:
        this.animateLeft()
        break

      case KeyCode.KEY_RIGHT:
        this.animateRight()
        break

      default:
        return false
    }
  }

  _getFocused() {
    console.log(this._index)
  }

  animateLeft() {
    if (this._index === 0) {
      this._index = this._items.length - 1
    } else {
      this._index--
    }
  }

  animateRight() {
    if (this._index === this._items.length - 1) {
      this._index = 0
    } else {
      this._index++
    }
  }
}