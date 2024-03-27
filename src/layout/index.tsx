import { Outlet } from "react-router-dom";
import NavBar from "../components/_aesthetics/NavBar";
import { data } from "../data/data";

const Landing = () => {
  return (
    <div>
      <NavBar
        className="mx-auto flex max-w-screen-xl justify-between"
        NavBarItems={data.navItems}
      />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Landing;
