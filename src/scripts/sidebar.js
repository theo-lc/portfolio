// Current section is highlighted in summary links

let summaryLinks = document.querySelectorAll(".summary a");
let mainSections = document.querySelectorAll(".main section");

let main = document.querySelector(".main");

main.addEventListener("scroll", (event) => {
  let fromTop = main.scrollTop;
  console.log(fromTop);
  // Vertical scroll: highlight the corresponding href
  summaryLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    section = document.getElementById(section.id);

    // Check window width for when sidebar is transformed as a header
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    let headerHeight =
      windowWidth > 1060 ? 0 : document.querySelector(".sidebar").offsetHeight;

    if (
      section.offsetTop - headerHeight <= fromTop &&
      section.offsetTop + section.offsetHeight - headerHeight > fromTop
    ) {
      link.classList.add("current");
      section.classList.add("current");
      localStorage.setItem("current-section", JSON.stringify(section.id));
    } else {
      link.classList.remove("current");
      section.classList.remove("current");
    }
  });
});

let menu = document.querySelector(".menu");
let summary = document.querySelector(".summary");
summary = document.getElementById(summary.id);

let header = document.querySelector(".sidebar");

menu.addEventListener("click", (event) => {
  console.log("menu");
  console.log(summary);
  if (!summary.classList.contains("show")) {
    summary.classList.add("show");
    header.style.flexWrap = "wrap";
  } else {
    summary.classList.remove("show");
    header.style.flexWrap = "nowrap";
  }
});
