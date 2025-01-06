const progressContainer = document.getElementById("progress");
const bodyContainer = document.querySelector('.score');
const attrs = document.querySelectorAll("section.topic-block > section.hw-block");
const progressTemplate = 
`<progress max="%max%" value="%value%"></progress>`;
let value = 0;

progressContainer.max = attrs.length;

for (const attr of attrs){
    if (attr.getAttribute('onclick').length == 0){
        attr.classList.add("gray");        
        }
    else{
        value = value + 1;
        // console.log(value);
        progressContainer.value = value;
    }    
}

// score in progress block
const scoreTemplate = `<p class="score">%score%</p>`;

let score = `${value}/${attrs.length}`;
const questionNumber = scoreTemplate.replace('%score%', score);

bodyContainer.innerHTML = questionNumber;

// document.querySelector('.calendar');

function html(){
    document.getElementById("htmlBlock").classList.remove("none");
    document.getElementById("cssBlock").classList.add("none");
    document.getElementById("cssProgress").classList.add("none");
    document.getElementById("htmlProgress").classList.remove("none")
}

function css(){
    document.getElementById("htmlBlock").classList.add("none");
    document.getElementById("cssBlock").classList.remove("none");
    document.getElementById("cssProgress").classList.remove("none");
    document.getElementById("htmlProgress").classList.add("none")
}


var content = [];
document.querySelectorAll("h3").forEach(function(item){
  content.push(item.textContent); 
  console.log(item);
  if (item.textContent == 'CSS'){
    document.querySelector("h3").classList.add("css");
    document.querySelector("article .hw-link").classList.add("article-css");
  }
});


console.log(content.join());

// if (hwIds == 'CSS'){
//     document.querySelector("h3").classList.add("css");
//     document.querySelector(".hw-link").classList.add("article-css");
// }