const projectData = [
  {
    title: "ToDoList",
    desc: "A simple ToDo List application built with **HTML, CSS, and JavaScript**. This project allows users to add tasks, mark them as completed, and delete completed tasks. It was created to practice DOM manipulation, event handling, and basic JavaScript fundamentals without using any frameworks.",
    viewUrl: "https://kymharriesdawisespiritu.github.io/ToDoList/",
    repoUrl: "https://github.com/kymharriesdawisespiritu/ToDoList.git",
  },
  {
    title: "Interactive Photo Gallery",
    desc: "A responsive media gallery built to organize and display imagery with fluid lightboxes, instant search functionality, and seamless category filtering options.",
    viewUrl: "https://your-photogallery-link.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Developer Portfolio",
    desc: "My personal portfolio site built using modern Bootstrap 5 components to highlight my ongoing coding journey, completed projects, and technical skills.",
    viewUrl: "https://your-portfolio-link.com",
    repoUrl: "https://github.com",
  },
];

const myCarousel = document.getElementById("carousel");

myCarousel.addEventListener("slide.bs.carousel", function (event) {
  const nextSlideIndex = event.to;

  const currentProject = projectData[nextSlideIndex];

  document.getElementById("project-title").textContent = currentProject.title;
  document.getElementById("project-desc").textContent = currentProject.desc;
  document
    .getElementById("project-view")
    .setAttribute("href", currentProject.viewUrl);
  document
    .getElementById("project-repo")
    .setAttribute("href", currentProject.repoUrl);
});
