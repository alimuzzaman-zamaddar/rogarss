import { CalenderSvg } from './../Components/SvgContainer/SvgContainer';
import { StaticImageData } from "next/image";

export interface Demo {
  id: number;
  name: string;
  destination: string;
  duration: number;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface signupBody {
  fullname: string;
  email: string;
}

export interface signupPassBody {
  password: string;
  conformpassword: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  is_premium: boolean;
  avatar: string;
  agree_to_terms: boolean;
}

export interface PopupResponse {
  id: number;
  label: string;
  href?: string;
}

export type DynamicCardSectionProps = {
  id?: string;
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  sectionSubTitle?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  titleClassName: string;
  descriptionClassName: string;
  buttonClassName?: string;
  index: number;
  isBox?: boolean;
  isBtn?: boolean;
};

export type DynamicCardSectionAboutProps = {
  id?: string;
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  sectionSubTitle?: string;
  title: string;
  description: string[];
  buttonText?: string;
  buttonLink?: string;
  titleClassName: string;
  descriptionClassName: string;
  buttonClassName?: string;
  index: number;
  isBox?: boolean;
  isBtn?: boolean;
};

export type DynamicImageProps = {
  img: string | StaticImageData;
  isBox?: boolean;
  cardData?: Record<string, any>; // safer than `object`
};

export type TreatmentTechnologySectionProps = {
  title: string;
  title_des: string;
  buttonText: string;
  buttonClassName?: string;
  buttonLink: string;
};

export interface laserBoxProps {
  title: string;
  sub_title: string;
  description: string;
  buttonText?: string;
  buttonClassName?: string;
}
