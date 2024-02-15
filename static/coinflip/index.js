let red = 0; // red
let blue = 0; // blue
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-red 3s forwards";  // red
        }, 100);
        red++;  // red
    } else {
        setTimeout(function () {
            coin.style.animation = "spin-blue 3s forwards";  // blue
        }, 100);
        blue++;  // blue
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#red-count").textContent = `Red: ${red}`;
    document.querySelector("#blue-count").textContent = `Blue: ${blue}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    red = 0;
    blue = 0;
    updateStats();
})