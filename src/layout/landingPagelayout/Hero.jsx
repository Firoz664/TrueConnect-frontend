import React from 'react'
import { PiStudentBold } from "react-icons/pi"
const Hero = () => {
  return (
    <div>
<div class="text-white font-sans leading-normal tracking-normal">
<section class="bg-gray-100 py-20">
    <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
            <h1 class="text-4xl font-bold mb-6 text-black" >We're launching soon</h1>
            <p class="text-gray-100 mb-12">Enter your email to be the first to know when we launch.</p>
            <form class="max-w-md mx-auto">
                <div class="flex items-center">
                    <input type="email" class="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white" placeholder="Enter your email"/>
                    <button type="submit" class="bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
</section>
<section class="bg-gray-200 py-20">
    <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6 text-black">What to expect</h2>
            <p class="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci
                quis justo aliquam euismod eget a leo. Sed eget orci feugiat, porttitor nibh vel, faucibus mauris.
            </p>
        </div>
        <div class="flex flex-wrap -mx-4 mt-12">
            <div class="w-full md:w-1/4 px-4 mb-8">
                <div class="rounded-md bg-white shadow-md p-8">
                    <img src="https://www.zoho.com/sites/zweb/images/creator/appdeck/assignment-tracker.svg" className='w-8 h-8' alt="" />
                    <h3 class="text-2xl font-bold mb-4 text-black">Assignment Management</h3>
                    <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        orci quis justo aliquam euismod eget a leo.</p>
                </div>
            </div>
            <div class="w-full md:w-1/4 px-4 mb-8">
                <div class="rounded-md bg-white shadow-md p-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" id="list"><path d="M30 2H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 28H4V4h26v26zM9 18h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm0 12h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"></path></svg>
                    <h3 class="text-2xl font-bold mb-4">Attendance Management</h3>
                    <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        orci quis justo aliquam euismod eget a leo.</p>
                </div>
            </div>

            <div class="w-full md:w-1/4 px-4 mb-8"> 
                <div class="rounded-md bg-white shadow-md p-8">
                    <img src="https://www.zoho.com/sites/zweb/images/creator/appdeck/assignment-tracker.svg" className='w-8 h-8'  alt="" />
                    < h3 class="text-2xl font-bold mb-4">Admission Management</h3>
                    <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        orci quis justo aliquam euismod eget a leo.</p>
                </div>
            </div>
            <div class="w-full md:w-1/4 px-4 mb-8">
                <div class="rounded-md bg-white shadow-md p-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" id="list"><path d="M30 2H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 28H4V4h26v26zM9 18h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm0 12h16a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"></path></svg>
                    <h3 class="text-2xl font-bold mb-4">Staff Management</h3>
                    <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        orci quis justo aliquam euismod eget a leo.</p>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
    </div>
  )
}

export default Hero