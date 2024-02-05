// Current project is highlighted in the dots

let dots = document.querySelectorAll(".dot");

let main = document.querySelector(".main");
var lastScrollTop = main.scrollTop;

function switchColors(element) {
  let links = document.querySelectorAll(".dot");
  links.forEach((link) => {
    link.classList.remove("current");
  });
  element.classList.add("current");
  let curProject = document.querySelector(element.hash);
  actualizeCurrent(curProject);
}

function nextProject() {
  let projects = document.querySelectorAll(".project");
  if (!isCurrent(projects[projects.length - 1])) {
    slideProject(projects, 1);
  }
}

function prevProject() {
  let projects = document.querySelectorAll(".project");
  if (!isCurrent(projects[0])) {
    slideProject(projects, -1);
  }
}

// Smoothly scroll to next project if not already last project
function slideProject(projects, direction) {
  i = 0;
  while (!isCurrent(projects[i]) && i < projects.length - 1) {
    i = i + 1;
  }
  if (isCurrent(projects[i])) {
    project = projects[i + direction];
    project.scrollIntoView({
      behavior: "smooth",
    });
    actualizeCurrent(project);
    let links = document.querySelectorAll(".dot");
    for (var link of links) {
      link.classList.remove("current");
      if (link.href.includes(project.id)) {
        link.classList.add("current");
      }
    }
  }
}

let currentProject = document.querySelectorAll(".project")[0];
console.log(currentProject);

function isCurrent(element) {
  currentProject = element;
  return element.classList.contains("current");
}

function actualizeCurrent(element) {
  let projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.classList.remove("current");
  });
  element.classList.add("current");
  currentProject = element;
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  if (isCurrent(projects[0])) {
    prev.style.display = "none";
  } else if (isCurrent(projects[projects.length - 1])) {
    next.style.display = "none";
  } else {
    prev.style.display = "block";
    next.style.display = "block";
  }
}

//Scroll back to first project on reload
window.onload = function () {
  var container = document.getElementById("projects");
  var content = container.innerHTML;
  container.innerHTML = content;
};
