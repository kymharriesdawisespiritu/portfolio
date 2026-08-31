// ===============================
// Project Carousel
// ===============================
const projectData = [
  {
    title: "ToDoList",
    desc: "A simple ToDo List application built with HTML, CSS, and JavaScript.",
    viewUrl: "https://kymharriesdawisespiritu.github.io/ToDoList/ ",
    repoUrl: " https://github.com/kymharriesdawisespiritu/ToDoList.git",
  },
  {
    title: "Foodmeal",
    desc: "A responsive Foodmeal website ",
    viewUrl: "https://kymharriesdawisespiritu.github.io/Food-meal/",
    repoUrl: "https://github.com/kymharriesdawisespiritu/Food-meal.git",
  },
  {
    title: "resume Portfolio",
    desc: "My personal resume site.",
    viewUrl: "https://kymharriesdawisespiritu.github.io/resume/",
    repoUrl: "https://github.com/kymharriesdawisespiritu/resume.git",
  },
];

const myCarousel = document.getElementById("carousel");

if (myCarousel) {
  myCarousel.addEventListener("slide.bs.carousel", (event) => {
    const project = projectData[event.to];

    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-desc").textContent = project.desc;
    document.getElementById("project-view").href = project.viewUrl;
    document.getElementById("project-repo").href = project.repoUrl;
  });
}

// ===============================
// Theme Toggle
// ===============================

const themeToggleBtn = document.getElementById("themeToggle");
const rootHtml = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "dark";
rootHtml.setAttribute("data-bs-theme", savedTheme);

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.add("theme-fade");

  setTimeout(() => {
    const currentTheme = rootHtml.getAttribute("data-bs-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    rootHtml.setAttribute("data-bs-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    document.body.classList.remove("theme-fade");

    AOS.refresh();
  }, 150);
});

// ===============================
// AOS
// ===============================

AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  offset: 100,
});
