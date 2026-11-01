document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById("largeImage").src = this.src;
    document.getElementById("viewer").style.display = "flex";
  });
});

function closeImage() {
  document.getElementById("viewer").style.display = "none";
}
