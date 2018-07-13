uniform float time;
uniform vec2 resolution;

@import ./shape/rect;
@import ./shape/circle;

void main () {
    vec2 st = (resolution - gl_FragCoord.xy) / min(resolution.x, resolution.y);
    float speed = 1.0;

    st.x = smoothstep(0.0, -2.0, st.x) + smoothstep(0.0, 2.0, st.x);
    st.x = smoothstep(0.0, -2.0, st.y) + smoothstep(0.0, 2.0, st.y);

    // float l = length(st);
    // float a = atan(st.y, st.x);

    // st.x = l;
    // st.y = a;

    for(int i = 1; i < 15; i++){
        st.x += 0.8 / float(i) * (sin(float(i) * 0.5 * st.y + time * speed) + sin(float(i) * 1.2 * st.y + st.x + time * speed)) * 0.8;
        st.y += 0.8 / float(i) * (cos(float(i) * 1.7 * st.x + time * speed) + cos(float(i) * 0.8 * st.x + st.y + time * speed)) * 0.8;
    }

    float r = sin(st.x + st.y + time) * 0.5 + 0.5;
    float g = cos(st.x + st.y + time) * 0.5 + 0.5;
    float b = (sin(st.x + st.y + time) + cos(st.x + st.y + time)) * 0.5 + 0.5;

    float d = rect(st, vec2(b * 0.1), vec2(r + 1.0, g + 1.0));
    d += rect(st, vec2(r * 0.1), vec2(g + 1.0, b + 1.0));
    d += rect(st, vec2(g * 0.1), vec2(b + 1.0, r + 1.0));
    d += circle(st, vec2(r * 0.01, g * 0.01), b + 1.0);

    gl_FragColor = vec4(d, d, d, 1.0);
}