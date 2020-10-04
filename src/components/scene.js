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
    this.camera = new THREE.OrthographicCamera(this.mount.offsetWidth/-200, this.mount.offsetWidth/200, this.mount.offsetHeight/200,this.mount.offsetHeight/-200, -200, 1500)

    this.renderer = new SVGRenderer;
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)




    //wireframe geometry
    const cube = new THREE.BoxGeometry(5,5,5,2, 2, 2);
    var wireframe = new THREE.EdgesGeometry(cube);
    
    var matLineBasic = new THREE.LineBasicMaterial( { color: 0xfa7701, linewidth:2 } );

    var wireframe1 = new THREE.LineSegments( wireframe, matLineBasic );
    wireframe1.computeLineDistances();
    wireframe1.visible = true;
  
    wireframe1.position.x = 5;
    wireframe1.position.y = -3;
    scene.add(wireframe1)




    // camera vs
    this.camera.position.z = 5

    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this))

      wireframe1.rotation.x += 0.001
      wireframe1.rotation.y += 0.001

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