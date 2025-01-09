const translations = {
  en: {
    title: "Our Featured Hotels",
    description: "Discover luxury and comfort with our top-rated hotels",
    flight: "Flight",
    privateCar: "Private Car",
    buses: "Buses",
    exploreNow: "Explore Now",
    login: "Log In",
  },
  es: {
    title: "Nuestros Hoteles Destacados",
    description: "Descubre lujo y comodidad con nuestros hoteles mejor calificados",
    flight: "Vuelo",
    privateCar: "Coche Privado",
    buses: "Autobuses",
    exploreNow: "Explorar Ahora",
    login: "Iniciar Sesión",
  },
  fr: {
    title: "Nos Hôtels en Vedette",
    description: "Découvrez le luxe et le confort avec nos hôtels les mieux notés",
    flight: "Vol",
    privateCar: "Voiture Privée",
    buses: "Bus",
    exploreNow: "Explorer Maintenant",
    login: "Se Connecter",
  },
};

function updateLanguage(lang) {
  document.querySelector("h2").innerText = translations[lang].title;
  document.querySelector("p").innerText = translations[lang].description;
  document.querySelectorAll(".gallery-card h3")[0].innerText = translations[lang].flight;
  document.querySelectorAll(".gallery-card h3")[1].innerText = translations[lang].privateCar;
  document.querySelectorAll(".gallery-card h3")[2].innerText = translations[lang].buses;
  document.querySelectorAll(".book-now").forEach((btn) => {
    btn.innerText = translations[lang].exploreNow;
  });
  document.querySelector(".btn").innerText = translations[lang].login;
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language-selector");
  const storedLanguage = localStorage.getItem("lang") || "en";
  updateLanguage(storedLanguage);
  languageSelector.value = storedLanguage;

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage);
  });
});