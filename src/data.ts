import {
  faBehance,
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import steveJobsImage from "./images/steve-jobs.png";
import customYourCarImage from "./images/custom-your-car.png";
import cssPerspectiveImage from "./images/css-perspective.png";
import wolfImage from "./images/wolf.png";
import sayHelloToWorldImage from "./images/say-hello-to-world.png";
import starrySkyImage from "./images/starry-sky.png";
import earthDayImage from "./images/earth-day.png";
import codeAnimatedImage from "./images/code-animated.png";
import cssFilterEffectsImage from "./images/css-filter-effects.png";
import FifteenPuzzleGameImage from "./images/fifteen-puzzle-game.png";
import MemoryGameJSImage from "./images/memory-game-js.png";
import ReactUIThermometerImage from "./images/react-ui-thermometer.png";
import PlottingPerfectYAxesImage from "./images/plotting-perfect-y-axes.png";
import LearningEnglishImage from "./images/learning-english.gif";
import ReactPortfolioBehanceImage from "./images/react-portfolio-behance.png";
import SimpleGridCssImage from "./images/simple-grid-css.png";
import MathematicsImage from "./images/mathematics.png";
import SidebarDirectiveAngularJSImage from "./images/sidebar-directive-angular-js.png";
import MarionetteImage from "./images/marionette.png";
import LettersAnimatedImage from "./images/letters-animated.png";
import DiaDosNamoradosImage from "./images/dia-dos-namorados.png";
import BeerJSRecifeImage from "./images/beer-js-recife.png";
import PiaoDaAtualizacaoImage from "./images/piao-da-atualizacao.png";
import NeonImage from "./images/neon.png";
import DeAnimatedImage from "./images/de-animated.png";
import DilmesIpsumImage from "./images/dilmes-ipsum.png";
import { TProfile, TProject, TSocialNetwork } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Projects: TProject[] = [
  {
    name: "Steve Jobs",
    description:
      "Pen created based on https://dribbble.com/shots/288104-Steve-Jobs, using the box-shadow tecnical to draw the image pixelated",
    date: "2017/09/01",
    url: "https://codepen.io/interaminense/full/vJbaGB",
    tags: ["Css3", "box-shadow", "codepen"],
    image: steveJobsImage,
  },
  {
    name: "Custom your car",
    description: "Pen created to show the power of CSS Filter",
    date: "2017/08/01",
    url: "https://codepen.io/interaminense/full/WEgJPp",
    tags: ["Css3", "codepen"],
    image: customYourCarImage,
  },
  {
    name: "Css perspective",
    description:
      "transform: perspective(400px) rotateX(20deg) rotateY(-15deg);",
    date: "2017/08/01",
    url: "https://codepen.io/interaminense/full/prNBbQ",
    tags: ["Css3", "perspective", "codepen"],
    image: cssPerspectiveImage,
  },
  {
    name: "Wolf",
    description:
      "Wolf is a pen based on https://dribbble.com/shots/1850390-Wolf and modified to receive animations in CSS. I hope you enjoy!!",
    date: "2016/04/01",
    url: "https://codepen.io/interaminense/full/oxEgpe",
    tags: ["Css3", "rotation", "codepen"],
    image: wolfImage,
  },
  {
    name: "Say hello to world!",
    description: "Pen created with data base Firebase. Say hello to world!",
    date: "2017/08/01",
    url: "https://codepen.io/interaminense/full/MvQVjQ",
    tags: ["Css3", "firebase", "angularJS", "codepen"],
    image: sayHelloToWorldImage,
  },
  {
    name: "Starry Sky",
    description: "My first pen. It is a classic for me ;)",
    date: "2015/12/01",
    url: "https://codepen.io/interaminense/full/QyGbXL",
    tags: ["Css3", "codepen", "classic"],
    image: starrySkyImage,
  },
  {
    name: "EarthDay",
    description: "Pen in honor of the Day of Planet Earth",
    date: "2016/04/01",
    url: "https://codepen.io/interaminense/full/aNjvKq",
    tags: ["Css3", "codepen"],
    image: earthDayImage,
  },
  {
    name: "Code Animated",
    date: "2017/06/01",
    url: "https://codepen.io/interaminense/full/VWOoXB",
    tags: ["Css3", "codepen"],
    image: codeAnimatedImage,
  },
  {
    name: "Css Filter Effects",
    description: "demo about filters in CSS3",
    date: "2016/06/01",
    url: "https://codepen.io/interaminense/full/NAXkoK",
    tags: ["Css3", "Css Filter", "codepen"],
    image: cssFilterEffectsImage,
  },
  {
    name: "Fifteen puzzle game",
    description: "Having fun with this classic game",
    date: "2019/06/01",
    url: "https://interaminense.dev/fifteen-puzzle-game/",
    tags: ["ReactJS", "typescript", "Github", "html5", "game"],
    image: FifteenPuzzleGameImage,
  },
  {
    name: "Memory game JS",
    description: "Play game with this classic Memory game",
    date: "2020/04/01",
    url: "https://interaminense.dev/memory-game-js/",
    tags: ["ReactJS", "Github", "html5", "game"],
    image: MemoryGameJSImage,
  },
  {
    name: "React UI Thermometer",
    description: "",
    date: "2017/06/01",
    url: "https://interaminense.dev/react-ui-thermometer/",
    tags: ["ReactJS", "Github", "React", "Component"],
    image: ReactUIThermometerImage,
  },
  {
    name: "Plotting Perfect Y axes",
    description:
      "the intent of this repository is to show how to plot axes dynamically and that is easy to understand for anyone reading a chart",
    date: "2018/08/01",
    url: "https://interaminense.dev/plotting-perfect-y-axes/",
    tags: ["ReactJS", "D3", "Github", "Chart"],
    image: PlottingPerfectYAxesImage,
  },
  {
    name: "Learning English 🇬🇧",
    description:
      "Useful links that will help me (and probably you) to learn English through the Internet.",
    date: "2017/03/01",
    url: "https://github.com/interaminense/learning-english",
    tags: ["Learning English", "Github"],
    image: LearningEnglishImage,
  },
  {
    name: "React Portfolio Behance",
    description:
      "This component lists all the projects you have registered in your Behance account, being able to customize your Portfolio too.",
    date: "2017/06/01",
    url: "https://interaminense.dev/react-portfolio-behance/",
    tags: ["ReactJS", "Behance", "Github"],
    image: ReactPortfolioBehanceImage,
  },
  {
    name: "Simple Grid Css",
    description:
      "Simple Grid Css is a responsive grid system based on flexbox css",
    date: "2017/11/01",
    url: "http://github.com/interaminense/simple-grid-css",
    tags: ["Css", "Grid", "Github"],
    image: SimpleGridCssImage,
  },
  {
    name: "Mathematics",
    description:
      "This mini game was created in order to strengthen the mind of those who practice mathematical operations. It's simple, play and try to beat your opponent's record",
    date: "2015/11/01",
    url: "https://interaminense.dev/mathematics/",
    tags: ["AngularJS", "Mathematics", "html5", "game", "firebase", "Github"],
    image: MathematicsImage,
  },
  {
    name: "Sidebar Directive AngularJS",
    description:
      "Directive created to give agility in the construction of a simple sidebar",
    date: "2016/12/01",
    url: "https://interaminense.dev/sidebar-directive-angular/",
    tags: ["AngularJS", "Sidebar", "Github"],
    image: SidebarDirectiveAngularJSImage,
  },
  {
    name: "Marionette",
    description: "Prototype to create a marionette",
    date: "2016/05/01",
    url: "https://github.com/interaminense/marionette-css",
    tags: ["Marionette", "Jquery", "Github"],
    image: MarionetteImage,
  },
  {
    name: "Letters animated",
    description: "short and lively sentences with css3",
    date: "2015/12/01",
    url: "https://interaminense.dev/letters-animated/",
    tags: ["Material Design", "Css Animated", "Github"],
    image: LettersAnimatedImage,
  },
  {
    name: "Dia dos Namorados",
    description: "Pen em homenagem ao dia 12 de Junho, Dia dos Namorados",
    date: "2017/06/01",
    url: "https://codepen.io/interaminense/full/WOxoyN/",
    tags: ["Css", "Javascript", "Css3", "Codepen"],
    image: DiaDosNamoradosImage,
  },
  {
    name: "BEERJS RECIFE",
    description: "I am onwer for the visual and front-end creation of the page",
    date: "2017/03/01",
    url: "https://beerjs.github.io/recife/",
    tags: ["MaterializeCss", "AngularJS", "Canvas", "Github"],
    image: BeerJSRecifeImage,
  },
  {
    name: "PIÃO DA ATUALIZAÇÃO",
    description: "Pião criado apenas com Css3",
    date: "2017/03/01",
    url: "https://alexpessoajr.github.io/piao-da-atualizacao/",
    tags: ["Css3", "Github"],
    image: PiaoDaAtualizacaoImage,
  },
  {
    name: "NEON",
    description:
      "eon example using only CSS3 and AngularJS to change the text that appears with the animation. I hope you enjoy!",
    date: "2016/04/01",
    url: "https://codepen.io/interaminense/full/LNWPgd/",
    tags: ["AngularJS", "Css3", "Codepen"],
    image: NeonImage,
  },
  {
    name: "DeAnimated",
    description: "A jQuery lightweight plugin for Animation",
    date: "2016/01/01",
    url: "http://thiagoh.github.io/de-animate/",
    tags: ["MaterializeCss", "Javascript", "Css", "Animate.css", "Github"],
    image: DeAnimatedImage,
  },
  {
    name: "DilmesIpsum",
    description:
      "An extension for Sublime Text 2 and 3! It allows you to insert Dilmes Ipsum in the editor via menu items or keyboard shortcuts. It uses some popular phrases from Brazilian President Dilma Rousseff",
    date: "2015/12/01",
    url: "http://thiagoh.github.io/sublime-dilmes-ipsum/",
    tags: ["Material Design", "Javascript", "Css", "Github"],
    image: DilmesIpsumImage,
  },
];

export const Profile: TProfile = {
  name: "Adriano Interaminense",
  description: (age, experienceTime) =>
    `Hi, nice to see you! I am ${age} years old and have been working in the web development for ${experienceTime} years. I currently work at Liferay as a Frontend Engineer and I love what I do!`,
  image: (thumbnailSize) =>
    `https://avatars2.githubusercontent.com/u/12699849?s=${thumbnailSize}&u=813da44f9c0ec4a88aa0be8ce52f35bc0b123a74&v=4`,
  birthYear: 1989,
  startWoring: 2009,
};

export const SocialNetwork: TSocialNetwork[] = [
  {
    icon: faGithub as IconProp,
    url: "http://github.com/interaminense",
  },
  {
    icon: faCodepen as IconProp,
    url: "http://codepen.io/interaminense",
  },
  {
    icon: faBehance as IconProp,
    url: "http://behance.net/imcreator",
  },
  {
    icon: faMedium as IconProp,
    url: "https://medium.com/@interaminense",
  },
  {
    icon: faLinkedin as IconProp,
    url: "https://linkedin.com/in/adriano-interaminense-405a90b3/",
  },
  {
    icon: faInstagram as IconProp,
    url: "https://instagram.com/adriinteraminense/",
  },
  {
    icon: faTwitter as IconProp,
    url: "http://twitter.com/adinteraminense",
  },
];
