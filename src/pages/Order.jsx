import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Order = ({ order }) => {

    const Navigate = useNavigate()

    return (
        <>
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <Link to="/" className="stext-109 cl8 hov-cl1 trans-04 fs-6">
                        Home
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </Link>

                    <span className="stext-109 cl4 fs-6">
                        Order
                    </span>
                </div>
            </div>

            <div className="bg0 p-t-104 p-b-116">
                <div className="container">
                    <div className="row">
                        <div className="mb-3">
                            <h4 className='mtext-109 cl2'>
                                thank you for your order!
                            </h4>
                            <p className='stext-109 cl4 fs-6'>Your Order is has been placed successfully. You will receive an email confirmation shortly.</p>
                        </div>
                        <div className="col-md-8 rounded-1 p-4" style={{ backgroundColor: "#e5e7e9" }}>
                            <div className="size-212 p-t-2 mb-2">
                                <span className="mtext-110 cl2">
                                    Order Summary
                                </span>

                                <p className="stext-115 size-213">
                                    Order Number : <span>{order.orderNumber}</span>
                                </p>
                            </div>
                            <div className="size-212 p-t-2 mb-2">
                                <span className="mtext-110 cl2">
                                    Shipping Information
                                </span>

                                <div className="stext-115 size-213">
                                    <div>{order.shippingInfo.address}</div>
                                    <div>{order.shippingInfo.city}</div>
                                    <div>{order.shippingInfo.zip}</div>
                                </div>
                            </div>
                            <div className="size-212 p-t-2 mb-2">
                                <span className="mtext-110 cl2">
                                    Products Ordered
                                </span>
                                {
                                    order.products.map((product) => (
                                        <div className="row" key={product.id}>
                                            <div className="col-md-10">
                                                {product.title} <span className='px-2'>X</span> {product.quantity}
                                            </div>
                                            <div className="col-md-2">
                                                <span className='stext-109 cl4 fs-5 text-danger'>
                                                    <span className='fw-semibold pe-1'>&#8377;</span>
                                                    {product.price * product.quantity}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="size-212 p-t-2 mb-2">
                                <div className="row">
                                    <div className="col-md-10">
                                        <span className="mtext-110 cl2">
                                            Total Price :
                                        </span>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="stext-115 size-213">
                                            <span className='stext-109 cl4 fs-5 text-danger'>
                                                <span className='fw-semibold pe-1'>&#8377;</span>
                                                {order.totalPrice.toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 d-flex gap-3">
                            <button
                                className='flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail bg-success'
                            >
                                Track Order
                            </button>
                            <button
                                className='flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail bg-warning'
                                onClick={() => Navigate("/shop")}>
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order
