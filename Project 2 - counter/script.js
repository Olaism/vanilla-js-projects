const counter = document.querySelector('.counter');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('btn-decrease')) {
            count--;
            // checkCount()
            console.log(count);
        } else if (styles.contains('btn-reset')) {
            count = 0;
        } else if (styles.contains('btn-increase')) {
            count++;
            console.log(count);
        }
        checkCount();
        counter.textContent = count;
    })
})

function checkCount() {
    if (count < 0) {
        counter.style.color = 'red';
    }
    if (count === 0) {
        counter.style.color = 'black';
    }
    if (count > 0) {
        counter.style.color = 'green';
    }
}