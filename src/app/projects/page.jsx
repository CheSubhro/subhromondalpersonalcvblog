import React from 'react'

const page = () => {

    const projects = [
        {
            name: 'Web',
            website: 'Web Website Link',
            code: 'Web Code Link',
            image: 'Web Image Link',
        },
        {
            name: 'Web',
            website: 'Web Website Link',
            code: 'Web Code Link',
            image: 'Web Image Link',
        },
        {
            name: 'Web',
            website: 'Web Website Link',
            code: 'Web Code Link',
            image: 'Web Image Link',
        },
        {
            name: 'Web',
            website: 'Web Website Link',
            code: 'Web Code Link',
            image: 'Web Image Link',
        },
    ];

    return (
        <>
            <div className="container mx-auto mt-8 p-4 text-center">
                <h1 className="text-5xl font-bold mb-8 text-sky-400">My Projects</h1>

                <div className="flex flex-wrap justify-around">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-8 shadow-md mb-8 mx-auto" style={{ width: '500px', height: '400px' }}>
                        {/* Image */}
                        <img
                            src={project.image}
                            alt={`${project.name} Image`}
                            className="rounded-full h-20 w-20 object-cover mx-auto mb-4"
                        />

                        {/* Project Name */}
                        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

                        {/* Website and Code Buttons */}
                        <div className="flex justify-around">
                            <a href={project.website} className="bg-cyan-500 text-white px-4 py-2 rounded" target="_blank" rel="noopener noreferrer">
                                Website
                            </a>
                            <a href={project.code} className="bg-pink-400 text-white px-4 py-2 rounded" target="_blank" rel="noopener noreferrer">
                                Code
                            </a>
                        </div>
                    </div>
                ))}

                <div className="bg-white p-8 shadow-md mb-8 mx-auto" style={{ width: '300px', height: '125px' }}>
                    <p>Want to see all of my projects?</p>
                    <br/>
                    <a href="https://github.com/your-github-profile" className="bg-blue-500 text-white px-4 py-2 rounded m-6 mb-6" target="_blank" rel="noopener noreferrer">
                        Go To Github
                    </a>
                </div>
                </div>
            </div>
        </>    
    )
}

export default page