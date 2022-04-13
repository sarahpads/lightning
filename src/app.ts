import lightning from '@lightningjs/core';

class MyApp extends lightning.Application {
  public static _template() {
    return {
      Splash: {
        rect: true,
        x: 0,
        y: 0,
        color: 0xffba0506,
        h: 100,
        w: 100
      }
    }
  }
}

export default MyApp