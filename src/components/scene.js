import React from "react"
import * as THREE from "three"
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { Wireframe } from "three/examples/jsm/lines/Wireframe";
import { WireframeGeometry2 } from "three/examples/jsm/lines/WireframeGeometry2";
import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer"


class Scene extends React.Component {
  componentDidMount() {
    let scene = new THREE.Scene()
    scene.background = new THREE.Color(255,255,255)
    this.camera = new THREE.PerspectiveCamera(75, this.mount.offsetWidth/this.mount.offsetHeight, 0.1, 1000)

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)




    //wireframe geometry
    const cube = new THREE.BoxGeometry();
    var wireframe = new THREE.WireframeGeometry(cube);
    
    var matLineBasic = new THREE.LineBasicMaterial( { color: 0xfa7701 } );

    var wireframe1 = new THREE.LineSegments( wireframe, matLineBasic );
    wireframe1.computeLineDistances();
    wireframe1.visible = true;
  
    scene.add(wireframe1)




    // camera vs
    this.camera.position.z = 5

    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this))

      wireframe1.rotation.x += 0.01
      wireframe1.rotation.y += 0.01

      this.renderer.render(scene, this.camera)
    }

    this.animate()

    window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  onWindowResize() {
    if (this.mount) {
      this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    }
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} style={{ width: `100vw`, height: `100vh` }}></div>
    )
  }
}

export default Scene