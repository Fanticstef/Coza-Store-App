import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decreaseQty, increaseQty, removeFromCart } from '../redux/cartSlice'

const Cart = () => {

    const { products } = useSelector((state) => state.cart)
    const cart = useSelector((state) => state.cart)

    const Navigate = useNavigate()

    const dispatch = useDispatch()

    let totalQty = products.map((item) => {
        let val = item.quantity
        return val
    })

    return (
        <>
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <Link to="/" className="stext-109 cl8 hov-cl1 trans-04 fs-6">
                        Home
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </Link>

                    <span className="stext-109 cl4 fs-6">
                        Shoping Cart
                    </span>
                </div>
            </div>

            {
                products.length > 0 ?
                    (<form className="bg0 p-t-75 p-b-85">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                                    <div className="m-l-25 m-r--38 m-lr-0-xl">
                                        <div className="wrap-table-shopping-cart">
                                            <table className="table-shopping-cart">
                                                <thead>
                                                    <tr className="table_head">
                                                        <th className="column-1">Product</th>
                                                        <th className="column-2"></th>
                                                        <th className="column-3">Price</th>
                                                        <th className="column-4">Quantity</th>
                                                        <th className="column-5">Total</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        products.map((product) => (
                                                            <tr className="table_row" key={product.id}>
                                                                <td className="column-1">
                                                                    <div className="how-itemcart1" onClick={() => dispatch(removeFromCart(product.id))}>
                                                                        <img src={product.pic} alt="IMG" />
                                                                    </div>
                                                                </td>
                                                                <td className="column-2">{product.title}</td>
                                                                <td className="column-3 px-2">
                                                                    <span className='fw-semibold pe-1'>&#8377;</span>
                                                                    {product.price}
                                                                </td>
                                                                <td className="column-4">
                                                                    <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                                        <div
                                                                            className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                                                                            onClick={() => dispatch(decreaseQty(product.id))}>
                                                                            <i className="fs-16 zmdi zmdi-minus"></i>
                                                                        </div>

                                                                        <input
                                                                            className="mtext-104 cl3 txt-center num-product"
                                                                            type="number"
                                                                            name="num-product1"
                                                                            value={product.quantity}
                                                                            onChange={() => console.log("done")} />

                                                                        <div
                                                                            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                                                                            onClick={() => dispatch(increaseQty(product.id))}>
                                                                            <i className="fs-16 zmdi zmdi-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="column-5">
                                                                    <span className='fw-semibold pe-1'>&#8377;</span>
                                                                    {product.totalPrice.toFixed(2)}
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>

                                            </table>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                                    <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                        <h4 className="mtext-109 cl2 p-b-30">
                                            Cart Totals
                                        </h4>

                                        <div className="flex-w flex-t bor12 p-b-13">
                                            <div className="size-208">
                                                <span className="stext-110 cl2">
                                                    Total Items:
                                                </span>
                                            </div>

                                            <div className="size-209">
                                                <span className="mtext-110 cl2">
                                                    {/* {cart.totalQuantity} */}
                                                    {totalQty.reduce((a,b) => a + b)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-w flex-t p-t-27 p-b-33">
                                            <div className="size-208">
                                                <span className="mtext-101 cl2">
                                                    Total:
                                                </span>
                                            </div>

                                            <div className="size-209 p-t-1">
                                                <span className="mtext-110 cl2">
                                                    <span className='fw-semibold pe-1'>&#8377;</span>
                                                    {cart.totalPrice.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer mb-3"
                                            onClick={() => Navigate("/check-out")}>
                                            Proceed to Checkout
                                        </button>

                                        <Link to="/shop">
                                            <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer mb-3">
                                                Shoping
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>) :
                    (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src="/images/empty_cart.jpg" className='set-image-cart' alt="emty-cart" />
                            <h2 className='text-secondary mb-4'>Your Cart is Empty</h2>

                            <Link to="/shop">
                                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer mb-3 px-5">
                                    Go to Shoping
                                </button>
                            </Link>
                        </div>
                    )
            }
        </>
    )
}

export default Cart
