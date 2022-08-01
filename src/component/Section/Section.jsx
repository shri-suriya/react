import React, { useState, useEffect } from 'react'

import './Section.css'



function Section() {
    const details = localStorage.getItem("EmpInfo") || "[]";
    const EmpUrl = 'https://randomuser.me/api/?results=10';
    const [data, setData] = useState(JSON.parse(details));
    useEffect(() => {
        fetch(EmpUrl).then((response) => {
            response.json().then((data) => {
                console.log(data)
                setData(data.results);
                localStorage.setItem("EmpInfo", JSON.stringify(data.results));
            })
        })
    }, [])
    let searchData = (obj) => {
        let searchedData = data.filter((searchItem) => searchItem.gender == obj.gender)
        localStorage.setItem("EmpInfo", JSON.stringify(searchedData));
        setData(searchedData);
    }
    const clickHandle = event => {
        event.preventDefault()
    }
    return (
        <div>
        <div><form >
            <input type="text" className='search' placeholder="Search"/>
            <button type="submit" onClick={ () => searchData(obj)}>Search</button>
        </form></div>
            {
                (data.length > 0 && data.map((obj, key) => (
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
                )))
            }{
                data.length === 0 && <h1>no data available</h1>
            }
        </div>
    )
}

export default Section