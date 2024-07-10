import {
  AfricaBreakCardType,
  AmestBreakCardType,
  AsiaBreakCardType,
  EuropeBreakCardType,
  HolidayEveryoneItem,
  HolidayItem,
  LondonBreakCardType,
  NextHolidayDataType,
  ParisBreakCardType,
  RecentHolidayItem,
} from "src/types";

import LondonImg from "../../public/Images/holiday-london.jpg";
import DubaiImg from "../../public/Images/holiday-dubai.jpg";
import ParisImg from "../../public/Images/holiday-paris.jpg";

import SpainImg from "../../public/Images/spain.jpg";
import PortugalImg from "../../public/Images/portugal.jpg";
import GreeceImg from "../../public/Images/greece.jpg";
import MaldivesImg from "../../public/Images/maldives.jpg";

import AmestHotel1 from "../../public/Images/amsterdam-hotel1.jpg";
import AmestHotel2 from "../../public/Images/amsterdam-hotel2.jpg";
import AmestHotel3 from "../../public/Images/amsterdam-hotel3.jpg";
import AmestHotel4 from "../../public/Images/amsterdam-hotel4.jpg";
import AmestHotel5 from "../../public/Images/amsterdam-hotel5.jpg";
import AmestHotel6 from "../../public/Images/amsterdam-hotel6.jpg";

import LondonHotel1 from "../../public/Images/london-hotel1.jpg";
import LondonHotel2 from "../../public/Images/london-hotel2.jpg";
import LondonHotel3 from "../../public/Images/london-hotel3.jpg";
import LondonHotel4 from "../../public/Images/london-hotel4.jpg";
import LondonHotel5 from "../../public/Images/london-hotel5.jpg";
import LondonHotel6 from "../../public/Images/london-hotel6.jpg";

import ParisHotel1 from "../../public/Images/france-hotel1.jpg";
import ParisHotel2 from "../../public/Images/france-hotel2.jpg";
import ParisHotel3 from "../../public/Images/france-hotel3.jpg";
import ParisHotel4 from "../../public/Images/france-hotel4.jpg";
import ParisHotel5 from "../../public/Images/france-hotel5.jpg";
import ParisHotel6 from "../../public/Images/france-hotel6.jpg";

import EuropeHotel1 from "../../public/Images/amsterdam-hotel1.jpg";
import EuropeHotel2 from "../../public/Images/london-hotel1.jpg";
import EuropeHotel3 from "../../public/Images/france-hotel1.jpg";
import EuropeHotel4 from "../../public/Images/amsterdam-hotel4.jpg";
import EuropeHotel5 from "../../public/Images/london-hotel2.jpg";
import EuropeHotel6 from "../../public/Images/france-hotel4.jpg";

import AsiaHotel1 from "../../public/Images/bali-resort1.jpg";
import AsiaHotel2 from "../../public/Images/thailand-resort1.jpg";
import AsiaHotel3 from "../../public/Images/bali-resort2.jpg";
import AsiaHotel4 from "../../public/Images/malaysia-resort1.jpg";
import AsiaHotel5 from "../../public/Images/thailand-resort2.jpg";
import AsiaHotel6 from "../../public/Images/bali-resort2.jpg";

import AfricaHotel1 from "../../public/Images/egypt-resort1.jpg";
import AfricaHotel2 from "../../public/Images/morocco-resort1.jpg";
import AfricaHotel3 from "../../public/Images/egypt-resort2.jpg";
import AfricaHotel4 from "../../public/Images/egypt-resort3.jpg";
import AfricaHotel5 from "../../public/Images/morocco-resort2.jpg";
import AfricaHotel6 from "../../public/Images/egypt-resort3.jpg";

export const holidayItems: HolidayItem[] = [
  {
    id: 1,
    itemImage: LondonImg,
    itemTitle: "Beach Paradise",
    itemDescription:
      "Experience the ultimate beach getaway with stunning ocean views and luxurious amenities.",
  },
  {
    id: 2,
    itemImage: DubaiImg,
    itemTitle: "Mountain Retreat",
    itemDescription:
      "Escape to the mountains for a peaceful retreat with breathtaking scenery and outdoor adventures.",
  },
  {
    id: 3,
    itemImage: ParisImg,
    itemTitle: "City Explorer",
    itemDescription:
      "Discover the vibrant culture and bustling streets of the city with our exclusive city explorer package.",
  },
];

export const holidayData: RecentHolidayItem[] = [
  {
    id: 1,
    itemImage: SpainImg,
    itemTitle: "Spain",
    itemDescription: "Explore the rich culture and sunny beaches of Spain.",
    itemNights: "7 nights",
    itemPrice: "$1200",
  },
  {
    id: 2,
    itemImage: PortugalImg,
    itemTitle: "Portugal",
    itemDescription:
      "Enjoy the beautiful landscapes and historic cities of Portugal.",
    itemNights: "5 nights",
    itemPrice: "$950",
  },
  {
    id: 3,
    itemImage: GreeceImg,
    itemTitle: "Greece",
    itemDescription:
      "Experience the ancient history and stunning islands of Greece.",
    itemNights: "10 nights",
    itemPrice: "$1500",
  },
  {
    id: 4,
    itemImage: MaldivesImg,
    itemTitle: "Maldives",
    itemDescription: "Relax in the tropical paradise of the Maldives.",
    itemNights: "7 nights",
    itemPrice: "$2500",
  },
];

export const holidayEveryone: HolidayEveryoneItem[] = [
  {
    id: 1,
    itemTitle: "Beach Getaway",
    itemSubTitle: "Relax by the sea",
    itemPrice: "$300",
  },
  {
    id: 2,
    itemTitle: "Mountain Adventure",
    itemSubTitle: "Explore the peaks",
    itemPrice: "$450",
  },
  {
    id: 3,
    itemTitle: "City Tour",
    itemSubTitle: "Discover urban treasures",
    itemPrice: "$200",
  },
  {
    id: 4,
    itemTitle: "Desert Safari",
    itemSubTitle: "Experience the dunes",
    itemPrice: "$350",
  },
  {
    id: 5,
    itemTitle: "Forest Retreat",
    itemSubTitle: "Unwind in nature",
    itemPrice: "$400",
  },
  {
    id: 6,
    itemTitle: "Island Hopping",
    itemSubTitle: "Adventure through islands",
    itemPrice: "$500",
  },
];

export const nextHoliday: NextHolidayDataType[] = [
  {
    id: 1,
    itemTitle: "Beach Getaway",
  },
  {
    id: 2,
    itemTitle: "Mountain Adventure",
  },
  {
    id: 3,
    itemTitle: "City Tour",
  },
  {
    id: 4,
    itemTitle: "Desert Safari",
  },
  {
    id: 5,
    itemTitle: "Forest Retreat",
  },
  {
    id: 6,
    itemTitle: "Island Hopping",
  },
  {
    id: 7,
    itemTitle: "Cultural Expedition",
  },
  {
    id: 8,
    itemTitle: "Cruise Journey",
  },
  {
    id: 9,
    itemTitle: "Skiing Trip",
  },
  {
    id: 10,
    itemTitle: "Historical Tour",
  },
];

export const AmestCityBreakCards: AmestBreakCardType[] = [
  {
    id: 1,
    itemImage: AmestHotel1,
    itemTitle: "Amsterdam Canal Cruise",
    itemSubTitle: "Explore the beautiful canals",
    itemNights: "2 nights",
    itemPrice: "$250",
  },
  {
    id: 2,
    itemImage: AmestHotel2,
    itemTitle: "Van Gogh Museum Visit",
    itemSubTitle: "Immerse in art and history",
    itemNights: "3 nights",
    itemPrice: "$350",
  },
  {
    id: 3,
    itemImage: AmestHotel3,
    itemTitle: "Rijksmuseum Tour",
    itemSubTitle: "Discover Dutch masterpieces",
    itemNights: "4 nights",
    itemPrice: "$400",
  },
  {
    id: 4,
    itemImage: AmestHotel4,
    itemTitle: "Vondelpark Picnic",
    itemSubTitle: "Relax in the city's green heart",
    itemNights: "1 night",
    itemPrice: "$150",
  },
  {
    id: 5,
    itemImage: AmestHotel5,
    itemTitle: "Anne Frank House",
    itemSubTitle: "A poignant historical visit",
    itemNights: "2 nights",
    itemPrice: "$300",
  },
  {
    id: 6,
    itemImage: AmestHotel6,
    itemTitle: "Rijksmuseum Tour",
    itemSubTitle: "Discover Dutch masterpieces",
    itemNights: "4 nights",
    itemPrice: "$400",
  },
];

export const londonCityBreakCards: LondonBreakCardType[] = [
  {
    id: 1,
    itemImage: LondonHotel1,
    itemTitle: "London Eye Experience",
    itemSubTitle: "A panoramic view of the city",
    itemNights: "2 nights",
    itemPrice: "$300",
  },
  {
    id: 2,
    itemImage: LondonHotel2,
    itemTitle: "Tower of London Tour",
    itemSubTitle: "A journey through history",
    itemNights: "3 nights",
    itemPrice: "$400",
  },
  {
    id: 3,
    itemImage: LondonHotel3,
    itemTitle: "Buckingham Palace Visit",
    itemSubTitle: "Royal grandeur",
    itemNights: "1 night",
    itemPrice: "$250",
  },
  {
    id: 4,
    itemImage: LondonHotel4,
    itemTitle: "British Museum Exploration",
    itemSubTitle: "A treasure trove of artifacts",
    itemNights: "2 nights",
    itemPrice: "$350",
  },
  {
    id: 5,
    itemImage: LondonHotel5,
    itemTitle: "West End Theatre Show",
    itemSubTitle: "An evening of entertainment",
    itemNights: "1 night",
    itemPrice: "$200",
  },
  {
    id: 6,
    itemImage: LondonHotel6,
    itemTitle: "Hampton Court Palace",
    itemSubTitle: "A majestic retreat",
    itemNights: "2 nights",
    itemPrice: "$300",
  },
];

export const parisCityBreakCards: ParisBreakCardType[] = [
  {
    id: 1,
    itemImage: ParisHotel1,
    itemTitle: "Eiffel Tower Visit",
    itemSubTitle: "Iconic views of Paris",
    itemNights: "2 nights",
    itemPrice: "$300",
  },
  {
    id: 2,
    itemImage: ParisHotel2,
    itemTitle: "Louvre Museum Tour",
    itemSubTitle: "Explore world-famous art",
    itemNights: "3 nights",
    itemPrice: "$450",
  },
  {
    id: 3,
    itemImage: ParisHotel3,
    itemTitle: "Notre Dame Cathedral",
    itemSubTitle: "Gothic architectural marvel",
    itemNights: "1 night",
    itemPrice: "$200",
  },
  {
    id: 4,
    itemImage: ParisHotel4,
    itemTitle: "Seine River Cruise",
    itemSubTitle: "A romantic evening on the water",
    itemNights: "2 nights",
    itemPrice: "$350",
  },
  {
    id: 5,
    itemImage: ParisHotel5,
    itemTitle: "Montmartre Walking Tour",
    itemSubTitle: "Artistic charm and bohemian vibes",
    itemNights: "1 night",
    itemPrice: "$250",
  },
  {
    id: 6,
    itemImage: ParisHotel6,
    itemTitle: "Palace of Versailles",
    itemSubTitle: "A day of royal splendor",
    itemNights: "2 nights",
    itemPrice: "$400",
  },
];

export const europeCityBreakCards: EuropeBreakCardType[] = [
  {
    id: 1,
    itemImage: EuropeHotel1,
    itemTitle: "Rome Colosseum Tour",
    itemSubTitle: "Discover ancient history",
    itemNights: "3 nights",
    itemPrice: "$400",
  },
  {
    id: 2,
    itemImage: EuropeHotel2,
    itemTitle: "Barcelona Sagrada Familia",
    itemSubTitle: "Marvel at Gaudi's masterpiece",
    itemNights: "2 nights",
    itemPrice: "$350",
  },
  {
    id: 3,
    itemImage: EuropeHotel3,
    itemTitle: "Venice Gondola Ride",
    itemSubTitle: "Romantic canals",
    itemNights: "2 nights",
    itemPrice: "$300",
  },
  {
    id: 4,
    itemImage: EuropeHotel4,
    itemTitle: "Athens Acropolis Visit",
    itemSubTitle: "Ancient Greek ruins",
    itemNights: "3 nights",
    itemPrice: "$350",
  },
  {
    id: 5,
    itemImage: EuropeHotel5,
    itemTitle: "Berlin Brandenburg Gate",
    itemSubTitle: "Historical landmarks",
    itemNights: "2 nights",
    itemPrice: "$250",
  },
  {
    id: 6,
    itemImage: EuropeHotel6,
    itemTitle: "Prague Castle Tour",
    itemSubTitle: "Fairytale architecture",
    itemNights: "3 nights",
    itemPrice: "$300",
  },
];

export const asiaCityBreakCards: AsiaBreakCardType[] = [
  {
    id: 1,
    itemImage: AsiaHotel1,
    itemTitle: "Great Wall of China",
    itemSubTitle: "Walk along historic fortifications",
    itemNights: "3 nights",
    itemPrice: "$500",
  },
  {
    id: 2,
    itemImage: AsiaHotel2,
    itemTitle: "Tokyo Skytree Visit",
    itemSubTitle: "Stunning views of Tokyo",
    itemNights: "2 nights",
    itemPrice: "$450",
  },
  {
    id: 3,
    itemImage: AsiaHotel3,
    itemTitle: "Angkor Wat Tour",
    itemSubTitle: "Explore ancient temples",
    itemNights: "4 nights",
    itemPrice: "$400",
  },
  {
    id: 4,
    itemImage: AsiaHotel4,
    itemTitle: "Marina Bay Sands",
    itemSubTitle: "Luxurious stay in Singapore",
    itemNights: "3 nights",
    itemPrice: "$600",
  },
  {
    id: 5,
    itemImage: AsiaHotel5,
    itemTitle: "Taj Mahal Visit",
    itemSubTitle: "Witness the iconic mausoleum",
    itemNights: "2 nights",
    itemPrice: "$350",
  },
  {
    id: 6,
    itemImage: AsiaHotel6,
    itemTitle: "Mount Fuji Climb",
    itemSubTitle: "Adventure at Japan's highest peak",
    itemNights: "3 nights",
    itemPrice: "$500",
  },
];

export const africaCityBreakCards: AfricaBreakCardType[] = [
  {
    id: 1,
    itemImage: AfricaHotel1,
    itemTitle: "Table Mountain Hike",
    itemSubTitle: "Panoramic views of Cape Town",
    itemNights: "2 nights",
    itemPrice: "$300",
  },
  {
    id: 2,
    itemImage: AfricaHotel2,
    itemTitle: "Victoria Falls Visit",
    itemSubTitle: "Marvel at the majestic waterfall",
    itemNights: "3 nights",
    itemPrice: "$450",
  },
  {
    id: 3,
    itemImage: AfricaHotel3,
    itemTitle: "Sahara Desert Safari",
    itemSubTitle: "Experience the vast desert",
    itemNights: "4 nights",
    itemPrice: "$500",
  },
  {
    id: 4,
    itemImage: AfricaHotel4,
    itemTitle: "Marrakech City Tour",
    itemSubTitle: "Explore the vibrant markets",
    itemNights: "3 nights",
    itemPrice: "$350",
  },
  {
    id: 5,
    itemImage: AfricaHotel5,
    itemTitle: "Mount Kilimanjaro Climb",
    itemSubTitle: "Adventure to Africa's highest peak",
    itemNights: "5 nights",
    itemPrice: "$600",
  },
  {
    id: 6,
    itemImage: AfricaHotel6,
    itemTitle: "Pyramids of Giza",
    itemSubTitle: "Discover ancient wonders",
    itemNights: "2 nights",
    itemPrice: "$400",
  },
];
