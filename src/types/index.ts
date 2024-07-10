import { StaticImageData } from "next/image";

export interface ErrorComponentProps {
  message?: string;
}

export interface GreenBtnProps {
  link: string;
  btnTitle: string;
}

export interface LastHolidayCardProps {
  itemImage: string | StaticImageData;
  itemTitle: string;
  itemDescription: string;
}

export interface HolidayItem {
  id: number;
  itemImage: string | StaticImageData;
  itemTitle: string;
  itemDescription: string;
}

export interface RecommendedSectionProps {
  itemRecommendedTitle: string;
}
export interface HolidayPlanSectionProps {
  itemHolidayPlanTitle: string;
}

export interface RecentHolidayCardProps {
  itemTitle: string;
  itemImage: string | StaticImageData;
  itemDescription: string;
  itemNights: string;
  itemPrice: string;
}

export interface RecentHolidayItem {
  id: number;
  itemImage: string | StaticImageData;
  itemTitle: string;
  itemDescription: string;
  itemNights: string;
  itemPrice: string;
}

export interface HolidayHeroProps {
  secondHeroTitle: string;
}

export interface EveryoneHolidaysCardProps {
  itemTitle: string;
  itemSubTitle: string;
  itemPrice: string;
}

export interface HolidayEveryoneItem {
  id: number;
  itemTitle: string;
  itemSubTitle: string;
  itemPrice: string;
}

export interface NextHolidayCardtype {
  itemTitle: string;
}

export interface NextHolidayDataType {
  id: number;
  itemTitle: string;
}

export interface cityBreakCardType {
  itemPrice: string;
  itemTitle: string;
  itemNights: string;
  itemSubTitle: string;
  itemImage: string | StaticImageData;
}

export interface AmestBreakCardType {
  id: number;
  itemImage: string | StaticImageData;
  itemTitle: string;
  itemSubTitle: string;
  itemNights: string;
  itemPrice: string;
}

export interface LondonBreakCardType {
  id: number;
  itemImage: string | StaticImageData;
  itemTitle: string;
  itemSubTitle: string;
  itemNights: string;
  itemPrice: string;
}

export interface ParisBreakCardType {
  id: number;
  itemImage: string | StaticImageData;
  itemTitle: string;
  itemSubTitle: string;
  itemNights: string;
  itemPrice: string;
}
