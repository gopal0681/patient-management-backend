import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ListPatients from "./Components/ListPatients";
import AddPatient from "./Components/AddPatient";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid mt-4">
        
        <div className="app">
          <Header />

          <main className="content">
            <Routes>
              <Route path="/" element={<ListPatients />} />
              <Route path="/add" element={<AddPatient />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;