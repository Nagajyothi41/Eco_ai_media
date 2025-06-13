// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!name || !email || !message) {
    status.textContent = "All fields are required.";
    status.style.color = "red";
    return;
  }

  if (!emailRegex.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
});

// Three.js spinning cube
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00aaff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
controls.enableZoom = true;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
