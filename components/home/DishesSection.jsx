// "use client";

// import Image from "next/image";

// export default function DiashesSection() {
//   return (
//     <section className="relative min-h-screen bg-[#D4A373] overflow-hidden  md:px-24 py-20">
//       {/* Curved decorative lines */}
//     <svg
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         viewBox="0 0 1440 900"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M-100 380 C 300 250, 600 520, 900 380 C 1150 260, 1350 420, 1600 320"
//           stroke="#8B5E3C"
//           strokeWidth="2"
//           opacity="0.35"
//         />
//         <path
//           d="M-100 520 C 300 420, 600 650, 900 520 C 1150 420, 1350 650, 1600 520"
//           stroke="#8B5E3C"
//           strokeWidth="2"
//           opacity="0.25"
//         />
//       </svg> 



//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//         {/* Left text */}
//         <div>
//           <p className="font-pacifico text-brown tracking-wide text-2xl mb-4">
//             Fresh. Flavorful. Made with Love.
//           </p>

//           <h1 className="font-baloo text-shadow text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
//             Authentic Flavours
//             <br />
//             That Feel Like
//             <br />
//             Home
//           </h1>
//         </div>

//         {/* Main pan image */}
//         <div className="relative flex justify-center">
//           <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
//             <Image
//               src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
//               alt="Authentic Dish"
//               fill
//               priority
//               className="object-contain drop-shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Floating blurred dishes */}
//       <div className="absolute left-16 bottom-32 w-28 h-28 blur-sm opacity-80">
//         <Image
//           src="/images/dish-left.png"
//           alt="Side Dish"
//           fill
//           className="object-contain"
//         />
//       </div>

//       <div className="absolute right-24 top-28 w-32 h-32 blur-sm opacity-80">
//         <Image
//           src="/images/dish-right.png"
//           alt="Dessert"
//           fill
//           className="object-contain"
//         />
//       </div>

//       {/* Bottom decorative border */}
//       <div className="absolute bottom-0 left-0 w-full border-t border-brown/40">
//         <div className="flex justify-center gap-4 py-3">
//           {[...Array(14)].map((_, i) => (
//             <span key={i} className="text-brown text-xl">❀</span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";

// export default function DishesSection() {
//     return (
//         <section className="relative min-h-screen bg-[#D4A373] overflow-hidden md:px-24 py-20">

//             {/* ================= Decorative Curve Image ================= */}
//             <div className="absolute inset-y-0 left-[5] right-[110px] bottom-[40px] z-0 pointer-events-none">
//                 <Image
//                     src="/home/curve.svg"
//                     alt="Decorative Curves"
//                     fill
//                     priority
//                     className="object-cover opacity-60"
//                 />
//             </div>




//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

//                 {/* -------- Left Text -------- */}
//                 <div>
//                     <p className="font-pacifico text-brown tracking-wide text-2xl mb-4">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-shadow text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
//                         Authentic Flavours
//                         <br />
//                         That Feel Like
//                         <br />
//                         Home
//                     </h1>
//                 </div>

//                 {/* -------- Main Pan Image -------- */}
//                 <div className="relative flex justify-center z-10">
//                     <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] translate-y-6">
//                         <Image
//                             src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900&auto=format&fit=crop"
//                             alt="Authentic Dish"
//                             fill
//                             priority
//                             className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)] rounded-full"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Floating Side Dishes ================= */}

//             {/* Left Dish */}
//             <div className="absolute left-20 bottom-40 w-28 h-28 blur-md opacity-80 z-10">
//                 <Image
//                     src="/images/dish-left.png"
//                     alt="Side Dish"
//                     fill
//                     className="object-contain"
//                 />
//             </div>

//             {/* Right Dish */}
//             <div className="absolute right-28 top-32 w-32 h-32 blur-md opacity-80 z-10">
//                 <Image
//                     src="/images/dish-right.png"
//                     alt="Dessert"
//                     fill
//                     className="object-contain"
//                 />
//             </div>

//             {/* ================= Bottom Decorative Border ================= */}
//             <div className="absolute bottom-0 left-0 w-full border-t border-brown/40 z-10">
//                 <div className="flex justify-center gap-4 py-3">
//                     {[...Array(14)].map((_, i) => (
//                         <span key={i} className="text-brown text-xl">❀</span>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// "use client";

// import Image from "next/image";

// export default function DishesSection() {
//     return (
//         <section className="relative min-h-screen bg-[#D4A373] overflow-hidden px-4 sm:px-6 md:px-24 py-20">

//             {/* ================= Decorative Curve Image - Fixed Position ================= */}
//             <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/home/curve.svg" // Make sure this file exists in your public/home folder
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-cover object-center opacity-50"
//                         style={{ 
//                             width: '100%',
//                             height: '100%',
//                             objectFit: 'contain',
//                             bottom: '20'
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

//                 {/* -------- Left Text -------- */}
//                 <div className="text-center lg:text-left">
//                     <p className="font-pacifico text-[#8B4513] tracking-wide text-2xl md:text-3xl mb-6">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
//                         <span className="text-white">Authentic</span>
//                         <br />
//                         <span className="text-[#8B4513]">Flavours</span>
//                     </h1>

//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
//                         That Feel Like Home
//                     </h2>
//                 </div>

//                 {/* -------- Main Pan Image -------- */}
//                 <div className="relative flex justify-center items-center z-10">
//                     <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
//                         {/* Optional: Add a decorative circle behind the image */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-transparent rounded-full blur-xl"></div>

//                         <div className="relative w-full h-full">
//                             <Image
//                                 src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900&auto=format&fit=crop"
//                                 alt="Authentic Dish"
//                                 fill
//                                 priority
//                                 sizes="(max-width: 768px) 280px, (max-width: 1024px) 380px, 420px"
//                                 className="object-cover rounded-full border-8 border-white/20 shadow-2xl"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Floating Side Dishes ================= */}

//             {/* Top Left Dish - Hidden on mobile */}

//             {/* Bottom Left Dish */}
//             <div className="absolute left-4 bottom-20 w-20 h-20 md:left-12 md:bottom-24 md:w-28 md:h-28 z-10">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
//                         alt="Side Dish"
//                         fill
//                         className="object-contain blur-[2px] opacity-80"
//                     />
//                 </div>
//             </div>

//             {/* Top Right Dish */}
//             <div className="absolute right-4 top-20 w-20 h-20 md:right-12 md:top-24 md:w-28 md:h-28 z-10">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" // Make sure this exists
//                         alt="Dessert"
//                         fill
//                         className="object-contain blur-[2px] opacity-80"
//                     />
//                 </div>
//             </div>



//             {/* ================= Bottom Decorative Border ================= */}
//             <div className="absolute bottom-0 left-0 w-full border-t border-[#8B4513]/30 z-10">
//                 <div className="flex justify-center gap-2 md:gap-4 py-3 bg-gradient-to-t from-[#8B4513]/10 to-transparent">
//                     {[...Array(14)].map((_, i) => (
//                         <span key={i} className="text-[#8B4513] text-xl md:text-2xl">❀</span>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// export default function DishesSection() {
//     const circleRef = useRef(null);

//     useEffect(() => {
//         // Create rotating animation for the central circle
//         const circle = circleRef.current;
//         if (!circle) return;

//         let rotation = 0;
//         const rotateCircle = () => {
//             rotation += 0.2; // Adjust speed here
//             circle.style.transform = `rotate(${rotation}deg)`;
//             requestAnimationFrame(rotateCircle);
//         };

//         const animationId = requestAnimationFrame(rotateCircle);

//         return () => {
//             cancelAnimationFrame(animationId);
//         };
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-gradient-to-br from-[#D4A373] to-[#C2854A] overflow-hidden px-4 sm:px-6 md:px-24 py-20">

//             {/* ================= Decorative Curve Image - Properly Positioned ================= */}
//             <div className="absolute bottom-0 left-20 right-35 h-2/8 z-0 pointer-events-none">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/home/curve.svg"
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-contain object-bottom opacity-60"
//                         sizes="100vw"
//                     />
//                 </div>
//                 {/* Fallback gradient if image doesn't load
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/20 via-transparent to-transparent"></div> */}
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

//                 {/* -------- Left Text -------- */}
//                 <div className="text-center lg:text-left">
//                     <p className="font-pacifico text-[#8B4513] tracking-wide text-2xl md:text-3xl mb-6">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
//                         <span className="text-white drop-shadow-lg">Authentic</span>
//                         <br />
//                         <span className="text-[#8B4513] drop-shadow-lg">Flavours</span>
//                     </h1>

//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
//                         That Feel Like Home
//                     </h2>
//                 </div>

//                 {/* -------- Animated Rotating Circle Container -------- */}
//                 <div className="relative flex justify-center items-center z-10">
//                     {/* Outer rotating decorative ring */}
//                     <div
//                         ref={circleRef}
//                         className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border-4 border-white/10 animate-spin-slow"
//                         style={{ animation: 'spin 20s linear infinite' }}
//                     >
//                         {/* Decorative dots around the circle */}
//                         {[...Array(12)].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="absolute w-4 h-4 bg-[#8B4513]/40 rounded-full"
//                                 style={{
//                                     top: '50%',
//                                     left: '50%',
//                                     transform: `
//                                         translate(-50%, -50%) 
//                                         rotate(${i * 30}deg) 
//                                         translateY(-250px)
//                                     `,
//                                 }}
//                             ></div>
//                         ))}
//                     </div>

//                     {/* Main Image Container */}
//                     <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
//                         <div className="relative w-full h-full">
//                             <div
//                                 className={` relative
//     w-full
//     h-full
//     overflow-hidden
//     rounded-full
//     border-8 border-white/30
//     shadow-2xl
//     -translate-50
//     translate-y-[100px]
//     hover:scale-105
//     transition-transform
//     duration-700
//   `}

//                             >

//                                 <Image
//                                     src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900&auto=format&fit=crop"
//                                     alt="Authentic Dish"
//                                     fill
//                                     priority
//                                     sizes="(max-width: 768px) 380px, (max-width: 1024px) 380px, 420px"
//                                     className="object-cover hover:scale-110 transition-transform duration-1000"
//                                 />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             {/* ================= Floating Side Dishes ================= */}

//             {/* Bottom Left Dish */}
//             <div className="absolute left-80 bottom-20  w-56 h-56 md:left-22 md:bottom-20 md:w-[180px] md:h-[180px] z-10 ">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60"
//                         alt="Side Dish"
//                         fill
//                         className="object-cover rounded-full border-4 border-white/20 shadow-lg"
//                     />
//                 </div>
//             </div>


//             {/* Top Right Dish */}
//             <div className="absolute right-4 top-[20px] w-56 h-56 md:right-12 md:top-12 md:w-64 md:h-64 z-10 ">
//                 <div className="relative w-full h-full">
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-transparent rounded-full blur-md"></div>

//                     <Image
//                         src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600&auto=format&fit=crop&q=60"
//                         alt="Dessert"
//                         fill
//                         className="object-cover rounded-full border-4 border-white/20 shadow-lg"
//                     />
//                 </div>
//             </div>


//             {/* ================= Bottom Decorative Border ================= */}
//             <div className="absolute bottom-0 left-0 w-full z-10">
//                 <div className="flex justify-center gap-2 md:gap-4 py-4 bg-gradient-to-t from-[#8B4513]/20 to-transparent border-t border-[#8B4513]/30">
//                     {[...Array(14)].map((_, i) => (
//                         <span
//                             key={i}
//                             className="text-[#8B4513] text-xl md:text-2xl animate-bounce"
//                             style={{ animationDelay: `${i * 0.1}s` }}
//                         >
//                             ❀
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Add CSS animations */}
//             <style jsx>{`
//                 @keyframes spin {
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(360deg); }
//                 }

//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px); }
//                     50% { transform: translateY(-20px); }
//                 }

//                 @keyframes ping-slow {
//                     0%, 100% { opacity: 1; transform: scale(1); }
//                     50% { opacity: 0.5; transform: scale(1.05); }
//                 }

//                 @keyframes pulse-slow {
//                     0%, 100% { opacity: 0.7; }
//                     50% { opacity: 0.4; }
//                 }

//                 .animate-spin-slow {
//                     animation: spin 20s linear infinite;
//                 }

//                 .animate-float {
//                     animation: float 6s ease-in-out infinite;
//                 }

//                 .animate-float-delayed {
//                     animation: float 6s ease-in-out infinite 1.5s;
//                 }

//                 .animate-ping-slow {
//                     animation: ping-slow 4s ease-in-out infinite;
//                 }

//                 .animate-pulse-slow {
//                     animation: pulse-slow 3s ease-in-out infinite;
//                 }
//             `}</style>
//         </section>
//     );
// }



// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// export default function DishesSection() {
//     const circleRef = useRef(null);

//     useEffect(() => {
//         const circle = circleRef.current;
//         if (!circle) return;

//         let rotation = 0;
//         const rotate = () => {
//             rotation += 0.2;
//             circle.style.transform = `rotate(${rotation}deg)`;
//             requestAnimationFrame(rotate);
//         };

//         requestAnimationFrame(rotate);
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-gradient-to-t from-[#5e3017] via-[#ab5f25] to-[#f0aa5a] overflow-hidden px-4 md:px-24 py-20">

//             {/* ================= Decorative Curve ================= */}
//             <div className="absolute bottom-0 left-[20px] right-0 h-[25%] z-0 pointer-events-none">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/home/curve.svg"
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-contain object-bottom opacity-60"
//                     />
//                 </div>
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

//                 {/* -------- Left Text -------- */}
//                 <div className="text-center mb-50 lg:text-left">
//                     <p className="font-pacifico text-[#4E342E] text-2xl md:text-3xl mb-6">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight">
//                         <span className="text-[#2D080A]">Authentic Flavours</span>
//                         <br />
//                         <h2 className="mt-4 text-5xl md:text-5xl font-bold text-[#2D080A]">
//                             That Feel Like
//                         </h2>
//                         <h2 className="mt-4 text-5xl md:text-5xl font-bold text-[#2D080A]">
//                             Home
//                         </h2>
//                     </h1>


//                 </div>

//                 {/* -------- Center Dish -------- */}
//                 <div className="relative flex justify-center items-center">

//                     {/* Rotating Ring */}
//                     <div
//                         ref={circleRef}
//                         className="absolute w-[450px] h-[450px] rounded-full"
//                     >

//                     </div>

//                     {/* Main Dish */}
//                     <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-white/30 shadow-2xl translate-1 translate-y-[90px] right-[120px]">
//                         <Image
//                             src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900"
//                             alt="Authentic Dish"
//                             fill
//                             className="object-cover hover:scale-110 transition duration-1000"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Side Dishes ================= */}

//             {/* Left Dish */}
//             <div className="absolute left-[200px] bottom-[170px] w-[180px] h-[180px] z-10">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600"
//                         alt="Side Dish"
//                         fill
//                         className="object-cover rounded-full border-4 border-white/20 shadow-lg"
//                     />
//                 </div>
//             </div>

//             {/* Right Dish */}
//             <div className="absolute right-[40px] top-[40px] w-[220px] h-[220px] z-10">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600"
//                         alt="Dessert"
//                         fill
//                         className="object-cover rounded-full border-4 border-white/20 shadow-lg"
//                     />
//                 </div>
//             </div>

//             {/* ================= Bottom Border ================= */}
//             <div className="absolute bottom-0 left-0 w-full z-10">
//                 <div className="flex justify-center gap-3 py-4 border-t border-[#8B4513]/30">
//                     {[...Array(14)].map((_, i) => (
//                         <span key={i} className="text-[#8B4513] text-xl">❀</span>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// export default function DishesSection() {
//     const circleRef = useRef(null);

//     // Keep the background ring rotating
//     useEffect(() => {
//         const circle = circleRef.current;
//         if (!circle) return;

//         let rotation = 0;
//         const rotate = () => {
//             rotation += 0.2;
//             circle.style.transform = `rotate(${rotation}deg)`;
//             requestAnimationFrame(rotate);
//         };

//         requestAnimationFrame(rotate);
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-gradient-to-t from-[#5e3017] via-[#ab5f25] to-[#f0aa5a] overflow-hidden px-4 md:px-24 py-20">

//             {/* ================= Animation Styles ================= */}
//             <style jsx>{`
//                 @keyframes flowCycle1 {
//                     0% { transform: translate(0, 0) scale(1); z-index: 20; }
//                     25% { transform: translate(0, 0) scale(1); z-index: 20; }
//                     33% { transform: translate(380px, -110px) scale(0.6); z-index: 10; }
//                     58% { transform: translate(380px, -110px) scale(0.6); z-index: 10; }
//                     66% { transform: translate(-320px, 80px) scale(0.5); z-index: 10; }
//                     91% { transform: translate(-320px, 80px) scale(0.5); z-index: 10; }
//                     100% { transform: translate(0, 0) scale(1); z-index: 20; }
//                 }

//                 @keyframes flowCycle2 {
//                     0% { transform: translate(380px, -110px) scale(0.6); z-index: 10; }
//                     25% { transform: translate(380px, -110px) scale(0.6); z-index: 10; }
//                     33% { transform: translate(-320px, 80px) scale(0.5); z-index: 10; }
//                     58% { transform: translate(-320px, 80px) scale(0.5); z-index: 10; }
//                     66% { transform: translate(0, 0) scale(1); z-index: 20; }
//                     91% { transform: translate(0, 0) scale(1); z-index: 20; }
//                     100% { transform: translate(380px, -110px) scale(0.6); z-index: 10; }
//                 }

//                 @keyframes flowCycle3 {
//                     0% { transform: translate(-320px, 80px) scale(0.5); z-index: 10; }
//                     25% { transform: translate(-320px, 80px) scale(0.5); z-index: 10; }
//                     33% { transform: translate(0, 0) scale(1); z-index: 20; }
//                     58% { transform: translate(0, 0) scale(1); z-index: 20; }
//                     66% { transform: translate(380px, -110px) scale(0.6); z-index: 10; }
//                     91% { transform: translate(380px, -110px) scale(0.6); z-index: 10; }
//                     100% { transform: translate(-320px, 80px) scale(0.5); z-index: 10; }
//                 }
//             `}</style>

//             {/* ================= Decorative Curve ================= */}
//             <div className="absolute bottom-0 left-[20px] right-0 h-[25%] z-0 pointer-events-none">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/home/curve.svg"
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-contain object-bottom opacity-60"
//                     />
//                 </div>
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

//                 {/* -------- Left Text -------- */}
//                 <div className="text-center mb-50 lg:text-left">
//                     <p className="font-pacifico text-[#4E342E] text-2xl md:text-3xl mb-6">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight">
//                         <span className="text-[#2D080A]">Authentic Flavours</span>
//                         <br />
//                         <h2 className="mt-4 text-5xl md:text-5xl font-bold text-[#2D080A]">
//                             That Feel Like
//                         </h2>
//                         <h2 className="mt-4 text-5xl md:text-5xl font-bold text-[#2D080A]">
//                             Home
//                         </h2>
//                     </h1>
//                 </div>

//                 {/* -------- Center Dish (Container for Animation) -------- */}
//                 <div className="relative flex justify-center items-center h-[600px]">

//                     {/* Rotating Background Ring */}
//                     <div
//                         ref={circleRef}
//                         className="absolute w-[450px] h-[450px] rounded-full border border-white/10"
//                     ></div>

//                     {/* IMAGE 1: Main Dish (Starts Center) -> Goes to Right Position */}
//                     <div 
//                         className="absolute w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-white/30 shadow-2xl origin-center"
//                         style={{ 
//                             animation: "flowCycle1 9s infinite linear",
//                         }}
//                     >
//                         <Image
//                             src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900"
//                             alt="Main Dish"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>

//                     {/* IMAGE 2: Right Dish (Starts Top Right) -> Goes to Left Position */}
//                     <div 
//                         className="absolute w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white/20 shadow-lg origin-center"
//                         style={{ 
//                             // Initial Position: right-[40px] top-[40px]
//                             // Offset to center: translate(-380px, 110px) roughly
//                             animation: "flowCycle2 9s infinite linear",
//                         }}
//                     >
//                         <Image
//                             src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600"
//                             alt="Dessert"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>

//                     {/* IMAGE 3: Left Dish (Starts Bottom Left) -> Goes to Center Position */}
//                     <div 
//                         className="absolute w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white/20 shadow-lg origin-center"
//                         style={{ 
//                             // Initial Position: left-[200px] bottom-[170px]
//                             // Offset to center: translate(320px, -80px) roughly
//                             animation: "flowCycle3 9s infinite linear",
//                         }}
//                     >
//                         <Image
//                             src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600"
//                             alt="Side Dish"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Bottom Border ================= */}
//             <div className="absolute bottom-0 left-0 w-full z-10">
//                 <div className="flex justify-center gap-3 py-4 border-t border-[#8B4513]/30">
//                     {[...Array(14)].map((_, i) => (
//                         <span key={i} className="text-[#8B4513] text-xl">❀</span>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// export default function DishesSection() {
//     const circleRef = useRef(null);
//     const [dishPositions, setDishPositions] = useState([0, 1, 2]);

//     // Dish images array
//     const dishes = [
//         "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900",
//         "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
//         "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600"
//     ];

//     useEffect(() => {
//         const circle = circleRef.current;
//         if (!circle) return;

//         let rotation = 0;
//         const rotate = () => {
//             rotation += 0.2;
//             circle.style.transform = `rotate(${rotation}deg)`;
//             requestAnimationFrame(rotate);
//         };

//         requestAnimationFrame(rotate);
//     }, []);

//     // Rotate dishes every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setDishPositions(prev => {
//                 // Move each dish to the next position
//                 return prev.map(pos => (pos + 1) % 3);
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-[#1e0506] 
//  overflow-hidden px-4 md:px-24 py-20">

//             {/* ================= Decorative Curve ================= */}
//             <div className="absolute bottom-0 left-[20px] right-0 h-[25%] z-0 pointer-events-none">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/home/curve.svg"
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-contain object-bottom opacity-60"
//                     />
//                 </div>
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

//                 {/* -------- Left Text -------- */}
//                 <div className="text-center mb-50 lg:text-left">
//                     <p className="font-pacifico text-[#f5dfda] text-2xl md:text-3xl mb-6">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                    <h1 className="font-baloo text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight text-[#f5dfda]">
//   <span>Authentic Flavours</span>
//   <br />
//   <span className="block mt-4 text-5xl md:text-5xl font-bold">
//     That Feel Like
//   </span>
//   <span className="block mt-4 text-5xl md:text-5xl font-bold">
//     Home
//   </span>
// </h1>

//                 </div>

//                 {/* -------- Center Dish (Position 0) -------- */}
//                 <div className="relative flex justify-center items-center">

//                     {/* Rotating Ring */}
//                     <div
//                         ref={circleRef}
//                         className="absolute w-[450px] h-[450px] rounded-full"
//                     >
//                     </div>

//                     {/* Main Dish with transition */}
//                     <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden white-circle-shadow translate-y-[90px] right-[120px]">
//                         <Image
//                             src={dishes[dishPositions.indexOf(0)]}
//                             alt="Authentic Dish"
//                             fill
//                             className="object-cover hover:scale-110 transition-all duration-1000"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Side Dishes ================= */}

//             {/* Left Dish (Position 1) */}
//             <div className="absolute left-[200px] bottom-[170px] w-[180px] h-[180px] z-10">
//                 <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white/20 shadow-lg">
//                     <Image
//                         src={dishes[dishPositions.indexOf(1)]}
//                         alt="Side Dish"
//                         fill
//                         className="object-cover transition-all duration-1000"
//                     />
//                 </div>
//             </div>

//             {/* Right Dish (Position 2) */}
//             <div className="absolute right-[40px] top-[40px] w-[220px] h-[220px] z-10">
//                 <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white/20 shadow-lg">
//                     <Image
//                         src={dishes[dishPositions.indexOf(2)]}
//                         alt="Dessert"
//                         fill
//                         className="object-cover transition-all duration-1000"
//                     />
//                 </div>
//             </div>

//             {/* ================= Bottom Border ================= */}
//             <div className="absolute bottom-0 left-0 w-full z-10">
//                 <div className="flex justify-center gap-3 py-4 border-t border-[#8B4513]/30">
//                     {[...Array(14)].map((_, i) => (
//                         <span key={i} className="text-[#8B4513] text-xl">❀</span>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// export default function DishesSection() {
//     const circleRef = useRef(null);
//     const [dishPositions, setDishPositions] = useState([0, 1, 2]);

//     // Dish images array
//     const dishes = [
//         "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900",
//         "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
//         "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600"
//     ];

//     useEffect(() => {
//         const circle = circleRef.current;
//         if (!circle) return;

//         let rotation = 0;
//         const rotate = () => {
//             rotation += 0.2;
//             circle.style.transform = `rotate(${rotation}deg)`;
//             requestAnimationFrame(rotate);
//         };

//         requestAnimationFrame(rotate);
//     }, []);

//     // Rotate dishes every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setDishPositions(prev => {
//                 // Move each dish to the next position
//                 return prev.map(pos => (pos + 1) % 3);
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-[#1e0506] overflow-hidden px-4 md:px-24 py-20">

//             {/* ================= Decorative Curve ================= */}
//             <div className="absolute bottom-0 left-[20px] right-0 h-[25%] z-0 pointer-events-none">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/home/curve.svg"
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-contain object-bottom opacity-60"
//                     />
//                 </div>
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

//                 {/* -------- Left Text -------- */}
//                 <div className="text-center mb-50 lg:text-left">
//                     <p className="font-pacifico text-[#f5dfda] text-2xl md:text-3xl mb-3">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight text-[#f5dfda]">
//                         <span>Authentic Flavours</span>
//                         <br />
//                         <span className="block mt-4 text-5xl md:text-5xl font-bold">
//                             That Feel Like
//                         </span>
//                         <span className="block mt-4 text-5xl md:text-5xl font-bold">
//                             Home
//                         </span>
//                     </h1>
//                     {/* ================= Features Section ================= */}

//                     <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2">
//                         Fast Delivery
//                     </h3>

//                     <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2">
//                         Hygienic Kitchen
//                     </h3>

//                     <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2">
//                         4.7 Google Rating
//                     </h3>
//                 </div>

//                 {/* -------- Center Dish (Position 0) -------- */}
//                 <div className="relative flex justify-center items-center">

//                     {/* Rotating Ring */}
//                     <div
//                         ref={circleRef}
//                         className="absolute w-[450px] h-[450px] rounded-full"
//                     >
//                     </div>

//                     {/* Main Dish with transition */}
//                     <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden white-circle-shadow translate-y-[30px] right-[120px]">
//                         <Image
//                             src={dishes[dishPositions.indexOf(0)]}
//                             alt="Authentic Dish"
//                             fill
//                             className="object-cover hover:scale-110 transition-all duration-1000"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Side Dishes ================= */}

//             {/* Left Dish (Position 1) */}
//             <div className="absolute left-[350px] bottom-[120px] w-[180px] h-[180px] z-10 blur-xs">
//                 <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg">
//                     <Image
//                         src={dishes[dishPositions.indexOf(1)]}
//                         alt="Side Dish"
//                         fill
//                         className="object-cover transition-all duration-1000"
//                     />
//                 </div>
//             </div>

//             {/* Right Dish (Position 2) */}
//             <div className="absolute right-[40px] top-[40px] w-[220px] h-[220px] z-10 blur-xs">
//                 <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg">
//                     <Image
//                         src={dishes[dishPositions.indexOf(2)]}
//                         alt="Dessert"
//                         fill
//                         className="object-cover transition-all duration-1000"
//                     />
//                 </div>
//             </div>


//             {/* ================= Bottom Border ================= */}
//             <div className="absolute bottom-0 left-0 w-full z-10">
//                 <div className="flex justify-center gap-3 py-4 border-t border-[#8B4513]/30">
//                     {[...Array(14)].map((_, i) => (
//                         <span key={i} className="text-[#8B4513] text-xl">❀</span>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// export default function DishesSection() {
//     const circleRef = useRef(null);
//     const [dishPositions, setDishPositions] = useState([0, 1, 2]);
//     const [isAnimating, setIsAnimating] = useState(false);

//     // Dish images array
//     const dishes = [
//         "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900",
//         "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
//         "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600"
//     ];

//     // Enhanced rotating circle animation
//     useEffect(() => {
//         const circle = circleRef.current;
//         if (!circle) return;

//         let rotation = 0;
//         const rotate = () => {
//             rotation += 0.3; // Slightly faster rotation
//             circle.style.transform = `rotate(${rotation}deg)`;
//             circle.style.transition = "transform 0.1s linear"; // Smooth rotation
//             requestAnimationFrame(rotate);
//         };

//         requestAnimationFrame(rotate);
//     }, []);

//     // Rotate dishes with smooth animations
//     useEffect(() => {
//         const rotateDishes = () => {
//             setIsAnimating(true);
//             setDishPositions(prev => {
//                 return prev.map(pos => (pos + 1) % 3);
//             });

//             // Reset animation state
//             setTimeout(() => {
//                 setIsAnimating(false);
//             }, 1000);
//         };

//         // Initial delay
//         const initialTimeout = setTimeout(() => {
//             rotateDishes();
//         }, 1000);

//         // Set interval for rotation
//         const interval = setInterval(rotateDishes, 3000);

//         return () => {
//             clearTimeout(initialTimeout);
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-[#1e0506] overflow-hidden px-4 md:px-24 py-20">

//             {/* ================= Decorative Curve with Animation ================= */}
//             <div className="absolute bottom-0 left-[20px] right-0 h-[25%] z-0 pointer-events-none">
//                 <div className="relative w-full h-full animate-float" style={{ animation: 'float 6s ease-in-out infinite' }}>
//                     <Image
//                         src="/home/curve.svg"
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-contain object-bottom opacity-60 transition-all duration-1000 hover:opacity-80"
//                     />
//                 </div>
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

//                 {/* -------- Left Text with Fade In Animation -------- */}
//                 <div className="text-center mb-50 lg:text-left animate-fadeIn">
//                     <p className="font-pacifico text-[#f5dfda] text-2xl md:text-3xl mb-3 animate-pulse">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight text-[#f5dfda]">
//                         <span className="inline-block animate-slideInLeft">Authentic Flavours</span>
//                         <br />
//                         <span className="block mt-4 text-5xl md:text-5xl font-bold animate-slideInLeft delay-100">
//                             That Feel Like
//                         </span>
//                         <span className="block mt-4 text-5xl md:text-5xl font-bold animate-slideInLeft delay-200">
//                             Home
//                         </span>
//                     </h1>

//                     {/* ================= Features with Hover Effects ================= */}
//                     <div className="mt-8 space-y-4">
//                         <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2 
//                                      transform transition-all duration-300 hover:scale-105 hover:translate-x-2 
//                                      hover:text-[#ffd700] cursor-pointer">
//                             🚚 Fast Delivery
//                         </h3>

//                         <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2 
//                                      transform transition-all duration-300 hover:scale-105 hover:translate-x-2 
//                                      hover:text-[#ffd700] cursor-pointer">
//                             🧼 Hygienic Kitchen
//                         </h3>

//                         <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2 
//                                      transform transition-all duration-300 hover:scale-105 hover:translate-x-2 
//                                      hover:text-[#ffd700] cursor-pointer">
//                             ⭐ 4.7 Google Rating
//                         </h3>
//                     </div>
//                 </div>

//                 {/* -------- Center Dish (Position 0) with Enhanced Animation -------- */}
//                 <div className="relative flex justify-center items-center">

//                     {/* Rotating Ring with Glow Effect */}
//                     {/* <div
//                         ref={circleRef}
//                         className="absolute w-[450px] h-[450px] rounded-full 
//                                  border-2 border-[#f5dfda]/30 animate-pulse"
//                         style={{
//                             boxShadow: '0 0 60px rgba(245, 223, 218, 0.3)',
//                         }}
//                     >
//                     </div> */}

//                     {/* Main Dish with enhanced transition */}
//                     <div className={`relative w-[450px] h-[450px] rounded-full overflow-hidden 
//                                    white-circle-shadow translate-y-[30px] right-[120px]
//                                    ${isAnimating ? 'scale-95 rotate-3' : 'scale-110 rotate-0'}
//                                    transition-all duration-900 ease-out`}
//                       >
//                         <Image
//                             src={dishes[dishPositions.indexOf(0)]}
//                             alt="Authentic Dish"
//                             fill
//                             className="object-cover transition-all duration-700 hover:scale-110"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Side Dishes with Enhanced Animations ================= */}

//             {/* Left Dish (Position 1) */}
//             <div className={`absolute left-[350px] bottom-[120px] w-[180px] h-[180px] z-10
//                            ${isAnimating ? 'translate-x-4 translate-y-4' : 'translate-x-0 translate-y-0'}
//                            transition-all duration-700 ease-out`}>
//                 <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg
//                               animate-float" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
//                     <Image
//                         src={dishes[dishPositions.indexOf(1)]}
//                         alt="Side Dish"
//                         fill
//                         className={`object-cover transition-all duration-700 
//                                  ${isAnimating ? 'scale-110' : 'scale-100'}`}
//                     />
//                 </div>
//             </div>

//             {/* Right Dish (Position 2) */}
//             <div className={`absolute right-[40px] top-[40px] w-[220px] h-[220px] z-10
//                            ${isAnimating ? '-translate-x-4 -translate-y-4' : 'translate-x-0 translate-y-0'}
//                            transition-all duration-700 ease-out`}>
//                 <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg
//                               animate-float" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}>
//                     <Image
//                         src={dishes[dishPositions.indexOf(2)]}
//                         alt="Dessert"
//                         fill
//                         className={`object-cover transition-all duration-700 
//                                  ${isAnimating ? 'scale-110' : 'scale-100'}`}
//                     />
//                 </div>
//             </div>

//             {/* ================= Bottom Border with Animation ================= */}
//             <div className="absolute bottom-0 left-0 w-full z-10">
//                 <div className="flex justify-center gap-3 py-4 border-t border-[#8B4513]/30">
//                     {[...Array(14)].map((_, i) => (
//                         <span
//                             key={i}
//                             className="text-[#8B4513] text-xl transform transition-all duration-300 
//                                      hover:scale-125 hover:text-[#f5dfda] animate-pulse"
//                             style={{ animationDelay: `${i * 100}ms` }}
//                         >
//                             ❀
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Add custom animations to global styles */}
//             <style >{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px); }
//                     50% { transform: translateY(-10px); }
//                 }

//                 @keyframes fadeIn {
//                     from { opacity: 0; transform: translateY(20px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }

//                 @keyframes slideInLeft {
//                     from { opacity: 0; transform: translateX(-30px); }
//                     to { opacity: 1; transform: translateX(0); }
//                 }

//                 .animate-float {
//                     animation: float 6s ease-in-out infinite;
//                 }

//                 .animate-fadeIn {
//                     animation: fadeIn 1.5s ease-out forwards;
//                 }

//                 .animate-slideInLeft {
//                     animation: slideInLeft 1s ease-out forwards;
//                     opacity: 0;
//                 }

//                 .delay-100 {
//                     animation-delay: 0.1s;
//                 }

//                 .delay-200 {
//                     animation-delay: 0.2s;
//                 }
//             `}</style>
//         </section>
//     );
// }


// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// export default function DishesSection() {
//     const circleRef = useRef(null);
//     const [dishPositions, setDishPositions] = useState([0, 1, 2]);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [activeDish, setActiveDish] = useState(0);

//     // Dish images array
//     const dishes = [
//         "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900",
//         "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
//         "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600"
//     ];

//     // Enhanced rotating circle animation
//     useEffect(() => {
//         const circle = circleRef.current;
//         if (!circle) return;

//         let rotation = 0;
//         const rotate = () => {
//             rotation += 0.3;
//             circle.style.transform = `rotate(${rotation}deg)`;
//             circle.style.transition = "transform 0.1s linear";
//             requestAnimationFrame(rotate);
//         };

//         requestAnimationFrame(rotate);
//     }, []);

//     // Rotate dishes with morph animations
//     useEffect(() => {
//         const rotateDishes = () => {
//             setIsAnimating(true);

//             // Update active dish
//             setActiveDish(prev => (prev + 1) % 3);

//             // After a short delay, update positions
//             setTimeout(() => {
//                 setDishPositions(prev => {
//                     return prev.map(pos => (pos + 1) % 3);
//                 });
//                 setIsAnimating(false);
//             }, 500);
//         };

//         // Initial delay
//         const initialTimeout = setTimeout(() => {
//             rotateDishes();
//         }, 1000);

//         // Set interval for rotation
//         const interval = setInterval(rotateDishes, 3000);

//         return () => {
//             clearTimeout(initialTimeout);
//             clearInterval(interval);
//         };
//     }, []);

//     // Morph animation styles
//     const morphStyles = `
//         @keyframes morphIn {
//             0% {
//                 opacity: 0;
//                 transform: scale(0.8) rotate(-10deg);
//                 filter: blur(5px);
//             }
//             50% {
//                 opacity: 0.7;
//                 transform: scale(1.05) rotate(5deg);
//                 filter: blur(2px);
//             }
//             100% {
//                 opacity: 1;
//                 transform: scale(1) rotate(0deg);
//                 filter: blur(0);
//             }
//         }

//         @keyframes morphOut {
//             0% {
//                 opacity: 1;
//                 transform: scale(1) rotate(0deg);
//                 filter: blur(0);
//             }
//             50% {
//                 opacity: 0.5;
//                 transform: scale(0.9) rotate(5deg);
//                 filter: blur(3px);
//             }
//             100% {
//                 opacity: 0;
//                 transform: scale(1.1) rotate(-5deg);
//                 filter: blur(5px);
//             }
//         }

//         @keyframes gentleFloat {
//             0%, 100% {
//                 transform: translateY(0) rotate(0deg);
//             }
//             25% {
//                 transform: translateY(-15px) rotate(1deg);
//             }
//             50% {
//                 transform: translateY(0) rotate(0deg);
//             }
//             75% {
//                 transform: translateY(-10px) rotate(-1deg);
//             }
//         }

//         @keyframes waveFloat {
//             0%, 100% {
//                 transform: translateY(0) scale(1);
//             }
//             33% {
//                 transform: translateY(-12px) scale(1.02);
//             }
//             66% {
//                 transform: translateY(5px) scale(0.98);
//             }
//         }

//         @keyframes glowPulse {
//             0%, 100% {
//                 box-shadow: 0 0 20px rgba(245, 223, 218, 0.3);
//             }
//             50% {
//                 box-shadow: 0 0 40px rgba(245, 223, 218, 0.5);
//             }
//         }

//         @keyframes textReveal {
//             0% {
//                 clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
//                 opacity: 0;
//             }
//             100% {
//                 clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//                 opacity: 1;
//             }
//         }

//         @keyframes ripple {
//             0% {
//                 transform: scale(0.8);
//                 opacity: 0.5;
//             }
//             100% {
//                 transform: scale(1.2);
//                 opacity: 0;
//             }
//         }

//         .morph-in {
//             animation: morphIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
//         }

//         .morph-out {
//             animation: morphOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
//         }

//         .gentle-float {
//             animation: gentleFloat 8s ease-in-out infinite;
//         }

//         .wave-float {
//             animation: waveFloat 6s ease-in-out infinite;
//         }

//         .glow-pulse {
//             animation: glowPulse 2s ease-in-out infinite;
//         }

//         .text-reveal {
//             animation: textReveal 1.2s cubic-bezier(0.87, 0, 0.13, 1) forwards;
//         }

//         .ripple-effect {
//             position: relative;
//             overflow: hidden;
//         }

//         .ripple-effect::after {
//             content: '';
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             width: 100%;
//             height: 100%;
//             background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
//             transform: translate(-50%, -50%) scale(0);
//             animation: ripple 1.5s ease-out infinite;
//         }
//     `;

//     return (
//         <section className="relative min-h-screen bg-[#1e0506] overflow-hidden px-4 md:px-24 py-20">

//             {/* ================= Decorative Curve with Morph Animation ================= */}
//             <div className="absolute bottom-0 left-[20px] right-0 h-[25%] z-0 pointer-events-none">
//                 <div className="relative w-full h-full wave-float">
//                     <Image
//                         src="/home/curve.svg"
//                         alt="Decorative Curves"
//                         fill
//                         priority
//                         className="object-contain object-bottom opacity-60 transition-all duration-1000 hover:opacity-80"
//                     />
//                 </div>
//             </div>

//             {/* ================= Main Content ================= */}
//             <div className="relative z-10 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

//                 {/* -------- Left Text with Morph Animations -------- */}
//                 <div className="text-center mb-50 lg:text-left">
//                     <p className="font-pacifico text-[#f5dfda] text-2xl md:text-3xl mb-3 glow-pulse text-reveal">
//                         Fresh. Flavorful. Made with Love.
//                     </p>

//                     <h1 className="font-baloo text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight text-[#f5dfda]">
//                         <span className="inline-block text-reveal" style={{animationDelay: '0.1s'}}>
//                             Authentic Flavours
//                         </span>
//                         <br />
//                         <span className="block mt-4 text-5xl md:text-5xl font-bold text-reveal" style={{animationDelay: '0.3s'}}>
//                             That Feel Like
//                         </span>
//                         <span className="block mt-4 text-5xl md:text-5xl font-bold text-reveal" style={{animationDelay: '0.5s'}}>
//                             Home
//                         </span>
//                     </h1>

//                     {/* ================= Features with Morph Hover Effects ================= */}
//                     <div className="mt-8 space-y-4">
//                         <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2 
//                                      transform transition-all duration-500 hover:scale-105 
//                                      hover:translate-x-4 hover:text-[#ffd700] cursor-pointer
//                                      hover:shadow-lg hover:shadow-[#ffd700]/20 
//                                      rounded-lg p-2 hover:bg-white/5">
//                             🚚 Fast Delivery
//                         </h3>

//                         <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2 
//                                      transform transition-all duration-500 hover:scale-105 
//                                      hover:translate-x-4 hover:text-[#ffd700] cursor-pointer
//                                      hover:shadow-lg hover:shadow-[#ffd700]/20 
//                                      rounded-lg p-2 hover:bg-white/5">
//                             🧼 Hygienic Kitchen
//                         </h3>

//                         <h3 className="font-baloo text-2xl font-bold text-[#f5dfda] mb-2 
//                                      transform transition-all duration-500 hover:scale-105 
//                                      hover:translate-x-4 hover:text-[#ffd700] cursor-pointer
//                                      hover:shadow-lg hover:shadow-[#ffd700]/20 
//                                      rounded-lg p-2 hover:bg-white/5">
//                             ⭐ 4.7 Google Rating
//                         </h3>
//                     </div>
//                 </div>

//                 {/* -------- Center Dish with Morph Animations -------- */}
//                 <div className="relative flex justify-center items-center ripple-effect">

//                     {/* Main Dish with morph transition */}
//                     <div className={`relative w-[450px] h-[450px] rounded-full overflow-hidden 
//                                    white-circle-shadow translate-y-[30px] right-[120px]
//                                    transition-all duration-700 ease-out
//                                    ${isAnimating ? 'morph-out' : 'morph-in'}`}
//                          style={{
//                              boxShadow: '0 0 60px rgba(245, 223, 218, 0.4)',
//                          }}>
//                         <Image
//                             src={dishes[dishPositions.indexOf(0)]}
//                             alt="Authentic Dish"
//                             fill
//                             className="object-cover transition-all duration-1000 ease-out hover:scale-110"
//                             style={{
//                                 animation: isAnimating ? 'morphOut 0.6s ease-out' : 'morphIn 0.8s ease-out'
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ================= Side Dishes with Morph Animations ================= */}

//             {/* Left Dish (Position 1) */}
//             <div className={`absolute left-[350px] bottom-[120px] w-[180px] h-[180px] z-10
//                            gentle-float transition-all duration-700 ease-out`}>
//                 <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg glow-pulse"
//                      style={{
//                          boxShadow: '0 0 30px rgba(245, 223, 218, 0.3)',
//                      }}>
//                     <Image
//                         src={dishes[dishPositions.indexOf(1)]}
//                         alt="Side Dish"
//                         fill
//                         className={`object-cover transition-all duration-700 ease-out
//                                  ${isAnimating ? 'scale-110 rotate-5' : 'scale-100 rotate-0'}`}
//                         style={{
//                             animation: isAnimating ? 'morphOut 0.6s ease-out' : 'morphIn 0.8s ease-out 0.1s'
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* Right Dish (Position 2) */}
//             <div className={`absolute right-[40px] top-[40px] w-[220px] h-[220px] z-10
//                            gentle-float transition-all duration-700 ease-out`}
//                  style={{animationDelay: '0.5s'}}>
//                 <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg glow-pulse"
//                      style={{
//                          boxShadow: '0 0 30px rgba(245, 223, 218, 0.3)',
//                      }}>
//                     <Image
//                         src={dishes[dishPositions.indexOf(2)]}
//                         alt="Dessert"
//                         fill
//                         className={`object-cover transition-all duration-700 ease-out
//                                  ${isAnimating ? 'scale-110 -rotate-5' : 'scale-100 rotate-0'}`}
//                         style={{
//                             animation: isAnimating ? 'morphOut 0.6s ease-out' : 'morphIn 0.8s ease-out 0.2s'
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* ================= Bottom Border with Morph Animation ================= */}
//             <div className="absolute bottom-0 left-0 w-full z-10">
//                 <div className="flex justify-center gap-3 py-4 border-t border-[#8B4513]/30">
//                     {[...Array(14)].map((_, i) => (
//                         <span
//                             key={i}
//                             className="text-[#8B4513] text-xl transform transition-all duration-300 
//                                      hover:scale-150 hover:text-[#f5dfda] cursor-pointer
//                                      hover:rotate-180 gentle-float"
//                             style={{ 
//                                 animationDelay: `${i * 200}ms`,
//                                 animationDuration: '4s'
//                             }}
//                         >
//                             ❀
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* ================= Floating Particles Background ================= */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {[...Array(20)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="absolute rounded-full bg-[#f5dfda]/10 gentle-float"
//                         style={{
//                             width: `${Math.random() * 20 + 5}px`,
//                             height: `${Math.random() * 20 + 5}px`,
//                             top: `${Math.random() * 100}%`,
//                             left: `${Math.random() * 100}%`,
//                             animationDelay: `${Math.random() * 5}s`,
//                             animationDuration: `${Math.random() * 10 + 10}s`
//                         }}
//                     />
//                 ))}
//             </div>

//             {/* Add custom morph animations */}
//             <style >{morphStyles}</style>
//         </section>
//     );
// }


"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DishesSection() {
    const circleRef = useRef(null);
    const [dishPositions, setDishPositions] = useState([0, 1, 2]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [currentDishIndex, setCurrentDishIndex] = useState(0);

    // Dish images array with names
    const dishes = [
        {
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900",
            name: "Classic Italian Pasta",
            description: "Handmade pasta with traditional sauce",
            calories: "450 cal"
        },
        {
            image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
            name: "Fresh Fruit Bowl",
            description: "Seasonal fruits with honey drizzle",
            calories: "280 cal"
        },
        {
            image: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=600",
            name: "Homemade Breakfast",
            description: "Farm fresh eggs with artisan bread",
            calories: "320 cal"
        }
    ];

    // Enhanced rotating circle animation
    useEffect(() => {
        const circle = circleRef.current;
        if (!circle) return;

        let rotation = 0;
        const rotate = () => {
            rotation += 0.3;
            circle.style.transform = `rotate(${rotation}deg)`;
            circle.style.transition = "transform 0.1s linear";
            requestAnimationFrame(rotate);
        };

        requestAnimationFrame(rotate);
    }, []);

    // Rotate dishes with card display
    useEffect(() => {
        const rotateDishes = () => {
            setIsAnimating(true);

            // Hide card first
            setShowCard(false);

            // After a short delay, update positions
            setTimeout(() => {
                setDishPositions(prev => {
                    const newPositions = prev.map(pos => (pos + 1) % 3);
                    // Find the new center dish index
                    const newCenterIndex = newPositions.indexOf(0);
                    setCurrentDishIndex(newCenterIndex);
                    return newPositions;
                });

                setIsAnimating(false);

                // Show card with new dish info
                setTimeout(() => {
                    setShowCard(true);
                }, 300);
            }, 500);
        };

        // Initial delay
        const initialTimeout = setTimeout(() => {
            rotateDishes();
        }, 1000);

        // Set interval for rotation
        const interval = setInterval(rotateDishes, 3000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    // Morph animation styles
    const morphStyles = `
        @keyframes morphIn {
            0% {
                opacity: 0;
                transform: scale(0.8) rotate(-10deg);
                filter: blur(5px);
            }
            50% {
                opacity: 0.7;
                transform: scale(1.05) rotate(5deg);
                filter: blur(2px);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0deg);
                filter: blur(0);
            }
        }
        
        @keyframes morphOut {
            0% {
                opacity: 1;
                transform: scale(1) rotate(0deg);
                filter: blur(0);
            }
            50% {
                opacity: 0.5;
                transform: scale(0.9) rotate(5deg);
                filter: blur(3px);
            }
            100% {
                opacity: 0;
                transform: scale(1.1) rotate(-5deg);
                filter: blur(5px);
            }
        }
        
        @keyframes gentleFloat {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            25% {
                transform: translateY(-15px) rotate(1deg);
            }
            50% {
                transform: translateY(0) rotate(0deg);
            }
            75% {
                transform: translateY(-10px) rotate(-1deg);
            }
        }
        
        @keyframes slideUpFadeIn {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        @keyframes slideDownFadeOut {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
            }
        }
        
        .morph-in {
            animation: morphIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .morph-out {
            animation: morphOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .gentle-float {
            animation: gentleFloat 8s ease-in-out infinite;
        }
        
        .card-slide-up {
            animation: slideUpFadeIn 0.5s ease-out forwards;
        }
        
        .card-slide-down {
            animation: slideDownFadeOut 0.5s ease-out forwards;
        }
    `;

    return (
        <section className="relative min-h-screen bg-[#1e0506] overflow-hidden px-4 md:px-24 py-20">

            {/* ================= Decorative Curve with Animation ================= */}
            <div className="absolute bottom-[30vh] h-full">
                <img src="/home/curve.svg" className="h-full" alt="" />
            </div>

            {/* ================= Main Content ================= */}
            <div className="relative z-10 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

                {/* -------- Left Text with Fade In Animation -------- */}
                <div className="text-center mb-50 lg:text-left animate-fadeIn">
                    <p className="font-pacifico text-[#f5dfda] text-2xl md:text-3xl mb-3 animate-pulse">
                        Fresh. Flavorful. Made with Love.
                    </p>

                    <h1 className="font-baloo text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight text-[#f5dfda]">
                        <span className="inline-block animate-slideInLeft">Authentic Flavours</span>
                        <br />
                        <span className="block mt-4 text-5xl md:text-5xl font-bold animate-slideInLeft delay-100">
                            That Feel Like
                        </span>
                        <span className="block mt-4 text-5xl md:text-5xl font-bold animate-slideInLeft delay-200">
                            Home
                        </span>
                    </h1>

                    {/* ================= Features with Hover Effects ================= */}
                    <div className="mt-8 space-y-4">
                        <h3 className=" text-xl rounded-xl p-2  text-[#f5dfda] mb-2 
                                     transform transition-all duration-300 hover:scale-105 hover:translate-x-2 
                                     hover:text-[#e9e5cb] cursor-pointer">
                            Fast Delivery
                        </h3>

                        <h3 className=" text-xl rounded-xl p-2  text-[#f5dfda] mb-2 
                                     transform transition-all duration-300 hover:scale-105 hover:translate-x-2 
                                     hover:text-[#e9e5cb] cursor-pointer">
                            Hygienic Kitchen
                        </h3>

                        <h3 className=" text-xl rounded-xl p-2  text-[#f5dfda] mb-2 
                                     transform transition-all duration-300 hover:scale-105 hover:translate-x-2 
                                     hover:text-[#e9e5cb] cursor-pointer">
                            4.7 Google Rating
                        </h3>
                    </div>
                </div>

                {/* -------- Center Dish Area with Display Card -------- */}
                <div className="relative flex justify-center items-center">

                    {/* Main Dish Container */}
                    <div className={`relative w-[450px] h-[450px] rounded-full overflow-hidden 
                                   white-circle-shadow translate-y-[10px] right-[140px]
                                   ${isAnimating ? 'scale-95 rotate-3' : 'scale-110 rotate-0'}
                                   transition-all duration-900 ease-out`}>
                        <Image
                            src={dishes[currentDishIndex].image}
                            alt="Authentic Dish"
                            fill
                            className="object-cover transition-all duration-700 hover:scale-110"
                        />
                    </div>

                    {/* Display Card that appears after dish change */}

                </div>
            </div>

            {/* ================= Side Dishes ================= */}

            {/* Left Dish (Position 1) */}
            <div className={`absolute left-[350px] bottom-[120px] w-[180px] h-[180px] z-10
                           ${isAnimating ? 'translate-x-4 translate-y-4' : 'translate-x-0 translate-y-0'}
                           transition-all duration-700 ease-out blur-xs`}>
                <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg
                              animate-float" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
                    <Image
                        src={dishes[dishPositions.indexOf(1)].image}
                        alt="Side Dish"
                        fill
                        className={`object-cover transition-all duration-700 
                                 ${isAnimating ? 'scale-110' : 'scale-100'}`}
                    />
                </div>
            </div>

            {/* Right Dish (Position 2) */}
            <div className={`absolute right-[40px] top-[40px] w-[260px] h-[260px] z-10
                           ${isAnimating ? '-translate-x-4 -translate-y-4' : 'translate-x-0 translate-y-0'}
                           transition-all duration-700 ease-out blur-xs`}>
                <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg
                              animate-float" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}>
                    <Image
                        src={dishes[dishPositions.indexOf(2)].image}
                        alt="Dessert"
                        fill
                        className={`object-cover transition-all duration-700 
                                 ${isAnimating ? 'scale-110' : 'scale-100'}`}
                    />
                </div>
            </div>

            {/* ================= Bottom Border ================= */}
            <div className="absolute bottom-0 left-0 w-full z-20">
                <Image
                    src="/home/bottomBoarder.svg"
                    alt="Border"
                    width={1920}
                    height={100}
                    className="w-full"
                    priority
                />
            </div>

            {/* Add custom animations */}
            <style>{morphStyles}</style>
            <style >{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}