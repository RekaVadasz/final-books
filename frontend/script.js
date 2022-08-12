const headerComponent = function(logoText) {
    const menuIcon = "material-symbols-outlined";

    return `
    <div class="logo">${logoText}</div>
    <span class=${menuIcon}>menu</span>
    `
}

const bookCardComponent = function (index, title, author, text) {
    return `
        <div class="book-card">
            <div class="index">${index}</div>
            <p class="book-author">${author}</p>
            <p class="book-title">${title}</p>
            <p class="book-text">${text}</p>
            <button class="details-btn">
                ${books.button}
                <span class="material-symbols-outlined">arrow_forward</span>
            </button>
        </div>
    
    `
}

const loadEvent = function () {
   
    let bookCard = "";

    books.cards.forEach((card, index) => {
        bookCard += bookCardComponent(index + 1, card.title, card.sub, card.text )
    })
   
    document.querySelector(".book-cards-section").insertAdjacentHTML("beforeend", bookCard)

    document.querySelector("header").insertAdjacentHTML("beforeend", headerComponent(books.logo))
}

window.addEventListener("load", loadEvent) 