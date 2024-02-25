// client/src/Header.jsx
// import React from "react";

// Import Button Navbar, TextInput form flowbite-react
import { Button, Navbar, TextInput } from 'flowbite-react';

// Inport link from react-router-dom
import { Link, useLocation } from 'react-router-dom';

// Inport icon from react-icon
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  // initialize useLocation We wiil use it compare with active path or active page
  const path = useLocation().pathname;
  return (
    // Navebar is use from flowbite-react
    <Navbar className='border-b-2'>
      {/* Link is use from react-router-dom */}
      {/* className is from Tailwindcss (Here I use tailwindcss class) */}
      {/* self-center is use for make center but in self centric */}
      {/* whitespace-nowrap it's reaping the name */}
      {/* text-sm it's make text size small*/}
      {/* sm: We use sm for small screen, text-xl means test should be larg */}
      {/* font-semibold is use for font-weight:600 */}
      {/* dark: this is use what happend when dirk mode enable. Here text-white when dark mode enable */}
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        {/* Here I make logo using muli colour  */}
        <span className='px-2 p-1 bg-gradient-to-r from-indigo-500 to bg-pink-500 rounded-lg text-white'>
          Kuntal's
        </span>
        Blog
      </Link>

      <form>
        {/* TextInput use from flowbite-react and AiOutlineSearch from react-icon/ai*/}
        <TextInput
          type='text'
          placeholder='Search....'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      {/* Button use here from flowbite-react pill is use for make button rounded*/}
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        {/* AiOutlineSearch from react-icon/ai */}
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          {/* FaMoon is a icon from react-icon  */}
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          {/* <Button> use from flowbite-react and outline add the hover effect  */}
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      {/* Droupdown Menu Navebar.Collapse fron flowbite-react*/}
      <Navbar.Collapse>
        {/*  Here I use this path from initalision  */}
        {/* Here I write as={"div"} because we should no write link inside a link its give a error of <a> tag */}
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
