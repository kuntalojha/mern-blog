// client/src/conponents/Footer.jsx
// import React from 'react'

// Import footer from flowbite-react
import { Footer } from 'flowbite-react';

// Inport link from react-router-dom
import { Link } from 'react-router-dom';

// Import Icon from react-icons
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          {/* This is starting of  logo part  */}
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              {/* Here I make logo using muli colour  */}
              <span className='px-2 p-1 bg-gradient-to-r from-indigo-500 to bg-pink-500 rounded-lg text-white'>
                Kuntal's
              </span>
              Blog
            </Link>
          </div>
          {/* This is end of  logo part  */}
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              {/* Footer.Title is the title */}
              <Footer.Title title='About' />
              {/* Footer.LinkGroup Here I add Every link inside this. */}
              <Footer.LinkGroup col>
                {/* This is how we add link  */}
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kuntal's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              {/* Footer.Title is the title */}
              <Footer.Title title='Follow Us' />
              {/* Footer.LinkGroup Here I add Every link inside this. */}
              <Footer.LinkGroup col>
                {/* This is how we add link  */}
                <Footer.Link
                  href='https://github.com/kuntalojha'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              {/* Footer.Title is the title */}
              <Footer.Title title='Legal' />
              {/* Footer.LinkGroup Here I add Every link inside this. */}
              <Footer.LinkGroup col>
                {/* This is how we add link  */}
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-crnter sm:justify-between '>
          <Footer.Copyright
            href='#'
            by="Kuntal' s Blog "
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='https://github.com/kuntalojha' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
