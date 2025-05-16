const container = document.querySelector(".corazones-container");

function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * (window.innerWidth - 30) + "px";
  heart.style.animationDuration = (2 + Math.random() * 1.5) + "s";
  container.appendChild(heart);
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

setInterval(crearCorazon, 400);
