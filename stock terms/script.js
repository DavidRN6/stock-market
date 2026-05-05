let items = document.querySelectorAll(".item");

items.forEach(item => {
    let btn = item.querySelector("button");

    btn.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  const hiddenItems = document.querySelectorAll(".item.hidden");

  const isHidden = hiddenItems[0].style.display === "" || hiddenItems[0].style.display === "none";

  hiddenItems.forEach(item => {
    item.style.display = isHidden ? "block" : "none";
  });

  btn.textContent = isHidden ? "عرض أقل" : "عرض المزيد";
});