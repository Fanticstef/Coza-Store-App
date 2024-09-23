import React, { useEffect } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../redux/productSlice'
import { productData } from '../../db'
import { Link } from 'react-router-dom'

const Shop = () => {
    const { products } = useSelector((state) => state.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProduct(productData))
    }, [])
    return (
        <>
            <div className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 p-b-10">
                            <h3 className="ltext-103 cl5">
                                Product
                            </h3>
                        </div>
                        <div className="col-md-2 p-b-10">
                            <Link to="/">
                                <button className='border py-3 px-5'>
                                    <i className="fa fa-long-arrow-left pe-2" aria-hidden="true"></i>
                                    <span className='fs-5 btn-style'>Back</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row my-4">
                        {
                            products.map((product) => (
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

export default Shop
