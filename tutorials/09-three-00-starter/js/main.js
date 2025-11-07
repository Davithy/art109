// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, doKnot;
let cube = [];

function init() {
    // ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
    scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1, 1, 5);
    scene.add(light);

    // const helper = new THREE.DirectionalLightHelper(light, 5);
    // scene.add(helper);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new GLTFLoader(); // to load 3d models

    /////////////////////////////////////////////////// Shin bot model load

    loader.load('assets/shin-bot.gltf', function (gltf) {
        const robot = gltf.scene;
        scene.add(robot);
        robot.scale.set(0.1, 0.1, 0.1);
        robot.position.set(3.2, -1.5, 1);
        robot.rotation.set(0, 0.5, 1);
    });

    // ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
    // →→→→→→ Follow next steps in tutorial: 

    ////////////////////////////////////////////////////// CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const texture = new THREE.TextureLoader().load('textures/ice.jpg');

    const material = new THREE.MeshBasicMaterial({ map: texture })

    for (let i = -4; i <= 4; i += 2) {
        for (let j = -4; j <= 4; j += 2) {
            const newCube = new THREE.Mesh(geometry, material);

            scene.add(newCube);
            // right/left, up/down, forward/back
            newCube.position.set(i, j, -5);
            cube.push(newCube);
        }
    }

    /////////////////////////////////////////////////////// TORUS

    const torusKnotGeo = new THREE.TorusKnotGeometry(10, 1, 100, 16);

    // const baseColor = new THREE.MeshStandardMaterial({ color: 0xffff00 });

    const textures = new THREE.TextureLoader().load('textures/disturb.jpg');

    const baseColor = new THREE.MeshBasicMaterial({ map: textures })

    doKnot = new THREE.Mesh(torusKnotGeo, baseColor);

    scene.add(doKnot);

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    for (let l = 0; l < cube.length; l++) {
        cube[l].rotation.x += 0.01;
        cube[l].rotation.y += 0.01;
    }
    doKnot.rotation.z += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();

// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


