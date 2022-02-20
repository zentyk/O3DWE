window.onload = () => {
    let canvas = document.getElementById("GLCanvas");

    let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if(gl !== null){
        gl.clearColor(0.0,0.0,0.5,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
}