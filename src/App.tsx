import NavBar from "./components/NavBar";
import "./index.css";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
