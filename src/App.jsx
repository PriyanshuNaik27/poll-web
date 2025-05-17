import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import { useEffect, useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
  
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          <AppRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </main>
       
      </div>
    
  );
}

export default App;
