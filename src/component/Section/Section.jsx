import React, { useState, useEffect } from 'react'

import './Section.css'

const clickHandle = event => {
    event.preventDefault()
}

function Section() {
    const details = localStorage.getItem("EmpInfo") || "[]";
    const EmpUrl = 'https://randomuser.me/api/?results=10';
    const [data, setData] = useState(JSON.parse(details));
    const [searchStr, setSearchStr] = useState('');
    useEffect(() => {
        fetch(EmpUrl).then((response) => {
            response.json().then((data) => {
                console.log(data)
                setData(data.results);
                localStorage.setItem("EmpInfo", JSON.stringify(data.results));
            })
        })
    }, [])
    const SearchName =(e)=>{
        e.preventDefault()
        let Newname=data.filter((item) => item.name.first === searchStr);
        setData(Newname);
        console.log(Newname);
      }
    
    return (
        <div>
        <div><br></br><form  onSubmit={SearchName} >
            <input type="text" className='search' placeholder="Search" onChange={(e)=>setSearchStr(e.target.value)}/>
            <button className='btn' type="submit">Search</button>
        </form><br></br></div>
            {
                (data.length > 0 && data.map((obj, key) => (
                    <div className='Content' key={key}>
                        <div className='second'>
                        <img src={obj.picture.large}></img>
                        <div/>
                        <div className='Detail'>
                        <span className='First'>Name:{obj.name.title}.{obj.name.first} {obj.name.last}</span><br></br>
                        <span className='Second'>Gender:{obj.gender}</span><br></br>
                        <span className='Third'>Location:{obj.location.state}</span><br></br>
                        <span className='Fourth'>Email:{obj.email}</span><br></br>
                        <span className='Fifth'>Dob:{obj.dob.date},<br>
                        </br>Age:{obj.dob.age}</span><br></br>
                        <span className='Sixth'>Phone:{obj.phone}</span><br></br>
                        </div>
                        </div>
                    </div>
                )))
            }{
                data.length === 0 && <h1>no data available</h1>
            }
        </div>
        
    )
    
}

export default Section