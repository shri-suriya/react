import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';

const clickHandle = event => {
  event.preventDefault()
}

function Details() {
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
  const SearchName = (e) => {
    e.preventDefault()
    let Newname = data.filter((item) => item.name.first === searchStr);
    setData(Newname);
    console.log(Newname);
  }

  return (

    <div>
      <Navbar />
      <div><br></br><form onSubmit={SearchName} >
        <input type="text" className='search' placeholder="Search" onChange={(e) => setSearchStr(e.target.value)} />
        <button className='btn' type="submit">Search</button>
      </form><br></br></div>
      {
        (data.length > 0 && data.map((obj, key) => (
          <div>
          <span className='First'>Name:{obj.name.title}.{obj.name.first} {obj.name.last}</span><br></br>

          </div>
        )))
      }{
        data.length === 0 && <h1>no data available</h1>
      }
    </div>

  )

}

export default Details