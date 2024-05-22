import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div>
          <Navbar />
          <Outlet/>
          <Footer/>
    </div>
  );
}

export default MainLayout;
