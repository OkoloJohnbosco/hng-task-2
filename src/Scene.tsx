// import React from "react";
// import * as THREE from "three";

// const Scene: React.FC = () => {
//   React.useEffect(() => {
//     //   Set up our scence
//     const scene = new THREE.Scene();

//     // There are 3 cameras in three.js but lets try this
//     // First attribute  is field of veiw
//     // The second is the aspect ratio
//     // The 3rd and 4th is the near and far clipping plane

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     // The magician
//     const renderer = new THREE.WebGLRenderer();
//     // Seting the size at which we want it to render our app
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Adding the renderer element to our dom
//     // document.querySelector("#root")?.appendChild(renderer.domElement);

//     // HOW TO CREATE A CUBE

//     // To create a cube we need a BoxGeometry
//     // it contains all points and fill of the cube
//     const geometry = new THREE.BoxGeometry();

//     // we need a material to color it
//     const material = new THREE.MeshBasicMaterial({ color: 0xf0ff424411 });

//     // The third thing we need is a mesh. A mesh obj takes
//     // geometry and applies material to it, which we can insert to our scene
//     const cube = new THREE.Mesh(geometry, material);

//     scene.add(cube);
//     camera.position.z = 5;

//     // Render/animate loop
//     function animate() {
//       requestAnimationFrame(animate);

//       // **
//       // Animating the cube
//       // cube.rotation.z += 0.01

//       cube.rotation.y += 0.01;
//       cube.rotation.x += 0.01;
//       //
//       renderer.render(scene, camera);
//     }
//     animate();
//   }, []);

//   return null;
// };

// // function animation(time) {

// //   renderer.render(scene, camera);
// // }

// export default Scene;

export default function Scene() {
  return <p>Boys</p>
}