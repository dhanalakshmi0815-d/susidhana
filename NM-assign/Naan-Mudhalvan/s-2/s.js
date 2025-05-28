const con = document.getElementById("container");
let img = [
  "./4.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoULwES",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoULwES",
];
let i = 0;

function changeImage() {
  i++;
  if (i == img.length) {
    i = 0;
  }
  con.style.backgroundImage = `url(${img[i]})`;
}
