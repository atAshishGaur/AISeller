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
<div className="bg-[#12203A] max-w-full w-[1163px] rounded-3xl h-[642px] mx-auto mt-20 flex flex-wrap items-center">
  <div className="mt-20 flex justify-center w-full md:w-auto">
    <img src={message} alt="message" className="" />
  </div>

<div className="flex flex-col w-full md:w-auto md:ml-12 space-y-6 max-w-md mx-auto">
 <p className="text-xl text-white font-semibold max-w-lg text-center -mt-4">
  Join Us For The LIVE Reveal Of AISellers On <span className="font-bold">[Date Here]</span> at 10:00 am EST &amp; Win a FREE Copy + $150!
</p>


  <div className="flex flex-col space-y-4">
    
    <div className="relative">
      <img
        src={profile}
        alt="profile icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Enter Name"
         className="w-full max-w-[500px] h-[60px] sm:h-[65px] md:h-[70px] rounded-3xl border border-gray-400 px-6 sm:px-8 md:px-10 py-2 focus:ring-[#6E38FD] bg-[#191934] text-white placeholder:text-gray-300"
      />
    </div>

    {/* Email Input with Email Icon */}
    <div className="relative">
      <img
        src={email}
        alt="email icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50 pointer-events-none"
      />
  <input
  type="email"
  placeholder="Enter Email"
  className="w-full max-w-[500px] h-[60px] sm:h-[65px] md:h-[70px] rounded-3xl border border-gray-400 px-6 sm:px-8 md:px-10 py-2 focus:ring-[#6E38FD] bg-[#191934] text-white placeholder:text-gray-300"
/>

    </div>
  </div>


  <button className="bg-[#6E38FD] hover:bg-[#582bd1] text-white font-bold rounded-full px-6 py-3 mt-2 max-w-md w-full transition">
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