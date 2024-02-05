// Current section is highlighted in summary links

let summaryLinks = document.querySelectorAll(".summary a");
let mainSections = document.querySelectorAll(".main section");

main.addEventListener("scroll", (event) => {
  let fromTop = main.scrollTop;

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
      windowWidth > 700 ? 0 : document.querySelector(".sidebar").offsetHeight;

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
