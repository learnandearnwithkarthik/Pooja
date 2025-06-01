import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col bg-secondary text-fill">
      <hr />

      {/* Main Footer Section */}
      <div className="w-full my-4 flex flex-col lg:flex-row items-start justify-between gap-10 lg:px-[150px] px-5 py-10">
        {/* Brand Info */}
        <div className="flex flex-col">
          <p className="text-3xl sm:text-4xl font-semibold">
            Bake & <span className="text-primary">Brew</span>
          </p>
          <span className="font-Source text-base font-light mt-3 max-w-sm">
            Welcome to Bake & Brew, where we create delightful experiences with every cup of coffee and every dessert.
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 uppercase text-base tracking-wider">
          <span className="cursor-pointer hover:text-primary" onClick={() => navigate("/")}>Home</span>
          <span className="cursor-pointer hover:text-primary" onClick={() => navigate("/reservation")}>Reservations</span>
          <span className="cursor-pointer hover:text-primary" onClick={() => navigate("/order")}>Order</span>
          <span className="cursor-pointer hover:text-primary" onClick={() => navigate("/cart")}>Cart</span>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <span className="font-Source text-base tracking-wider">Social Media</span>
          <div className="flex gap-3 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-primary" />
            <FaInstagram className="cursor-pointer hover:text-primary" />
            <FaSquareXTwitter className="cursor-pointer hover:text-primary" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-base tracking-wider">
          <span className="font-Source">bake&brew@gmail.com</span>
          <span className="font-Source">Address, Location, 123</span>
          <span className="font-Source">+91 9087654321</span>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="w-full py-4 border-t border-border flex items-center justify-center">
        <span className="font-Source text-sm text-fill font-light text-center px-4">
          © 2024 Bake & Brew. Developed by Gagan G.
        </span>
      </div>
    </div>
  );
};

export default Footer;
