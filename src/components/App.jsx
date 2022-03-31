
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Messages from "./messages/Messages";
import Profile from "./profile/Profile";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
      <Routes>
        <Route path="/messages" element={<Messages />} />
        <Route path="/" element={<Profile />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
