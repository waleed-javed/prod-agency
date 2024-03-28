import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data";
import { RoutesProvider } from "../../utilities/constants";
import { cn } from "../../utilities/utility";
import CallToActionButton from "./CallToActionButton";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarMenu";

const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const navItems = data.navItems;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-black shadow-purple-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between ">
          <div className="flex-shrink-0 ">
            <Logo />
          </div>
          <div className="flex  sm:hidden">
            <BurgerBtn isOpen={isOpen} toggleNavbar={toggleNavbar} />
          </div>
          <div className="hidden  sm:flex">
            <LargeScreenMenu active={active} setActive={setActive} />
          </div>
          <div className="hidden  sm:flex">
            <CallToActionButton btnText={"Book Call"} variant={"small"} />
          </div>
        </div>
      </div>

      {isOpen && <SmallScreenMenuDropDown navItems={navItems} />}
    </div>
  );
};

export default NavbarResponsive;

const Logo = () => {
  return (
    <Link
      to={RoutesProvider.Home}
      className="poppins-semibold text-md font-bold md:text-xl "
    >
      <div
        className={`relative flex h-6 items-center justify-center rounded-full bg-purple-500 px-2 capitalize md:h-10 md:px-4 dark:bg-purple-500`}
      >
        <div>
          <p className="poppins-semibold cursor-pointer text-black hover:scale-110 hover:duration-200 dark:text-white">
            Ghamiz
          </p>
        </div>
      </div>
    </Link>
  );
};

const BurgerBtn = ({ isOpen, toggleNavbar }) => {
  return (
    <button
      onClick={toggleNavbar}
      className=" hover:text-purple-500 focus:text-purple-300 focus:outline-none"
    >
      <svg
        className="h-6 w-6 transform transition duration-150"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );
};

const LargeScreenMenu = ({ active, setActive }) => {
  return (
    <div className={cn("inset-x-0 z-50 mx-auto flex max-w-3xl")}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/app-dev">App Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="grid grid-cols-2 gap-10 p-4 text-sm">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

const SmallScreenMenuDropDown = ({ navItems }) => {
  return (
    <div className={"sm:hidden"}>
      <div className={"space-y-2 p-2"}>
        {navItems.map((navItem, idx: number) => (
          <Link
            to={navItem.link}
            key={`link=${idx}`}
            className={"flex items-center space-x-1"}
          >
            <span className="poppins-medium text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
