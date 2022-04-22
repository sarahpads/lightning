import lightning from '@lightningjs/core'
import { Colors } from '../../const/colors'

export class SlideShowItem extends lightning.Component {
  static width = 1484
  static height = 500

  static _template() {
    return {
      h: SlideShowItem.height,
      w: SlideShowItem.width,
      rect: true,
      color: Colors.yellow,
    }
  }

  _init() {
    console.log(this.stage.coordsWidth)
  }

  _focus() {
    const shader = {
      type: lightning.shaders.RoundedRectangle,
      radius: 0,
      stroke: 10,
      strokeColor: Colors.white
    }

    this.patch({ shader })
  }

  _unfocus() {
    this.patch({ shader: null })
  }
}

export class ParallelogramShader extends lightning.shaders.WebGLDefaultShader {

}

ParallelogramShader.vertexShaderSource = `
  attribute vec4 aVertexPosition;
  attribute vec2 aTextureCoord;
  attribute vec4 aColor;
  uniform vec2 projection;
  varying vec2 vTextureCoord;
  varying vec4 vColor;

  void main(void) {
    gl_Position = aVertexPosition;
    gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
  }
`

ParallelogramShader.fragmentShaderSource = `
  void main() {
    gl_FragColor = vec4(0.0, 1.0, 1.0, 0.5);
  }
`
    // attribute vec2 aVertexPosition;
    // attribute vec2 aTextureCoord;
    // attribute vec4 aColor;
    // uniform vec2 projection;
    // varying vec2 vTextureCoord;
    // varying vec4 vColor;
    // void main(void){
    //     gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
    //     vTextureCoord = aTextureCoord;
    //     vColor = aColor;
    //     gl_Position.y = -sign(projection.y) * gl_Position.y;
    // }