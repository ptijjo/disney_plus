"use client"
import React, { useEffect, useState } from 'react';
import GetApi from '@/services/GetApi';
import CategorieAction from './CategorieAction';

const Categories = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        GetApi.getVideos
            .then((data) => setData(data.data.results))
            .catch(error => console.error(`Oups une erreur s'est produite 🤯 : ${error}`))
    }, []);

    //console.log(data);
   

    return (
        <div className='border w-full'>
            <CategorieAction elem={data}/>
        </div>
    )
}

export default Categories
