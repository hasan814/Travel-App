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
