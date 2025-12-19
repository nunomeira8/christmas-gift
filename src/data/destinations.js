import paris1 from "../assets/images/destinations/paris/1.jpg";
import paris2 from "../assets/images/destinations/paris/2.jpg";
import paris3 from "../assets/images/destinations/paris/3.jpg";
import madrid1 from "../assets/images/destinations/madrid/1.jpg";
import madrid2 from "../assets/images/destinations/madrid/2.jpg";
import madrid3 from "../assets/images/destinations/madrid/3.jpg"; 
import londres1 from "../assets/images/destinations/londres/1.jpg";
import londres2 from "../assets/images/destinations/londres/2.jpg";
import londres3 from "../assets/images/destinations/londres/3.jpg";
import amsterdam1 from "../assets/images/destinations/amsterdam/1.jpg";
import amsterdam2 from "../assets/images/destinations/amsterdam/2.jpg"; 
import amsterdam3 from "../assets/images/destinations/amsterdam/3.jpg";

export const destinations = [
  {
    id: "paris",
    city: "Paris",
    country: "França",
    description:
      "A cidade do amor. Romântica e elegante, conhecida pela sua arte, arquitetura icónica e ambiente boémio. On va à Paris ?",
    highlights: [
      "Torre Eiffel",
      "Museu do Louvre",
      "Arco do Triunfo",
      "Catedral de Notre-Dame",
      "Champs-Élysées",
      "Parc des Princes"
    ],
    images: [paris1, paris2, paris3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/pari/porto-para-paris.html",
  },
  {
    id: "madrid",
    city: "Madrid",
    country: "Espanha",
    description:
      "Capital de Espanha. Uma cidade vibrante e acolhedora, famosa pela sua energia e rica tradição cultural. ¿Vamos a Madrid?",
    highlights: [
      "Parque do Retiro",
      "Puerta del Sol",
      "Plaza Mayor",
      "Estádio Santiago Bernabéu",
    ],
    images: [madrid1, madrid2, madrid3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/mad/porto-para-madrid.html",
  },
  {
    id: "londres",
    city: "Londres",
    country: "Reino Unido",
    description:
      "Londres é uma cidade cosmopolita e histórica, onde a tradição se cruza com a modernidade numa atmosfera dinâmica e multicultural. Shall we go to London?",
    highlights: [
      "Palácio de Buckingham",
      "Big Ben",
      "London Eye",
      "Madame Tussauds",
      "Tower Bridge",
    ],
    images: [londres1, londres2, londres3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/lond/porto-para-londres.html",
  },
  {
    id: "amsterdam",
    city: "Amesterdão",
    country: "Países Baixos",
    description:
      "Amesterdão é uma cidade encantadora e descontraída, famosa pelos seus canais, bicicletas e rica vida cultural. Zullen we naar Amsterdam gaan?",
    highlights: [
      "Canais de Amesterdão",
      "Museu Van Gogh",
      "Casa de Anne Frank",
      "Rijksmuseum",
      "Vondelpark",
    ],
    images: [amsterdam1, amsterdam2, amsterdam3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/ams/porto-para-amesterdao.html",
  },
];
