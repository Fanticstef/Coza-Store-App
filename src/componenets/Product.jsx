import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'

const Product = ({ item }) => {
    // console.log("check")

    const dispatch = useDispatch()

    const handleAddToCart = (e, product) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(product))
        alert("Product Added Successfully")
    }

    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35">
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <img src={item.pic} alt="IMG-PRODUCT" />

                        <Link to={`/product-details/${item.id}`} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                            Quick View
                        </Link>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6 fs-5">
                                {item.title.slice(0, 20)}
                            </a>

                            <span className="stext-105 cl3 text-danger fs-4">
                                <span className='fw-semibold'>&#8377;</span>{item.price}
                            </span>
                        </div>

                        <div className="block2-txt-child2 flex-r p-t-3">
                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                {/* <i className="fa fa-heart fs-4" aria-hidden="true"></i> */}
                                <i className="fa fa-heart-o fs-4" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="my-3">
                            <button
                                className='flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail'
                                onClick={(e) => handleAddToCart(e, item)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
