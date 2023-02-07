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
  brief: string;
  description: string;
  image: (thumbnailSize: number) => string;
  skills: string[];
};

export type TSocialNetwork = {
  icon: FontAwesomeIconProps["icon"];
  url: string;
};
