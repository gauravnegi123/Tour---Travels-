const signin = document.getElementById("signin");
const close = document.getElementById("close");
const loginpopup = document.getElementById("loginpopup");






signin.addEventListener("click", () => {
    loginpopup.style.display = 'flex';
});

close.addEventListener("click", () => {
    loginpopup.style.display = 'none';
});

