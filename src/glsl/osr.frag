uniform float time;
uniform vec2 resolution;

@import ./shape/rect;
@import ./shape/circle;

void main () {
    vec2 p = (gl_FragCoord.xy - resolution) / min(resolution.x, resolution.y);
    vec2 st = p;

    st = st * 10.0 * sin(time);
    st = fract(st);

    // st = smoothstep(0.0, -1.0, st) + smoothstep(0.0, 1.0, st);
    // st = 1.0 - st;

    float d = 0.0;

    for(int i = 0; i < 20; i++){
        d += rect(fract(st + (float(i)/ 20.0) + time * 0.01), vec2(0.0), vec2(0.05, 0.05));
    }
    
    gl_FragColor = vec4(d, d, d, 1.0);
}