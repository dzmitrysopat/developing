const attrs = document.querySelectorAll("section.topic-block > section.hw-block");
// console.log(attrs);

// var kol = document.querySelectorAll("section.topic-block > section.hw-block").length;
// console.log(kol);

for (const attr of attrs){
    if (attr.getAttribute('onclick').length == 0){
        attr.classList.add("gray");
    }
    // else{
    //     attr.classList.remove("gray")
    // }
}