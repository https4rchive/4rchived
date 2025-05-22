window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1500);

    const x = document.querySelector(".central-x");
    const categories = document.querySelectorAll(".category-list span");
    x.addEventListener("click", () => {
        x.classList.toggle("active");
        categories.forEach((el) => el.style.opacity = x.classList.contains("active") ? "1" : "0");
    });
});
