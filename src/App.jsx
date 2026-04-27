import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Layout from "./components/Layout";

import { ThemeProvider } from "./components/ThemeContext";

// Pages
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* Add future routes for Blog, weB&B, HiCafe, and Brands here */}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
