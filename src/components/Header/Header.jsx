import React from 'react'

const Header = () => {
    return (
        <>
            <div className='max-w-[1280px] mx-auto '>
                <header>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><a>Home</a></li>
                                    <li><a>Recipes</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Search</a></li>
                                </ul>
                            </div>
                            <a className="md:text-3xl font-bold">Recipe Calories</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a className='text-sm md:text-lg font-semibold'>Home</a></li>
                                <li><a className='text-sm md:text-lg font-semibold'>Recipes</a></li>
                                <li><a className='text-sm md:text-lg font-semibold'>About</a></li>
                                <li><a className='text-sm md:text-lg font-semibold'>Search</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end flex gap-2 items-center">

                            <div className='search_bar hidden md:block'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                            <a><img className='w-[55px]' src="https://img.icons8.com/?size=80&id=108652&format=png" alt="user photo" /></a>

                        </div>
                    </div>
                    
                    {/* search bar for mobile */}
                    {/* <div className='search_bar'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div> */}
                </header>
            </div>

        </>
    )
}

export default Header