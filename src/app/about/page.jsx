import React from 'react'

const page = () => {

    const skills = [
        'NextJS',
        'ReactJS',
        'TypeScript',
        'JavaScript',
        'Figma',
        'Recoil',
        'Redux',
        'Git',
        'Chakra UI',
        'Tailwind CSS',
        'HTML',
        'CSS',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Firebase',
        'Supabase',
        'MUI',
        'Bootstrap',
        'Python',
        'Solidity',
        'Amazon Web Services',
      ];

    return (
        <>
            <div className="container mx-auto mt-8 p-4 ml-16 overflow-x-hidden">
                <h1 className="text-5xl font-bold mb-4 text-sky-700">About Me</h1>

                <p>
                    Hi there! My name is Bhagya Mudgal, and I am a Software Engineer at KAPX. I have experience in developing decentralized applications on Solana and EVM-compatible blockchains and am passionate about using the latest web technologies to build high-quality web applications. In addition to my professional experience, I am always eager to learn and work with new technologies and share my knowledge with others. I am excited to continue growing and learning in my field, and I look forward to connecting with others who share my interests.
                </p>

                <div className="mt-8">
                <h2 className="text-5xl font-bold mb-4 text-sky-700">Experience</h2>
                <div className="bg-white p-4 shadow-md mb-4">
                    <p className="text-xl font-bold text-red-300">Software Engineer</p>
                    <p className="text-sky-300">KAPX</p>
                    <p>Full Time | Remote, Singapore</p>
                    <p>Nov 2022 - Present (1 Year 4 Months)</p>
                </div>

                <div className="bg-white p-4 shadow-md mb-4">
                    <p className="text-xl font-bold text-red-300">Software Engineer</p>
                    <p className='text-sky-300'>KAPX</p>
                    <p>Full Time | Remote, Singapore</p>
                    <p>Nov 2022 - Present (1 Year 4 Months)</p>
                </div>

                </div>

                <div className="mt-8">
                <h2 className="text-5xl font-bold mb-4 text-sky-700">Education</h2>

                <div className="bg-white p-4 shadow-md mb-4">
                    <p className="text-xl font-bold text-cyan-400">Bachelors's in Computer Application (BCA)</p>
                    <p className="text-sky-200">Maharaja Surajmal Institute, GGSIPU</p>
                    <p>Grade: 9.2 CGPA</p>
                    <p>Aug 2019 - Jul 2022</p>
                </div>

                <div className="bg-white p-4 shadow-md mb-4">
                    <p className="text-xl font-bold text-cyan-400">Bachelors's in Computer Application (BCA)</p>
                    <p className="text-sky-200">Maharaja Surajmal Institute, GGSIPU</p>
                    <p>Grade: 9.2 CGPA</p>
                    <p>Aug 2019 - Jul 2022</p>
                </div>

                </div>

                <div className="mt-8">
                <h2 className="text-5xl font-bold mb-4 text-sky-700">Skills</h2>

                <div className="flex flex-wrap">
                    {skills.map((skill, index) => (
                    <span key={index} className="bg-gray-200 p-2 m-1 rounded">
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default page