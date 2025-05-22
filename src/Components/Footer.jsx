import React from "react";
export default function Footer(){
    return(<>
    <div style={{backgroundColor:"#182a4b"}}>
    <div class="max-w-screen-xl mx-auto px-2 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
        <div class="p-5 ">
            <div class="text-xxs  uppercase text-white font-bold">Home</div>
            <p style={{width:"200px ", marginTop:"10px" ,color:"rgb(150,150,150)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque laudantium, minus pariatur iste officispan optio hic. Doloremque, nihil minimspan esse quos magni dolorem itaque provident optio sed, consectetur ratione.</p>
        </div>
        <div class="p-5" style={{color:"rgb(150,150,150)",textDecoration:"none"}}>
            <div class="text-xxs  uppercase text-white font-bold">About Us</div>

            <span class="my-3 block" href="/#">Carrers 
            </span>
            <span class="my-3 block" href="/#">Our Stores
            </span>
            <span class="my-3 block" href="/#">Our Cares
            </span>
            <span class="my-3 block" href="/#">Terms & Conditions</span>
            <span class="my-3 block" href="/#">Privacy Policy
            </span>
        </div>
        <div class="p-5" style={{color:"gray"}}>
            <div class="text-xxs  uppercase text-white font-bold">Customer Care</div>

            <span class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span>
            </span>
            <span class="my-3 block" href="/#">How to Buy<span class="text-teal-600 text-xs p-1"></span>
            </span>
            <span class="my-3 block" href="/#">Track Order<span class="text-teal-600 text-xs p-1"></span>
            </span>
            <span class="my-3 block" href="/#">Corparate & Bulk Purchasing<span class="text-teal-600 text-xs p-1"></span>
            </span>
            <span class="my-3 block" href="/#">Returns & Refunds<span class="text-teal-600 text-xs p-1"></span>
            </span>
        </div>
        <div class="p-5" style={{width:"400px ", marginTop:"10px" ,color:"gray"}}>
            <div class="text-xxs  uppercase text-white font-bold">Contact us</div>

            <span class="my-3 block" href="/#">70 Washington Square South,New York, Ny 10012,United States
                <span class="text-teal-600 text-xs p-1"></span>
            </span>

            <span class="my-3 block" href="/#">contact@company.com
                <span class="text-teal-600 text-xs p-1"></span>
            </span>
            <span class="my-3 block" href="/#">Phone: +1 1123 456 780
                <span class="text-teal-600 text-xs p-1"></span>
            </span>
        </div>
    </div>
</div>
    </>)
}