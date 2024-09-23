import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ setShowModel, setIsLogin }) => {
    const handleSignUp = () => {
        setIsLogin(false)
    }
    return (
        <>
            <div className="modal-wrapper p-1">
                <div className="text-end pointer" onClick={() => setShowModel(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-lg text-dark" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </div>
                <div className="modal-container p-5">
                    <form>
                        <div className="my-3 text-center">
                            <h2 className='stext-109 cl4 fs-3'>Login Page</h2>
                        </div>
                        <div className="mb-3">
                            <label className="form-label stext-109 cl4 fs-6">Email address</label>
                            <input type="email" className="form-control" placeholder='Email' />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label stext-109 cl4 fs-6">Password</label>
                            <input type="password" className="form-control" placeholder='Password' />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3 form-check clearfix">
                            <div className="float-start">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label ps-2 stext-109 cl4 fs-6">Remember me</label>
                            </div>
                            <div className="float-end">
                                <Link to={'/'} className='stext-109 cl4 fs-6 text-decoration-underline' style={{ color: "#0f22a5" }}>Forgot Password?</Link>
                            </div>
                        </div>
                        <button type="submit" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail w-100 mt-4">Login</button>
                        <div className="my-3 text-center">
                            <div className='stext-109 cl4 fs-6'>
                                Don't have an account?
                                <a
                                    className='text-danger ps-1 text-decoration-underline pointer'
                                    onClick={handleSignUp}
                                >Sign Up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
