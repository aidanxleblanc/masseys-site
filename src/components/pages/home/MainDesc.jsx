import React from "react";

const MainDesc = () => {
  return (
    <div className="flex flex-col h-screen justify-around font-display text-[#39516D]">
      <div className="flex justify-around pt-7">
        <img
          src={require("../../../images/50yrs.png")}
          className="w-1/4 object-contain"
        />
        <div className="flex flex-col items-right justify-center text-4xl text-right font-semi pr-4">
          <h1>Build on our experience.</h1>
          <h1>Build with confidence.</h1>
        </div>
      </div>

      <h1 className="font-display text-center text-xl p-6">
        Visionaries since 1973. At Massey's, our legacy speaks for itself. We've
        been the cornerstone of architectural innovation for over five decades.
        <br></br>
        <br></br>
        We're not just industry leaders; we're pioneers, collaborating with the
        foremost manufacturers in glazing materials and cutting-edge
        installation techniques. Our dedication to excellence transcends
        craftsmanship; it's a commitment to shaping the future of architectural
        possibilities.
        <br></br>
        <br></br>
        We foster an inclusive environment, championing equal opportunities for
        all, irrespective of race, gender, or ability. At Massey's, diversity
        fuels our success.
        <br></br>
        <br></br>
        Rooted in a proud heritage and propelled by unwavering confidence,
        Massey's invites you to build with confidence.
      </h1>
    </div>
  );
};

export default MainDesc;
