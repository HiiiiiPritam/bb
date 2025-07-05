"use client"

import { doSocialLogout } from "@/app/actions/authActions";
import Link from "next/link";
import React from "react";

function NavigationBar() {

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
           
            const response = await doSocialLogout(formData);
            if (response.error) {
              setError(response.error.message);
            } else {
              router.push("/");
            }
        } catch (error) {
          console.error("Logout failed:", error);
          // Handle logout failure, display error message or handle as needed
        }
      };
  return (
    <div className="hidden lg:flex flex-col h-[95vh] w-[20vw] rounded-xl bg-[#3F2E3E] p-4">
      <div className="flex-grow flex flex-col gap-4 w-full">
        <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/vuiggmtc.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <Link href="/AllBudgets">All Budgets</Link>
        </div>
        <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/hqymfzvj.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <Link href="/AddBudget">Add Budget</Link>
        </div>
        <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/zyzoecaw.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <Link href="/addCommunityPost">Add Post</Link>
        </div>
        <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
          <lord-icon
           src="https://cdn.lordicon.com/cnpvyndp.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <Link href="/Dashboard">Dashboard</Link>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col gap-4 w-full">
        <hr className="h-1 bg-amber-800" />
        <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
          <lord-icon
              src="https://cdn.lordicon.com/vyqvtrtg.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <Link href="/FinancialTips">Finance Tips</Link>
        </div>
        <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
          <lord-icon
              src="https://cdn.lordicon.com/spukaklw.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <Link href="/community">Communities</Link>
        </div>
        <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-slate-600 cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/lecprnjb.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <form onSubmit={handleLogout} >
          <button >Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;

// "use client"

// import { doSocialLogout } from "@/app/actions/authActions";
// import Link from "next/link";
// import React from "react";
// // import ResponsiveNavbar from "./ResponsiveNavbar";
// import { Gwendolyn } from 'next/font/google'

// const gwendolyn = Gwendolyn({ weight: ['400', '700'], subsets: ["latin"] });

// function NavigationBar() {

//     const handleLogout = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData(e.currentTarget);

//             const response = await doSocialLogout(formData);
//             if (response.error) {
//                 setError(response.error.message);
//             } else {
//                 // router.push("/");
//             }
//         } catch (error) {
//             console.error("Logout failed:", error);
//             // Handle logout failure, display error message or handle as needed
//         }
//     };
//     return (
//         <>
//             <div className="hidden lg:flex flex-col h-[95vh] w-[20vw] rounded-xl bg-[#3F2E3E] p-4">
//                 <div className="flex-grow flex flex-col gap-4 w-full">
//                     <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="white" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
//                         <Link href="/AllBudgets">All Budgets</Link>
//                     </div>
//                     <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
//                         <lord-icon
//                             src="https://cdn.lordicon.com/hqymfzvj.json"
//                             trigger="hover"
//                             colors="primary:#ffffff"
//                             style={{ width: "25px", height: "25px" }}
//                         ></lord-icon>
//                         <Link href="/AddBudget">Add Budget</Link>
//                     </div>
//                     <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="white" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
//                         <Link href="/addCommunityPost">Add Post</Link>
//                     </div>
//                     <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="white" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z" /></svg>
//                         <Link href="/Dashboard">Dashboard</Link>
//                     </div>
//                 </div>
//                 <div className="flex-shrink-0 flex flex-col gap-4 w-full">
//                     <hr className="h-1 bg-amber-800" />
//                     <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
//                         <lord-icon
//                             src="https://cdn.lordicon.com/whrxobsb.json"
//                             trigger="hover"
//                             colors="primary:#ffffff"
//                             style={{ "width": "25px", "height": "25px" }}>
//                         </lord-icon>
//                         <Link href="/FinancialTips">Finance Tips</Link>
//                     </div>
//                     <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-[#856777] cursor-pointer">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="white" viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" /></svg>
//                         <Link href="/community">Communities</Link>
//                     </div>
//                     <div className="flex p-2 rounded-md justify-center items-center gap-2 bg-[#A78295] text-white hover:bg-slate-600 cursor-pointer">
//                         <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="white" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
//                         <form onSubmit={handleLogout} >
//                             <button >Logout</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default NavigationBar;
