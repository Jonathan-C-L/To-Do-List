import "./styles.css";
import { Sidebar } from "./components/sidebar.js";

//  checks node environment
 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

Sidebar();