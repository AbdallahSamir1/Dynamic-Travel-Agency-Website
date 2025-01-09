document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
  
    setInterval(() => {
      items[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add("active");
    }, 3000);
  
    const translations = {
      en: {
        roomsTitle: "Our Rooms",
        roomsSubtitle: "Exception sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        familyRooms: "Family Rooms",
        singleRooms: "Single Rooms",
        bookNow: "Book Now",
        galleryTitle: "Our Gallery",
        gallerySubtitle: "Exception sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        servicesTitle: "Our Services",
        servicesSubtitle: "Exception sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        services: ["Delicious Food", "Fitness", "In-house Restaurant", "Beauty Spa"],
        contactInfo: "Contact Info",
        followUs: "Follow Us",
        logIn: "Log In",
      },
      es: {
        roomsTitle: "Nuestras Habitaciones",
        roomsSubtitle: "Excepción sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        familyRooms: "Habitaciones Familiares",
        singleRooms: "Habitaciones Individuales",
        bookNow: "Reservar Ahora",
        galleryTitle: "Nuestra Galería",
        gallerySubtitle: "Excepción sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        servicesTitle: "Nuestros Servicios",
        servicesSubtitle: "Excepción sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        services: ["Comida Deliciosa", "Fitness", "Restaurante Interior", "Spa de Belleza"],
        contactInfo: "Información de Contacto",
        followUs: "Síguenos",
        logIn: "Iniciar Sesión",
      },
      fr: {
        roomsTitle: "Nos Chambres",
        roomsSubtitle: "Exception sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        familyRooms: "Chambres Familiales",
        singleRooms: "Chambres Simples",
        bookNow: "Réservez Maintenant",
        galleryTitle: "Notre Galerie",
        gallerySubtitle: "Exception sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        servicesTitle: "Nos Services",
        servicesSubtitle: "Exception sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        services: ["Nourriture Délicieuse", "Fitness", "Restaurant Intérieur", "Spa Beauté"],
        contactInfo: "Informations de Contact",
        followUs: "Suivez-nous",
        logIn: "Se Connecter",
      },
    };
  
    const languageSelector = document.getElementById("language-selector");
    const storedLanguage = localStorage.getItem("lang") || "en";
  
    function updateLanguage(lang) {
      document.querySelector("#rooms .section-title").innerText = translations[lang].roomsTitle;
      document.querySelector("#rooms .section-subtitle").innerText = translations[lang].roomsSubtitle;
      items[0].querySelector("h3").innerText = translations[lang].familyRooms;
      items[1].querySelector("h3").innerText = translations[lang].singleRooms;
      document.querySelectorAll(".btn1").forEach((btn) => (btn.innerText = translations[lang].bookNow));
      document.querySelector("#gallery .section-title").innerText = translations[lang].galleryTitle;
      document.querySelector("#gallery .section-subtitle").innerText = translations[lang].gallerySubtitle;
      document.querySelector("#services .section-title").innerText = translations[lang].servicesTitle;
      document.querySelector("#services .section-subtitle").innerText = translations[lang].servicesSubtitle;
      const serviceCards = document.querySelectorAll(".service-card h3");
      translations[lang].services.forEach((text, index) => {
        if (serviceCards[index]) serviceCards[index].innerText = text;
      });
      document.querySelector(".info h3:first-child").innerText = translations[lang].contactInfo;
      document.querySelector(".info h3:last-child").innerText = translations[lang].followUs;
      document.querySelector(".btn").innerText = translations[lang].logIn;
    }
  
    updateLanguage(storedLanguage);
    languageSelector.value = storedLanguage;
  
    languageSelector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      updateLanguage(selectedLanguage);
      localStorage.setItem("lang", selectedLanguage);
    });
  });
  