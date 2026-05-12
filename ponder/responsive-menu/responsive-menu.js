let menuButton = document.getElementsByClassName("menu-btn")[0];

console.log(menuButton);

// event listener
menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log(event);

    // toggle on/off the menu display

    // grab the nav from the dom
    // toggle the .hide class on/off
    let navSelector = document.querySelector("nav");
    navSelector.classList.toggle("hide");
}