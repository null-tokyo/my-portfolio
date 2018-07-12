import Core from '../../webgl/Core';
import OffScreenRender from './OffScreenRender';

class Visual extends Core {
    constructor(opt) {
        super(opt);
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    init() {
        super.init();
        this.camera = super.createCamera();
        this._initOSR();
        this._initMain();
        this.resize();
        this.controlls = new THREE.OrbitControls(this.camera);
    }
    _initOSR() {
        this.osr = new OffScreenRender();
        this.osr.init(this.width, this.height);
        this.osr.addCamera(super.createCamera());
        super.updatePerspectiveCamera(this.osr.camera, this.width, this.height);
    }
    _initMain() {
        this.geometory = new THREE.BoxGeometry(2000, 2000, 2000);
        this.material = new THREE.MeshBasicMaterial({
            map: this.osr.renderTarget.texture,
            side: THREE.BackSide
        });
        this.mesh = new THREE.Mesh(this.geometory, this.material);
        this.mainScene.add(this.mesh);
    }
    update() {
        this.osr.draw();
        this.osr.render(this.renderer);
        super.render();
    }
    resize(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        super.resize(this.width, this.height);
    }
}

export default Visual;
