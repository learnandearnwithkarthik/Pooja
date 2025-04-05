import React from "react";
import { menuItemsLeft, menuItemsRight } from "../data";

const Menu = () => {
  return (
    <div className="w-full lg:px-[250px] border-t py-10 border-border px-5 flex flex-col gap-5 mt-[70px]">
      <div className="flex flex-col lg:items-start items-center">
        <span className="uppercase font-Bebas text-[70px] text-text tracking-wide">
        Top Menu Picks
        </span>
        <p className="text-secondary font-light text-base max-w-[430px] lg:text-left text-center">
          Discover our delightful menu at Brew & Bake, featuring gourmet
          coffee, freshly baked pastries, and delectable desserts to satisfy
          every craving.
        </p>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-start gap-20 mt-8 justify-between">
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          {menuItemsLeft.map((menuItem) => (
            <div className="flex flex-col gap-5" key={menuItem.title}>
              <span className="font-Bebas text-[35px] text-text tracking-wide">
                {menuItem.title}
              </span>
              {menuItem.items.map((item) => (
                <div className="flex flex-col w-full gap-3" key={item.title}>
                  <div className="flex w-full items-center justify-between gap-2 gap-with-dash">
                    <div className="font-Source text-[19px] text-secondary font-semibold">
                      {item.title}
                    </div>
                    <span className="font-Source text-[17px] text-secondary">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-Source text-base font-light max-w-[650px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          {menuItemsRight.map((menuItem) => (
            <div className="flex flex-col gap-5" key={menuItem.title}>
              <span className="font-Bebas text-[35px] text-text tracking-wide">
                {menuItem.title}
              </span>
              {menuItem.items.map((item) => (
                <div className="flex flex-col w-full gap-3" key={item.title}>
                  <div className="flex w-full items-center justify-between gap-2 gap-with-dash">
                    <div className="font-Source text-[19px] text-secondary font-semibold">
                      {item.title}
                    </div>
                    <span className="font-Source text-[17px] text-secondary">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-Source text-base font-light max-w-[650px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
