
import React from 'react';

const skills = [
{
    category: 'Coding Skills',
    items: [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '80%' },
    { name: 'Javascript', level: '69%' },
    { name: 'Next.js', level: '75%' },
    ],
},
{
    category: 'Professional Skills',
    items: [
    { name: 'Web Design', level: '75%' },
    { name: 'Web Development', level: '60%' },
    { name: 'Tailwind', level: '85%' },
    ],
},
];

const Skills = () => {
return (
    <div className='bg-sky-950 h-screen w-screen pt-52'>
    <div className="bg-sky-950 p-6 rounded-lg mr-10 ml-10 pb-20">
<div className='flex justify-center mb-7'>
    <h2 className="text-center text-3xl font-bold text-white ml-1 ">My</h2>
    <h2 className='text-center text-3xl font-bold text-blue-400'>Skills</h2>
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 border border-blue-400 ml-6 p-6">
        {skills.map((skillCategory) => (
        <div key={skillCategory.category}>
            <h3 className="text-xl font-semibold text-white mb-4">{skillCategory.category}</h3>
            {skillCategory.items.map((skill) => (
            <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-white mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: skill.level }}
                ></div>
                </div>
            </div>
            ))}
        </div>
        ))}
    </div>






    </div>
    </div>
);
};

export default Skills;