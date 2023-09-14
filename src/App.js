import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Setting from "./pages/setting";
import FollowUp from "./pages/followup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesSummar from "./pages/notes-summary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/log" element={<Login />}></Route>
          <Route path="/reg" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/notes-summary" element={<NotesSummar />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/followup" element={<FollowUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
