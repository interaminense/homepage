import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type TProject = {
  name: string;
  date: string;
  description?: string;
  image: string;
  url: string;
  tags?: string[];
};

export type TProfile = {
  name: string;
  description: (age: number, experienceTime: number) => string;
  image: (thumbnailSize: number) => string;
  birthYear: number;
  startWoring: number;
};

export type TSocialNetwork = {
  icon: FontAwesomeIconProps["icon"];
  url: string;
};

export type TTheme = "light" | "dark";

export type TLayoutSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
