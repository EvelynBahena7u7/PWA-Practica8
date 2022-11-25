
console.log('desde app');

const btnCamera = document.getElementById('btnCamera');
const btnTakePhoto = document.getElementById('btnTakePhoto');

const video = document.getElementById('video');
const photo = document.getElementById('photo');

const camera = new Camera(video);
let pictures =[];

btnCamera.addEventListener('click', ()=>{
  console.log('abrir camara');
  camera.power();
});

btnTakePhoto.addEventListener("click", () => {
  console.log("Tomando foto");
  let picture = camera.takePhoto();

  pictures.push(picture);

  itemPhoto.innerHTML += `
  <div class="carousel-item active">
    <img  src="${
      pictures[pictures.length - 1]
    }" class="d-block w-100" alt="...">
  </div>
 `;

  //console.log(picture);
  camera.off();

  console.log(pictures.length);
});