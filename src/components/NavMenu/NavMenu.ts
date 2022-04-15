import lightning from '@lightningjs/core'
import { Colors } from '../../const/colors'
import { getKey, KeyCode } from '../../const/keycode'
import { NavMenuItem } from './NavMenuItem'

export class NavMenu extends lightning.Component {
  private _index = 0
  private _items = [1, 1, 1, 1, 1]

  static _template() {
    return {
      w: 130,
      rect: true,
      color: Colors.transparent,
      h: 500,
      flex: {
        direction: 'column',
        alignItems: 'center',
        paddingTop: 40
      },
      children: []
    }
  }

  _init() {
    this.children = this._items.map((item) => ({
      type: NavMenuItem,
      flexItem: { marginBottom: 50 }
    }))
  }

  _getFocused() {
    if (this.children.length) {
      return this.children[this._index]
    }

    return this
  }

  _handleKey(event: KeyboardEvent) {
    switch (getKey(event)) {
      case KeyCode.KEY_UP:
        if (this._index === 0) return false
        this._index--
        break

      case KeyCode.KEY_DOWN:
        this._index = Math.min(this._index + 1, this._items.length - 1)
        break

      case KeyCode.KEY_SELECT:
        console.log('YOYO LETS GO')
        break

      default:
        return false
    }
  }
}