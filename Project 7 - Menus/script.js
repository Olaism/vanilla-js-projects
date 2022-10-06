const menus = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

// get parent element
const menuItemsSelector = document.querySelector('.menu-items');
const btnContainer = document.querySelector('.menus-btn');

const main = () => {
    const categories = getItemsCategory(menus);
    displayBtnCategories(categories);
    btnContainer.childNodes.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.textContent;
            if (category === 'all') {
                clearMenuItems();
                menus.map(menu => {
                    displayMenuItem(menu);
                });
            } else {
                const categoryMenus = getMenusByCategories(category);
                clearMenuItems();
                categoryMenus.map(menu => {
                    displayMenuItem(menu);
                });
            }
        })
    })
}

function displayMenuItem(menu) {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const itemInfoDiv = document.createElement('div');
    const header = document.createElement('header');
    const h4 = document.createElement('h4');
    const priceP = document.createElement('p');
    const textP = document.createElement('p');

    // Add classes and attributes
    addClasses(article, ['menu-item']);
    addAttributes(img, [
        {name: 'src', value: menu.img}, 
        {name: 'alt', value: ''},
    ]);
    addClasses(itemInfoDiv, ['item-info']);
    addClasses(priceP, ['price']);
    addClasses(textP, ['item-text']);

    // Add inner text and contents
    h4.textContent = menu.title;
    priceP.textContent = `$${menu.price}`;
    textP.textContent = menu.desc;

    // Join elements
    article.appendChild(img);
    article.appendChild(itemInfoDiv);
    itemInfoDiv.appendChild(header);
    header.appendChild(h4);
    header.appendChild(priceP);
    itemInfoDiv.appendChild(textP);

    // Add Article to parent element
    menuItemsSelector.appendChild(article);
}

function clearMenuItems() {
    menuItemsSelector.innerHTML = '';
}

function displayBtnCategories(btns) {
   let displayBtn = btns.map(function(btn) {
    return `<button class="btn filter-btn">${btn}</button>`;
   });
   displayBtn = displayBtn.join("");

   btnContainer.innerHTML = displayBtn;
}

function getItemsCategory(items) {
    const allCategories = ['all'];
    items.map(item => {
        if (!allCategories.includes(item.category)) {
            allCategories.push(item.category);
        };
    });
    return allCategories;
}

function getMenusByCategories(category) {
    return menus.filter(menu => menu.category === category);
}

function addClasses(element, classesList) {
    for (let classList of classesList) {
        element.classList.add(classList);
    }
}


function addAttributes(element, attrLists) {
    for (let attrList of attrLists) {
        element.setAttribute(attrList.name, attrList.value);
    }
}


window.addEventListener('DOMContentLoaded', function() {
    menus.map(menu => {
        displayMenuItem(menu);
    });
    main();
})