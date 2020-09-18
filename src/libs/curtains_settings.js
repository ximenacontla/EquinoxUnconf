import {
    Curtains,
    RenderTarget,
    ShaderPass,
    Plane
} from "../libs/curtains.umd.min"

export function initCurtains() {

    function lerp(start, end, amt) {
        // add a bit of margin to the timer
        return (1 - amt) * start + amt * end;
    }

    // we will keep track of all our planes in an array
    var scrollEffect = 0;
    var paused = false;

    // set up our WebGL context and append the canvas to our wrapper
    var curtains = new Curtains({
        container: "canvas",
        transparent: true,
        antialias: false, // render targets will disable default antialiasing anyway
    });

    curtains.onRender(function () {
        // update our planes deformation
        // increase/decrease the effect
        if (elementInViewport2(animatedElement)) {
            scrollEffect = lerp(scrollEffect, 0, 0.05);
            if (!paused) {
                paused = true;

                setTimeout(() => {
                    // disable drawing now that the transition is over
                    scrollEffect = 0;

                    curtains.disableDrawing();
                    paused = false;
                }, 1000);
            }

        } else {
            scrollEffect = lerp(scrollEffect, 0, 0.5)
        }

    }).onScroll(function () {
        if (!elementInViewport2(animatedElement)) {
            return
        }
        curtains.enableDrawing();
        // get scroll deltas to apply the effect on scroll
        var delta = curtains.getScrollDeltas();

        // invert value for the effect
        delta.y = -delta.y;

        // threshold
        if (delta.y > 200) {
            delta.y = 200;
        } else if (delta.y < -100) {
            delta.y = -100;
        }

        if (Math.abs(delta.y) > Math.abs(scrollEffect)) {
            scrollEffect = lerp(scrollEffect, delta.y, 0.5);

        }

    }).onError(function () {
        // we will add a class to the document body to display original images
        document.body.classList.add("no-curtains");
    }).onContextLost(function () {
        // on context lost, try to restore the context
        curtains.restoreContext();
    });

    // get our planes elements
    var animatedElement = document.getElementById("animated-header");

    function elementInViewport2(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }
    var rgbTarget = new RenderTarget(curtains);

    curtains.disableDrawing();

    var vs = `
        precision mediump float;
    
        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;
    
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
    
        uniform mat4 planeTextureMatrix;
    
        // custom variables
        varying vec3 vVertexPosition;
        varying vec2 vTextureMatrixCoord;
    
        void main() {
    
            vec3 vertexPosition = aVertexPosition;
    
            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    
            // varyings
            vVertexPosition = vertexPosition;
            vTextureMatrixCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        }
    `;

    var fs = `
        precision mediump float;
    
        varying vec3 vVertexPosition;
        varying vec2 vTextureMatrixCoord;
    
        uniform sampler2D planeTexture;
    
        void main() {
            // just display our texture
            gl_FragColor = texture2D(planeTexture, vTextureMatrixCoord);
        }
    `;


    // add the small planes as well
    if (animatedElement) {
        var plane = new Plane(curtains, animatedElement, {
            vertexShader: vs,
            fragmentShader: fs,
        });

        if (plane) {
            plane.setRenderTarget(rgbTarget);
        }
    }


    var rgbFs = `
        precision mediump float;
    
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
    
        uniform sampler2D uRenderTexture;
    
        uniform float uScrollEffect;
    
        void main() {
            vec2 textureCoords = vTextureCoord;
    
            vec2 redTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 300.0);
            vec2 greenTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 600.0);
            vec2 blueTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 900.0);
    
            vec4 red = texture2D(uRenderTexture, redTextCoords);
            vec4 green = texture2D(uRenderTexture, greenTextCoords);
            vec4 blue = texture2D(uRenderTexture, blueTextCoords);
    
            vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a + blue.a + green.a));
            gl_FragColor = finalColor;
        }
    `;

    var rgbPass = new ShaderPass(curtains, {
        fragmentShader: rgbFs,
        renderTarget: rgbTarget,
        depthTest: false, // we need to disable the depth test to display that shader pass on top of the first one
        uniforms: {
            scrollEffect: {
                name: "uScrollEffect",
                type: "1f",
                value: 0,
            },
        },
    });

    if (rgbPass) {
        rgbPass.onRender(function () {
            // update the uniform
            rgbPass.uniforms.scrollEffect.value = scrollEffect;


        });
    }

};