import * as THREE from 'three'
import { Vector2 } from 'three'
import Controller from './Controller'

export default class Shape {
  constructor() {
    this.segments = 80
    this.rotationSpeed = 0.001

    // マウス座標
    this.mouse = new Vector2(0, 0)

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

    this.mixer = new THREE.AnimationMixer(this.icosahedron)
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
    const radius = (function () {
      const windowWidth = Controller.size.windowWidth
      // スマホの場合は少し大きくする
      if (windowWidth < 600) {
        return windowWidth * 0.35
      } else {
        return windowWidth * 0.15
      }
    })()
    const geometry = new THREE.IcosahedronGeometry(radius, 2) // 半径, 面の細かさ

    this.icosahedron = new THREE.Mesh(geometry, this.material)
    this.icosahedronLine = this.appendEdgeLine(geometry)
    this.icosahedronLine.scale.set(1.005, 1.005, 1.005) // ちょっとだけ大きくして枠線を際立たせる

    Controller.scene.add(this.icosahedron)
    this.icosahedron.add(this.icosahedronLine)

    // this.icosahedron.rotateOnAxis.x += 60
  }

  // ページ遷移でShapeの動きを変える
  shapeTransition(path) {
    const clipJSON = {
      tracks: [],
    }

    let positionKeyframeTrackJSON
    let scaleKeyframeTrackJSON

    switch (path) {
      case 'index': {
        positionKeyframeTrackJSON = {
          name: '.position',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.position.x,
            this.icosahedron.position.y,
            this.icosahedron.position.z,
            0,
            0,
            0,
          ],
        }
        scaleKeyframeTrackJSON = {
          name: '.scale',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.scale.x,
            this.icosahedron.scale.y,
            this.icosahedron.scale.z,
            1,
            1,
            1,
          ],
        }

        break
      }
      case 'about': {
        // 左端に移動するアニメーション
        positionKeyframeTrackJSON = {
          name: '.position', // .parseTrackName
          type: 'vector', // nameに設定したプロパティの型
          times: [0, 0.8], // 時間の区切り
          values: [
            this.icosahedron.position.x,
            this.icosahedron.position.y,
            this.icosahedron.position.z,
            -Controller.size.windowWidth / 2,
            0,
            0,
          ], // 0秒の時に[0,0,0], 1秒の時に[2,1,15]
        }
        // 拡大するアニメーション
        scaleKeyframeTrackJSON = {
          name: '.scale', // .parseTrackName
          type: 'vector', // nameに設定したプロパティの型
          times: [0, 0.8], // 時間の区切り
          values: [
            this.icosahedron.scale.x,
            this.icosahedron.scale.y,
            this.icosahedron.scale.z,
            2,
            2,
            2,
          ], // 0秒の時に[0,0,0], 1秒の時に[2,2,2]。元のscaleから2倍の大きさに
        }

        break
      }
      case 'works': {
        positionKeyframeTrackJSON = {
          name: '.position',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.position.x,
            this.icosahedron.position.y,
            this.icosahedron.position.z,
            0,
            0,
            0,
          ],
        }
        scaleKeyframeTrackJSON = {
          name: '.scale',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.scale.x,
            this.icosahedron.scale.y,
            this.icosahedron.scale.z,
            5,
            5,
            5,
          ],
        }
        break
      }
      case 'blog': {
        positionKeyframeTrackJSON = {
          name: '.position',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.position.x,
            this.icosahedron.position.y,
            this.icosahedron.position.z,
            0,
            Controller.size.windowWidth / 2.2,
            0,
          ],
        }
        scaleKeyframeTrackJSON = {
          name: '.scale',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.scale.x,
            this.icosahedron.scale.y,
            this.icosahedron.scale.z,
            2,
            2,
            2,
          ],
        }

        break
      }
      default:
        positionKeyframeTrackJSON = {
          name: '.position',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.position.x,
            this.icosahedron.position.y,
            this.icosahedron.position.z,
            0,
            0,
            0,
          ],
        }
        scaleKeyframeTrackJSON = {
          name: '.scale',
          type: 'vector',
          times: [0, 0.8],
          values: [
            this.icosahedron.scale.x,
            this.icosahedron.scale.y,
            this.icosahedron.scale.z,
            1,
            1,
            1,
          ],
        }

        break
    }

    // tracksに追加
    clipJSON.tracks.push(positionKeyframeTrackJSON, scaleKeyframeTrackJSON)
    // アニメーションの動き方を指定
    for (const track of clipJSON.tracks) {
      track.interpolation = THREE.InterpolateSmooth
    }

    // ミキサーに設定
    this.mixer.uncacheAction() // 既存のアニメーションを削除
    const clip = THREE.AnimationClip.parse(clipJSON)
    const action = this.mixer.clipAction(clip)

    action.clampWhenFinished = true // アニメーションの最後のフレームで一時停止する
    action.setLoop(THREE.LoopRepeat, 1) // アニメーションの回数
    action.play() // アニメーション開始
  }

  // マウス座標更新時に発火（CanvasGLでリッスンしている）
  mouseMoved(x, y) {
    this.mouse.x = x - Controller.size.windowWidth / 2 // 原点を中心に
    this.mouse.y = y - Controller.size.windowHeight / 2 // 原点を中心に

    this.icosahedron.rotation.x -= this.mouse.y / 50000
    this.icosahedron.rotation.y -= this.mouse.x / 50000
  }

  // 毎フレーム更新したいこと
  update() {
    this.mixer.update(0.01)
    this.icosahedron.rotation.x += this.rotationSpeed / 4
    this.icosahedron.rotation.y -= this.rotationSpeed
  }
}
