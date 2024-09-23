import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from './Product'

const FilterData = () => {

    const filterData = useSelector((state) => state.product.filteredData)

    return (
        <>
            <div className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 p-b-10">
                            <h3 className="ltext-103 cl5">
                                Products
                            </h3>
                        </div>
                        {
                            filterData.length > 0 ? (
                                <div className="row my-4">
                                    {
                                        filterData.map((product) => (
                                            <Product
                                                key={product.id}
                                                item={product} />
                                        ))
                                    }
                                </div>
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <img src="/images/No_Product_Found.png" className='set-image-filter' alt="No_Product_Found" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterData
