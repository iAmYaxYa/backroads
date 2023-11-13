import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    text: "saving money",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    text: "endless hiking",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    text: "amazing comfort",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    text: "Tibet Adventure",
    date: "August 26th, 2020",
    location:'China',
    timeAgo:'6 Days',
    cost:'From $2100',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    img: tour2,
    text: "Best Of Java",
    date: "October 1th, 2020",
    location:'Hong Kong',
    timeAgo:'8 Days',
    cost:'From $5000',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    img: tour3,
    text: "Explore Hong Kong",
    date: "September 15th, 2020",
    location:'Indonesia',
    timeAgo:'11 Days',
    cost:'From $1400',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 4,
    img: tour3,
    text: "Kenya Highlights",
    date: "December 5th, 2019",
    location:'Kenya',
    timeAgo:'20 Days',
    cost:'From $3900',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },  
  {
    id: 5,
    img: tour5,
    text: "Mombi tour",
    date: "August 26th, 2020",
    location:'India',
    timeAgo:'6 Days',
    cost:'From $2400',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 6,
    img: tour6,
    text: "California Show case",
    date: "October 1th, 2020",
    location:'United State',
    timeAgo:'8 Days',
    cost:'From $5000',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
