import RenderTarget from '../../webgl/RenderTarget';
import vert from '../../../glsl/osr.vert';
import frag from '../../../glsl/osr.frag';

class OffScreenRender extends RenderTarget {
    constructor() {
        super();
        this.camera;
        this.mesh;
    }
    init(width, height){
        this.width = width;
        this.height = height;
        super.resize(width, height);
        this._initMesh();   
        super.add(this.mesh);
    }
    _initMesh(){
        this.uniforms = {};
        this.geometory = new THREE.PlaneBufferGeometry(this.width, this.height);
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vert,
            fragmentShader: frag
        });
        this.mesh = new THREE.Mesh(this.geometory, this.material);
    }
    addCamera(camera) {
        this.camera = camera;
    }
    getCamera() {
        return this.camera;
    }
    draw(){
        this.uniforms = {};
    }
    render(render){
        super.render(render, this.camera);
    }
    resize(width, height){
        super.resize(width, height);
        this.geometory.width = width;
        this.geometory.height = height;
    }
}

export default OffScreenRender;