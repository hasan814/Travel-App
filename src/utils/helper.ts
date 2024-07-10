import {
  HolidayEveryoneItem,
  HolidayItem,
  NextHolidayDataType,
  RecentHolidayItem,
} from "src/types";

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
