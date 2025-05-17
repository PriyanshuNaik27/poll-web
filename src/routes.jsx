import { Routes, Route, Navigate } from "react-router-dom";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";
import HomePage from "./pages/HomePage";
import LoadingScreen from "./components/LoadingPage";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const AppRoutes = () => {
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (location.pathname === '/' && !sessionStorage.getItem('hasVisited')) {
      setShowLoading(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePollPage />} />
      <Route path="/poll/:id" element={<PollPage />} />
    </Routes>
  );
};

export default AppRoutes;
// This code defines the routes for a React application using React Router.