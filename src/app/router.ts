import { RouteObject } from "react-router-dom";
import  React  from "react";
import Contact from "./pages/Contact";
import About from "./About";
import HomePage from "./page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(HomePage),
  },
  {
    path: "/about",
    element: React.createElement(About),
  },
  {
    path: "/contact",
    element: React.createElement(Contact),
  },
];

export default routes;
