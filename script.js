const logo = document.getElementById("logo");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    logo.style.transform = `
        rotateY(${x}deg)
        rotateX(${y}deg)
    `;
});

document.addEventListener("mouseleave", () => {
    logo.style.transform = "rotateX(0deg) rotateY(0deg)";
});

