import Header from "./header"
import image2 from "../assets/image2.png"
import tick from "../assets/tick.png"
import message from "../assets/messageImage.png"
// import tick from "../assets/tick.png"
import profile from "../assets/profile (1).png"
import email from "../assets/profile (2).png"
import Second from "./second"
import Footer from "./footer"

const Main=()=>{
    return(

       
        <div className=" font-poppins">
             <Header/>
             <div className="bg-[#070707]">
            <div className=" mt-[30px] text-[40px] text-center px-4">
  <h1>
    Here’s A Glimpse Of What You’ll <br />
    Discover During The Live Workshop:
  </h1>     
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto px-4 mt-10">

  <div className="text-white md:w-1/2 text-center md:text-left space-y-4 text-lg">
    <div className="flex items-start gap-3">
      <img src={tick} alt="tick" className="w-6 h-6 mt-1" />
      <p>How to create your first profit-generating AI marketing campaign in under 15 minutes (even if you're completely non-technical)</p>
    </div>

    <div className="flex items-start gap-3">
      <img src={tick} alt="tick" className="w-6 h-6 mt-1" />
      <p>The "5-Minute Method" for turning any product or service into a complete marketing system that generates leads while you sleep</p>
    </div>

    <div className="flex items-start gap-3">
      <img src={tick} alt="tick" className="w-6 h-6 mt-1" />
      <p>Why most businesses waste 80% of their marketing budget (and how AISellers eliminates this waste completely)</p>
    </div>

    <div className="flex items-start gap-3">
      <img src={tick} alt="tick" className="w-6 h-6 mt-1" />
      <p>The exact process for landing $1,500-2,500/month retainer clients using nothing but AISellers demos</p>
    </div>

    <div className="flex items-start gap-3">
      <img src={tick} alt="tick" className="w-6 h-6 mt-1" />
      <p>Plus, a chance to win a free copy of AISellers + $150 in credits and exclusive AI launch bonuses!</p>
    </div>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <img src={image2} alt="AISellers Demo" className="max-w-full h-auto rounded-lg shadow-lg" />
  </div>
</div>


</div>
<div className="bg-[#12203A] w-full max-w-[1163px] rounded-3xl mx-auto mt-20 px-4 py-10 flex flex-col lg:flex-row items-center gap-10">
  <div className="flex justify-center w-full lg:w-1/2">
    <img src={message} alt="message" className="max-w-full h-auto" />
  </div>

  {/* Form Section */}
  <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-6">
    <p className="text-xl text-white font-semibold text-center lg:text-left">
      Join Us For The LIVE Reveal Of AISellers On <span className="font-bold">[Date Here]</span> at 10:00 AM EST &amp; Win a FREE Copy + $150!
    </p>

    <div className="relative w-full">
      <img
        src={profile}
        alt="profile icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Enter Name"
        className="w-full h-[60px] sm:h-[65px] md:h-[70px] pl-12 pr-6 rounded-3xl border border-gray-400 bg-[#191934] text-white placeholder:text-gray-300 focus:ring-[#6E38FD] outline-none"
      />
    </div>

    <div className="relative w-full">
      <img
        src={email}
        alt="email icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50 pointer-events-none"
      />
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full h-[60px] sm:h-[65px] md:h-[70px] pl-12 pr-6 rounded-3xl border border-gray-400 bg-[#191934] text-white placeholder:text-gray-300 focus:ring-[#6E38FD] outline-none"
      />
    </div>

    {/* Submit Button */}
    <button className="bg-[#6E38FD] hover:bg-[#582bd1] text-white font-bold rounded-full px-6 py-4 w-full transition">
      SIGN UP NOW FOR THE BIG REVEAL!
    </button>
  </div>
</div>

<div className="mt-[80px] flex flex-col items-center text-center max-w-3xl mx-auto px-4 space-y-6">
  <div className="text-white text-lg">
    If You Still Need More Information To Make Your Decision... Keep Reading. But Be Aware: If You Take The Time To Read Every Word On This Page, All 1,000 Seats May Be Gone.&nbsp;<br/><br/>
    You Are One Of An Estimated 128,375 People This Week Reading This Message (Based On The Estimated Subscriber Base Of Our Promotional Partners...And Not All Of Them Would Reveal Their Numbers, So It's Probably More).<br/><br/>
    If Only 0.05% Of You Decide To Join Us...We'll Be Sold Out. The Best Bet Is To Register Right
  </div>

  <button className="bg-[#6E38FD] text-white font-bold rounded-full px-6 py-3 hover:bg-[#5831cc] transition">
    SIGN UP NOW FOR THE BIG REVEAL!
  </button>
</div>


</div>
<Second/>
   <Footer/>
        </div>
    )
}
export default Main;