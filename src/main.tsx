import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import SavedPokemon from "./routes/SavedPokemon";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="home" element={<Nested Ele />} /> */}
        </Route>
        <Route path="savedpokemon" element={<SavedPokemon />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
