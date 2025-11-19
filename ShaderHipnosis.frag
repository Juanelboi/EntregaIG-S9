#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359
uniform vec2 u_resolution;
uniform float u_time;
void main() {
    vec2 st=(2.0*gl_FragCoord.xy-u_resolution.xy)/u_resolution.y;
    float angle=atan(st.y,st.x);
    float radius=length(st);
    float wave=sin(angle*12.0+radius*32.0-u_time * 15.0);
    vec3 color=vec3(0.5)+0.5*cos(u_time+wave+vec3(0.0,2.0,4.0));
    gl_FragColor=vec4(color,1.0);
}
