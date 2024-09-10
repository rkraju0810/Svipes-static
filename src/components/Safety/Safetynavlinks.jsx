// import Link from 'next/link'
// import React from 'react'

// const Safetynavlinks = () => {
//     const data = [
//         {
//             "link": "our-approach-to-safety",
//             "name": "our approach to safety"
//         },
//         {
//             "link": "our-guide-to-online-safety",
//             "name": "our guide to online safety"
//         },
//         {
//             "link": "our-community-guidelines",
//             "name": "our community guidelines"
//         },
//         {
//             "link": "our-safety-tools",
//             "name": "our safety tools"
//         },
//         {
//             "link": "our-resources",
//             "name": "our resources"
//         },
//         {
//             "link": "contact-us",
//             "name": "contact us"
//         }
//     ]
//     return (

//     <div className='flex flex-col gap-5 w-full sticky top-20'>
//             <h2 className='text-4xl'>safety</h2>
//             <div>
//                 <ul className='flex flex-col gap-1'>
//                     {
//                         data.map((item, idx) => (
//                             <Link href={`/safety/${item.link}`}><li key={idx} className='hover:text-red-600 active:text-red-600 text-lg'>{item.name}</li></Link>
//                         )
//                         )
//                     }
//                 </ul>
//             </div>
//         </div>


//     )
// }

// export default Safetynavlinks

"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Use usePathname
import React from 'react'

const Safetynavlinks = () => {
    const pathname = usePathname(); // Get the current pathname

    const data = [
        {
            "link": "our-approach-to-safety",
            "name": "our approach to safety"
        },
        {
            "link": "our-guide-to-online-safety",
            "name": "our guide to online safety"
        },
        {
            "link": "our-community-guidelines",
            "name": "our community guidelines"
        },
        {
            "link": "our-safety-tools",
            "name": "our safety tools"
        },
        {
            "link": "our-resources",
            "name": "our resources"
        },
        {
            "link": "contact-us",
            "name": "contact us"
        }
    ];

    console.log(pathname); // This should correctly log the current path

    return (
        <div className='flex flex-col gap-5 w-full sticky top-20'>
            <h2 className='text-4xl'>safety</h2>
            <div>
                <ul className='flex flex-col gap-1'>
                    {data.map((item, idx) => (
                        <Link href={`/safety/${item.link}`} key={idx}>
                            <li className={`${pathname === `/safety/${item.link}` ? 'text-red-600' : 'text-black'} hover:text-red-600 text-lg`}>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Safetynavlinks;
