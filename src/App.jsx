import { Route, Routes } from "react-router-dom";
import Protected from "./utils/Protected";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Index from "./pages/Index";
import { useState } from "react";

function App() {
  const [isLogged, setLogged] = useState(false);
  return (
    <>
      <Routes>
        {/* unprotected routes */}
        <Route index element={<Index setLogged={setLogged} />} />
        {/* protected routes */}
        <Route element={<Protected isLogged={isLogged} />}>
          <Route path='/home' element={<Home setLogged={setLogged}/>} />
          <Route path='/home' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
