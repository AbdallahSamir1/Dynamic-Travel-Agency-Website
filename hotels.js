const translations = {
  en: {
    featuredHotels: "Our Featured Hotels",
    description: "Discover luxury and comfort with our top-rated hotels",
    bookNow: "Book Now!",
    hotels: [
      { name: "HOVIMA Jardin Caleta", price: "£95 /night" },
      { name: "Laguna Park", price: "£95 /night" },
      { name: "Columbus Aparthotel", price: "£77 /night" },
      { name: "Blue Sea Puerto Resort", price: "£115 /night" },
      { name: "Blue Sea Interpalace", price: "£75 /night" },
      { name: "Las Piramides", price: "£100 /night" },
    ],
  },
  es: {
    featuredHotels: "Nuestros Hoteles Destacados",
    description: "Descubre lujo y comodidad con nuestros hoteles mejor calificados",
    bookNow: "¡Reserva Ahora!",
    hotels: [
      { name: "HOVIMA Jardin Caleta", price: "£95 /noche" },
      { name: "Laguna Park", price: "£95 /noche" },
      { name: "Columbus Aparthotel", price: "£77 /noche" },
      { name: "Blue Sea Puerto Resort", price: "£115 /noche" },
      { name: "Blue Sea Interpalace", price: "£75 /noche" },
      { name: "Las Piramides", price: "£100 /noche" },
    ],
  },
  fr: {
    featuredHotels: "Nos Hôtels en Vedette",
    description: "Découvrez le luxe et le confort avec nos hôtels les mieux notés",
    bookNow: "Réservez Maintenant!",
    hotels: [
      { name: "HOVIMA Jardin Caleta", price: "£95 /nuit" },
      { name: "Laguna Park", price: "£95 /nuit" },
      { name: "Columbus Aparthotel", price: "£77 /nuit" },
      { name: "Blue Sea Puerto Resort", price: "£115 /nuit" },
      { name: "Blue Sea Interpalace", price: "£75 /nuit" },
      { name: "Las Piramides", price: "£100 /nuit" },
    ],
  },
};

function updateLanguage(lang) {
  document.querySelector("h2").innerText = translations[lang].featuredHotels;
  document.querySelector("p").innerText = translations[lang].description;

  const hotelCards = document.querySelectorAll(".gallery-card");
  translations[lang].hotels.forEach((hotel, index) => {
    const card = hotelCards[index];
    card.querySelector("h3").innerText = hotel.name;
    card.querySelector(".price-bold").innerText = hotel.price.split(" ")[0];
    card.querySelector(".price-subtext").innerText = hotel.price.split(" ")[1];
    card.querySelector(".btn1").innerText = translations[lang].bookNow;
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language-selector");
  const storedLanguage = localStorage.getItem("lang") || "en";
  updateLanguage(storedLanguage);
  languageSelector.value = storedLanguage;

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
  });
});