const progressContainer = document.querySelector('#progress');
const bodyContainer = document.querySelector('.score')
const attrs = document.querySelectorAll("section.topic-block > section.hw-block");
const progressTemplate = 
`<progress max="%max%" value="%value%" id="progress"></progress>`;
let value = 0;

// let progress = document.getElementById("progress").getAttribute('max');

progressContainer.max = attrs.length;

// let kol = attrs.getAttribute('onclick').length == 0;
// console.log(kol);

// let value = document.getElementById("progress").getAttribute('value');
// console.log(value);

// var kol = document.querySelectorAll("section.topic-block > section.hw-block").length;
// console.log(kol);

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





