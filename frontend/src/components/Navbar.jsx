import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiShoppingBasket } from 'react-icons/ci';
import { UserContext } from '../../context/UserContext';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const {cartItems,fetchCart,setCartItems} = useCart()

  // Fetch cart when user logs in or when component mounts
  useEffect(() => {
    if (user) {
      fetchCart();
    } 
  }, [user,]);

  const onLogout = () => {
    localStorage.clear();
    setUser(null);  // Clear user context after logout
    setCartItems([]); // Reset cart items
    navigate('/');  // Navigate to home page
    toast.success("Logout successful")
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-transparent border-b border-border lg:px-[150px] px-5 flex items-center justify-between h-[25px] text-sm">
        <span className="text-secondary font-Source">Tired? Let's have a cup of coffee.</span>
        <span className="text-secondary font-Source">Call us: +91 9087654321</span>
        <span className="text-secondary font-Source lg:block hidden">Our location: Bengaluru, India</span>
      </div>
      <div className="w-full flex items-center justify-between h-[65px] lg:px-[150px] px-5 border-b border-border">
        <div>
          <p onClick={() => navigate('/')} className="text-4xl font-semibold cursor-pointer">
            Bake & <span className="text-primary">Brew</span>
          </p>
        </div>
        {console.log(user)
        }
        

        <div className="flex items-center justify-center gap-4">
          <ul className="hidden sm:flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? 'text-primary' : 'text-secondary'} font-Source text-lg hover:text-primary cursor-pointer`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  `${isActive ? 'text-primary' : 'text-secondary'} font-Source text-lg hover:text-primary cursor-pointer`
                }
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  `${isActive ? 'text-primary' : 'text-secondary'} font-Source text-lg hover:text-primary cursor-pointer`
                }
              >
                Order
              </NavLink>
            </li>
            <li className="font-Source text-base text-secondary">|</li>
          </ul>

          {/* Cart with Badge */}
          <Link to="/cart" className="relative">
            <CiShoppingBasket className="text-4xl hover:text-[42px] hover:text-primary" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            
          </Link>

          {/* Login/Logout */}
          {user ? (
            <span onClick={onLogout} className="font-Source text-lg text-secondary hover:text-primary cursor-pointer">
              Logout
            </span>
          ) : (
            <span onClick={() => setShowLogin(true)} className="font-Source text-base text-secondary hover:text-primary cursor-pointer">
              Login
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
