let items = document.querySelectorAll(".item");

items.forEach(item => {
    let btn = item.querySelector("button");

    btn.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});