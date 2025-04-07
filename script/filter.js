function htmlFilter() {
    document.querySelectorAll('.hw-block').forEach(block => {
    let hwId = block.querySelector('.hw-id').textContent.trim().toLowerCase();
    if (hwId.includes("html")) {
    block.style.display = "block";
    } else {
    block.style.display = "none";
    }
    });
    }
    
    function cssFilter() {
    document.querySelectorAll('.hw-block').forEach(block => {
      let hwIdelement = block.querySelector('.hw-id');
    let hwId = block.querySelector('.hw-id').textContent.trim().toLowerCase();
    if (hwId.includes("css")) {
    block.style.display = "block";
    hwIdelement.classList.add("css");
    } else {
    block.style.display = "none";
    }
    });
    }
    
    function resetFilter() {
    document.querySelectorAll('.hw-block').forEach(block => {
    block.style.display = "block";
    });
    }

const searchFilter = document.querySelector('#search');

function showSearchFilter(){
if (searchFilter.classList.contains("none")){
searchFilter.classList.remove("none");
searchFilter.classList.toggle('show');
} else if (searchFilter.classList.contains("show")){
searchFilter.classList.remove('show');
searchFilter.classList.toggle('none');
}
}

let currentFilter = 'all'; // значение по умолчанию

// Фильтрация по кнопкам
document.querySelectorAll('.filter-btn').forEach(button => {
button.addEventListener('click', function () {
currentFilter = this.getAttribute('data-filter'); // 'html', 'css', 'all'
applyFilters(); // применим фильтрацию с учётом текущего поиска
});
});

// Поиск
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', applyFilters);

// Основная функция, объединяющая фильтр и поиск
function applyFilters() {
const query = searchInput.value.toLowerCase();

document.querySelectorAll('.hw-block').forEach(block => {
const hwId = block.querySelector('.hw-id').textContent.toLowerCase();
const title = block.querySelector('h2').textContent.toLowerCase();
const description = block.querySelector('p').textContent.toLowerCase();

const matchesFilter = currentFilter === 'all' || hwId === currentFilter;
const matchesSearch = title.includes(query) || description.includes(query);

if (matchesFilter && matchesSearch) {
block.style.display = 'block';
} else {
block.style.display = 'none';
}
});
}