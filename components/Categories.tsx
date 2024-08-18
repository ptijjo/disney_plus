"use client"
import React, { useEffect, useState } from 'react';
import GetApi from '@/services/GetApi';

const Categories = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        GetApi.getVideos
            .then((data) => setData(data.data.results))
            .catch(error => console.error(`Oups une erreur s'est produite 🤯 : ${error}`))
    }, []);

    //console.log(data);

    const cat = data.map((cate: { genre_ids: number }) => (
        cate.genre_ids
    ));

  

    console.log(cat);
   


    return (
        <div className='border w-full'>

        </div>
    )
}

export default Categories
