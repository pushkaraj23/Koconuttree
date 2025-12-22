// "use client"
// import { useState } from 'react';
// import { Heart, ShoppingBag } from 'lucide-react';
// import Image from 'next/image';

// export default function TopPicksSection() {
//     const [selectedDish, setSelectedDish] = useState(0);

//     const dishes = [
//         {
//             id: 1,
//             title: 'Egg Curry Noodles',
//             description: 'Eggs curry with tomato and cucumbers. Our chef\'s special healthy and fat free dish for those who want to lose weight.',
//             image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop',
//             time: '25 mins',
//             price: '350 Rs.'
//         },
//         {
//             id: 2,
//             title: 'Jumbo Whopper',
//             description: 'Eggs curry with tomato and cucumbers. Our chef\'s special healthy and fat free dish for losing weight.',
//             image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop',
//             time: '30 mins',
//             price: '450 Rs.'
//         },
//         {
//             id: 3,
//             title: 'Croissants',
//             description: 'Eggs curry with tomato and cucumbers. Our chef\'s special healthy and fat free dish for losing weight.',
//             image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=500&fit=crop',
//             time: '20 mins',
//             price: '250 Rs.'
//         },
//         {
//             id: 4,
//             title: 'Prawns',
//             description: 'Eggs curry with tomato and cucumbers. Our chef\'s special healthy and fat free dish for those who want to lose weight.',
//             image: 'https://images.unsplash.com/photo-1625944524888-aca826eef675?w=500&h=500&fit=crop',
//             time: '35 mins',
//             price: '550 Rs.'
//         }
//     ];

//     const current = dishes[selectedDish];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-[#2d1419] to-[#1a0d0f] relative overflow-hidden">
//             {/* Decorative Border Top */}
//             <div className="absolute top-0 left-0 w-full z-20">
//                 <Image
//                     src="/home/topBoarder.svg"
//                     alt="Border"
//                     width={1920}
//                     height={100}
//                     className="w-full"
//                     priority
//                 />
//             </div>

//             <div className="max-w-7xl m-auto mt-20 px-6 lg:px-12 py-16 z-20">
//                 {/* Header */}
//                 <div className="mb-12">
//                     <p className="text-amber-100 italic text-lg mb-3 font-light">
//                         Tried, tested, and loved by our customers
//                     </p>
//                     <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
//                         Our Top Picks
//                     </h1>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Side - Menu Items */}
//                     <div className="space-y-4">
//                         {dishes.map((dish, index) => (
//                             <div
//                                 key={dish.id}
//                                 onClick={() => setSelectedDish(index)}
//                                 className={`cursor-pointer p-5 rounded-xl transition-all duration-300 ${selectedDish === index
//                                         ? 'bg-white/15 backdrop-blur-sm border border-white/20'
//                                         : 'bg-white/5 hover:bg-white/10'
//                                     }`}
//                             >
//                                 <div className="flex items-start gap-4">
//                                     {/* Dish Image */}
//                                     <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
//                                         <Image
//                                             src={dish.image}
//                                             alt={dish.title}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                     </div>

//                                     {/* Dish Info */}
//                                     <div className="flex-1">
//                                         <h3 className="text-white font-semibold text-lg mb-2">
//                                             {dish.title}
//                                         </h3>
//                                         <p className="text-gray-300 text-sm line-clamp-2">
//                                             {dish.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right Side - Featured Dish */}
//                     <div className="relative">
//                         {/* Card Background */}
//                         <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
//                             {/* Heart and Bag Icons */}
//                             <div className="absolute top-6 right-6 flex flex-col gap-4">
//                                 <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center justify-center text-white">
//                                     <Heart size={24} className="hover:fill-white" />
//                                 </button>
//                                 <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center justify-center text-white">
//                                     <ShoppingBag size={24} />
//                                 </button>
//                             </div>

//                             {/* Dish Image */}
//                             <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-8">
//                                 <Image
//                                     src={current.image}
//                                     alt={current.title}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>

//                             {/* Dish Title */}
//                             <h2 className="text-4xl font-script text-white mb-4 italic">
//                                 {current.title}
//                             </h2>

//                             {/* Dish Description */}
//                             <p className="text-gray-200 text-sm mb-8 leading-relaxed">
//                                 {current.description}
//                             </p>

//                             {/* Footer - Time and Price */}
//                             <div className="flex items-center justify-between">
//                                 <div className="bg-amber-100 text-[#2d1419] px-6 py-2 rounded-full font-semibold">
//                                     {current.time}
//                                 </div>
//                                 <div className="text-right">
//                                     <p className="text-gray-300 text-sm mb-1">Total Price</p>
//                                     <p className="text-3xl font-bold text-white">
//                                         {current.price}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// "use client";

// import Image from "next/image";
// import { Heart, Bookmark } from "lucide-react";

// export default function OurTopPicks() {
//     return (
//         <section className="relative w-full min-h-screen bg-[#2b0505] px-6 md:px-20 py-16 text-[#f6e7c8] overflow-hidden">

//             {/* Top decorative border */}
//             <div className="absolute top-0 left-0 w-full h-10 bg-[url('/patterns/top-border.svg')] bg-repeat-x" />

//             {/* Header */}
//             <div className="mb-12">
//                 <p className="italic text-sm opacity-80">Tried, tested, and loved by our customers</p>
//                 <h2 className="text-4xl md:text-5xl font-extrabold mt-2">Our Top Picks</h2>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                 {/* Left List */}
//                 <div className="space-y-5">
//                     {[
//                         { name: "Egg Curry Noodles", img: "/foods/noodles.png" },
//                         { name: "Jumbo Whopper", img: "/foods/burger.png" },
//                         { name: "Croissants", img: "/foods/croissant.png" },
//                         { name: "Prawns", img: "/foods/prawns.png" },
//                     ].map((item, i) => (
//                         <div
//                             key={i}
//                             className="flex items-center gap-4 bg-white/5 rounded-xl px-4 py-3 backdrop-blur-md hover:bg-white/10 transition"
//                         >
//                             <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
//                                 <Image src={item.img} alt={item.name} width={56} height={56} className="object-cover" />
//                             </div>
//                             <div>
//                                 <h4 className="font-semibold">{item.name}</h4>
//                                 <p className="text-xs opacity-70">Egg curry with tomato and cucumbers. Chef’s special.</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>



//                 {/* Right Info Card */}
//                 <div className="relative bg-[#3b1d12]/60 backdrop-blur-xl flex justify-center rounded-3xl p-6 pt-24 w-[560px] h-[500px] text-[#f5e6c8] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)]">

//                     {/* Overlapping Circle */}
//                     <div className="absolute -top-20 -left-20 w-82 h-82 rounded-full bg-black shadow-2xl overflow-hidden">
//                         <Image
//                             src="/foods/main-noodles.png"
//                             alt="Egg Curry Noodles"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>

//                     {/* Icons */}
//                     <div className="absolute top-6 right-6 flex flex-col gap-4">
//                         <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
//                             <Heart size={18} />
//                         </button>
//                         <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
//                             <Bookmark size={18} />
//                         </button>
//                     </div>

//                     {/* Content */}
//                     <h3 className="font-script text-2xl mt-2">Egg Curry Noodles</h3>

//                     <p className="text-sm opacity-80 mt-2">
//                         Eggs curry with tomato and cucumbers. Our chef’s special healthy and fat free dish.
//                     </p>

//                     <div className="flex items-center justify-between mt-6">
//                         <span className="bg-[#f5e6c8] text-[#3b1d12] px-4 py-1 rounded-full text-sm font-medium">
//                             25 mins
//                         </span>

//                         <span className="text-lg font-semibold">
//                             Total Price <span className="text-[#f5e6c8] font-bold">350 Rs.</span>
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Offer */}
//             <div className="mt-20 bg-[#e9d7a8] rounded-3xl px-10 py-8 text-[#3b1d12] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl max-w-6xl mx-auto">
//                 <div>
//                     <h3 className="text-2xl font-bold">Flat 10% Off on your orders</h3>
//                     <p className="text-sm mt-2">Order your favorites from Koconut Tree today and enjoy instant savings.</p>
//                     <button className="mt-4 px-6 py-2 rounded-full border border-[#3b1d12] hover:bg-[#3b1d12] hover:text-white transition">
//                         Order Now
//                     </button>
//                 </div>
//                 <div className="border border-dashed border-[#3b1d12] rounded-xl px-8 py-4 text-center">
//                     <p className="italic text-sm">Coupon Code</p>
//                     <p className="text-3xl font-extrabold tracking-widest">KOKO10</p>
//                     <p className="text-xs opacity-70">Valid on online orders above ₹499</p>
//                 </div>
//             </div>

//         </section>
//     );
// }


// "use client";

// import Image from "next/image";
// import { Heart, Bookmark } from "lucide-react";

// export default function OurTopPicks() {
//     return (
//         <section className="relative w-full min-h-screen bg-[#2b0505] px-6 md:px-20 py-16 text-[#f6e7c8] overflow-hidden">

//             {/* Header */}
//             <div className="mb-14">
//                 <p className="italic text-sm opacity-80">
//                     Tried, tested, and loved by our customers
//                 </p>
//                 <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
//                     Our Top Picks
//                 </h2>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//                 {/* Left List */}
//                 <div className="space-y-5">
//                     {[
//                         { name: "Egg Curry Noodles", img: "https://images.unsplash.com/photo-1562823159-ad2c5bd36cf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWdnJTIwY3VyeSUyMG5vb2RsZXN8ZW58MHx8MHx8fDA%3D" },
//                         { name: "Jumbo Whopper", img: "https://media.istockphoto.com/id/1215955266/photo/giant-burger-on-a-serving-board-with-french-fries-sauces-and-a-cup-of-coffee.jpg?s=612x612&w=0&k=20&c=d-YEn9joZ7zrNVaUuJ1hyjVVKJjSRR59rPNgJHZDGAo=" },
//                         { name: "Croissants", img: "https://media.istockphoto.com/id/629455902/photo/french-boulangerie-fresh-croissant-for-sale.jpg?s=612x612&w=0&k=20&c=ImE0C1nh-Nq_FROYD3IcbeC1GrvA2RUH1zzbKPOY2Lg=" },
//                         { name: "Prawns", img: "https://media.istockphoto.com/id/1097412142/photo/prawn-masala-curry-with-chapatti-and-basmati-rice.jpg?s=612x612&w=0&k=20&c=rDgA6Xc10j1b3Q9fBaIhjH2khA195OuzkjwJXlc0INE=" },
//                     ].map((item, i) => (
//                         <div
//                             key={i}
//                             className="flex items-center gap-4 bg-white/5 rounded-xl px-4 py-3 backdrop-blur-md hover:bg-white/10 transition"
//                         >
//                             <div className="w-18 h-18 rounded-full overflow-hidden border border-white/20">
//                                 <Image
//                                     src="https://media.istockphoto.com/id/1282034236/photo/image-of-sliced-toffee-caramel-cheesecake-buttery-biscuit-base-fluffy-mascarpone-cream-cheese.jpg?s=612x612&w=0&k=20&c=gl7GtiCeEHw4hbw0doRrDPsXE2O0DrQMsqGx5lAtcds="
//                                     alt={item.name}
//                                     width={56}
//                                     height={56}
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <div>
//                                 <h4 className="font-semibold">{item.name}</h4>
//                                 <p className="text-xs opacity-70">
//                                     Egg curry with tomato and cucumbers. Chef’s special.
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Right Info Card */}
//                 <div className="relative bg-[#3b1d12]/60 backdrop-blur-xl rounded-3xl p-6 pt-28 text-[#f5e6c8] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] max-w-lg mx-20 w-110">

//                     {/* Overlapping Circle – perfectly on top-left corner */}
//                     <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 
//                   w-90 h-90 rounded-full overflow-hidden 
//                   bg-black shadow-2xl border border-white/10">
//                         <Image
//                             src="https://images.unsplash.com/photo-1701690263387-f6efbeb12e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZSU1Q3xlbnwwfHwwfHx8MA%3D%3D" alt="Egg Curry Noodles"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>

//                     {/* Icons */}
//                     <div className="absolute top-6 right-6 flex flex-col gap-4">
//                         <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
//                             <Heart size={18} />
//                         </button>
//                         <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
//                             <Bookmark size={18} />
//                         </button>
//                     </div>

//                     {/* Content */}
//                     <div className="mt-44">
//                         <h3 className=" font-baloo font-script text-3xl mb-5">
//                             Egg Curry Noodles
//                         </h3>

//                         <p className="text-sm opacity-80 mt-2">
//                             Eggs curry with tomato and cucumbers. Our chef’s special healthy
//                             and fat-free dish.
//                         </p>

//                         <div className="flex items-center justify-between mt-6">
//                             <span className="bg-[#f5e6c8] text-[#3b1d12] px-4 py-1 rounded-full text-sm font-medium">
//                                 25 mins
//                             </span>

//                             <span className="text-sm font-semibold text-gray-300">
//                                 Total Price :  <span className=" text-2xl text-amber-100 font-bold">350 Rs.</span>
//                             </span> 
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import Image from "next/image";
import { Heart, Bookmark, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function OurTopPicks() {
    const menuItems = [
        {
            id: 1,
            name: "Egg Curry Noodles",
            description: "Egg curry with tomato and cucumbers. Chef's special healthy and fat-free dish.",
            fullDescription: "Fresh egg noodles tossed in a rich tomato and cucumber curry sauce with aromatic spices. Our chef's special healthy and fat-free dish that's both nutritious and delicious.",
            price: "350 Rs.",
            time: "25 mins",
            rating: 4.8,
            reviews: 124,
            image: "https://images.unsplash.com/photo-1562823159-ad2c5bd36cf7?w=600&auto=format&fit=crop&q=60",
            calories: "320 cal",
            category: "Special"
        },
        {
            id: 2,
            name: "Jumbo Whopper",
            description: "Double patty burger with special sauce.",
            fullDescription: "Our signature double patty burger with fresh lettuce, tomatoes, pickles, and special whopper sauce. Served with crispy fries on the side.",
            price: "450 Rs.",
            time: "20 mins",
            rating: 4.9,
            reviews: 256,
            image: "https://media.istockphoto.com/id/939219626/photo/french-fries-a-big-burger-and-beer-on-a-concrete-board.jpg?s=612x612&w=0&k=20&c=yRVx3T0VcFuI_efbmNw2HcENtiHjah87El9Q6tDnCHI=",
            calories: "580 cal",
            category: "Popular"
        },
        {
            id: 3,
            name: "Croissants",
            description: "Freshly baked buttery croissants.",
            fullDescription: "Authentic French croissants baked fresh daily with layers of butter, perfectly flaky and golden brown. Best served warm.",
            price: "180 Rs.",
            time: "15 mins",
            rating: 4.6,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb2lzc2FudHxlbnwwfHwwfHx8MA%3D%3D",
            calories: "280 cal",
            category: "Breakfast"
        },
        {
            id: 4,
            name: "Prawns",
            description: "Spicy prawn masala with herbs.",
            fullDescription: "Fresh prawns cooked in a spicy masala sauce with aromatic herbs and spices. Served with steamed rice or naan bread.",
            price: "520 Rs.",
            time: "30 mins",
            rating: 4.7,
            reviews: 167,
            image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJhd25zfGVufDB8fDB8fHww",
            calories: "420 cal",
            category: "Seafood"
        }
    ];

    const [activeItem, setActiveItem] = useState(menuItems[0]);
    const [itemIndex, setItemIndex] = useState(0);

    // Auto-rotate items every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setItemIndex(prev => {
                const nextIndex = (prev + 1) % menuItems.length;
                setActiveItem(menuItems[nextIndex]);
                return nextIndex;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleItemClick = (item) => {
        setActiveItem(item);
        setItemIndex(menuItems.findIndex(i => i.id === item.id));
    };

    return (
        <section className="relative w-full min-h-screen bg-[#2b0505]  py-16 text-[#f6e7c8] overflow-hidden">

            {/* Top Border Image */}
            <div className="absolute top-0 left-0 w-full z-20">
                <Image
                    src="/home/bottomBoarder.svg"
                    alt="Border"
                    width={1920}
                    height={100}
                    className="w-full"
                    priority
                />
            </div>

            {/* Header */}
            <div className="mb-14 mt-20 px-6  md:px-20">
                <p className="italic text-lg font-pacifico opacity-80">
                    Tried, tested, and loved by our customers
                </p>
                <h2 className="text-4xl md:text-5xl font-baloo font-extrabold mt-2">
                    Our Top Picks
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left List */}
                <div className="space-y-6 ">
                    {menuItems.map((item, i) => (
                        <div
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className={`flex items-center  gap-4 px-25 py-5 backdrop-blur-md cursor-pointer relative transition-all duration-300
                       bg-gradient-to-r from-[#d5ac83] via-[#8a4500] to-[#2D080A] `}
                        >

                            {/* Image */}
                            <div className="w-20 h-20 rounded-full overflow-hidden 
                border-2 border-amber-950 
                shadow-[0_8px_20px_rgba(99,46,3,0.9)]">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={84}
                                    height={64}
                                    className="object-cover w-full h-full"
                                />
                            </div>


                            {/* Text */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-2xl text-[#F5EFE6] font-pacifico">{item.name}</h4>
                                </div>
                                <p className="text-sm opacity-70 text-white font-semibold mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Info Card */}
                <div className="relative">
                    <div className="relative bg-[#3b1d12]/60 backdrop-blur-xl rounded-3xl p-6 pt-28 text-[#f5e6c8] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] max-w-lg mx-auto w-full">

                        {/* Overlapping Circle */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full overflow-hidden bg-black shadow-2xl border-2 border-[#d4a574]/30">
                            <Image
                                src={activeItem.image}
                                alt={activeItem.name}
                                fill
                                className="object-cover transition-opacity duration-500"
                                key={activeItem.id}
                            />

                        </div>

                        {/* Icons */}
                        <div className="absolute top-6 right-6 flex flex-col gap-4">
                            <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                                <Heart size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                                <Bookmark size={18} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-42 space-y-7">
                            <h3 className="font-baloo text-5xl font-bold">{activeItem.name}</h3>
                            <p className="text-md opacity-80 leading-relaxed">{activeItem.fullDescription}</p>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-6 border-t border-white/10 pt-4">
                                <span className="bg-[#f5e6c8] text-[#3b1d12] px-4 py-3 rounded-full text-sm font-medium">
                                    {activeItem.time} delivery
                                </span>
                                <span className="text-2xl text-amber-100 font-bold"><span className="text-sm text-gray-200">Total : </span>{activeItem.price}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
