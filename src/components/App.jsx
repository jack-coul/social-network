import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./header/Header";
import Messages from "./messages/Messages";
import HeaderForUser from "./profile/headerForUser/HeaderForUser";
import Profile from "./profile/Profile";
import Ribbon from "./ribbon/Ribbon";
import Saved from "./saved/Saved";
import SignIn from "./singIn&singUp/signIn/SignIn";
import SignUp from "./singIn&singUp/signUp/SignUp";
import { getUser } from "../redux/features/application";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <div>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/" element={<Profile />} />
            <Route path="/instafeed" element={<Ribbon />} />
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
    </>
  );
}

export default App;
