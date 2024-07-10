import {
  AmestBreakCardType,
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
