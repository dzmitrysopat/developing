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

var content = [];
document.querySelectorAll("h3").forEach(function(item){
  content.push(item.textContent);
  for (const item of content){
    // console.log(item);
  if (item == "CSS"){
    document.querySelectorAll("h3").forEach(item => item.classList.add("css"))
    document.querySelectorAll(".hw-link").forEach(item => item.classList.add("article-css"));
  }}
  // console.log(item);
  
});