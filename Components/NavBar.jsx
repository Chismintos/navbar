import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <div className='flex bg-red-200 justify-evenly text-xl sm:bg-blue-200 md:bg-green-200 lg:bg-yellow-200'>
        <h>Logo</h>

        <ul className='flex space-x-16  '>
            <li>btn1</li>
            <li>btn2</li>
            <li>btn3</li>
        </ul>

        <h1>SIGN UP | LOG IN</h1>

      </div>
    </nav>
  )
}

export default NavBar 