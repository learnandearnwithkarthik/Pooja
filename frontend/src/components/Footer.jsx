import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col">
      <hr className="" />
      <div className="w-full h-[130px] mt-[70px] flex lg:flex-row flex-col items-start justify-between lg:gap-0 gap-10 lg:px-[210px] px-5">
        <div className="flex flex-col -mt-6">
          <p className="text-[50px] font-semibold ">
            Bake & <span className="text-primary">Brew</span>
          </p>
          <span className="font-Source text-base font-light text-secondary max-w-[310px] mt-3">
          Welcome to Bake & Brew, where we create delightful experiences with every cup of coffee and every dessert.
          </span>
          
          
        </div>
        <div className="flex flex-col gap-2 uppercase text-secondary font-Source text-base tracking-wider">
          
          <span className="cursor-pointer " onClick= {() => navigate("/")}>
            Home
          </span>
          <span className="cursor-pointer " onClick= {() => navigate("/reservation")}>
            Reservations
          </span>
          <span className="cursor-pointer " onClick= {() => navigate("/order")}>
            order
          </span>
          <span className="cursor-pointer " onClick= {() => navigate("/cart")}>
            cart
          </span>
          
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-Source text-base tracking-wider text-secondary">Social Media</span>
          <div className="flex text-text gap-3 text-2xl ">
          <FaFacebook className="cursor-pointer"/>
          <FaInstagram className="cursor-pointer"/>
          <FaSquareXTwitter className="cursor-pointer"/>
          </div>
          
        </div>
        <div className="flex flex-col gap-2">
          <span className=" font-Source text-base tracking-wider text-secondary">
            bake&brew@gmail.com
          </span>
          <span className="capitalize font-Source text-base tracking-wider text-secondary">
            address, location, 123
          </span>
          <span className=" font-Source text-base tracking-wider text-secondary">
            +91 9087654321
          </span>
        </div>
      </div>
      <div className="w-full h-[60px] mt-[100px] flex items-center justify-center border-t border-border">
        <span className="font-Source text-base text-secondary font-light">
          © 2024 Bake&Brew. Developed by{" Gagan G"}
          
        </span>
      </div>
    </div>
  );
};

export default Footer;
