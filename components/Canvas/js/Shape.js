import * as THREE from 'three'
import Controller from './Controller'

export default class Shape {
  constructor() {
    this.segments = 80
    this.init()
  }

  init() {
    this.addSphere()
  }

  addSphere() {
    // Shapeの形
    const geometry = new THREE.SphereGeometry(3, 32, 32) // 球体（半径, 幅区切り数, 高さ区切

    // Shapeのマテリアル
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    })

    // ShapeをSceneへ追加
    this.sphere = new THREE.Mesh(geometry, material)
    this.sphere.castShadow = true
    Controller.scene.add(this.sphere)
  }

  // 毎フレーム更新したいこと
  update() {
    this.sphere.rotation.y -= 0.01
  }
}
