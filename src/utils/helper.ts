import { HolidayItem } from "src/types";

import LondonImg from "../../public/Images/holiday-london.jpg";
import DubaiImg from "../../public/Images/holiday-dubai.jpg";
import ParisImg from "../../public/Images/holiday-paris.jpg";

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
