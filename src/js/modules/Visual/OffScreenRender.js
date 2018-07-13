import RenderTarget from '../../webgl/RenderTarget';
import vert from '../../../glsl/osr.vert';
import frag from '../../../glsl/osr.frag';
import timer from '../../util/timer';

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
        this.uniforms = {
            time: {type:'f', value: 0},
            resolution: {type:'v2', value: new THREE.Vector2(this.width, this.height)}
        };
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
        this.uniforms.time.value += timer.getDelta();
    }
    render(render){
        super.render(render, this.camera);
    }
    resize(width, height){
        this.width = width;
        this.height = height;
        super.resize(width, height);
        this.uniforms.resolution.value = new THREE.Vector2(this.width, this.height);
        this.geometory.width = width;
        this.geometory.height = height;
    }
}

export default OffScreenRender;