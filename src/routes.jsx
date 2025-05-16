import { Routes, Route, Navigate } from "react-router-dom";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";
import HomePage from "./pages/HomePage";


const AppRoutes = () => {
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