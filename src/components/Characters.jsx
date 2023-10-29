import React, { useState, useEffect } from 'react'
import Card from './Card'

const Characters = () => {

    const [data, setData] = useState([])
    console.log(data)


    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://rickandmortyapi.com/api/character").then((res) => res.json())
                .then((res) => setData(res?.results))
                .catch(err => console.log(err))
        }

        fetchData()
    }, [])

    return (
        <div className="">
            {data?.map(item => <Card {...item}/>)}
        </div>
    )

}

export default Characters