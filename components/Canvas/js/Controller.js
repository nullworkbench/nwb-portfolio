import * as THREE from 'three'

class Controller {
  constructor() {
    this.scene = null
    this.camera = null
    this.renderer = null

    // ウィンドウサイズ
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
    const fov = 85
    const fovRad = (fov / 2) * (Math.PI / 180)
    const dist = this.size.windowHeight / 2 / Math.tan(fovRad) // ウィンドウピッタリのカメラ距離

    // this.camera = new THREE.PerspectiveCamera(
    //   fov, // 画角
    //   this.size.windowWidth / this.size.windowHeight, // アスペクト比
    //   1, // 最短撮影距離
    //   dist * 2 // 最長撮影距離
    // )

    // パースが効かないカメラを作成
    this.camera = new THREE.OrthographicCamera(
      this.size.windowWidth / -2,
      this.size.windowWidth / 2,
      this.size.windowHeight / 2,
      this.size.windowHeight / -2,
      -1000,
      dist * 2
    )

    this.camera.position.set(0, 0, dist)
    this.camera.lookAt(this.scene.position)

    // レンダラーを作成
    this.renderer = new THREE.WebGL1Renderer({
      canvas: $canvas,
      alpha: true,
      antialias: true,
    })

    // レンダラーのサイズを調整
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight)

    // レンダラーのシャドウを有効化
    this.renderer.shadowMap.enabled = true
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
