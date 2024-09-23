import React, { useEffect } from 'react'
import BannerPage from './Home/BannerPage'
import CategoryPage from './Home/CategoryPage'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../redux/productSlice'
import { productData } from '../../db'
import Product from '../componenets/Product'
import { Link } from 'react-router-dom'

const Home = () => {
    const { products } = useSelector((state) => state.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProduct(productData))
    }, [])

    return (
        <>
            <BannerPage />
            <CategoryPage />
            <div className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 p-b-10">
                            <h3 className="ltext-103 cl5">
                                Products
                            </h3>
                        </div>
                        <div className="col-md-2 p-b-10">
                            <Link to="/shop">
                                <button className='border py-3 px-5'>
                                    <span className='fs-5 btn-style'>More</span>
                                    <i className="fa fa-long-arrow-right ps-2" aria-hidden="true"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row my-4">
                        {
                            products.slice(0, 6).map((product) => (
                                <Product
                                    key={product.id}
                                    item={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
