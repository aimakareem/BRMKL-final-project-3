import Link from 'next/link'
import Navbar from "@/components/navbar/Navbar";
import profilePic from './mypageapp/public/images/project 3 picture-Photoroom.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image'

export default function Aboutsection() {
    return (
        <main>
             <div className='bg-sky-950 h-screen w-screen'> {/* section 2 */}
        <div className='flex flex-col items-center justify-center space-y-10'>
            <div className='flex justify-center font-semibold text-3xl'>
            <h1 className='text-white mt-10'>About</h1><h1 className='text-blue-400 mt-10 ml-1'>Me</h1>
            </div>
            <div className=" flex justify-center items-center relative w-48 h-48 rounded-full overflow-hidden mr-60 bg-gray-900 ml-52  border-2 border-blue-400 shadow-md">
            <Image src="/images/file.png" alt="Profile Picture" layout="fill" objectFit="cover" />
            </div>
            </div>
        <div className='text-white text-2xl flex justify-center font-semibold mt-7'>Fronted Developer</div>
        
        <p className='text-gray-300 flex justify-center font-light mt-10'> I'm Aima, a passionate Frontend Developer specializing in creating dynamic and responsive.</p>
            <p className='flex justify-center text-gray-300 font-light'> web applications With a strong foundation in HTML, CSS, and JavaScript, along with modern </p>
            <p className='flex justify-center text-gray-300 font-light'> frameworks like React and Next.js.I'm always open to new opportunities and collaborations.</p>
            <p className='flex justify-center text-gray-300 font-light'>While studying medicine, I also became interested in web development. Combining these two fields</p>
            <p className='flex justify-center text-gray-300 font-light'> has allowed me to use my scientific thinking from medicine to solve creative problems</p>
            <p className='flex justify-center text-gray-300 font-light'> in building websites and apps. I found that creating digital tools not only support</p>
            <p className='flex justify-center text-gray-300 font-light'>s my medical learning but also helps share health information with more people. </p>
            <p className='flex justify-center text-gray-300 font-light'>Learning both has made me more versatile and able to bring fresh ideas to both medicine and technology.</p>
        <div className='flex justify-center'>
        <button className='flex justify-center text-blue-950 bg-blue-500 hover:bg-blue-400  font-medium  mr-4 mt-6 p-1 w-28 rounded-md'>Read more</button>
        </div>

        </div> section 2
    
        </main>
    );
    
    
    }