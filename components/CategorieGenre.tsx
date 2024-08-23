import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import GetApi from "@/services/GetApi";
import Image from "next/image";



interface Video {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  // Ajoutez d'autres propriétés si nécessaire
}

interface Genre {
  id: number;
  name: string;
}

interface Props {
  elem: Video[];
  genre: Genre;
}

const CategorieGenre = (props: Props) => {
  const data = props.elem.filter((item: Video) => {

    const resultat = item.genre_ids.includes(props.genre.id);

    return resultat;
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl flex w-full px-14 hover:underline underline-offset-8 cursor-pointer">{props.genre.name}</h2>
      <div className='h-full w-full lg:w-[90%] flex flex-row'>
        <Carousel opts={{
          align: "start",
        }}
          className="h-[250px] scroll-smooth w-full relative">
          <CarouselContent className="w-full h-[150px] lg:h-[200px] m-0 p-0">
            { data.map((item) => (
              <CarouselItem key={item.id} className=" basis-1/3 md:basis-1/4 lg:basis-1/6 w-[100%] h-full m-0 p-2 relative hover:scale-105 transition ease-linear">
                <div className="w-[100%] h-full cursor-pointer  hover:border border-cyan-500">
                  <Image src={`${GetApi.ImageBaseUrl}${item.poster_path}`} width={1500} height={1500} alt={item.poster_path} priority className="w-full h-full" />
                </div>
                <p className="absolute text-white top-3/4 -translate-y-1/2 left-5">{item.title}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden lg:flex hover:scale-150 absolute top-[40%] -translate-y-1/2' />
          <CarouselNext className='hidden lg:flex hover:scale-150 absolute top-[40%] -translate-y-1/2' />
        </Carousel>
      </div>
    </div>
  );
};

export default CategorieGenre;
