import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add white edges
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const wireframe = new THREE.LineSegments(edges, lineMaterial);
scene.add(wireframe);

camera.position.z = 5;

// Mouse movement variables
let mouseX = 0;
let mouseY = 0;

// Add mouse move event listener
document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
  // Rotate based on mouse position
  cube.rotation.y = mouseX * Math.PI;
  cube.rotation.x = mouseY * Math.PI;
  wireframe.rotation.y = mouseX * Math.PI;
  wireframe.rotation.x = mouseY * Math.PI;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
