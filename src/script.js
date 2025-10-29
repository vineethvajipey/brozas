const images = [
  "/images/sideye.jpg",
  "/images/forrest.png",
  "/images/kiddos.png",
  "/images/lake.png",
  "/images/yum.png",
  "/images/sitcom.png",
  "/images/drip.png",
  "/images/captain.png",
  "/images/tataya.png",
  "/images/life.png",
  "/images/wukong.png",
  "/images/india.png",
  "/images/football.png",
  "/images/strut.png",
  "/images/quarterback.png",
  "/images/.png",
];

const app = document.getElementById("app");
const fragment = document.createDocumentFragment();

images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  fragment.appendChild(img);
});

app.appendChild(fragment);
