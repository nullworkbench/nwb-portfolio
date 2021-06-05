// three.jsのコードはここに書く
import Controller from './Controller'
import Shape from './Shape'

export default class CanvasGL {
  constructor(props) {
    this.props = props
    this.init()
  }

  init() {
    // Controller初期化
    Controller.init(this.props.$canvas)

    // Shape初期化
    this.shape = new Shape()

    // ウィンドウリサイズリッスン
    window.addEventListener('resize', this.resize.bind(this))

    // フレーム描画開始
    this.loop()
  }

  resize() {
    Controller.resize()
  }

  // レンダリング
  render() {
    this.shape.update()
    Controller.render()
  }

  // フレーム更新
  loop() {
    this.render()
    requestAnimationFrame(this.loop.bind(this))
  }
}
