import React from "react";
import HomeNavbar from "./HomeNavbar";
import FloatText from "./FloatText";

const Header = () => {
  return (
    <div className="flex flex-col relative justify-center">
      <div className="relative">
        <img src={require("../../../images/ragon_edit.png")} />
      </div>
      <div className="w-full flex flex-col absolute top-0">
        <HomeNavbar absolute={true} color="white" />
      </div>
      <div className="flex absolute w-full">
          <FloatText />
        </div>
    </div>
  );
};

export default Header;
