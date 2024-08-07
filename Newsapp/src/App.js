import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {

  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')
  const [Loggedin, setLoggedin] = useState(false);

  return (

    <Router>
      <Navbar setCategory={setCategory} setCountry={setCountry} Loggedin={Loggedin} />
      <Routes>
        <Route path="/" element={<Home category={category} country={country} />} />
        <Route path="/login" element={<Login Logged={setLoggedin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>

  );
}

export default App;
