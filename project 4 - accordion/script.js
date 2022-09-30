const btnToggler = document.querySelectorAll('.btn-toggler');
const tabs = document.querySelectorAll('.accordion-tab');

btnToggler.forEach(function(btn) {
    btn.addEventListener('click', function(e) {        
        const tab = e.currentTarget.parentElement.parentElement;
        if (btn.firstChild.classList.contains('btn-plus')) {
            btn.innerHTML = '<button class="btn-minus">-</button>';
            closeOpenedTab();
        } else {
            btn.innerHTML = '<button class="btn-plus">+</button>';
        }
        tab.classList.toggle('show');
    })
})

function closeOpenedTab() {
    tabs.forEach(function(tab) {
        if (tab.classList.contains('show')) {
            tab.classList.remove('show');
            tab.firstElementChild.children[1].innerHTML = '<button class="btn-plus">+</button>';
        }
    });
}