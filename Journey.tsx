export default function Journey () {
    return(
        <main className="bg-gray-900 h-screen w-screen">
        <div className=" flex justify-center">
            <div className="font-bold text-4xl text-white flex justify-center mt-10">My</div>
            <div className="font-bold text-4xl text-blue-400  mt-10">Journey</div>
        </div>
        <div className="flex min-h-screen mt-20">
  {/* Left Side */}
    <div className="flex-1 bg-gray-900 p-4">
        <h2 className=" font-semibold text-2xl mb-6 text-white">Education</h2>
    <div className="grid grid-cols-1 gap-4 ">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-400 ">
            <div className="flex space-x-4 ">
            <div className="rounded-full bg-blue-400 h-4 w-4"></div>
            <h1 className="text-blue-400 font-normal text-lg mb-3">2021 - 2023</h1>
            </div>
            <h2 className="text-white font-medium">Intermediate with Medical</h2>
            <p className="text-gray-400">During my intermediate studies in pre-medical, I delved into foundational subjects essential for a career in healthcare. The curriculum focused on biology, chemistry, physics.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-400 ">
            <div className="flex space-x-4 ">
            <div className="rounded-full bg-blue-400 h-4 w-4"></div>
            <h1 className="text-blue-400 font-normal text-lg mb-3">2023- 2027(Continue)</h1>
            </div>
            <h2 className="text-white font-medium">University Degree in Nutrition</h2>
            <p className="text-gray-400">I pursued my passion for nutrition through a comprehensive university program, equipping myself with in-depth knowledge of dietary science, human metabolism, and the role of nutrition in promoting health and wellness.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-400 ">
            <div className="flex space-x-4 ">
            <div className="rounded-full bg-blue-400 h-4 w-4"></div>
            <h1 className="text-blue-400 font-normal text-lg mb-3">2024</h1>
            </div>
            <h2 className="text-white font-medium">Web Development Course</h2>
            <p className="text-gray-400">I completed web development course that provided me with practical skills and knowledge in building modern websites and web applications.</p>
        </div>
    </div>
    </div>

  {/* Right Side */}
    <div className="flex-1 bg-gray-900 p-4">
        <h2 className="font-semibold text-2xl mb-6 text-white">Coding Experience</h2>
    <div className="grid grid-cols-1 gap-4 ">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-400">
        <h1 className="text-blue-400 font-normal text-lg mb-3">1st Project</h1>
        <h2 className="text-white font-medium text-xl">Html and Css</h2>
        <p className="text-gray-400 ">This project showcases a clean and responsive web page built using HTML and Tailwind CSS. The focus is on leveraging Tailwind's utility-first framework to create a visually appealing and user-friendly interface with minimal custom CSS.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-400">
        <h1 className="text-blue-400 font-normal text-lg mb-3">2nd Project</h1>
        <h2 className="text-white font-medium text-xl">Javascript</h2>
        <p className="text-gray-400">Task Management: Add new tasks with descriptions and due dates</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-400">
        <h1 className="text-blue-400 font-normal text-lg mb-3">3rd Project</h1> 
        <h2 className="text-white font-medium text-xl">Portfolio</h2>
        <p className="text-gray-400"> Welcome to my personal portfolio, crafted with Next.js! This project showcases my journey as a developer, highlighting my skills, projects, and professional experiences. Designed to be fast, responsive, and visually appealing, this portfolio serves as a comprehensive introduction to who I am and what I doSeparate sections for "Coding Skills" and "Professional Skills,"</p> 
        </div>
    </div>
    </div>
    </div>
    </main>


);
}
