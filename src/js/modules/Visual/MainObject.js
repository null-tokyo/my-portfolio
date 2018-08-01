

class MainObject extends THREE.Mesh {
    constructor() {
        super(
            new THREE.SphereGeometry(100, 100, 100),
            new THREE.MeshBasicMaterial()
        )
    }
}

export default MainObject;