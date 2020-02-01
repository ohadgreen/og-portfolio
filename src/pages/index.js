import React from "react"
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <p>I am Ohad, Web developer and owner of two lovely dogs</p>
            <p>This is my <Link to="/blog">blog</Link></p>
        </div>
    )
}

export default IndexPage;
