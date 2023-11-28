import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import img from "../../constants/images";
import items from "../../constants/menu";
import Button from "../Button/Button";
import { RxCaretDown } from "react-icons/rx";

import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div className="flex pt-10 shadow-lg">
      <div className="flex bg-white mt-6 mb-6 w-4/5 mx-auto border justify-between items-center">
        <img src={img.logo} alt="" />
        {/* <div className="flex space-x-4"> */}
        <Menu items={items} />
        {/* </div> */}
        <div className="flex space-x-5">
          <div className="flex-space-x-2">
            <FaGlobe />
            <span>
              EN
              <RxCaretDown />
            </span>
          </div>
          <Button
            className="rounded-md bg-darkBlue text-white p-3"
            children="Login"
          />
          <Button
            className="rounded-md bg-gold text-white p-3"
            children="Enrol"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
