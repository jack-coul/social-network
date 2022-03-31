import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Messages from "./messages/Messages";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
      <Routes>
        <Route path="/messages" element={<Messages />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
