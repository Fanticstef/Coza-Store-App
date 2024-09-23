import React from 'react'
import { Link } from 'react-router-dom'

const BannerPage = () => {
    return (
        <>
            <section>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active banner-center">
                            <img src="/images/slide-01.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block banner-center-item">
                                <span>Women Collection 2018</span>
                                <h5>NEW SEASON</h5>
                                <div className="mt-5">
                                    <Link to="/shop" className='banner-btn'>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active banner-center">
                            <img src="/images/slide-02.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block banner-center-item">
                                <span>Men Collection 2018</span>
                                <h5>Jackets & Coats</h5>
                                <div className="mt-5">
                                    <Link to="/shop" className='banner-btn'>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default BannerPage
