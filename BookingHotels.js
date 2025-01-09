const translations = {
    en: {
      findFlight: "Find the Best Flight Deals",
      from: "From:",
      fromPlaceholder: "Enter departure city",
      to: "To:",
      toPlaceholder: "Enter destination city",
      checkInDate: "Check in-date:",
      returnDate: "Return Date:",
      passengers: "Passengers:",
      passengersPlaceholder: "Number of Companions",
      searchFlights: "Search Flights",
      logIn: "Log In",
    },
    es: {
      findFlight: "Encuentra las Mejores Ofertas de Vuelo",
      from: "Desde:",
      fromPlaceholder: "Introduce la ciudad de salida",
      to: "Hacia:",
      toPlaceholder: "Introduce la ciudad de destino",
      checkInDate: "Fecha de Entrada:",
      returnDate: "Fecha de Salida:",
      passengers: "Pasajeros:",
      passengersPlaceholder: "Número de compañeros",
      searchFlights: "Buscar Vuelos",
      logIn: "Iniciar Sesión",
    },
    fr: {
      findFlight: "Trouvez les Meilleures Offres de Vol",
      from: "De:",
      fromPlaceholder: "Entrez la ville de départ",
      to: "À:",
      toPlaceholder: "Entrez la ville de destination",
      checkInDate: "Date d'entrée:",
      returnDate: "Date de Retour:",
      passengers: "Passagers:",
      passengersPlaceholder: "Nombre de compagnons",
      searchFlights: "Rechercher des Vols",
      logIn: "Se Connecter",
    },
  };
  
  function updateLanguage(lang) {
    document.querySelector(".search-form h2").innerText = translations[lang].findFlight;
    document.querySelector('label[for="from"]').innerText = translations[lang].from;
    document.getElementById("from").placeholder = translations[lang].fromPlaceholder;
    document.querySelector('label[for="to"]').innerText = translations[lang].to;
    document.getElementById("to").placeholder = translations[lang].toPlaceholder;
    document.querySelector('label[for="departure-date"]').innerText = translations[lang].checkInDate;
    document.querySelector('label[for="return-date"]').innerText = translations[lang].returnDate;
    document.querySelector('label[for="passengers"]').innerText = translations[lang].passengers;
    document.getElementById("Number").placeholder = translations[lang].passengersPlaceholder;
    document.querySelector('button[type="submit"]').innerText = translations[lang].searchFlights;
    document.querySelector(".btn").innerText = translations[lang].logIn;
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
  