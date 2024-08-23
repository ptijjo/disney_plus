"use client"
import GetApi from '@/services/GetApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";



const Affiche = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        GetApi.getVideos
            .then((data) => setData(data.data.results))
            .catch(error => console.error(`Oups une erreur s'est produite 🤯 : ${error}`))
    }, []);

    return (
        <div className='flex flex-row relative items-center justify-around h-[200px]  md:h-[400px] lg:h-[600px] w-full'>
            <div className='h-full w-full flex flex-row'>
                <Carousel className='w-full scroll-smooth relative h-full' opts={{ loop: true, }} plugins={[Autoplay({ delay: 2000 })]}>
                    <CarouselContent className='min-w-full h-[200px] md:h-[400px] lg:h-[600px]'>
                        {data?.map((affiche: { id: number, name: string, backdrop_path: string, title: string }) => (
                            <CarouselItem key={affiche.id} className='w-full h-full relative'>
                                <div className='w-full h-full '>
                                    <Image src={`${GetApi.ImageBaseUrl}${affiche.backdrop_path}`} alt={affiche.backdrop_path} height={1500} width={1500} priority className='w-full h-full' />
                                </div>
                                {(affiche.title) ? <p className=' absolute text-white top-3/4 left-10 z-50 text-xl lg:text-5xl lg:top-3/4'>{affiche.title}</p> :
                                    <p className=' absolute text-white top-3/4 left-6 z-50 text-2xl lg:text-5xl lg:top-3/4'>{affiche.name}</p>}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden lg:flex absolute top-1/2 translate-y-1/2 left-5 hover:scale-150 hover:translate-y-1/2' />
                    <CarouselNext className='hidden lg:flex absolute top-1/2 translate-y-1/2 right-5 hover:scale-150 hover:translate-y-1/2' />
                </Carousel>
            </div>

        </div>
    )
}

export default Affiche
