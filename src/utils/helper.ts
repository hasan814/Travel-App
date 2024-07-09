import { HolidayItem, RecentHolidayItem } from "src/types";

import LondonImg from "../../public/Images/holiday-london.jpg";
import DubaiImg from "../../public/Images/holiday-dubai.jpg";
import ParisImg from "../../public/Images/holiday-paris.jpg";

import SpainImg from "../../public/Images/spain.jpg";
import PortugalImg from "../../public/Images/portugal.jpg";
import GreeceImg from "../../public/Images/greece.jpg";
import MaldivesImg from "../../public/Images/maldives.jpg";

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
