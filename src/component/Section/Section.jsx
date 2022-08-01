import React,{ useState, useEffect } from 'react'

import './Section.css'

function Section() {
    const EmpUrl='https://randomuser.me/api/?results=10';
    const[data,setData]=useState([]);
    useEffect(() => {
        fetch(EmpUrl).then((response)=>{
            response.json().then((data)=>{
                console.log(data)
                 setData(data);
            })
        })
    },[])

  return (
    <div></div>
  )
}

export default Section