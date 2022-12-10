import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Home</Link></li>
                        <li><a href='#about' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">About</a></li>
                        <li><a href='#skills' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Skills</a></li>
                        <li><a href='#projects' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Projects</a></li>
                        <li><Link to='/blog' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Blog</Link></li>
                        <li><a href='#contact' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Contact</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl hover:bg-[#3b143e] hover:text-[#e69ceb] font-bold font-serif">ANIKA JUMANA</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Home</Link></li>
                    <li><a href='#about' className="hover:bg-[#3b143e] hover:text-[#f38afb]">About</a></li>
                    <li><a href='#skills' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Skills</a></li>
                    <li><a href='#projects' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Projects</a></li>
                    <li><Link to='/blog' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Blog</Link></li>
                    <li><a href='#contact' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">


                <a href="Anika's Resume.pdf"
                    download="Anika's Resume.pdf">
                    <button className="btn glass text-[#3b143e] hover:text-[#e69ceb] hover:bg-[#3b143e]">Resume</button>
                </a>


            </div>
        </div>
    );
};

export default Header;