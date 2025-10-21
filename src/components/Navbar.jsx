import { NavLink } from "react-router";
import loginImg from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-5  items-center">
      <div></div>
      <div className="flex gap-3 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/Career"}>Career</NavLink>
      </div>
      <div className="flex items-center  gap-2">
        <img className="rounded-full " src={loginImg} alt="" />
        <button className="  text-white  bg-primary px-6 py-2 ">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
