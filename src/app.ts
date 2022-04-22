import lightning from '@lightningjs/core'
import { NavMenu } from './components/NavMenu/NavMenu';
import { Colors } from './const/colors';
import { getKey, KeyCode } from './const/keycode'
import { Landing } from './screens/Landing/Landing';

class MyApp extends lightning.Application {
  private _sideMenuOpen: boolean = false;

  public static _template() {
    return {
      Main: {
        type: Landing,
        x: 0,
        y: 0,
        w: (w: number) => w,
        h: (h: number) => h,
      },
      NavMenu: {
        type: NavMenu,
        x: 0,
        y: 0,
        h: (h: number) => h
      },
      Splash: {
        rect: true,
        color: Colors.pink,
        visible: false,
        w: (w: number) => w,
        h: (h: number) => h
      },
    }
  }

  _init() {
    this.w = this.stage.coordsWidth
    this.h = this.stage.coordsHeight

    setTimeout(() => {
      const fadeOut = this.tag('Splash').animation({
          duration: 1,
          repeat: 0,
          stopMethod: 'immediate',
          actions: [
            {
              p: 'alpha',
              v: {0: 1, 1: 0}
            },
          ]
      });

      fadeOut.start()
    }, 1000)
  }

  _handleKey(event: KeyboardEvent) {
    switch (getKey(event)) {
      case KeyCode.KEY_F1:
        this._sideMenuOpen = !this._sideMenuOpen
        break

      default:
        return false
    }
  }

  _getFocused() {
    if (this._sideMenuOpen) {
      return this.tag('NavMenu')
    }

    return this.tag('Main')
  }
}

export default MyApp