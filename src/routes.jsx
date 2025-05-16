import { Routes, Route, Navigate } from "react-router-dom";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/create" />} />
      <Route path="/create" element={<CreatePollPage />} />
      <Route path="/poll/:id" element={<PollPage />} />
    </Routes>
  );
};

export default AppRoutes;
// This code defines the routes for a React application using React Router.