import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Programs from "./components/Programs";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <Navbar/>
      <Header/>
      <Programs/>
      <ContactForm/>
    </div>
  );
}

export default App;
