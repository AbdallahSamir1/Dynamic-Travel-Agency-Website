const translations = {
    en: {
      aboutUs: "About Us",
      aboutSubtitle: "We Provide The Best Trips For You!",
      aboutParagraphs: [
        "At STDA, we specialize in making your travel experience seamless and unforgettable.",
        "Offering a wide range of comfortable hotels and reliable transportation services.",
        "Whether you're planning a business trip, family vacation, or a relaxing getaway, we ensure your journey is smooth from start to finish.",
        "We’re here to help you create lasting memories, every step of the way. Trust us to handle your travel needs so you can focus on enjoying the adventure ahead!",
      ],
      ourServices: "Our Services",
      services: [
        { title: "The Best Hotels", description: "Book your hotel now" },
        { title: "Book Any Transportation You Want", description: "Book Your Transportation" },
        { title: "Enjoy Your Next Trip", description: "Learn More About Us" },
      ],
      contactInfo: "Contact Info",
      followUs: "Follow Us",
    },
    es: {
      aboutUs: "Sobre Nosotros",
      aboutSubtitle: "¡Proveemos Los Mejores Viajes Para Ti!",
      aboutParagraphs: [
        "En STDA, nos especializamos en hacer que tu experiencia de viaje sea perfecta e inolvidable.",
        "Ofrecemos una amplia gama de hoteles cómodos y servicios de transporte confiables.",
        "Ya sea que estés planeando un viaje de negocios, unas vacaciones familiares o una escapada relajante, aseguramos que tu viaje sea tranquilo de principio a fin.",
        "Estamos aquí para ayudarte a crear recuerdos inolvidables, en cada paso del camino. ¡Confía en nosotros para manejar tus necesidades de viaje y disfruta de la aventura que te espera!",
      ],
      ourServices: "Nuestros Servicios",
      services: [
        { title: "Los Mejores Hoteles", description: "Reserva tu hotel ahora" },
        { title: "Reserva Cualquier Transporte", description: "Reserva Tu Transporte" },
        { title: "Disfruta Tu Próximo Viaje", description: "Aprende Más Sobre Nosotros" },
      ],
      contactInfo: "Información de Contacto",
      followUs: "Síguenos",
    },
    fr: {
      aboutUs: "À Propos de Nous",
      aboutSubtitle: "Nous Offrons Les Meilleurs Voyages Pour Vous !",
      aboutParagraphs: [
        "Chez STDA, nous nous spécialisons dans la création d'une expérience de voyage sans faille et inoubliable.",
        "Nous proposons une large gamme d'hôtels confortables et de services de transport fiables.",
        "Que vous planifiez un voyage d'affaires, des vacances en famille ou une escapade relaxante, nous assurons que votre voyage soit fluide du début à la fin.",
        "Nous sommes là pour vous aider à créer des souvenirs durables, à chaque étape. Faites-nous confiance pour gérer vos besoins de voyage et profitez de l'aventure à venir !",
      ],
      ourServices: "Nos Services",
      services: [
        { title: "Les Meilleurs Hôtels", description: "Réservez votre hôtel maintenant" },
        { title: "Réservez Tout Transport", description: "Réservez Votre Transport" },
        { title: "Profitez De Votre Prochain Voyage", description: "En Savoir Plus Sur Nous" },
      ],
      contactInfo: "Informations de Contact",
      followUs: "Suivez-nous",
    },
  };
  
  function updateLanguage(lang) {
    // About Section
    document.querySelector(".about-text h1").innerText = translations[lang].aboutUs;
    document.querySelector(".about-text h2").innerText = translations[lang].aboutSubtitle;
  
    const aboutParagraphs = document.querySelectorAll(".about-text p");
    translations[lang].aboutParagraphs.forEach((text, index) => {
      if (aboutParagraphs[index]) {
        aboutParagraphs[index].innerText = text;
      }
    });
  
    // Services Section
    document.querySelector(".h h2").innerHTML = `<span>${translations[lang].ourServices}</span>`;
    const serviceBoxes = document.querySelectorAll(".sales-box");
    translations[lang].services.forEach((service, index) => {
      if (serviceBoxes[index]) {
        serviceBoxes[index].querySelector("h3").innerText = service.title;
        serviceBoxes[index].querySelector("p").innerText = service.description;
      }
    });
  
    // Footer Section
    const contactInfo = document.querySelectorAll(".info h3");
    if (contactInfo[0]) contactInfo[0].innerText = translations[lang].contactInfo;
    if (contactInfo[1]) contactInfo[1].innerText = translations[lang].followUs;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");
  
    // Retrieve stored language or default to English
    const storedLanguage = localStorage.getItem("lang") || "en";
    updateLanguage(storedLanguage);
    languageSelector.value = storedLanguage;
  
    // Change language on selection
    languageSelector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      updateLanguage(selectedLanguage);
      localStorage.setItem("lang", selectedLanguage);
    });
  });
  