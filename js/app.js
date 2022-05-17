// const footer = document.querySelector(".card__footer");
// const shareIcon = document.querySelector(".card__share-icon");
// const share = document.querySelector(".card__share");
// const author = document.querySelector(".card__footer-author");
// const icons = document.querySelector(".card__icons");

// shareIcon.addEventListener("click", function () {
//     footer.classList.toggle("bg-dark");
//     author.classList.toggle("hidden");
//     icons.classList.toggle("hidden");
//     shareIcon.classList.toggle("share-active");
//     share.classList.toggle("color-white");
// })

const shareBtn = document.querySelector(".share-button");

shareBtn.addEventListener("click", function () {
    const footer = document.querySelector(".card__footer");
    footer.classList.toggle("bg-dark");

    const shareIcon = document.querySelector(".fa-share");
    shareIcon.classList.toggle("color-white");
    shareBtn.classList.toggle("share-active");

    const cardAuthor = document.querySelector(".card__author");
    cardAuthor.classList.toggle("hidden");

    const cardIcons = document.querySelector(".card__icons");
    cardIcons.classList.toggle("hidden");
})