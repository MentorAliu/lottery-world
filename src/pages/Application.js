import { Route, Routes, Navigate } from "react-router-dom";
import { Home, SessionPlayers, Stats, Winners } from "./";
export const Application = () => {
  // (e.g. Home,SessionPlayers, Stats, Winners) also this is where use Routes and use Route for each of the mentioned Views from earlier
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/session-players" element={<SessionPlayers />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
};
