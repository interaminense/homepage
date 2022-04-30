import { TProject, TTheme } from "../types";
import { months } from "./constants";

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const removeRepeatedItems = (arr: string[]): string[] =>
  arr.filter((item, i) => arr.indexOf(item) === i);

export const getTheme = (): TTheme => {
  const hour = new Date().getHours();

  return hour > 5 && hour < 17 ? "light" : "dark";
};

export const getAllTags = (projects: TProject[]): string[] => {
  const arrFlat = projects
    .map((project) => project.tags?.map(capitalizeFirstLetter) ?? [])
    .sort()
    .flat();

  return removeRepeatedItems(arrFlat);
};

export const formatProjects = (projects: TProject[]): TProject[] => {
  const formattedProjects = projects
    .map((project) => {
      const date = new Date(project.date);

      return {
        ...project,
        date: `${months[date.getMonth()]}, ${date.getFullYear()}`,
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return dateB - dateA;
    });

  return formattedProjects;
};
