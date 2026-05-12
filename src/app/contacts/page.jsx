import React from 'react'

const page = () => {
    return (
        <>
            <div className="container mx-auto mt-8 p-4 text-center">
            <h1 className="text-5xl font-bold mb-8 text-sky-400">Contact Me</h1>

            <p className="text-3xl mb-4">You can write to me at <a href="mailto:mitsubhra@gmail.com" className="text-blue-500">mitsubhra@gmail.com</a></p>

            <p className="text-2xl mb-4">You can connect with me on the following platforms:</p>

            <div className="flex justify-center space-x-4">
                <a href="your_social_media_link" target="_blank" rel="noopener noreferrer">
                    <img src="github.png" alt="Social Media Icon" className="h-8 w-8" />
                </a>
                <a href="your_social_media_link" target="_blank" rel="noopener noreferrer">
                    <img src="instagram.jpg" alt="Social Media Icon" className="h-8 w-8" />
                </a>
                <a href="your_social_media_link" target="_blank" rel="noopener noreferrer">
                    <img src="twitter.png" alt="Social Media Icon" className="h-8 w-8" />
                </a>
            </div>
            </div>
        </>
    )
}

export default page