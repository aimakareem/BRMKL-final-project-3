import Link from 'next/link'
import Navbar from "@/components/navbar/Navbar";
import Herosection from '@/components/herosection/Herosection';
import Aboutsection from '@/components/aboutsection/Aboutsection';
import Journey from '@/components/journeysection/Journey';
import Skills from '@/components/skills/Skills';
import Contact from '@/components/contact/Contact';
import profilePic from './mypageapp/public/images/project 3 picture-Photoroom.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Herosection />
      <Aboutsection />
      <Journey />
      <Skills />
      <Contact/>
    </main>
  );
}
