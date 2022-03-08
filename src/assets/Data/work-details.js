import reg1 from "../images/yohello/reg_page1.png";
import reg2 from "../images/alley-bewitched/register_page.png";
import mlpage from "../images/ml/ml_page.png";
import { end } from "../../components/images";
const ThreeDDetails = [
  {
    src: "https://cdna.artstation.com/p/assets/images/images/028/046/192/large/manoj-singh-0001-1.jpg?1593345839",
    title: "The Lighthouse",
    text: "An attempt at recreating a painting in 3D.",
  },
  {
    src: "https://cdnb.artstation.com/p/assets/images/images/027/928/677/large/manoj-singh-5yw4v43ei1651.jpg?1592984978",
    title: "The Bus Stop",
    text: "The bus stop from the brilliant german TV series 'Dark'.",
  },
  {
    src: "https://cdna.artstation.com/p/assets/images/images/018/985/718/large/manoj-singh-1.jpg?1561514904",
    title: "My Hostel Room",
    text: "A fully CG stylized render of my hostel room.",
  },
  {
    src: end,
    title: "You've reached the end.",
    text: false,
  },
];

const ProgrammingDetails = [
  {
    src: reg1,
    title: "YoHello!",
    text: "YoHello! is a social networking website built with php,javascript and MySQL.",
  },
  {
    src: reg2,
    title: "Alley Bewitched",
    text: "Alley Bewitched is a fully functional eCommerce website built with MERN stack.",
  },
  {
    src: mlpage,
    title: "APUML",
    text: "APUML is a machine learning project on accident analysis.",
  },
  {
    src: end,
    title: "You've reached the end.",
    text: false,
  },
];

export default ThreeDDetails;
export { ProgrammingDetails };
