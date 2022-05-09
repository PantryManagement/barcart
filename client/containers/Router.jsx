import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import ShoppingListContainer from "./ShoppingListContainer.jsx";
import CocktailContainer from "./CocktailContainer.jsx";
import UserBarContainer from "./UserBarContainer.jsx";

/**
 * Renders the Navbar which has links to all below Routes.
 * Otherwise, routes and navigates users to the three main pages and their stateful containers
 */
export default function Router() {
  return (
    <div className="router">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="listPlaceholder" element={<ShoppingListContainer />} />
          <Route path="cocktails" element={<CocktailContainer />} />
          <Route path="userbar" element={<UserBarContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
