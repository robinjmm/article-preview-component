const shareBtn = document.querySelector(".share-button");

shareBtn.addEventListener("click", function () {
    const shareIcon = document.querySelector(".fa-share");
    shareIcon.classList.toggle("color-white");
    shareBtn.classList.toggle("share-active");

    const cardIcons = document.querySelector(".pop-up");
    cardIcons.classList.toggle("visible");
})


