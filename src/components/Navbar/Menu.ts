interface DataTypes {
  id: number;
  link: string;
  title: string;
  initialY: number;
  initialOpacity: number;
  animateY: number;
  animateOpacity: number;
  transitionDuration: number;
  transitionDelay: number;
}

const navLinks: DataTypes[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.1,
  },
  {
    id: 2,
    link: "/projects",
    title: "Projects",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.2,
  },
  {
    id: 3,
    link: "/tutorials",
    title: "Tutorials",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.3,
  },
  {
    id: 4,
    link: "/blogs",
    title: "Blogs",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.4,
  },
  {
    id: 5,
    link: "/contact",
    title: "Contact",
    initialY: -10,
    initialOpacity: 0,
    animateY: 0,
    animateOpacity: 1,
    transitionDuration: 0.1,
    transitionDelay: 0.5,
  },
];

export default navLinks;