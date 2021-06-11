// début au langage JavaScript (langage Front orienté Objets)
// les variables en JS
let cours = 'ancienne  variable ';
console.log(cours + 'avant MAJ')
cours = 'nouvelle variable '
console.log(cours + 'aprés MAJ')
const nom = 'adel'
console.log(nom)
age = 24;
console.log(age);

// les fonctions en JS
//déclaration des fonctions
function faireqlq(){
  console.log('je fais un truc')
}
const fairetache = (type) => {
console.log('je fais : ' + type)
}

//appel des fonctions dans JS
fairetache('la vaisselle');
fairetache('les courses');

//manipulation du DOM (document objet model)
const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', (e)=>{
    console.log(e);
    img.classList.toggle('show')
})

//******************

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (e)=>{
   horizontal.innerHTML = e.x;
   vertical.innerHTML = e.y;
   mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

if (e.x > 500) {
  document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }  
  })

  //************************ */
  document.getElementById('input').addEventListener('input', (e)=>{
    console.log('yes');
    console.log(e.target.value);
    vertical.innerHTML = e.target.value
    })

    //**************************************
    
    const theme = document.querySelectorAll('.theme');
    const dark = document.querySelector('.dark');
    const salmon = document.querySelector('.salmon');
    const yellow = document.querySelector('.yellow');

    theme.forEach((item)=>{
      item.addEventListener('click', (e)=>{
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "yellowTheme", "salmonTheme");
        switch (e.target.id) {
          case "dark":
            document.body.classList.add('darkTheme');
            break;
          case "salmon":
            document.body.classList.add('salmonTheme');
            break;
          case "yellow":
            document.body.classList.add('yellowTheme');
            break;
          default: 
           null;
        }
      }) 
    })
    



