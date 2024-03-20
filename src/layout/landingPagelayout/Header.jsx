import React,{useEffect, useState} from 'react'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-scroll';
import { Link as RauterLink } from 'react-router-dom';
import { FaXmark,FaBars } from "react-icons/fa6";


const Header = () => {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const[isSticky,setIsSticky]=useState(false);

 const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
 }

 useEffect(()=>{
    const handleScroll=()=>{
        if(window.scrollY>100){
            setIsSticky(true)
        }
        else{
           isSticky(false);
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.addEventListener('scroll',handleScroll);
        }
    }
 })   

 //Header Item array list
  const navbarItem=[
    {link:"Home",path:'home'},
    {link:"Product",path:'product'},
    {link:"Testimonial",path:'testimonial'},
    {link:"Pricing",path:'prcing'},
    {link:"Blog",path:'blog'},
    {link:"Resources",path:'Resources'},
  ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 right-0 left-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 left-0 border-b bg-white duration-300":""}`}>
           <div className='flex justify-between items-center text-base gap-8'>
              <a className='text-2xl font-semibold flex items-center space-x-3' href="">
                <img src={logo} alt="" className='w-12 inline-block items-center' />
                <span className= ' text-black'>TrueConnect</span>
              </a>
              <ul className='md:flex space-x-12 hidden'>
  {navbarItem.map(({ link, path }) => (
    <Link key={path} to={path} spy={true} smooth={true} offset={-100} className='block text-base text-stone-900 hover:text-red-600 font-semibold'>
      <RauterLink to={`/${path}`}>{link}</RauterLink>
    </Link>
  ))}
</ul>
              {/* button for large device */}
              <div className='space-x-12 hidden lg:flex items-center'>
               <RauterLink to="/login"> <a href="" className='hidden lg:flex items-center text-red-400 hover:text-black'>Login</a></RauterLink>
               <Link> <button className='bg-red-400 text-black py-2 px-2 transition-all rounded hover:bg-red-200 hover:text-black'> <RauterLink to="/signup"> Sign up </RauterLink></button></Link>

              </div>
              {/* mobile btn for only mobile devices */}
              <div className='md:hidden'>
                   <button
                    onClick={toggleMenu}
                   
                   className='focus:outline-none focus:text-gray-500'>
                    {
                        isMenuOpen?(<FaXmark className='h-6 text-black'/>):(<FaBars className='h-6 w-6'/>)
                    }
                   </button>
              </div>
           </div>
           {/* items items here start for mobile devices */}
           <div className={`space-y-4 px-4 mt-4 py-7 bg-red-600 ${isMenuOpen? "block fixed top-0 right-0 left-0":"hidden"}`}>
            {
                navbarItem.map(({link,path})=><Link key={path} to={path} spy={true} smooth={true} offset={-100} className='block text-base text-white hover:text-gray-600 font-semibold'>{link}</Link>)
            }
           </div>
        </nav>
    </header>
  )
}

export default Header