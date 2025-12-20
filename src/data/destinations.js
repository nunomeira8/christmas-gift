import paris1 from "../assets/images/destinations/paris/1.jpg";
import paris2 from "../assets/images/destinations/paris/2.jpg";
import paris3 from "../assets/images/destinations/paris/3.jpg";
import madrid1 from "../assets/images/destinations/madrid/1.jpg";
import madrid2 from "../assets/images/destinations/madrid/2.jpg";
import madrid3 from "../assets/images/destinations/madrid/3.jpg"; 
import london1 from "../assets/images/destinations/london/1.jpg";
import london2 from "../assets/images/destinations/london/2.jpg";
import london3 from "../assets/images/destinations/london/3.jpg";
import amsterdam1 from "../assets/images/destinations/amsterdam/1.jpg";
import amsterdam2 from "../assets/images/destinations/amsterdam/2.jpg"; 
import amsterdam3 from "../assets/images/destinations/amsterdam/3.jpg";
import brussels1 from "../assets/images/destinations/brussels/1.jpg";
import brussels2 from "../assets/images/destinations/brussels/2.jpg";
import brussels3 from "../assets/images/destinations/brussels/3.jpg";
import milano1 from "../assets/images/destinations/milano/1.jpg";
import milano2 from "../assets/images/destinations/milano/2.jpg";
import milano3 from "../assets/images/destinations/milano/3.jpg"; 
import rome1 from "../assets/images/destinations/rome/1.jpg";
import rome2 from "../assets/images/destinations/rome/2.jpg";
import rome3 from "../assets/images/destinations/rome/3.jpg";
import prague1 from "../assets/images/destinations/prague/1.jpg";
import prague2 from "../assets/images/destinations/prague/2.jpg";
import prague3 from "../assets/images/destinations/prague/3.jpg"; 
import vienna1 from "../assets/images/destinations/vienna/1.jpg";
import vienna2 from "../assets/images/destinations/vienna/2.jpg";
import vienna3 from "../assets/images/destinations/vienna/3.jpg";

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
    id: "london",
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
    images: [london1, london2, london3],
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
  {
    id: "bruxelas",
    city: "Bruxelas",
    country: "Bélgica",
    description:
      "Bruxelas é a capital da Bélgica e da União Europeia, conhecida pela sua arquitetura impressionante, cultura vibrante e deliciosa gastronomia. On va à Bruxelles ?",
    highlights: [
      "Grand Place",
      "Atomium",
      "Manneken Pis", 
      "Museu de Belas Artes",
      "Parc du Cinquantenaire"
    ],
    images: [brussels1, brussels2, brussels3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/brus/porto-para-bruxelas.html",
  },
  {
    id: "milano",
    city: "Milão",
    country: "Itália",
    description:
      "Milão é a capital da moda e do design em Itália, conhecida pela sua elegância, cultura rica e vibrante cena artística. Andiamo a Milano?",
    highlights: [
      "Catedral de Milão",
      "Museu de Arte da Moda",
      "Piazza della Scala",
      "Galleria Vittorio Emanuele II",
      "Bairro de Brera",
      "Santa Maria delle Grazie"
    ],
    images: [milano1, milano2, milano3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/mila/porto-para-milao.html",
  },
  {
    id: "roma",
    city: "Roma",
    country: "Itália",
    description:
      "Roma é a capital da Itália, conhecida pela sua história milenar, arquitetura imponente e rica cultura. Andiamo a Roma?",
    highlights: [
      "Coliseu",
      "Piazza Navona",
      "Fontana di Trevi",
      "Museu do Vaticano",
      "Piazza del Campidoglio"
    ],
    images: [rome1, rome2, rome3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/rome/porto-para-roma.html",
  },
  { 
    id: "praga",
    city: "Praga",
    country: "República Checa",
    description: "Praga é a capital da República Checa, famosa pela sua arquitetura histórica, vida noturna animada e rica tradição cultural. Půjdeme do Prahy?",
    highlights: [
      "Castelo de Praga",
      "Ponte Carlos",
      "Relógio Astronômico",  
      "Praça da Cidade Velha",
      "Catedral de São Vito"
    ],
    images: [prague1, prague2, prague3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/prg/porto-para-praga.html",
  },
  {
    id: "vienna",
    city: "Viena",
    country: "Áustria",
    description: "Viena é a capital da Áustria, conhecida pela sua rica história musical, arquitetura clássica e cultura refinada. Gehen wir nach Wien?",
    highlights: [
      "Palácio de Schönbrunn",
      "Catedral de Viena",
      "Teatro Belcanto",
      "Museumsquartier",
      "Palácio de Hofburg"
    ],
    images: [vienna1, vienna2, vienna3],
    bookingUrl: "https://www.skyscanner.pt/rotas/opo/vie/porto-para-viena.html"
  }
];
