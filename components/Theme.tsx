import React from 'react';
import Image from 'next/image';
const ListCategorie = [
    {
        nom: "disney",
        icone: "/Images/disney.png",
        video: "/Videos/disney.mp4"
    },
    {
        nom: "marvel",
        icone: "/Images/marvel.png",
        video: "/Videos/marvel.mp4"
    },
    {
        nom: "pixar",
        icone: "/Images/pixar.png",
        video: "/Videos/pixar.mp4"
    },
    {
        nom: "starwars",
        icone: "/Images/starwars.png",
        video: "/Videos/star-wars.mp4"
    },
    {
        nom: "national geographic",
        icone: "/Images/nationalG.png",
        video: "/Videos/national-geographic.mp4"
    }
]

const Theme = () => {
    return (
        <div className='w-full h-16 lg:h-32 lg:w-[90%] my-5 flex flex-row items-center cursor-pointer gap-1'>
            {ListCategorie.map((item) => (
                <div key={item.nom} className='relative h-full w-full'>
                    <Image src={item.icone} alt={item.nom} className='min-w-full h-full z-[1]' priority height={640} width={800} />
                    <video autoPlay loop muted className='min-w-full h-full absolute top-[50%] -translate-y-1/2 z-0 bg-transparent opacity-0 hover:opacity-50'>
                        <source src={item.video} type='video/mp4' />
                        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
                    </video>
                </div>
            ))}

        </div>
    )
}

export default Theme;
