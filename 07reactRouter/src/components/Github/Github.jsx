import React from "react";
import {useEffect,useState} from "react"
import{useLoaderData} from 'react-router-dom'

function Github(){
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //      fetch('github.com/users/PariInCode')
    //      .then(res => res.json())
    //      .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //      })
    // },[])
    return(
        <div className="text-center m-4 p-4 bg-gray-600 text-white">Github: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={250} />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async()=>{
   const res = await fetch('https://api.github.com/users/PariInCode')
    return res.json()
    
}