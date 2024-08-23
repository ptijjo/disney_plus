"use client"
import React, { useEffect, useState } from 'react';
import GetApi from '@/services/GetApi';
import CategorieGenre from './CategorieGenre';
import GenreList from '@/lib/GenreList';
const Categories = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        GetApi.getVideos
            .then((data) => setData(data.data.results))
            .catch(error => console.error(`Oups une erreur s'est produite 🤯 : ${error}`))
    }, []);




    return (
        <div className='w-full flex flex-col items-center p-1.5'>
            {GenreList.map((item: { id: number, name: string }) => {
                return (
                    < CategorieGenre key={item.id} elem={data} genre={item} />
                )
            }
            )}

        </div>
    )
}

export default Categories
