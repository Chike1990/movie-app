import React, { useState } from 'react'
import "../styles/Navbar.css"

const Navbar = ({onSearch, onSelectGenre, onSort})=> {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectGenre, setSelectGenre] = useState("All")

  const handleSearchChange = (e)=> {
    const query = e.target.value
    setSearchQuery(query)
    // onSearch(query)
  }
  const handleGenreChange = (e)=> {
    const genre = e.target.value
    setSelectGenre(genre)
    // onSelectGenre(genre)
  }

  const handleSortChange = (e)=> {
    const sortOption = e.target.value
    onSort(sortOption)
  }



  return (
    <div className='navbar'>
    <div className='logo'>mFlix</div>
    <input type='text' placeholder='Search movie title...' value={searchQuery} onChange={handleSearchChange}/>
    <select value={selectGenre} onChange={handleGenreChange}>
        <option>All</option>
        <option>Action</option>
        <option>Drama</option>
        <option>Comedy</option>
    </select>
    <select onChange={handleSortChange}>
        <option>Alphabetically</option>
        <option>Release Date</option>
        <option>Rating</option>
    </select>
    <div className='user-icon'>🧑🏾‍💻</div>
    </div>
  )
}

export default Navbar
