const array = ["Paris", "Lyon", "Montreal", "Bordeaux"];
const array1 = ["Paris", 33, ["Montreal", "Bordeaux"], true];
const string = "je suis une string";
const number = 48;
const boolean = true;
console.log(string, number, boolean);

console.log(array[1][2]);

for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

for (i = 0; i < array1.length; i++) {
  console.log(typeof array1[i]);
}

const numberTab = [21, 45, 67, 09, 96];
for (i = 0; i < numberTab.length; i++) {
  console.log(numberTab[i]);
}
console.log(numberTab.sort());

//***************************************

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

//src="https://www.youtube.com/embed/MFh0Fd7BsjE"
