import * as THREE from 'three'

class Controller {
  constructor() {
    this.scene = null
    this.camera = null
    this.renderer = null

    this.size = {
      windowWidth: null,
      windowHeight: null,
    }
  }

  init($canvas) {
    // windowサイズを設定
    this.setSize()

    // Scene作成
    this.scene = new THREE.Scene()

    // 3次元カメラを作成
    this.camera = new THREE.PerspectiveCamera(
      45, // 画角
      this.size.windowWidth / this.size.windowHeight, // アスペクト比
      0.1, // 最短撮影距離
      1000 // 最長撮影距離
    )
    this.camera.position.set(0, 10, -10)
    this.camera.lookAt(this.scene.position)

    // レンダラーを作成
    this.renderer = new THREE.WebGL1Renderer({
      canvas: $canvas,
      //   alpha: true,
    })

    // レンダラーのサイズを調整
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight)
  }

  setSize() {
    this.size.windowWidth = window.innerWidth
    this.size.windowHeight = window.innerHeight
  }

  // ウィンドウリサイズ時に発火（CanvasGLでリッスンしている）
  resize() {
    this.setSize()
    this.camera.aspect = this.size.windowWidth / this.size.windowHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight)
  }

  // レンダリング
  render() {
    this.renderer.render(this.scene, this.camera)
  }
}

export default new Controller()
