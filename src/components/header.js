import image from "../assets/Vector (1).png"
import rectangle from "../assets/Rectangle 34627026.png"
import laptop from "../assets/Laptop-Screen-mockup 1.png"

const Header = () => {
  return (
    <div
      className="font-poppins min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #070707, #6E38FD)",
      }}
    >
      
      <div className="font-p px-4 py-2 backdrop-blur-[20px] shadow-[0px_10px_50px_0px_#00000080]">
        <div className="flex flex-wrap items-center">
          {/* Logo & Title */}
          <div className="flex items-center gap-2">
            <img src={image} alt="logo" className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px]" />
            <div className="bg-clip-text bg-gradient-to-r from-[#B549FF] to-[#7185FF] font-black text-xl sm:text-2xl">
              AI SELLERS 2.0
            </div>
          </div>

          
         <div className="xl:ml-[480px] flex flex-wrap justify-center items-center text-white gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 text-sm sm:text-base font-medium mt-4 sm:mt-0 w-full lg:w-auto">

            <div className="cursor-pointer hover:text-[#B549FF]">HOME</div>
            <div className="cursor-pointer hover:text-[#B549FF]">SWIPE & TOOLS</div>
            <div className="cursor-pointer hover:text-[#B549FF]">JV PAGE</div>
            <div className="cursor-pointer hover:text-[#B549FF]">PRODUCT DEMO</div>
            <div className="cursor-pointer hover:text-[#B549FF]">BONUS PAGE</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 mt-12">
        <div className="bg-[#1B1811] rounded-full text-white text-center px-4 py-4 shadow-[0_4px_20px_rgba(110,56,253,0.4)] w-full max-w-2xl">
          <p className="text-base sm:text-lg md:text-xl font-medium">
            Could This AI App Be Your $2,000/Month Marketing Assistant?
          </p>
        </div>
      </div>

    
<div className="flex justify-center px-4 mt-10">
  <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-white text-center leading-relaxed font-poppins max-w-5xl">
    <span className="text-[#6E38FD] font-bold">LIVE WORKSHOP: </span>
      How I Created a Complete Viral<br className="hidden sm:block" />
    Marketing Campaign in 11 Minutes While Making<br className="hidden md:block" />
    Coffee (That Now Runs on Complete Autopilot)
  </h1>
</div>





      {/* Rectangle Section */}
      <div className="relative w-full px-4 mt-10">
        <img
          src={rectangle}
          alt="rectangle"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h2 className="text-white text-lg sm:text-xl md:text-3xl font-bold drop-shadow-lg">
            Win a FREE Copy of AISellers + $150 in Credits & More!
          </h2>
        </div>
      </div>

     
      <div className="flex justify-center mt-8 px-4">
        <img
          src={laptop}
          alt="laptop"
          className="w-full max-w-4xl h-auto"
        />
      </div>
    </div>
  );
};

export default Header;