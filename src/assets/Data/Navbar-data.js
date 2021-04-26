import {
  faArtstation,
  faGithub,
  faHackerrank,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const HeaderLinks = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/pp",
    title: "Programming Projects",
  },
  {
    id: 3,
    link: "/threed",
    title: "3D Projects",
  },
  {
    id: 4,
    link: "/about",
    title: "About",
  },
];

const SocialLinks = [
  {
    id: 1,
    link: "https://www.instagram.com/mxn0j__smh/",
    icon: faInstagram,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/manoj-singh-69a637207/",
    icon: faLinkedin,
  },
  {
    id: 3,
    link: "https://www.hackerrank.com/manojsinghmsr201",
    icon: faHackerrank,
  },
  {
    id: 4,
    link: "https://www.artstation.com/manojsinghmsr",
    icon: faArtstation,
  },
  {
    id: 5,
    link: "https://github.com/manojmsr2000",
    icon: faGithub,
  },
];

export default HeaderLinks;
export { SocialLinks };
