import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>
      <div className='home-nav'>
        <Link to="/"><span>Youtube</span></Link>
      </div>
      <form>
        <input name="searchbox" id="searchbox" type="search" placeholder='Search' />
        <button>search</button>
      </form>
      <div className='profile-nav'>
        <button>P</button>
      </div>
    </header>
  )
}
