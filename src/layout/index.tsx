import { Outlet } from "react-router-dom";
// import NavBar from "../components/_aesthetics/NavBar";
import NavbarResponsive from "../components/_elements/NavbarResponsive";

const Landing = () => {
  return (
    <div>
      <NavbarResponsive />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Landing;
