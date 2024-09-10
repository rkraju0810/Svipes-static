"use client";
import React, { useState } from "react";


const Faq = () => {

    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index
         )  
        
    };
    const faqs = [
        {
            title: "What is your policy on distribution?",
            content:
                "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
        },
        {
            title: "What is your policy on distribution?",
            content:
                "Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa.",
        },
        {
            title: "What is your policy on distribution?",
            content:
                "Pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
        },
        {
            title: "What is your policy on distribution?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
    ];


  return (
    <div className="lg:flex-[1_1_500px] w-full flex-none">
        <h1 className="text-2xl my-3">Faq</h1>
    {faqs.map((faq, index) => (
        <div
            key={index}
            className={`mb-6 w-full overflow-hidden p-8 rounded-md transition-colors duration-300 ${openFAQ === index ? "bg-gray-400" : "bg-gray-100"}`}
        >
            <div
                className="flex cursor-pointer items-start justify-between"
                onClick={() => toggleFAQ(index)}
            >
                <p className={`text-xl font-bold transition-colors duration-300 ${openFAQ === index ? "text-white" : "text-black"}`}>{faq.title}</p>
                <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                    <div
                       className={`absolute h-5 w-0.5 transition-transform duration-300 ${openFAQ === index ? "rotate-90 bg-red-500" : "bg-black"}`}
                    ></div>

                    <div className="h-0.5 w-5 bg-black"></div>
                </div>
            </div>
            {openFAQ === index && (
                <div className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                    <p className={`text-sm sm:text-base pt-3 transition-colors duration-300 ${openFAQ === index ? "text-slate-100" : "text-black"}`}>{faq.content}</p>
                </div>
            )}
        </div>
    ))}
</div>
  )
}

export default Faq