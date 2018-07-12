class MainObject extends THREE.Mesh {
    constructor() {
        super(
            new THREE.BoxGeometry(100, 100, 100),
            new THREE.MeshBasicMaterial({color: 0xFFFF00})
        )
    }
}

export default MainObject;