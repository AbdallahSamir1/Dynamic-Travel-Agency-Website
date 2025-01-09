const translations = {
  en: {
    bookRide: "BOOK YOUR TRANSPORTATION!",
    type: "Transportation Type:",
    typePlaceholder: "Enter the transportation type",
    from: "From:",
    fromPlaceholder: "Place from where",
    to: "To:",
    toPlaceholder: "Place You Want To Visit",
    passengers: "How Many:",
    passengersPlaceholder: "Number Of Guests",
    arrival: "Arrival Date:",
    leaving: "Leaving Date:",
    submit: "Submit",
    logIn: "Log In",
  },
  es: {
    bookRide: "¡RESERVA TU TRANSPORTE!",
    type: "Tipo de Transporte:",
    typePlaceholder: "Introduce el tipo de transporte",
    from: "Desde:",
    fromPlaceholder: "Lugar desde donde",
    to: "Hacia:",
    toPlaceholder: "Lugar que quieres visitar",
    passengers: "¿Cuántos?:",
    passengersPlaceholder: "Número de invitados",
    arrival: "Fecha de Llegada:",
    leaving: "Fecha de Salida:",
    submit: "Enviar",
    logIn: "Iniciar Sesión",
  },
  fr: {
    bookRide: "RÉSERVEZ VOTRE TRANSPORT !",
    type: "Type de Transport:",
    typePlaceholder: "Entrez le type de transport",
    from: "De:",
    fromPlaceholder: "Lieu de départ",
    to: "À:",
    toPlaceholder: "Lieu que vous voulez visiter",
    passengers: "Combien:",
    passengersPlaceholder: "Nombre d'invités",
    arrival: "Date d'Arrivée:",
    leaving: "Date de Départ:",
    submit: "Soumettre",
    logIn: "Se Connecter",
  },
};

function updateLanguage(lang) {
  document.querySelector(".booking h1").innerText = translations[lang].bookRide;
  document.querySelector('label[for="type"]').innerText = translations[lang].type;
  document.getElementById("type").placeholder = translations[lang].typePlaceholder;
  document.querySelector('label[for="destinationfrom"]').innerText = translations[lang].from;
  document.getElementById("from").placeholder = translations[lang].fromPlaceholder;
  document.querySelector('label[for="destinationto"]').innerText = translations[lang].to;
  document.getElementById("to").placeholder = translations[lang].toPlaceholder;
  document.querySelector('label[for="passengers"]').innerText = translations[lang].passengers;
  document.getElementById("passengers").placeholder = translations[lang].passengersPlaceholder;
  document.querySelector('label[for="arrival"]').innerText = translations[lang].arrival;
  document.querySelector('label[for="leaving"]').innerText = translations[lang].leaving;
  document.querySelector('button[type="submit"]').innerText = translations[lang].submit;
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
