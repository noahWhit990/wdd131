// define a character with stats
const snortleblat = {
    name: "Snortleblat",
    imgSrc: "snortleblat.webp",
    imgAlt: "Image of Snortleblat in the swamp",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    attacked: function() {
        if (this.health <= 20 || this.health === "Snortleblat has died") {
            this.health = "Snortleblat has died";
        }
        else {
            this.health -= 20;
        }
    },
    levelUp: function() {
        this.level += 1;
    }
};

// create a template literal to add the character
function renderCharacter() {
    document.querySelector(".card").innerHTML = `
        <img class="image" src="${snortleblat.imgSrc}" alt="${snortleblat.imgAlt}">
            <h1 class="name">${snortleblat.name}</h1>
            <div class="stats">
                <p>Class: ${snortleblat.class}</p>
                <p>Level: ${snortleblat.level}</p>
                <p>Health: ${snortleblat.health}</p>
            </div>
            <div class="buttons">
                <button id="attack">Attacked</button>
                <button id="level">Level Up</button>
            </div>`;

    document.querySelector("#attack").addEventListener("click", () => {
        snortleblat.attacked();
        renderCharacter();
    });

    document.querySelector("#level").addEventListener("click", () => {
        snortleblat.levelUp();
        renderCharacter();
    });
}

renderCharacter();