import * as THREE from 'three'
import Controller from './Controller'

export default class Shape {
  constructor() {
    this.segments = 80
    this.rotationSpeed = 0.001
    this.init()
  }

  // 使用するShape
  init() {
    this.initMaterial()
    this.addIcosahedron()

    // this.addAmbientLight()
    // this.addDirectionalLight(0x74ebd5, 8, 8, -4 * 4) // ターコイズ
    // this.addDirectionalLight(0xacb6e5, -2, -40, -8) // ブルー
    // this.addDirectionalLight(0xfcd29f, -40, 40, -4)
  }

  // 環境光
  addAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0x404040, 1) // （光の色, 光の強さ）
    Controller.scene.add(ambientLight)
  }

  // 指向性ライト
  addDirectionalLight(color, x, y, z) {
    const light = new THREE.PointLight(color, 1) // （光の色, 光の強さ）
    light.position.set(x, y, z)
    light.castShadow = true // シャドウを提供する
    light.shadow.mapSize.width = 2048 // シャドウをきめ細かく
    light.shadow.mapSize.height = 2048
    Controller.scene.add(light)
  }

  // material定義
  initMaterial() {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        color1: {
          value: new THREE.Color(0x74ebd5),
        },
        color2: {
          value: new THREE.Color(0xacb6e5),
        },
        color3: {
          value: new THREE.Color(0xfcd29f),
        },
      },
      vertexShader: `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
      fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;

    varying vec2 vUv;

    void main() {
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
    `,
      //   wireframe: true,
    })
  }

  // geometryから枠線を生成しlineを返す
  appendEdgeLine(geometry) {
    const edges = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xffffff })
    )
    return line
  }

  // 球体
  addIcosahedron() {
    const geometry = new THREE.IcosahedronGeometry(250, 3) // 半径, 面の細かさ

    this.icosahedron = new THREE.Mesh(geometry, this.material)
    this.icosahedronLine = this.appendEdgeLine(geometry)

    // this.icosahedron.rotation.x += 0.5
    // this.icosahedronLine.rotation.x += 0.5

    Controller.scene.add(this.icosahedron)
    Controller.scene.add(this.icosahedronLine)
  }

  // 八面体

  // 毎フレーム更新したいこと
  update() {
    this.icosahedron.rotation.y -= this.rotationSpeed
    this.icosahedronLine.rotation.y -= this.rotationSpeed
  }
}
