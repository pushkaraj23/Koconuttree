// "use client";

// import Image from "next/image";
// import { Search } from "lucide-react";

// const foodItems = [
//     {
//         title: "Egg Pasta",
//         image:
//             "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600",
//     },
//     {
//         title: "Pan Cakes",
//         image:
//             "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=600",
//     },
//     {
//         title: "Burgers",
//         image:
//             "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600",
//     },
//     {
//         title: "Croissants",
//         image:
//             "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=600",
//     },
//     {
//         title: "Prawns",
//         image:
//             "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600",
//     },
//     {
//         title: "Egg Pasta",
//         image:
//             "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600",
//     },
//     {
//         title: "Pan Cakes",
//         image:
//             "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=600",
//     },
//     {
//         title: "Burgers",
//         image:
//             "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600",
//     },
//     {
//         title: "Croissants",
//         image:
//             "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=600",
//     },
//     {
//         title: "Prawns",
//         image:
//             "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600",
//     }
// ];

// export default function CravingSection() {
//     return (
//         <section className="relative w-full py-20 bg-gradient-to-r from-[#bfbeb5] via-[#d6c39a] to-[#bfbeb5]">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Header */}
//                 <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
//                     <div>
//                         <p className="text-red-600 italic font-semibold mb-2">
//                             Freshly Cooked, Just For You
//                         </p>
//                         <h2 className="text-4xl lg:text-5xl font-bold text-[#3b1d12]">
//                             What Are You Craving Today?
//                         </h2>
//                     </div>

//                     {/* Search */}
//                     <div className="relative w-full max-w-md">
//                         <Search
//                             size={20}
//                             className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b4b3e]"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Search dishes, ingredients, or combos ..."
//                             className="w-full pl-12 pr-4 py-3 rounded-full bg-white/40 backdrop-blur-md border border-[#b79a6a] text-[#3b1d12] placeholder-[#6b4b3e] focus:outline-none"
//                         />
//                     </div>
//                 </div>

//                 {/* Food Cards */}
//                 <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
//                     {foodItems.map((item, index) => (
//                         <div
//                             key={index}
//                             className="bg-black/8 backdrop-blur-3xl border border-white/20 rounded-3xl px-5 py-10 text-center shadow-lg hover:scale-105 transition-transform duration-300"
//                         >
//                             <div className="relative w-full h-45 w-55 rounded-full overflow-hidden mb-4">
//                                 <Image
//                                     src={item.image}
//                                     alt={item.title}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <p className="text-[#3b1d12] font-medium">{item.title}</p>
//                         </div>
//                     ))}
//                 </div>



//                 {/* View More */}
//                 <div className="mt-14 flex justify-center">
//                     <button className="px-10 py-3 rounded-full border border-[#6b4b3e] text-[#3b1d12] hover:bg-[#6b4b3e] hover:text-white transition">
//                         View More
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import Image from "next/image";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


export const foodItems = [
    {
        title: "Egg Pasta",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    },
    {
        title: "Pan Cakes",
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
    },
    {
        title: "Burgers",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    },


    {
        title: "Spaghetti",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80",
    },
    {
        title: "Sushi Rolls",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80",
    },
    {
        title: "Pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    },
    {
        title: "Salad Bowl",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    },
    {
        title: "Ice Cream",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    },

    {
        title: "French Fries",
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80",
    },


    {
        title: "Sandwich",
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80",
    },

    {
        title: "Chocolate Cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    },

    {
        title: "Steak",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80",
    },

];


export default function CravingSection() {
    const [showAll, setShowAll] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter items based on search query
    const filteredItems = foodItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Items to display based on showAll state
    const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 5);

    return (
        <section className="relative w-full py-20 bg-gradient-to-tr from-[#D4A373] via-[#CCC9A1] to-[#D4A373]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div>
                        <p className="text-amber-600 font-pacifico text-2xl font-semibold mb-2">
                            Freshly Cooked, Just For You
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-pacifico font-bold text-[#3b1d12]">
                            What Are You Craving Today?
                        </h2>
                    </div>

                    {/* Search */}
                    <div className="relative w-full max-w-md">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b4b3e]"
                        />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search dishes, ingredients, or combos ..."
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/40 backdrop-blur-md border border-[#b79a6a] text-[#3b1d12] placeholder-[#6b4b3e] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Food Cards */}
                {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    {displayedItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black/15 backdrop-blur-xl border border-white/0 rounded-3xl px-5 py-10 text-center shadow-lg hover:scale-105 transition-transform duration-300 group cursor-pointer"
                        >
                            <div className="relative w-42 h-42 mx-auto rounded-full overflow-hidden mb-4 group-hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <p className="text-[#3b1d12] font-medium text-lg group-hover:text-[#8B4513] transition-colors duration-300">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div> */}

                <div className="mt-16 flex flex-wrap justify-center gap-10">
                    {displayedItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-black/15 backdrop-blur-xl border border-white/0 rounded-3xl px-5 py-10 text-center shadow-lg hover:scale-105 transition-transform duration-300 group cursor-pointer"
                            style={{
                                width: "calc(100% / 5 - 40px)",
                                minWidth: "180px",
                                maxWidth: "220px"
                            }}
                        >
                            <div className="relative w-42 h-42 mx-auto rounded-full overflow-hidden mb-4 group-hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <p className="text-[#3b1d12] font-medium text-lg group-hover:text-[#8B4513] transition-colors duration-300">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
                {/* No Results Message */}
                {filteredItems.length === 0 && (
                    <div className="mt-10 text-center">
                        <p className="text-[#3b1d12] text-lg">
                            No dishes found matching "{searchQuery}"
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 px-6 py-2 rounded-full bg-[#8B4513] text-white hover:bg-[#a0522d] transition-colors"
                        >
                            Clear Search
                        </button>
                    </div>
                )}

                {/* View More / View Less Button */}
                {filteredItems.length > 5 && (
                    <div className="mt-14 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-10 py-3 rounded-full border-2 border-[#6b4b3e] text-[#3b1d12] hover:bg-[#6b4b3e] hover:text-white transition-all duration-300 flex items-center gap-2 group"
                        >
                            {showAll ? (
                                <>
                                    View Less
                                    <ChevronUp size={20} className="group-hover:translate-y-[-2px] transition-transform" />
                                </>
                            ) : (
                                <>
                                    View More
                                    <ChevronDown size={20} className="group-hover:translate-y-[2px] transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}