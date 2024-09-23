import React from 'react'
import Product from '../../componenets/Product'

const ProductsPage = () => {
    return (
        <>
            <div className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 p-b-10">
                            <h3 className="ltext-103 cl5">
                                Product Overview
                            </h3>
                        </div>
                        <div className="col-md-2 p-b-10">
                            <button className='border py-3 px-5'>
                                <span className='fs-5 btn-style'>More</span>
                                <i className="fa fa-long-arrow-right ps-2" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row my-4">
                        <Product />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage
