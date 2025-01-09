const translations = {
  en: {
    heroTagline: "Discover now",
    heroTitle: "TRAVEL THE WHOLE WORLD",
    heroDescription: "Travel anywhere you want at any time with STDA Travel Agency as we provide you with all hotel offers and transportation you need.",
    signUp: "Sign Up",
    aboutTitle: "About Us",
    aboutSubtitle: "We Provide The Best Trips For You!",
    aboutContent: [
      "At STDA, we specialize in making your travel experience seamless and unforgettable.",
      "Offering a wide range of comfortable hotels and reliable transportation services.",
      "Whether you're planning a business trip, family vacation, or a relaxing getaway.",
      "We’re here to help you create lasting memories, every step of the way.",
    ],
    learnMore: "Learn More",
    sales: [
      { title: "Make your dream vacation come true", description: "Book your hotel now" },
      { title: "Book any transportation you want", description: "We provide flights, private cars, and buses" },
      { title: "Enjoy Your Next Trip", description: "Learn more about us" },
    ],
  },
  es: {
    heroTagline: "Descubre ahora",
    heroTitle: "VIAJA POR TODO EL MUNDO",
    heroDescription: "Viaja a donde quieras en cualquier momento con STDA Travel Agency, ya que te ofrecemos todas las ofertas de hoteles y transporte que necesitas.",
    signUp: "Regístrate",
    aboutTitle: "Sobre Nosotros",
    aboutSubtitle: "¡Proveemos Los Mejores Viajes Para Ti!",
    aboutContent: [
      "En STDA, nos especializamos en hacer que tu experiencia de viaje sea perfecta e inolvidable.",
      "Ofreciendo una amplia gama de hoteles cómodos y servicios de transporte confiables.",
      "Ya sea que estés planeando un viaje de negocios, unas vacaciones familiares o una escapada relajante.",
      "Estamos aquí para ayudarte a crear recuerdos inolvidables en cada paso del camino.",
    ],
    learnMore: "Aprender Más",
    sales: [
      { title: "Haz realidad tus vacaciones soñadas", description: "Reserva tu hotel ahora" },
      { title: "Reserva cualquier transporte que desees", description: "Proveemos vuelos, autos privados y autobuses" },
      { title: "Disfruta tu próximo viaje", description: "Aprende más sobre nosotros" },
    ],
  },
  fr: {
    heroTagline: "Découvrez maintenant",
    heroTitle: "VOYAGEZ DANS LE MONDE ENTIER",
    heroDescription: "Voyagez où vous voulez, quand vous voulez avec STDA Travel Agency, car nous vous proposons toutes les offres d'hôtels et de transports dont vous avez besoin.",
    signUp: "Inscrivez-vous",
    aboutTitle: "À Propos de Nous",
    aboutSubtitle: "Nous Offrons Les Meilleurs Voyages Pour Vous !",
    aboutContent: [
      "Chez STDA, nous nous spécialisons dans la création d'une expérience de voyage sans faille et inoubliable.",
      "Offrant une large gamme d'hôtels confortables et de services de transport fiables.",
      "Que vous planifiez un voyage d'affaires, des vacances en famille ou une escapade relaxante.",
      "Nous sommes là pour vous aider à créer des souvenirs durables, à chaque étape du chemin.",
    ],
    learnMore: "En Savoir Plus",
    sales: [
      { title: "Réalisez vos vacances de rêve", description: "Réservez votre hôtel maintenant" },
      { title: "Réservez le transport de votre choix", description: "Nous proposons des vols, des voitures privées et des bus" },
      { title: "Profitez de votre prochain voyage", description: "En savoir plus sur nous" },
    ],
  },
};

function updateLanguage(lang) {
  // Hero Section
  document.querySelector(".hero-content p:first-child").innerText = translations[lang].heroTagline;
  document.querySelector(".hero-content h1").innerText = translations[lang].heroTitle;
  document.querySelector(".hero-content p:nth-of-type(2)").innerText = translations[lang].heroDescription;
  document.querySelector(".explore-btn").innerText = translations[lang].signUp;

  // About Section
  document.querySelector(".about-text span").innerText = translations[lang].aboutTitle;
  document.querySelector(".about-text h2").innerText = translations[lang].aboutSubtitle;

  const aboutContent = document.querySelectorAll(".about-text p");  
  translations[lang].aboutContent.forEach((text, index) => {
    aboutContent[index].innerText = text;
  });

  document.querySelector(".about .btn").innerText = translations[lang].learnMore;

  // Sales Section
  const salesBoxes = document.querySelectorAll(".sales-box");
  translations[lang].sales.forEach((sale, index) => {
    salesBoxes[index].querySelector("h3").innerText = sale.title;
    salesBoxes[index].querySelector("p").innerText = sale.description;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language-selector");

  // Get the stored language or default to English
  const storedLanguage = localStorage.getItem("lang") || "en";
  updateLanguage(storedLanguage);
  languageSelector.value = storedLanguage; // Set the selector to the stored value
  

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage); // Store the selected language
  });
});
  