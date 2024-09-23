import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const CheckOut = ({ setOrder }) => {

    const [openDc, setOpenDc] = useState('dc')

    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        zip: ''
    })

    const Navigate = useNavigate()

    const cart = useSelector((state) => state.cart)

    const handleOrder = () => {
        const newOrder = {
            products: cart.products,
            orderNumber: '12432',
            shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        Navigate('/order-confirm')
    }

    return (
        <>
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <Link to="/" className="stext-109 cl8 hov-cl1 trans-04 fs-6">
                        Home
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </Link>

                    <span className="stext-109 cl4 fs-6">
                        ChechOut
                    </span>
                </div>
            </div>

            <div className="bg0 p-t-75 p-b-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                            <h2 className="mtext-109 cl2 p-b-30">
                                ChechOut
                            </h2>
                            <div className="">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header stext-109 cl4 fs-6">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Billing Information
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <form action="" className='ps-3 pe-4 my-3'>
                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                    <label className="mb-1">Name</label>
                                                    <input type="text" className='border w-100 py-2 px-3' placeholder='Enter Name' />
                                                </div>
                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                    <label className="mb-1">Email</label>
                                                    <input type="email" className='border w-100 py-2 px-3' placeholder='Enter Email' />
                                                </div>
                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                    <label className="mb-1">Phone</label>
                                                    <input type="number" className='border w-100 py-2 px-3' placeholder='Enter Phone' />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header stext-109 cl4 fs-6">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Shipping Information
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <form action="" className='ps-3 pe-4 my-3'>
                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                    <label className="mb-1">Address</label>
                                                    <input
                                                        type="text"
                                                        className='border w-100 py-2 px-3'
                                                        placeholder='Enter Address'
                                                        name='address'
                                                        value={shippingInfo.address}
                                                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
                                                </div>
                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                    <label className="mb-1">City</label>
                                                    <input
                                                        type="text"
                                                        className='border w-100 py-2 px-3'
                                                        placeholder='Enter City'
                                                        name='city'
                                                        value={shippingInfo.city}
                                                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
                                                </div>
                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                    <label className="mb-1">Zip Code</label>
                                                    <input
                                                        type="number"
                                                        className='border w-100 py-2 px-3'
                                                        placeholder='Enter Zip Code'
                                                        name='zip'
                                                        value={shippingInfo.zip}
                                                        onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })} />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header stext-109 cl4 fs-6">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Payment Method
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="ps-2 pe-4 my-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="payment" checked={openDc === "cash"} onChange={() => setOpenDc("cash")} />
                                                    <label className="form-check-label">
                                                        Cash on Delivery
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="payment" checked={openDc === "dc"} onChange={() => setOpenDc("dc")} />
                                                    <label className="form-check-label">
                                                        Debit Card
                                                    </label>
                                                    {
                                                        openDc === 'dc' && (
                                                            <div className="my-4 border rounded-1 p-3" style={{ backgroundColor: "lightgray" }}>
                                                                <h5 className='mb-2'>Debit Card Information</h5>
                                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                                    <label className="mb-1">Card Number</label>
                                                                    <input type="text" className='border w-100 py-2 px-3' placeholder='Card Number' />

                                                                </div>
                                                                <div className="mb-3 stext-109 cl4 fs-6">
                                                                    <label className="mb-1">Card Holder Name</label>
                                                                    <input type="text" className='border w-100 py-2 px-3' placeholder='Card Holder Name' />
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="mb-3 stext-109 cl4 fs-6">
                                                                            <label className="mb-1">Expiry Date</label>
                                                                            <input type="text" className='border w-100 py-2 px-3' placeholder='MM/YY' />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="mb-3 stext-109 cl4 fs-6">
                                                                            <label className="mb-1">CVV</label>
                                                                            <input type="text" className='border w-100 py-2 px-3' placeholder='CVV' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                            <div className="bor10 px-3 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                <h4 className="mtext-109 cl2 p-b-30">
                                    Order Summary
                                </h4>
                                {
                                    cart.products.map((product, i) => (
                                        <>
                                            <div className="row" key={i}>
                                                <div className="col-9">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img src={product.pic} width="50px" alt="image" />
                                                        </div>
                                                        <div className="col-8">
                                                            <h6 className='stext-109 cl4 fs-6'>{product.title}</h6>
                                                            <span className='stext-109 cl4 fs-6'>
                                                                <span className='fw-semibold pe-1'>&#8377;</span>
                                                                <span>{product.price} X {product.quantity}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <span className='stext-109 cl4 fs-6'>
                                                        <span className='fw-semibold pe-1'>&#8377;</span>
                                                        {product.totalPrice.toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    ))
                                }
                                <div className="row my-3">
                                    <div className="d-flex justify-content-between">
                                        <p className='stext-109 cl4 fs-5'>Total Price : </p>
                                        <span className='stext-109 cl4 fs-5'>
                                            <span className='fw-semibold pe-1'>&#8377;</span>
                                            {cart.totalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer mb-3 stext-109 cl4 fs-6"
                                    onClick={handleOrder}>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut
