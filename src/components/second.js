import ss1 from "../assets/Screenshot 6 (1).png"
import ss2 from "../assets/Screenshot 6 (2).png"
import ss3 from "../assets/Screenshot 6 (3).png"
import ss4 from "../assets/Screenshot 6 (4).png"
import ss5 from "../assets/Screenshot 6 (5).png"
import ss6 from "../assets/Screenshot 6 (6).png"


const Second =()=>{
    return(
        <div className="bg-[#070707]  font-poppins">
           <div className="pt-[100px] text-center text-[28px] text-white max-w-3xl mx-auto px-4">
  These Guys Have Made Millions Selling{" "}
  <span className="text-[#6E38FD] font-semibold">
    Ebooks, Videos, Content, Chatbots, And Other AI Products
  </span>
  ... With AISellers, You Can Do The Same (Even Better)
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mt-10">
  {/* Box 1 */}
  <div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-center text-center space-y-4">
    <h3 className="text-white text-lg font-semibold">
      Alex Soltan Is Making <span className="text-[#6E38FD]">$23,000 Per Month</span> Selling <span className="text-[#6E38FD]">AI-Generated Ebooks…</span>
    </h3>
    <img src={ss6} alt="ss6" className="w-full max-w-[416px] max-h-[517px] object-contain rounded-lg" />
  </div>

  {/* Box 2 */}
  <div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-center text-center space-y-4">
    <h3 className="text-white text-lg font-semibold">
      Another Guy Has Made Over <span className="text-[#6E38FD]">$1.63 Million</span> By Selling <span className="text-[#6E38FD]">AI-Generated Ebooks</span> On Amazon…
    </h3>
    <img src={ss5} alt="ss5" className="w-full max-w-[416px] max-h-[517px] object-contain rounded-lg" />
  </div>

  {/* Box 3 */}
  <div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-center text-center space-y-4">
    <h3 className="text-white text-lg font-semibold">
      This Guy Made An <span className="text-[#6E38FD]">AI Chatbot</span> That Makes Him <span className="text-[#6E38FD]">$350,000</span>
    </h3>
    <img src={ss4} alt="ss4" className="w-full max-w-[416px] max-h-[517px] object-contain rounded-lg" />
  </div>

  {/* Box 4 */}
  <div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-center text-center space-y-4">
    <h3 className="text-white text-lg font-semibold">
      This Guy Made An <span className="text-[#6E38FD]">AI Chatbot</span> That Makes Him <span className="text-[#6E38FD]">$350,000</span>
    </h3>
    <img src={ss3} alt="ss3" className="w-full max-w-[416px] max-h-[517px] object-contain rounded-lg" />
  </div>

  {/* Box 5 */}
  <div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-center text-center space-y-4">
    <h3 className="text-white text-lg font-semibold">
      This Guy Started And <span className="text-[#6E38FD]">Scaled His AI Agency To $122,351</span> Just To Prove It’s NOT Luck…
    </h3>
    <img src={ss2} alt="ss2" className="w-full max-w-[416px] max-h-[517px] object-contain rounded-lg" />
  </div>

  {/* Box 6 */}
  <div className="bg-[#1B1B1B] rounded-3xl shadow p-6 flex flex-col items-center text-center space-y-4">
    <h3 className="text-white text-lg font-semibold">
      This Guy Made An <span className="text-[#6E38FD]">AI Chatbot</span> That Makes Him <span className="text-[#6E38FD]">$350,000</span>
    </h3>
    <img src={ss1} alt="ss1" className="w-full max-w-[416px] max-h-[517px] object-contain rounded-lg" />
  </div>
</div>





        </div>
    )

    
}
export default Second;