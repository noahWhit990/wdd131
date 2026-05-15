const menu = document.querySelector("#menu");
const gallery = document.querySelector("#wrapper");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

menu.addEventListener("click", showMenu);

function showMenu() {
    let navSelector = document.querySelector("nav");
    navSelector.classList.toggle("show");
}

gallery.addEventListener('click', openModal);

function openModal(event) {  
    let imageSrc = event.target.src;

    // select img tag inside dialog, give it src
    modalImage.src = imageSrc.replace("-sm.jpg", "-full.jpg");
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});