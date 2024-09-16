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
            title: "Be Kind, Not Mean.",
            content:
            "We're here to lift each other up, not tear each other down. Any form of bullying, harassment, or shaming isn't cool and won't be tolerated. Treat everyone with respect, both on and off the app.",
        },
        {
            title: "Respect Privacy.",
            content:
                "Keep it private. Don't share anyone's personal information—like their phone number, address, or any other details—without their consent. Respect boundaries.",
        },
        {
            title: "Spread love, not hate.",
            content:
                "Discrimination has no place here. We don't allow hate speech of any kind, including attacks on someone's race, gender, sexuality, religion, body type, or abilities. Everyone deserves to feel safe and welcome.",
        },
        {
            title: "Keep it real, not fake.",
            content:
                "Honesty is the best policy. Don't spread fake news, misinformation, or conspiracy theories. If it's not true or you're not sure, don't post it. Let's keep the vibe positive and factual.",
        },
        {
            title: "Post thoughtfully; avoid explicit content.",
            content:
            "We're all about self-expression, but let's keep it appropriate. Avoid posting overly explicit, sexual, or violent content. If it's graphic or could make others uncomfortable, it's best to share it elsewhere. Let's keep things light and fun here.",
        },
        {
            title: "No spamming, please.",
            content:
                "Quality over quantity. Don't flood the feed with repetitive or unnecessary content. Share what matters, and keep it interesting.",
        },
        {
            title: "Follow the law.",
            content:
                "If it's illegal, it's not allowed here. Don't use [App Name] to promote or engage in any illegal activities. We're here to have fun, not break the law.",
        },
        {
            title: "Strikes, and You're Out.",
            content:
                "We believe in second chances, but repeated rule-breaking won't fly. After three community violations, your account may be permanently suspended. Let's keep the community positive and respectful.",
        },
        {
            title: "Report and support.",
            content:
                "If you see something, say something. Use our reporting tools to flag any content that violates these guidelines. We're all in this together, so let's help each other out.",
        },
    ];


  return (
    <div className="lg:flex-[1_1_500px] w-full flex-none">
        
    {faqs.map((faq, index) => (
         <div
         key={index}
         className={`mb-6 w-full overflow-hidden p-8 rounded-md transition-colors duration-300 ${openFAQ === index ? "bg-black" : "bg-gray-100"}`}
     >
         <div
             className="flex cursor-pointer items-start justify-between"
             onClick={() => toggleFAQ(index)}
         >
             <p className={`text-xl font-bold transition-colors duration-300 ${openFAQ === index ? "text-white" : "text-black"}`}>{faq.title}</p>
             <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                 <div
                    className={`absolute h-5 w-0.5 transition-transform duration-300 ${openFAQ === index ? "rotate-90 bg-white" : "bg-black"}`}
                 ></div>

                 <div className={`h-0.5 w-5  ${openFAQ === index ? " bg-white" : "bg-black"}`}></div>
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