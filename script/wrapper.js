function includeHTML(callback) {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) elmnt.innerHTML = this.responseText;
                    if (this.status == 404) elmnt.innerHTML = "Page not found.";
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML(callback); // Рекурсия для остальных элементов
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    if (callback) callback(); // Вызов callback после завершения
}

// Пример вызова
includeHTML(() => {
    // Запускаем код, чтобы обновить данные в progress.html
    const progressContainer = document.getElementById("progress");
    const bodyContainer = document.querySelector('.score');

    const htmlValue = localStorage.getItem('htmlValue');
    const htmlProgress = localStorage.getItem('htmlProgress');
    const questionNumber = localStorage.getItem('questionNumber');

    if (progressContainer) progressContainer.value = htmlValue || 0;
    if (bodyContainer) bodyContainer.innerHTML = questionNumber || '0/0';
});
