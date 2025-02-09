const progressContainer = document.getElementById("progress");
const bodyContainer = document.querySelector('.score');
const attrs = document.querySelectorAll("section.topic-block > section.hw-block");
const progressTemplate = 
`<progress max="%max%" value="%value%"></progress>`;
let value = 0;

progressContainer.max = attrs.length;
localStorage.setItem('htmlProgress', progressContainer.max);

for (const attr of attrs){
    if (attr.getAttribute('onclick').length == 0){
        attr.classList.add("gray");        
        }
    else{
        value = value + 1;
        // console.log(value);
        progressContainer.value = value;
        localStorage.setItem('htmlValue', value);
    }    
}

// score in progress block
const scoreTemplate = `<p class="score">%score%</p>`;

let score = `${value}/${attrs.length}`;
const questionNumber = scoreTemplate.replace('%score%', score);

bodyContainer.innerHTML = questionNumber;
console.log(questionNumber);

localStorage.setItem('htmlNumber', questionNumber);
// window.location.href = '../pages/wrapper/progress.html';

// document.querySelector('.calendar');
// console.log(document.querySelector(".hw-id i").attr("class"));
    
var content = [];
document.querySelectorAll("h3").forEach(function(item){
  content.push(item.textContent);
  for (const item of content){
    console.log(item);
  if (item == "CSS"){
    document.querySelectorAll("h3").forEach(item => item.classList.add("css"));
    document.querySelectorAll("i").forEach(item => item.classList.add("css"));
    document.querySelectorAll("i").forEach(item => item.classList.remove("bxl-html5")); 
    document.querySelectorAll("i").forEach(item => item.classList.add("bxl-css3"));
    
  }}
  // console.log(item);
});

// css progress
const progressCssContainer = document.getElementById("cssProgress");
const cssBodyContainer = document.querySelector('.cssScore');
const cssAttrs = document.querySelectorAll("section#cssBlock > section.hw-block");
const cssProgressTemplate = 
`<progress max="%max%" value="%value%"></progress>`;
let cssValue = 0;

progressContainer.max = cssAttrs.length;
localStorage.setItem('cssProgress', progressCssContainer.max);

for (const cssAttr of cssAttrs){
    if (cssAttr.getAttribute('onclick').length == 0){
        cssAttr.classList.add("gray");        
        }
    else{
        cssValue = cssValue + 1;
        // console.log(value);
        progressCssContainer.cssValue = cssValue;
        localStorage.setItem('cssValue', cssValue);
    }    
}

// score in progress block
const scoreTemplate = `<p class="score">%score%</p>`;

let score = `${value}/${attrs.length}`;
const questionNumber = scoreTemplate.replace('%score%', score);

bodyContainer.innerHTML = questionNumber;
console.log(questionNumber);

localStorage.setItem('htmlNumber', questionNumber);