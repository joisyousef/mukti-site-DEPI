import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import OrthopedicCards from "./components/OrthopedicCards";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Contact from "./components/ContactUs";
const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <OrthopedicCards />
      <Partners />
      <Footer />
    </Router>
  );
};

export default App;
