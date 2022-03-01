import { TProject, TTheme } from "../types";

export const getTheme = (): TTheme => {
  const hour = new Date().getHours();

  return hour > 5 && hour < 17 ? "light" : "dark";
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
