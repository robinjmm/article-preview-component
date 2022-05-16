const footer = document.querySelector(".card__footer");
const shareIcon = document.querySelector(".card__share-icon");
const share = document.querySelector(".card__share");
const author = document.querySelector(".card__footer-author");
const icons = document.querySelector(".card__icons");

shareIcon.addEventListener("click", function () {
    footer.classList.toggle("bg-dark");
    author.classList.toggle("hidden");
    icons.classList.toggle("hidden");
    shareIcon.classList.toggle("share-active");
    share.classList.toggle("color-white");
})