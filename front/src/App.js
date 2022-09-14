import { useSelector } from "react-redux";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import SingleNews from "./pages/SingleNews";
import Login from "./pages/Login.js";

function App() {
const token =  useSelector(state => state.auth.token)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news/:id" element={!token ? <Navigate to="/login" replace /> :<SingleNews/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
