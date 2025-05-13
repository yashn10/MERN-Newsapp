import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeProvider } from "./context/themeContext";

function App() {

  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')
  const [language, setLanguage] = useState('en')
  const [Loggedin, setLoggedin] = useState(false);

  return (

    <ThemeProvider>
      <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Router>
          <Navbar setCategory={setCategory} setCountry={setCountry} setLanguage={setLanguage} Loggedin={Loggedin} />
          <Routes>
            <Route path="/" element={<Home category={category} country={country} language={language} />} />
            <Route path="/login" element={<Login Logged={setLoggedin} />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
