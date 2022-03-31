import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Messages from "./messages/Messages";
import HeaderForUser from "./profile/headerForUser/HeaderForUser";
import Profile from "./profile/Profile";
import Saved from "./saved/Saved";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/" element={<Profile />} />
          <Route
            path="/saves"
            element={
              <>
                <HeaderForUser /> <Saved />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
