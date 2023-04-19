import * as React from 'react';
import { theme } from '../../themes/Theme';
import { Link } from "react-router-dom";

const pages = [
  {text:'Home', url: "#" , id: 0},
  {text:'Shopping List', url: "ShoppingList", id: 1},
  {text:'Small Projects Page', url: "SmallProjectsPage", id: 2},
  {text:'Reading List', url: "ReadingList", id: 3},
  {text:'Contact Me', url: "ContactMe", id: 4}
];


const Nav = () => {

  return (
    <>Nav placeholder</>
  );
};
export default Nav;
