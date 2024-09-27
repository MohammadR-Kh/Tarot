import { Outlet} from "react-router-dom";
import Navbar from "../navbar/navbar"

const Main = () => {

  return(
    <div className="main">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;