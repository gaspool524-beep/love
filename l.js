const container = document.getElementById("love");

// GANTI FOTO DI SINI
const photos = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
];

// LOVE SHAPE
for (let t = 0; t < Math.PI * 2; t += 0.25) {

  let x = 325 + 230 * Math.pow(Math.sin(t), 3);
  let y = 325 - (180 * Math.cos(t) - 70 * Math.cos(2*t) - 30 * Math.cos(3*t) - 10 * Math.cos(4*t));

  let div = document.createElement("div");
  div.className = "img";

  div.style.left = x + "px";
  div.style.top = y + "px";

  let randomPhoto = photos[Math.floor(Math.random() * photos.length)];

  div.innerHTML = `<img src="${randomPhoto}">`;
  container.appendChild(div);
}