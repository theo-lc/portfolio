let links = document.querySelectorAll("a[href^='#']");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(link.hash);
    let elementToScrollTo = document.getElementById(link.hash.substring(1));
    console.log(elementToScrollTo);
    // elementToScrollTo = document.getElementById(elementToScrollTo);
    elementToScrollTo.scrollIntoView({
      // block: "start",
      behavior: "smooth",
    });

    return false;
  });
});
