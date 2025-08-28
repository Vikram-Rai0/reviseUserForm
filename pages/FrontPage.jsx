import React from 'react'
import { Link } from 'react-router-dom'
const FrontPage = () => {
    return (
        <div>
            <h1>this is front page</h1>
            <Link to="/login"><button>login</button></Link>
        </div>
    )
}

export default FrontPage
