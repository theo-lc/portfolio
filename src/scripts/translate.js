// This file contains every methods used to switch languages

function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    var object = langData[key];
    element.textContent = object;
  });
}

function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = french;
  updateContent(langData);
}

window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "fr";
  console.log(userPreferredLanguage);
  if (userPreferredLanguage != "en") {
    const langData = french;
    updateContent(langData);
  }

  var languageOption = document.getElementById(userPreferredLanguage);
  languageOption.style.display = "none";

  var img = languageOption.children[0];
  var currentLanguage = document.getElementById("current-language");
  currentLanguage.appendChild(img);
});
