'use client';

interface Social {
    href: string;
    image: string;
    title?: string;
}

export function Social({ href, image, title }: Social ) {
    return (
        <a target="_blank" href={href} title={title} aria-label="Social-links" className="transition duration-300 border border-gray-600 hover:rounded-xl rounded-full p-3 bg-[#1414149c] hover:bg-[#d6d6d617] hover:opacity-70"> 
         <img src={image} alt="Social-links" className="h-8"/>
        </a>
    )
} 