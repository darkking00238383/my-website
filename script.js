
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// باز و بسته کردن منوی موبایل
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// بستن منو بعد از انتخاب لینک
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// نمایش تدریجی بخش‌ها هنگام اسکرول
const elements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
} else {
  elements.forEach((element) => element.classList.add("visible"));
}
