import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Messages from "./messages/Messages";
import HeaderForUser from "./profile/headerForUser/HeaderForUser";
import Profile from "./profile/Profile";
import Saved from "./saved/Saved";
import SignIn from "./singIn&singUp/signIn/SignIn";
import EditProfile from "./EditProfile/EditProfile";
import Ribbons from "./ribbon/Ribbons";
import Posts from "./profile/posts/Posts/Posts";
import User from "./user/User";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { getUser } from "../redux/actions/user";
import SignUp from "./singIn&singUp/signUp/SignUp";
import { useAppDispatch } from "../hooks/useTypesDispatch";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { token } = useTypesSelector((state) => state.application);
  const { block } = useTypesSelector((state) => state.user);

  if (token) {
    if (block) {
      return (
        <div>
          <div>
            <Header />
            <div className="App">
              <Routes>
                <Route path="/messages" element={<Messages />} />
                <Route path="/conversation/:id" element={<Messages />} />
                <Route path="/" element={<Profile />} />
                <Route path="/instafeed" element={<Ribbons />} />
                <Route path="/signin" element={<Navigate to="/" replace />} />
                <Route path="/editProfile" element={<EditProfile />} />
                <Route
                  path="/one/user/:id"
                  element={<Navigate to="/" replace />}
                />
                <Route
                  path="/saves"
                  element={
                    <>
                      <HeaderForUser /> <Saved />
                    </>
                  }
                />
                <Route
                  path="/public"
                  element={
                    <>
                      <HeaderForUser /> <Posts />
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Header />
          <div className="App">
            <Routes>
              <Route path="/messages" element={<Messages />} />
              <Route path="/conversation/:id" element={<Messages />} />
              <Route path="/" element={<Profile />} />
              <Route path="/instafeed" element={<Ribbons />} />
              <Route path="/signin" element={<Navigate to="/" replace />} />
              <Route path="/editProfile" element={<EditProfile />} />
              <Route path="/one/user/:id" element={<User />} />
              <Route
                path="/saves"
                element={
                  <>
                    <HeaderForUser /> <Saved />
                  </>
                }
              />
              <Route
                path="/public"
                element={
                  <>
                    <HeaderForUser /> <Posts />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        {/* <Header /> */}
        <div className="secondApp">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Navigate to="/signin" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
