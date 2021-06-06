// three.jsのコードはここに書く
import EventBus from '@/utils/event-bus'
import Controller from './Controller'
import Shape from './Shape'

export default class CanvasGL {
  constructor(props) {
    this.props = props

    // イベント登録
    EventBus.$on('THREE_PATH_TRANSITION', this.pathTransition.bind(this))

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

  pathTransition(newPath) {
    switch (newPath) {
      case 'index':
      case 'about':
      default:
    }
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
