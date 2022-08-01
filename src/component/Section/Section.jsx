import React,{ useState, useEffect } from 'react'

import './Section.css'

function Section() {
    const EmpUrl='https://randomuser.me/api/?results=10';
    const[data,setData]=useState([]);
    useEffect(() => {
        fetch(EmpUrl).then((response)=>{
            response.json().then((data)=>{
                console.log(data)
                 setData(data.results);
            })
        })
    },[])

    return (
        <div>
            {
                (data.length > 0 && data.map((obj,key) => (
                    <div className='Content' key={key}>
                        <img src={obj.picture.large}></img>
                        <span className='First'>Name:{obj.name.title}.{obj.name.first} {obj.name.last}</span><br></br>
                        <span className='Second'>Gender:{obj.gender}</span><br></br>
                        <span className='Third'>Location:{obj.location.state}</span><br></br>
                        <span className='Fourth'>Email:{obj.email}</span><br></br>
                        <span className='Fifth'>Dob:{obj.dob.date},<br>
                        </br>Age:{obj.dob.age}</span><br></br>
                        <span className='Sixth'>Phone:{obj.phone}</span><br></br>
                        
                    </div>
                )) )
            }{
                data.length === 0 && <h1>no data available</h1>
            }
        </div>
      )
    }

export default Section