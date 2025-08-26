

document.getElementById("toggle-password").onclick = () => {
    const input = document.getElementById("password");
    input.type = input.type === "password" ? "text" : "password";
};
