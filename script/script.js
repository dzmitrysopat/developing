const progressContainer = document.querySelector('#progress');
const bodyContainer = document.querySelector('.score');
const attrs = document.querySelectorAll("section.topic-block > section.hw-block");
const progressTemplate = 
`<progress max="%max%" value="%value%" id="progress"></progress>`;
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

