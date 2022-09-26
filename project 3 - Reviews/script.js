const customers = [
    {
        name: 'John Smith',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia architecto voluptas ullam voluptates veniam fugiat, ut iusto, quibusdam praesentium debitis temporibus sint maiores molestiae harum enim? Dignissimos, quam tenetur!',
        date: 'Mar 14, 2022',
    },
    {
        name: 'Jonathan Ezebukwe',
        rating: 2,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat earum neque, quos porro quis deserunt dignissimos sint reiciendis natus atque aliquid debitis ipsa sit hic in molestias ut voluptate nihil.',
        date: 'Apr 23, 2021',
    },
    {
        name: 'Ismail Olayinka',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus corporis nemo aliquam repellat blanditiis tempora culpa nostrum quibusdam molestiae quisquam alias, rerum cupiditate sunt, ea expedita ipsam eligendi doloremque.',
        date: 'Jan 10, 2022',
    },
    {
        name: 'Akadegba Kobirus',
        rating: 1,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia architecto voluptas ullam voluptates veniam fugiat, ut iusto, quibusdam praesentium debitis temporibus sint maiores molestiae harum enim? Dignissimos, quam tenetur!',
        date: 'Dec 17, 2021',
    },
    {
        name: 'Paul Kagame',
        rating: 3,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia architecto voluptas ullam voluptates veniam fugiat, ut iusto, quibusdam praesentium debitis temporibus sint maiores molestiae harum enim? Dignissimos, quam tenetur!',
        date: 'May 01, 2020',
    },
];




const logo = document.querySelector('.customer-logo');
const customer_name = document.querySelector('.customer-name');
const rating = document.querySelector('.customer-rating');
const review = document.querySelector('.customer-review');
const date = document.getElementById('date');
const prevBtn = document.querySelector('.btn-prev');
const randomBtn = document.querySelector('.btn-random');
const nextBtn = document.querySelector('.btn-next');

let customerIndex = 0;

function main() {
    window.addEventListener("DOMContentLoaded", loadFirstCustomer);
    prevBtn.addEventListener('click', function() {
        customerIndex--;
        if (customerIndex < 0) {
            customerIndex = customers.length - 1;
        }
        const customer = customers[customerIndex];
        fillDetails(customer);
    });
    nextBtn.addEventListener('click', function() {
        customerIndex++;
        if (customerIndex >= customers.length) {
            customerIndex = 0;
        }
        const customer = customers[customerIndex];
        fillDetails(customer);
    });
    randomBtn.addEventListener('click', function() {
        customerIndex = Math.floor(Math.random() * customers.length);
        const customer = customers[customerIndex];
        fillDetails(customer);
    });
}


const loadFirstCustomer = () => {
    const customer = customers[customerIndex];
    fillDetails(customer);
}


const fillDetails = (person) => {
    logo.textContent = person.name[0].toUpperCase();
    logo.style.backgroundColor = getRandomColor();
    customer_name.textContent = person.name;
    displayRating(person.rating);
    review.textContent = person.review;
    date.textContent = person.date;
}

function displayRating(starred) {
    rating.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= starred) {
            rating.innerHTML += '<i class="fa-solid fa-star"></i>';
        }
        else {
            rating.innerHTML += '<i class="fa-regular fa-star"></i>';
        }
    }
}

function getRandomColor() {
    let hex_code = '#';
    const hex_values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', '0'];
    for (let i = 1; i <= 6; i++) {
        const getRandomIndex = Math.floor(Math.random() * hex_values.length);
        hex_code += hex_values[getRandomIndex];
    }
    return hex_code;
}

main();