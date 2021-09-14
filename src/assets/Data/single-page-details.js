import {
  reg1,
  mlpage,
  mlpage2,
  mlpage3,
  mlpage4,
  yohello1,
  yohello2,
  yohello3,
  yohello4,
  clay1,
  clay2,
  light2,
} from "../../components/images";

export const projectDetails = {
  "Alley Bewitched": {
    images: [],
    description:
      "Alley Bewitched is an eCommerce website built with MERN stack.",
    brief:
      "Alley Bewitched is an eCommerce website built with MERN stack. It has the necessary functions like user login/registration, searching products, adding products to cart, ordering cart items, a sandbox payment system(using PayPal API). It also has admin functionalities like adding/deleting/editing products, delivery confirmation etc.",
    techs: [
      "HTML5",
      "CSS (with SASS)",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "React",
      "Redux",
      "MongoDB",
    ],
    resources: {
      hosted: "https://alleybewitched.herokuapp.com",
      youtubelink: "https://www.youtube.com/embed/skpamEY9m-0",
    },
    completionDate: "14th June 2021",
  },
  "YoHello!": {
    images: [reg1, yohello1, yohello2, yohello3, yohello4],
    description:
      "YoHello! is a social media website built with php and javascript.",
    brief:
      "YoHello! is a social networking website where you can post pictures, your thoughts, share youtube links, make friends, message friends etc.",
    techs: ["HTML5", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL"],
    resources: {
      hosted: "http://yohello.atwebpages.com",
      github: "https://github.com/manojmsr2000/YoHello",
    },
    completionDate: "7th June 2021",
  },
  APUML: {
    images: [mlpage, mlpage2, mlpage3, mlpage4],
    description:
      "APUML is a web-app that uses machine learning to predict chances of having an accident.",
    brief:
      "APUML is a project I worked on as a mini-project for my college credit. It classifies the severity of an accident as slight, moderate or severe based on the data recieved from the user and the backend.",
    techs: ["HTML5", "CSS", "Javascript", "Bootstrap", "Python", "Flask"],
    resources: {
      github: "https://github.com/manojmsr2000/ML-Accident-Analysis-Project",
    },
    completionDate: "14th May 2021",
  },
  "The Lighthouse": {
    images: [
      "https://cdna.artstation.com/p/assets/images/images/028/046/192/large/manoj-singh-0001-1.jpg?1593345839",
      light2,
      clay2,
    ],
    description: "An attempt at recreating a painting in 3D.",
    brief:
      "I made this at a time when I needed a distraction from life. So, I picked a random lighthouse painting online and made this. Working on the waves was the most fun part :)",
    sofs: ["Blender", "Adobe Photoshop(for color correction)"],
    resources: false,
    completionDate: "24th April 2020",
  },
  "The Bus Stop": {
    images: [
      "https://cdnb.artstation.com/p/assets/images/images/027/928/677/large/manoj-singh-5yw4v43ei1651.jpg?1592984978",
      clay1,
    ],
    description:
      "It's the bus stop from the brilliant german TV series 'Dark'.",
    brief:
      "I adore the TV show 'Dark' and wanted to make something out of that. I learned Substance Painter to make the bus stop and the electric box(on the right) dirty and rusty. They're practically not even noticeable but attention to detail solves all your life's problems, so I had to. The trees and the grass took the longest to get right.\n\nThis is the most detailed render I've made so far.",
    sofs: ["Blender", "Substance Painter", "Adobe Photoshop"],
    resources: false,
    completionDate: "19th June 2020",
  },
  "My Hostel Room": {
    images: [
      "https://cdna.artstation.com/p/assets/images/images/018/985/718/large/manoj-singh-1.jpg?1561514904",
    ],
    description: "A fully CG stylized render of my hostel room.",
    brief:
      "I made this during the summer vacation probably because I missed being there. This was the first render that I was proud of as I was trying to achieve realism.",
    sofs: ["Blender", "Adobe Photoshop(for color correction)"],
    resources: false,
    completionDate: "20th June 2019",
  },
};
