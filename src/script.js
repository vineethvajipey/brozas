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

const poemStanzas = [
  "lil guy told me he was my friend",
  "but the fish in the sea, aren't closer than you and me",
  "like sharp blades of grass, our eye don't dart and dash",
  "the lines blurr together, me as you & you as me",
];

const stack = document.getElementById("stack");
const fragment = document.createDocumentFragment();

images.forEach((src, index) => {
  // Create container for image and potential stanza
  const container = document.createElement("div");
  container.className = "item-container";

  // Add stanza on every other image (2nd, 4th, 6th, 8th, etc.)
  if (index % 2 === 0) {
    const stanzaIndex = Math.floor(index / 2);
    if (stanzaIndex < poemStanzas.length) {
      const stanza = document.createElement("div");
      stanza.className = `stanza ${stanzaIndex % 2 === 0 ? "left" : "right"}`;
      stanza.textContent = poemStanzas[stanzaIndex];
      container.appendChild(stanza);
    }
  }

  // Add image
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  container.appendChild(img);

  fragment.appendChild(container);
});

stack.appendChild(fragment);
