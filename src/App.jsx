import React from "react";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import RecommendedBooks from "./components/RecommendedBooks";
import SearchBooks from "./components/SearchBooks";
import SideNavBar from "./components/SideNavBar";
import { BookProvider } from "./context/BookContext";
import "./index.css";

export default function App() {
  return (
    <BookProvider>
      <NavBar />
      <SearchBooks />
      <SideNavBar />
      <LandingPage />
      {/*take the button and make it's own component and maybe add a modal here as a child to button */}
      <RecommendedBooks />
    </BookProvider>
  );
}
