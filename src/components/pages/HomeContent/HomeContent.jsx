import React from 'react'
import Link from 'next/link';


const HomeContent = () => {
    return (
        <>
            <section className="container mx-auto mt-8 p-4 mb-18 flex flex-row ml-16 overflow-x-hidden">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-4 text-sky-400">Hi👋🏻, I am Subhro Mondal</h1>
                    <p className="text-2xl font-semibold mb-4">Web Developer</p>
                    <p className="text-1xl font-semibold mb-4">Building Web Applications </p>

                    <div className="flex flex-row space-x-4">
                        <Link href="/about" legacyBehavior>
                            <a className="bg-sky-500 text-white px-4 py-2 rounded">About Me</a>
                        </Link>
                        <Link href="/projects" legacyBehavior>
                            <a className="bg-pink-400 text-white px-4 py-2 rounded">My Projects</a>
                        </Link>
                    </div>
                </div>

                <div className='ml-72'>
                    <img
                        src="my.jpg"
                        alt="Subhro's Image"
                        className="rounded-full h-40 w-40 object-cover"
                    />
                </div>
            </section>


        </>
    )
}

export default HomeContent