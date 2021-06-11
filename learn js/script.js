console.log("et oui c moi");

const btn = document.querySelector("#btn");
const img = document.getElementById("img");

btn.addEventListener("click", (e) => {
  console.log("yessss");
  console.log(e);
  //   img.classList.add("show"); pr faire apparaitre
  //   img.classList.remove("show"); pr faire disparaitre
  img.classList.toggle("show");
  //   alert("evenement sur le DOM"); pr ajouter message d'alert
});

//******************************************************** */

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  console.log("c ok");
  //   console.log(e);
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";

  if (e.x > 500) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});

//**************************************** */

document.getElementById("input").addEventListener("input", (e) => {
  //   console.log("yes");
  console.log(e.target.value);
  vertical.innerHTML = e.target.value;
});

//***************************************** */

const theme = document.querySelectorAll(".theme");
const dark = document.querySelector(".dark");
const salmon = document.querySelector(".salmon");
const yellow = document.querySelector(".yellow");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
        null;
    }
  });
});

//***************************les variables en JS******

const array1 = ["alger", "paris", "mareille"];
const array2 = [22, "paris", true];

for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
for (i = 0; i < array2.length; i++) {
  console.log(typeof array2[i]);
}

const number = [2, 6, 56, 54, 23, 121];
array1.sort();
console.log(number.sort()); //tri par chiffre

//****************************************** */

const input2 = document.getElementById("input2");
const video = document.getElementById("video");
let link = "";

input2.addEventListener("input", (e) => {
  console.log(e.target.value);
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `
    <iframe
      width="763"
      height="429" src=${link}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
  }
});
const changeLink = (linkToChange) => {
  let embed = linkToChange.replace("watch?tv=", "embed/");
  link = embed.split("&")[0];
  console.log(link);
};
//src="https://www.youtube.com/embed/fb1BF9B1MGQ"
//  https://www.youtube.com/watch?v=0dz0YU0jJr4
// https://www.youtube.com/embed/0dz0YU0jJr4

//************************************************* */

const quote = document.getElementById("quote");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
    });

  fetch("https://picsum.photos/1600/1000").then((res) => {
    document.getElementById("pic").innerHTML = `<img src=${res.url} />`;
  });
  // .then((res) => res.json())
  // .then((data) => {
  //   quote.innerHTML = data.content;
  // });
};

quote.addEventListener("click", () => getQuote());
getQuote();
