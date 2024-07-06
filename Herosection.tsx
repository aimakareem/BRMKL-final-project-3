import Link from 'next/link'
import Navbar from "@/components/navbar/Navbar";
import profilePic from './mypageapp/public/images/project 3 picture-Photoroom.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image'

export default function Herosection() {
return (
    <main>
         <div className='bg-gray-900 h-screen w-screen'> {/* ..section 1. */}
    <nav className="font-medium flex justify-between p-2 bg-gray-900">
    <div className="flex">
    <span className="h-8 w-8 mt-0 text-blue-400 ml-3 bg-blue-900 mr-4 flex items-center justify-center">
        <img src="/images/logo-removebg-preview.png" alt="logo" className="h-full w-full object-contain" />
    </span>
    <div className="text-xl">Aima Kareem.</div>
    
</div>
        <ul className="flex space-x-4 text-white font medium">
            <Link className='text-blue-500' href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/education">Education</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
            </ul>
        </nav>
        <div>
        
        </div>
        
        <div className='mt-28 ml-16'> {/* ..sect 1 part 2. */}
            <h1 className='text-white font-semibold text-3xl'>Hi,I'm Aima Kareem</h1>
            <h1 className='text-blue-400 font-semibold text-2xl'>Fronted Developer|</h1>
            <p className='text-white font-thin mt-5'>I'm AIMA,a passionate frontend developer with a strong foundation in HTML, CSS, and </p>
            <p className='text-white  font-thin mt-0'>JavaScript,tailwind I've honed my skills in nextjs, and I'm always looking to learn more</p>
            <p className='text-white  font-thin mt-0'>I'm always open to new opportunities and collaborations feel free to reach out.</p>
            <button className='text-blue-950 bg-blue-500 hover:bg-blue-400  font-medium rounded-md mr-4 mt-6 p-1 w-24 '>Hire me</button> 
            <button className='text-blue-400 bg-sky-950 hover:bg-sky-900	background-color: rgb(8 47 73); border border-blue-400 font-medium rounded-md mt-6 p-1 w-24 '>Let's Talk</button>
        </div>
        <div className='flex space-x-4 mt-48 ml-16 text-blue-400'>
        <div className='p-2 border border-blue-400 hover:bg-sky-900 rounded-full'><FaFacebookF /></div>
        <div className='p-2 border border-blue-400 hover:bg-sky-900 rounded-full'><FaTwitter /></div>
        <div className='p-2 border border-blue-400 hover:bg-sky-900 rounded-full'><FaLinkedinIn /></div>
        </div>
        
        <div className='flex justify-center'>
        <Image
            src="/images/file.png"
            width={400}
            height={400}
            alt="Picture of the author"
            className="absolute top-8 right-6 m-4 mix-blend-overlay opacity-0.7 overflow-hidden "
            />
        
        </div>
      </div>  {/* ..section 1. */}

    </main>
);


}