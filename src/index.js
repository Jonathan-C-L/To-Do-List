import "./styles.css";
import { Sidebar } from "./components/sidebar.js";
import { Header } from "./components/header.js";
import { Content } from "./components/content.js";
//  checks node environment
 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

Sidebar();
Header();
Content();