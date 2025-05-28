
import message from "../assets/messageImage.png"
// import tick from "../assets/tick.png"
import profile from "../assets/profile (1).png"
import email from "../assets/profile (2).png"
import woman from "../assets/Mask group (1).png"
import man from "../assets/Mask group.png"


const Footer =()=>{
    return(
<div
  className="font-poppins pt-[60px] flex flex-col items-center justify-center text-center space-y-3 px-4 min-h-[300px] w-full"
  style={{
    background: "radial-gradient(circle, #6E38FD 6%, #000000 80%)",
  }}
>
  <div className="text-white text-[40px] font-semibold">
    Want To See How You Can Get<br></br> Similar Results?
  </div>
  <div className="text-[#777777] text-[24px] max-w-xl">
    Register For The Webinar Below And Make Sure To Attend It Live  (BIG SURPRISES AWAITING)
  </div>
  <div className="bg-[#12203A] max-w-full w-[1163px] rounded-3xl h-[642px] mx-auto mt-20 flex flex-wrap items-center">
    {/* Left side - image with margin top */}
    <div className="mt-20 flex justify-center w-full md:w-auto">
      <img src={message} alt="message" className="" />
    </div>
  
    {/* Right side - text and inputs */}
  <div className="flex flex-col w-full md:w-auto md:ml-12 space-y-6 max-w-md mx-auto">
   <p className="text-xl text-white font-semibold max-w-lg text-center -mt-4">
    Join Us For The LIVE Reveal Of AISellers On <span className="font-bold">[Date Here]</span> at 10:00 am EST &amp; Win a FREE Copy + $150!
  </p>
  
  
    <div className="flex flex-col space-y-4">
      {/* Name Input with Profile Icon */}
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
  
    {/* Button */}
    <button className="bg-[#6E38FD] hover:bg-[#582bd1] text-white font-bold rounded-full px-6 py-3 mt-2 max-w-md w-full transition">
      SIGN UP NOW FOR THE BIG REVEAL!
    </button>
  </div>
  
  
  </div>

<div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4 py-10">
  {/* Testimonial Box 1 */}
  <div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-start text-center space-y-4 max-w-md w-full">
    <h3 className="text-white text-lg font-semibold">
      Last month I made <span className="text-[#6E38FD]">$3,740 In Commissions...</span>
    </h3>
    <p className="text-[#bbbbbb] text-sm leading-relaxed">
      "I was struggling to make more than $400/month with affiliate marketing until I found AISellers 2.0. Within just 3 weeks of using the talking head videos and new landing page templates, my conversion rate jumped from 1.2% to 4.8%! Last month I made $3,740 in commissions working part-time. The flipbooks and automated email campaigns have been game changers for my business. Best investment I've made this year!"
    </p>
      <div className="flex items-center space-x-4">
    <img src={man} alt="James Keller" className="w-12 h-12 rounded-full object-cover" />
    <span className="text-white font-semibold">James Keller - Affiliate Marketer</span>
  </div>
  </div>

  {/* Testimonial Box 2 */}
<div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-start text-left space-y-6 max-w-md w-full">
  <h3 className="text-white text-lg font-semibold">
    One restaurant owner saw a <span className="text-[#6E38FD]">27% increase in bookings…</span>
  </h3>
  <p className="text-[#bbbbbb] text-sm leading-relaxed">
    "AISellers 2.0 helped me land 3 new clients in my first month at $1,500 each! The clients were blown away by the quality of the AI videos and custom chatbots I created for them in literally minutes. One restaurant owner saw a 27% increase in bookings after we implemented the SMS campaign feature. I'm working half the hours and making triple what I did before. This tool is insane!"
  </p>

  {/* Author info at bottom, natural flow */}
  <div className="flex items-center space-x-4">
    <img src={woman} alt="James Keller" className="w-12 h-12 rounded-full object-cover" />
    <span className="text-white font-semibold">James Keller - Affiliate Marketer</span>
  </div>
</div>



</div>


</div>




    )
}
export default Footer;