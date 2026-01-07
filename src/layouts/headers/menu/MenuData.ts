import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/home-1.jpg";
import demo_img_2 from "@/assets/img/menu/home-2.jpg";
import demo_img_3 from "@/assets/img/menu/home-3.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: StaticImageData | any;
    mobile_menu?: boolean;
  }[];
}[]
// menu data 
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    img_dropdown: true,
    sub_menus: [
      { mobile_menu: false, link: "/", title: "Full Stack", demo_img: demo_img_2, },
      { mobile_menu: false, link: "/home", title: "Blockchain", demo_img: demo_img_1, },
      // { mobile_menu: false, link: "/home-3", title: "Home 03", demo_img: demo_img_3, },

      { mobile_menu: true, link: "/", title: "Full Stack"},
      { mobile_menu: true, link: "/home", title: "Blockchain"},
      // { mobile_menu: true, link: "/home-3", title: "Web Developer"},
    ],
  },
  {
    id: 2,
    title: "Services",
    link: "#services",
    has_dropdown: true,
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Service Details" },
    ],
  },

  {
    id: 3,
    title: "About me",
    link: "#about",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Projects",
    link: "#projects",
    has_dropdown: true,
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
    ],
  },
  {
    id: 5,
    title: "Skills",
    link: "#skills",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog List" },
      { link: "/blog-sidebar", title: "Blog Sidebar" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
