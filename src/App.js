import React from "react";
import Header from "./components/Header.jsx";
import CreateArea from "./components/CreateArea.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CreateArea />
      <Footer />
    </div>
  );
}
