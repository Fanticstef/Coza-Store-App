import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Model from '../pages/Model'
import { setSearchTerm } from '../redux/productSlice'

// Navliks data

const navLinks = [{ route: '', content: 'Home' }, { route: 'shop', content: 'Shop' }, { route: 'check-out', content: 'Features' }, { route: 'about', content: 'About' }, { route: 'contact', content: 'Contact' }]

const Navbar = () => {
    const { products } = useSelector((state) => state.cart)

    const [showModel, setShowModel] = useState(false)

    const [search, setSearch] = useState("")
    const [showSearchInput, setsShowSearchInput] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()

        dispatch(setSearchTerm(search))
        navigate("/filter-data")
    }

    const handlerEmptySearch = () => {
        if (search === "") {
            navigate("/")
        }
    }

    return (
        <>
            <header>
                <div className="container-menu-desktop">

                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">

                            <Link to="/" className="logo">
                                {/* <img src="images/icons/logo-01.png" alt="IMG-LOGO" /> */}
                                <h2 className='stext-109 cl4 fs-3 text-dark'>Coza <span className='stext-109 cl4 fs-3'>Store</span></h2>
                            </Link>

                            <div className="menu-desktop">
                                {
                                    navLinks.map((navlink, i) => (
                                        <ul className="main-menu" key={i}>
                                            <li>
                                                <Link to={`/${navlink.route}`}>{navlink.content}</Link>
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>

                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                    <form onSubmit={handleSearch}>
                                        <div className="bor8 how-pos4-parent">
                                            <input
                                                type="search"
                                                name="search"
                                                placeholder="Serach"
                                                className="stext-111 cl2 plh3 size-116 ps-4 p-r-30 fs-6"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                onBlur={handlerEmptySearch}
                                            />
                                            {/* <i className="zmdi zmdi-search"></i> */}
                                        </div>
                                    </form>
                                </div>

                                <Link to="/cart">
                                    <div
                                        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                                        data-notify={products.length > 0 ? products.length : 0}
                                    >
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                    </div>
                                </Link>

                                {/* <Link to="/">
                                    <div className="text-dark fs-4 ps-3">
                                        <i className="fa fa-user"></i>
                                    </div>
                                </Link> */}

                                <div className="text-dark fs-4 ps-3" onClick={() => setShowModel(true)}>
                                    <i className="fa fa-user pe-2 user-icon-pointer"></i>
                                </div>

                                {
                                    showModel && <Model setShowModel={setShowModel} />
                                }
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="wrap-header-mobile">
                    <nav className="navbar bg-body-tertiary fixed-top">
                        <div className="container-fluid">
                            <div className="logo-mobile">
                                <Link to="/">
                                    <h2 className='stext-109 cl4 fs-3 text-dark'>Coza <span className='stext-109 cl4 fs-3'>Store</span></h2>
                                </Link>
                            </div>

                            <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                                <div
                                    className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search"
                                    onClick={() => setsShowSearchInput(!showSearchInput)}>
                                    <i className="zmdi zmdi-search"></i>
                                </div>

                                <Link to="/cart">
                                    <div
                                        className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                                        data-notify={products.length > 0 ? products.length : 0}>
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                    </div>
                                </Link>

                                <div className="text-dark fs-4 ps-3" onClick={() => setShowModel(true)}>
                                    <i className="fa fa-user pe-2 user-icon-pointer"></i>
                                </div>

                                {
                                    showModel && <Model setShowModel={setShowModel} />
                                }
                            </div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <div className="logo-mobile">
                                        <Link to="/">
                                            <h2 className='stext-109 cl4 fs-3 text-dark'>Coza <span className='stext-109 cl4 fs-3'>Store</span></h2>
                                        </Link>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    {
                                        navLinks.map((navlink, i) => (
                                            <ul className="main-menu navbar-nav justify-content-end flex-grow-1" key={i}>
                                                <li className='nav-item'>
                                                    <Link to={`/${navlink.route}`} className='nav-link'>{navlink.content}</Link>
                                                </li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {
                    showSearchInput && (
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search my-3">
                            <form onSubmit={handleSearch}>
                                <div className="bor8 how-pos4-parent">
                                    <input
                                        type="search"
                                        name="search"
                                        placeholder="Serach..."
                                        className="stext-111 cl2 plh3 size-116 ps-4 p-r-30 fs-5 rounded border"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        onBlur={handlerEmptySearch}
                                    />
                                    {/* <i className="zmdi zmdi-search"></i> */}
                                </div>
                            </form>
                        </div>
                    )
                }
            </header>
        </>
    )
}

export default Navbar
