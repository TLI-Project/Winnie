import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";
import Cart from './../index.js';

it("renders without crashing", () => {
  const div = document.createElement("div");
  <BrowserRouter>
    ReactDOM.render(<Cart />, div)
  </BrowserRouter>
})