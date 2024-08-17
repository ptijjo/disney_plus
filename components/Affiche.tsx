"use client"
import GetApi from '@/services/GetApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";



const Affiche = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        GetApi.getVideos
            .then((data) => setData(data.data.results))
            .catch(error => console.error(`Oups une erreur s'est produite 🤯 : ${error}`))
    }, []);

    console.log(data);


    return (
        <div className='flex flex-row relative items-center justify-around h-[200px] lg:h-[400px]'>
            <div className='h-full lg:w-[90%] flex flex-row'>
                <Carousel className='w-full scroll-smooth relative' opts={{ loop: true, }} plugins={[Autoplay({ delay: 2000 })]}>
                    <CarouselContent className='w-full h-[400px] m-0 p-0'>
                        {data.map((affiche: { id: number, name: string, backdrop_path: string, title: string }) => (
                            <CarouselItem key={affiche.id} className='w-full h-full m-0 p-0 relative'>
                                <div className='h-full w-full'>
                                    <Image src={`${GetApi.ImageBaseUrl}${affiche.backdrop_path}`} alt={affiche.backdrop_path} height={400} width={1500} priority className='w-auto h-auto z-30 object-cover object-center' />
                                </div>
                                {(affiche.title) ? <p className=' absolute text-white top-1/3 left-6 z-50 text-xl lg:text-5xl lg:top-3/4'>{affiche.title}</p> :
                                    <p className=' absolute text-white top-1/3 left-6 z-50 text-2xl lg:text-5xl lg:top-3/4'>{affiche.name}</p>}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden lg:flex' />
                    <CarouselNext className='hidden lg:flex' />
                </Carousel>
            </div>

        </div>
    )
}

export default Affiche
