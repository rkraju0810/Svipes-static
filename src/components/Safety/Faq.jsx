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
            title: "1. Be Kind, Not Mean.",
            content:
            "We&#39;re here to lift each other up, not tear each other down. Any form of bullying, harassment, or shaming isn&#39;t cool and won&#39;t be tolerated. Treat everyone with respect, both on and off the app.",
        },
        {
            title: "2. Respect Privacy.",
            content:
                "Keep it private. Don&#39;t share anyone&#39;s personal information—like their phone number, address, or any other details—without their consent. Respect boundaries.",
        },
        {
            title: "3. Spread love, not hate.",
            content:
                "Discrimination has no place here. We don&#39;t allow hate speech of any kind, including attacks on someone&#39;s race, gender, sexuality, religion, body type, or abilities. Everyone deserves to feel safe and welcome.",
        },
        {
            title: "4. Keep it real, not fake.",
            content:
                "Honesty is the best policy. Don&#39;t spread fake news, misinformation, or conspiracy theories. If it&#39;s not true or you&#39;re not sure, don&#39;t post it. Let&#39;s keep the vibe positive and factual.",
        },
        {
            title: "5. Post thoughtfully; avoid explicit content.",
            content:
            "We&#39;re all about self-expression, but let&#39;s keep it appropriate. Avoid posting overly explicit, sexual, or violent content. If it&#39;s graphic or could make others uncomfortable, it&#39;s best to share it elsewhere. Let&#39;s keep things light and fun here.",
        },
        {
            title: "6. No spamming, please.",
            content:
                "Quality over quantity. Don&#39;t flood the feed with repetitive or unnecessary content. Share what matters, and keep it interesting.",
        },
        {
            title: "7. Follow the law.",
            content:
                "If it&#39;s illegal, it&#39;s not allowed here. Don&#39;t use [App Name] to promote or engage in any illegal activities. We&#39;re here to have fun, not break the law.",
        },
        {
            title: "8. 3 Strikes, and You&#39;re Out.",
            content:
                "We believe in second chances, but repeated rule-breaking won&#39;t fly. After three community violations, your account may be permanently suspended. Let&#39;s keep the community positive and respectful.",
        },
        {
            title: "9. Report and support.",
            content:
                "If you see something, say something. Use our reporting tools to flag any content that violates these guidelines. We&#39;re all in this together, so let&#39;s help each other out.",
        },
    ];
    


  return (
    <div className="lg:flex-[1_1_500px] w-full flex-none">
        
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