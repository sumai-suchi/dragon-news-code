import { format } from "date-fns";
import logoImg from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center ">
      <img className="w-[400px]" src={logoImg} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-semibold text-base-300">
        {format(new Date(), "EEEE,MMMM MM,yyyy")}
      </p>
    </div>
  );
};

export default Header;
