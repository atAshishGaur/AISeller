import image from "../assets/Vector (1).png"
import rectangle from "../assets/Rectangle 34627026.png"
import laptop from "../assets/Laptop-Screen-mockup 1.png"

const Header=()=>{
    return(
     <div
  className="font-poppins min-h-screen"  // optional min height so gradient is visible
  style={{
    background: "linear-gradient(to bottom, #070707, #6E38FD)"
  }}
>
<div className="font-p px-4 py-2 backdrop-blur-[20px] shadow-[0px_10px_50px_0px_#00000080] " >
  <div className="flex flex-wrap items-center">
    {/* Logo & Brand */}
    <div className="flex items-center gap-2 ml-[80px]">
      <img src={image} alt="logo" className="h-[89px] w-[86px]" />
<div className=" bg-clip-text bg-gradient-to-r from-[#B549FF] to-[#7185FF] font-black text-2xl">
  AI SELLERS 2.0
</div>

    </div>

    {/* Menu Items */}
    <div className="flex flex-wrap items-center xl:ml-[420px] lg:ml-[90px] text-white gap-12 text-sm sm:text-base font-medium">
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
    <p className="text-base sm:text-lg md:text-xl lg:text-xl font-medium">
      Could This AI App Be Your $2,000/Month Marketing Assistant?
    </p>
  </div>
</div>

<div className="flex justify-center mt-[30px] text-[40px] ">
<h1 className="text-center  mx-auto  leading-snug font-poppins">
  <span className="text-[#6E38FD] font-bold">LIVE WORKSHOP: </span>
  <span className="font-normal text-white ">
    How I Created a Complete Viral <br />
    Marketing Campaign in 11 Minutes While Making <br />
    Coffee (That Now Runs on Complete Autopilot)
  </span>
</h1>

</div>
<div className="relative w-full  mx-auto mt-8">
  <img
    src={rectangle}
    alt="rectangle"
    className="w-full h-auto rounded-lg shadow-lg"
  />
  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
    <h2 className="text-white text-xl sm:text-3xl font-bold drop-shadow-lg">
      Win a FREE Copy of AISellers + $150 in Credits & More!
    </h2>
  </div>
</div>
<div className=" mt-[20px]">
  <img src={laptop}/>
</div>





  </div>

        

        
    )
}
export default Header;