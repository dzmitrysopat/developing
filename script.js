if (document.querySelector('main article section .hw-block').hasAttribute("onclick")) {
    console.log('have');
}
else{
    console.log('no');
    document.querySelector('main article section .hw-block').classList.add("gray");    
}

