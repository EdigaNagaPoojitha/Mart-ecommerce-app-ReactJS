import React from "react";
export default function Footer(){
    return(<>
    <div style={{backgroundColor:"#182a4b"}}>
    <div className="max-w-screen-xl mx-auto px-2 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
        <div className="p-5 ">
            <div className="text-xxs  uppercase text-white font-bold">Home</div>
            <p style={{width:"200px ", marginTop:"10px" ,color:"rgb(150,150,150)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque laudantium, minus pariatur iste officili optio hic. Doloremque, nihil minimli esse quos magni dolorem itaque provident optio sed, consectetur ratione.</p>
        </div>
        <div className="p-5" style={{color:"rgb(150,150,150)",textDecoration:"none"}}>
            <div className="text-xxs  uppercase text-white font-bold">About Us</div>
            <ul>
            <li className="my-3 block" href="/#">Carrers 
            </li>
            <li className="my-3 block" href="/#">Our Stores
            </li>
            <li className="my-3 block" href="/#">Our Cares
            </li>
            <li className="my-3 block" href="/#">Terms & Conditions</li>
            <li className="my-3 block" href="/#">Privacy Policy
            </li>
            </ul>
        </div>
        <div className="p-5" style={{color:"gray"}}>
            <div className="text-xxs  uppercase text-white font-bold">Customer Care</div>
            <ul>
            <li className="my-3 block" href="/#">Help Center <li className="text-teal-600 text-xs p-1"></li>
            </li>
            <li className="my-3 block" href="/#">How to Buy<li className="text-teal-600 text-xs p-1"></li>
            </li>
            <li className="my-3 block" href="/#">Track Order<li className="text-teal-600 text-xs p-1"></li>
            </li>
            <li className="my-3 block" href="/#">Corparate & Bulk Purchasing<li className="text-teal-600 text-xs p-1"></li>
            </li>
            <li className="my-3 block" href="/#">Returns & Refunds<li className="text-teal-600 text-xs p-1"></li>
            </li></ul>
        </div>
        <div className="p-5" style={{width:"400px ", marginTop:"10px" ,color:"gray"}}>
            <div className="text-xxs  uppercase text-white font-bold">Contact us</div>
            <ul>
            <li className="my-3 block" href="/#">70 Washington Square South,New York, Ny 10012,United States
                <li className="text-teal-600 text-xs p-1"></li>
            </li>

            <li className="my-3 block" href="/#">contact@company.com
                <li className="text-teal-600 text-xs p-1"></li>
            </li>
            <li className="my-3 block" href="/#">Phone: +1 1123 456 780
                <li className="text-teal-600 text-xs p-1"></li>
            </li></ul>
        </div>
    </div>
</div>
    </>)
}