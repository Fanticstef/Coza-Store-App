import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Model = ({ setShowModel }) => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            {
                isLogin
                    ? <Login setShowModel={setShowModel} setIsLogin={setIsLogin} />
                    : <Register setShowModel={setShowModel} setIsLogin={setIsLogin} />
            }
        </>
    )
}

export default Model
